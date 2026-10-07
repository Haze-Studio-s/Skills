# Operações Duráveis, Idempotência e Prevenção de Duplicação

Sistemas econômicos de alta criticidade (recompensas de facção, pagamentos de assaltos, transações de veículos, apostas e compras) sofrem frequentemente de **duplicação de itens ou dinheiro** devido a:
1. Replays maliciosos de pacotes de rede.
2. Lag ou desconexão do jogador enquanto a transação está no meio.
3. Restart abrupto do servidor ou crash durante a execução.
4. "Blind Retries" (retentativas cegas sem conferir o estado anterior).

---

## 1. Princípio da Idempotência com `op_id`

Toda operação de concessão de valor deve possuir um **Identificador Único de Operação (`op_id`)**.
Se a mesma requisição chegar duas vezes (por delay de rede ou tentativa de abuso), a segunda é simplesmente ignorada ou retorna o resultado já processado.

### Ciclo Durável:
1. **Autoridade & Posse:** Validação de quem é o dono do processo.
2. **Registro de Intenção:** Salva no banco de dados o `op_id` com status `PENDING` antes de aplicar qualquer alteração real.
3. **Execução:** Executa o débito ou crédito.
4. **Resolução:** Se a etapa concluir, atualiza para `COMPLETED`. Se falhar, executa rollback e marca `FAILED`.
5. **Recuperação no Boot:** Se o servidor reiniciar e encontrar operações `PENDING`, ele não tenta refazer cegamente; ele investiga o estado dos inventários para finalizar ou anular.

---

## 2. Implementação com MySQL / MariaDB

```sql
CREATE TABLE IF NOT EXISTS durable_operations (
    op_id VARCHAR(64) PRIMARY KEY,
    citizenid VARCHAR(64) NOT NULL,
    action_type VARCHAR(32) NOT NULL,
    status ENUM('PENDING', 'COMPLETED', 'FAILED') NOT NULL DEFAULT 'PENDING',
    payload JSON NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_citizenid (citizenid),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

## 3. Padrão Lua para Pagamento Seguro

```lua
local function processarRecompensaDuravel(source, actionType, valor, callbackSucesso)
    local player = exports.qbx_core:GetPlayer(source)
    if not player then return false end
    local citizenid = player.PlayerData.citizenid

    -- Gerar identificador único combinando citizenid, tipo de ação e timestamp
    local opId = string.format('%s_%s_%d', citizenid, actionType, os.time())

    -- Tentar registrar intenção durável (chave primária impede duplicatas idênticas)
    local inserido = pcall(function()
        return MySQL.insert.await('INSERT INTO durable_operations (op_id, citizenid, action_type, status) VALUES (?, ?, ?, ?)', {
            opId, citizenid, actionType, 'PENDING'
        })
    end)

    if not inserido then
        Security.LogSuspicious(source, actionType, 'Tentativa de reexecução de operação idêntica (Replay): ' .. opId)
        return false
    end

    -- Executar a concessão
    local creditou = exports.qbx_core:AddMoney(source, 'bank', valor, actionType)
    
    if creditou then
        MySQL.update.await('UPDATE durable_operations SET status = ? WHERE op_id = ?', { 'COMPLETED', opId })
        if callbackSucesso then callbackSucesso() end
        return true
    else
        MySQL.update.await('UPDATE durable_operations SET status = ? WHERE op_id = ?', { 'FAILED', opId })
        return false
    end
end
```

---

## 4. O Anti-Padrão do "Blind Retry" (KF-001)

- **Falha Conhecida:** O servidor manda adicionar o item no inventário via export. A resposta demora por conta de I/O em disco. O script dá timeout e tenta de novo. O jogador recebe 2x o item.
- **Invariante:** Nunca realize novas tentativas cegas de entrega de bens. Em caso de resposta ambígua ou timeout, entre em modo de **verificação/reconciliação** (`recovery`), consultando se o `op_id` ou os metadados já foram inseridos no inventário antes de emitir qualquer nova concessão.

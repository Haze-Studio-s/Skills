# Referência Técnica: Banco de Dados com `oxmysql`

O `oxmysql` é a biblioteca padrão e de maior performance para comunicação assíncrona entre o servidor FiveM (Lua 5.4) e servidores MySQL / MariaDB.

---

## 1. Configuração e Inicialização

No `fxmanifest.lua` em `server_scripts`:
```lua
server_scripts {
    '@oxmysql/lib/MySQL.lua', -- SEMPRE o primeiro arquivo da lista se usar DB
    'server/database.lua',
    'server/main.lua'
}
```

---

## 2. Padrões de Consulta com `.await`

> ⚠️ **Regra Fundamental de Runtime:** Métodos `.await` do `oxmysql` só podem ser chamados dentro de coroutines (`CreateThread` ou callbacks assíncronos como `lib.callback.register`). Se chamados no corpo principal de carregamento do arquivo, a execução falha silenciosamente.

### Consultas Simples e Múltiplas:
```lua
-- Buscar uma única linha (Single Row)
local player = MySQL.single.await('SELECT citizenid, name, money FROM players WHERE citizenid = ?', {
    citizenid
})
if player then
    print(player.name, player.money)
end

-- Buscar um único valor escalar (Scalar)
local totalVeiculos = MySQL.scalar.await('SELECT COUNT(1) FROM player_vehicles WHERE citizenid = ?', {
    citizenid
})

-- Buscar múltiplas linhas (Raw Query)
local garagens = MySQL.query.await('SELECT id, name, capacity FROM garages WHERE state = ?', {
    1
})
for i = 1, #garagens do
    print(garagens[i].name)
end

-- Inserção retornando o ID auto-incremento (Insert)
local insertId = MySQL.insert.await('INSERT INTO player_notes (citizenid, note) VALUES (?, ?)', {
    citizenid, 'Nota de advertência'
})

-- Atualização / Deleção retornando linhas afetadas (Update)
local rowsChanged = MySQL.update.await('UPDATE player_vehicles SET state = ? WHERE plate = ?', {
    0, 'ABC1234'
})
```

---

## 3. Transações Atômicas (`MySQL.transaction.await`)

Em operações onde duas ou mais tabelas devem ser alteradas simultaneamente (ex: transferências bancárias, compras de veículos ou troca de propriedades), **utilize obrigatoriamente transações**:

```lua
local function transferirDinheiro(remetenteId, destinatarioId, valor)
    local operacoes = {
        {
            query = 'UPDATE player_accounts SET balance = balance - ? WHERE id = ? AND balance >= ?',
            values = { valor, remetenteId, valor }
        },
        {
            query = 'UPDATE player_accounts SET balance = balance + ? WHERE id = ?',
            values = { valor, destinatarioId }
        },
        {
            query = 'INSERT INTO transaction_logs (from_id, to_id, amount) VALUES (?, ?, ?)',
            values = { remetenteId, destinatarioId, valor }
        }
    }

    local sucesso = MySQL.transaction.await(operacoes)
    return sucesso -- Retorna true se todas as queries foram executadas; caso contrário, executa ROLLBACK automático.
end
```

---

## 4. Padrão de Auto-Schema Idempotente no Boot

Para evitar a necessidade de o administrador importar manualmente arquivos `.sql`, todo resource moderno deve conter um método auto-executável no boot dentro de `CreateThread`:

```lua
-- server/database.lua
local DB = {}

function DB.ensureSchema()
    MySQL.query.await([[
        CREATE TABLE IF NOT EXISTS fivem_custom_garages (
            id INT AUTO_INCREMENT PRIMARY KEY,
            citizenid VARCHAR(64) NOT NULL,
            plate VARCHAR(12) NOT NULL UNIQUE,
            garage_id VARCHAR(32) NOT NULL DEFAULT 'legion',
            stored TINYINT(1) NOT NULL DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_citizenid (citizenid),
            INDEX idx_plate (plate)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ]])

    -- Adicionar colunas de migrações futuras com tolerância a erro
    pcall(function()
        MySQL.query.await('ALTER TABLE fivem_custom_garages ADD COLUMN custom_metadata JSON NULL')
    end)
end

-- Execução no boot
CreateThread(function()
    DB.ensureSchema()
    print('^2[DATABASE] Schema sincronizado com sucesso!^7')
end)

return DB
```

---

## 5. Regras de Performance no Banco
1. **Nunca use `SELECT *` em rotas quentes:** Selecione apenas as colunas que serão realmente manipuladas.
2. **Crie Índices (`INDEX`):** Sempre crie índices em colunas utilizadas em cláusulas `WHERE`, `JOIN` ou `ORDER BY` frequentes (ex: `citizenid`, `plate`, `identifier`).
3. **Evite o problema N+1:** Nunca execute queries dentro de loops de iteração de jogadores ou itens; utilize `JOIN` ou operadores `IN (?, ?, ?)`.

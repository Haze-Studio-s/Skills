# Checklist de Auditoria 4D e Validação Pré-Deploy (Precheck)

Este guia define o protocolo rigoroso que deve ser executado para auditar um script existente ou validar um resource antes de colocá-lo em produção ou reiniciar (`ensure`).

---

## 1. Auditoria em 4 Dimensões

### Dimensão 1: Performance (Resmon & Recursos)
- [ ] **Zero Loops Sem Wait:** Todas as threads com `while true do` contêm pelo menos um `Wait(...)`.
- [ ] **Wait Adaptativo:** Threads de checagem utilizam `Wait(500)` ou `Wait(2000)` quando o jogador está distante.
- [ ] **Substituição de Natives de Distância:** Sem `GetDistanceBetweenCoords`; utilização de `#(a - b)`.
- [ ] **Cache do ox_lib:** Utilização de `cache.ped`, `cache.vehicle` e `cache.coords` no lugar de `PlayerPedId()`.
- [ ] **Alvo de Resmon:**
  - `< 0.05ms` em repouso (idle).
  - `< 0.10ms` em interação ativa.

### Dimensão 2: Segurança e Anti-Exploit
- [ ] **Validação de Source:** Todo `RegisterNetEvent` valida `Security.IsValidSource(source)`.
- [ ] **Preços e Quantidades no Servidor:** O cliente nunca dita quanto dinheiro ganha ou perde.
- [ ] **Rate Limiting:** Ações com transações monetárias possuem cooldowns configurados.
- [ ] **Checagem de Distância no Servidor:** `Security.IsPlayerNearCoords` aplicado em todas as interações de NPC/Lojas.
- [ ] **Padrão Fail-Closed:** Remoção de item ou cobrança efetuada estritamente antes da concessão de recompensas.

### Dimensão 3: Integridade do Código & Runtime
- [ ] **Lua 5.4 Ativo:** `fxmanifest.lua` contém `lua54 'yes'`.
- [ ] **Variáveis Locais:** Nenhuma variável global acidental vazando escopo (`local` em tudo).
- [ ] **Sem Handlers Recorrentes:** `AddEventHandler` nunca é chamado repetidamente dentro de loops ou funções frequentes (causa grave de vazamento de memória).

### Dimensão 4: Banco de Dados (oxmysql)
- [ ] **Prepared Statements:** Nenhuma concatenação direta de strings SQL (`..`); uso estrito de `?`.
- [ ] **Coroutines para `.await`:** Todos os métodos `MySQL.*.await` estão contidos dentro de `CreateThread` ou callbacks.
- [ ] **Índices de Chave:** Colunas `citizenid`, `plate`, `identifier` possuem índices definidos.
- [ ] **Transações em Mutações Múltiplas:** Uso de `MySQL.transaction.await` onde aplicável.

---

## 2. Validação Rápida Pré-Deploy (`Precheck`)

Antes de rodar `ensure <resource>` no console:

1. **Validação do Manifesto (`fxmanifest.lua`):**
   - Versão do manifesto definida: `fx_version 'cerulean'`, `game 'gta5'`.
   - Todos os arquivos listados em `shared_scripts`, `client_scripts`, `server_scripts` e `files` existem no disco.
   - Ordem correta de scripts: `@ox_lib/init.lua` é o primeiro em `shared_scripts`; `@oxmysql/lib/MySQL.lua` é o primeiro em `server_scripts`.
2. **Dependências:**
   - Recursos listados em `dependencies` estão presentes na pasta `resources/` do servidor.
3. **Strings e Locales:**
   - Se o script usa `locales/`, certifique-se de que o arquivo correspondente ao idioma padrão existe e tem sintaxe JSON/Lua válida.

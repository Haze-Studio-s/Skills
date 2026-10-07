# Índice Técnico da Skill FiveM Developer

Este documento consolida o índice de navegação e busca rápida de todos os padrões, frameworks e componentes técnicos da Skill **FiveM Developer**.

---

## 🗂️ Estrutura da Base de Conhecimento

```text
fivem-developer/
├── SKILL.md                                        # Arquivo mestre com doutrina e ativação
├── INDEX.md                                        # Índice técnico e catálogo de recursos
└── references/
    ├── frameworks/
    │   ├── qbox.md                                 # Framework QBox (qbx_core)
    │   ├── qbcore.md                               # Framework QBCore (qb-core)
    │   ├── ox-ecosystem.md                         # Ecossistema Overextended (ox_lib, ox_inventory, ox_target)
    │   └── esx-legacy.md                           # Framework ESX Legacy e padrões de compatibilidade
    ├── natives/
    │   └── cfx-natives-guide.md                    # Natives essenciais CitizenFX e boas práticas de runtime
    ├── client-server/
    │   ├── architecture-and-doctrine.md            # Arquitetura de rede, autoridade do server e minimal diff
    │   └── statebags-and-onesync.md                # OneSync Infinity e State Bags autoritativas
    ├── nui/
    │   ├── nui-patterns.md                         # Interfaces CEF, HTML5, CSS3 GPU, JS, e segurança de callbacks
    │   └── fivem-nui-lation/                       # Skill irmã: Padrão Lation Modern UI (Emerald Edition)
    ├── database/
    │   └── oxmysql-database-patterns.md            # oxmysql, transações atômicas, prepared statements e auto-schema
    ├── security/
    │   ├── hardening-and-anticheat.md              # Proteção de NetEvents, rate limiting, anti-spoofing e validações
    │   └── durable-operations-idempotency.md       # Idempotência (op_id), anti-duplicação, tolerância a restart
    └── examples/
        ├── resource-scaffolding.md                 # Scaffold completo de resource moderno (fxmanifest, config, lua54)
        ├── callbacks-and-events.md                 # Exemplos de lib.callback e eventos bidirecionais seguros
        ├── inventory-integration.md                # Manipulação de itens, metadata e padrão fail-closed no ox_inventory
        └── audit-and-precheck.md                   # Checklist de pré-validação (ensure) e auditoria 4D
```

---

## 🔍 Tabela Rápida de Correspondência de APIs

| Funcionalidade | Padrão QBox / ox (Moderno) | Padrão QBCore Tradicional | Padrão ESX Legacy |
| :--- | :--- | :--- | :--- |
| **Obter Jogador** | `exports.qbx_core:GetPlayer(source)` | `QBCore.Functions.GetPlayer(source)` | `ESX.GetPlayerFromId(source)` |
| **Callbacks** | `lib.callback.register` / `lib.callback.await` | `QBCore.Functions.CreateCallback` | `ESX.RegisterServerCallback` |
| **Notificações** | `lib.notify({ title = '', type = '' })` | `TriggerClientEvent('QBCore:Notify', ...)` | `ESX.ShowNotification(...)` |
| **Inventário** | `exports.ox_inventory:AddItem(...)` | `Player.Functions.AddItem(...)` | `xPlayer.addInventoryItem(...)` |
| **Interações / Mira** | `exports.ox_target:addBoxZone(...)` | `exports['qb-target']:AddBoxZone(...)` | `ox_target` / Marker em Loop |
| **Progress Bar** | `lib.progressBar(...)` | `QBCore.Functions.Progressbar(...)` | `lib.progressBar` |
| **Banco de Dados** | `MySQL.query.await` / `MySQL.transaction.await` | `MySQL.query.await` | `MySQL.Async.fetchAll` (legado) |
| **Distância 3D** | `#(vector3(a) - vector3(b))` | `#(vector3(a) - vector3(b))` | `GetDistanceBetweenCoords` (descontinuado) |
| **Cache de Entidade** | `cache.ped`, `cache.vehicle`, `cache.coords` | `PlayerPedId()` (repetitivo) | `PlayerPedId()` |

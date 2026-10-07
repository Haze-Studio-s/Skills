# Exemplo: Scaffolding Completo de Resource Moderno

Este modelo apresenta a estrutura canônica de um resource FiveM production-ready, pronto para QBox ou QBCore com `ox_lib`, `ox_inventory`, `oxmysql` e Lua 5.4.

---

## 1. Estrutura de Arquivos

```text
meu_resource/
├── fxmanifest.lua
├── config.lua
├── shared/
│   └── utils.lua
├── client/
│   ├── main.lua
│   └── interactions.lua
└── server/
    ├── main.lua
    ├── security.lua
    └── database.lua
```

---

## 2. `fxmanifest.lua`

```lua
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

name 'meu_resource'
author 'SeuNome'
version '1.0.0'
description 'Sistema moderno de exemplo para FiveM'

dependencies {
    'ox_lib',
    'ox_inventory',
    'qbx_core',
    'oxmysql'
}

shared_scripts {
    '@ox_lib/init.lua',
    'config.lua',
    'shared/*.lua'
}

client_scripts {
    'client/*.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/database.lua',
    'server/security.lua',
    'server/main.lua'
}
```

---

## 3. `config.lua`

```lua
Config = {}

Config.Debug = false

-- Localização principal
Config.PontoInteracao = vector3(215.76, -810.12, 30.73)
Config.DistanciaInteracao = 2.5

-- Cooldowns para prevenção de spam (em milissegundos)
Config.Cooldowns = {
    interagir = 2000,
    solicitarPagamento = 5000
}

-- Itens e valores
Config.PrecoTaxa = 150
Config.ItemRecompensa = 'iron_ingot'
```

---

## 4. `shared/utils.lua`

```lua
Utils = {}

--- Formata valor em moeda (pt-BR)
function Utils.FormatarMoeda(valor)
    local formatado = tostring(math.floor(valor)):reverse():gsub('(%d%d%d)', '%1.'):reverse()
    if formatado:sub(1, 1) == '.' then formatado = formatado:sub(2) end
    return 'R$ ' .. formatado
end
```

---

## 5. `client/main.lua`

```lua
local function iniciarPonto()
    exports.ox_target:addBoxZone({
        coords = Config.PontoInteracao,
        size = vector3(1.5, 1.5, 2.0),
        rotation = 0.0,
        options = {
            {
                name = 'interagir_ponto',
                icon = 'fas fa-hand-holding-usd',
                label = 'Receber Recompensa',
                distance = Config.DistanciaInteracao,
                onSelect = function()
                    local sucesso = lib.progressBar({
                        duration = 3000,
                        label = 'Processando solicitação...',
                        useWhileDead = false,
                        canCancel = true,
                        disable = { car = true, move = true },
                        anim = { dict = 'mp_common', clip = 'givetake2_a' }
                    })

                    if sucesso then
                        TriggerServerEvent('meu_resource:server:solicitarRecompensa')
                    end
                end
            }
        }
    })
end

CreateThread(function()
    iniciarPonto()
end)
```

---

## 6. `server/main.lua`

```lua
RegisterNetEvent('meu_resource:server:solicitarRecompensa', function()
    local src = source
    if not Security.IsValidSource(src) then return end

    if Security.IsOnCooldown(src, 'recompensa', Config.Cooldowns.solicitarPagamento) then
        Security.LogSuspicious(src, 'recompensa', 'Tentativa de requisição em cooldown')
        return
    end

    if not Security.IsPlayerNearCoords(src, Config.PontoInteracao, Config.DistanciaInteracao + 1.5) then
        Security.LogSuspicious(src, 'recompensa', 'Fora do alcance de interação')
        return
    end

    -- Padrão Fail-Closed: entrega o item com segurança
    local entregou = exports.ox_inventory:AddItem(src, Config.ItemRecompensa, 1)
    if entregou then
        TriggerClientEvent('ox_lib:notify', src, {
            title = 'Sucesso',
            description = 'Você recebeu ' .. Config.ItemRecompensa .. '!',
            type = 'success'
        })
    else
        TriggerClientEvent('ox_lib:notify', src, {
            title = 'Mochila Cheia',
            description = 'Espaço insuficiente para carregar o item.',
            type = 'error'
        })
    end
end)
```

# Referência Técnica: ESX Legacy & Padrões de Compatibilidade

O **ESX Legacy** é a versão mantida e moderna do antigo EssentialMode / ESX. Quando um projeto exigir suporte ou ponte (bridge) com ESX Legacy, utilize esta referência.

---

## 1. Inicialização

No `fxmanifest.lua`:
```lua
shared_scripts {
    '@es_extended/imports.lua', -- Versões modernas do Legacy usam import automático
    'config.lua',
}
```

No Lua (client e server):
```lua
local ESX = exports['es_extended']:getSharedObject()
```

---

## 2. Manipulação de Player (Server-Side)

```lua
-- Obter jogador estendido
local xPlayer = ESX.GetPlayerFromId(source)
if not xPlayer then return end

-- Dados principais
local identifier = xPlayer.identifier
local name = xPlayer.getName()
local job = xPlayer.getJob() -- job.name, job.grade, job.label

-- Contas financeiras
local bankMoney = xPlayer.getAccount('bank').money
local blackMoney = xPlayer.getAccount('black_money').money

xPlayer.addMoney(100) -- Dinheiro em mãos
xPlayer.removeMoney(50)
xPlayer.addAccountMoney('bank', 500)
xPlayer.removeAccountMoney('bank', 250)

-- Itens de inventário
local item = xPlayer.getInventoryItem('bread')
if item and item.count >= 1 then
    xPlayer.removeInventoryItem('bread', 1)
end
```

---

## 3. Callbacks do ESX

```lua
-- Server: Registrar Callback
ESX.RegisterServerCallback('meu_resource:obterDados', function(source, cb, arg1)
    local xPlayer = ESX.GetPlayerFromId(source)
    if not xPlayer then return cb(nil) end
    cb({ saldo = xPlayer.getMoney() })
end)

-- Client: Disparar Callback
ESX.TriggerServerCallback('meu_resource:obterDados', function(resultado)
    if resultado then
        print('Saldo recebido:', resultado.saldo)
    end
end, 'param')
```

---

## 4. Camada de Ponte (Bridge Pattern Multi-Framework)

Ao criar scripts que precisam rodar tanto em **QBox/QBCore** quanto em **ESX**, crie um arquivo isolado `shared/bridge.lua`:

```lua
-- shared/bridge.lua
Bridge = {}

if GetResourceState('qbx_core') == 'started' then
    Bridge.Framework = 'qbx'
    Bridge.GetPlayer = function(source)
        return exports.qbx_core:GetPlayer(source)
    end
    Bridge.GetIdentifier = function(source)
        local p = exports.qbx_core:GetPlayer(source)
        return p and p.PlayerData.citizenid
    end
elseif GetResourceState('qb-core') == 'started' then
    Bridge.Framework = 'qb'
    local QBCore = exports['qb-core']:GetCoreObject()
    Bridge.GetPlayer = function(source)
        return QBCore.Functions.GetPlayer(source)
    end
    Bridge.GetIdentifier = function(source)
        local p = QBCore.Functions.GetPlayer(source)
        return p and p.PlayerData.citizenid
    end
elseif GetResourceState('es_extended') == 'started' then
    Bridge.Framework = 'esx'
    local ESX = exports['es_extended']:getSharedObject()
    Bridge.GetPlayer = function(source)
        return ESX.GetPlayerFromId(source)
    end
    Bridge.GetIdentifier = function(source)
        local p = ESX.GetPlayerFromId(source)
        return p and p.identifier
    end
end
```
Desta forma a lógica do resource não fica poluída com condicionais espalhados.

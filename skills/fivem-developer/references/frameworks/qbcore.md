# Referência Técnica: QBCore Framework (`qb-core`)

O **QBCore** tradicional é um dos frameworks mais difundidos para FiveM. Ao trabalhar em scripts baseados no QBCore tradicional, respeite suas convenções preservando compatibilidade.

---

## 1. Inicialização

No `fxmanifest.lua`:
```lua
shared_scripts {
    '@qb-core/shared/locale.lua',
    'locales/en.lua',
    'config.lua',
}
```

No Lua (client e server):
```lua
local QBCore = exports['qb-core']:GetCoreObject()
```

---

## 2. Manipulação de Player (Server-Side)

```lua
-- Obter jogador
local Player = QBCore.Functions.GetPlayer(source)
if not Player then return end

-- Dados principais
local citizenid = Player.PlayerData.citizenid
local charinfo = Player.PlayerData.charinfo
local fullname = charinfo.firstname .. ' ' .. charinfo.lastname
local job = Player.PlayerData.job
local gang = Player.PlayerData.gang

-- Dinheiro
local cash = Player.PlayerData.money['cash']
local bank = Player.PlayerData.money['bank']

-- Adicionar / Remover dinheiro
Player.Functions.AddMoney('cash', 100, 'recompensa-missao')
Player.Functions.RemoveMoney('bank', 250, 'pagamento-aluguel')

-- Obter jogador por CitizenId ou Telefone
local target = QBCore.Functions.GetPlayerByCitizenId(citizenid)
local byPhone = QBCore.Functions.GetPlayerByPhone(charinfo.phone)
```

---

## 3. Callbacks Tradicionais do QBCore

```lua
-- Server: Registrar Callback
QBCore.Functions.CreateCallback('meu_resource:server:obterDados', function(source, cb, parametro)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player then return cb(nil) end
    cb({ saldo = Player.PlayerData.money.bank, cargo = Player.PlayerData.job.grade.name })
end)

-- Client: Disparar Callback
QBCore.Functions.TriggerCallback('meu_resource:server:obterDados', function(dados)
    if dados then
        print('Saldo recebido:', dados.saldo)
    end
end, 'parametro_opcional')
```
*(Nota de modernização: Em resources novos ou híbridos, prefira migrar para `lib.callback` do ox_lib para eliminar callbacks aninhados usando `.await`).*

---

## 4. Gerenciamento de Itens (qb-inventory nativo)

Se o servidor utilizar o inventário padrão do QBCore (em vez do ox_inventory):

```lua
-- Server: Adicionar item
Player.Functions.AddItem('water_bottle', 2, false, { quality = 100 })
TriggerClientEvent('inventory:client:ItemBox', source, QBCore.Shared.Items['water_bottle'], 'add')

-- Server: Remover item
local hasItem = Player.Functions.GetItemByName('lockpick')
if hasItem and hasItem.amount >= 1 then
    Player.Functions.RemoveItem('lockpick', 1)
    TriggerClientEvent('inventory:client:ItemBox', source, QBCore.Shared.Items['lockpick'], 'remove')
end
```

---

## 5. Eventos de Ciclo de Vida do Player (Client-Side)

```lua
RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
    local PlayerData = QBCore.Functions.GetPlayerData()
    -- Inicializar threads e zonas do jogador
end)

RegisterNetEvent('QBCore:Client:OnPlayerUnload', function()
    -- Limpar entidades, zonas e estados
end)

RegisterNetEvent('QBCore:Client:OnJobUpdate', function(JobInfo)
    -- Atualizar referências locais de trabalho
end)
```

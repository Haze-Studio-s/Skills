# Referência Técnica: QBox Framework (`qbx_core`)

O **QBox** é um ecossistema modular moderno construído em cima dos princípios do QBCore e ox, com foco em performance, tipagem, OneSync e desacoplamento.

---

## 1. Importação e Inicialização

No `fxmanifest.lua`:
```lua
dependencies {
    'ox_lib',
    'qbx_core',
    'ox_inventory'
}

shared_scripts {
    '@ox_lib/init.lua',
    'config.lua',
}
```

No Lua (server-side):
```lua
local QBX = exports.qbx_core
```

---

## 2. Manipulação de Jogador (Server-Side)

```lua
-- Obter objeto de jogador pelo source
local player = exports.qbx_core:GetPlayer(source)
if not player then return end

-- Dados essenciais
local citizenid = player.PlayerData.citizenid
local charName = player.PlayerData.charinfo.firstname .. ' ' .. player.PlayerData.charinfo.lastname
local jobName = player.PlayerData.job.name
local jobGrade = player.PlayerData.job.grade.level
local isDuty = player.PlayerData.job.onduty
local gangName = player.PlayerData.gang.name

-- Obter jogador pelo CitizenID (offline ou online)
local targetPlayer = exports.qbx_core:GetPlayerByCitizenId(citizenid)

-- Gestão financeira autoritativa
-- Parâmetros: source, accountType ('cash', 'bank', 'crypto'), amount, reason
local hasCash = exports.qbx_core:GetMoney(source, 'cash')
if hasCash >= 500 then
    local removed = exports.qbx_core:RemoveMoney(source, 'cash', 500, 'compra-loja')
    if removed then
        exports.qbx_core:AddMoney(source, 'bank', 500, 'deposito-automatico')
    end
end
```

---

## 3. Client-Side Player Data

No client-side, o QBox se integra diretamente com o cache e eventos do ox_lib e do qbx:

```lua
-- Obter dados atuais do jogador local
local PlayerData = QBX:GetPlayerData() or exports.qbx_core:GetPlayerData()

-- Escutar atualizações de job ou dados
RegisterNetEvent('QBCore:Client:OnJobUpdate', function(JobInfo)
    PlayerData.job = JobInfo
end)

RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
    PlayerData = exports.qbx_core:GetPlayerData()
end)

RegisterNetEvent('QBCore:Client:OnPlayerUnload', function()
    PlayerData = {}
end)
```

---

## 4. Grupos e Permissões

```lua
-- Checar se o jogador possui permissão administrativa
local hasPerm = exports.qbx_core:HasPermission(source, 'admin')

-- Checar grupo/job específico
local isPolice = exports.qbx_core:GetPlayer(source).PlayerData.job.name == 'police'
```

---

## 5. Boas Práticas QBox
- Nunca use chamadas `QBCore:Notify`; use `lib.notify` diretamente ou `TriggerClientEvent('ox_lib:notify', source, ...)`.
- Utilize `exports.qbx_core` em vez de chamar eventos síncronos legados.
- Para inventário com QBox, a integração padrão é sempre **ox_inventory**.

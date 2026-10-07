# Blindagem e Anti-Exploit de Recursos FiveM

Este documento detalha os vetores de ataque mais comuns explorados por executores de script e cheaters no FiveM, e a implementação prática de blindagem server-side.

---

## 1. Modelo de Ameaça

No FiveM, um atacante com executor de scripts pode:
1. Disparar qualquer `RegisterNetEvent` a qualquer momento, mesmo que não haja interface ou NPC aberto.
2. Injetar parâmetros arbitrários: números negativos, strings com injeção SQL, quantidades astronômicas.
3. Falsificar coordenadas enviadas por parâmetros de eventos.
4. Burlar cooldowns gerenciados apenas no cliente.
5. Manipular o `source` se o evento utilizar parâmetros manuais de ID.

---

## 2. Padrão `server/security.lua` Reutilizável

Todo resource deve incluir um utilitário de segurança:

```lua
-- server/security.lua
Security = {}

local cooldowns = {}

--- Valida se o source emitente é um jogador ativo e conectado
function Security.IsValidSource(src)
    if not src or type(src) ~= 'number' or src <= 0 then return false end
    return GetPlayerPing(src) > 0
end

--- Rate-limiting por jogador e por ação
function Security.IsOnCooldown(src, action, durationMs)
    if not cooldowns[src] then cooldowns[src] = {} end
    local now = GetGameTimer()
    local last = cooldowns[src][action] or 0
    if (now - last) < durationMs then
        return true
    end
    cooldowns[src][action] = now
    return false
end

--- Limpa cooldowns quando o jogador desconecta
AddEventHandler('playerDropped', function()
    cooldowns[source] = nil
end)

--- Validação de proximidade autoritativa no servidor
function Security.IsPlayerNearCoords(src, targetCoords, maxDistance)
    local ped = GetPlayerPed(src)
    if not DoesEntityExist(ped) then return false end
    local playerCoords = GetEntityCoords(ped)
    return #(playerCoords - targetCoords) <= (maxDistance or 5.0)
end

--- Validação rigorosa de inteiros positivos
function Security.ValidateInteger(src, value, actionName, maxLimit)
    if type(value) ~= 'number' then
        Security.LogSuspicious(src, actionName, 'Tipo inválido: ' .. type(value))
        return false
    end
    if value <= 0 or value > (maxLimit or 1000000) then
        Security.LogSuspicious(src, actionName, 'Valor fora dos limites: ' .. tostring(value))
        return false
    end
    if value ~= math.floor(value) then
        Security.LogSuspicious(src, actionName, 'Tentativa de injeção decimal: ' .. tostring(value))
        return false
    end
    return true
end

--- Log de atividade suspeita (Webhook ou console de auditoria)
function Security.LogSuspicious(src, action, reason)
    local name = GetPlayerName(src) or 'Desconhecido'
    local ped = GetPlayerPed(src)
    local coords = DoesEntityExist(ped) and GetEntityCoords(ped) or vector3(0,0,0)
    print(string.format('^1[SECURITY ALERTA] Player %s (ID %s) | Ação: %s | Motivo: %s | Coords: %s^7', name, src, action, reason, coords))
end

return Security
```

---

## 3. Exemplo de Implementação de Evento Seguro

### ❌ Evento Vulnerável:
```lua
-- O cheater dispara shop:buyItem com amount = 10000 e price = -99999
RegisterNetEvent('shop:buyItem', function(item, amount, price)
    local src = source
    Player.Functions.AddMoney('cash', -price)
    Player.Functions.AddItem(item, amount)
end)
```

### ✅ Evento Blindado e Fail-Closed:
```lua
RegisterNetEvent('shop:buyItem', function(itemId, amount)
    local src = source
    
    -- 1. Validar source
    if not Security.IsValidSource(src) then return end

    -- 2. Rate limit (cooldown)
    if Security.IsOnCooldown(src, 'shop_buy', 1500) then
        Security.LogSuspicious(src, 'shop_buy', 'Spam/Rate limit atingido')
        return
    end

    -- 3. Validar proximidade autoritativa
    if not Security.IsPlayerNearCoords(src, Config.ShopLocation, 3.5) then
        Security.LogSuspicious(src, 'shop_buy', 'Disparo de evento fora da distância da loja')
        return
    end

    -- 4. Validar quantidade inteira
    if not Security.ValidateInteger(src, amount, 'shop_buy', 50) then return end

    -- 5. Validar catálogo no servidor (preço vem do Config do SERVER, nunca do client)
    local itemCfg = Config.Items[itemId]
    if not itemCfg then
        Security.LogSuspicious(src, 'shop_buy', 'Tentativa de comprar item inexistente: ' .. tostring(itemId))
        return
    end

    local totalPrice = itemCfg.price * amount
    local player = exports.qbx_core:GetPlayer(src)
    if not player or player.PlayerData.money.cash < totalPrice then
        TriggerClientEvent('ox_lib:notify', src, { title = 'Erro', description = 'Saldo insuficiente.', type = 'error' })
        return
    end

    -- 6. Padrão Fail-Closed: Remove dinheiro primeiro
    local cobrou = exports.qbx_core:RemoveMoney(src, 'cash', totalPrice, 'compra-loja')
    if not cobrou then return end

    -- 7. Concede o item
    local entregou = exports.ox_inventory:AddItem(src, itemId, amount)
    if not entregou then
        -- Rollback garantido se a mochila estiver cheia
        exports.qbx_core:AddMoney(src, 'cash', totalPrice, 'rollback-compra')
        TriggerClientEvent('ox_lib:notify', src, { title = 'Mochila Cheia', description = 'Você não tem espaço para carregar estes itens.', type = 'error' })
        return
    end

    TriggerClientEvent('ox_lib:notify', src, { title = 'Loja', description = 'Compra realizada com sucesso!', type = 'success' })
end)
```

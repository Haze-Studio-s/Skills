# Exemplo: Callbacks Bidirecionais e Eventos de Rede

Este manual ilustra como estruturar chamadas cliente-servidor e servidor-cliente com a biblioteca `ox_lib`.

---

## 1. Client chamando Server com `lib.callback.await`

Elimina a necessidade de registrar dois eventos (`TriggerServerEvent` + `RegisterNetEvent`) para obter uma resposta síncrona.

### Server (`server/main.lua`):
```lua
lib.callback.register('garagem:obterVeiculos', function(source, garagemId)
    if not Security.IsValidSource(source) then return {} end
    
    local player = exports.qbx_core:GetPlayer(source)
    if not player then return {} end

    local citizenid = player.PlayerData.citizenid

    local veiculos = MySQL.query.await([[
        SELECT plate, vehicle, garage, state, fuel, body, engine 
        FROM player_vehicles 
        WHERE citizenid = ? AND garage = ?
    ]], { citizenid, garagemId })

    return veiculos or {}
end)
```

### Client (`client/main.lua`):
```lua
local function abrirMenuGaragem(garagemId)
    -- O segundo parâmetro 'false' define que não há delay artificial de timeout
    local listaVeiculos = lib.callback.await('garagem:obterVeiculos', false, garagemId)
    
    if #listaVeiculos == 0 then
        lib.notify({ title = 'Garagem', description = 'Nenhum veículo guardado aqui.', type = 'info' })
        return
    end

    local opcoes = {}
    for _, v in ipairs(listaVeiculos) do
        table.insert(opcoes, {
            title = v.plate,
            description = string.format('Combustível: %d%% | Motor: %d%%', math.floor(v.fuel or 100), math.floor(v.engine / 10)),
            onSelect = function()
                retirarVeiculo(v.plate)
            end
        })
    end

    lib.registerContext({
        id = 'menu_garagem_veiculos',
        title = 'Garagem ' .. garagemId,
        options = opcoes
    })

    lib.showContext('menu_garagem_veiculos')
end
```

---

## 2. Server chamando Client com `lib.callback.await`

Útil para quando o servidor precisa consultar um dado de exibição exclusivo do cliente (ex: confirmação via caixa de diálogo na tela):

### Server:
```lua
local function solicitarConfirmacaoAoJogador(source, mensagem)
    local confirmou = lib.callback.await('core:exibirConfirmacao', source, mensagem)
    return confirmou == true
end
```

### Client:
```lua
lib.callback.register('core:exibirConfirmacao', function(mensagem)
    local alert = lib.alertDialog({
        header = 'Confirmação',
        content = mensagem,
        centered = true,
        cancel = true
    })
    return alert == 'confirm'
end)
```

---

## 3. Disparo Seguro de NetEvents sem Ping-Pong

Quando um evento de rede não precisa de retorno de dados, utilize NetEvents regulares, mas sempre com validação de `source` no primeiro comando:

```lua
RegisterNetEvent('policia:server:algemarAlvo', function(targetServerId)
    local src = source
    if not Security.IsValidSource(src) then return end
    if not Security.IsValidSource(targetServerId) then return end

    -- Validar se quem enviou é policial
    local player = exports.qbx_core:GetPlayer(src)
    if not player or player.PlayerData.job.name ~= 'police' then
        Security.LogSuspicious(src, 'algemar', 'Tentativa de algemar sem ter job de policia')
        return
    end

    -- Validar distância física entre os dois no servidor
    local coordsA = GetEntityCoords(GetPlayerPed(src))
    local coordsB = GetEntityCoords(GetPlayerPed(targetServerId))
    if #(coordsA - coordsB) > 3.0 then
        Security.LogSuspicious(src, 'algemar', 'Distância excessiva entre os jogadores')
        return
    end

    -- Aplicar estado de algemado via State Bag sincronizada
    Player(targetServerId).state:set('isCuffed', true, true)
    TriggerClientEvent('ox_lib:notify', targetServerId, { title = 'Aviso', description = 'Você foi algemado!', type = 'warning' })
end)
```

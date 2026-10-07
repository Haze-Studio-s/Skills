# OneSync Infinity e State Bags Autoritativas

As **State Bags** são compartimentos de estado sincronizados nativamente pelo CitizenFX em rede, eliminando dezenas de `TriggerClientEvent` e `TriggerServerEvent` desnecessários para sincronização de estado.

---

## 1. Tipos de State Bags

1. **Player State Bags:** Associadas a um jogador específico (`Player(source).state`).
2. **Entity State Bags:** Associadas a uma entidade de rede, como veículo ou ped (`Entity(veh).state`).
3. **Global State Bag:** Associada ao estado global do servidor (`GlobalState`).

---

## 2. Definindo e Sincronizando Estados

### No Servidor (Autoridade Primária):
O terceiro argumento do método `:set()` define se o valor deve ser replicado (broadcast) para a rede de clientes:

```lua
-- Definir estado de algemado no jogador (com replicação em rede)
Player(source).state:set('isCuffed', true, true)

-- Definir combustível no veículo (com replicação)
local veh = NetworkGetEntityFromNetworkId(netId)
Entity(veh).state:set('fuel', 75.0, true)

-- Definir estado global (ex: bandeira de clima ou evento ativo)
GlobalState.isPurgeActive = true
```

### No Cliente:
O cliente pode ler o estado de qualquer jogador ou entidade em seu alcance de streaming (OneSync):

```lua
-- Ler o próprio estado
local isCuffed = LocalPlayer.state.isCuffed

-- Ler o estado de outro jogador
local targetServerId = 12
local targetCuffed = Player(targetServerId).state.isCuffed

-- Ler combustível do veículo atual
local veh = cache.vehicle
if veh then
    local fuel = Entity(veh).state.fuel or 100.0
end
```

---

## 3. Monitoramento de Mudanças de Estado (`StateBagChangeHandler`)

Em vez de verificar estados em loops contínuos, registre um manipulador que é acionado somente quando o valor mudar:

```lua
-- Client-Side: Monitorar quando qualquer jogador é algemado/desalgemado
AddStateBagChangeHandler('isCuffed', nil, function(bagName, key, value, _unused, replicated)
    -- bagName tem o formato 'player:serverId' ou 'entity:netId'
    local playerNet = GetPlayerFromStateBagName(bagName)
    if playerNet == 0 then return end
    
    local ped = GetPlayerPed(playerNet)
    if value == true then
        -- Aplicar animação de algemas
        SetEnableHandcuffs(ped, true)
    else
        -- Remover animação de algemas
        SetEnableHandcuffs(ped, false)
    end
end)
```

---

## 4. Segurança em State Bags

Por padrão, clientes **não** devem ter permissão de definir estados que alterem a lógica de gameplay ou privilégios de outros jogadores.
- Qualquer alteração crítica de estado (`isDead`, `isCuffed`, `job`, `adminDuty`, `inventoryWeight`) **deve ser definida exclusivamente pelo servidor**.
- No OneSync Infinity, entidades distantes não existem no cliente (culled). Portanto, nunca confie em natives de busca de entidades no cliente para jogadores fora da bolha de streaming (~300 metros). Use o servidor para consultas geográficas globais.

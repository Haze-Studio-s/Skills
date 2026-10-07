# Guia de Natives CitizenFX e Boas Práticas de Runtime

As natives do GTA V e do CitizenFX formam a camada mais baixa de execução do FiveM. O uso incorreto de natives é a principal causa de consumo excessivo de CPU (resmon alto) e crashes.

---

## 1. Operações com Vetores e Distâncias

### ❌ Anti-Padrão Pesado:
```lua
-- Chamar GetDistanceBetweenCoords consome ciclos de ponte C++ desnecessários
local dist = GetDistanceBetweenCoords(pCoords.x, pCoords.y, pCoords.z, tCoords.x, tCoords.y, tCoords.z, true)
```

### ✅ Padrão Nativo Rápido (Lua 5.4 / CFX):
```lua
-- Operador de comprimento vetorial direto (#) em vector3
local dist = #(pCoords - tCoords)
```
*Vantagem:* Reduz o tempo de execução em até ~0.15ms por chamada e pode ser executado centenas de vezes sem penalizar a framerate.

---

## 2. Entidades e Modelos (Client-Side)

### Carregamento de Modelos e Animações
Sempre garanta que o recurso aguarde o carregamento ou utilize os helpers assíncronos do `ox_lib`:

```lua
-- Via ox_lib (Recomendado):
lib.requestModel(modelHash, 5000)
lib.requestAnimDict(animDict, 5000)

-- Via Native Pura:
RequestModel(modelHash)
while not HasModelLoaded(modelHash) do
    Wait(0)
end
```

### Criação e Limpeza de Veículos e Peds
```lua
-- Criar veículo client-side (somente se local) ou server-side via CreateVehicleServerSetter
local ped = CreatePed(4, modelHash, coords.x, coords.y, coords.z, coords.w, false, true)
SetEntityAsMissionEntity(ped, true, true)
SetBlockingOfNonTemporaryEvents(ped, true)
FreezeEntityPosition(ped, true)
SetEntityInvincible(ped, true)

-- Deleção segura:
if DoesEntityExist(ped) then
    DeleteEntity(ped)
end
```

---

## 3. OneSync Server Natives

### Instanciação de Entidades Server-Side
No OneSync Infinity, veículos e peds persistentes ou sincronizados devem ser gerados preferencialmente pelo **servidor**:

```lua
-- Server-side CreateVehicle
-- CreateVehicleServerSetter(modelHash, type, x, y, z, heading)
local veh = CreateVehicleServerSetter(GetHashKey('adder'), 'automobile', coords.x, coords.y, coords.z, coords.w)
while not DoesEntityExist(veh) do
    Wait(0)
end

local netId = NetworkGetNetworkIdFromEntity(veh)
```

### Routing Buckets (Mundos Virtuais / Interiores)
Separe jogadores e entidades em dimensões virtuais sem conflitos de rede:

```lua
-- Colocar jogador em um bucket isolado (ex: apartamento ou concessionária)
SetPlayerRoutingBucket(source, bucketId)

-- Colocar entidade vinculada no mesmo bucket
SetEntityRoutingBucket(veh, bucketId)

-- Retornar ao mundo padrão
SetPlayerRoutingBucket(source, 0)
```

---

## 4. Tabela de Timing para Threads e Loops

| Escopo da Thread | Intervalo de Wait | Motivo / Aplicação |
| :--- | :--- | :--- |
| **0 ms (`Wait(0)`)** | Por frame | Apenas para renderização imediata, HUD customizado nativo ou tecla pressionada contínua. |
| **50–100 ms** | Muito rápido | Ações de combate ativo, direção em alta velocidade ou checagens imediatas de colisão. |
| **250–500 ms** | Proximidade | Jogador a menos de 50 metros de um ponto de interesse ativo. |
| **1000–3000 ms** | Repouso / Distante | Jogador longe de pontos de interesse ou checagens periódicas de estado. |
| **60000+ ms** | Background | Limpeza de tabelas, sincronização de tempo, checagens de manutenção. |

# FiveM Development Best Practices

## Client vs Server

- **Client-side** natives are called in `client.lua` / `client.js`. They interact with the game world visible to the local player.
- **Server-side** natives (prefixed `CFX` or available via `@server`) run on the server and deal with player/entity data that must be authoritative.
- Never trust the client for sensitive operations (money, health, permissions). Validate everything server-side.
- You can suggest security improvements to server events by adding validation checks for player permissions, input types, and value ranges.

## Performance

### Avoid GetEntityCoords in tight loops
Cache coordinates when you only need them once per frame or per event:
```lua
-- Bad: calls native every iteration
for i = 1, #entities do
  local playerCoords = GetEntityCoords(PlayerPedId())
  local dist = #(GetEntityCoords(entities[i]) - playerCoords)
end

-- Good: cache player coords outside the loop
local playerCoords = GetEntityCoords(PlayerPedId())
for i = 1, #entities do
  local dist = #(GetEntityCoords(entities[i]) - playerCoords)
end
```

### Use Citizen.Wait correctly
Always yield in loops. `Citizen.Wait(0)` yields for one frame; use larger waits when precision isn't needed:
```lua
-- Tight loop — fine for per-frame work
Citizen.CreateThread(function()
  while true do
    Citizen.Wait(0)
    -- per-frame logic
  end
end)

-- Distance check every 500ms is usually enough
Citizen.CreateThread(function()
  while true do
    Citizen.Wait(500)
    -- proximity check
  end
end)
```

### Avoid unnecessary network synced entities
Creating synced entities is expensive. Use local (non-networked) objects when they only need to exist for the local player.

## Events

### Always scope events properly
Use `TriggerServerEvent` only when the client must notify the server. Use `TriggerEvent` for local events.

```lua
-- Triggering a server event from client
TriggerServerEvent('myResource:doSomething', data)

-- Server handling it
RegisterNetEvent('myResource:doSomething', function(data)
  local src = source
  -- validate src and data here
end)
```

### Never expose sensitive server events without validation
```lua
-- Bad: any client can trigger this
RegisterNetEvent('givePlayerMoney', function(amount)
  exports.ox_inventory:addItem(source, 'money', amount)
end)

-- Good: validate permissions and amount
RegisterNetEvent('givePlayerMoney', function(amount)
  local src = source
  if not IsPlayerAceAllowed(src, 'admin') then return end
  if type(amount) ~= 'number' or amount <= 0 or amount > 10000 then return end
  exports.ox_inventory:addItem(src, 'money', amount)
end)
```

## Entities

### Always check if entity exists before operating on it
```lua
local ped = GetPlayerPed(playerId)
if DoesEntityExist(ped) then
  -- safe to use ped
end
```

### Delete entities you create
```lua
local obj = CreateObject(model, x, y, z, true, true, false)
-- ... use obj ...
DeleteEntity(obj)
```

## Models

### Always request and await model loading
```lua
local model = "a_m_m_business_01"
RequestModel(model)
while not HasModelLoaded(model) do
  Citizen.Wait(10)
end
-- create ped / object
SetModelAsNoLongerNeeded(model)
```

Even better, if the project uses ox_lib you can use:
```lua
lib.requestModel(model --[[string]], timeout)

-- and unload the model after
SetModelAsNoLongerNeeded(model)
```

## Threading

### Don't block the main thread
Long-running synchronous operations should be wrapped in `Citizen.CreateThread` with yields:
```lua
-- Never do expensive work without yielding
Citizen.CreateThread(function()
  for i = 1, 10000 do
    -- process something
    if i % 100 == 0 then Citizen.Wait(0) end -- yield every 100 iterations
  end
end)
```

## Callbacks

Use `lib.callback` (ox_lib) or equivalent framework callbacks for client↔server communication that requires a response, instead of manually pairing events:
```lua
-- Server
lib.callback.register('myResource:getData', function(source)
  return { value = 42 }
end)

lib.callback.await("myResource:retrieveClientData", source)

-- Client
-- lib.callback.await(name, cooldownBetweenCalls (client-side only), ...)
-- The cooldown only works when calling from the client, and prevents spamming the callback.

local data = lib.callback.await('myResource:getData', false)
print(data.value)

lib.callback.register('myResource:retrieveClientData', function()
  return "clientData"
end)

```

## Caching

If using ox_lib, you can also use the global `cache` function/table.

```lua
cache.test = true

cache("myKey", function()
	-- called if not cached yet
	return "value"
end, 60000 --[[ optional cache ttl ]])
```
# FiveM Native Types Reference

This document describes the common types used in FiveM native function signatures.

## Entity Types

| Type | Description |
|------|-------------|
| `Entity` | Base handle for any in-world object (ped, vehicle, object). An integer handle. |
| `Ped` | A pedestrian/character entity. Subtype of `Entity`. |
| `Vehicle` | A vehicle entity. Subtype of `Entity`. |
| `Object` | A world prop/object entity. Subtype of `Entity`. |
| `Pickup` | A pickup item in the world. |
| `Projectile` | A bullet or thrown projectile entity. |

## Player Types

| Type | Description |
|------|-------------|
| `Player` | A player ID (integer, 0-based). Get local player with `PlayerId()`. |
| `ScrHandle` | A generic script handle, often interchangeable with `Entity`. |

## Camera & Visual Types

| Type | Description |
|------|-------------|
| `Cam` | A camera handle created with `CreateCam`. |
| `Blip` | A minimap marker created with `AddBlipForCoord` or similar. |
| `Interior` | Handle to an interior space. |

## Hash Types

| Type | Description |
|------|-------------|
| `Hash` | A Jenkins one-way hash (uint32). Used for models, weapons, animations, etc. In Lua, use backtick syntax: `` `MODEL_NAME` `` auto-hashes. |
| `FireId` | Handle to a fire entity. |
| `ScrHandle` | Script handle (generic integer reference). |

## Primitive Types

| Type | Description |
|------|-------------|
| `int` | 32-bit integer |
| `float` | 32-bit floating point |
| `bool` / `BOOL` | Boolean (true/false). In C natives, `BOOL` is typedef'd int. |
| `char*` / `string` | String value (read-only pointer in native context) |
| `void` | No return value |
| `Any` | Untyped / varies — check documentation for actual usage |

## Vector Types

| Type | Description |
|------|-------------|
| `Vector3` | 3D vector with `x`, `y`, `z` components. Returned by `GetEntityCoords`, `GetEntityVelocity`, etc. |

In Lua, Vector3 is accessed as:
```lua
local coords = GetEntityCoords(ped)
print(coords.x, coords.y, coords.z)
-- or decompose directly:
local x, y, z = table.unpack(GetEntityCoords(ped))
```

## Reference Parameters (Out params)

Some natives take pointer parameters (`*`) that act as output values. In Lua/JS these are returned as additional return values:

```lua
-- C signature: void GET_ENTITY_COORDS(Entity entity, BOOL alive, Vector3* outXYZ)
-- Lua usage:
local x, y, z = GetEntityCoords(entity, true)
```

## Common Native Return Patterns

```lua
-- Returns an entity handle (integer > 0 if valid)
local vehicle = GetVehiclePedIsIn(ped, false)
if vehicle ~= 0 then
  -- player is in a vehicle
end

-- Returns -1 for invalid handles in some cases
local netId = NetworkGetNetworkIdFromEntity(entity)
if netId ~= 0 then
  -- entity is networked
end

-- Returns bool
if IsEntityDead(ped) then
  -- ped is dead
end
```

## Type Aliases in FiveM

FiveM extends GTA5 natives with CFX-specific types:

| Type | Description |
|------|-------------|
| `Player` (CFX) | Server-side player source (integer) |
| `StateBagName` | String key for entity/global state bags |
| `KvpHandle` | Handle for key-value persistence store |

# CFX Natives

> 942 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _ADD_BLIP_FOR_AREA
**Hash:** `0x6228F159` | **Returns:** `Blip`

Adds a rectangular blip for the specified coordinates/area.
It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
(Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)

**This is the server-side RPC native equivalent of the client native [\_ADD_BLIP_FOR_AREA](?\_0xCE5D0E5E315DB238).**

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `width` | `float` |
| `height` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~_ADD_BLIP_FOR_AREA)

---
## _SET_PED_EYE_COLOR
**Hash:** `0xEC09DB1B` | **Returns:** `void`

Used for freemode (online) characters.
Indices:

1.  black
2.  very light blue/green
3.  dark blue
4.  brown
5.  darker brown
6.  light brown
7.  blue
8.  light blue
9.  pink
10. yellow
11. purple
12. black
13. dark green
14. light brown
15. yellow/black pattern
16. light colored spiral pattern
17. shiny red
18. shiny half blue/half red
19. half black/half light blue
20. white/red perimter
21. green snake
22. red snake
23. dark blue snake
24. dark yellow
25. bright yellow
26. all black
27. red small pupil
28. devil blue/black
29. white small pupil
30. glossed over

**This is the server-side RPC native equivalent of the client native [\_SET_PED_EYE_COLOR](?\_0x50B56988B170AFDF).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~_SET_PED_EYE_COLOR)

---
## _SET_PED_FACE_FEATURE
**Hash:** `0x6C8D4458` | **Returns:** `void`

Sets the various freemode face features, e.g. nose length, chin shape.
**Indexes (From 0 to 19):**
Parentheses indicate morph scale/direction as in (-1.0 to 1.0)

*   **0**: Nose Width (Thin/Wide)
*   **1**: Nose Peak (Up/Down)
*   **2**: Nose Length (Long/Short)
*   **3**: Nose Bone Curveness (Crooked/Curved)
*   **4**: Nose Tip (Up/Down)
*   **5**: Nose Bone Twist (Left/Right)
*   **6**: Eyebrow (Up/Down)
*   **7**: Eyebrow (In/Out)
*   **8**: Cheek Bones (Up/Down)
*   **9**: Cheek Sideways Bone Size (In/Out)
*   **10**: Cheek Bones Width (Puffed/Gaunt)
*   **11**: Eye Opening (Both) (Wide/Squinted)
*   **12**: Lip Thickness (Both) (Fat/Thin)
*   **13**: Jaw Bone Width (Narrow/Wide)
*   **14**: Jaw Bone Shape (Round/Square)
*   **15**: Chin Bone (Up/Down)
*   **16**: Chin Bone Length (In/Out or Backward/Forward)
*   **17**: Chin Bone Shape (Pointed/Square)
*   **18**: Chin Hole (Chin Bum)
*   **19**: Neck Thickness (Thin/Thick)
    **Note:**
    You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.

**This is the server-side RPC native equivalent of the client native [\_SET_PED_FACE_FEATURE](?\_0x71A5C1DBA060049E).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `index` | `int` |
| `scale` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~_SET_PED_FACE_FEATURE)

---
## _SET_PED_HEAD_OVERLAY_COLOR
**Hash:** `0x78935A27` | **Returns:** `void`

```
Used for freemode (online) characters.
Called after SET_PED_HEAD_OVERLAY().
```

**Note:**
You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.

**This is the server-side RPC native equivalent of the client native [\_SET_PED_HEAD_OVERLAY_COLOR](?\_0x497BF74A7B9CB952).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `overlayID` | `int` |
| `colorType` | `int` |
| `colorID` | `int` |
| `secondColorID` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~_SET_PED_HEAD_OVERLAY_COLOR)

---
## ACTIVATE_TIMECYCLE_EDITOR
**Hash:** `0xEEB9B76A` | **Returns:** `void`
**Alt name:** `ActivateTimecycleEditor`

Activates built-in timecycle editing tool.

[View docs](https://cfxnatives.dev/natives/ACTIVATE_TIMECYCLE_EDITOR)

---
## ADD_AUDIO_SUBMIX_OUTPUT
**Hash:** `0xAC6E290D` | **Returns:** `void`
**Alt name:** `AddAudioSubmixOutput`

Adds an output for the specified audio submix.

**Parameters:**
| Name | Type |
|------|------|
| `submixId` | `int` |
| `outputSubmixId` | `int` |

[View docs](https://cfxnatives.dev/natives/ADD_AUDIO_SUBMIX_OUTPUT)

---
## ADD_AUTHORIZED_PARACHUTE_MODEL
**Hash:** `0x8AC7AE9` | **Returns:** `void`
**Alt name:** `AddAuthorizedParachuteModel`

Adds the given model name hash to the list of valid models for the player ped's parachute.

**Parameters:**
| Name | Type |
|------|------|
| `modelNameHash` | `int` |

[View docs](https://cfxnatives.dev/natives/ADD_AUTHORIZED_PARACHUTE_MODEL)

---
## ADD_AUTHORIZED_PARACHUTE_PACK_MODEL
**Hash:** `0x2E86DEA5` | **Returns:** `void`
**Alt name:** `AddAuthorizedParachutePackModel`

Adds the given model name hash to the list of valid models for the player ped's parachute pack.

**Parameters:**
| Name | Type |
|------|------|
| `modelNameHash` | `int` |

[View docs](https://cfxnatives.dev/natives/ADD_AUTHORIZED_PARACHUTE_PACK_MODEL)

---
## ADD_BLIP_FOR_COORD
**Hash:** `0xC6F43D0E` | **Returns:** `Blip`
**Alt name:** `AddBlipForCoord`

Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.

**This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_COORD](?\_0x5A039BB0BCA604B6).**

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~ADD_BLIP_FOR_COORD)

---
## ADD_BLIP_FOR_ENTITY
**Hash:** `0x30822554` | **Returns:** `Blip`
**Alt name:** `AddBlipForEntity`

Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
Can be used for objects, vehicles and peds.
Example of enemy:
![enemy](https://i.imgur.com/LIizV6S.png)
Example of friend:
![friend](https://i.imgur.com/XrCuvZP.png)

**This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_ENTITY](?\_0x5CDE92C702A8FCE7).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~ADD_BLIP_FOR_ENTITY)

---
## ADD_BLIP_FOR_RADIUS
**Hash:** `0x4626756C` | **Returns:** `Blip`
**Alt name:** `AddBlipForRadius`

Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
Example image:
![example](https://i.imgur.com/fDCmHVD.png)

**This is the server-side RPC native equivalent of the client native [ADD_BLIP_FOR_RADIUS](?\_0x46818D79B1F7499A).**

**Parameters:**
| Name | Type |
|------|------|
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~ADD_BLIP_FOR_RADIUS)

---
## ADD_CONVAR_CHANGE_LISTENER
**Hash:** `0xAB7F7241` | **Returns:** `int`
**Alt name:** `AddConvarChangeListener`

Adds a listener for Console Variable changes.

The function called expects to match the following signature:

```ts
function ConVarChangeListener(conVarName: string, reserved: any);
```

*   **conVarName**: The ConVar that changed.
*   **reserved**: Currently unused.

**Parameters:**
| Name | Type |
|------|------|
| `conVarFilter` | `char*` |
| `handler` | `func` |

**Example:**
```js
// listen for all convar changes
AddConvarChangeListener(null, (conVarName, reserved) => {
    print(GetConvarInt(conVarName))
})

// listen to convars that start with "script:"
AddConvarChangeListener("script:*", (conVarName, reserved) => {
    print(GetConvarInt(conVarName))
})
```

[View docs](https://cfxnatives.dev/natives/ADD_CONVAR_CHANGE_LISTENER)

---
## ADD_HEALTH_CONFIG
**Hash:** `0x9CBFD5C1` | **Returns:** `void`
**Alt name:** `AddHealthConfig`

Adds new health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `defaultHealth` | `float` |
| `defaultArmor` | `float` |
| `defaultEndurance` | `float` |
| `fatiguedHealthThreshold` | `float` |
| `injuredHealthThreshold` | `float` |
| `dyingHealthThreshold` | `float` |
| `hurtHealthThreshold` | `float` |
| `dogTakedownThreshold` | `float` |
| `writheFromBulletThreshold` | `float` |
| `meleeCardinalFatalAttack` | `BOOL` |
| `invincible` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ADD_HEALTH_CONFIG)

---
## ADD_MINIMAP_OVERLAY
**Hash:** `0x4AFD2499` | **Returns:** `int`
**Alt name:** `AddMinimapOverlay`

Loads a minimap overlay from a GFx file in the current resource.

If you need to control the depth of overlay use [`ADD_MINIMAP_OVERLAY_WITH_DEPTH`](#\_0xED0935B5).

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/ADD_MINIMAP_OVERLAY)

---
## ADD_MINIMAP_OVERLAY_WITH_DEPTH
**Hash:** `0xED0935B5` | **Returns:** `int`
**Alt name:** `AddMinimapOverlayWithDepth`

Loads a minimap overlay from a GFx file in the current resource.

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `depth` | `int` |

[View docs](https://cfxnatives.dev/natives/ADD_MINIMAP_OVERLAY_WITH_DEPTH)

---
## ADD_PED_DECORATION_FROM_HASHES
**Hash:** `0x70559AC7` | **Returns:** `void`
**Alt name:** `AddPedDecorationFromHashes`

```
Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
collection - PedDecorationCollection filename hash
overlay - Item name hash
Example:
Entry inside "mpbeach_overlays.xml" -
<Item>
<uvPos x="0.500000" y="0.500000" />
<scale x="0.600000" y="0.500000" />
<rotation value="0.000000" />
<nameHash>FM_Hair_Fuzz</nameHash>
<txdHash>mp_hair_fuzz</txdHash>
<txtHash>mp_hair_fuzz</txtHash>
<zone>ZONE_HEAD</zone>
<type>TYPE_TATTOO</type>
<faction>FM</faction>
<garment>All</garment>
<gender>GENDER_DONTCARE</gender>
<award />
<awardLevel />
</Item>
Code:
PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))
```

**This is the server-side RPC native equivalent of the client native [ADD_PED_DECORATION_FROM_HASHES](?\_0x5F5D1665E352A839).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `collection` | `Hash` |
| `overlay` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CFX~ADD_PED_DECORATION_FROM_HASHES)

---
## ADD_REPLACE_TEXTURE
**Hash:** `0xA66F8F75` | **Returns:** `void`
**Alt name:** `AddReplaceTexture`

Experimental natives, please do not use in a live environment.

**Parameters:**
| Name | Type |
|------|------|
| `origTxd` | `char*` |
| `origTxn` | `char*` |
| `newTxd` | `char*` |
| `newTxn` | `char*` |

[View docs](https://cfxnatives.dev/natives/ADD_REPLACE_TEXTURE)

---
## ADD_STATE_BAG_CHANGE_HANDLER
**Hash:** `0x5BA35AAF` | **Returns:** `int`
**Alt name:** `AddStateBagChangeHandler`

Adds a handler for changes to a state bag.

The function called expects to match the following signature:

```ts
function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
```

*   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
    or `localEntity:Handle`.
*   **key**: The changed key.
*   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
*   **reserved**: Currently unused.
*   **replicated**: Whether the set is meant to be replicated.

At this time, the change handler can't opt to reject changes.

If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](#\_0x4BDF1867) to get the entity handle
If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](#\_0xA56135E0) to get the player handle

**Parameters:**
| Name | Type |
|------|------|
| `keyFilter` | `char*` |
| `bagFilter` | `char*` |
| `handler` | `func` |

**Example:**
```js
AddStateBagChangeHandler("blockTasks", null, async (bagName, key, value /* boolean */) => {
    let entity = GetEntityFromStateBagName(bagName);
    // Whoops, we don't have a valid entity!
    if (entity === 0) return;
    // We don't want to freeze the entity position if the entity collision hasn't loaded yet
    while (!HasCollisionLoadedAroundEntity(entity)) {
        // The entity went out of our scope before the collision loaded
        if (!DoesEntityExist(entity)) return;
        await Delay(250);
    }
    SetEntityInvincible(entity, value)
    FreezeEntityPosition(entity, value)
    TaskSetBlockingOfNonTemporaryEvents(entity, value)
})
```

[View docs](https://cfxnatives.dev/natives/ADD_STATE_BAG_CHANGE_HANDLER)

---
## ADD_TEXT_ENTRY
**Hash:** `0x32CA01C3` | **Returns:** `void`
**Alt name:** `AddTextEntry`

**Parameters:**
| Name | Type |
|------|------|
| `entryKey` | `char*` |
| `entryText` | `char*` |

[View docs](https://cfxnatives.dev/natives/ADD_TEXT_ENTRY)

---
## ADD_TEXT_ENTRY_BY_HASH
**Hash:** `0x289DA860` | **Returns:** `void`
**Alt name:** `AddTextEntryByHash`

**Parameters:**
| Name | Type |
|------|------|
| `entryKey` | `Hash` |
| `entryText` | `char*` |

[View docs](https://cfxnatives.dev/natives/ADD_TEXT_ENTRY_BY_HASH)

---
## APPLY_FORCE_TO_ENTITY
**Hash:** `0xC1C0855A` | **Returns:** `void`
**Alt name:** `ApplyForceToEntity`

```cpp
enum eApplyForceTypes {
APPLY_TYPE_FORCE = 0,
APPLY_TYPE_IMPULSE = 1,
APPLY_TYPE_EXTERNAL_FORCE = 2,
APPLY_TYPE_EXTERNAL_IMPULSE = 3,
APPLY_TYPE_TORQUE = 4,
APPLY_TYPE_ANGULAR_IMPULSE = 5
}
```

**This is the server-side RPC native equivalent of the client native [APPLY_FORCE_TO_ENTITY](?\_0xC5F68BE9613E2D18).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `forceType` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `offX` | `float` |
| `offY` | `float` |
| `offZ` | `float` |
| `nComponent` | `int` |
| `bLocalForce` | `BOOL` |
| `bLocalOffset` | `BOOL` |
| `bScaleByMass` | `BOOL` |
| `bPlayAudio` | `BOOL` |
| `bScaleByTimeWarp` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~APPLY_FORCE_TO_ENTITY)

---
## APPLY_WEATHER_CYCLES
**Hash:** `0x3422291C` | **Returns:** `BOOL`
**Alt name:** `ApplyWeatherCycles`

**Parameters:**
| Name | Type |
|------|------|
| `numEntries` | `int` |
| `msPerCycle` | `int` |

**Example:**
```lua
-- Cycle between XMAS weather for 30 seconds (3 * 10000 milliseconds), and SMOG weather for 20 seconds (2 * 10000 milliseconds)
local success = SetWeatherCycleEntry(0, "XMAS", 3) and
                SetWeatherCycleEntry(1, "SMOG", 2) and
                ApplyWeatherCycles(2, 10000)
```

[View docs](https://cfxnatives.dev/natives/APPLY_WEATHER_CYCLES)

---
## BREAK_OFF_VEHICLE_WHEEL
**Hash:** `0xA274CADB` | **Returns:** `void`
**Alt name:** `BreakOffVehicleWheel`

Break off vehicle wheel by index. The `leaveDebrisTrail` flag requires `putOnFire` to be true.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `leaveDebrisTrail` | `BOOL` |
| `deleteWheel` | `BOOL` |
| `unknownFlag` | `BOOL` |
| `putOnFire` | `BOOL` |

**Example:**
```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())

if DoesEntityExist(vehicle) then
  for i = 0, 3 do
    BreakOffVehicleWheel(vehicle, i, true, false, true, false)
  end
end
```

[View docs](https://cfxnatives.dev/natives/BREAK_OFF_VEHICLE_WHEEL)

---
## CALL_MINIMAP_SCALEFORM_FUNCTION
**Hash:** `0x4C89C0ED` | **Returns:** `BOOL`
**Alt name:** `CallMinimapScaleformFunction`

This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.

**Parameters:**
| Name | Type |
|------|------|
| `miniMap` | `int` |
| `fnName` | `char*` |

[View docs](https://cfxnatives.dev/natives/CALL_MINIMAP_SCALEFORM_FUNCTION)

---
## CAN_PLAYER_START_COMMERCE_SESSION
**Hash:** `0x429461C3` | **Returns:** `BOOL`
**Alt name:** `CanPlayerStartCommerceSession`

Returns whether or not the specified player has enough information to start a commerce session for.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/CAN_PLAYER_START_COMMERCE_SESSION)

---
## CANCEL_EVENT
**Hash:** `0xFA29D35D` | **Returns:** `void`
**Alt name:** `CancelEvent`

Cancels the currently executing event.

[View docs](https://cfxnatives.dev/natives/CANCEL_EVENT)

---
## CLEAR_DRAW_ORIGIN
**Hash:** `0xDD76B263` | **Returns:** `void`
**Alt name:** `ClearDrawOrigin`

Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xE10198D5) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xE10198D5) for further information.

[View docs](https://cfxnatives.dev/natives/CFX~CLEAR_DRAW_ORIGIN)

---
## CLEAR_PED_PROP
**Hash:** `0x2D23D743` | **Returns:** `void`
**Alt name:** `ClearPedProp`

CLEAR_PED_PROP

**This is the server-side RPC native equivalent of the client native [CLEAR_PED_PROP](?\_0x0943E5B8E078E76E).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `propId` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~CLEAR_PED_PROP)

---
## CLEAR_PED_SECONDARY_TASK
**Hash:** `0xA635F451` | **Returns:** `void`
**Alt name:** `ClearPedSecondaryTask`

CLEAR_PED_SECONDARY_TASK

**This is the server-side RPC native equivalent of the client native [CLEAR_PED_SECONDARY_TASK](?\_0x176CECF6F920D707).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~CLEAR_PED_SECONDARY_TASK)

---
## CLEAR_PED_TASKS
**Hash:** `0xDE3316AB` | **Returns:** `void`
**Alt name:** `ClearPedTasks`

Clear a ped's tasks. Stop animations and other tasks created by scripts.

**This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS](?\_0xE1EF3C1216AFF2CD).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~CLEAR_PED_TASKS)

---
## CLEAR_PED_TASKS_IMMEDIATELY
**Hash:** `0xBC045625` | **Returns:** `void`
**Alt name:** `ClearPedTasksImmediately`

Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.

**This is the server-side RPC native equivalent of the client native [CLEAR_PED_TASKS_IMMEDIATELY](?\_0xAAA34F8A7CB32098).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~CLEAR_PED_TASKS_IMMEDIATELY)

---
## CLEAR_PLAYER_WANTED_LEVEL
**Hash:** `0x54EA5BCC` | **Returns:** `void`
**Alt name:** `ClearPlayerWantedLevel`

```
This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);
PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.
```

**This is the server-side RPC native equivalent of the client native [CLEAR_PLAYER_WANTED_LEVEL](?\_0xB302540597885499).**

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/CFX~CLEAR_PLAYER_WANTED_LEVEL)

---
## CLEAR_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR
**Hash:** `0x2867ED8C` | **Returns:** `void`
**Alt name:** `ClearVehicleXenonLightsCustomColor`

Removes vehicle xenon lights custom RGB color.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CLEAR_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR)

---
## CLONE_TIMECYCLE_MODIFIER
**Hash:** `0x54D636B3` | **Returns:** `int`
**Alt name:** `CloneTimecycleModifier`

**Parameters:**
| Name | Type |
|------|------|
| `sourceModifierName` | `char*` |
| `clonedModifierName` | `char*` |

**Example:**
```lua
local sourceName = "underwater"
local cloneName = "my_awesome_timecycle"

local clonedIndex = CloneTimecycleModifier(sourceName, cloneName)
if clonedIndex ~= -1 then
  SetTimecycleModifier(cloneName)
end
```

[View docs](https://cfxnatives.dev/natives/CLONE_TIMECYCLE_MODIFIER)

---
## COMMIT_RUNTIME_TEXTURE
**Hash:** `0x19D81F4E` | **Returns:** `void`
**Alt name:** `CommitRuntimeTexture`

Commits the backing pixels to the specified runtime texture.

**Parameters:**
| Name | Type |
|------|------|
| `tex` | `long` |

[View docs](https://cfxnatives.dev/natives/COMMIT_RUNTIME_TEXTURE)

---
## CREATE_AUDIO_SUBMIX
**Hash:** `0x658D2BC8` | **Returns:** `int`
**Alt name:** `CreateAudioSubmix`

Creates an audio submix with the specified name, or gets the existing audio submix by that name.

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/CREATE_AUDIO_SUBMIX)

---
## CREATE_DRY_VOLUME
**Hash:** `0xEB1C6DD` | **Returns:** `int`
**Alt name:** `CreateDryVolume`

Creates a volume where water effects do not apply.
Useful for preventing water collisions from flooding areas underneath them.
This has no effect on waterquads, only water created from drawables and collisions.
Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)

**Parameters:**
| Name | Type |
|------|------|
| `xMin` | `float` |
| `yMin` | `float` |
| `zMin` | `float` |
| `xMax` | `float` |
| `yMax` | `float` |
| `zMax` | `float` |

[View docs](https://cfxnatives.dev/natives/CREATE_DRY_VOLUME)

---
## CREATE_DUI
**Hash:** `0x23EAF899` | **Returns:** `long`
**Alt name:** `CreateDui`

Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.

**Parameters:**
| Name | Type |
|------|------|
| `url` | `char*` |
| `width` | `int` |
| `height` | `int` |

[View docs](https://cfxnatives.dev/natives/CREATE_DUI)

---
## CREATE_OBJECT
**Hash:** `0x2F7AA05C` | **Returns:** `Entity`
**Alt name:** `CreateObject`

Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).

**This is the server-side RPC native equivalent of the client native [CREATE_OBJECT](?\_0x509D5878EB39E842).**

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `isNetwork` | `BOOL` |
| `netMissionEntity` | `BOOL` |
| `doorFlag` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~CREATE_OBJECT)

---
## CREATE_OBJECT_NO_OFFSET
**Hash:** `0x58040420` | **Returns:** `Entity`
**Alt name:** `CreateObjectNoOffset`

Creates an object (prop) with the specified model centered at the specified position.
This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).

**This is the server-side RPC native equivalent of the client native [CREATE_OBJECT_NO_OFFSET](?\_0x9A294B2138ABB884).**

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `isNetwork` | `BOOL` |
| `netMissionEntity` | `BOOL` |
| `doorFlag` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~CREATE_OBJECT_NO_OFFSET)

---
## CREATE_PED
**Hash:** `0x389EF71` | **Returns:** `Entity`
**Alt name:** `CreatePed`

Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
(e.g. using REQUEST_MODEL).

**This is the server-side RPC native equivalent of the client native [CREATE_PED](?\_0xD49F9B0955C367DE).**

**Parameters:**
| Name | Type |
|------|------|
| `pedType` | `int` |
| `modelHash` | `Hash` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `isNetwork` | `BOOL` |
| `bScriptHostPed` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~CREATE_PED)

---
## CREATE_PED_INSIDE_VEHICLE
**Hash:** `0x3000F092` | **Returns:** `Entity`
**Alt name:** `CreatePedInsideVehicle`

CREATE_PED_INSIDE_VEHICLE

**This is the server-side RPC native equivalent of the client native [CREATE_PED_INSIDE_VEHICLE](?\_0x7DD959874C1FD534).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `pedType` | `int` |
| `modelHash` | `Hash` |
| `seat` | `int` |
| `isNetwork` | `BOOL` |
| `bScriptHostPed` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~CREATE_PED_INSIDE_VEHICLE)

---
## CREATE_RUNTIME_TEXTURE
**Hash:** `0xFEC3766D` | **Returns:** `long`
**Alt name:** `CreateRuntimeTexture`

Creates a blank runtime texture.

**Parameters:**
| Name | Type |
|------|------|
| `txd` | `long` |
| `txn` | `char*` |
| `width` | `int` |
| `height` | `int` |

[View docs](https://cfxnatives.dev/natives/CREATE_RUNTIME_TEXTURE)

---
## CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE
**Hash:** `0xB135472B` | **Returns:** `long`
**Alt name:** `CreateRuntimeTextureFromDuiHandle`

Creates a runtime texture from a DUI handle.

**Parameters:**
| Name | Type |
|------|------|
| `txd` | `long` |
| `txn` | `char*` |
| `duiHandle` | `char*` |

[View docs](https://cfxnatives.dev/natives/CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE)

---
## CREATE_RUNTIME_TEXTURE_FROM_IMAGE
**Hash:** `0x786D8BC3` | **Returns:** `long`
**Alt name:** `CreateRuntimeTextureFromImage`

Creates a runtime texture from the specified file in the current resource or a base64 data URL.

**Parameters:**
| Name | Type |
|------|------|
| `txd` | `long` |
| `txn` | `char*` |
| `fileName` | `char*` |

[View docs](https://cfxnatives.dev/natives/CREATE_RUNTIME_TEXTURE_FROM_IMAGE)

---
## CREATE_RUNTIME_TXD
**Hash:** `0x1F3AC778` | **Returns:** `long`
**Alt name:** `CreateRuntimeTxd`

Creates a runtime texture dictionary with the specified name.
Example:

```lua
local txd = CreateRuntimeTxd('meow')
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/CREATE_RUNTIME_TXD)

---
## CREATE_TIMECYCLE_MODIFIER
**Hash:** `0x70FA2AFA` | **Returns:** `int`
**Alt name:** `CreateTimecycleModifier`

Create a clean timecycle modifier. See [`SET_TIMECYCLE_MODIFIER_VAR`](#\_0x6E0A422B) to add variables.

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |

**Example:**
```lua
local modifierName = "my_awesome_timecycle"
local createdIndex = CreateTimecycleModifier(modifierName)

if createdIndex ~= -1 then
  SetTimecycleModifier(modifierName)
end
```

[View docs](https://cfxnatives.dev/natives/CREATE_TIMECYCLE_MODIFIER)

---
## CREATE_VEHICLE
**Hash:** `0xDD75460A` | **Returns:** `Entity`
**Alt name:** `CreateVehicle`

Creates a vehicle with the specified model at the specified position. This vehicle will initially be owned by the creating
script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).

```
NativeDB Added Parameter 8: BOOL p7
```

**This is the server-side RPC native equivalent of the client native [CREATE_VEHICLE](?\_0xAF35D0D2583051B0).**

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `isNetwork` | `BOOL` |
| `netMissionEntity` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~CREATE_VEHICLE)

---
## CREATE_VEHICLE_SERVER_SETTER
**Hash:** `0x6AE51D4B` | **Returns:** `Vehicle`
**Alt name:** `CreateVehicleServerSetter`

Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
reliability concerns regarding entity creation RPC.

Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |
| `type` | `char*` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |

**Example:**
```lua
local heli = CreateVehicleServerSetter(`seasparrow`, 'heli', GetEntityCoords(GetPlayerPed(GetPlayers()[1])) + vector3(0, 0, 15), 0.0)
print(GetEntityCoords(heli)) -- should return correct coordinates
```

[View docs](https://cfxnatives.dev/natives/CREATE_VEHICLE_SERVER_SETTER)

---
## DELETE_ENTITY
**Hash:** `0xFAA3D236` | **Returns:** `void`
**Alt name:** `DeleteEntity`

Deletes the specified entity.

**NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~DELETE_ENTITY)

---
## DELETE_FUNCTION_REFERENCE
**Hash:** `0x1E86F206` | **Returns:** `void`
**Alt name:** `DeleteFunctionReference`

**Parameters:**
| Name | Type |
|------|------|
| `referenceIdentity` | `char*` |

[View docs](https://cfxnatives.dev/natives/DELETE_FUNCTION_REFERENCE)

---
## DELETE_RESOURCE_KVP
**Hash:** `0x7389B5DF` | **Returns:** `void`
**Alt name:** `DeleteResourceKvp`

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |

**Example:**
```lua
DeleteResourceKvp('liberty_city')
```

[View docs](https://cfxnatives.dev/natives/DELETE_RESOURCE_KVP)

---
## DELETE_RESOURCE_KVP_NO_SYNC
**Hash:** `0x4152C90` | **Returns:** `void`
**Alt name:** `DeleteResourceKvpNoSync`

Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DELETE_RESOURCE_KVP_NO_SYNC)

---
## DELETE_TRAIN
**Hash:** `0x523BA3DA` | **Returns:** `void`
**Alt name:** `DeleteTrain`

Deletes the specified `entity` and any carriage its attached to, or that is attached to it.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/DELETE_TRAIN)

---
## DESTROY_DUI
**Hash:** `0xA085CB10` | **Returns:** `void`
**Alt name:** `DestroyDui`

Destroys a DUI browser.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |

[View docs](https://cfxnatives.dev/natives/DESTROY_DUI)

---
## DISABLE_EDITOR_RUNTIME
**Hash:** `0xB1622B17` | **Returns:** `void`
**Alt name:** `DisableEditorRuntime`

Disables the editor runtime mode, changing game behavior to not track entity metadata.
This function supports SDK infrastructure and is not intended to be used directly from your code.

[View docs](https://cfxnatives.dev/natives/DISABLE_EDITOR_RUNTIME)

---
## DISABLE_IDLE_CAMERA
**Hash:** `0x3D5AB7F0` | **Returns:** `void`
**Alt name:** `DisableIdleCamera`

Disables the game's afk camera that starts panning around after 30 seconds of inactivity.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DISABLE_IDLE_CAMERA)

---
## DISABLE_RAW_KEY_THIS_FRAME
**Hash:** `0x8BCF0014` | **Returns:** `BOOL`
**Alt name:** `DisableRawKeyThisFrame`

Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_*` natives.

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
local KEY_SPACE = 32
DisableRawKeyThisFrame(KEY_SPACE)
-- This will not get triggered this frame
if IsRawKeyDown(KEY_SPACE) then
	print("unreachable :(")
end
-- this will get triggered
if IsDisabledRawKeyDown(KEY_SPACE) then
    print("Spacebar is down")
end
```

[View docs](https://cfxnatives.dev/natives/DISABLE_RAW_KEY_THIS_FRAME)

---
## DISABLE_VEHICLE_PASSENGER_IDLE_CAMERA
**Hash:** `0x5C140555` | **Returns:** `void`
**Alt name:** `DisableVehiclePassengerIdleCamera`

Disables the game's afk camera that starts panning around after 30 seconds of inactivity(While riding in a car as a passenger)

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DISABLE_VEHICLE_PASSENGER_IDLE_CAMERA)

---
## DISABLE_WORLDHORIZON_RENDERING
**Hash:** `0xA9C92CDC` | **Returns:** `void`
**Alt name:** `DisableWorldhorizonRendering`

Disables the game's world horizon lods rendering (see `farlods.#dd`).
Using the island hopper natives might also affect this state.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DISABLE_WORLDHORIZON_RENDERING)

---
## DOES_BOAT_SINK_WHEN_WRECKED
**Hash:** `0x43F15989` | **Returns:** `bool`
**Alt name:** `DoesBoatSinkWhenWrecked`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/DOES_BOAT_SINK_WHEN_WRECKED)

---
## DOES_ENTITY_EXIST
**Hash:** `0x3AC90869` | **Returns:** `BOOL`
**Alt name:** `DoesEntityExist`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Object` |

[View docs](https://cfxnatives.dev/natives/CFX~DOES_ENTITY_EXIST)

---
## DOES_PLAYER_EXIST
**Hash:** `0x12038599` | **Returns:** `BOOL`
**Alt name:** `DoesPlayerExist`

Returns whether or not the player exists

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

**Example:**
```lua
local deferralMessages = { "Isn't this just magical!", "We can defer all day!", "You'll get in eventually", "You're totally not going to sit here forever", "The Fruit Tree is a lie" }
AddEventHandler("playerConnecting", function(name, setKickReason, deferrals)
    local source = source
    deferrals.defer()

    Wait(0)


    local messageIndex = 0

    repeat
        Wait(2000)
        if messageIndex >= #deferralMessages then
            deferrals.done()
        else
            messageIndex = messageIndex + 1
        end
        deferrals.update(deferralMessages[messageIndex])
    until not DoesPlayerExist(source)
end)
```

[View docs](https://cfxnatives.dev/natives/DOES_PLAYER_EXIST)

---
## DOES_PLAYER_OWN_SKU
**Hash:** `0x167ABA27` | **Returns:** `BOOL`
**Alt name:** `DoesPlayerOwnSku`

Requests whether or not the player owns the specified SKU.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `skuId` | `int` |

[View docs](https://cfxnatives.dev/natives/DOES_PLAYER_OWN_SKU)

---
## DOES_PLAYER_OWN_SKU_EXT
**Hash:** `0xDEF0480B` | **Returns:** `BOOL`
**Alt name:** `DoesPlayerOwnSkuExt`

Requests whether or not the player owns the specified package.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `skuId` | `int` |

[View docs](https://cfxnatives.dev/natives/DOES_PLAYER_OWN_SKU_EXT)

---
## DOES_TEXTURE_EXIST
**Hash:** `0x8B25BC20` | **Returns:** `bool`
**Alt name:** `DoesTextureExist`

In compare to `0x31DC8D3F216D8509` return true if texture its created when `0x31DC8D3F216D8509` return true if you put there any id in valid range

**Parameters:**
| Name | Type |
|------|------|
| `textureId` | `int` |

[View docs](https://cfxnatives.dev/natives/DOES_TEXTURE_EXIST)

---
## DOES_TIMECYCLE_MODIFIER_HAS_VAR
**Hash:** `0xC53BB6D3` | **Returns:** `BOOL`
**Alt name:** `DoesTimecycleModifierHasVar`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |
| `varName` | `char*` |

**Example:**
```lua
local modifierName = "superDARK"
local varName = "postfx_noise"

if DoesTimecycleModifierHasVar(modifierName, varName) then
  local success, value1, value2 = GetTimecycleModifierVar(modifierName, varName)

  if success then
    print(string.format("[%s] removed var %s with values: %f %f", modifierName, varName, value1, value2))
    RemoveTimecycleModifierVar(modifierName, varName)
  end
else
    SetTimecycleModifierVar(modifierName, varName, 1.0, 1.0)
    print(string.format("[%s] created var %s", modifierName, varName))
end
```

[View docs](https://cfxnatives.dev/natives/DOES_TIMECYCLE_MODIFIER_HAS_VAR)

---
## DOES_TRAIN_STOP_AT_STATIONS
**Hash:** `0x77CC80DC` | **Returns:** `BOOL`
**Alt name:** `DoesTrainStopAtStations`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/DOES_TRAIN_STOP_AT_STATIONS)

---
## DOES_VEHICLE_USE_FUEL
**Hash:** `0xEF30A696` | **Returns:** `BOOL`
**Alt name:** `DoesVehicleUseFuel`

Checks whether the vehicle consumes fuel. The check is done based on petrol tank volume and vehicle type. Bicycles and vehicles with petrol tank volume equal to zero (only bicycles by default) do not use fuel. All other vehicles do.

You can customize petrol tank volume using [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolTankVolume`.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/DOES_VEHICLE_USE_FUEL)

---
## DOOR_SYSTEM_GET_ACTIVE
**Hash:** `0xF65BBA4B` | **Returns:** `object`
**Alt name:** `DoorSystemGetActive`

Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.

The data returned adheres to the following layout:

```
[{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
```

[View docs](https://cfxnatives.dev/natives/DOOR_SYSTEM_GET_ACTIVE)

---
## DOOR_SYSTEM_GET_SIZE
**Hash:** `0x237613B3` | **Returns:** `int`
**Alt name:** `DoorSystemGetSize`

[View docs](https://cfxnatives.dev/natives/DOOR_SYSTEM_GET_SIZE)

---
## DRAW_BOX
**Hash:** `0xCD4D9DD5` | **Returns:** `void`
**Alt name:** `DrawBox`

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~DRAW_BOX)

---
## DRAW_CORONA
**Hash:** `0xFF44780E` | **Returns:** `void`
**Alt name:** `DrawCorona`

Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.

**Parameters:**
| Name | Type |
|------|------|
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `size` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |
| `intensity` | `float` |
| `zBias` | `float` |
| `dirX` | `float` |
| `dirY` | `float` |
| `dirZ` | `float` |
| `viewThreshold` | `float` |
| `innerAngle` | `float` |
| `outerAngle` | `float` |
| `flags` | `int` |

**Example:**
```lua
local pedCoords = GetEntityCoords(PlayerPedId())
Citizen.CreateThread(function()
    while true do
        DrawCorona(pedCoords.x, pedCoords.y, pedCoords.z, 5.0, 255, 255, 255, 255, 4.0, 0.2, pedCoords.x, pedCoords.y, pedCoords.z, 1.0, 0.0, 90.0, 2)
        Wait(0)
    end
end)
```

[View docs](https://cfxnatives.dev/natives/DRAW_CORONA)

---
## DRAW_GIZMO
**Hash:** `0xEB2EDCA2` | **Returns:** `BOOL`
**Alt name:** `DrawGizmo`

Draws a gizmo. This function supports SDK infrastructure and is not intended to be used directly from your code.

This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.

Matrix layout is as follows:

*   Element \[0], \[1] and \[2] should represent the right vector.
*   Element \[4], \[5] and \[6] should represent the forward vector.
*   Element \[8], \[9] and \[10] should represent the up vector.
*   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
*   All other elements should be \[0, 0, 0, 1].

**Parameters:**
| Name | Type |
|------|------|
| `matrixPtr` | `long` |
| `id` | `char*` |

[View docs](https://cfxnatives.dev/natives/DRAW_GIZMO)

---
## DRAW_GLOW_SPHERE
**Hash:** `0xBD25EC89` | **Returns:** `void`
**Alt name:** `DrawGlowSphere`

Draw a glow sphere this frame. Up to 256 per single frame.

**Parameters:**
| Name | Type |
|------|------|
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `radius` | `float` |
| `colorR` | `int` |
| `colorG` | `int` |
| `colorB` | `int` |
| `intensity` | `float` |
| `invert` | `BOOL` |
| `marker` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DRAW_GLOW_SPHERE)

---
## DRAW_LIGHT
**Hash:** `0x374E5298` | **Returns:** `void`
**Alt name:** `DrawLight`

Draw the prepared light.

[View docs](https://cfxnatives.dev/natives/DRAW_LIGHT)

---
## DRAW_LINE
**Hash:** `0xB3426BCC` | **Returns:** `void`
**Alt name:** `DrawLine`

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~DRAW_LINE)

---
## DRAW_LINE_2D
**Hash:** `0xB856A90` | **Returns:** `void`
**Alt name:** `DrawLine2d`

Like DRAW_RECT, but it's a line.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `width` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `a` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_LINE_2D)

---
## DRAW_POLY
**Hash:** `0xABD19253` | **Returns:** `void`
**Alt name:** `DrawPoly`

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `x3` | `float` |
| `y3` | `float` |
| `z3` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~DRAW_POLY)

---
## DRAW_RECT_ROTATED
**Hash:** `0xEC37C168` | **Returns:** `void`
**Alt name:** `DrawRectRotated`

DRAW_RECT, but with a rotation. Seems to be broken.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `width` | `float` |
| `height` | `float` |
| `rotation` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `a` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_RECT_ROTATED)

---
## DROP_PLAYER
**Hash:** `0xBA0613E1` | **Returns:** `void`
**Alt name:** `DropPlayer`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `reason` | `char*` |

[View docs](https://cfxnatives.dev/natives/DROP_PLAYER)

---
## DUPLICATE_FUNCTION_REFERENCE
**Hash:** `0xF4E2079D` | **Returns:** `char*`
**Alt name:** `DuplicateFunctionReference`

**Parameters:**
| Name | Type |
|------|------|
| `referenceIdentity` | `char*` |

[View docs](https://cfxnatives.dev/natives/DUPLICATE_FUNCTION_REFERENCE)

---
## ENABLE_EDITOR_RUNTIME
**Hash:** `0xC383871D` | **Returns:** `void`
**Alt name:** `EnableEditorRuntime`

Enables the editor runtime mode, changing game behavior to track entity metadata.
This function supports SDK infrastructure and is not intended to be used directly from your code.

[View docs](https://cfxnatives.dev/natives/ENABLE_EDITOR_RUNTIME)

---
## ENABLE_ENHANCED_HOST_SUPPORT
**Hash:** `0xF97B1C93` | **Returns:** `void`
**Alt name:** `EnableEnhancedHostSupport`

**Parameters:**
| Name | Type |
|------|------|
| `enabled` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ENABLE_ENHANCED_HOST_SUPPORT)

---
## END_FIND_KVP
**Hash:** `0xB3210203` | **Returns:** `void`
**Alt name:** `EndFindKvp`

**Parameters:**
| Name | Type |
|------|------|
| `handle` | `int` |

[View docs](https://cfxnatives.dev/natives/END_FIND_KVP)

---
## END_FIND_OBJECT
**Hash:** `0xDEDA4E50` | **Returns:** `void`
**Alt name:** `EndFindObject`

**Parameters:**
| Name | Type |
|------|------|
| `findHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/END_FIND_OBJECT)

---
## END_FIND_PED
**Hash:** `0x9615C2AD` | **Returns:** `void`
**Alt name:** `EndFindPed`

**Parameters:**
| Name | Type |
|------|------|
| `findHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/END_FIND_PED)

---
## END_FIND_PICKUP
**Hash:** `0x3C407D53` | **Returns:** `void`
**Alt name:** `EndFindPickup`

**Parameters:**
| Name | Type |
|------|------|
| `findHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/END_FIND_PICKUP)

---
## END_FIND_VEHICLE
**Hash:** `0x9227415A` | **Returns:** `void`
**Alt name:** `EndFindVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `findHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/END_FIND_VEHICLE)

---
## ENSURE_ENTITY_STATE_BAG
**Hash:** `0x3BB78F05` | **Returns:** `void`
**Alt name:** `EnsureEntityStateBag`

Internal function for ensuring an entity has a state bag.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/ENSURE_ENTITY_STATE_BAG)

---
## ENTER_CURSOR_MODE
**Hash:** `0x780DA86` | **Returns:** `void`
**Alt name:** `EnterCursorMode`

Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
SDK infrastructure and is not intended to be used directly from your code.

[View docs](https://cfxnatives.dev/natives/ENTER_CURSOR_MODE)

---
## EXECUTE_COMMAND
**Hash:** `0x561C060B` | **Returns:** `void`
**Alt name:** `ExecuteCommand`

Depending on your use case you may need to use `add_acl resource.<your_resource_name> command.<command_name> allow` to use this native in your resource.

**Parameters:**
| Name | Type |
|------|------|
| `commandString` | `char*` |

**Example:**
```lua
Citizen.CreateThread(function()
  -- stop the server after 1 minute
  Citizen.Wait(60000)
  ExecuteCommand("quit Shortlived")
end)
```

[View docs](https://cfxnatives.dev/natives/EXECUTE_COMMAND)

---
## EXPERIMENTAL_LOAD_CLONE_CREATE
**Hash:** `0xD2CB95A3` | **Returns:** `Entity`
**Alt name:** `ExperimentalLoadCloneCreate`

This native is not implemented.

**Parameters:**
| Name | Type |
|------|------|
| `data` | `char*` |
| `objectId` | `int` |
| `tree` | `char*` |

[View docs](https://cfxnatives.dev/natives/EXPERIMENTAL_LOAD_CLONE_CREATE)

---
## EXPERIMENTAL_LOAD_CLONE_SYNC
**Hash:** `0x6BC189AC` | **Returns:** `void`
**Alt name:** `ExperimentalLoadCloneSync`

This native is not implemented.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `data` | `char*` |

[View docs](https://cfxnatives.dev/natives/EXPERIMENTAL_LOAD_CLONE_SYNC)

---
## EXPERIMENTAL_SAVE_CLONE_CREATE
**Hash:** `0x9D65CAD2` | **Returns:** `char*`
**Alt name:** `ExperimentalSaveCloneCreate`

This native is not implemented.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/EXPERIMENTAL_SAVE_CLONE_CREATE)

---
## EXPERIMENTAL_SAVE_CLONE_SYNC
**Hash:** `0x38D19210` | **Returns:** `char*`
**Alt name:** `ExperimentalSaveCloneSync`

This native is not implemented.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/EXPERIMENTAL_SAVE_CLONE_SYNC)

---
## FIND_FIRST_OBJECT
**Hash:** `0xFAA6CB5D` | **Returns:** `int`
**Alt name:** `FindFirstObject`

**Parameters:**
| Name | Type |
|------|------|
| `outEntity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/FIND_FIRST_OBJECT)

---
## FIND_FIRST_PED
**Hash:** `0xFB012961` | **Returns:** `int`
**Alt name:** `FindFirstPed`

**Parameters:**
| Name | Type |
|------|------|
| `outEntity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/FIND_FIRST_PED)

---
## FIND_FIRST_PICKUP
**Hash:** `0x3FF9D340` | **Returns:** `int`
**Alt name:** `FindFirstPickup`

**Parameters:**
| Name | Type |
|------|------|
| `outEntity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/FIND_FIRST_PICKUP)

---
## FIND_FIRST_VEHICLE
**Hash:** `0x15E55694` | **Returns:** `int`
**Alt name:** `FindFirstVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `outEntity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/FIND_FIRST_VEHICLE)

---
## FIND_KVP
**Hash:** `0xBD7BEBC5` | **Returns:** `char*`
**Alt name:** `FindKvp`

**Parameters:**
| Name | Type |
|------|------|
| `handle` | `int` |

[View docs](https://cfxnatives.dev/natives/FIND_KVP)

---
## FIND_NEXT_OBJECT
**Hash:** `0x4E129DBF` | **Returns:** `BOOL`
**Alt name:** `FindNextObject`

**Parameters:**
| Name | Type |
|------|------|
| `findHandle` | `int` |
| `outEntity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/FIND_NEXT_OBJECT)

---
## FIND_NEXT_PED
**Hash:** `0xAB09B548` | **Returns:** `BOOL`
**Alt name:** `FindNextPed`

**Parameters:**
| Name | Type |
|------|------|
| `findHandle` | `int` |
| `outEntity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/FIND_NEXT_PED)

---
## FIND_NEXT_PICKUP
**Hash:** `0x4107EF0F` | **Returns:** `BOOL`
**Alt name:** `FindNextPickup`

**Parameters:**
| Name | Type |
|------|------|
| `findHandle` | `int` |
| `outEntity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/FIND_NEXT_PICKUP)

---
## FIND_NEXT_VEHICLE
**Hash:** `0x8839120D` | **Returns:** `BOOL`
**Alt name:** `FindNextVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `findHandle` | `int` |
| `outEntity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/FIND_NEXT_VEHICLE)

---
## FLAG_SERVER_AS_PRIVATE
**Hash:** `0x13B6855D` | **Returns:** `void`
**Alt name:** `FlagServerAsPrivate`

**Parameters:**
| Name | Type |
|------|------|
| `private_` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/FLAG_SERVER_AS_PRIVATE)

---
## FLUSH_RESOURCE_KVP
**Hash:** `0xE27C97A0` | **Returns:** `void`
**Alt name:** `FlushResourceKvp`

Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.

This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.

**Example:**
```lua
-- Bulk write many <key, value> pairs to the resource KVP.
local key = "bug_%d"
local value = "unintended_feature_%d"
for i=1,10000 do
	SetResourceKvpNoSync(key:format(i), value:format(i))
end

-- Ensure all data is synchronized to the filesystem
FlushResourceKvp()
```

[View docs](https://cfxnatives.dev/natives/FLUSH_RESOURCE_KVP)

---
## FORCE_SNOW_PASS
**Hash:** `0xE6E16170` | **Returns:** `void`
**Alt name:** `ForceSnowPass`

Forces the game snow pass to render.

**Parameters:**
| Name | Type |
|------|------|
| `enabled` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/FORCE_SNOW_PASS)

---
## FORMAT_STACK_TRACE
**Hash:** `0xD70C3BCA` | **Returns:** `char*`
**Alt name:** `FormatStackTrace`

An internal function for converting a stack trace object to a string.

**Parameters:**
| Name | Type |
|------|------|
| `traceData` | `object` |

[View docs](https://cfxnatives.dev/natives/FORMAT_STACK_TRACE)

---
## FREEZE_ENTITY_POSITION
**Hash:** `0x65C16D57` | **Returns:** `void`
**Alt name:** `FreezeEntityPosition`

Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).

**This is the server-side RPC native equivalent of the client native [FREEZE_ENTITY_POSITION](?\_0x428CA6DBD1094446).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~FREEZE_ENTITY_POSITION)

---
## GET_ACTIVE_PLAYERS
**Hash:** `0xCF143FB9` | **Returns:** `object`
**Alt name:** `GetActivePlayers`

Returns all player indices for 'active' physical players known to the client.
The data returned adheres to the following layout:

```
[127, 42, 13, 37]
```

[View docs](https://cfxnatives.dev/natives/GET_ACTIVE_PLAYERS)

---
## GET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE
**Hash:** `0x62FC38D0` | **Returns:** `float`
**Alt name:** `GetAirDragMultiplierForPlayersVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE)

---
## GET_ALL_OBJECTS
**Hash:** `0x6886C3FE` | **Returns:** `object`
**Alt name:** `GetAllObjects`

Returns all object handles known to the server.
The data returned adheres to the following layout:

```
[127, 42, 13, 37]
```

[View docs](https://cfxnatives.dev/natives/GET_ALL_OBJECTS)

---
## GET_ALL_PEDS
**Hash:** `0xB8584FEF` | **Returns:** `object`
**Alt name:** `GetAllPeds`

Returns all peds handles known to the server.
The data returned adheres to the following layout:

```
[127, 42, 13, 37]
```

**Example:**
```lua
-- This example prints information of every ped that has an owner.

for i, ped in ipairs(GetAllPeds()) do
    local pedOwner = NetworkGetEntityOwner(ped)
    if pedOwner > 0 then
       local playerName = GetPlayerName(pedOwner)
       local pedModel = GetEntityModel(ped)
       local pedArmour = GetPedArmour(ped)
       print("Ped : "..ped.." | Owner name : "..playerName.." | Model : "..pedModel.." | Armour : "..pedArmour)
    end
end
```

[View docs](https://cfxnatives.dev/natives/GET_ALL_PEDS)

---
## GET_ALL_ROPES
**Hash:** `0x760A2D67` | **Returns:** `object`
**Alt name:** `GetAllRopes`

Returns all rope handles. The data returned adheres to the following layout:

```
[ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
```

[View docs](https://cfxnatives.dev/natives/GET_ALL_ROPES)

---
## GET_ALL_TRACK_JUNCTIONS
**Hash:** `0x81A08523` | **Returns:** `object`
**Alt name:** `GetAllTrackJunctions`

Returns all track junctions on the client
The data returned adheres to the following structure:

```
[1, 2, 4, 6, 69, 420]
```

[View docs](https://cfxnatives.dev/natives/GET_ALL_TRACK_JUNCTIONS)

---
## GET_ALL_VEHICLE_MODELS
**Hash:** `0xD7531645` | **Returns:** `object`
**Alt name:** `GetAllVehicleModels`

Returns all registered vehicle model names, including non-dlc vehicles and custom vehicles in no particular order.

**Example output**

```
	["dubsta", "dubsta2", "dubsta3", "myverycoolcar", "sultan", "sultanrs", ...]
```

This native will not return vehicles that are unregistered (i.e from a resource being stopped) during runtime.

**Example:**
```lua
RegisterCommand("spawnrandomcar", function()
	local vehicles = GetAllVehicleModels()
	local veh = vehicles[math.random(1, #vehicles)]
	RequestModel(veh)
	repeat Wait(0) until HasModelLoaded(veh)
	local veh = CreateVehicle(veh, GetEntityCoords(PlayerPedId()), GetEntityHeading(PlayerPedId()), true, false)
	SetPedIntoVehicle(PlayerPedId(), veh, -1)
end)
```

[View docs](https://cfxnatives.dev/natives/GET_ALL_VEHICLE_MODELS)

---
## GET_ALL_VEHICLES
**Hash:** `0x332169F5` | **Returns:** `object`
**Alt name:** `GetAllVehicles`

Returns all vehicle handles known to the server.
The data returned adheres to the following layout:

```
[127, 42, 13, 37]
```

[View docs](https://cfxnatives.dev/natives/GET_ALL_VEHICLES)

---
## GET_AMBIENT_PED_RANGE_MULTIPLIER
**Hash:** `0xB550232D` | **Returns:** `float`
**Alt name:** `GetAmbientPedRangeMultiplier`

A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).

[View docs](https://cfxnatives.dev/natives/GET_AMBIENT_PED_RANGE_MULTIPLIER)

---
## GET_AMBIENT_VEHICLE_RANGE_MULTIPLIER
**Hash:** `0x667EC929` | **Returns:** `float`
**Alt name:** `GetAmbientVehicleRangeMultiplier`

A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).

[View docs](https://cfxnatives.dev/natives/GET_AMBIENT_VEHICLE_RANGE_MULTIPLIER)

---
## GET_ASPECT_RATIO
**Hash:** `0x2CA8F641` | **Returns:** `float`
**Alt name:** `GetAspectRatio`

Gets the current aspect ratio

```lua
local ratio = GetAspectRatio()
print(string.format("%.2f", ratio))
```

[View docs](https://cfxnatives.dev/natives/CFX~GET_ASPECT_RATIO)

---
## GET_CALMING_QUAD_AT_COORDS
**Hash:** `0x870E8B40` | **Returns:** `int`
**Alt name:** `GetCalmingQuadAtCoords`

This native returns the index of a calming quad if the given point is inside its bounds.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |

**Example:**
```lua
local currentPedPosition = GetEntityCoords(PlayerPedId())
local calmingQuadIndex = GetCalmingQuadAtCoords(currentPedPosition.x, currentPedPosition.y)
```

[View docs](https://cfxnatives.dev/natives/GET_CALMING_QUAD_AT_COORDS)

---
## GET_CALMING_QUAD_BOUNDS
**Hash:** `0xFF60E63` | **Returns:** `BOOL`
**Alt name:** `GetCalmingQuadBounds`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `minX` | `int*` |
| `minY` | `int*` |
| `maxX` | `int*` |
| `maxY` | `int*` |

**Example:**
```lua
local success, minX, minY, maxX, maxY = GetCalmingQuadBounds(1)
```

[View docs](https://cfxnatives.dev/natives/GET_CALMING_QUAD_BOUNDS)

---
## GET_CALMING_QUAD_COUNT
**Hash:** `0xCEBFC42` | **Returns:** `int`
**Alt name:** `GetCalmingQuadCount`

**Example:**
```lua
local calmingQuadCount = GetCalmingQuadCount()
```

[View docs](https://cfxnatives.dev/natives/GET_CALMING_QUAD_COUNT)

---
## GET_CALMING_QUAD_DAMPENING
**Hash:** `0xB0E3A058` | **Returns:** `BOOL`
**Alt name:** `GetCalmingQuadDampening`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `calmingQuadDampening` | `float*` |

**Example:**
```lua
local success, dampening = GetCalmingQuadDampening(1)
```

[View docs](https://cfxnatives.dev/natives/GET_CALMING_QUAD_DAMPENING)

---
## GET_CAM_MATRIX
**Hash:** `0x8F57A89D` | **Returns:** `void`
**Alt name:** `GetCamMatrix`

Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.

**Parameters:**
| Name | Type |
|------|------|
| `camera` | `Cam` |
| `rightVector` | `Vector3*` |
| `forwardVector` | `Vector3*` |
| `upVector` | `Vector3*` |
| `position` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/GET_CAM_MATRIX)

---
## GET_CLIENT_CONFIG_BOOL
**Hash:** `0xADA7DB9D` | **Returns:** `BOOL`
**Alt name:** `GetClientConfigBool`

Returns whether a specific client configuration flag is currently enabled.
You can find a list of configuration flags in [`SET_CLIENT_CONFIG_BOOL`](#\_0xD174EF7E).

**Parameters:**
| Name | Type |
|------|------|
| `flagIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_CLIENT_CONFIG_BOOL)

---
## GET_CLOSEST_TRACK_NODES
**Hash:** `0x59FC24A7` | **Returns:** `object`
**Alt name:** `GetClosestTrackNodes`

Get all track nodes and their track ids within the radius of the specified coordinates.

**Parameters:**
| Name | Type |
|------|------|
| `position` | `Vector3` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_CLOSEST_TRACK_NODES)

---
## GET_CONSOLE_BUFFER
**Hash:** `0xE57429FA` | **Returns:** `char*`
**Alt name:** `GetConsoleBuffer`

Returns the current console output buffer.

[View docs](https://cfxnatives.dev/natives/GET_CONSOLE_BUFFER)

---
## GET_CONVAR
**Hash:** `0x6CCD2564` | **Returns:** `char*`
**Alt name:** `GetConvar`

Can be used to get a console variable of type `char*`, for example a string.

**Parameters:**
| Name | Type |
|------|------|
| `varName` | `char*` |
| `default_` | `char*` |

**Example:**
```lua
if GetConvar('voice_useNativeAudio', 'false') == 'true' then
    Citizen.Trace('Native Audio is enabled.')
end
```

[View docs](https://cfxnatives.dev/natives/GET_CONVAR)

---
## GET_CONVAR_BOOL
**Hash:** `0x7E8EBFE5` | **Returns:** `BOOL`
**Alt name:** `GetConvarBool`

Can be used to get a console variable casted back to `bool`.

**Parameters:**
| Name | Type |
|------|------|
| `varName` | `char*` |
| `defaultValue` | `BOOL` |

**Example:**
```lua
if GetConvarBool('dev_mode', false) then
    print("Dev Mode is eanbled, load dev mode menus")
end
```

[View docs](https://cfxnatives.dev/natives/GET_CONVAR_BOOL)

---
## GET_CONVAR_FLOAT
**Hash:** `0x9E666D` | **Returns:** `float`
**Alt name:** `GetConvarFloat`

This will have floating point inaccuracy.

**Parameters:**
| Name | Type |
|------|------|
| `varName` | `char*` |
| `defaultValue` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_CONVAR_FLOAT)

---
## GET_CONVAR_INT
**Hash:** `0x935C0AB2` | **Returns:** `int`
**Alt name:** `GetConvarInt`

Can be used to get a console variable casted back to `int` (an integer value).

**Parameters:**
| Name | Type |
|------|------|
| `varName` | `char*` |
| `default_` | `int` |

**Example:**
```lua
if GetConvarInt('remainingRounds', 0) < 900 then
    Citizen.Trace("Less than 900 rounds remaining...")
end
```

[View docs](https://cfxnatives.dev/natives/GET_CONVAR_INT)

---
## GET_CURRENT_GAME_NAME
**Hash:** `0xACA18ECD` | **Returns:** `char*`
**Alt name:** `GetCurrentGameName`

This native returns the currently used game's name.

[View docs](https://cfxnatives.dev/natives/GET_CURRENT_GAME_NAME)

---
## GET_CURRENT_PED_WEAPON
**Hash:** `0xB0237302` | **Returns:** `Hash`
**Alt name:** `GetCurrentPedWeapon`

Returns the hash of weapon the Ped is currently using.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_CURRENT_PED_WEAPON)

---
## GET_CURRENT_RESOURCE_NAME
**Hash:** `0xE5E9EBBB` | **Returns:** `char*`
**Alt name:** `GetCurrentResourceName`

Returns the name of the currently executing resource.

[View docs](https://cfxnatives.dev/natives/GET_CURRENT_RESOURCE_NAME)

---
## GET_CURRENT_SCREEN_RESOLUTION
**Hash:** `0x337F0116` | **Returns:** `void`
**Alt name:** `GetCurrentScreenResolution`

Gets the current screen resolution.

```lua
local  width, height = GetCurrentScreenResolution()
print(string.format("Current screen resolution: %dx%d", width, height))

```

**Parameters:**
| Name | Type |
|------|------|
| `width` | `int*` |
| `height` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_CURRENT_SCREEN_RESOLUTION)

---
## GET_CURRENT_SERVER_ENDPOINT
**Hash:** `0xEA11BFBA` | **Returns:** `char*`
**Alt name:** `GetCurrentServerEndpoint`

Returns the peer address of the remote game server that the user is currently connected to.

[View docs](https://cfxnatives.dev/natives/GET_CURRENT_SERVER_ENDPOINT)

---
## GET_DUI_HANDLE
**Hash:** `0x1655D41D` | **Returns:** `char*`
**Alt name:** `GetDuiHandle`

Returns the NUI window handle for a specified DUI browser object.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |

[View docs](https://cfxnatives.dev/natives/GET_DUI_HANDLE)

---
## GET_ENTITIES_IN_RADIUS
**Hash:** `0xDFFBA12F` | **Returns:** `object`
**Alt name:** `GetEntitiesInRadius`

### Supported types

*   \[1] : Peds (including animals) and players.
*   \[2] : Vehicles.
*   \[3] : Objects (props), doors, and projectiles.

### Coordinates need to be send unpacked (x,y,z)

```lua

-- Define the allowed model hashes
local allowedModelHashes = { GetHashKey("p_crate03x"), GetHashKey("p_crate22x") }

-- Get the player's current coordinates
local playerCoords = GetEntityCoords(PlayerPedId())

-- Retrieve all entities of type Object (type 3) within a radius of 10.0 units
-- that match the allowed model hashes
-- and sort output entities by distance
local entities = GetEntitiesInRadius(playerCoords.x, playerCoords.y, playerCoords.z, 10.0, 3, true, allowedModelHashes)

-- Iterate through the list of entities and print their ids
for i = 1, #entities do
    local entity = entities[i]
    print(entity)
end

```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `entityType` | `int` |
| `sortByDistance` | `BOOL` |
| `models` | `object` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITIES_IN_RADIUS)

---
## GET_ENTITY_ADDRESS
**Hash:** `0x9A3144BC` | **Returns:** `Any*`
**Alt name:** `GetEntityAddress`

**Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.

Returns the memory address of an entity.

This native is intended for singleplayer debugging, and may not be available during multiplayer.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_ADDRESS)

---
## GET_ENTITY_ARCHETYPE_NAME
**Hash:** `0x47B870F5` | **Returns:** `char*`
**Alt name:** `GetEntityArchetypeName`

Returns entity's archetype name, if available.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_ARCHETYPE_NAME)

---
## GET_ENTITY_ATTACHED_TO
**Hash:** `0xFE1589F9` | **Returns:** `Entity`
**Alt name:** `GetEntityAttachedTo`

Gets the entity that this entity is attached to.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_ATTACHED_TO)

---
## GET_ENTITY_COLLISION_DISABLED
**Hash:** `0xE8C0C629` | **Returns:** `bool`
**Alt name:** `GetEntityCollisionDisabled`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_COLLISION_DISABLED)

---
## GET_ENTITY_COORDS
**Hash:** `0x1647F1CB` | **Returns:** `Vector3`
**Alt name:** `GetEntityCoords`

Gets the current coordinates for a specified entity. This native is used server side when using OneSync.

See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

**Example:**
```lua
local function ShowCoordinates()
    local player = source
    local ped = GetPlayerPed(player)
    local playerCoords = GetEntityCoords(ped)

    print(playerCoords) -- vector3(...)
end

RegisterNetEvent("myCoordinates")
AddEventHandler("myCoordinates", ShowCoordinates)
```

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_COORDS)

---
## GET_ENTITY_FROM_STATE_BAG_NAME
**Hash:** `0x4BDF1867` | **Returns:** `Entity`
**Alt name:** `GetEntityFromStateBagName`

Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](#\_0x5BA35AAF).

**Parameters:**
| Name | Type |
|------|------|
| `bagName` | `char*` |

**Example:**
```js
AddStateBagChangeHandler("blockTasks", null, async (bagName, key, value /* boolean */) => {
    let entity = GetEntityFromStateBagName(bagName);
    // Whoops, we were don't have a valid entity!
    if (entity === 0) return;
    // We don't want to freeze the entity position if the entity collision hasn't loaded yet
    while (!HasCollisionLoadedAroundEntity(entity)) {
        // The entity went out of our scope before the collision loaded
        if (!DoesEntityExist(entity)) return;
        await Delay(250);
    }
    SetEntityInvincible(entity, value)
    FreezeEntityPosition(entity, value)
    TaskSetBlockingOfNonTemporaryEvents(entity, value)
})
```

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_FROM_STATE_BAG_NAME)

---
## GET_ENTITY_HEADING
**Hash:** `0x972CC383` | **Returns:** `float`
**Alt name:** `GetEntityHeading`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_HEADING)

---
## GET_ENTITY_HEALTH
**Hash:** `0x8E3222B7` | **Returns:** `int`
**Alt name:** `GetEntityHealth`

Only works for vehicle and peds

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_HEALTH)

---
## GET_ENTITY_INDEX_FROM_MAPDATA
**Hash:** `0xEE43540D` | **Returns:** `int`
**Alt name:** `GetEntityIndexFromMapdata`

Returns the transient entity index for a specified mapdata/entity pair.
This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `mapdata` | `int` |
| `entity` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_INDEX_FROM_MAPDATA)

---
## GET_ENTITY_MAPDATA_OWNER
**Hash:** `0xF6B815C5` | **Returns:** `BOOL`
**Alt name:** `GetEntityMapdataOwner`

Retrieves the map data and entity handles from a specific entity.
This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `mapdataHandle` | `int*` |
| `entityHandle` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_MAPDATA_OWNER)

---
## GET_ENTITY_MAX_HEALTH
**Hash:** `0xC7AE6AA1` | **Returns:** `int`
**Alt name:** `GetEntityMaxHealth`

Currently it only works with peds.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_MAX_HEALTH)

---
## GET_ENTITY_MODEL
**Hash:** `0xDAFCB3EC` | **Returns:** `Hash`
**Alt name:** `GetEntityModel`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_MODEL)

---
## GET_ENTITY_ORPHAN_MODE
**Hash:** `0xD16EA02F` | **Returns:** `int`
**Alt name:** `GetEntityOrphanMode`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_ORPHAN_MODE)

---
## GET_ENTITY_POPULATION_TYPE
**Hash:** `0xFC30DDFF` | **Returns:** `int`
**Alt name:** `GetEntityPopulationType`

This native gets an entity's population type.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_POPULATION_TYPE)

---
## GET_ENTITY_REMOTE_SYNCED_SCENES_ALLOWED
**Hash:** `0x91B38FB6` | **Returns:** `BOOL`
**Alt name:** `GetEntityRemoteSyncedScenesAllowed`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_REMOTE_SYNCED_SCENES_ALLOWED)

---
## GET_ENTITY_ROTATION
**Hash:** `0x8FF45B04` | **Returns:** `Vector3`
**Alt name:** `GetEntityRotation`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_ROTATION)

---
## GET_ENTITY_ROTATION_VELOCITY
**Hash:** `0x9BF8A73F` | **Returns:** `Vector3`
**Alt name:** `GetEntityRotationVelocity`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_ROTATION_VELOCITY)

---
## GET_ENTITY_ROUTING_BUCKET
**Hash:** `0xED4B0486` | **Returns:** `int`
**Alt name:** `GetEntityRoutingBucket`

Gets the routing bucket for the specified entity.

Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_ROUTING_BUCKET)

---
## GET_ENTITY_SCRIPT
**Hash:** `0xB7F70784` | **Returns:** `char*`
**Alt name:** `GetEntityScript`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_SCRIPT)

---
## GET_ENTITY_SPEED
**Hash:** `0x9E1E4798` | **Returns:** `float`
**Alt name:** `GetEntitySpeed`

Gets the current speed of the entity in meters per second.

```
To convert to MPH: speed * 2.236936
To convert to KPH: speed * 3.6
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_SPEED)

---
## GET_ENTITY_TYPE
**Hash:** `0xB1BD08D` | **Returns:** `int`
**Alt name:** `GetEntityType`

Gets the entity type (as an integer), which can be one of the following defined down below:

**The following entities will return type `1`:**

*   Ped
*   Player
*   Animal (Red Dead Redemption 2)
*   Horse (Red Dead Redemption 2)

**The following entities will return type `2`:**

*   Automobile
*   Bike
*   Boat
*   Heli
*   Plane
*   Submarine
*   Trailer
*   Train
*   DraftVeh (Red Dead Redemption 2)

**The following entities will return type `3`:**

*   Object
*   Door
*   Pickup

Otherwise, a value of `0` will be returned.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_TYPE)

---
## GET_ENTITY_VELOCITY
**Hash:** `0xC14C9B6B` | **Returns:** `Vector3`
**Alt name:** `GetEntityVelocity`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_ENTITY_VELOCITY)

---
## GET_EXTERNAL_KVP_FLOAT
**Hash:** `0x3CC98B25` | **Returns:** `float`
**Alt name:** `GetExternalKvpFloat`

A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.

**Parameters:**
| Name | Type |
|------|------|
| `resource` | `char*` |
| `key` | `char*` |

**Example:**
```lua
local kvpValue = GetExternalKvpFloat('drugs', 'mollis') 
if kvpValue then
	-- do something!
end
```

[View docs](https://cfxnatives.dev/natives/GET_EXTERNAL_KVP_FLOAT)

---
## GET_EXTERNAL_KVP_INT
**Hash:** `0x12B8D689` | **Returns:** `int`
**Alt name:** `GetExternalKvpInt`

A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.

**Parameters:**
| Name | Type |
|------|------|
| `resource` | `char*` |
| `key` | `char*` |

**Example:**
```lua
local kvpValue = GetExternalKvpInt('food', 'bananabread') 
if kvpValue then
	-- do something!
end
```

[View docs](https://cfxnatives.dev/natives/GET_EXTERNAL_KVP_INT)

---
## GET_EXTERNAL_KVP_STRING
**Hash:** `0x9080363A` | **Returns:** `char*`
**Alt name:** `GetExternalKvpString`

A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.

**Parameters:**
| Name | Type |
|------|------|
| `resource` | `char*` |
| `key` | `char*` |

**Example:**
```lua
local kvpValue = GetExternalKvpString('food', 'codfish') 
if kvpValue then
	-- do something!
end
```

[View docs](https://cfxnatives.dev/natives/GET_EXTERNAL_KVP_STRING)

---
## GET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER
**Hash:** `0x2C048945` | **Returns:** `float`
**Alt name:** `GetFallDamageLandOnFootMultiplier`

A getter for [SET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER](#\_0x164A08C9).

[View docs](https://cfxnatives.dev/natives/GET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER)

---
## GET_FALL_DAMAGE_MULTIPLIER
**Hash:** `0x7C46A6F0` | **Returns:** `float`
**Alt name:** `GetFallDamageMultiplier`

A getter for [SET_FALL_DAMAGE_MULTIPLIER](#\_0xF2E1A531).

[View docs](https://cfxnatives.dev/natives/GET_FALL_DAMAGE_MULTIPLIER)

---
## GET_FUEL_CONSUMPTION_RATE_MULTIPLIER
**Hash:** `0x5550BF9F` | **Returns:** `float`
**Alt name:** `GetFuelConsumptionRateMultiplier`

[View docs](https://cfxnatives.dev/natives/GET_FUEL_CONSUMPTION_RATE_MULTIPLIER)

---
## GET_FUEL_CONSUMPTION_STATE
**Hash:** `0xC66CD90C` | **Returns:** `BOOL`
**Alt name:** `GetFuelConsumptionState`

[View docs](https://cfxnatives.dev/natives/GET_FUEL_CONSUMPTION_STATE)

---
## GET_GAME_BUILD_NUMBER
**Hash:** `0x804B9F7B` | **Returns:** `int`
**Alt name:** `GetGameBuildNumber`

Returns the internal build number of the current game being executed.

Possible values:

*   FiveM
    *   1604
    *   2060
    *   2189
    *   2372
    *   2545
    *   2612
    *   2699
    *   2802
    *   2944
    *   3095
    *   3258
    *   3323
    *   3407
    *   3570
    *   3751
*   RedM
    *   1311
    *   1355
    *   1436
    *   1491
*   LibertyM
    *   43
*   FXServer
    *   0

[View docs](https://cfxnatives.dev/natives/GET_GAME_BUILD_NUMBER)

---
## GET_GAME_NAME
**Hash:** `0xE8EAA18B` | **Returns:** `char*`
**Alt name:** `GetGameName`

Returns the current game being executed.

Possible values:

| Return value | Meaning                        |
| ------------ | ------------------------------ |
| `fxserver`   | Server-side code ('Duplicity') |
| `fivem`      | FiveM for GTA V                |
| `libertym`   | LibertyM for GTA IV            |
| `redm`       | RedM for Red Dead Redemption 2 |

[View docs](https://cfxnatives.dev/natives/GET_GAME_NAME)

---
## GET_GAME_POOL
**Hash:** `0x2B9D4F50` | **Returns:** `object`
**Alt name:** `GetGamePool`

Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
follows:

```json
[ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
```

### Supported pools

*   `CPed`: Peds (including animals) and players.
*   `CObject`: Objects (props), doors, and projectiles.
*   `CNetObject`: Networked objects
*   `CVehicle`: Vehicles.
*   `CPickup`: Pickups.

**Parameters:**
| Name | Type |
|------|------|
| `poolName` | `char*` |

**Example:**
```lua
local vehiclePool = GetGamePool('CVehicle') -- Get the list of vehicles (entities) from the pool
for i = 1, #vehiclePool do -- loop through each vehicle (entity)
    if GetPedInVehicleSeat(vehiclePool[i], -1) == 0 then
        DeleteEntity(vehiclePool[i]) -- Delete vehicles (entities) that don't have a driver
    end
end
```

[View docs](https://cfxnatives.dev/natives/GET_GAME_POOL)

---
## GET_GAME_TIMER
**Hash:** `0xA4EA0691` | **Returns:** `long`
**Alt name:** `GetGameTimer`

Gets the current game timer in milliseconds.

[View docs](https://cfxnatives.dev/natives/CFX~GET_GAME_TIMER)

---
## GET_GLOBAL_PASSENGER_MASS_MULTIPLIER
**Hash:** `0x78951816` | **Returns:** `float`
**Alt name:** `GetGlobalPassengerMassMultiplier`

A getter for [SET_GLOBAL_PASSENGER_MASS_MULTIPLIER](#\_0x3422291C).

[View docs](https://cfxnatives.dev/natives/GET_GLOBAL_PASSENGER_MASS_MULTIPLIER)

---
## GET_HASH_KEY
**Hash:** `0x98EFF6F1` | **Returns:** `Hash`
**Alt name:** `GetHashKey`

This native converts the passed string to a hash.

**Parameters:**
| Name | Type |
|------|------|
| `model` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_HASH_KEY)

---
## GET_HELI_BODY_HEALTH
**Hash:** `0xA886495D` | **Returns:** `int`
**Alt name:** `GetHeliBodyHealth`

**Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_BODY_HEALTH)

---
## GET_HELI_DISABLE_EXPLODE_FROM_BODY_DAMAGE
**Hash:** `0x82AFC0A3` | **Returns:** `BOOL`
**Alt name:** `GetHeliDisableExplodeFromBodyDamage`

This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_DISABLE_EXPLODE_FROM_BODY_DAMAGE)

---
## GET_HELI_ENGINE_HEALTH
**Hash:** `0xA0FA0354` | **Returns:** `int`
**Alt name:** `GetHeliEngineHealth`

**Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_ENGINE_HEALTH)

---
## GET_HELI_GAS_TANK_HEALTH
**Hash:** `0xD4EC7858` | **Returns:** `int`
**Alt name:** `GetHeliGasTankHealth`

**Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_GAS_TANK_HEALTH)

---
## GET_HELI_MAIN_ROTOR_DAMAGE_SCALE
**Hash:** `0xC37D668` | **Returns:** `float`
**Alt name:** `GetHeliMainRotorDamageScale`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_MAIN_ROTOR_DAMAGE_SCALE)

---
## GET_HELI_MAIN_ROTOR_HEALTH
**Hash:** `0xF01E2AAB` | **Returns:** `float`
**Alt name:** `GetHeliMainRotorHealth`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_HELI_MAIN_ROTOR_HEALTH)

---
## GET_HELI_PITCH_CONTROL
**Hash:** `0x1944AC95` | **Returns:** `float`
**Alt name:** `GetHeliPitchControl`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_PITCH_CONTROL)

---
## GET_HELI_REAR_ROTOR_DAMAGE_SCALE
**Hash:** `0xC40161E2` | **Returns:** `float`
**Alt name:** `GetHeliRearRotorDamageScale`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_REAR_ROTOR_DAMAGE_SCALE)

---
## GET_HELI_REAR_ROTOR_HEALTH
**Hash:** `0x33EE6E2B` | **Returns:** `float`
**Alt name:** `GetHeliRearRotorHealth`

This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_REAR_ROTOR_HEALTH)

---
## GET_HELI_ROLL_CONTROL
**Hash:** `0x12948DE9` | **Returns:** `float`
**Alt name:** `GetHeliRollControl`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_ROLL_CONTROL)

---
## GET_HELI_TAIL_ROTOR_DAMAGE_SCALE
**Hash:** `0x22239130` | **Returns:** `float`
**Alt name:** `GetHeliTailRotorDamageScale`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_TAIL_ROTOR_DAMAGE_SCALE)

---
## GET_HELI_TAIL_ROTOR_HEALTH
**Hash:** `0xA41BC13D` | **Returns:** `float`
**Alt name:** `GetHeliTailRotorHealth`

**Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_HELI_TAIL_ROTOR_HEALTH)

---
## GET_HELI_THROTTLE_CONTROL
**Hash:** `0x8E86238D` | **Returns:** `float`
**Alt name:** `GetHeliThrottleControl`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_THROTTLE_CONTROL)

---
## GET_HELI_YAW_CONTROL
**Hash:** `0x8FDC0768` | **Returns:** `float`
**Alt name:** `GetHeliYawControl`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_HELI_YAW_CONTROL)

---
## GET_HOST_ID
**Hash:** `0x5F70F5A3` | **Returns:** `char*`
**Alt name:** `GetHostId`

[View docs](https://cfxnatives.dev/natives/GET_HOST_ID)

---
## GET_HUD_COMPONENT_ALIGN
**Hash:** `0xCD949E20` | **Returns:** `void`
**Alt name:** `GetHudComponentAlign`

See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |
| `horizontalAlign` | `int*` |
| `verticalAlign` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_HUD_COMPONENT_ALIGN)

---
## GET_HUD_COMPONENT_NAME
**Hash:** `0xA91866BC` | **Returns:** `char*`
**Alt name:** `GetHudComponentName`

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_HUD_COMPONENT_NAME)

---
## GET_HUD_COMPONENT_SIZE
**Hash:** `0x12217D33` | **Returns:** `Vector3`
**Alt name:** `GetHudComponentSize`

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_HUD_COMPONENT_SIZE)

---
## GET_INSTANCE_ID
**Hash:** `0x9F1C4383` | **Returns:** `int`
**Alt name:** `GetInstanceId`

[View docs](https://cfxnatives.dev/natives/GET_INSTANCE_ID)

---
## GET_INTERIOR_ENTITIES_EXTENTS
**Hash:** `0x322B1192` | **Returns:** `void`
**Alt name:** `GetInteriorEntitiesExtents`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `bbMinX` | `float*` |
| `bbMinY` | `float*` |
| `bbMinZ` | `float*` |
| `bbMaxX` | `float*` |
| `bbMaxY` | `float*` |
| `bbMaxZ` | `float*` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local minX, minY, minZ, maxX, maxY, maxZ = GetInteriorEntitiesExtents(interiorId, roomId)
  print("current entities extents is: " .. vec(minX, minY, minZ) .." / " .. vec(maxX, maxY, maxZ))
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_ENTITIES_EXTENTS)

---
## GET_INTERIOR_PORTAL_CORNER_POSITION
**Hash:** `0xF772BB2C` | **Returns:** `void`
**Alt name:** `GetInteriorPortalCornerPosition`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `cornerIndex` | `int` |
| `posX` | `float*` |
| `posY` | `float*` |
| `posZ` | `float*` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local portalIndex = 0
  local cornerIndex = 0

  local x, y, z = GetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex)
  print("position of portal " .. portalIndex .. "corner index " .. cornerIndex .. " is: " .. vec(x, y, z))
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_CORNER_POSITION)

---
## GET_INTERIOR_PORTAL_COUNT
**Hash:** `0xD05BB8B1` | **Returns:** `int`
**Alt name:** `GetInteriorPortalCount`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local count = GetInteriorPortalCount(interiorId)
  print("interior " .. interiorId .. "has " .. count .. " portals")
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_COUNT)

---
## GET_INTERIOR_PORTAL_ENTITY_ARCHETYPE
**Hash:** `0x9A0E1700` | **Returns:** `int`
**Alt name:** `GetInteriorPortalEntityArchetype`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `entityIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local portalIndex = 0

if interiorId ~= 0 then
  local count = GetInteriorPortalEntityCount(interiorId, portalIndex)
  for i=0, count-1 do
    local archetype = GetInteriorPortalEntityArchetype(interiorId, portalIndex, i)
    print("portal " .. portalIndex .." entity " .. i .. " archetype is: " .. archetype)
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_ENTITY_ARCHETYPE)

---
## GET_INTERIOR_PORTAL_ENTITY_COUNT
**Hash:** `0xC68021B` | **Returns:** `int`
**Alt name:** `GetInteriorPortalEntityCount`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local portalIndex = 0

if interiorId ~= 0 then
  local count = GetInteriorPortalEntityCount(interiorId, portalIndex)
  print("portal " .. portalIndex .." entity count is: " .. count)
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_ENTITY_COUNT)

---
## GET_INTERIOR_PORTAL_ENTITY_FLAG
**Hash:** `0x9DA2E811` | **Returns:** `int`
**Alt name:** `GetInteriorPortalEntityFlag`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `entityIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local portalIndex = 0

if interiorId ~= 0 then
  local count = GetInteriorPortalEntityCount(interiorId, portalIndex)
  for i=0, count-1 do
    local flag = GetInteriorPortalEntityFlag(interiorId, portalIndex, i)
    print("portal " .. portalIndex .." entity " .. i .. " flag is: " .. flag)
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_ENTITY_FLAG)

---
## GET_INTERIOR_PORTAL_ENTITY_POSITION
**Hash:** `0x9B7AB83C` | **Returns:** `void`
**Alt name:** `GetInteriorPortalEntityPosition`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `entityIndex` | `int` |
| `posX` | `float*` |
| `posY` | `float*` |
| `posZ` | `float*` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local portalIndex = 0

if interiorId ~= 0 then
  local count = GetInteriorPortalEntityCount(interiorId, portalIndex)
  for i=0, count-1 do
    local x, y, z = GetInteriorPortalEntityPosition(interiorId, portalIndex, i)
    print("portal " .. portalIndex .." entity " .. i .. " position is: " .. vec3(x, y, z))
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_ENTITY_POSITION)

---
## GET_INTERIOR_PORTAL_ENTITY_ROTATION
**Hash:** `0x9F9CEB63` | **Returns:** `void`
**Alt name:** `GetInteriorPortalEntityRotation`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `entityIndex` | `int` |
| `rotX` | `float*` |
| `rotY` | `float*` |
| `rotZ` | `float*` |
| `rotW` | `float*` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local portalIndex = 0

if interiorId ~= 0 then
  local count = GetInteriorPortalEntityCount(interiorId, portalIndex)
  for i=0, count-1 do
    local x, y, z, w = GetInteriorPortalEntityRotation(interiorId, portalIndex, i)
    print("portal " .. portalIndex .." entity " .. i .. " rotation is: " .. vec4(x, y, z, w))
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_ENTITY_ROTATION)

---
## GET_INTERIOR_PORTAL_FLAG
**Hash:** `0xC74DA47C` | **Returns:** `int`
**Alt name:** `GetInteriorPortalFlag`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local portalFlag = GetInteriorPortalFlag(interiorId, 0)
  print("portal 0 flag is: " .. portalRoomFrom)
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_FLAG)

---
## GET_INTERIOR_PORTAL_ROOM_FROM
**Hash:** `0xAA9C141D` | **Returns:** `int`
**Alt name:** `GetInteriorPortalRoomFrom`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local roomIndex = 0

  local portalRoomFrom = GetInteriorPortalRoomFrom(interiorId, 0)
  print("portal " .. roomIndex .. " room FROM is: " .. portalRoomFrom)
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_ROOM_FROM)

---
## GET_INTERIOR_PORTAL_ROOM_TO
**Hash:** `0x3F47F0E8` | **Returns:** `int`
**Alt name:** `GetInteriorPortalRoomTo`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local roomIndex = 0

  local portalRoomTo = GetInteriorPortalRoomTo(interiorId, 0)
  print("portal " .. roomIndex .. " room TO is: " .. portalRoomTo)
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_PORTAL_ROOM_TO)

---
## GET_INTERIOR_POSITION
**Hash:** `0x77A435B0` | **Returns:** `void`
**Alt name:** `GetInteriorPosition`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `posX` | `float*` |
| `posY` | `float*` |
| `posZ` | `float*` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local x, y, z = GetInteriorPosition(interiorId)
  print("current interior " .. interiorId .. " position is: " .. vec(x, y, z))
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_POSITION)

---
## GET_INTERIOR_ROOM_COUNT
**Hash:** `0xA2737C2C` | **Returns:** `int`
**Alt name:** `GetInteriorRoomCount`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local count = GetInteriorRoomCount(interiorId)
  print("interior " .. interiorId .. "has " .. count .. " rooms")
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_ROOM_COUNT)

---
## GET_INTERIOR_ROOM_EXTENTS
**Hash:** `0xF9E795DD` | **Returns:** `void`
**Alt name:** `GetInteriorRoomExtents`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `roomIndex` | `int` |
| `bbMinX` | `float*` |
| `bbMinY` | `float*` |
| `bbMinZ` | `float*` |
| `bbMaxX` | `float*` |
| `bbMaxY` | `float*` |
| `bbMaxZ` | `float*` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local roomHash = GetRoomKeyFromEntity(playerPed)
local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

if roomId ~= -1 then
  local minX, minY, minZ, maxX, maxY, maxZ = GetInteriorRoomExtents(interiorId, roomId)
  print("current room extents is: " .. vec(minX, minY, minZ) .." / " .. vec(maxX, maxY, maxZ))
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_ROOM_EXTENTS)

---
## GET_INTERIOR_ROOM_FLAG
**Hash:** `0x6B7AF743` | **Returns:** `int`
**Alt name:** `GetInteriorRoomFlag`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `roomIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local roomHash = GetRoomKeyFromEntity(playerPed)
local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

if roomId ~= -1 then
  local roomFlag = GetInteriorRoomFlag(interiorId, roomId)
  print("current room flag is: " .. roomFlag)
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_ROOM_FLAG)

---
## GET_INTERIOR_ROOM_INDEX_BY_HASH
**Hash:** `0xE0EE05F8` | **Returns:** `int`
**Alt name:** `GetInteriorRoomIndexByHash`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `roomHash` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local roomHash = GetRoomKeyFromEntity(playerPed)
local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

if roomId ~= -1 then
  print("current room index is: " .. roomId)
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_ROOM_INDEX_BY_HASH)

---
## GET_INTERIOR_ROOM_NAME
**Hash:** `0x11755DF2` | **Returns:** `char*`
**Alt name:** `GetInteriorRoomName`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `roomIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local roomHash = GetRoomKeyFromEntity(playerPed)
local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

if roomId ~= -1 then
  local roomName = GetInteriorRoomName(interiorId, roomId)
  print("current room name is: " .. roomName)
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_ROOM_NAME)

---
## GET_INTERIOR_ROOM_TIMECYCLE
**Hash:** `0x82BA3F88` | **Returns:** `int`
**Alt name:** `GetInteriorRoomTimecycle`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `roomIndex` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local roomHash = GetRoomKeyFromEntity(playerPed)
local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

if roomId ~= -1 then
  local roomTimecycle = GetInteriorRoomTimecycle(interiorId, roomId)
  print("current room timecycle hash is: " .. roomTimecycle)
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_ROOM_TIMECYCLE)

---
## GET_INTERIOR_ROTATION
**Hash:** `0x5A039998` | **Returns:** `void`
**Alt name:** `GetInteriorRotation`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `rotx` | `float*` |
| `rotY` | `float*` |
| `rotZ` | `float*` |
| `rotW` | `float*` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local x, y, z, w = GetInteriorRotation(interiorId)
  print("current interior " .. interiorId .. " rotation is: " .. vec(x, y, z, w))
end
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_ROTATION)

---
## GET_INVOKING_RESOURCE
**Hash:** `0x4D52FE5B` | **Returns:** `char*`
**Alt name:** `GetInvokingResource`

[View docs](https://cfxnatives.dev/natives/GET_INVOKING_RESOURCE)

---
## GET_IS_HELI_ENGINE_RUNNING
**Hash:** `0x3EFE38D1` | **Returns:** `BOOL`
**Alt name:** `GetIsHeliEngineRunning`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_IS_HELI_ENGINE_RUNNING)

---
## GET_IS_VEHICLE_ENGINE_RUNNING
**Hash:** `0x7DC6D022` | **Returns:** `BOOL`
**Alt name:** `GetIsVehicleEngineRunning`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_IS_VEHICLE_ENGINE_RUNNING)

---
## GET_IS_VEHICLE_PRIMARY_COLOUR_CUSTOM
**Hash:** `0xD7EC8760` | **Returns:** `BOOL`
**Alt name:** `GetIsVehiclePrimaryColourCustom`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_IS_VEHICLE_PRIMARY_COLOUR_CUSTOM)

---
## GET_IS_VEHICLE_SECONDARY_COLOUR_CUSTOM
**Hash:** `0x288AD228` | **Returns:** `BOOL`
**Alt name:** `GetIsVehicleSecondaryColourCustom`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_IS_VEHICLE_SECONDARY_COLOUR_CUSTOM)

---
## GET_KILL_FALL_HEIGHT
**Hash:** `0x57888D4C` | **Returns:** `float`
**Alt name:** `GetKillFallHeight`

A getter for [SET_KILL_FALL_HEIGHT](#\_0x7E8D83E4).

[View docs](https://cfxnatives.dev/natives/GET_KILL_FALL_HEIGHT)

---
## GET_LANDING_GEAR_STATE
**Hash:** `0xA6F02670` | **Returns:** `int`
**Alt name:** `GetLandingGearState`

See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_LANDING_GEAR_STATE)

---
## GET_LAST_PED_IN_VEHICLE_SEAT
**Hash:** `0xF7C6792D` | **Returns:** `Entity`
**Alt name:** `GetLastPedInVehicleSeat`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `seatIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_LAST_PED_IN_VEHICLE_SEAT)

---
## GET_MAP_ZOOM_DATA_LEVEL
**Hash:** `0x1363A998` | **Returns:** `BOOL`
**Alt name:** `GetMapZoomDataLevel`

Returns the zoom level data by index from mapzoomdata.meta file.

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |
| `zoomScale` | `float*` |
| `zoomSpeed` | `float*` |
| `scrollSpeed` | `float*` |
| `tilesX` | `float*` |
| `tilesY` | `float*` |

[View docs](https://cfxnatives.dev/natives/GET_MAP_ZOOM_DATA_LEVEL)

---
## GET_MAPDATA_ENTITY_HANDLE
**Hash:** `0x30AA6911` | **Returns:** `BOOL`
**Alt name:** `GetMapdataEntityHandle`

Retrieves the map data entity handle.
This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `mapDataHash` | `int` |
| `entityInternalIdx` | `int` |
| `entityHandle` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_MAPDATA_ENTITY_HANDLE)

---
## GET_MAPDATA_ENTITY_MATRIX
**Hash:** `0x2C3CDA93` | **Returns:** `BOOL`
**Alt name:** `GetMapdataEntityMatrix`

Returns mapdata's entity matrix. This function supports SDK infrastructure and is not intended to be used directly from your code.

This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.

Matrix layout is as follows:

*   Element \[0], \[1] and \[2] should represent the right vector.
*   Element \[4], \[5] and \[6] should represent the forward vector.
*   Element \[8], \[9] and \[10] should represent the up vector.
*   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
*   All other elements should be \[0, 0, 0, 1].

**Parameters:**
| Name | Type |
|------|------|
| `mapDataHash` | `int` |
| `entityInternalIdx` | `int` |
| `matrixPtr` | `long` |

[View docs](https://cfxnatives.dev/natives/GET_MAPDATA_ENTITY_MATRIX)

---
## GET_MAPDATA_FROM_HASH_KEY
**Hash:** `0xD29D8EDD` | **Returns:** `int`
**Alt name:** `GetMapdataFromHashKey`

Returns the transient map data index for a specified hash.
This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `mapdataHandle` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_MAPDATA_FROM_HASH_KEY)

---
## GET_MINIMAP_TYPE
**Hash:** `0xA6FF71C9` | **Returns:** `int`
**Alt name:** `GetMinimapType`

Get the minimap type:

```
0 = Off,
1 = Regular,
2 = Expanded,
3 = Simple,
```

[View docs](https://cfxnatives.dev/natives/GET_MINIMAP_TYPE)

---
## GET_MOUNT
**Hash:** `0xDD31EC4E` | **Returns:** `Ped`
**Alt name:** `GetMount`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_MOUNT)

---
## GET_NET_TYPE_FROM_ENTITY
**Hash:** `0x23B2A641` | **Returns:** `int`
**Alt name:** `GetNetTypeFromEntity`

Gets the specific entity type (as an integer), which can be one of the following defined down below:

#### FiveM:

```cpp
enum eNetObjEntityType
{
    Automobile = 0,
    Bike = 1,
    Boat = 2,
    Door = 3,
    Heli = 4,
    Object = 5,
    Ped = 6,
    Pickup = 7,
    PickupPlacement = 8,
    Plane = 9,
    Submarine = 10,
    Player = 11,
    Trailer = 12,
    Train = 13
};
```

#### RedM:

```cpp
enum eNetObjEntityType
{
    Animal = 0,
    Automobile = 1,
    Bike = 2,
    Boat = 3,
    Door = 4,
    Heli = 5,
    Object = 6,
    Ped = 7,
    Pickup = 8,
    PickupPlacement = 9,
    Plane = 10,
    Submarine = 11,
    Player = 12,
    Trailer = 13,
    Train = 14,
    DraftVeh = 15,
    StatsTracker = 16,
    PropSet = 17,
    AnimScene = 18,
    GroupScenario = 19,
    Herd = 20,
    Horse = 21,
    WorldState = 22,
    WorldProjectile = 23,
    Incident = 24,
    Guardzone = 25,
    PedGroup = 26,
    CombatDirector = 27,
    PedSharedTargeting = 28,
    Persistent = 29
};
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_NET_TYPE_FROM_ENTITY)

---
## GET_NETWORK_WALK_MODE
**Hash:** `0x2CAFD5E9` | **Returns:** `bool`
**Alt name:** `GetNetworkWalkMode`

[View docs](https://cfxnatives.dev/natives/GET_NETWORK_WALK_MODE)

---
## GET_NUI_CURSOR_POSITION
**Hash:** `0xBDBA226F` | **Returns:** `void`
**Alt name:** `GetNuiCursorPosition`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `int*` |
| `y` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_NUI_CURSOR_POSITION)

---
## GET_NUM_PLAYER_IDENTIFIERS
**Hash:** `0xFF7F66AB` | **Returns:** `int`
**Alt name:** `GetNumPlayerIdentifiers`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_NUM_PLAYER_IDENTIFIERS)

---
## GET_NUM_PLAYER_INDICES
**Hash:** `0x63D13184` | **Returns:** `int`
**Alt name:** `GetNumPlayerIndices`

[View docs](https://cfxnatives.dev/natives/GET_NUM_PLAYER_INDICES)

---
## GET_NUM_PLAYER_TOKENS
**Hash:** `0x619E4A3D` | **Returns:** `int`
**Alt name:** `GetNumPlayerTokens`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_NUM_PLAYER_TOKENS)

---
## GET_NUM_RESOURCE_METADATA
**Hash:** `0x776E864` | **Returns:** `int`
**Alt name:** `GetNumResourceMetadata`

Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |
| `metadataKey` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_NUM_RESOURCE_METADATA)

---
## GET_NUM_RESOURCES
**Hash:** `0x863F27B` | **Returns:** `int`
**Alt name:** `GetNumResources`

[View docs](https://cfxnatives.dev/natives/GET_NUM_RESOURCES)

---
## GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS
**Hash:** `0x310D0271` | **Returns:** `int`
**Alt name:** `GetNumberOfPedCollectionDrawableVariations`

An analogue of [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842) that returns number of drawable variations inside a single collection instead of the total number across all collections.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `collection` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS)

---
## GET_NUMBER_OF_PED_COLLECTION_PROP_DRAWABLE_VARIATIONS
**Hash:** `0x3B6A13E1` | **Returns:** `int`
**Alt name:** `GetNumberOfPedCollectionPropDrawableVariations`

An analogue of [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47) that returns number of prop variations inside a single collection instead of the total number across all collections.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |
| `collection` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_NUMBER_OF_PED_COLLECTION_PROP_DRAWABLE_VARIATIONS)

---
## GET_NUMBER_OF_PED_COLLECTION_PROP_TEXTURE_VARIATIONS
**Hash:** `0x75CAF9CC` | **Returns:** `int`
**Alt name:** `GetNumberOfPedCollectionPropTextureVariations`

An alternative to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171) that uses local collection indexing instead of the global one.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |
| `collection` | `char*` |
| `propIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_NUMBER_OF_PED_COLLECTION_PROP_TEXTURE_VARIATIONS)

---
## GET_NUMBER_OF_PED_COLLECTION_TEXTURE_VARIATIONS
**Hash:** `0xD2C15D7` | **Returns:** `int`
**Alt name:** `GetNumberOfPedCollectionTextureVariations`

An alternative to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD) that uses local collection indexing instead of the global one.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `collection` | `char*` |
| `drawableId` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_NUMBER_OF_PED_COLLECTION_TEXTURE_VARIATIONS)

---
## GET_PARKED_VEHICLE_DENSITY_MULTIPLIER
**Hash:** `0xFF72DF84` | **Returns:** `float`
**Alt name:** `GetParkedVehicleDensityMultiplier`

A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).

[View docs](https://cfxnatives.dev/natives/GET_PARKED_VEHICLE_DENSITY_MULTIPLIER)

---
## GET_PASSWORD_HASH
**Hash:** `0x23473EA4` | **Returns:** `char*`
**Alt name:** `GetPasswordHash`

**Parameters:**
| Name | Type |
|------|------|
| `password` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PASSWORD_HASH)

---
## GET_PAUSE_MAP_POINTER_WORLD_POSITION
**Hash:** `0xE5AF7A82` | **Returns:** `Vector3`
**Alt name:** `GetPauseMapPointerWorldPosition`

Returns the world position the pointer is hovering on the pause map.

[View docs](https://cfxnatives.dev/natives/GET_PAUSE_MAP_POINTER_WORLD_POSITION)

---
## GET_PED_ARMOUR
**Hash:** `0x2CE311A7` | **Returns:** `int`
**Alt name:** `GetPedArmour`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PED_ARMOUR)

---
## GET_PED_BONE_MATRIX
**Hash:** `0x9C5E7C9C` | **Returns:** `void`
**Alt name:** `GetPedBoneMatrix`

Returns the bone matrix of the specified bone id. usefull for entity attachment

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `boneId` | `int` |
| `forwardVector` | `Vector3*` |
| `rightVector` | `Vector3*` |
| `upVector` | `Vector3*` |
| `position` | `Vector3*` |

**Example:**
```lua
local fowardVector, rightVector, upVector, position = GetPedBoneMatrix(PlayerPedId(),boneId)
```

[View docs](https://cfxnatives.dev/natives/GET_PED_BONE_MATRIX)

---
## GET_PED_CAUSE_OF_DEATH
**Hash:** `0x63458C27` | **Returns:** `Hash`
**Alt name:** `GetPedCauseOfDeath`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PED_CAUSE_OF_DEATH)

---
## GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE
**Hash:** `0x94EB1FE4` | **Returns:** `int`
**Alt name:** `GetPedCollectionLocalIndexFromDrawable`

Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B)) for the given global drawable ID. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `drawableId` | `int` |

**Example:**
```lua
local ped = PlayerPedId()
-- Top for mp_f_freemode_01. From female_freemode_beach collection under index 1.
-- Global index is 17 because there is 16 top variations in the base game collection that goes before the female_freemode_beach collection.
local name = GetPedDrawableCollectionName(ped, 11, 17)
local index = GetPedDrawableCollectionLocalIndex(ped, 11, 17)
-- Equivalent to SetPedComponentVariation(ped, 11, 17, 0, 0)
SetPedCollectionComponentVariation(ped, 11, name, index, 0, 0)
```

[View docs](https://cfxnatives.dev/natives/GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE)

---
## GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP
**Hash:** `0xFBDB885F` | **Returns:** `int`
**Alt name:** `GetPedCollectionLocalIndexFromProp`

Gets local index inside a collection (which can be obtained using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17)) for the given global prop index. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |
| `propIndex` | `int` |

**Example:**
```lua
local ped = PlayerPedId()
-- Hat for mp_f_freemode_01. From female_freemode_beach collection under index 1.
-- Global index is 21 because there is 20 head prop variations in the base game collection that goes before the female_freemode_beach collection.
local name = GetPedPropCollectionName(ped, 0, 21)
local index = GetPedPropCollectionLocalIndex(ped, 0, 21)
-- Equivalent to SetPedPropIndex(ped, 0, 21, 0, false)
SetPedCollectionPropIndex(ped, 0, name, index, 0, false)
```

[View docs](https://cfxnatives.dev/natives/GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP)

---
## GET_PED_COLLECTION_NAME
**Hash:** `0xFED5D83A` | **Returns:** `char*`
**Alt name:** `GetPedCollectionName`

Returns name of collection under given index for the given Ped.

Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.

`GET_PED_COLLECTION_NAME` can be used together with [GET_PED_COLLECTIONS_COUNT](#\_0x45946359) to list all collections attached to Ped.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `index` | `int` |

**Example:**
```lua
local ped = PlayerPedId()
local count = GetPedCollectionsCount(ped)
for i = 0, count - 1 do
  print(GetPedCollectionName(ped, i))
end
```

[View docs](https://cfxnatives.dev/natives/GET_PED_COLLECTION_NAME)

---
## GET_PED_COLLECTION_NAME_FROM_DRAWABLE
**Hash:** `0xD6BBA48B` | **Returns:** `char*`
**Alt name:** `GetPedCollectionNameFromDrawable`

Gets collection name for the given global drawable ID. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) is used to get collection and local index (inside the given collection) of the drawable. The collection name and index are used in functions like [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA).

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `drawableId` | `int` |

**Example:**
```lua
local ped = PlayerPedId()
-- Top for mp_f_freemode_01. From female_freemode_beach collection under index 1.
-- Global index is 17 because there is 16 top variations in the base game collection that goes before the female_freemode_beach collection.
local name = GetPedDrawableCollectionName(ped, 11, 17)
local index = GetPedDrawableCollectionLocalIndex(ped, 11, 17)
-- Equivalent to SetPedComponentVariation(ped, 11, 17, 0, 0)
SetPedCollectionComponentVariation(ped, 11, name, index, 0, 0)
```

[View docs](https://cfxnatives.dev/natives/GET_PED_COLLECTION_NAME_FROM_DRAWABLE)

---
## GET_PED_COLLECTION_NAME_FROM_PROP
**Hash:** `0x8ED0C17` | **Returns:** `char*`
**Alt name:** `GetPedCollectionNameFromProp`

Gets collection name for the given global prop index. Together with [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) is used to get collection and local index (inside the given collection) of the prop. The collection name and index are used in functions like [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB).

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |
| `propIndex` | `int` |

**Example:**
```lua
local ped = PlayerPedId()
-- Hat for mp_f_freemode_01. From female_freemode_beach collection under index 1.
-- Global index is 21 because there is 20 head prop variations in the base game collection that goes before the female_freemode_beach collection.
local name = GetPedPropCollectionName(ped, 0, 21)
local index = GetPedPropCollectionLocalIndex(ped, 0, 21)
-- Equivalent to SetPedPropIndex(ped, 0, 21, 0, false)
SetPedCollectionPropIndex(ped, 0, name, index, 0, false)
```

[View docs](https://cfxnatives.dev/natives/GET_PED_COLLECTION_NAME_FROM_PROP)

---
## GET_PED_COLLECTIONS_COUNT
**Hash:** `0x45946359` | **Returns:** `int`
**Alt name:** `GetPedCollectionsCount`

Returns number of variation collections available for the given Ped.

Collections are groups of drawable components or props available for the given Ped. Usually collection corresponds to a certain DLC or the base game. See [SET_PED_COLLECTION_COMPONENT_VARIATION](#\_0x88711BBA), [SET_PED_COLLECTION_PROP_INDEX](#\_0x75240BCB), [GET_NUMBER_OF_PED_COLLECTION_DRAWABLE_VARIATIONS](#\_0x310D0271) etc natives for more details on how to work with collections.

`GET_PED_COLLECTIONS_COUNT` can be used together with [GET_PED_COLLECTION_NAME](#\_0xFED5D83A) to list all collections attached to Ped.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

**Example:**
```lua
local ped = PlayerPedId()
local count = GetPedCollectionsCount(ped)
for i = 0, count - 1 do
  print(GetPedCollectionName(ped, i))
end
```

[View docs](https://cfxnatives.dev/natives/GET_PED_COLLECTIONS_COUNT)

---
## GET_PED_DECORATIONS
**Hash:** `0x7CCE1163` | **Returns:** `object`
**Alt name:** `GetPedDecorations`

Returns a list of decorations applied to a ped.

The data returned adheres to the following layout:

```
[ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]
```

This command will return undefined data if invoked on a remote player ped.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_DECORATIONS)

---
## GET_PED_DENSITY_MULTIPLIER
**Hash:** `0xF5A904F9` | **Returns:** `float`
**Alt name:** `GetPedDensityMultiplier`

A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).

[View docs](https://cfxnatives.dev/natives/GET_PED_DENSITY_MULTIPLIER)

---
## GET_PED_DESIRED_HEADING
**Hash:** `0xC182F76E` | **Returns:** `float`
**Alt name:** `GetPedDesiredHeading`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_DESIRED_HEADING)

---
## GET_PED_DRAWABLE_GLOBAL_INDEX_FROM_COLLECTION
**Hash:** `0x280F1FC3` | **Returns:** `int`
**Alt name:** `GetPedDrawableGlobalIndexFromCollection`

Returns global drawable index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.

Drawables are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.

If all drawables from all collections are placed into one continuous array - the global index will correspond to the index of drawable in such array. Local index is index of drawable in this array relative to the start of the given collection.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `collection` | `char*` |
| `drawableId` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PED_DRAWABLE_GLOBAL_INDEX_FROM_COLLECTION)

---
## GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX
**Hash:** `0x9970386F` | **Returns:** `int`
**Alt name:** `GetPedDrawableVariationCollectionLocalIndex`

An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection local drawable index (inside [GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME](#\_0xBCE0AB63) collection) instead of the global drawable index.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX)

---
## GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME
**Hash:** `0xBCE0AB63` | **Returns:** `char*`
**Alt name:** `GetPedDrawableVariationCollectionName`

An analogue to [GET_PED_DRAWABLE_VARIATION](#\_0x67F3780DD425D4FC) that returns collection name instead of the global drawable index.

Should be used together with [GET_PED_DRAWABLE_VARIATION_COLLECTION_LOCAL_INDEX](#\_0x9970386F).

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PED_DRAWABLE_VARIATION_COLLECTION_NAME)

---
## GET_PED_EYE_COLOR
**Hash:** `0xA47B860F` | **Returns:** `int`
**Alt name:** `GetPedEyeColor`

A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

**Example:**
```lua
local pedEyeColour = GetPedEyeColor(PlayerPedId())
if pedEyeColour == 7 then
  print("Gray eyes!")
end
```

[View docs](https://cfxnatives.dev/natives/GET_PED_EYE_COLOR)

---
## GET_PED_FACE_FEATURE
**Hash:** `0xBA352ADD` | **Returns:** `float`
**Alt name:** `GetPedFaceFeature`

A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `index` | `int` |

**Example:**
```lua
local noseWidth = GetPedFaceFeature(PlayerPedId(), 0)
if noseWidth == 1.0 then
  print("You have big nose!")
end
```

[View docs](https://cfxnatives.dev/natives/GET_PED_FACE_FEATURE)

---
## GET_PED_HAIR_COLOR
**Hash:** `0xA3EA2893` | **Returns:** `int`
**Alt name:** `GetPedHairColor`

A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

**Example:**
```lua
local primaryColour = GetPedHairColor(PlayerPedId())
if primaryColour == 18 then
  print("You have red hair!")
end
```

[View docs](https://cfxnatives.dev/natives/GET_PED_HAIR_COLOR)

---
## GET_PED_HAIR_HIGHLIGHT_COLOR
**Hash:** `0x4B087305` | **Returns:** `int`
**Alt name:** `GetPedHairHighlightColor`

A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

**Example:**
```lua
local secondaryColour = GetPedHairHighlightColor(PlayerPedId())
if secondaryColour == 32 then
  print("You have pink hair highlight colour!")
end
```

[View docs](https://cfxnatives.dev/natives/GET_PED_HAIR_HIGHLIGHT_COLOR)

---
## GET_PED_HEAD_OVERLAY_DATA
**Hash:** `0xC46EE605` | **Returns:** `BOOL`
**Alt name:** `GetPedHeadOverlayData`

A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `index` | `int` |
| `overlayValue` | `int*` |
| `colourType` | `int*` |
| `firstColour` | `int*` |
| `secondColour` | `int*` |
| `overlayOpacity` | `float*` |

**Example:**
```lua
-- getting beard overlay data
local success, overlayValue, colourType, firstColour, secondColour, overlayOpacity = GetPedHeadOverlayData(PlayerPedId(), 1)
if success then
  -- incrementing value
  SetPedHeadOverlay(PlayerPedId(), 1, overlayValue + 1, overlayOpacity)
end
```

[View docs](https://cfxnatives.dev/natives/GET_PED_HEAD_OVERLAY_DATA)

---
## GET_PED_IN_VEHICLE_SEAT
**Hash:** `0x388FDE9A` | **Returns:** `Entity`
**Alt name:** `GetPedInVehicleSeat`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `seatIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PED_IN_VEHICLE_SEAT)

---
## GET_PED_MAX_HEALTH
**Hash:** `0xA45B6C8D` | **Returns:** `int`
**Alt name:** `GetPedMaxHealth`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PED_MAX_HEALTH)

---
## GET_PED_MODEL_HEALTH_CONFIG
**Hash:** `0xF71542F7` | **Returns:** `Hash`
**Alt name:** `GetPedModelHealthConfig`

Gets a ped model's health config.

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |

**Example:**
```lua
GetPedModelHealthConfig(`mp_f_freemode_01`)
```

[View docs](https://cfxnatives.dev/natives/GET_PED_MODEL_HEALTH_CONFIG)

---
## GET_PED_MODEL_PERSONALITY
**Hash:** `0xFE08CAD6` | **Returns:** `Hash`
**Alt name:** `GetPedModelPersonality`

Gets a ped model's personality type.

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_PED_MODEL_PERSONALITY)

---
## GET_PED_MOVEMENT_CLIPSET
**Hash:** `0x69E81E3D` | **Returns:** `int`
**Alt name:** `GetPedMovementClipset`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_MOVEMENT_CLIPSET)

---
## GET_PED_PROP_COLLECTION_LOCAL_INDEX
**Hash:** `0xCD420AD1` | **Returns:** `int`
**Alt name:** `GetPedPropCollectionLocalIndex`

An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#\_0x6B5653E4) collection) instead of the global prop index.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PED_PROP_COLLECTION_LOCAL_INDEX)

---
## GET_PED_PROP_COLLECTION_NAME
**Hash:** `0x6B5653E4` | **Returns:** `char*`
**Alt name:** `GetPedPropCollectionName`

An analogue to [GET_PED_PROP_INDEX](#\_0x898CC20EA75BACD8) that returns collection name instead of the global drawable index.

Should be used together with [GET_PED_PROP_COLLECTION_LOCAL_INDEX](#\_0xCD420AD1).

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PED_PROP_COLLECTION_NAME)

---
## GET_PED_PROP_GLOBAL_INDEX_FROM_COLLECTION
**Hash:** `0x2CB45CDC` | **Returns:** `int`
**Alt name:** `GetPedPropGlobalIndexFromCollection`

Returns global prop index based on the local one. Is it a reverse to [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.

Props are stored inside collections. Each collection usually corresponds to a certain DCL or the base game.

If all props from all collections are placed into one continuous array - the global index will correspond to the index of the prop in such array. Local index is index of the prop in this array relative to the start of the given collection.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |
| `collection` | `char*` |
| `propIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PED_PROP_GLOBAL_INDEX_FROM_COLLECTION)

---
## GET_PED_RELATIONSHIP_GROUP_HASH
**Hash:** `0x354F283C` | **Returns:** `Hash`
**Alt name:** `GetPedRelationshipGroupHash`

Gets the current relationship group hash of a ped.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PED_RELATIONSHIP_GROUP_HASH)

---
## GET_PED_SCALE
**Hash:** `0xA0F3B420` | **Returns:** `float`
**Alt name:** `GetPedScale`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_SCALE)

---
## GET_PED_SCRIPT_TASK_COMMAND
**Hash:** `0x84FE084` | **Returns:** `Hash`
**Alt name:** `GetPedScriptTaskCommand`

Gets the script task command currently assigned to the ped.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_SCRIPT_TASK_COMMAND)

---
## GET_PED_SCRIPT_TASK_STAGE
**Hash:** `0x44B0E5E2` | **Returns:** `int`
**Alt name:** `GetPedScriptTaskStage`

Gets the stage of the peds scripted task.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_SCRIPT_TASK_STAGE)

---
## GET_PED_SOURCE_OF_DAMAGE
**Hash:** `0x535DB43F` | **Returns:** `Entity`
**Alt name:** `GetPedSourceOfDamage`

Get the last entity that damaged the ped. This native is used server side when using OneSync.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_SOURCE_OF_DAMAGE)

---
## GET_PED_SOURCE_OF_DEATH
**Hash:** `0x84ADF9EB` | **Returns:** `Entity`
**Alt name:** `GetPedSourceOfDeath`

Get the entity that killed the ped. This native is used server side when using OneSync.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PED_SOURCE_OF_DEATH)

---
## GET_PED_SPECIFIC_TASK_TYPE
**Hash:** `0x7F4563D3` | **Returns:** `int`
**Alt name:** `GetPedSpecificTaskType`

Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PED_SPECIFIC_TASK_TYPE)

---
## GET_PED_STEALTH_MOVEMENT
**Hash:** `0x40321B83` | **Returns:** `bool`
**Alt name:** `GetPedStealthMovement`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PED_STEALTH_MOVEMENT)

---
## GET_PED_SWEAT
**Hash:** `0x44B91E94` | **Returns:** `float`
**Alt name:** `GetPedSweat`

A getter for [SET_PED_SWEAT](#\_0x27B0405F59637D1F).

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

**Example:**
```lua
local sweat = GetPedSweat(PlayerPedId())
```

[View docs](https://cfxnatives.dev/natives/GET_PED_SWEAT)

---
## GET_PED_WETNESS
**Hash:** `0xF402C171` | **Returns:** `float`
**Alt name:** `GetPedWetness`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_WETNESS)

---
## GET_PED_WETNESS_HEIGHT
**Hash:** `0x2545ADE0` | **Returns:** `float`
**Alt name:** `GetPedWetnessHeight`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_WETNESS_HEIGHT)

---
## GET_PLAYER_CAMERA_ROTATION
**Hash:** `0x433C765D` | **Returns:** `Vector3`
**Alt name:** `GetPlayerCameraRotation`

Gets the current camera rotation for a specified player. This native is used server side when using OneSync.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_CAMERA_ROTATION)

---
## GET_PLAYER_ENDPOINT
**Hash:** `0xFEE404F9` | **Returns:** `char*`
**Alt name:** `GetPlayerEndpoint`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_ENDPOINT)

---
## GET_PLAYER_FAKE_WANTED_LEVEL
**Hash:** `0x98D244` | **Returns:** `int`
**Alt name:** `GetPlayerFakeWantedLevel`

Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PLAYER_FAKE_WANTED_LEVEL)

---
## GET_PLAYER_FOCUS_POS
**Hash:** `0x586F80FF` | **Returns:** `Vector3`
**Alt name:** `GetPlayerFocusPos`

Gets the focus position (i.e. the position of the active camera in the game world) of a player.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_FOCUS_POS)

---
## GET_PLAYER_FROM_INDEX
**Hash:** `0xC8A9CE08` | **Returns:** `char*`
**Alt name:** `GetPlayerFromIndex`

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_FROM_INDEX)

---
## GET_PLAYER_FROM_SERVER_ID
**Hash:** `0x344EA166` | **Returns:** `Player`
**Alt name:** `GetPlayerFromServerId`

Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.

If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.

It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.

**Parameters:**
| Name | Type |
|------|------|
| `serverId` | `int` |

**Example:**
```lua
--We will assume the serverId is '4' in this scenario and that it's a valid serverId.

-- Passing invalid Player IDs such as 'nil' or IDs that don't exist will result in playerId being -1.

local playerId = GetPlayerFromServerId(serverId);

-- If the resulting playerId is not invalid (not equal to -1)
if playerId ~= -1 then
    -- Do our stuff on this player.
end
```

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_FROM_SERVER_ID)

---
## GET_PLAYER_FROM_STATE_BAG_NAME
**Hash:** `0xA56135E0` | **Returns:** `int`
**Alt name:** `GetPlayerFromStateBagName`

On the server this will return the players source, on the client it will return the player handle.

**Parameters:**
| Name | Type |
|------|------|
| `bagName` | `char*` |

**Example:**
```js
AddStateBagChangeHandler("isDead", null, async (bagName, key, value /* boolean */) => {
    const ply = GetPlayerFromStateBagName(bagName);
    // The player doesn't exist!
    if (ply === 0) return;
    console.log(`Player: ${GetPlayerName(ply)} ${value ? 'died!' : 'is alive!'`)
})
```

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_FROM_STATE_BAG_NAME)

---
## GET_PLAYER_GUID
**Hash:** `0xE52D9680` | **Returns:** `char*`
**Alt name:** `GetPlayerGuid`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_GUID)

---
## GET_PLAYER_IDENTIFIER
**Hash:** `0x7302DBCF` | **Returns:** `char*`
**Alt name:** `GetPlayerIdentifier`

To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](#\_0xFF7F66AB)

To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](#\_0xA61C8FC6)

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `identiferIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_IDENTIFIER)

---
## GET_PLAYER_IDENTIFIER_BY_TYPE
**Hash:** `0xA61C8FC6` | **Returns:** `char*`
**Alt name:** `GetPlayerIdentifierByType`

Get an identifier from a player by the type of the identifier.
Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `identifierType` | `char*` |

**Example:**
```lua
local playerLicenses = {}

AddEventHandler('playerJoining', function()
    playerLicenses[source] = GetPlayerIdentifierByType(source, 'license')
end)
```

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_IDENTIFIER_BY_TYPE)

---
## GET_PLAYER_INVINCIBLE
**Hash:** `0x680C90EE` | **Returns:** `BOOL`
**Alt name:** `GetPlayerInvincible`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PLAYER_INVINCIBLE)

---
## GET_PLAYER_INVINCIBLE_2
**Hash:** `0xF2E3912B` | **Returns:** `BOOL`
**Alt name:** `GetPlayerInvincible2`

Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_INVINCIBLE_2)

---
## GET_PLAYER_KILL_FALL_HEIGHT
**Hash:** `0xBFB2990C` | **Returns:** `float`
**Alt name:** `GetPlayerKillFallHeight`

A getter for [SET_PLAYER_KILL_FALL_HEIGHT](#\_0xAEF2C6A4).

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_KILL_FALL_HEIGHT)

---
## GET_PLAYER_LAST_MSG
**Hash:** `0x427E8E6A` | **Returns:** `int`
**Alt name:** `GetPlayerLastMsg`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_LAST_MSG)

---
## GET_PLAYER_MAX_ARMOUR
**Hash:** `0x2A50657` | **Returns:** `int`
**Alt name:** `GetPlayerMaxArmour`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PLAYER_MAX_ARMOUR)

---
## GET_PLAYER_MAX_HEALTH
**Hash:** `0x8154E470` | **Returns:** `int`
**Alt name:** `GetPlayerMaxHealth`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_MAX_HEALTH)

---
## GET_PLAYER_MAX_STAMINA
**Hash:** `0xD014AB79` | **Returns:** `float`
**Alt name:** `GetPlayerMaxStamina`

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_MAX_STAMINA)

---
## GET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER
**Hash:** `0x8689A825` | **Returns:** `float`
**Alt name:** `GetPlayerMeleeWeaponDamageModifier`

A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER)

---
## GET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER
**Hash:** `0x27E94EF8` | **Returns:** `float`
**Alt name:** `GetPlayerMeleeWeaponDefenseModifier`

A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER)

---
## GET_PLAYER_NAME
**Hash:** `0x406B4B20` | **Returns:** `char*`
**Alt name:** `GetPlayerName`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PLAYER_NAME)

---
## GET_PLAYER_PED
**Hash:** `0x6E31E993` | **Returns:** `Entity`
**Alt name:** `GetPlayerPed`

Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

**Example:**
```lua
-- Let's assume source is a valid ID
local pedId = GetPlayerPed(source);

-- If pedId is valid (not equal to 0)
if pedId ~= 0 then
    -- Do something with this ped!
end
```

[View docs](https://cfxnatives.dev/natives/CFX~GET_PLAYER_PED)

---
## GET_PLAYER_PEER_STATISTICS
**Hash:** `0x9A928294` | **Returns:** `int`
**Alt name:** `GetPlayerPeerStatistics`

```cpp
const int ENET_PACKET_LOSS_SCALE = 65536;

enum PeerStatistics
{
	// PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
	// since the last time the packet loss was updated.

	// the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALE
	PacketLoss = 0,
	// The variance in the packet loss
	PacketLossVariance = 1,
	// The time since the last packet update in ms, relative to the peers connection time
	PacketLossEpoch = 2,
	// The mean amount of time it takes for a packet to get to the client (ping)
	RoundTripTime = 3,
	// The variance in the round trip time
	RoundTripTimeVariance = 4,
	// Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch
	// The last recorded round trip time of a packet
	LastRoundTripTime = 5,
	// The last round trip time variance
	LastRoundTripTimeVariance = 6,
	// The time since the last packet throttle update, relative to the peers connection time
	PacketThrottleEpoch = 7,
};
```

These statistics only update once every 10 seconds.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `peerStatistic` | `int` |

**Example:**
```js
setInterval(() => {
	const ENET_PACKET_LOSS_SCALE = 65536;

	const PLAYER_SERVER_ID = 1;

	const packetLoss = GetPlayerPeerStatistics(PLAYER_SERVER_ID, 0 /* PacketLoss */);
	const packetLossVariance = GetPlayerPeerStatistics(PLAYER_SERVER_ID, 1 /* PacketLossVariance */);
	const packetLossEpoch = GetPlayerPeerStatistics(PLAYER_SERVER_ID, 2 /* PacketLossEpoch */)
	const rtt = GetPlayerPeerStatistics(PLAYER_SERVER_ID, 3 /* RoundTripTime */);
	const rttVariance = GetPlayerPeerStatistics(PLAYER_SERVER_ID, 4 /* RoundTripTimeVariance */);
	const lastRtt = GetPlayerPeerStatistics(PLAYER_SERVER_ID, 5 /* LastRoundTripTime */);
	const lastRttVariance = GetPlayerPeerStatistics(PLAYER_SERVER_ID, 6 /* LastRoundTripTimeVariance */);
	const packetThrottleEpoch = GetPlayerPeerStatistics(PLAYER_SERVER_ID, 7 /* PacketThrottleEpoch */);

	console.log(`packetLoss: ${packetLoss}`);
	console.log(`packetLossVariance: ${packetLossVariance}`);
	console.log(`packetLossEpch: ${packetLossEpoch}`);

	console.log(`packetLossScaled: ${packetLoss / ENET_PACKET_LOSS_SCALE}`);
	console.log(`packetLossVarianceScaled: ${packetLossVariance / ENET_PACKET_LOSS_SCALE}`);

	console.log(`rtt: ${rtt}`);
	console.log(`rttVariance: ${rttVariance}`);

	console.log(`lastRtt: ${lastRtt}`);
	console.log(`lastRttVariance: ${lastRttVariance}`);
	console.log(`packetThrottleEpoch: ${packetThrottleEpoch}`);
}, 10000)
```

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_PEER_STATISTICS)

---
## GET_PLAYER_PING
**Hash:** `0xFF1290D4` | **Returns:** `int`
**Alt name:** `GetPlayerPing`

See [GET_PLAYER_PEER_STATISTICS](#\_0x9A928294) if you want more detailed information, like packet loss, and packet/rtt variance

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_PING)

---
## GET_PLAYER_ROUTING_BUCKET
**Hash:** `0x52441C34` | **Returns:** `int`
**Alt name:** `GetPlayerRoutingBucket`

Gets the routing bucket for the specified player.

Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_ROUTING_BUCKET)

---
## GET_PLAYER_SERVER_ID
**Hash:** `0x4D97BCC7` | **Returns:** `int`
**Alt name:** `GetPlayerServerId`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_SERVER_ID)

---
## GET_PLAYER_STAMINA
**Hash:** `0xE415EC5C` | **Returns:** `float`
**Alt name:** `GetPlayerStamina`

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_STAMINA)

---
## GET_PLAYER_TEAM
**Hash:** `0x9873E404` | **Returns:** `int`
**Alt name:** `GetPlayerTeam`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PLAYER_TEAM)

---
## GET_PLAYER_TIME_IN_PURSUIT
**Hash:** `0x7ADE63E1` | **Returns:** `int`
**Alt name:** `GetPlayerTimeInPursuit`

```
Gets the amount of time player has spent evading the cops.
Counter starts and increments only when cops are chasing the player.
If the player is evading, the timer will pause.
```

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `lastPursuit` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_TIME_IN_PURSUIT)

---
## GET_PLAYER_TIME_ONLINE
**Hash:** `0x67D2E605` | **Returns:** `int`
**Alt name:** `GetPlayerTimeOnline`

Gets the current time online for a specified player.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

**Example:**
```lua
local function ShowTimeOnline()
    local player = source
    local secondsTotalOnline = GetPlayerTimeOnline(player)

    print(("Time online : %f H %f min %f"):format(
        (secondsTotalOnline / 3600),
        ((secondsTotalOnline / 60) % 60),
        (secondsTotalOnline % 60)
    ))
end

RegisterNetEvent("myTimeOnline", ShowTimeOnline)
```

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_TIME_ONLINE)

---
## GET_PLAYER_TOKEN
**Hash:** `0x54C06897` | **Returns:** `char*`
**Alt name:** `GetPlayerToken`

Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_TOKEN)

---
## GET_PLAYER_VEHICLE_DAMAGE_MODIFIER
**Hash:** `0x78F27B1F` | **Returns:** `float`
**Alt name:** `GetPlayerVehicleDamageModifier`

A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_VEHICLE_DAMAGE_MODIFIER)

---
## GET_PLAYER_VEHICLE_DEFENSE_MODIFIER
**Hash:** `0x8326E7CD` | **Returns:** `float`
**Alt name:** `GetPlayerVehicleDefenseModifier`

A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_VEHICLE_DEFENSE_MODIFIER)

---
## GET_PLAYER_WANTED_CENTRE_POSITION
**Hash:** `0x821F2D2C` | **Returns:** `Vector3`
**Alt name:** `GetPlayerWantedCentrePosition`

Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PLAYER_WANTED_CENTRE_POSITION)

---
## GET_PLAYER_WANTED_LEVEL
**Hash:** `0xBDCDD163` | **Returns:** `int`
**Alt name:** `GetPlayerWantedLevel`

```
Returns given players wanted level server-side.
```

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_PLAYER_WANTED_LEVEL)

---
## GET_PLAYER_WEAPON_DAMAGE_MODIFIER
**Hash:** `0x2A3D7CDA` | **Returns:** `float`
**Alt name:** `GetPlayerWeaponDamageModifier`

A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_WEAPON_DAMAGE_MODIFIER)

---
## GET_PLAYER_WEAPON_DEFENSE_MODIFIER
**Hash:** `0xF1543251` | **Returns:** `float`
**Alt name:** `GetPlayerWeaponDefenseModifier`

A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_WEAPON_DEFENSE_MODIFIER)

---
## GET_PLAYER_WEAPON_DEFENSE_MODIFIER_2
**Hash:** `0x986B65FF` | **Returns:** `float`
**Alt name:** `GetPlayerWeaponDefenseModifier2`

A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_WEAPON_DEFENSE_MODIFIER_2)

---
## GET_RANDOM_VEHICLE_DENSITY_MULTIPLIER
**Hash:** `0x7B0D00C5` | **Returns:** `float`
**Alt name:** `GetRandomVehicleDensityMultiplier`

A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
Same as vehicle density multiplier.

[View docs](https://cfxnatives.dev/natives/GET_RANDOM_VEHICLE_DENSITY_MULTIPLIER)

---
## GET_REGISTERED_COMMANDS
**Hash:** `0xD4BEF069` | **Returns:** `object`
**Alt name:** `GetRegisteredCommands`

Returns all commands that are registered in the command system.
The data returned adheres to the following layout:

```
[
{
"name": "cmdlist",
"resource": "resource",
"arity" = -1,
},
{
"name": "command1"
"resource": "resource_2",
"arity" = -1,
}
]
```

[View docs](https://cfxnatives.dev/natives/GET_REGISTERED_COMMANDS)

---
## GET_RESOURCE_BY_FIND_INDEX
**Hash:** `0x387246B7` | **Returns:** `char*`
**Alt name:** `GetResourceByFindIndex`

**Parameters:**
| Name | Type |
|------|------|
| `findIndex` | `int` |

**Example:**
```lua
local resourceList = {}
for i = 0, GetNumResources(), 1 do
  local resource_name = GetResourceByFindIndex(i)
  if resource_name and GetResourceState(resource_name) == "started" then
    table.insert(resourceList, resource_name)
  end
end
print(table.unpack(resourceList))
```

[View docs](https://cfxnatives.dev/natives/GET_RESOURCE_BY_FIND_INDEX)

---
## GET_RESOURCE_COMMANDS
**Hash:** `0x97628584` | **Returns:** `object`
**Alt name:** `GetResourceCommands`

Returns all commands registered by the specified resource.
The data returned adheres to the following layout:

```
[
{
"name": "cmdlist",
"resource": "example_resource",
"arity" = -1,
},
{
"name": "command1"
"resource": "example_resource2",
"arity" = -1,
}
]
```

**Parameters:**
| Name | Type |
|------|------|
| `resource` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_RESOURCE_COMMANDS)

---
## GET_RESOURCE_KVP_FLOAT
**Hash:** `0x35BDCEEA` | **Returns:** `float`
**Alt name:** `GetResourceKvpFloat`

A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |

**Example:**
```lua
local kvpValue = GetResourceKvpFloat('mollis')
if kvpValue ~= 0.0 then
	-- do something!
end
```

[View docs](https://cfxnatives.dev/natives/GET_RESOURCE_KVP_FLOAT)

---
## GET_RESOURCE_KVP_INT
**Hash:** `0x557B586A` | **Returns:** `int`
**Alt name:** `GetResourceKvpInt`

A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |

**Example:**
```lua
local kvpValue = GetResourceKvpInt('bananabread') 
if kvpValue ~= 0 then
	-- do something!
end
```

[View docs](https://cfxnatives.dev/natives/GET_RESOURCE_KVP_INT)

---
## GET_RESOURCE_KVP_STRING
**Hash:** `0x5240DA5A` | **Returns:** `char*`
**Alt name:** `GetResourceKvpString`

A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |

**Example:**
```lua
local kvpValue = GetResourceKvpString('codfish') 
if kvpValue then
	-- do something!
end
```

[View docs](https://cfxnatives.dev/natives/GET_RESOURCE_KVP_STRING)

---
## GET_RESOURCE_METADATA
**Hash:** `0x964BAB1D` | **Returns:** `char*`
**Alt name:** `GetResourceMetadata`

Gets the metadata value at a specified key/index from a resource's manifest.
See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |
| `metadataKey` | `char*` |
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_RESOURCE_METADATA)

---
## GET_RESOURCE_PATH
**Hash:** `0x61DCF017` | **Returns:** `char*`
**Alt name:** `GetResourcePath`

Returns the physical on-disk path of the specified resource.

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_RESOURCE_PATH)

---
## GET_RESOURCE_STATE
**Hash:** `0x4039B485` | **Returns:** `char*`
**Alt name:** `GetResourceState`

Returns the current state of the specified resource.

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_RESOURCE_STATE)

---
## GET_ROPE_FLAGS
**Hash:** `0xA80FFE99` | **Returns:** `int`
**Alt name:** `GetRopeFlags`

```cpp
enum eRopeFlags
{
    DrawShadowEnabled = 2,
	Breakable = 4,
	RopeUnwindingFront = 8,
	RopeWinding = 32
}
```

**Parameters:**
| Name | Type |
|------|------|
| `rope` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_ROPE_FLAGS)

---
## GET_ROPE_LENGTH_CHANGE_RATE
**Hash:** `0x66D70EA3` | **Returns:** `float`
**Alt name:** `GetRopeLengthChangeRate`

**Parameters:**
| Name | Type |
|------|------|
| `rope` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_ROPE_LENGTH_CHANGE_RATE)

---
## GET_ROPE_TIME_MULTIPLIER
**Hash:** `0xF341E6CA` | **Returns:** `float`
**Alt name:** `GetRopeTimeMultiplier`

**Parameters:**
| Name | Type |
|------|------|
| `rope` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_ROPE_TIME_MULTIPLIER)

---
## GET_ROPE_UPDATE_ORDER
**Hash:** `0x2AB2E0F6` | **Returns:** `int`
**Alt name:** `GetRopeUpdateOrder`

**Parameters:**
| Name | Type |
|------|------|
| `rope` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_ROPE_UPDATE_ORDER)

---
## GET_RUNTIME_TEXTURE_HEIGHT
**Hash:** `0x3574AACE` | **Returns:** `int`
**Alt name:** `GetRuntimeTextureHeight`

Gets the height of the specified runtime texture.

**Parameters:**
| Name | Type |
|------|------|
| `tex` | `long` |

[View docs](https://cfxnatives.dev/natives/GET_RUNTIME_TEXTURE_HEIGHT)

---
## GET_RUNTIME_TEXTURE_PITCH
**Hash:** `0xCA0A085F` | **Returns:** `int`
**Alt name:** `GetRuntimeTexturePitch`

Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.

**Parameters:**
| Name | Type |
|------|------|
| `tex` | `long` |

[View docs](https://cfxnatives.dev/natives/GET_RUNTIME_TEXTURE_PITCH)

---
## GET_RUNTIME_TEXTURE_WIDTH
**Hash:** `0xC9F55558` | **Returns:** `int`
**Alt name:** `GetRuntimeTextureWidth`

Gets the width of the specified runtime texture.

**Parameters:**
| Name | Type |
|------|------|
| `tex` | `long` |

[View docs](https://cfxnatives.dev/natives/GET_RUNTIME_TEXTURE_WIDTH)

---
## GET_SCENARIO_PED_DENSITY_MULTIPLIER
**Hash:** `0x77C598B2` | **Returns:** `float`
**Alt name:** `GetScenarioPedDensityMultiplier`

A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).

[View docs](https://cfxnatives.dev/natives/GET_SCENARIO_PED_DENSITY_MULTIPLIER)

---
## GET_SEAT_PED_IS_USING
**Hash:** `0x57B78C17` | **Returns:** `int`
**Alt name:** `GetSeatPedIsUsing`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_SEAT_PED_IS_USING)

---
## GET_SELECTED_PED_WEAPON
**Hash:** `0xD240123E` | **Returns:** `Hash`
**Alt name:** `GetSelectedPedWeapon`

An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).

Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_SELECTED_PED_WEAPON)

---
## GET_SHAPE_TEST_RESULT_INCLUDING_MATERIAL
**Hash:** `0x4301E10C` | **Returns:** `int`
**Alt name:** `GetShapeTestResultIncludingMaterial`

Returns the result of a shape test, also returning the material of any touched surface.

When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.

Unless the return value is 2, the other return values are undefined.

**Parameters:**
| Name | Type |
|------|------|
| `shapeTestHandle` | `int` |
| `hit` | `BOOL*` |
| `endCoords` | `Vector3*` |
| `surfaceNormal` | `Vector3*` |
| `materialHash` | `Hash*` |
| `entityHit` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_SHAPE_TEST_RESULT_INCLUDING_MATERIAL)

---
## GET_STATE_BAG_KEYS
**Hash:** `0x78D864C7` | **Returns:** `object`
**Alt name:** `GetStateBagKeys`

**Parameters:**
| Name | Type |
|------|------|
| `bagName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_STATE_BAG_KEYS)

---
## GET_STATE_BAG_VALUE
**Hash:** `0x637F4C75` | **Returns:** `object`
**Alt name:** `GetStateBagValue`

Returns the value of a state bag key.

**Parameters:**
| Name | Type |
|------|------|
| `bagName` | `char*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_STATE_BAG_VALUE)

---
## GET_THRUSTER_SIDE_RCS_THROTTLE
**Hash:** `0x1C939E87` | **Returns:** `float`
**Alt name:** `GetThrusterSideRcsThrottle`

**Parameters:**
| Name | Type |
|------|------|
| `jetpack` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_THRUSTER_SIDE_RCS_THROTTLE)

---
## GET_THRUSTER_THROTTLE
**Hash:** `0x94E24C96` | **Returns:** `float`
**Alt name:** `GetThrusterThrottle`

**Parameters:**
| Name | Type |
|------|------|
| `jetpack` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_THRUSTER_THROTTLE)

---
## GET_TIMECYCLE_MODIFIER_COUNT
**Hash:** `0xFE2A1D4D` | **Returns:** `int`
**Alt name:** `GetTimecycleModifierCount`

**Example:**
```lua
local count = GetTimecycleModifierCount()
print("we have  " .. count .. "timecycle modifiers loaded")
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_MODIFIER_COUNT)

---
## GET_TIMECYCLE_MODIFIER_INDEX_BY_NAME
**Hash:** `0x5F4CD0E2` | **Returns:** `int`
**Alt name:** `GetTimecycleModifierIndexByName`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |

**Example:**
```lua
local modifierIndex = GetTimecycleModifierIndexByName("underwater")
local currentIndex = GetTimecycleModifierIndex()

if currentIndex ~= -1 and currentIndex == modifierIndex then
  print("we're actually using 'underwater' timecycle!")
end
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_MODIFIER_INDEX_BY_NAME)

---
## GET_TIMECYCLE_MODIFIER_NAME_BY_INDEX
**Hash:** `0x28CB8608` | **Returns:** `char*`
**Alt name:** `GetTimecycleModifierNameByIndex`

**Parameters:**
| Name | Type |
|------|------|
| `modifierIndex` | `int` |

**Example:**
```lua
local modifierIndex = GetTimecycleModifierIndex()

if modifierIndex ~= -1 then
  local modifierName = GetTimecycleModifierNameByIndex(modifierIndex)
  print("current timecycle name is " .. modifierName)
end
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_MODIFIER_NAME_BY_INDEX)

---
## GET_TIMECYCLE_MODIFIER_STRENGTH
**Hash:** `0xBE54124A` | **Returns:** `float`
**Alt name:** `GetTimecycleModifierStrength`

A getter for [SET_TIMECYCLE_MODIFIER_STRENGTH](#\_0x82E7FFCD5B2326B3).

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_MODIFIER_STRENGTH)

---
## GET_TIMECYCLE_MODIFIER_VAR
**Hash:** `0xA7109E12` | **Returns:** `BOOL`
**Alt name:** `GetTimecycleModifierVar`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |
| `varName` | `char*` |
| `value1` | `float*` |
| `value2` | `float*` |

**Example:**
```lua
local modifierName = "superDARK"
local varName = "postfx_noise"

if DoesTimecycleModifierHasVar(modifierName, varName) then
  local success, value1, value2 = GetTimecycleModifierVar(modifierName, varName)

  if success then
    print(string.format("[%s] removed var %s with values: %f %f", modifierName, varName, value1, value2))
    RemoveTimecycleModifierVar(modifierName, varName)
  end
else
    SetTimecycleModifierVar(modifierName, varName, 1.0, 1.0)
    print(string.format("[%s] created var %s", modifierName, varName))
end
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_MODIFIER_VAR)

---
## GET_TIMECYCLE_MODIFIER_VAR_COUNT
**Hash:** `0x60FB60FE` | **Returns:** `int`
**Alt name:** `GetTimecycleModifierVarCount`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |

**Example:**
```lua
local varCount = GetTimecycleModifierVarCount("underwater")

if varCount ~= 0 then
  for index = 0, varCount - 1 do
    local varName = GetTimecycleModifierVarNameByIndex(index)

    print(string.format("[%d] %s", index, varName))
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_MODIFIER_VAR_COUNT)

---
## GET_TIMECYCLE_MODIFIER_VAR_NAME_BY_INDEX
**Hash:** `0xE874AB1D` | **Returns:** `char*`
**Alt name:** `GetTimecycleModifierVarNameByIndex`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |
| `modifierVarIndex` | `int` |

**Example:**
```lua
local varCount = GetTimecycleModifierVarCount("underwater")

if varCount ~= 0 then
  for index = 0, varCount - 1 do
    local varName = GetTimecycleModifierVarNameByIndex(index)

    print(string.format("[%d] %s", index, varName))
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_MODIFIER_VAR_NAME_BY_INDEX)

---
## GET_TIMECYCLE_VAR_COUNT
**Hash:** `0x838B34D8` | **Returns:** `int`
**Alt name:** `GetTimecycleVarCount`

Returns the amount of variables available to be applied on timecycle modifiers.

**Example:**
```lua
local varCount = GetTimecycleVarCount()

if varCount ~= 0 then
  for index = 0, varCount - 1 do
    local varName = GetTimecycleVarNameByIndex(index)
    local varDefault = GetTimecycleVarDefaultValueByIndex(index)

    print(string.format("[%d] %s (%f)", index, varName, varDefault))
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_VAR_COUNT)

---
## GET_TIMECYCLE_VAR_DEFAULT_VALUE_BY_INDEX
**Hash:** `0x3B90238` | **Returns:** `float`
**Alt name:** `GetTimecycleVarDefaultValueByIndex`

See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).

**Parameters:**
| Name | Type |
|------|------|
| `varIndex` | `int` |

**Example:**
```lua
local varCount = GetTimecycleVarCount()

if varCount ~= 0 then
  for index = 0, varCount - 1 do
    local varName = GetTimecycleVarNameByIndex(index)
    local varDefault = GetTimecycleVarDefaultValueByIndex(index)

    print(string.format("[%d] %s (%f)", index, varName, varDefault))
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_VAR_DEFAULT_VALUE_BY_INDEX)

---
## GET_TIMECYCLE_VAR_NAME_BY_INDEX
**Hash:** `0xC6C55AAF` | **Returns:** `char*`
**Alt name:** `GetTimecycleVarNameByIndex`

See [GET_TIMECYCLE_VAR_COUNT](#\_0x838B34D8).

**Parameters:**
| Name | Type |
|------|------|
| `varIndex` | `int` |

**Example:**
```lua
local varCount = GetTimecycleVarCount()

if varCount ~= 0 then
  for index = 0, varCount - 1 do
    local varName = GetTimecycleVarNameByIndex(index)
    local varDefault = GetTimecycleVarDefaultValueByIndex(index)

    print(string.format("[%d] %s (%f)", index, varName, varDefault))
  end
end
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_VAR_NAME_BY_INDEX)

---
## GET_TRACK_BRAKING_DISTANCE
**Hash:** `0xBF482A5E` | **Returns:** `float`
**Alt name:** `GetTrackBrakingDistance`

**Parameters:**
| Name | Type |
|------|------|
| `track` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_TRACK_BRAKING_DISTANCE)

---
## GET_TRACK_MAX_SPEED
**Hash:** `0x34EE2BF3` | **Returns:** `float`
**Alt name:** `GetTrackMaxSpeed`

**Parameters:**
| Name | Type |
|------|------|
| `track` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_TRACK_MAX_SPEED)

---
## GET_TRACK_NODE_COORDS
**Hash:** `0x1628548E` | **Returns:** `bool`
**Alt name:** `GetTrackNodeCoords`

Gets the coordinates of a specific track node.

**Parameters:**
| Name | Type |
|------|------|
| `trackIndex` | `int` |
| `trackNode` | `int` |
| `coords` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/GET_TRACK_NODE_COORDS)

---
## GET_TRACK_NODE_COUNT
**Hash:** `0x896A0C11` | **Returns:** `int`
**Alt name:** `GetTrackNodeCount`

Gets the specified tracks node count.

**Parameters:**
| Name | Type |
|------|------|
| `trackIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_TRACK_NODE_COUNT)

---
## GET_TRAIN_BACKWARD_CARRIAGE
**Hash:** `0x456E34A` | **Returns:** `int`
**Alt name:** `GetTrainBackwardCarriage`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_BACKWARD_CARRIAGE)

---
## GET_TRAIN_CARRIAGE_ENGINE
**Hash:** `0x95070FA` | **Returns:** `int`
**Alt name:** `GetTrainCarriageEngine`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_CARRIAGE_ENGINE)

---
## GET_TRAIN_CARRIAGE_INDEX
**Hash:** `0x4B8285CF` | **Returns:** `int`
**Alt name:** `GetTrainCarriageIndex`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_CARRIAGE_INDEX)

---
## GET_TRAIN_CRUISE_SPEED
**Hash:** `0xA4921EF5` | **Returns:** `float`
**Alt name:** `GetTrainCruiseSpeed`

Gets the trains desired speed.

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_CRUISE_SPEED)

---
## GET_TRAIN_CURRENT_TRACK_NODE
**Hash:** `0xE015E854` | **Returns:** `int`
**Alt name:** `GetTrainCurrentTrackNode`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_CURRENT_TRACK_NODE)

---
## GET_TRAIN_DIRECTION
**Hash:** `0x8DAF79B6` | **Returns:** `BOOL`
**Alt name:** `GetTrainDirection`

Gets the direction the train is facing

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_DIRECTION)

---
## GET_TRAIN_DOOR_COUNT
**Hash:** `0x99974721` | **Returns:** `int`
**Alt name:** `GetTrainDoorCount`

Gets the door count for the specified train.

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_DOOR_COUNT)

---
## GET_TRAIN_DOOR_OPEN_RATIO
**Hash:** `0x40B16551` | **Returns:** `float`
**Alt name:** `GetTrainDoorOpenRatio`

Gets the ratio that a door is open for on a train.

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |
| `doorIndex` | `int` |

**Example:**
```lua
local doorCount = GetTrainDoorCount(train)
for doorIndex = 0, doorCount - 1 do
    local ratio = GetTrainDoorOpenRatio(train, doorIndex)
    print("Door " .. tostring(doorIndex) .. " is open by a ratio of " .. tostring(ratio))
end
```

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_DOOR_OPEN_RATIO)

---
## GET_TRAIN_FORWARD_CARRIAGE
**Hash:** `0x24DC88D9` | **Returns:** `int`
**Alt name:** `GetTrainForwardCarriage`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_FORWARD_CARRIAGE)

---
## GET_TRAIN_SPEED
**Hash:** `0x428668B7` | **Returns:** `float`
**Alt name:** `GetTrainSpeed`

Gets the speed the train is currently going.

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_SPEED)

---
## GET_TRAIN_STATE
**Hash:** `0x81B50033` | **Returns:** `int`
**Alt name:** `GetTrainState`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_STATE)

---
## GET_TRAIN_TRACK_INDEX
**Hash:** `0x9AA339D` | **Returns:** `int`
**Alt name:** `GetTrainTrackIndex`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_TRAIN_TRACK_INDEX)

---
## GET_VEHICLE_ALARM_TIME_LEFT
**Hash:** `0xC62AAC98` | **Returns:** `int`
**Alt name:** `GetVehicleAlarmTimeLeft`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_ALARM_TIME_LEFT)

---
## GET_VEHICLE_BODY_HEALTH
**Hash:** `0x2B2FCC28` | **Returns:** `float`
**Alt name:** `GetVehicleBodyHealth`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_BODY_HEALTH)

---
## GET_VEHICLE_CHEAT_POWER_INCREASE
**Hash:** `0xC3C93F28` | **Returns:** `float`
**Alt name:** `GetVehicleCheatPowerIncrease`

A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_CHEAT_POWER_INCREASE)

---
## GET_VEHICLE_CLUTCH
**Hash:** `0x1DAD4583` | **Returns:** `float`
**Alt name:** `GetVehicleClutch`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_CLUTCH)

---
## GET_VEHICLE_COLOURS
**Hash:** `0x40D82D88` | **Returns:** `void`
**Alt name:** `GetVehicleColours`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `colorPrimary` | `int*` |
| `colorSecondary` | `int*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_COLOURS)

---
## GET_VEHICLE_CURRENT_GEAR
**Hash:** `0xB4F4E566` | **Returns:** `int`
**Alt name:** `GetVehicleCurrentGear`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_CURRENT_GEAR)

---
## GET_VEHICLE_CURRENT_RPM
**Hash:** `0xE7B12B54` | **Returns:** `float`
**Alt name:** `GetVehicleCurrentRpm`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_CURRENT_RPM)

---
## GET_VEHICLE_CUSTOM_PRIMARY_COLOUR
**Hash:** `0x1C2B9FEF` | **Returns:** `void`
**Alt name:** `GetVehicleCustomPrimaryColour`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `r` | `int*` |
| `g` | `int*` |
| `b` | `int*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_CUSTOM_PRIMARY_COLOUR)

---
## GET_VEHICLE_CUSTOM_SECONDARY_COLOUR
**Hash:** `0x3FF247A2` | **Returns:** `void`
**Alt name:** `GetVehicleCustomSecondaryColour`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `r` | `int*` |
| `g` | `int*` |
| `b` | `int*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_CUSTOM_SECONDARY_COLOUR)

---
## GET_VEHICLE_DASHBOARD_BOOST
**Hash:** `0xDFFABA2A` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardBoost`

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_BOOST)

---
## GET_VEHICLE_DASHBOARD_COLOUR
**Hash:** `0xA0DBD08D` | **Returns:** `void`
**Alt name:** `GetVehicleDashboardColour`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `color` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_COLOUR)

---
## GET_VEHICLE_DASHBOARD_CURRENT_GEAR
**Hash:** `0x435C86F4` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardCurrentGear`

Retrieves the current gear displayed on the dashboard of the vehicle the player is in, returned as a float. This value represents the gear shown in the instrument cluster, such as "R" (0.0) or positive values (e.g., 1.0, 2.0, etc.) for drive gears.

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_CURRENT_GEAR)

---
## GET_VEHICLE_DASHBOARD_FUEL
**Hash:** `0x19B0B2CE` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardFuel`

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_FUEL)

---
## GET_VEHICLE_DASHBOARD_LIGHTS
**Hash:** `0x500FFE9D` | **Returns:** `int`
**Alt name:** `GetVehicleDashboardLights`

Gets the state of the player vehicle's dashboard lights as a bit set
indicator_left = 1
indicator_right = 2
handbrakeLight = 4
engineLight = 8
ABSLight = 16
gasLight = 32
oilLight = 64
headlights = 128
highBeam = 256
batteryLight = 512

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_LIGHTS)

---
## GET_VEHICLE_DASHBOARD_OIL_PRESSURE
**Hash:** `0x3856D767` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardOilPressure`

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_OIL_PRESSURE)

---
## GET_VEHICLE_DASHBOARD_OIL_TEMP
**Hash:** `0x1F5996AA` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardOilTemp`

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_OIL_TEMP)

---
## GET_VEHICLE_DASHBOARD_RPM
**Hash:** `0xF9716A11` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardRpm`

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_RPM)

---
## GET_VEHICLE_DASHBOARD_SPEED
**Hash:** `0x9AAD420E` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardSpeed`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_SPEED)

---
## GET_VEHICLE_DASHBOARD_TEMP
**Hash:** `0x6B6ADAFA` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardTemp`

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_TEMP)

---
## GET_VEHICLE_DASHBOARD_VACUUM
**Hash:** `0xFABE67A9` | **Returns:** `float`
**Alt name:** `GetVehicleDashboardVacuum`

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DASHBOARD_VACUUM)

---
## GET_VEHICLE_DENSITY_MULTIPLIER
**Hash:** `0xEF7C6538` | **Returns:** `float`
**Alt name:** `GetVehicleDensityMultiplier`

A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DENSITY_MULTIPLIER)

---
## GET_VEHICLE_DIRT_LEVEL
**Hash:** `0xFD15C065` | **Returns:** `float`
**Alt name:** `GetVehicleDirtLevel`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_DIRT_LEVEL)

---
## GET_VEHICLE_DOOR_LOCK_STATUS
**Hash:** `0xD72CEF2` | **Returns:** `int`
**Alt name:** `GetVehicleDoorLockStatus`

```lua
enum_VehicleLockStatus = {
    None = 0,
    Locked = 2,
    LockedForPlayer = 3,
    StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
    CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
    CanBeBrokenIntoPersist = 8, -- Can be broken into persist
    CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
}
```

It should be [noted](https://forum.cfx.re/t/4863241) that while the [client-side command](#\_0x25BC98A59C2EA962) and its
setter distinguish between states 0 (unset) and 1 (unlocked), the game will synchronize both as state 0, so the server-side
command will return only '0' if unlocked.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_DOOR_LOCK_STATUS)

---
## GET_VEHICLE_DOOR_STATUS
**Hash:** `0x6E35C49C` | **Returns:** `int`
**Alt name:** `GetVehicleDoorStatus`

Returns the open position of the specified door on the target vehicle.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `doorIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DOOR_STATUS)

---
## GET_VEHICLE_DOORS_LOCKED_FOR_PLAYER
**Hash:** `0x1DC50247` | **Returns:** `int`
**Alt name:** `GetVehicleDoorsLockedForPlayer`

Currently it only works when set to "all players".

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_DOORS_LOCKED_FOR_PLAYER)

---
## GET_VEHICLE_DRAWN_WHEEL_ANGLE_MULT
**Hash:** `0x21C1DA8E` | **Returns:** `float`
**Alt name:** `GetVehicleDrawnWheelAngleMult`

Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_DRAWN_WHEEL_ANGLE_MULT)

---
## GET_VEHICLE_ENGINE_HEALTH
**Hash:** `0x8880038A` | **Returns:** `float`
**Alt name:** `GetVehicleEngineHealth`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_ENGINE_HEALTH)

---
## GET_VEHICLE_ENGINE_TEMPERATURE
**Hash:** `0xF4F495CB` | **Returns:** `float`
**Alt name:** `GetVehicleEngineTemperature`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_ENGINE_TEMPERATURE)

---
## GET_VEHICLE_EXTRA_COLOURS
**Hash:** `0x80E4659B` | **Returns:** `void`
**Alt name:** `GetVehicleExtraColours`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `pearlescentColor` | `int*` |
| `wheelColor` | `int*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_EXTRA_COLOURS)

---
## GET_VEHICLE_FLIGHT_NOZZLE_POSITION
**Hash:** `0xAD40AD55` | **Returns:** `float`
**Alt name:** `GetVehicleFlightNozzlePosition`

Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_FLIGHT_NOZZLE_POSITION)

---
## GET_VEHICLE_FUEL_LEVEL
**Hash:** `0x5F739BB8` | **Returns:** `float`
**Alt name:** `GetVehicleFuelLevel`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_FUEL_LEVEL)

---
## GET_VEHICLE_GEAR_RATIO
**Hash:** `0x82E794B7` | **Returns:** `float`
**Alt name:** `GetVehicleGearRatio`

Gets vehicles gear ratio on choosen gear.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `gear` | `int` |

**Example:**
```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId(-1))
local currentGear = GetVehicleCurrentGear(Vehicle)

print(GetVehicleGearRatio(vehicle, currentGear)) -- will print current vehicle gear to console
```

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_GEAR_RATIO)

---
## GET_VEHICLE_GRAVITY_AMOUNT
**Hash:** `0xB48A1292` | **Returns:** `float`
**Alt name:** `GetVehicleGravityAmount`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_GRAVITY_AMOUNT)

---
## GET_VEHICLE_HANDBRAKE
**Hash:** `0x483B013C` | **Returns:** `BOOL`
**Alt name:** `GetVehicleHandbrake`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_HANDBRAKE)

---
## GET_VEHICLE_HANDLING_FLOAT
**Hash:** `0x642FC12F` | **Returns:** `float`
**Alt name:** `GetVehicleHandlingFloat`

Returns the effective handling data of a vehicle as a floating-point value.
Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `class_` | `char*` |
| `fieldName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_HANDLING_FLOAT)

---
## GET_VEHICLE_HANDLING_INT
**Hash:** `0x27396C75` | **Returns:** `int`
**Alt name:** `GetVehicleHandlingInt`

Returns the effective handling data of a vehicle as an integer value.
Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `class_` | `char*` |
| `fieldName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_HANDLING_INT)

---
## GET_VEHICLE_HANDLING_VECTOR
**Hash:** `0xFB341304` | **Returns:** `Vector3`
**Alt name:** `GetVehicleHandlingVector`

Returns the effective handling data of a vehicle as a vector value.
Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `class_` | `char*` |
| `fieldName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_HANDLING_VECTOR)

---
## GET_VEHICLE_HAS_FLAG
**Hash:** `0xD85C9F57` | **Returns:** `bool`
**Alt name:** `GetVehicleHasFlag`

**Note**: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.

Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `flagIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_HAS_FLAG)

---
## GET_VEHICLE_HEADLIGHTS_COLOUR
**Hash:** `0xD7147656` | **Returns:** `int`
**Alt name:** `GetVehicleHeadlightsColour`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_HEADLIGHTS_COLOUR)

---
## GET_VEHICLE_HIGH_GEAR
**Hash:** `0xF1D1D689` | **Returns:** `int`
**Alt name:** `GetVehicleHighGear`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_HIGH_GEAR)

---
## GET_VEHICLE_HOMING_LOCKON_STATE
**Hash:** `0xFBDE9FD8` | **Returns:** `int`
**Alt name:** `GetVehicleHomingLockonState`

Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_HOMING_LOCKON_STATE)

---
## GET_VEHICLE_HORN_TYPE
**Hash:** `0xDEA49773` | **Returns:** `Hash`
**Alt name:** `GetVehicleHornType`

This is a getter for the client-side native [`START_VEHICLE_HORN`](#\_0x9C8C6504B5B63D2C), which allows you to return the horn type of the vehicle.

**Note**: This native only gets the hash value set with `START_VEHICLE_HORN`. If a wrong hash is passed into `START_VEHICLE_HORN`, it will return this wrong hash.

```cpp
enum eHornTypes
{
    NORMAL = 1330140148,
    HELDDOWN = -2087385909,
    AGGRESSIVE = -92810745
}
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_HORN_TYPE)

---
## GET_VEHICLE_INDICATOR_LIGHTS
**Hash:** `0x83070354` | **Returns:** `int`
**Alt name:** `GetVehicleIndicatorLights`

Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_INDICATOR_LIGHTS)

---
## GET_VEHICLE_INTERIOR_COLOUR
**Hash:** `0xCCFF3B6E` | **Returns:** `void`
**Alt name:** `GetVehicleInteriorColour`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `color` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_INTERIOR_COLOUR)

---
## GET_VEHICLE_LIGHT_MULTIPLIER
**Hash:** `0x7E6E219C` | **Returns:** `float`
**Alt name:** `GetVehicleLightMultiplier`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_LIGHT_MULTIPLIER)

---
## GET_VEHICLE_LIGHTS_STATE
**Hash:** `0x7C278621` | **Returns:** `BOOL`
**Alt name:** `GetVehicleLightsState`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `lightsOn` | `BOOL*` |
| `highbeamsOn` | `BOOL*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_LIGHTS_STATE)

---
## GET_VEHICLE_LIVERY
**Hash:** `0xEC82A51D` | **Returns:** `int`
**Alt name:** `GetVehicleLivery`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_LIVERY)

---
## GET_VEHICLE_LOCK_ON_TARGET
**Hash:** `0x4A557117` | **Returns:** `Vehicle`
**Alt name:** `GetVehicleLockOnTarget`

Gets the vehicle that is locked on to for the specified vehicle.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_LOCK_ON_TARGET)

---
## GET_VEHICLE_NEON_COLOUR
**Hash:** `0xD9319DCB` | **Returns:** `void`
**Alt name:** `GetVehicleNeonColour`

Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `red` | `int*` |
| `green` | `int*` |
| `blue` | `int*` |

**Example:**
```lua
local vehicle = GetVehiclePedIsIn(GetPlayerPed(1), false) -- 1 is the source here
local red, green, blue = GetVehicleNeonColour(vehicle)
print(red, green, blue)
```

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_NEON_COLOUR)

---
## GET_VEHICLE_NEON_ENABLED
**Hash:** `0x684BDBF2` | **Returns:** `BOOL`
**Alt name:** `GetVehicleNeonEnabled`

Getter to check if one of the neon lights of a vehicle is enabled. This native is the server side getter of [IS_VEHICLE_NEON_LIGHT_ENABLED](#\_0x8C4B92553E4766A5).

```cpp
enum neonIndex
{
    NEON_BACK = 0,   // Back neon
    NEON_RIGHT = 1,  // Right neon
    NEON_LEFT = 2,   // Left neon
    NEON_FRONT = 3   // Front neon
};
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `neonIndex` | `int` |

**Example:**
```lua
local vehicle = GetVehiclePedIsIn(GetPlayerPed(1), false) -- 1 is the source here
local isRightNeonOn = GetVehicleNeonEnabled(vehicle, 1)
print(isRightNeonOn)
```

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_NEON_ENABLED)

---
## GET_VEHICLE_NEXT_GEAR
**Hash:** `0xDDB298AE` | **Returns:** `int`
**Alt name:** `GetVehicleNextGear`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_NEXT_GEAR)

---
## GET_VEHICLE_NUMBER_OF_WHEELS
**Hash:** `0xEDF4B0FC` | **Returns:** `int`
**Alt name:** `GetVehicleNumberOfWheels`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_NUMBER_OF_WHEELS)

---
## GET_VEHICLE_NUMBER_PLATE_TEXT
**Hash:** `0xE8522D58` | **Returns:** `char*`
**Alt name:** `GetVehicleNumberPlateText`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_NUMBER_PLATE_TEXT)

---
## GET_VEHICLE_NUMBER_PLATE_TEXT_INDEX
**Hash:** `0x499747B6` | **Returns:** `int`
**Alt name:** `GetVehicleNumberPlateTextIndex`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_NUMBER_PLATE_TEXT_INDEX)

---
## GET_VEHICLE_OIL_LEVEL
**Hash:** `0xFC7F8EF4` | **Returns:** `float`
**Alt name:** `GetVehicleOilLevel`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_OIL_LEVEL)

---
## GET_VEHICLE_PED_IS_IN
**Hash:** `0xAFE92319` | **Returns:** `Vehicle`
**Alt name:** `GetVehiclePedIsIn`

Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `lastVehicle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_PED_IS_IN)

---
## GET_VEHICLE_PETROL_TANK_HEALTH
**Hash:** `0xE41595CE` | **Returns:** `float`
**Alt name:** `GetVehiclePetrolTankHealth`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_PETROL_TANK_HEALTH)

---
## GET_VEHICLE_RADIO_STATION_INDEX
**Hash:** `0x57037960` | **Returns:** `int`
**Alt name:** `GetVehicleRadioStationIndex`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_RADIO_STATION_INDEX)

---
## GET_VEHICLE_ROOF_LIVERY
**Hash:** `0x872CF42` | **Returns:** `int`
**Alt name:** `GetVehicleRoofLivery`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_ROOF_LIVERY)

---
## GET_VEHICLE_STEERING_ANGLE
**Hash:** `0x1382FCEA` | **Returns:** `float`
**Alt name:** `GetVehicleSteeringAngle`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_STEERING_ANGLE)

---
## GET_VEHICLE_STEERING_SCALE
**Hash:** `0x954465DE` | **Returns:** `float`
**Alt name:** `GetVehicleSteeringScale`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_STEERING_SCALE)

---
## GET_VEHICLE_THROTTLE_OFFSET
**Hash:** `0xD1D07351` | **Returns:** `float`
**Alt name:** `GetVehicleThrottleOffset`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_THROTTLE_OFFSET)

---
## GET_VEHICLE_TOP_SPEED_MODIFIER
**Hash:** `0x998B7FEE` | **Returns:** `float`
**Alt name:** `GetVehicleTopSpeedModifier`

A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_TOP_SPEED_MODIFIER)

---
## GET_VEHICLE_TOTAL_REPAIRS
**Hash:** `0x9963D5F9` | **Returns:** `int`
**Alt name:** `GetVehicleTotalRepairs`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_TOTAL_REPAIRS)

---
## GET_VEHICLE_TURBO_PRESSURE
**Hash:** `0xE02B51D7` | **Returns:** `float`
**Alt name:** `GetVehicleTurboPressure`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_TURBO_PRESSURE)

---
## GET_VEHICLE_TYPE
**Hash:** `0xA273060E` | **Returns:** `char*`
**Alt name:** `GetVehicleType`

Returns the type of the passed vehicle.

For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.

### Vehicle types

*   automobile
*   bike
*   boat
*   heli
*   plane
*   submarine
*   trailer
*   train

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_TYPE)

---
## GET_VEHICLE_TYPE_RAW
**Hash:** `0xDE73BC10` | **Returns:** `int`
**Alt name:** `GetVehicleTypeRaw`

Returns the model type of the vehicle as defined by:

```cpp
enum VehicleType
{
	VEHICLE_TYPE_NONE = -1,
	VEHICLE_TYPE_CAR = 0,
	VEHICLE_TYPE_PLANE = 1,
	VEHICLE_TYPE_TRAILER = 2,
	VEHICLE_TYPE_QUADBIKE = 3,
	VEHICLE_TYPE_DRAFT = 4,
	VEHICLE_TYPE_SUBMARINECAR = 5,
	VEHICLE_TYPE_AMPHIBIOUS_AUTOMOBILE = 6,
	VEHICLE_TYPE_AMPHIBIOUS_QUADBIKE = 7,
	VEHICLE_TYPE_HELI = 8,
	VEHICLE_TYPE_BLIMP = 9,
	VEHICLE_TYPE_AUTOGYRO = 10,
	VEHICLE_TYPE_BIKE = 11,
	VEHICLE_TYPE_BICYCLE = 12,
	VEHICLE_TYPE_BOAT = 13,
	VEHICLE_TYPE_TRAIN = 14,
	VEHICLE_TYPE_SUBMARINE = 15,
};
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_TYPE_RAW)

---
## GET_VEHICLE_TYRE_SMOKE_COLOR
**Hash:** `0x75280015` | **Returns:** `void`
**Alt name:** `GetVehicleTyreSmokeColor`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `r` | `int*` |
| `g` | `int*` |
| `b` | `int*` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_TYRE_SMOKE_COLOR)

---
## GET_VEHICLE_WHEEL_BRAKE_PRESSURE
**Hash:** `0x70FE2EFF` | **Returns:** `float`
**Alt name:** `GetVehicleWheelBrakePressure`

Gets brake pressure of a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
Normal values around 1.0f when braking.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_BRAKE_PRESSURE)

---
## GET_VEHICLE_WHEEL_FLAGS
**Hash:** `0xC70FA0C7` | **Returns:** `int`
**Alt name:** `GetVehicleWheelFlags`

Gets the flags of a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_FLAGS)

---
## GET_VEHICLE_WHEEL_HEALTH
**Hash:** `0x54A677F5` | **Returns:** `float`
**Alt name:** `GetVehicleWheelHealth`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_HEALTH)

---
## GET_VEHICLE_WHEEL_IS_POWERED
**Hash:** `0x3CCF1B49` | **Returns:** `BOOL`
**Alt name:** `GetVehicleWheelIsPowered`

Gets whether the wheel is powered.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_IS_POWERED)

---
## GET_VEHICLE_WHEEL_POWER
**Hash:** `0xD203287` | **Returns:** `float`
**Alt name:** `GetVehicleWheelPower`

Gets power being sent to a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_POWER)

---
## GET_VEHICLE_WHEEL_RIM_COLLIDER_SIZE
**Hash:** `0xCEE21AB2` | **Returns:** `float`
**Alt name:** `GetVehicleWheelRimColliderSize`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_RIM_COLLIDER_SIZE)

---
## GET_VEHICLE_WHEEL_ROTATION_SPEED
**Hash:** `0xEA1859E5` | **Returns:** `float`
**Alt name:** `GetVehicleWheelRotationSpeed`

Gets the rotation speed of a wheel.
This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_ROTATION_SPEED)

---
## GET_VEHICLE_WHEEL_SIZE
**Hash:** `0x4046B66` | **Returns:** `float`
**Alt name:** `GetVehicleWheelSize`

Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels (returns 0 in case of default wheels).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_SIZE)

---
## GET_VEHICLE_WHEEL_SPEED
**Hash:** `0x149C9DA0` | **Returns:** `float`
**Alt name:** `GetVehicleWheelSpeed`

Gets speed of a wheel at the tyre.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_SPEED)

---
## GET_VEHICLE_WHEEL_STEERING_ANGLE
**Hash:** `0xA0867448` | **Returns:** `float`
**Alt name:** `GetVehicleWheelSteeringAngle`

Gets steering angle of a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_STEERING_ANGLE)

---
## GET_VEHICLE_WHEEL_SURFACE_MATERIAL
**Hash:** `0xA7F04022` | **Returns:** `int`
**Alt name:** `GetVehicleWheelSurfaceMaterial`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_SURFACE_MATERIAL)

---
## GET_VEHICLE_WHEEL_SUSPENSION_COMPRESSION
**Hash:** `0x2B48175B` | **Returns:** `float`
**Alt name:** `GetVehicleWheelSuspensionCompression`

Gets the current suspension compression of a wheel.
Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_SUSPENSION_COMPRESSION)

---
## GET_VEHICLE_WHEEL_TIRE_COLLIDER_SIZE
**Hash:** `0xE0BA9FE6` | **Returns:** `float`
**Alt name:** `GetVehicleWheelTireColliderSize`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_TIRE_COLLIDER_SIZE)

---
## GET_VEHICLE_WHEEL_TIRE_COLLIDER_WIDTH
**Hash:** `0xEF65929C` | **Returns:** `float`
**Alt name:** `GetVehicleWheelTireColliderWidth`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_TIRE_COLLIDER_WIDTH)

---
## GET_VEHICLE_WHEEL_TRACTION_VECTOR_LENGTH
**Hash:** `0x3BCFEE14` | **Returns:** `float`
**Alt name:** `GetVehicleWheelTractionVectorLength`

Gets the traction vector length of a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_TRACTION_VECTOR_LENGTH)

---
## GET_VEHICLE_WHEEL_TYPE
**Hash:** `0xDA58D7AE` | **Returns:** `int`
**Alt name:** `GetVehicleWheelType`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_WHEEL_TYPE)

---
## GET_VEHICLE_WHEEL_WIDTH
**Hash:** `0x9C7B59F9` | **Returns:** `float`
**Alt name:** `GetVehicleWheelWidth`

Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels (returns 0 in case of default wheels).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_WIDTH)

---
## GET_VEHICLE_WHEEL_X_OFFSET
**Hash:** `0xCC90CBCA` | **Returns:** `float`
**Alt name:** `GetVehicleWheelXOffset`

Returns the offset of the specified wheel relative to the wheel's axle center.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_X_OFFSET)

---
## GET_VEHICLE_WHEEL_Y_ROTATION
**Hash:** `0x2EA4AFFE` | **Returns:** `float`
**Alt name:** `GetVehicleWheelYRotation`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEEL_Y_ROTATION)

---
## GET_VEHICLE_WHEELIE_STATE
**Hash:** `0x137260D1` | **Returns:** `int`
**Alt name:** `GetVehicleWheelieState`

List of known states:

```
1: Not wheeling.
65: Vehicle is ready to do wheelie (burnouting).
129: Vehicle is doing wheelie.
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

**Example:**
```lua
Citizen.CreateThread(function()
  while true do
    Wait(1)

    local veh = GetVehiclePedIsUsing(PlayerPedId())
    if veh ~= 0 then
      local wheelieState = GetVehicleWheelieState(veh)
      if wheelieState == 1 then
        print("Nothing")
      elseif wheelieState == 65 then
        print("Ready to wheelie!")
      elseif wheelieState == 129 then
        print("Doing wheelie!")
      end
    end
  end
end)
```

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WHEELIE_STATE)

---
## GET_VEHICLE_WINDOW_TINT
**Hash:** `0x13D53892` | **Returns:** `int`
**Alt name:** `GetVehicleWindowTint`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~GET_VEHICLE_WINDOW_TINT)

---
## GET_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR
**Hash:** `0xC715F730` | **Returns:** `BOOL`
**Alt name:** `GetVehicleXenonLightsCustomColor`

Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `red` | `int*` |
| `green` | `int*` |
| `blue` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR)

---
## GET_VEHICLE_XMAS_SNOW_FACTOR
**Hash:** `0x16605B30` | **Returns:** `float`
**Alt name:** `GetVehicleXmasSnowFactor`

A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#\_0x80CC4C9E).

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_XMAS_SNOW_FACTOR)

---
## GET_VISUAL_SETTING_FLOAT
**Hash:** `0x15346B4D` | **Returns:** `float`
**Alt name:** `GetVisualSettingFloat`

A getter for [SET_VISUAL_SETTING_FLOAT](#\_0xD1D31681).

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_VISUAL_SETTING_FLOAT)

---
## GET_WATER_QUAD_ALPHA
**Hash:** `0x14088095` | **Returns:** `BOOL`
**Alt name:** `GetWaterQuadAlpha`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `a0` | `int*` |
| `a1` | `int*` |
| `a2` | `int*` |
| `a3` | `int*` |

**Example:**
```lua
local success, a0, a1, a2, a3 = GetWaterQuadAlpha(0)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_ALPHA)

---
## GET_WATER_QUAD_AT_COORDS
**Hash:** `0x17321452` | **Returns:** `int`
**Alt name:** `GetWaterQuadAtCoords`

This native returns the index of a water quad if the given point is inside its bounds.

*If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#\_0xF8E03DB8)*

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |

**Example:**
```lua
local currentPedPosition = GetEntityCoords(PlayerPedId())
local waterQuadIndex = GetWaterQuadAtCoords(currentPedPosition.x, currentPedPosition.y)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_AT_COORDS)

---
## GET_WATER_QUAD_AT_COORDS_3D
**Hash:** `0xF8E03DB8` | **Returns:** `int`
**Alt name:** `GetWaterQuadAtCoords3d`

This alternative implementation of [`GetWaterQuadAtCoords`](#\_0x17321452) also checks the height of the water level.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

**Example:**
```lua
local currentPedPosition = GetEntityCoords(PlayerPedId())
local waterQuadIndex = GetWaterQuadAtCoords(currentPedPosition.x, currentPedPosition.y, currentPedPosition.z)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_AT_COORDS_3D)

---
## GET_WATER_QUAD_BOUNDS
**Hash:** `0x42E9A06A` | **Returns:** `BOOL`
**Alt name:** `GetWaterQuadBounds`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `minX` | `int*` |
| `minY` | `int*` |
| `maxX` | `int*` |
| `maxY` | `int*` |

**Example:**
```lua
local success, minX, minY, maxX, maxY = GetWaterQuadBounds(1)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_BOUNDS)

---
## GET_WATER_QUAD_COUNT
**Hash:** `0xB1884159` | **Returns:** `int`
**Alt name:** `GetWaterQuadCount`

**Example:**
```lua
local waterQuadCount = GetWaterQuadCount()
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_COUNT)

---
## GET_WATER_QUAD_HAS_LIMITED_DEPTH
**Hash:** `0x22EA3BD8` | **Returns:** `BOOL`
**Alt name:** `GetWaterQuadHasLimitedDepth`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `hasLimitedDepth` | `int*` |

**Example:**
```lua
local success, hasLimitedDepth = GetWaterQuadHasLimitedDepth(0)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_HAS_LIMITED_DEPTH)

---
## GET_WATER_QUAD_IS_INVISIBLE
**Hash:** `0x1DEDBD77` | **Returns:** `BOOL`
**Alt name:** `GetWaterQuadIsInvisible`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `isInvisible` | `int*` |

**Example:**
```lua
local success, isInvisible = GetWaterQuadIsInvisible(0)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_IS_INVISIBLE)

---
## GET_WATER_QUAD_LEVEL
**Hash:** `0x6523816B` | **Returns:** `BOOL`
**Alt name:** `GetWaterQuadLevel`

*level is defined as "z" in water.xml*

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `waterQuadLevel` | `float*` |

**Example:**
```lua
local success, waterQuadLevel = GetWaterQuadLevel(0)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_LEVEL)

---
## GET_WATER_QUAD_NO_STENCIL
**Hash:** `0x6F4ACBA` | **Returns:** `BOOL`
**Alt name:** `GetWaterQuadNoStencil`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `noStencil` | `int*` |

**Example:**
```lua
local success, noStencil = GetWaterQuadNoStencil(0)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_NO_STENCIL)

---
## GET_WATER_QUAD_TYPE
**Hash:** `0xE2501B8B` | **Returns:** `BOOL`
**Alt name:** `GetWaterQuadType`

Valid type definitions:

*   **0** Square
*   **1** Right triangle where the 90 degree angle is at maxX, minY
*   **2** Right triangle where the 90 degree angle is at minX, minY
*   **3** Right triangle where the 90 degree angle is at minX, maxY
*   **4** Right triangle where the 90 degree angle is at maxY, maxY

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `waterType` | `int*` |

**Example:**
```lua
local success, type = GetWaterQuadType(0)
```

[View docs](https://cfxnatives.dev/natives/GET_WATER_QUAD_TYPE)

---
## GET_WAVE_QUAD_AMPLITUDE
**Hash:** `0x865139A3` | **Returns:** `BOOL`
**Alt name:** `GetWaveQuadAmplitude`

**Parameters:**
| Name | Type |
|------|------|
| `waveQuad` | `int` |
| `waveQuadAmplitude` | `float*` |

**Example:**
```lua
local success, amplitude = GetWaveQuadAmplitude(1)
```

[View docs](https://cfxnatives.dev/natives/GET_WAVE_QUAD_AMPLITUDE)

---
## GET_WAVE_QUAD_AT_COORDS
**Hash:** `0x3F5A61A7` | **Returns:** `int`
**Alt name:** `GetWaveQuadAtCoords`

This native returns the index of a wave quad if the given point is inside its bounds.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |

**Example:**
```lua
local currentPedPosition = GetEntityCoords(PlayerPedId())
local waveQuadIndex = GetWaveQuadAtCoords(currentPedPosition.x, currentPedPosition.y)
```

[View docs](https://cfxnatives.dev/natives/GET_WAVE_QUAD_AT_COORDS)

---
## GET_WAVE_QUAD_BOUNDS
**Hash:** `0xF86136DB` | **Returns:** `BOOL`
**Alt name:** `GetWaveQuadBounds`

**Parameters:**
| Name | Type |
|------|------|
| `waveQuad` | `int` |
| `minX` | `int*` |
| `minY` | `int*` |
| `maxX` | `int*` |
| `maxY` | `int*` |

**Example:**
```lua
local success, minX, minY, maxX, maxY = GetWaveQuadBounds(1)
```

[View docs](https://cfxnatives.dev/natives/GET_WAVE_QUAD_BOUNDS)

---
## GET_WAVE_QUAD_COUNT
**Hash:** `0x9250C76` | **Returns:** `int`
**Alt name:** `GetWaveQuadCount`

**Example:**
```lua
local waveQuadCount = GetWaveQuadCount()
```

[View docs](https://cfxnatives.dev/natives/GET_WAVE_QUAD_COUNT)

---
## GET_WAVE_QUAD_DIRECTION
**Hash:** `0xCCE49A1C` | **Returns:** `BOOL`
**Alt name:** `GetWaveQuadDirection`

**Parameters:**
| Name | Type |
|------|------|
| `waveQuad` | `int` |
| `directionX` | `float*` |
| `directionY` | `float*` |

**Example:**
```lua
local success, directionX, directionY = GetWaveQuadDirection(1)
```

[View docs](https://cfxnatives.dev/natives/GET_WAVE_QUAD_DIRECTION)

---
## GET_WEAPON_ACCURACY_SPREAD
**Hash:** `0x5343721` | **Returns:** `float`
**Alt name:** `GetWeaponAccuracySpread`

A getter for the accuracy spread of a weapon.

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_ACCURACY_SPREAD)

---
## GET_WEAPON_ANIMATION_OVERRIDE
**Hash:** `0x63ED2E7` | **Returns:** `Hash`
**Alt name:** `GetWeaponAnimationOverride`

A getter for [SET_WEAPON_ANIMATION_OVERRIDE](#\_0x1055AC3A667F09D9).

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

**Example:**
```lua
local weaponAnimation = GetWeaponAnimationOverride(PlayerPedId())
```

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_ANIMATION_OVERRIDE)

---
## GET_WEAPON_COMPONENT_ACCURACY_MODIFIER
**Hash:** `0xC693E278` | **Returns:** `float`
**Alt name:** `GetWeaponComponentAccuracyModifier`

A getter for `CWeaponAccuracyModifier` in a weapon component.

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_ACCURACY_MODIFIER)

---
## GET_WEAPON_COMPONENT_CAMERA_HASH
**Hash:** `0xACB7E68F` | **Returns:** `int`
**Alt name:** `GetWeaponComponentCameraHash`

A getter for `CameraHash` in a weapon scope component.

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_CAMERA_HASH)

---
## GET_WEAPON_COMPONENT_CLIP_SIZE
**Hash:** `0xE14CF665` | **Returns:** `int`
**Alt name:** `GetWeaponComponentClipSize`

A getter for `ClipSize` in a weapon component.

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_CLIP_SIZE)

---
## GET_WEAPON_COMPONENT_DAMAGE_MODIFIER
**Hash:** `0x4A0E3855` | **Returns:** `float`
**Alt name:** `GetWeaponComponentDamageModifier`

A getter for `CWeaponDamageModifier` in a weapon component.

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_DAMAGE_MODIFIER)

---
## GET_WEAPON_COMPONENT_RANGE_DAMAGE_MODIFIER
**Hash:** `0xE134FB8D` | **Returns:** `float`
**Alt name:** `GetWeaponComponentRangeDamageModifier`

A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_RANGE_DAMAGE_MODIFIER)

---
## GET_WEAPON_COMPONENT_RANGE_MODIFIER
**Hash:** `0x2FD0BC1B` | **Returns:** `float`
**Alt name:** `GetWeaponComponentRangeModifier`

A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_RANGE_MODIFIER)

---
## GET_WEAPON_COMPONENT_RETICULE_HASH
**Hash:** `0xF9AB9297` | **Returns:** `int`
**Alt name:** `GetWeaponComponentReticuleHash`

A getter for `ReticuleHash` in a weapon scope component.

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_RETICULE_HASH)

---
## GET_WEAPON_DAMAGE_MODIFIER
**Hash:** `0xD979143` | **Returns:** `float`
**Alt name:** `GetWeaponDamageModifier`

A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_DAMAGE_MODIFIER)

---
## GET_WEAPON_RECOIL_SHAKE_AMPLITUDE
**Hash:** `0x5E1AF5F` | **Returns:** `float`
**Alt name:** `GetWeaponRecoilShakeAmplitude`

A getter for the recoil shake amplitude of a weapon.

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_RECOIL_SHAKE_AMPLITUDE)

---
## GET_WORLD_COORD_FROM_SCREEN_COORD
**Hash:** `0xC81D0659` | **Returns:** `void`
**Alt name:** `GetWorldCoordFromScreenCoord`

Converts a screen coordinate into its relative world coordinate.

**Parameters:**
| Name | Type |
|------|------|
| `screenX` | `float` |
| `screenY` | `float` |
| `worldVector` | `Vector3*` |
| `normalVector` | `Vector3*` |

**Example:**
```lua
CreateThread(function()
  while true do
    local screenX = GetDisabledControlNormal(0, 239)
    local screenY = GetDisabledControlNormal(0, 240)

    local world, normal = GetWorldCoordFromScreenCoord(screenX, screenY)

    local depth = 10

    local target = world + normal * depth

    DrawSphere(target.x, target.y, target.z, 0.5, 255, 0, 0, 0.5)

    Wait(0)
  end
end)
```

[View docs](https://cfxnatives.dev/natives/GET_WORLD_COORD_FROM_SCREEN_COORD)

---
## GIVE_WEAPON_COMPONENT_TO_PED
**Hash:** `0x3E1E286D` | **Returns:** `void`
**Alt name:** `GiveWeaponComponentToPed`

GIVE_WEAPON_COMPONENT_TO_PED

**This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_COMPONENT_TO_PED](?\_0xD966D51AA5B28BB9).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CFX~GIVE_WEAPON_COMPONENT_TO_PED)

---
## GIVE_WEAPON_TO_PED
**Hash:** `0xC4D88A85` | **Returns:** `void`
**Alt name:** `GiveWeaponToPed`

GIVE_WEAPON_TO_PED

**This is the server-side RPC native equivalent of the client native [GIVE_WEAPON_TO_PED](?\_0xBF0FD6E56C964FCB).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammoCount` | `int` |
| `isHidden` | `BOOL` |
| `bForceInHand` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~GIVE_WEAPON_TO_PED)

---
## HAS_ENTITY_BEEN_MARKED_AS_NO_LONGER_NEEDED
**Hash:** `0x9C9A3BE0` | **Returns:** `BOOL`
**Alt name:** `HasEntityBeenMarkedAsNoLongerNeeded`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/HAS_ENTITY_BEEN_MARKED_AS_NO_LONGER_NEEDED)

---
## HAS_MINIMAP_OVERLAY_LOADED
**Hash:** `0xF7535F32` | **Returns:** `BOOL`
**Alt name:** `HasMinimapOverlayLoaded`

Returns whether or not the specific minimap overlay has loaded.

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |

[View docs](https://cfxnatives.dev/natives/HAS_MINIMAP_OVERLAY_LOADED)

---
## HAS_VEHICLE_BEEN_DAMAGED_BY_BULLETS
**Hash:** `0xB8AF3137` | **Returns:** `BOOL`
**Alt name:** `HasVehicleBeenDamagedByBullets`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/HAS_VEHICLE_BEEN_DAMAGED_BY_BULLETS)

---
## HAS_VEHICLE_BEEN_OWNED_BY_PLAYER
**Hash:** `0xE4E83A5B` | **Returns:** `BOOL`
**Alt name:** `HasVehicleBeenOwnedByPlayer`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/HAS_VEHICLE_BEEN_OWNED_BY_PLAYER)

---
## IS_ACE_ALLOWED
**Hash:** `0x7EBB9929` | **Returns:** `BOOL`
**Alt name:** `IsAceAllowed`

**Parameters:**
| Name | Type |
|------|------|
| `object` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_ACE_ALLOWED)

---
## IS_BIGMAP_ACTIVE
**Hash:** `0xFFF65C63` | **Returns:** `BOOL`
**Alt name:** `IsBigmapActive`

Returns true if the minimap is currently expanded. False if it's the normal minimap state.
Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.

**Example:**
```lua
local expanded = IsBigmapActive()
local fullMap = IsBigmapFull()
print("The minimap is currently " .. (expanded and "expanded" or "normal size") .. " and the full map is currently " .. (fullMap and "revealed" or "not revealed") .. ".")
```

[View docs](https://cfxnatives.dev/natives/IS_BIGMAP_ACTIVE)

---
## IS_BIGMAP_FULL
**Hash:** `0x66EE14B2` | **Returns:** `BOOL`
**Alt name:** `IsBigmapFull`

**Example:**
```lua
local expanded = IsBigmapActive()
local fullMap = IsBigmapFull()
print("The minimap is currently " .. (expanded and "expanded" or "normal size") .. " and the full map is currently " .. (fullMap and "revealed" or "not revealed") .. ".")
```

[View docs](https://cfxnatives.dev/natives/IS_BIGMAP_FULL)

---
## IS_BOAT_ANCHORED_AND_FROZEN
**Hash:** `0xD5C39EE6` | **Returns:** `bool`
**Alt name:** `IsBoatAnchoredAndFrozen`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_BOAT_ANCHORED_AND_FROZEN)

---
## IS_BOAT_WRECKED
**Hash:** `0x9049DB44` | **Returns:** `bool`
**Alt name:** `IsBoatWrecked`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_BOAT_WRECKED)

---
## IS_DISABLED_RAW_KEY_DOWN
**Hash:** `0x36366EC3` | **Returns:** `BOOL`
**Alt name:** `IsDisabledRawKeyDown`

Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
if IsDisabledRawKeyDown(32) then -- KEY_SPACE
    print("Spacebar is down")
end
```

[View docs](https://cfxnatives.dev/natives/IS_DISABLED_RAW_KEY_DOWN)

---
## IS_DISABLED_RAW_KEY_PRESSED
**Hash:** `0x1F7CBBAA` | **Returns:** `BOOL`
**Alt name:** `IsDisabledRawKeyPressed`

Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
if IsDisabledRawKeyPressed(32) then -- KEY_SPACE
    print("Spacebar pressed")
end
```

[View docs](https://cfxnatives.dev/natives/IS_DISABLED_RAW_KEY_PRESSED)

---
## IS_DISABLED_RAW_KEY_RELEASED
**Hash:** `0x72B66C09` | **Returns:** `BOOL`
**Alt name:** `IsDisabledRawKeyReleased`

Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
if IsDisabledRawKeyReleased(32) then -- KEY_SPACE
    print("Spacebar released")
end
```

[View docs](https://cfxnatives.dev/natives/IS_DISABLED_RAW_KEY_RELEASED)

---
## IS_DISABLED_RAW_KEY_UP
**Hash:** `0x2C033875` | **Returns:** `BOOL`
**Alt name:** `IsDisabledRawKeyUp`

Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014).

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
if IsDisabledRawKeyUp(32) then -- KEY_SPACE
    print("Spacebar is up")
end
```

[View docs](https://cfxnatives.dev/natives/IS_DISABLED_RAW_KEY_UP)

---
## IS_DUI_AVAILABLE
**Hash:** `0x7AAC3B4C` | **Returns:** `BOOL`
**Alt name:** `IsDuiAvailable`

Returns whether or not a browser is created for a specified DUI browser object.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |

[View docs](https://cfxnatives.dev/natives/IS_DUI_AVAILABLE)

---
## IS_DUPLICITY_VERSION
**Hash:** `0xCF24C52E` | **Returns:** `BOOL`
**Alt name:** `IsDuplicityVersion`

Gets whether or not this is the CitizenFX server.

[View docs](https://cfxnatives.dev/natives/IS_DUPLICITY_VERSION)

---
## IS_ENTITY_POSITION_FROZEN
**Hash:** `0xEDBE6ADD` | **Returns:** `bool`
**Alt name:** `IsEntityPositionFrozen`

A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

**Example:**
```lua
local isFrozen = IsEntityPositionFrozen(PlayerPedId())
```

[View docs](https://cfxnatives.dev/natives/IS_ENTITY_POSITION_FROZEN)

---
## IS_ENTITY_VISIBLE
**Hash:** `0x120B4ED5` | **Returns:** `BOOL`
**Alt name:** `IsEntityVisible`

This native checks if the given entity is visible.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_ENTITY_VISIBLE)

---
## IS_FLASH_LIGHT_ON
**Hash:** `0x76876154` | **Returns:** `bool`
**Alt name:** `IsFlashLightOn`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_FLASH_LIGHT_ON)

---
## IS_HELI_TAIL_BOOM_BREAKABLE
**Hash:** `0x23E46BD7` | **Returns:** `BOOL`
**Alt name:** `IsHeliTailBoomBreakable`

This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_HELI_TAIL_BOOM_BREAKABLE)

---
## IS_HELI_TAIL_BOOM_BROKEN
**Hash:** `0x2C59F987` | **Returns:** `BOOL`
**Alt name:** `IsHeliTailBoomBroken`

**Parameters:**
| Name | Type |
|------|------|
| `heli` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_HELI_TAIL_BOOM_BROKEN)

---
## IS_NUI_FOCUS_KEEPING_INPUT
**Hash:** `0x39C9DC92` | **Returns:** `BOOL`
**Alt name:** `IsNuiFocusKeepingInput`

Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.

[View docs](https://cfxnatives.dev/natives/IS_NUI_FOCUS_KEEPING_INPUT)

---
## IS_NUI_FOCUSED
**Hash:** `0x98545E6D` | **Returns:** `BOOL`
**Alt name:** `IsNuiFocused`

Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.

[View docs](https://cfxnatives.dev/natives/IS_NUI_FOCUSED)

---
## IS_PED_A_PLAYER
**Hash:** `0x404794CA` | **Returns:** `BOOL`
**Alt name:** `IsPedAPlayer`

This native checks if the given ped is a player.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_PED_A_PLAYER)

---
## IS_PED_COLLECTION_COMPONENT_VARIATION_GEN9_EXCLUSIVE
**Hash:** `0x33B2AFA2` | **Returns:** `bool`
**Alt name:** `IsPedCollectionComponentVariationGen9Exclusive`

An alternative to [IS_PED_COMPONENT_VARIATION_GEN9\_EXCLUSIVE](#\_0xC767B581) that uses local collection indexing instead of the global one.

The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.

Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `collection` | `char*` |
| `drawableId` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_PED_COLLECTION_COMPONENT_VARIATION_GEN9_EXCLUSIVE)

---
## IS_PED_COLLECTION_COMPONENT_VARIATION_VALID
**Hash:** `0xCA63A52A` | **Returns:** `bool`
**Alt name:** `IsPedCollectionComponentVariationValid`

An alternative to [IS_PED_COMPONENT_VARIATION_VALID](#\_0xE825F6B6CEA7671D) that uses local collection indexing instead of the global one.

The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.

Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `collection` | `char*` |
| `drawableId` | `int` |
| `textureId` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_PED_COLLECTION_COMPONENT_VARIATION_VALID)

---
## IS_PED_COMPONENT_VARIATION_GEN9_EXCLUSIVE
**Hash:** `0xC767B581` | **Returns:** `bool`
**Alt name:** `IsPedComponentVariationGen9Exclusive`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `drawableId` | `int` |

**Example:**
```lua
local ped = PlayerPedId()

for component = 0, 12 do
  local count = GetNumberOfPedDrawableVariations(ped, component)

  for drawable = 0, count - 1 do
    if IsPedComponentVariationGen9Exclusive(ped, component, drawable) then
      print("Component " .. component .. " drawable " .. drawable .. " is a gen9 exclusive, skip!")
    end
  end
end
```

[View docs](https://cfxnatives.dev/natives/IS_PED_COMPONENT_VARIATION_GEN9_EXCLUSIVE)

---
## IS_PED_HANDCUFFED
**Hash:** `0x25865633` | **Returns:** `bool`
**Alt name:** `IsPedHandcuffed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_HANDCUFFED)

---
## IS_PED_IN_ANY_VEHICLE
**Hash:** `0x3B0171EE` | **Returns:** `BOOL`
**Alt name:** `IsPedInAnyVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_PED_IN_ANY_VEHICLE)

---
## IS_PED_IN_VEHICLE
**Hash:** `0x7DA6BC83` | **Returns:** `BOOL`
**Alt name:** `IsPedInVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_PED_IN_VEHICLE)

---
## IS_PED_ON_MOUNT
**Hash:** `0x43103006` | **Returns:** `BOOL`
**Alt name:** `IsPedOnMount`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_PED_ON_MOUNT)

---
## IS_PED_RAGDOLL
**Hash:** `0xC833BBE1` | **Returns:** `bool`
**Alt name:** `IsPedRagdoll`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_PED_RAGDOLL)

---
## IS_PED_STRAFING
**Hash:** `0xEFEED13C` | **Returns:** `bool`
**Alt name:** `IsPedStrafing`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_PED_STRAFING)

---
## IS_PED_USING_ACTION_MODE
**Hash:** `0x5AE7EDA2` | **Returns:** `bool`
**Alt name:** `IsPedUsingActionMode`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_PED_USING_ACTION_MODE)

---
## IS_PLAYER_ACE_ALLOWED
**Hash:** `0xDEDAE23D` | **Returns:** `BOOL`
**Alt name:** `IsPlayerAceAllowed`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `object` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_ACE_ALLOWED)

---
## IS_PLAYER_COMMERCE_INFO_LOADED
**Hash:** `0xBEFE93F4` | **Returns:** `BOOL`
**Alt name:** `IsPlayerCommerceInfoLoaded`

Requests whether or not the commerce data for the specified player has loaded.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_COMMERCE_INFO_LOADED)

---
## IS_PLAYER_COMMERCE_INFO_LOADED_EXT
**Hash:** `0x1D14F4FE` | **Returns:** `BOOL`
**Alt name:** `IsPlayerCommerceInfoLoadedExt`

Requests whether or not the commerce data for the specified player has loaded from Tebex.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_COMMERCE_INFO_LOADED_EXT)

---
## IS_PLAYER_EVADING_WANTED_LEVEL
**Hash:** `0x89A3881A` | **Returns:** `BOOL`
**Alt name:** `IsPlayerEvadingWantedLevel`

```
This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
Otherwise will return false.

If the player is not wanted, it simply returns false.
```

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_EVADING_WANTED_LEVEL)

---
## IS_PLAYER_IN_FREE_CAM_MODE
**Hash:** `0x1F14F2AC` | **Returns:** `bool`
**Alt name:** `IsPlayerInFreeCamMode`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_IN_FREE_CAM_MODE)

---
## IS_PLAYER_USING_SUPER_JUMP
**Hash:** `0xC7D2C20C` | **Returns:** `BOOL`
**Alt name:** `IsPlayerUsingSuperJump`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_USING_SUPER_JUMP)

---
## IS_PRINCIPAL_ACE_ALLOWED
**Hash:** `0x37CF52CE` | **Returns:** `BOOL`
**Alt name:** `IsPrincipalAceAllowed`

**Parameters:**
| Name | Type |
|------|------|
| `principal` | `char*` |
| `object` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_PRINCIPAL_ACE_ALLOWED)

---
## IS_RAW_KEY_DOWN
**Hash:** `0xD95A7387` | **Returns:** `BOOL`
**Alt name:** `IsRawKeyDown`

Gets if the specified `rawKeyIndex` is pressed down on the keyboard.

This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
if IsRawKeyDown(32) then -- KEY_SPACE
    print("Spacebar is down")
end
```

[View docs](https://cfxnatives.dev/natives/IS_RAW_KEY_DOWN)

---
## IS_RAW_KEY_PRESSED
**Hash:** `0x69F7C29E` | **Returns:** `BOOL`
**Alt name:** `IsRawKeyPressed`

Gets if the specified `rawKeyIndex` is pressed on the keyboard.

This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
if IsRawKeyPressed(32) then -- KEY_SPACE
    print("Spacebar pressed")
end
```

[View docs](https://cfxnatives.dev/natives/IS_RAW_KEY_PRESSED)

---
## IS_RAW_KEY_RELEASED
**Hash:** `0xEAA50861` | **Returns:** `BOOL`
**Alt name:** `IsRawKeyReleased`

Gets if the specified `rawKeyIndex` was just released on the keyboard.

This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
if IsRawKeyReleased(32) then -- KEY_SPACE
    print("Spacebar released")
end
```

[View docs](https://cfxnatives.dev/natives/IS_RAW_KEY_RELEASED)

---
## IS_RAW_KEY_UP
**Hash:** `0x36F4E505` | **Returns:** `BOOL`
**Alt name:** `IsRawKeyUp`

Gets if the specified `rawKeyIndex` is up  on the keyboard.

This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#\_0x8BCF0014)

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `rawKeyIndex` | `int` |

**Example:**
```lua
if IsRawKeyUp(32) then -- KEY_SPACE
    print("Spacebar is up")
end
```

[View docs](https://cfxnatives.dev/natives/IS_RAW_KEY_UP)

---
## IS_STREAMING_FILE_READY
**Hash:** `0xA194934D` | **Returns:** `BOOL`
**Alt name:** `IsStreamingFileReady`

**Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.

Returns whether an asynchronous streaming file registration completed.

**Parameters:**
| Name | Type |
|------|------|
| `registerAs` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_STREAMING_FILE_READY)

---
## IS_TRACK_ENABLED
**Hash:** `0x31E695CB` | **Returns:** `bool`
**Alt name:** `IsTrackEnabled`

Getter for [SET_TRACK_ENABLED](#\_0x4B41E84C)

**Parameters:**
| Name | Type |
|------|------|
| `track` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_TRACK_ENABLED)

---
## IS_TRACK_SWITCHED_OFF
**Hash:** `0xE0C53765` | **Returns:** `bool`
**Alt name:** `IsTrackSwitchedOff`

Getter for [SWITCH_TRAIN_TRACK](#\_0xFD813BB7DB977F20). Determines if ambient trains are able to spawn on this track.

**Parameters:**
| Name | Type |
|------|------|
| `track` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_TRACK_SWITCHED_OFF)

---
## IS_TRAIN_CABOOSE
**Hash:** `0xFA9336E5` | **Returns:** `bool`
**Alt name:** `IsTrainCaboose`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_TRAIN_CABOOSE)

---
## IS_VEHICLE_ALARM_SET
**Hash:** `0xDC921211` | **Returns:** `BOOL`
**Alt name:** `IsVehicleAlarmSet`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_VEHICLE_ALARM_SET)

---
## IS_VEHICLE_ENGINE_STARTING
**Hash:** `0xBB340D04` | **Returns:** `BOOL`
**Alt name:** `IsVehicleEngineStarting`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_VEHICLE_ENGINE_STARTING)

---
## IS_VEHICLE_EXTRA_TURNED_ON
**Hash:** `0x42098B5` | **Returns:** `BOOL`
**Alt name:** `IsVehicleExtraTurnedOn`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `extraId` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_VEHICLE_EXTRA_TURNED_ON)

---
## IS_VEHICLE_INTERIOR_LIGHT_ON
**Hash:** `0xA411F72C` | **Returns:** `BOOL`
**Alt name:** `IsVehicleInteriorLightOn`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_VEHICLE_INTERIOR_LIGHT_ON)

---
## IS_VEHICLE_NEEDS_TO_BE_HOTWIRED
**Hash:** `0xF9933BF4` | **Returns:** `BOOL`
**Alt name:** `IsVehicleNeedsToBeHotwired`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_VEHICLE_NEEDS_TO_BE_HOTWIRED)

---
## IS_VEHICLE_PREVIOUSLY_OWNED_BY_PLAYER
**Hash:** `0xF849ED67` | **Returns:** `BOOL`
**Alt name:** `IsVehiclePreviouslyOwnedByPlayer`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_VEHICLE_PREVIOUSLY_OWNED_BY_PLAYER)

---
## IS_VEHICLE_SIREN_ON
**Hash:** `0x25EB5873` | **Returns:** `BOOL`
**Alt name:** `IsVehicleSirenOn`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_VEHICLE_SIREN_ON)

---
## IS_VEHICLE_TYRE_BURST
**Hash:** `0x48C80210` | **Returns:** `BOOL`
**Alt name:** `IsVehicleTyreBurst`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelID` | `int` |
| `completely` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_VEHICLE_TYRE_BURST)

---
## IS_VEHICLE_WANTED
**Hash:** `0xA7DAF7C` | **Returns:** `BOOL`
**Alt name:** `IsVehicleWanted`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_VEHICLE_WANTED)

---
## IS_VEHICLE_WHEEL_BROKEN_OFF
**Hash:** `0xCF1BC668` | **Returns:** `BOOL`
**Alt name:** `IsVehicleWheelBrokenOff`

Getter for [BREAK_OFF_VEHICLE_WHEEL](?\_0xA274CADB).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |

**Example:**
```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())

if DoesEntityExist(vehicle) then
  local isWheelBroken = IsVehicleWheelBrokenOff(vehicle, 1)
  print("Is wheel 1 broken? ", isWheelBroken)
end
```

[View docs](https://cfxnatives.dev/natives/IS_VEHICLE_WHEEL_BROKEN_OFF)

---
## IS_VEHICLE_WINDOW_INTACT
**Hash:** `0xAC4EF23D` | **Returns:** `BOOL`
**Alt name:** `IsVehicleWindowIntact`

See the client-side [IS_VEHICLE_WINDOW_INTACT](#\_0x46E571A0E20D01F1) for a window indexes list.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `windowIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~IS_VEHICLE_WINDOW_INTACT)

---
## LEAVE_CURSOR_MODE
**Hash:** `0xADECF19E` | **Returns:** `void`
**Alt name:** `LeaveCursorMode`

Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.

[View docs](https://cfxnatives.dev/natives/LEAVE_CURSOR_MODE)

---
## LOAD_PLAYER_COMMERCE_DATA
**Hash:** `0xA8F63EAB` | **Returns:** `void`
**Alt name:** `LoadPlayerCommerceData`

Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/LOAD_PLAYER_COMMERCE_DATA)

---
## LOAD_PLAYER_COMMERCE_DATA_EXT
**Hash:** `0x7995539E` | **Returns:** `void`
**Alt name:** `LoadPlayerCommerceDataExt`

Requests the commerce data from Tebex for the specified player, including the owned SKUs.

Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.

This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.

This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

**Example:**
```lua
RegisterNetEvent("doesOwnPackage", function(packageIdSku)
	-- source isn't valid across waits, so we localize it
	local source = source

	-- input isn't right
	if type(packageIdSku) ~= "number" then
		return
	end

	-- The native will cache the results
	LoadPlayerCommerceDataExt(source)
	-- Wait for the players data to load
	while not IsPlayerCommerceInfoLoadedExt(source) do
		Wait(0)
	end

	-- Tell the client if they own the package or not
	TriggerClientEvent("doesOwnPackage", source, DoesPlayerOwnSkuExt(source, packageIdSku))
end)
```

[View docs](https://cfxnatives.dev/natives/LOAD_PLAYER_COMMERCE_DATA_EXT)

---
## LOAD_RESOURCE_FILE
**Hash:** `0x76A9EE1F` | **Returns:** `char*`
**Alt name:** `LoadResourceFile`

Reads the contents of a text file in a specified resource.
If executed on the client, this file has to be included in `files` in the resource manifest.
Example: `local data = LoadResourceFile("devtools", "data.json")`

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |
| `fileName` | `char*` |

[View docs](https://cfxnatives.dev/natives/LOAD_RESOURCE_FILE)

---
## LOAD_WATER_FROM_PATH
**Hash:** `0xF5102568` | **Returns:** `BOOL`
**Alt name:** `LoadWaterFromPath`

Define the xml in a resources fxmanifest, under the file(s) section.

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |
| `fileName` | `char*` |

**Example:**
```lua
local success = LoadWaterFromPath('my-resource-name', 'water-all-over-the-place.xml')
```

[View docs](https://cfxnatives.dev/natives/LOAD_WATER_FROM_PATH)

---
## MUMBLE_ADD_VOICE_CHANNEL_LISTEN
**Hash:** `0xC79F44BF` | **Returns:** `void`
**Alt name:** `MumbleAddVoiceChannelListen`

Starts listening to the specified channel, when available.

**Parameters:**
| Name | Type |
|------|------|
| `channel` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_ADD_VOICE_CHANNEL_LISTEN)

---
## MUMBLE_ADD_VOICE_TARGET_CHANNEL
**Hash:** `0x4D386C9E` | **Returns:** `void`
**Alt name:** `MumbleAddVoiceTargetChannel`

Adds the specified channel to the target list for the specified Mumble voice target ID.

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |
| `channel` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_ADD_VOICE_TARGET_CHANNEL)

---
## MUMBLE_ADD_VOICE_TARGET_PLAYER
**Hash:** `0x32C5355A` | **Returns:** `void`
**Alt name:** `MumbleAddVoiceTargetPlayer`

Adds the specified player to the target list for the specified Mumble voice target ID.

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_ADD_VOICE_TARGET_PLAYER)

---
## MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID
**Hash:** `0x25F2B65F` | **Returns:** `void`
**Alt name:** `MumbleAddVoiceTargetPlayerByServerId`

Adds the specified player to the target list for the specified Mumble voice target ID.

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |
| `serverId` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID)

---
## MUMBLE_CLEAR_VOICE_CHANNEL
**Hash:** `0xBF847807` | **Returns:** `void`
**Alt name:** `MumbleClearVoiceChannel`

[View docs](https://cfxnatives.dev/natives/MUMBLE_CLEAR_VOICE_CHANNEL)

---
## MUMBLE_CLEAR_VOICE_TARGET
**Hash:** `0x8555DCBA` | **Returns:** `void`
**Alt name:** `MumbleClearVoiceTarget`

Clears the target list for the specified Mumble voice target ID.

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_CLEAR_VOICE_TARGET)

---
## MUMBLE_CLEAR_VOICE_TARGET_CHANNELS
**Hash:** `0x5EA72E76` | **Returns:** `void`
**Alt name:** `MumbleClearVoiceTargetChannels`

Clears channels from the target list for the specified Mumble voice target ID.

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_CLEAR_VOICE_TARGET_CHANNELS)

---
## MUMBLE_CLEAR_VOICE_TARGET_PLAYERS
**Hash:** `0x912E21DA` | **Returns:** `void`
**Alt name:** `MumbleClearVoiceTargetPlayers`

Clears players from the target list for the specified Mumble voice target ID.

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_CLEAR_VOICE_TARGET_PLAYERS)

---
## MUMBLE_CREATE_CHANNEL
**Hash:** `0x262663C5` | **Returns:** `void`
**Alt name:** `MumbleCreateChannel`

Create a permanent voice channel.

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_CREATE_CHANNEL)

---
## MUMBLE_DOES_CHANNEL_EXIST
**Hash:** `0xCC8CA25` | **Returns:** `BOOL`
**Alt name:** `MumbleDoesChannelExist`

Check whether specified channel exists on the Mumble server.

**Parameters:**
| Name | Type |
|------|------|
| `channel` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_DOES_CHANNEL_EXIST)

---
## MUMBLE_GET_TALKER_PROXIMITY
**Hash:** `0x84E02A32` | **Returns:** `float`
**Alt name:** `MumbleGetTalkerProximity`

[View docs](https://cfxnatives.dev/natives/MUMBLE_GET_TALKER_PROXIMITY)

---
## MUMBLE_GET_VOICE_CHANNEL_FROM_SERVER_ID
**Hash:** `0x221C09F1` | **Returns:** `int`
**Alt name:** `MumbleGetVoiceChannelFromServerId`

Returns the mumble voice channel from a player's server id.

**Parameters:**
| Name | Type |
|------|------|
| `serverId` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_GET_VOICE_CHANNEL_FROM_SERVER_ID)

---
## MUMBLE_IS_ACTIVE
**Hash:** `0xE820BC10` | **Returns:** `BOOL`
**Alt name:** `MumbleIsActive`

[View docs](https://cfxnatives.dev/natives/MUMBLE_IS_ACTIVE)

---
## MUMBLE_IS_CONNECTED
**Hash:** `0xB816370A` | **Returns:** `BOOL`
**Alt name:** `MumbleIsConnected`

This native will return true if the user succesfully connected to the voice server.
If the user disabled the voice-chat setting it will return false.

[View docs](https://cfxnatives.dev/natives/MUMBLE_IS_CONNECTED)

---
## MUMBLE_IS_PLAYER_MUTED
**Hash:** `0x1D5D50C2` | **Returns:** `BOOL`
**Alt name:** `MumbleIsPlayerMuted`

Checks if the player is currently muted

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_IS_PLAYER_MUTED)

---
## MUMBLE_IS_PLAYER_TALKING
**Hash:** `0x33EEF97F` | **Returns:** `BOOL`
**Alt name:** `MumbleIsPlayerTalking`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_IS_PLAYER_TALKING)

---
## MUMBLE_REMOVE_VOICE_CHANNEL_LISTEN
**Hash:** `0x231523B7` | **Returns:** `void`
**Alt name:** `MumbleRemoveVoiceChannelListen`

Stops listening to the specified channel.

**Parameters:**
| Name | Type |
|------|------|
| `channel` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_REMOVE_VOICE_CHANNEL_LISTEN)

---
## MUMBLE_REMOVE_VOICE_TARGET_CHANNEL
**Hash:** `0x268DB867` | **Returns:** `void`
**Alt name:** `MumbleRemoveVoiceTargetChannel`

Removes the specified voice channel from the user's voice targets.

Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |
| `channel` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_REMOVE_VOICE_TARGET_CHANNEL)

---
## MUMBLE_REMOVE_VOICE_TARGET_PLAYER
**Hash:** `0x88CD646F` | **Returns:** `void`
**Alt name:** `MumbleRemoveVoiceTargetPlayer`

Removes the specified player from the user's voice targets.

Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_REMOVE_VOICE_TARGET_PLAYER)

---
## MUMBLE_REMOVE_VOICE_TARGET_PLAYER_BY_SERVER_ID
**Hash:** `0x930BD34B` | **Returns:** `void`
**Alt name:** `MumbleRemoveVoiceTargetPlayerByServerId`

Removes the specified player from the user's voice targets.

Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |
| `serverId` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_REMOVE_VOICE_TARGET_PLAYER_BY_SERVER_ID)

---
## MUMBLE_SET_ACTIVE
**Hash:** `0xD932A3F3` | **Returns:** `void`
**Alt name:** `MumbleSetActive`

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_ACTIVE)

---
## MUMBLE_SET_AUDIO_INPUT_DISTANCE
**Hash:** `0x1B1052E2` | **Returns:** `void`
**Alt name:** `MumbleSetAudioInputDistance`

Sets the current input distance. The player will be able to talk to other players within this distance.

**Parameters:**
| Name | Type |
|------|------|
| `distance` | `float` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_AUDIO_INPUT_DISTANCE)

---
## MUMBLE_SET_AUDIO_INPUT_INTENT
**Hash:** `0x6383526B` | **Returns:** `void`
**Alt name:** `MumbleSetAudioInputIntent`

Use this native to disable noise suppression and high pass filters.

The possible intents for this are as follows (backticks are used to represent hashes):

| Index | Description |
|-|-|
| \`speech\` | Default intent |
| \`music\` | Disable noise suppression and high pass filter |

**Parameters:**
| Name | Type |
|------|------|
| `intentHash` | `Hash` |

**Example:**
```lua
-- disable noise suppression and high pass filter
MumbleSetAudioInputIntent(`music`)

-- set the default intent (enable noise suppression and high pass filter)
MumbleSetAudioInputIntent(`speech`)
```

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_AUDIO_INPUT_INTENT)

---
## MUMBLE_SET_AUDIO_OUTPUT_DISTANCE
**Hash:** `0x74C597D9` | **Returns:** `void`
**Alt name:** `MumbleSetAudioOutputDistance`

Sets the current output distance. The player will be able to hear other players talking within this distance.

**Parameters:**
| Name | Type |
|------|------|
| `distance` | `float` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_AUDIO_OUTPUT_DISTANCE)

---
## MUMBLE_SET_PLAYER_MUTED
**Hash:** `0xCC6C2EB1` | **Returns:** `void`
**Alt name:** `MumbleSetPlayerMuted`

Mutes or unmutes the specified player

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `int` |
| `toggle` | `bool` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_PLAYER_MUTED)

---
## MUMBLE_SET_SERVER_ADDRESS
**Hash:** `0xE6EB2CD8` | **Returns:** `void`
**Alt name:** `MumbleSetServerAddress`

Changes the Mumble server address to connect to, and reconnects to the new address.

Setting the address to an empty string and the port to -1 will reset to the built in FXServer Mumble Implementation.

**Parameters:**
| Name | Type |
|------|------|
| `address` | `char*` |
| `port` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_SERVER_ADDRESS)

---
## MUMBLE_SET_SUBMIX_FOR_SERVER_ID
**Hash:** `0xFE3A3054` | **Returns:** `void`
**Alt name:** `MumbleSetSubmixForServerId`

Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.

**Parameters:**
| Name | Type |
|------|------|
| `serverId` | `int` |
| `submixId` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_SUBMIX_FOR_SERVER_ID)

---
## MUMBLE_SET_TALKER_PROXIMITY
**Hash:** `0x74E927B0` | **Returns:** `void`
**Alt name:** `MumbleSetTalkerProximity`

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_TALKER_PROXIMITY)

---
## MUMBLE_SET_VOICE_CHANNEL
**Hash:** `0x8737EEE8` | **Returns:** `void`
**Alt name:** `MumbleSetVoiceChannel`

**Parameters:**
| Name | Type |
|------|------|
| `channel` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_VOICE_CHANNEL)

---
## MUMBLE_SET_VOICE_TARGET
**Hash:** `0x960A4A95` | **Returns:** `void`
**Alt name:** `MumbleSetVoiceTarget`

Sets the current Mumble voice target ID to broadcast voice to.

**Parameters:**
| Name | Type |
|------|------|
| `targetId` | `int` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_VOICE_TARGET)

---
## MUMBLE_SET_VOLUME_OVERRIDE
**Hash:** `0x61C309E3` | **Returns:** `void`
**Alt name:** `MumbleSetVolumeOverride`

Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.

Set to -1.0 to reset the Volume override.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `volume` | `float` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_VOLUME_OVERRIDE)

---
## MUMBLE_SET_VOLUME_OVERRIDE_BY_SERVER_ID
**Hash:** `0xCE8E25B4` | **Returns:** `void`
**Alt name:** `MumbleSetVolumeOverrideByServerId`

Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.

**Parameters:**
| Name | Type |
|------|------|
| `serverId` | `int` |
| `volume` | `float` |

[View docs](https://cfxnatives.dev/natives/MUMBLE_SET_VOLUME_OVERRIDE_BY_SERVER_ID)

---
## NETWORK_DOES_ENTITY_EXIST_WITH_NETWORK_ID
**Hash:** `0x1E2E3177` | **Returns:** `BOOL`
**Alt name:** `NetworkDoesEntityExistWithNetworkId`

**Parameters:**
| Name | Type |
|------|------|
| `netId` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~NETWORK_DOES_ENTITY_EXIST_WITH_NETWORK_ID)

---
## NETWORK_GET_ENTITY_FROM_NETWORK_ID
**Hash:** `0x5B912C3F` | **Returns:** `Entity`
**Alt name:** `NetworkGetEntityFromNetworkId`

**Parameters:**
| Name | Type |
|------|------|
| `netId` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~NETWORK_GET_ENTITY_FROM_NETWORK_ID)

---
## NETWORK_GET_ENTITY_OWNER
**Hash:** `0x526FEE31` | **Returns:** `int`
**Alt name:** `NetworkGetEntityOwner`

Returns the owner ID of the specified entity.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/NETWORK_GET_ENTITY_OWNER)

---
## NETWORK_GET_FIRST_ENTITY_OWNER
**Hash:** `0x1E546224` | **Returns:** `int`
**Alt name:** `NetworkGetFirstEntityOwner`

Returns the first owner ID of the specified entity.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/NETWORK_GET_FIRST_ENTITY_OWNER)

---
## NETWORK_GET_NETWORK_ID_FROM_ENTITY
**Hash:** `0x9E35DAB6` | **Returns:** `int`
**Alt name:** `NetworkGetNetworkIdFromEntity`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CFX~NETWORK_GET_NETWORK_ID_FROM_ENTITY)

---
## NETWORK_GET_VOICE_PROXIMITY_OVERRIDE_FOR_PLAYER
**Hash:** `0xFFEEF513` | **Returns:** `Vector3`
**Alt name:** `NetworkGetVoiceProximityOverrideForPlayer`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |

[View docs](https://cfxnatives.dev/natives/NETWORK_GET_VOICE_PROXIMITY_OVERRIDE_FOR_PLAYER)

---
## ONESYNC_ENABLE_REMOTE_ATTACHMENT_SANITIZATION
**Hash:** `0x30CE39D8` | **Returns:** `void`
**Alt name:** `OnesyncEnableRemoteAttachmentSanitization`

Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.

**Parameters:**
| Name | Type |
|------|------|
| `enable` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ONESYNC_ENABLE_REMOTE_ATTACHMENT_SANITIZATION)

---
## OVERRIDE_PEDS_CAN_STAND_ON_TOP_FLAG
**Hash:** `0x90A9E0B2` | **Returns:** `void`
**Alt name:** `OverridePedsCanStandOnTopFlag`

Sets whether peds can stand on top of *all* vehicles without falling off.

Note this flag is not replicated automatically, you will have to manually do so.

**Parameters:**
| Name | Type |
|------|------|
| `flag` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/OVERRIDE_PEDS_CAN_STAND_ON_TOP_FLAG)

---
## OVERRIDE_PEDS_USE_DEFAULT_DRIVE_BY_CLIPSET
**Hash:** `0xB14F8EAD` | **Returns:** `void`
**Alt name:** `OverridePedsUseDefaultDriveByClipset`

Allows the bypassing of default game behavior that prevents the use of [SET_PED_DRIVE_BY_CLIPSET_OVERRIDE](#\_0xED34AB6C5CB36520) in certain scenarios to avoid clipping issues (e.g., when there is more than one Ped in a vehicle).

Note: This flag and the overridden clipset are not replicated values and require synchronization through user scripts. Additionally, current game behavior also restricts applying this clipset locally when in first-person mode and will require a temporary workaround.

**Parameters:**
| Name | Type |
|------|------|
| `flag` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/OVERRIDE_PEDS_USE_DEFAULT_DRIVE_BY_CLIPSET)

---
## OVERRIDE_POP_GROUPS
**Hash:** `0xD3BC438F` | **Returns:** `void`
**Alt name:** `OverridePopGroups`

Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.

**Parameters:**
| Name | Type |
|------|------|
| `path` | `char*` |

**Example:**
```lua
-- fxmanifest.lua:
file 'popgroups_dlc.xml'

-- client.lua:
OverridePopGroups('popgroups_dlc.xml')

-- restore the original after five minutes
Wait(1000 * 60 * 5)
OverridePopGroups(nil)
```

[View docs](https://cfxnatives.dev/natives/OVERRIDE_POP_GROUPS)

---
## OVERRIDE_REACTION_TO_VEHICLE_SIREN
**Hash:** `0x3F3EB3F7` | **Returns:** `void`
**Alt name:** `OverrideReactionToVehicleSiren`

Setting the state to true and a value between 0 and 2 will cause pedestrian vehicles to react accordingly to sirens.

```cpp
enum Reactions {
    Left = 0,
    Right = 1,
    Stop = 2
}
```

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |
| `reaction` | `int` |

[View docs](https://cfxnatives.dev/natives/OVERRIDE_REACTION_TO_VEHICLE_SIREN)

---
## OVERRIDE_VEHICLE_PEDS_CAN_STAND_ON_TOP_FLAG
**Hash:** `0x7FA03E76` | **Returns:** `void`
**Alt name:** `OverrideVehiclePedsCanStandOnTopFlag`

Overrides whether or not peds can stand on top of the specified vehicle.

Note this flag is not replicated automatically, you will have to manually do so.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `can` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/OVERRIDE_VEHICLE_PEDS_CAN_STAND_ON_TOP_FLAG)

---
## PERFORM_HTTP_REQUEST_INTERNAL
**Hash:** `0x8E8CC653` | **Returns:** `int`
**Alt name:** `PerformHttpRequestInternal`

**Parameters:**
| Name | Type |
|------|------|
| `requestData` | `char*` |
| `requestDataLength` | `int` |

[View docs](https://cfxnatives.dev/natives/PERFORM_HTTP_REQUEST_INTERNAL)

---
## PERFORM_HTTP_REQUEST_INTERNAL_EX
**Hash:** `0x6B171E87` | **Returns:** `int`
**Alt name:** `PerformHttpRequestInternalEx`

**Parameters:**
| Name | Type |
|------|------|
| `requestData` | `object` |

[View docs](https://cfxnatives.dev/natives/PERFORM_HTTP_REQUEST_INTERNAL_EX)

---
## PREPARE_LIGHT
**Hash:** `0x584B4C99` | **Returns:** `void`
**Alt name:** `PrepareLight`

Create a new light with specified type, flags, position, color, and intensity.

**Parameters:**
| Name | Type |
|------|------|
| `lightType` | `int` |
| `flags` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `intensity` | `float` |

[View docs](https://cfxnatives.dev/natives/PREPARE_LIGHT)

---
## PRINT_STRUCTURED_TRACE
**Hash:** `0x90892DED` | **Returns:** `void`
**Alt name:** `PrintStructuredTrace`

Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
server monitoring utilities.

**Parameters:**
| Name | Type |
|------|------|
| `jsonString` | `char*` |

[View docs](https://cfxnatives.dev/natives/PRINT_STRUCTURED_TRACE)

---
## PROFILER_ENTER_SCOPE
**Hash:** `0xC795A4A9` | **Returns:** `void`
**Alt name:** `ProfilerEnterScope`

Scope entry for profiler.

**Parameters:**
| Name | Type |
|------|------|
| `scopeName` | `char*` |

[View docs](https://cfxnatives.dev/natives/PROFILER_ENTER_SCOPE)

---
## PROFILER_EXIT_SCOPE
**Hash:** `0xB39CA35C` | **Returns:** `void`
**Alt name:** `ProfilerExitScope`

Scope exit for profiler.

[View docs](https://cfxnatives.dev/natives/PROFILER_EXIT_SCOPE)

---
## PROFILER_IS_RECORDING
**Hash:** `0xF8B7D7BB` | **Returns:** `BOOL`
**Alt name:** `ProfilerIsRecording`

Returns true if the profiler is active.

[View docs](https://cfxnatives.dev/natives/PROFILER_IS_RECORDING)

---
## REGISTER_ARCHETYPES
**Hash:** `0x3C2F9037` | **Returns:** `void`
**Alt name:** `RegisterArchetypes`

**Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.

Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.

**Parameters:**
| Name | Type |
|------|------|
| `factory` | `func` |

**Example:**
```lua
RegisterArchetypes(function()
	return {
		{
			flags = 32,
			bbMin = vector3(-39.99570000, -8.00155600, -2.56818800),
			bbMax = vector3(40.00439000, 7.99858000, 1.44575100),
			bsCentre = vector3(0.00434110, -0.00148870, -0.56121830),
			bsRadius = 40.84160000,
			name = 'my_asset',
			textureDictionary = 'my_asset',
			physicsDictionary = 'my_asset',
			assetName = 'my_asset',
			assetType = 'ASSET_TYPE_DRAWABLE',
			lodDist = 450.45,
			specialAttribute = 0
		}
	}
end)
```

[View docs](https://cfxnatives.dev/natives/REGISTER_ARCHETYPES)

---
## REGISTER_COMMAND
**Hash:** `0x5FA79B0F` | **Returns:** `void`
**Alt name:** `RegisterCommand`

Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.

Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).

The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).

**Example result**:

![](https://i.imgur.com/TaCnG09.png)

**Parameters:**
| Name | Type |
|------|------|
| `commandName` | `char*` |
| `handler` | `func` |
| `restricted` | `BOOL` |

**Example:**
```lua
-- (server side script)
-- Registers a command named 'ping'.
RegisterCommand("ping", function(source, args, rawCommand)
    -- If the source is > 0, then that means it must be a player.
    if (source > 0) then
    
        -- result (using the default GTA:O chat theme) https://i.imgur.com/TaCnG09.png
        TriggerClientEvent("chat:addMessage", -1, {
            args = {
                GetPlayerName(source),
                "PONG!"
            },
            color = { 5, 255, 255 }
        })
    
    -- If it's not a player, then it must be RCON, a resource, or the server console directly.
    else
        print("This command was executed by the server console, RCON client, or a resource.")
    end
end, false --[[this command is not restricted, everyone can use this.]])
```

[View docs](https://cfxnatives.dev/natives/REGISTER_COMMAND)

---
## REGISTER_CONSOLE_LISTENER
**Hash:** `0x281B5448` | **Returns:** `void`
**Alt name:** `RegisterConsoleListener`

Registers a listener for console output messages.

**Parameters:**
| Name | Type |
|------|------|
| `listener` | `func` |

[View docs](https://cfxnatives.dev/natives/REGISTER_CONSOLE_LISTENER)

---
## REGISTER_FONT_FILE
**Hash:** `0x1B3A363` | **Returns:** `void`
**Alt name:** `RegisterFontFile`

Registers a specified .gfx file as GFx font library.
The .gfx file has to be registered with the streamer already.

**Parameters:**
| Name | Type |
|------|------|
| `fileName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REGISTER_FONT_FILE)

---
## REGISTER_FONT_ID
**Hash:** `0xACF6D8EE` | **Returns:** `int`
**Alt name:** `RegisterFontId`

Registers a specified font name for use with text draw commands.

**Parameters:**
| Name | Type |
|------|------|
| `fontName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REGISTER_FONT_ID)

---
## REGISTER_KEY_MAPPING
**Hash:** `0xD7664FD1` | **Returns:** `void`
**Alt name:** `RegisterKeyMapping`

Registers a key mapping for the current resource.

See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.

Below you can find some examples on how to create these keybindings as well as the alternate keybinding syntax, which is preceded by `~!` to indicate that it's an alternate key.

**Parameters:**
| Name | Type |
|------|------|
| `commandString` | `char*` |
| `description` | `char*` |
| `defaultMapper` | `char*` |
| `defaultParameter` | `char*` |

**Example:**
```lua
local handsUp = false
CreateThread(function()
    while true do
        Wait(0)
        if handsUp then
            TaskHandsUp(PlayerPedId(), 250, PlayerPedId(), -1, true)
        end
    end
end)
RegisterCommand('+handsup', function()
    handsUp = true
end, false)
RegisterCommand('-handsup', function()
    handsUp = false
end, false)

RegisterKeyMapping('+handsup', 'Hands Up', 'keyboard', 'i')

-- Alternate keybinding syntax
RegisterKeyMapping('~!+handsup', 'Hands Up - Alternate Key', 'keyboard', 'o')
```

[View docs](https://cfxnatives.dev/natives/REGISTER_KEY_MAPPING)

---
## REGISTER_NUI_CALLBACK
**Hash:** `0xC59B980C` | **Returns:** `void`
**Alt name:** `RegisterNuiCallback`

**Parameters:**
| Name | Type |
|------|------|
| `callbackType` | `char*` |
| `callback` | `func` |

[View docs](https://cfxnatives.dev/natives/REGISTER_NUI_CALLBACK)

---
## REGISTER_NUI_CALLBACK_TYPE
**Hash:** `0xCD03CDA9` | **Returns:** `void`
**Alt name:** `RegisterNuiCallbackType`

**Parameters:**
| Name | Type |
|------|------|
| `callbackType` | `char*` |

[View docs](https://cfxnatives.dev/natives/REGISTER_NUI_CALLBACK_TYPE)

---
## REGISTER_RAW_KEYMAP
**Hash:** `0x49C1F6DC` | **Returns:** `void`
**Alt name:** `RegisterRawKeymap`

Registers a keymap that will be triggered whenever `rawKeyIndex` is pressed or released.

`onKeyUp` and `onKeyDown` will not provide any arguments.

```ts
function onStateChange();
```

**Parameters:**
| Name | Type |
|------|------|
| `keymapName` | `char*` |
| `onKeyDown` | `func` |
| `onKeyUp` | `func` |
| `rawKeyIndex` | `int` |
| `canBeDisabled` | `BOOL` |

**Example:**
```lua
function on_key_up()
	print("key no longer pressed")
end

function on_key_down()
	print("key is pressed")
end

local KEY_E = 69
local canBeDisabled = false


RegisterRawKeymap("our_keymap", on_key_up, on_key_down, KEY_E, canBeDisabled)
```

[View docs](https://cfxnatives.dev/natives/REGISTER_RAW_KEYMAP)

---
## REGISTER_RAW_NUI_CALLBACK
**Hash:** `0xA8AE9C2F` | **Returns:** `void`
**Alt name:** `RegisterRawNuiCallback`

**Parameters:**
| Name | Type |
|------|------|
| `callbackType` | `char*` |
| `callback` | `func` |

[View docs](https://cfxnatives.dev/natives/REGISTER_RAW_NUI_CALLBACK)

---
## REGISTER_RESOURCE_AS_EVENT_HANDLER
**Hash:** `0xD233A168` | **Returns:** `void`
**Alt name:** `RegisterResourceAsEventHandler`

An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.

**Parameters:**
| Name | Type |
|------|------|
| `eventName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REGISTER_RESOURCE_AS_EVENT_HANDLER)

---
## REGISTER_RESOURCE_ASSET
**Hash:** `0x9862B266` | **Returns:** `char*`
**Alt name:** `RegisterResourceAsset`

**Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.

Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |
| `fileName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REGISTER_RESOURCE_ASSET)

---
## REGISTER_RESOURCE_BUILD_TASK_FACTORY
**Hash:** `0x285B43CA` | **Returns:** `void`
**Alt name:** `RegisterResourceBuildTaskFactory`

Registers a build task factory for resources.
The function should return an object (msgpack map) with the following fields:

```
{
// returns whether the specific resource should be built
shouldBuild = func(resourceName: string): bool,

// asynchronously start building the specific resource.
// call cb when completed
build = func(resourceName: string, cb: func(success: bool, status: string): void): void
}
```

**Parameters:**
| Name | Type |
|------|------|
| `factoryId` | `char*` |
| `factoryFn` | `func` |

[View docs](https://cfxnatives.dev/natives/REGISTER_RESOURCE_BUILD_TASK_FACTORY)

---
## REGISTER_ROPE_DATA
**Hash:** `0xF213AE8D` | **Returns:** `int`
**Alt name:** `RegisterRopeData`

Registers a custom rope data with the game. For guidance on what these values should be use common:/data/ropedata.xml as a reference.
Returns a rope type which can be passed into [ADD_ROPE](#\_0xE832D760399EB220) to use a custom rope design.
Once a rope data is registered it can be used indefinitely and you should take caution not too register too many as to exceed the games limit.

**Parameters:**
| Name | Type |
|------|------|
| `numSections` | `int` |
| `radius` | `float` |
| `diffuseTextureName` | `char*` |
| `normalMapName` | `char*` |
| `distanceMappingScale` | `float` |
| `uvScaleX` | `float` |
| `uvScaleY` | `float` |
| `specularFresnel` | `float` |
| `specularFalloff` | `float` |
| `specularIntensity` | `float` |
| `bumpiness` | `float` |
| `color` | `int` |

**Example:**
```lua
-- Create a thick steel cable rope above the players head
local ropeType = RegisterRopeData(6, 0.15, "steel_cable", "steel_cable_n", 1.0, 1.0, 8.775, 0.97, 30.0, 0.25, 1.775, 0x00FFFF00)
if ropeType ~= -1 then
    local coords = GetEntityCoords(PlayerPedId()) + vector3(0.0, 0.0, 5.0)
	AddRope(coords.x, coords.y, coords.z, 0.0, 0.0, 0.0, 25.0, ropeType, 10.0, 0.0, 1.0, false, false, false, 1.0, false, 0)
    RopeLoadTextures()
end
```

[View docs](https://cfxnatives.dev/natives/REGISTER_ROPE_DATA)

---
## REGISTER_STREAMING_FILE_FROM_CACHE
**Hash:** `0xCEAD2D4B` | **Returns:** `void`
**Alt name:** `RegisterStreamingFileFromCache`

**Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.

Registers a dynamic streaming asset from the server with the GTA streaming module system.

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |
| `fileName` | `char*` |
| `cacheString` | `char*` |

[View docs](https://cfxnatives.dev/natives/REGISTER_STREAMING_FILE_FROM_CACHE)

---
## REGISTER_STREAMING_FILE_FROM_KVS
**Hash:** `0x1493DCC1` | **Returns:** `void`
**Alt name:** `RegisterStreamingFileFromKvs`

**Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.

Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.

**Parameters:**
| Name | Type |
|------|------|
| `kvsKey` | `char*` |

[View docs](https://cfxnatives.dev/natives/REGISTER_STREAMING_FILE_FROM_KVS)

---
## REGISTER_STREAMING_FILE_FROM_URL
**Hash:** `0xF44BFB95` | **Returns:** `void`
**Alt name:** `RegisterStreamingFileFromUrl`

**Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.

Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.

Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.

**Parameters:**
| Name | Type |
|------|------|
| `registerAs` | `char*` |
| `url` | `char*` |

[View docs](https://cfxnatives.dev/natives/REGISTER_STREAMING_FILE_FROM_URL)

---
## REGISTER_TRACK_JUNCTION
**Hash:** `0x35F743B5` | **Returns:** `int`
**Alt name:** `RegisterTrackJunction`

Registers a track junction that when enabled will cause a train on the defined trackIndex, node and direction to change its current track index and begin traveling on the new node

**Parameters:**
| Name | Type |
|------|------|
| `trackIndex` | `int` |
| `trackNode` | `int` |
| `newIndex` | `int` |
| `newNode` | `int` |
| `direction` | `bool` |

[View docs](https://cfxnatives.dev/natives/REGISTER_TRACK_JUNCTION)

---
## REMAP_RAW_KEYMAP
**Hash:** `0x6E38C1B9` | **Returns:** `void`
**Alt name:** `RemapRawKeymap`

Remaps the keymap bound to `keymapName` to `newRawKeyIndex`

Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)

**Parameters:**
| Name | Type |
|------|------|
| `keymapName` | `char*` |
| `newRawKeyIndex` | `int` |

**Example:**
```lua
function on_key_up()
	print("key no longer pressed")
end

function on_key_down()
	print("key is pressed")
end

local KEY_SPACE = 32
local canBeDisabled = false

local KEY_E = 69

RegisterRawKeymap("our_keymap", on_key_up, on_key_down, KEY_SPACE, canBeDisabled)

RemapRawKeymap("our_keymap", KEY_E)
```

[View docs](https://cfxnatives.dev/natives/REMAP_RAW_KEYMAP)

---
## REMOVE_ALL_PED_WEAPONS
**Hash:** `0xA44CE817` | **Returns:** `void`
**Alt name:** `RemoveAllPedWeapons`

Parameter `p1` does not seem to be used or referenced in game binaries.\
**Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.

**This is the server-side RPC native equivalent of the client native [REMOVE_ALL_PED_WEAPONS](?\_0xF25DF915FA38C5F3).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~REMOVE_ALL_PED_WEAPONS)

---
## REMOVE_BLIP
**Hash:** `0xD8C3C1CD` | **Returns:** `void`
**Alt name:** `RemoveBlip`

Removes the blip from your map.
**Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0xB98236CAAECEF897).

**This is the server-side RPC native equivalent of the client native [REMOVE_BLIP](?\_0x86A652570E5F25DD).**

**Parameters:**
| Name | Type |
|------|------|
| `blip` | `Blip*` |

[View docs](https://cfxnatives.dev/natives/CFX~REMOVE_BLIP)

---
## REMOVE_CONVAR_CHANGE_LISTENER
**Hash:** `0xEAC49841` | **Returns:** `void`
**Alt name:** `RemoveConvarChangeListener`

**Parameters:**
| Name | Type |
|------|------|
| `cookie` | `int` |

[View docs](https://cfxnatives.dev/natives/REMOVE_CONVAR_CHANGE_LISTENER)

---
## REMOVE_DRY_VOLUME
**Hash:** `0x7BCAA6E7` | **Returns:** `void`
**Alt name:** `RemoveDryVolume`

Removes a dry volume from the game session.
See CREATE_DRY_VOLUME for more info

**Parameters:**
| Name | Type |
|------|------|
| `handle` | `int` |

[View docs](https://cfxnatives.dev/natives/REMOVE_DRY_VOLUME)

---
## REMOVE_HEALTH_CONFIG
**Hash:** `0xE0ED5FB` | **Returns:** `void`
**Alt name:** `RemoveHealthConfig`

Removes health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REMOVE_HEALTH_CONFIG)

---
## REMOVE_REPLACE_TEXTURE
**Hash:** `0xA896B20A` | **Returns:** `void`
**Alt name:** `RemoveReplaceTexture`

Experimental natives, please do not use in a live environment.

**Parameters:**
| Name | Type |
|------|------|
| `origTxd` | `char*` |
| `origTxn` | `char*` |

[View docs](https://cfxnatives.dev/natives/REMOVE_REPLACE_TEXTURE)

---
## REMOVE_STATE_BAG_CHANGE_HANDLER
**Hash:** `0xD36BE661` | **Returns:** `void`
**Alt name:** `RemoveStateBagChangeHandler`

**Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.

Removes a handler for changes to a state bag.

**Parameters:**
| Name | Type |
|------|------|
| `cookie` | `int` |

[View docs](https://cfxnatives.dev/natives/REMOVE_STATE_BAG_CHANGE_HANDLER)

---
## REMOVE_TEXTURE
**Hash:** `0x1582C7F2` | **Returns:** `void`
**Alt name:** `RemoveTexture`

Removes the specified texture and remove it from the ped.
Unlike `0x6BEFAA907B076859` which only marks the texture as "can be reused" (and keeps it until will be reused), this function deletes it right away. Can fix some sync issues. `DOES_TEXTURE_EXIST` can be use to wait until fully unloaded by game

```lua
RemoveTexture(textureId)
while DoesTextureExist(textureId) do 
    Wait(0)
end
```

**Parameters:**
| Name | Type |
|------|------|
| `textureId` | `int` |

[View docs](https://cfxnatives.dev/natives/REMOVE_TEXTURE)

---
## REMOVE_TIMECYCLE_MODIFIER
**Hash:** `0x36DF8612` | **Returns:** `void`
**Alt name:** `RemoveTimecycleModifier`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |

**Example:**
```lua
local modifierName = "my_awesome_timecycle"
RemoveTimecycleModifier(modifierName)
```

[View docs](https://cfxnatives.dev/natives/REMOVE_TIMECYCLE_MODIFIER)

---
## REMOVE_TIMECYCLE_MODIFIER_VAR
**Hash:** `0x5A5E0D05` | **Returns:** `void`
**Alt name:** `RemoveTimecycleModifierVar`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |
| `varName` | `char*` |

**Example:**
```lua
local modifierName = "superDARK"
local varName = "postfx_noise"

if DoesTimecycleModifierHasVar(modifierName, varName) then
  local success, value1, value2 = GetTimecycleModifierVar(modifierName, varName)

  if success then
    print(string.format("[%s] removed var %s with values: %f %f", modifierName, varName, value1, value2))
    RemoveTimecycleModifierVar(modifierName, varName)
  end
else
    SetTimecycleModifierVar(modifierName, varName, 1.0, 1.0)
    print(string.format("[%s] created var %s", modifierName, varName))
end
```

[View docs](https://cfxnatives.dev/natives/REMOVE_TIMECYCLE_MODIFIER_VAR)

---
## REMOVE_TRACK_JUNCTION
**Hash:** `0x4F3D2B2A` | **Returns:** `bool`
**Alt name:** `RemoveTrackJunction`

Removes the specified track junction.

**Parameters:**
| Name | Type |
|------|------|
| `junctionIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/REMOVE_TRACK_JUNCTION)

---
## REMOVE_WEAPON_COMPONENT_FROM_PED
**Hash:** `0x412AA00D` | **Returns:** `void`
**Alt name:** `RemoveWeaponComponentFromPed`

REMOVE_WEAPON_COMPONENT_FROM_PED

**This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_COMPONENT_FROM_PED](?\_0x1E8BE90C74FB4C09).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CFX~REMOVE_WEAPON_COMPONENT_FROM_PED)

---
## REMOVE_WEAPON_FROM_PED
**Hash:** `0x9C37F220` | **Returns:** `void`
**Alt name:** `RemoveWeaponFromPed`

```
This native removes a specified weapon from your selected ped.
Weapon Hashes: pastebin.com/0wwDZgkF
Example:
C#:
Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
C++:
WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);
The code above removes the knife from the player.
```

**This is the server-side RPC native equivalent of the client native [REMOVE_WEAPON_FROM_PED](?\_0x4899CB088EDF59B8).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CFX~REMOVE_WEAPON_FROM_PED)

---
## REQUEST_PLAYER_COMMERCE_SESSION
**Hash:** `0x96F93CCE` | **Returns:** `void`
**Alt name:** `RequestPlayerCommerceSession`

Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
will open the browser prompting further purchase details.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `skuId` | `int` |

[View docs](https://cfxnatives.dev/natives/REQUEST_PLAYER_COMMERCE_SESSION)

---
## REQUEST_RESOURCE_FILE_SET
**Hash:** `0xE7490533` | **Returns:** `BOOL`
**Alt name:** `RequestResourceFileSet`

Requests a resource file set with the specified name to be downloaded and mounted on top of the current resource.

Resource file sets are specified in `fxmanifest.lua` with the following syntax:

```lua
file_set 'addon_ui' {
    'ui/addon/index.html',
    'ui/addon/**.js',
}
```

This command will trigger a script error if the request failed.

**Parameters:**
| Name | Type |
|------|------|
| `setName` | `char*` |

**Example:**
```lua
-- fxmanifest.lua
file_set 'dummies' {
    'dummy/**.txt',
    'potato.txt',
}

-- main script
local function PrintTest()
    local tests = { 'potato.txt', 'dummy/1.txt', 'dummy/b/2.txt' }

    for _, v in ipairs(tests) do
        local data = LoadResourceFile(GetCurrentResourceName(), v)
        print(v, data)
    end
end

RegisterCommand('fileset', function()
    PrintTest()

    while not RequestResourceFileSet('dummies') do
        Wait(100)
    end

    PrintTest()
end)
```

[View docs](https://cfxnatives.dev/natives/REQUEST_RESOURCE_FILE_SET)

---
## RESET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE
**Hash:** `0x8EB6EC38` | **Returns:** `void`
**Alt name:** `ResetEntityDrawOutlineRenderTechnique`

This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#\_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.

[View docs](https://cfxnatives.dev/natives/RESET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE)

---
## RESET_FLY_THROUGH_WINDSCREEN_PARAMS
**Hash:** `0x6D712937` | **Returns:** `void`
**Alt name:** `ResetFlyThroughWindscreenParams`

Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.

[View docs](https://cfxnatives.dev/natives/RESET_FLY_THROUGH_WINDSCREEN_PARAMS)

---
## RESET_MAP_ZOOM_DATA_LEVEL
**Hash:** `0x11A5B7ED` | **Returns:** `void`
**Alt name:** `ResetMapZoomDataLevel`

Resets values from the zoom level data by index to defaults from mapzoomdata.meta.

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/RESET_MAP_ZOOM_DATA_LEVEL)

---
## RESET_MAPDATA_ENTITY_MATRIX
**Hash:** `0x8143FA4F` | **Returns:** `BOOL`
**Alt name:** `ResetMapdataEntityMatrix`

Resets mapdata entity transform matrix to its original state.
This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `mapDataHash` | `int` |
| `entityInternalIdx` | `int` |

[View docs](https://cfxnatives.dev/natives/RESET_MAPDATA_ENTITY_MATRIX)

---
## RESET_PED_MODEL_PERSONALITY
**Hash:** `0x79A12861` | **Returns:** `void`
**Alt name:** `ResetPedModelPersonality`

Restores an overridden ped model personality type to the default value.

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/RESET_PED_MODEL_PERSONALITY)

---
## RESET_VEHICLE_PEDS_CAN_STAND_ON_TOP_FLAG
**Hash:** `0xDF62CFE2` | **Returns:** `void`
**Alt name:** `ResetVehiclePedsCanStandOnTopFlag`

Resets whether or not peds can stand on top of the specified vehicle.

Note this flag is not replicated automatically, you will have to manually do so.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/RESET_VEHICLE_PEDS_CAN_STAND_ON_TOP_FLAG)

---
## RESET_WATER
**Hash:** `0x1DA4791` | **Returns:** `void`
**Alt name:** `ResetWater`

Resets the water to the games default water.xml.

**Example:**
```lua
ResetWater()
```

[View docs](https://cfxnatives.dev/natives/RESET_WATER)

---
## SAVE_RESOURCE_FILE
**Hash:** `0xA09E7E7B` | **Returns:** `BOOL`
**Alt name:** `SaveResourceFile`

Writes the specified data to a file in the specified resource.
Using a length of `-1` will automatically detect the length assuming the data is a C string.

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |
| `fileName` | `char*` |
| `data` | `char*` |
| `dataLength` | `int` |

[View docs](https://cfxnatives.dev/natives/SAVE_RESOURCE_FILE)

---
## SCAN_RESOURCE_ROOT
**Hash:** `0x636F097F` | **Returns:** `void`
**Alt name:** `ScanResourceRoot`

Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
not available for user resources.

**Parameters:**
| Name | Type |
|------|------|
| `rootPath` | `char*` |
| `callback` | `func` |

[View docs](https://cfxnatives.dev/natives/SCAN_RESOURCE_ROOT)

---
## SCHEDULE_RESOURCE_TICK
**Hash:** `0xB88A73AD` | **Returns:** `void`
**Alt name:** `ScheduleResourceTick`

Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SCHEDULE_RESOURCE_TICK)

---
## SELECT_ENTITY_AT_CURSOR
**Hash:** `0x3DD8130F` | **Returns:** `Entity`
**Alt name:** `SelectEntityAtCursor`

Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `hitFlags` | `int` |
| `precise` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SELECT_ENTITY_AT_CURSOR)

---
## SELECT_ENTITY_AT_POS
**Hash:** `0xAFE8D405` | **Returns:** `Entity`
**Alt name:** `SelectEntityAtPos`

Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `fracX` | `float` |
| `fracY` | `float` |
| `hitFlags` | `int` |
| `precise` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SELECT_ENTITY_AT_POS)

---
## SEND_DUI_MESSAGE
**Hash:** `0xCD380DA9` | **Returns:** `void`
**Alt name:** `SendDuiMessage`

Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |
| `jsonString` | `char*` |

[View docs](https://cfxnatives.dev/natives/SEND_DUI_MESSAGE)

---
## SEND_DUI_MOUSE_DOWN
**Hash:** `0x5D01F191` | **Returns:** `void`
**Alt name:** `SendDuiMouseDown`

Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |
| `button` | `char*` |

[View docs](https://cfxnatives.dev/natives/SEND_DUI_MOUSE_DOWN)

---
## SEND_DUI_MOUSE_MOVE
**Hash:** `0xD9D7A0AA` | **Returns:** `void`
**Alt name:** `SendDuiMouseMove`

Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |
| `x` | `int` |
| `y` | `int` |

[View docs](https://cfxnatives.dev/natives/SEND_DUI_MOUSE_MOVE)

---
## SEND_DUI_MOUSE_UP
**Hash:** `0x1D735B93` | **Returns:** `void`
**Alt name:** `SendDuiMouseUp`

Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |
| `button` | `char*` |

[View docs](https://cfxnatives.dev/natives/SEND_DUI_MOUSE_UP)

---
## SEND_DUI_MOUSE_WHEEL
**Hash:** `0x2D62133A` | **Returns:** `void`
**Alt name:** `SendDuiMouseWheel`

Injects a 'mouse wheel' event for a DUI object.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |
| `deltaY` | `int` |
| `deltaX` | `int` |

[View docs](https://cfxnatives.dev/natives/SEND_DUI_MOUSE_WHEEL)

---
## SEND_LOADING_SCREEN_MESSAGE
**Hash:** `0x8BBE6CC0` | **Returns:** `BOOL`
**Alt name:** `SendLoadingScreenMessage`

Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.

**Parameters:**
| Name | Type |
|------|------|
| `jsonString` | `char*` |

[View docs](https://cfxnatives.dev/natives/SEND_LOADING_SCREEN_MESSAGE)

---
## SEND_NUI_MESSAGE
**Hash:** `0x78608ACB` | **Returns:** `BOOL`
**Alt name:** `SendNuiMessage`

**Parameters:**
| Name | Type |
|------|------|
| `jsonString` | `char*` |

[View docs](https://cfxnatives.dev/natives/SEND_NUI_MESSAGE)

---
## SET_AIM_COOLDOWN
**Hash:** `0xA42A3DBF` | **Returns:** `void`
**Alt name:** `SetAimCooldown`

Adds a cooldown between instances of moving and then aiming.
Can be optionally used to hinder 'speedboosting'
To turn off, set value to 0

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_AIM_COOLDOWN)

---
## SET_AUDIO_SUBMIX_EFFECT_PARAM_FLOAT
**Hash:** `0x9A209B3C` | **Returns:** `void`
**Alt name:** `SetAudioSubmixEffectParamFloat`

Sets a floating-point parameter for a submix effect.

**Parameters:**
| Name | Type |
|------|------|
| `submixId` | `int` |
| `effectSlot` | `int` |
| `paramIndex` | `int` |
| `paramValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_AUDIO_SUBMIX_EFFECT_PARAM_FLOAT)

---
## SET_AUDIO_SUBMIX_EFFECT_PARAM_INT
**Hash:** `0x77FAE2B8` | **Returns:** `void`
**Alt name:** `SetAudioSubmixEffectParamInt`

Sets an integer parameter for a submix effect.

**Parameters:**
| Name | Type |
|------|------|
| `submixId` | `int` |
| `effectSlot` | `int` |
| `paramIndex` | `int` |
| `paramValue` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_AUDIO_SUBMIX_EFFECT_PARAM_INT)

---
## SET_AUDIO_SUBMIX_EFFECT_RADIO_FX
**Hash:** `0xAAA94D53` | **Returns:** `void`
**Alt name:** `SetAudioSubmixEffectRadioFx`

Assigns a RadioFX effect to a submix effect slot.

The parameter values for this effect are as follows (backticks are used to represent hashes):

| Index | Type | Description |
|-|-|-|
| \`enabled\` | int | Enables or disables RadioFX on this DSP. |
| \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. |
| \`freq_low\` | float |  |
| \`freq_hi\` | float |  |
| \`fudge\` | float |  |
| \`rm_mod_freq\` | float |  |
| \`rm_mix\` | float |  |
| \`o_freq_lo\` | float |  |
| \`o_freq_hi\` | float |  |

**Parameters:**
| Name | Type |
|------|------|
| `submixId` | `int` |
| `effectSlot` | `int` |

**Example:**
```lua
-- we want to change the master output
local submix = 0

-- add a RadioFX effect to slot 0
SetAudioSubmixEffectRadioFx(submix, 0)

-- set the default values
SetAudioSubmixEffectParamInt(submix, 0, `default`, 1)
```

[View docs](https://cfxnatives.dev/natives/SET_AUDIO_SUBMIX_EFFECT_RADIO_FX)

---
## SET_AUDIO_SUBMIX_OUTPUT_VOLUMES
**Hash:** `0x825DC0D1` | **Returns:** `void`
**Alt name:** `SetAudioSubmixOutputVolumes`

Sets the volumes for the sound channels in a submix effect.
Values can be between 0.0 and 1.0.
Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.

**Parameters:**
| Name | Type |
|------|------|
| `submixId` | `int` |
| `outputSlot` | `int` |
| `frontLeftVolume` | `float` |
| `frontRightVolume` | `float` |
| `rearLeftVolume` | `float` |
| `rearRightVolume` | `float` |
| `channel5Volume` | `float` |
| `channel6Volume` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_AUDIO_SUBMIX_OUTPUT_VOLUMES)

---
## SET_BACKFACECULLING
**Hash:** `0xC44C2F44` | **Returns:** `void`
**Alt name:** `SetBackfaceculling`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_BACKFACECULLING)

---
## SET_BLIP_SPRITE
**Hash:** `0x8DBBB0B9` | **Returns:** `void`
**Alt name:** `SetBlipSprite`

Sets the displayed sprite for a specific blip.
There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.

**This is the server-side RPC native equivalent of the client native [SET_BLIP_SPRITE](?\_0xDF735600A4696DAF).**

**Parameters:**
| Name | Type |
|------|------|
| `blip` | `Blip` |
| `spriteId` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_BLIP_SPRITE)

---
## SET_CALMING_QUAD_BOUNDS
**Hash:** `0xC5945BD9` | **Returns:** `BOOL`
**Alt name:** `SetCalmingQuadBounds`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `minX` | `int` |
| `minY` | `int` |
| `maxX` | `int` |
| `maxY` | `int` |

**Example:**
```lua
local success = SetCalmingQuadBounds(1, -500, -500, 500, 500)
```

[View docs](https://cfxnatives.dev/natives/SET_CALMING_QUAD_BOUNDS)

---
## SET_CALMING_QUAD_DAMPENING
**Hash:** `0x67977501` | **Returns:** `BOOL`
**Alt name:** `SetCalmingQuadDampening`

**Parameters:**
| Name | Type |
|------|------|
| `calmingQuad` | `int` |
| `dampening` | `float` |

**Example:**
```lua
local success = SetCalmingQuadDampening(0, 1.0)
```

[View docs](https://cfxnatives.dev/natives/SET_CALMING_QUAD_DAMPENING)

---
## SET_CLIENT_CONFIG_BOOL
**Hash:** `0xD174EF7E` | **Returns:** `void`
**Alt name:** `SetClientConfigBool`

```cpp
enum ClientConfigFlag
{
    WeaponsNoAutoReload = 0,
	UIVisibleWhenDead = 1,
	DisableDeathAudioScene = 2,
	DisableRemoteAttachments = 3
}
```

Sets the value of a client configuration flag.
This native allows enabling or disabling specific one-time client-side features.

**Parameters:**
| Name | Type |
|------|------|
| `flagIndex` | `int` |
| `enabled` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_CLIENT_CONFIG_BOOL)

---
## SET_CONVAR
**Hash:** `0x341B16D2` | **Returns:** `void`
**Alt name:** `SetConvar`

**Parameters:**
| Name | Type |
|------|------|
| `varName` | `char*` |
| `value` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_CONVAR)

---
## SET_CONVAR_REPLICATED
**Hash:** `0xF292858C` | **Returns:** `void`
**Alt name:** `SetConvarReplicated`

Used to replicate a server variable onto clients.

**Parameters:**
| Name | Type |
|------|------|
| `varName` | `char*` |
| `value` | `char*` |

**Example:**
```lua
SetConvarReplicated('voice_useNativeAudio', 'true')
```

[View docs](https://cfxnatives.dev/natives/SET_CONVAR_REPLICATED)

---
## SET_CONVAR_SERVER_INFO
**Hash:** `0x9338D547` | **Returns:** `void`
**Alt name:** `SetConvarServerInfo`

**Parameters:**
| Name | Type |
|------|------|
| `varName` | `char*` |
| `value` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_CONVAR_SERVER_INFO)

---
## SET_CURRENT_PED_WEAPON
**Hash:** `0xB8278882` | **Returns:** `void`
**Alt name:** `SetCurrentPedWeapon`

SET_CURRENT_PED_WEAPON

**This is the server-side RPC native equivalent of the client native [SET_CURRENT_PED_WEAPON](?\_0xADF692B254977C0C).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `bForceInHand` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_CURRENT_PED_WEAPON)

---
## SET_CURSOR_LOCATION
**Hash:** `0x8A7A8DAC` | **Returns:** `BOOL`
**Alt name:** `SetCursorLocation`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_CURSOR_LOCATION)

---
## SET_DEFAULT_VEHICLE_NUMBER_PLATE_TEXT_PATTERN
**Hash:** `0x79780FD2` | **Returns:** `void`
**Alt name:** `SetDefaultVehicleNumberPlateTextPattern`

Sets the default number plate text pattern for vehicles seen on the local client with the specified plate index as their *default* index (`plateProbabilities` from carvariations).

For consistency, this should be used with the same value on all clients, since vehicles *without* custom text will use a seeded random number generator with this pattern to determine the default plate text.

The default value is `11AAA111`, and using this or a NULL string will revert to the default game RNG.

### Pattern string format

*   `1` will lead to a random number from 0-9.
*   `A` will lead to a random letter from A-Z.
*   `.` will lead to a random letter *or* number, with 50% probability of being either.
*   `^1` will lead to a literal `1` being emitted.
*   `^A` will lead to a literal `A` being emitted.
*   Any other character will lead to said character being emitted.
*   A string shorter than 8 characters will be padded on the right.

**Parameters:**
| Name | Type |
|------|------|
| `plateIndex` | `int` |
| `pattern` | `char*` |

**Example:**
```lua
SetDefaultVehicleNumberPlateTextPattern(-1, ' AAA111 ')
SetDefaultVehicleNumberPlateTextPattern(4 , ' AAAAAA ')

-- fixed characters: plate will be FAYUM69C for example
SetDefaultVehicleNumberPlateTextPattern(-1, 'F^AYUM11A')
```

[View docs](https://cfxnatives.dev/natives/SET_DEFAULT_VEHICLE_NUMBER_PLATE_TEXT_PATTERN)

---
## SET_DISCORD_APP_ID
**Hash:** `0x6A02254D` | **Returns:** `void`
**Alt name:** `SetDiscordAppId`

This native sets the app id for the discord rich presence implementation.

**Parameters:**
| Name | Type |
|------|------|
| `appId` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_DISCORD_APP_ID)

---
## SET_DISCORD_RICH_PRESENCE_ACTION
**Hash:** `0xCBBC3FAC` | **Returns:** `void`
**Alt name:** `SetDiscordRichPresenceAction`

Sets a clickable button to be displayed in a player's Discord rich presence.

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |
| `label` | `char*` |
| `url` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_DISCORD_RICH_PRESENCE_ACTION)

---
## SET_DISCORD_RICH_PRESENCE_ASSET
**Hash:** `0x53DFD530` | **Returns:** `void`
**Alt name:** `SetDiscordRichPresenceAsset`

This native sets the image asset for the discord rich presence implementation.

**Parameters:**
| Name | Type |
|------|------|
| `assetName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_DISCORD_RICH_PRESENCE_ASSET)

---
## SET_DISCORD_RICH_PRESENCE_ASSET_SMALL
**Hash:** `0xF61D04C4` | **Returns:** `void`
**Alt name:** `SetDiscordRichPresenceAssetSmall`

This native sets the small image asset for the discord rich presence implementation.

**Parameters:**
| Name | Type |
|------|------|
| `assetName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_DISCORD_RICH_PRESENCE_ASSET_SMALL)

---
## SET_DISCORD_RICH_PRESENCE_ASSET_SMALL_TEXT
**Hash:** `0x35E62B6A` | **Returns:** `void`
**Alt name:** `SetDiscordRichPresenceAssetSmallText`

This native sets the hover text of the small image asset for the discord rich presence implementation.

**Parameters:**
| Name | Type |
|------|------|
| `text` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_DISCORD_RICH_PRESENCE_ASSET_SMALL_TEXT)

---
## SET_DISCORD_RICH_PRESENCE_ASSET_TEXT
**Hash:** `0xB029D2FA` | **Returns:** `void`
**Alt name:** `SetDiscordRichPresenceAssetText`

This native sets the hover text of the image asset for the discord rich presence implementation.

**Parameters:**
| Name | Type |
|------|------|
| `text` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_DISCORD_RICH_PRESENCE_ASSET_TEXT)

---
## SET_DRAW_ORIGIN
**Hash:** `0xE10198D5` | **Returns:** `void`
**Alt name:** `SetDrawOrigin`

Sets the on-screen drawing origin for draw-functions in world coordinates.

The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xDD76B263) and is limited to 32 different origins each frame.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `is2d` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_DRAW_ORIGIN)

---
## SET_DUI_URL
**Hash:** `0xF761D9F3` | **Returns:** `void`
**Alt name:** `SetDuiUrl`

Navigates the specified DUI browser to a different URL.

**Parameters:**
| Name | Type |
|------|------|
| `duiObject` | `long` |
| `url` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_DUI_URL)

---
## SET_EMITTER_PROBE_LENGTH
**Hash:** `0x8AA1F3C2` | **Returns:** `void`
**Alt name:** `SetEmitterProbeLength`

Allows StaticEmitter's without a linked entity to make use of environment features like occlusion and reverb even if they are located higher than 20.0 units above any static collision inside interiors.

This native allows you to extend the probe range up to 150.0 units.

**Parameters:**
| Name | Type |
|------|------|
| `probeLength` | `float` |

**Example:**
```lua
RegisterCommand("setEmitterProbeLength", function(src, args, raw)
    local probeLength = (tonumber(args[1]) + 0.0)

    print("Extending emitter probes to: ", probeLength)
    SetEmitterProbeLength(probeLength)
end)

RegisterCommand("resetEmitterProbeLength", function()
    print("Resetting emitter probes to default settings")
    SetEmitterProbeLength(20.0)
end)
```

[View docs](https://cfxnatives.dev/natives/SET_EMITTER_PROBE_LENGTH)

---
## SET_ENTITY_COORDS
**Hash:** `0xDF70B41B` | **Returns:** `void`
**Alt name:** `SetEntityCoords`

Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.

**This is the server-side RPC native equivalent of the client native [SET_ENTITY_COORDS](?\_0x06843DA7060A026B).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `xPos` | `float` |
| `yPos` | `float` |
| `zPos` | `float` |
| `alive` | `BOOL` |
| `deadFlag` | `BOOL` |
| `ragdollFlag` | `BOOL` |
| `clearArea` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_ENTITY_COORDS)

---
## SET_ENTITY_DISTANCE_CULLING_RADIUS
**Hash:** `0xD3A183A3` | **Returns:** `void`
**Alt name:** `SetEntityDistanceCullingRadius`

It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
If you want to interact with an entity outside of your players' scopes set the radius to a huge number.

**WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_DISTANCE_CULLING_RADIUS)

---
## SET_ENTITY_DRAW_OUTLINE
**Hash:** `0x76180407` | **Returns:** `void`
**Alt name:** `SetEntityDrawOutline`

Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `enabled` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_DRAW_OUTLINE)

---
## SET_ENTITY_DRAW_OUTLINE_COLOR
**Hash:** `0xB41A56C2` | **Returns:** `void`
**Alt name:** `SetEntityDrawOutlineColor`

Sets color for entity outline. `255, 0, 255, 255` by default.

**Parameters:**
| Name | Type |
|------|------|
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_DRAW_OUTLINE_COLOR)

---
## SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE
**Hash:** `0x68DFF2DD` | **Returns:** `void`
**Alt name:** `SetEntityDrawOutlineRenderTechnique`

Sets the render technique for drawing an entity's outline. This function allows you to specify a technique group name to control how the entity's outline is rendered in the game.

List of known technique group's:

```
alt0
alt1
alt2
alt3
alt4
alt5
alt6
alt7
alt8
blit
cube
default
geometry
imposter
imposterdeferred
lightweight0
lightweight0CutOut
lightweight0CutOutTint
lightweight0WaterRefractionAlpha
lightweight4
lightweight4CutOut
lightweight4CutOutTint
lightweight4WaterRefractionAlpha
lightweight8
lightweight8CutOut
lightweight8CutOutTint
lightweight8WaterRefractionAlpha
lightweightHighQuality0
lightweightHighQuality0CutOut
lightweightHighQuality0WaterRefractionAlpha
lightweightHighQuality4
lightweightHighQuality4CutOut
lightweightHighQuality4WaterRefractionAlpha
lightweightHighQuality8
lightweightHighQuality8CutOut
lightweightHighQuality8WaterRefractionAlpha
lightweightNoCapsule4
lightweightNoCapsule8
multilight
tessellate
ui
unlit
waterreflection
waterreflectionalphaclip
waterreflectionalphacliptint
wdcascade
```

**Parameters:**
| Name | Type |
|------|------|
| `techniqueGroup` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE)

---
## SET_ENTITY_DRAW_OUTLINE_SHADER
**Hash:** `0x5261A01A` | **Returns:** `void`
**Alt name:** `SetEntityDrawOutlineShader`

Sets variant of shader that will be used to draw entity outline.

Variants are:

*   **0**: Default value, gauss shader.
*   **1**: 2px wide solid color outline.
*   **2**: Fullscreen solid color except for entity.

**Parameters:**
| Name | Type |
|------|------|
| `shader` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_DRAW_OUTLINE_SHADER)

---
## SET_ENTITY_HEADING
**Hash:** `0xE0FF064D` | **Returns:** `void`
**Alt name:** `SetEntityHeading`

Set the heading of an entity in degrees also known as "Yaw".

**This is the server-side RPC native equivalent of the client native [SET_ENTITY_HEADING](?\_0x8E2530AA8ADA980E).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `heading` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_ENTITY_HEADING)

---
## SET_ENTITY_IGNORE_REQUEST_CONTROL_FILTER
**Hash:** `0x9F7F8D36` | **Returns:** `void`
**Alt name:** `SetEntityIgnoreRequestControlFilter`

It allows to flag an entity to ignore the request control filter policy.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `ignore` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_IGNORE_REQUEST_CONTROL_FILTER)

---
## SET_ENTITY_MATRIX
**Hash:** `0xFB0639B` | **Returns:** `void`
**Alt name:** `SetEntityMatrix`

Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `forwardX` | `float` |
| `forwardY` | `float` |
| `forwardZ` | `float` |
| `rightX` | `float` |
| `rightY` | `float` |
| `rightZ` | `float` |
| `upX` | `float` |
| `upY` | `float` |
| `upZ` | `float` |
| `atX` | `float` |
| `atY` | `float` |
| `atZ` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_MATRIX)

---
## SET_ENTITY_ORPHAN_MODE
**Hash:** `0x489E9162` | **Returns:** `void`
**Alt name:** `SetEntityOrphanMode`

```cpp
enum EntityOrphanMode {
    // Default, this will delete the entity when it isn't relevant to any players
    // NOTE: this *doesn't* mean when they're no longer in scope
    DeleteWhenNotRelevant = 0,
    // The entity will be deleted whenever its original owner disconnects
    // NOTE: if this is set when the entities original owner has already left it will be
    // marked for deletion (similar to just calling DELETE_ENTITY)
    DeleteOnOwnerDisconnect = 1,
    // The entity will never be deleted by the server when it does relevancy checks
    // you should only use this on entities that need to be relatively persistent
    KeepEntity = 2
}
```

Sets what the server will do when the entity no longer has its original owner. By default the server will cleanup entities that it considers "no longer relevant".

When used on trains, this native will recursively call onto all attached carriages.

**NOTE**: When used with `KeepEntity` (2) this native only guarantees that the ***server*** will not delete the entity, client requests to delete the entity will still work perfectly fine.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `orphanMode` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_ORPHAN_MODE)

---
## SET_ENTITY_REMOTE_SYNCED_SCENES_ALLOWED
**Hash:** `0xD3FC9D88` | **Returns:** `void`
**Alt name:** `SetEntityRemoteSyncedScenesAllowed`

Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.

By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `allow` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_REMOTE_SYNCED_SCENES_ALLOWED)

---
## SET_ENTITY_ROTATION
**Hash:** `0xA345EFE` | **Returns:** `void`
**Alt name:** `SetEntityRotation`

Sets the rotation of a specified entity in the game world.

```
NativeDB Introduced: v323
```

**This is the server-side RPC native equivalent of the client native [SET_ENTITY_ROTATION](?\_0x8524A8B0171D5E07).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `pitch` | `float` |
| `roll` | `float` |
| `yaw` | `float` |
| `rotationOrder` | `int` |
| `bDeadCheck` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_ENTITY_ROTATION)

---
## SET_ENTITY_ROUTING_BUCKET
**Hash:** `0x635E5289` | **Returns:** `void`
**Alt name:** `SetEntityRoutingBucket`

Sets the routing bucket for the specified entity.

Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `bucket` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_ROUTING_BUCKET)

---
## SET_ENTITY_VELOCITY
**Hash:** `0xFF5A1988` | **Returns:** `void`
**Alt name:** `SetEntityVelocity`

```
Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
```

**This is the server-side RPC native equivalent of the client native [SET_ENTITY_VELOCITY](?\_0x1C99BB7B6E96D16F).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_ENTITY_VELOCITY)

---
## SET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER
**Hash:** `0xA9EC9A79` | **Returns:** `void`
**Alt name:** `SetFallDamageLandOnFootMultiplier`

A setter for [GET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER](#\_0x3C8A1C92).

**Parameters:**
| Name | Type |
|------|------|
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_FALL_DAMAGE_LAND_ON_FOOT_MULTIPLIER)

---
## SET_FALL_DAMAGE_MULTIPLIER
**Hash:** `0xB43B621B` | **Returns:** `void`
**Alt name:** `SetFallDamageMultiplier`

A setter for [GET_FALL_DAMAGE_MULTIPLIER](#\_0x2D6A0A83).

**Parameters:**
| Name | Type |
|------|------|
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_FALL_DAMAGE_MULTIPLIER)

---
## SET_FLASH_LIGHT_KEEP_ON_WHILE_MOVING
**Hash:** `0x7635B349` | **Returns:** `void`
**Alt name:** `SetFlashLightKeepOnWhileMoving`

Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_FLASH_LIGHT_KEEP_ON_WHILE_MOVING)

---
## SET_FLY_THROUGH_WINDSCREEN_PARAMS
**Hash:** `0x4D3118ED` | **Returns:** `BOOL`
**Alt name:** `SetFlyThroughWindscreenParams`

Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.

**Parameters:**
| Name | Type |
|------|------|
| `vehMinSpeed` | `float` |
| `unkMinSpeed` | `float` |
| `unkModifier` | `float` |
| `minDamage` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_FLY_THROUGH_WINDSCREEN_PARAMS)

---
## SET_FOG_VOLUME_RENDER_DISABLED
**Hash:** `0xFBC64DA3` | **Returns:** `void`
**Alt name:** `SetFogVolumeRenderDisabled`

This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_FOG_VOLUME_RENDER_DISABLED)

---
## SET_FUEL_CONSUMPTION_RATE_MULTIPLIER
**Hash:** `0x845F3E5C` | **Returns:** `void`
**Alt name:** `SetFuelConsumptionRateMultiplier`

Sets fuel consumption rate multiplier for all vehicles operated by a player. This is a way to slow down or speed up fuel consumption for all vehicles at a time. If 0 - it practically means that fuel will not be consumed. By default is set to 1.

When the multiplier is set to 1 a default 65 litre gas tank car with average fuel consumption can stay idle for ~16.67 hours or run with max RPM for ~2.5 hours.

To customize fuel consumption per vehicle / vehicle class use [`SET_HANDLING_FLOAT`](#\_0x90DD01C)/[`SET_VEHICLE_HANDLING_FLOAT`](#\_0x488C86D2) natives with `fieldName` equal to `fPetrolConsumptionRate`. By default it is set to 0.5 for all vehicles.

**Parameters:**
| Name | Type |
|------|------|
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_FUEL_CONSUMPTION_RATE_MULTIPLIER)

---
## SET_FUEL_CONSUMPTION_STATE
**Hash:** `0x81DAD03E` | **Returns:** `void`
**Alt name:** `SetFuelConsumptionState`

Turns on and off fuel consumption in all vehicles operated by a player. NPC operated vehicles will not consume fuel to avoid traffic disruptions.

The default Gta5 behaviour is fuel consumption turned off.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_FUEL_CONSUMPTION_STATE)

---
## SET_GAME_TYPE
**Hash:** `0xF90B7469` | **Returns:** `void`
**Alt name:** `SetGameType`

**Parameters:**
| Name | Type |
|------|------|
| `gametypeName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_GAME_TYPE)

---
## SET_GLOBAL_PASSENGER_MASS_MULTIPLIER
**Hash:** `0x1C47F6AC` | **Returns:** `void`
**Alt name:** `SetGlobalPassengerMassMultiplier`

**Parameters:**
| Name | Type |
|------|------|
| `massMul` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_GLOBAL_PASSENGER_MASS_MULTIPLIER)

---
## SET_HANDLING_FIELD
**Hash:** `0xFE8064E3` | **Returns:** `void`
**Alt name:** `SetHandlingField`

Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `char*` |
| `class_` | `char*` |
| `fieldName` | `char*` |
| `value` | `Any` |

[View docs](https://cfxnatives.dev/natives/SET_HANDLING_FIELD)

---
## SET_HANDLING_FLOAT
**Hash:** `0x90DD01C` | **Returns:** `void`
**Alt name:** `SetHandlingFloat`

Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `char*` |
| `class_` | `char*` |
| `fieldName` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HANDLING_FLOAT)

---
## SET_HANDLING_INT
**Hash:** `0x8AB3F46C` | **Returns:** `void`
**Alt name:** `SetHandlingInt`

Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `char*` |
| `class_` | `char*` |
| `fieldName` | `char*` |
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_HANDLING_INT)

---
## SET_HANDLING_VECTOR
**Hash:** `0x7F9D543` | **Returns:** `void`
**Alt name:** `SetHandlingVector`

Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `char*` |
| `class_` | `char*` |
| `fieldName` | `char*` |
| `value` | `Vector3` |

[View docs](https://cfxnatives.dev/natives/SET_HANDLING_VECTOR)

---
## SET_HEALTH_CONFIG_DEFAULT_ARMOR
**Hash:** `0x20A1E6A2` | **Returns:** `void`
**Alt name:** `SetHealthConfigDefaultArmor`

Sets default armor value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_DEFAULT_ARMOR)

---
## SET_HEALTH_CONFIG_DEFAULT_ENDURANCE
**Hash:** `0x60F20B81` | **Returns:** `void`
**Alt name:** `SetHealthConfigDefaultEndurance`

Sets default endurance value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_DEFAULT_ENDURANCE)

---
## SET_HEALTH_CONFIG_DEFAULT_HEALTH
**Hash:** `0xC705C778` | **Returns:** `void`
**Alt name:** `SetHealthConfigDefaultHealth`

Sets default health value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_DEFAULT_HEALTH)

---
## SET_HEALTH_CONFIG_DOG_TAKEDOWN_THRESHOLD
**Hash:** `0x9A995E96` | **Returns:** `void`
**Alt name:** `SetHealthConfigDogTakedownThreshold`

Sets default dog takedown threshold value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_DOG_TAKEDOWN_THRESHOLD)

---
## SET_HEALTH_CONFIG_DYING_THRESHOLD
**Hash:** `0x9B00FD77` | **Returns:** `void`
**Alt name:** `SetHealthConfigDyingThreshold`

Sets default dying health threshold value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_DYING_THRESHOLD)

---
## SET_HEALTH_CONFIG_FATIGUED_THRESHOLD
**Hash:** `0xC58953FD` | **Returns:** `void`
**Alt name:** `SetHealthConfigFatiguedThreshold`

Sets default fatigued health threshold value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_FATIGUED_THRESHOLD)

---
## SET_HEALTH_CONFIG_HURT_THRESHOLD
**Hash:** `0x98DF1A83` | **Returns:** `void`
**Alt name:** `SetHealthConfigHurtThreshold`

Sets default hurt health threshold value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_HURT_THRESHOLD)

---
## SET_HEALTH_CONFIG_INJURED_THRESHOLD
**Hash:** `0xF9D9B647` | **Returns:** `void`
**Alt name:** `SetHealthConfigInjuredThreshold`

Sets default injured health threshold value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_INJURED_THRESHOLD)

---
## SET_HEALTH_CONFIG_INVINCIBLE
**Hash:** `0x4A9EEDE6` | **Returns:** `void`
**Alt name:** `SetHealthConfigInvincible`

Sets default invincible value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_INVINCIBLE)

---
## SET_HEALTH_CONFIG_MELEE_FATAL_ATTACK
**Hash:** `0xDD443E53` | **Returns:** `void`
**Alt name:** `SetHealthConfigMeleeFatalAttack`

Sets default melee cardinal fatal attack value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_MELEE_FATAL_ATTACK)

---
## SET_HEALTH_CONFIG_WRITHE_FROM_BULLET_THRESHOLD
**Hash:** `0xE97633CB` | **Returns:** `void`
**Alt name:** `SetHealthConfigWritheFromBulletThreshold`

Sets default writhe from bullet threshold value for specific health config.

**Parameters:**
| Name | Type |
|------|------|
| `configName` | `char*` |
| `newValue` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HEALTH_CONFIG_WRITHE_FROM_BULLET_THRESHOLD)

---
## SET_HTTP_HANDLER
**Hash:** `0xF5C6330C` | **Returns:** `void`
**Alt name:** `SetHttpHandler`

Sets the handler for HTTP requests made to the executing resource.

Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.

The handler function assumes the following signature:

```ts
function HttpHandler(
  request: {
    address: string;
    headers: Record<string, string>;
    method: string;
    path: string;
    setDataHandler(handler: (data: string) => void): void;
    setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
    setCancelHandler(handler: () => void): void;
  },
  response: {
    writeHead(code: number, headers?: Record<string, string | string[]>): void;
    write(data: string): void;
    send(data?: string): void;
  }
): void;
```

*   **request**: The request object.
    *   **address**: The IP address of the request sender.
    *   **path**: The path to where the request was sent.
    *   **headers**: The headers sent with the request.
    *   **method**: The request method.
    *   **setDataHandler**: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).
    *   **setCancelHandler**: Sets the handler for when the request is cancelled.
*   **response**: An object to control the response.
    *   **writeHead**: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.
    *   **write**: Writes to the response body without sending it. Can be called multiple times.
    *   **send**: Writes to the response body and then sends it along with the status code & headers, finishing the request.

**Parameters:**
| Name | Type |
|------|------|
| `handler` | `func` |

**Example:**
```lua
SetHttpHandler(function(request, response)
  if request.method == 'GET' and request.path == '/ping' then -- if a GET request was sent to the `/ping` path
      response.writeHead(200, { ['Content-Type'] = 'text/plain' }) -- set the response status code to `200 OK` and the body content type to plain text
      response.send('pong') -- respond to the request with `pong`
  else -- otherwise
      response.writeHead(404) -- set the response status code to `404 Not Found`
      response.send() -- respond to the request with no data
  end
end)
```

[View docs](https://cfxnatives.dev/natives/SET_HTTP_HANDLER)

---
## SET_HUD_COMPONENT_ALIGN
**Hash:** `0xEED219F2` | **Returns:** `void`
**Alt name:** `SetHudComponentAlign`

See [SET_SCRIPT_GFX_ALIGN](#\_0xB8A850F20A067EB6) for details about how gfx align works.

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |
| `horizontalAlign` | `int` |
| `verticalAlign` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_HUD_COMPONENT_ALIGN)

---
## SET_HUD_COMPONENT_SIZE
**Hash:** `0x7644A9FA` | **Returns:** `void`
**Alt name:** `SetHudComponentSize`

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |
| `x` | `float` |
| `y` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HUD_COMPONENT_SIZE)

---
## SET_IGNORE_VEHICLE_OWNERSHIP_FOR_STOWING
**Hash:** `0x85A10FFD` | **Returns:** `void`
**Alt name:** `SetIgnoreVehicleOwnershipForStowing`

Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.

**Parameters:**
| Name | Type |
|------|------|
| `ignore` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_IGNORE_VEHICLE_OWNERSHIP_FOR_STOWING)

---
## SET_INTERIOR_PORTAL_CORNER_POSITION
**Hash:** `0x87F43553` | **Returns:** `void`
**Alt name:** `SetInteriorPortalCornerPosition`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `cornerIndex` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local portalCount = GetInteriorPortalCount(interiorId)

  -- rip portals
  for portalIndex = 0, portalCount - 1 do
    for cornerIndex = 0, 3 do -- 4 corners
      SetInteriorPortalCornerPosition(interiorId, portalIndex, cornerIndex, 0.0, 0.0, 0.0)
    end
  end
  
  RefreshInterior(interiorId)
end
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_PORTAL_CORNER_POSITION)

---
## SET_INTERIOR_PORTAL_ENTITY_FLAG
**Hash:** `0x8349CD76` | **Returns:** `void`
**Alt name:** `SetInteriorPortalEntityFlag`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `entityIndex` | `int` |
| `flag` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local portalIndex = 0

if interiorId ~= 0 then
  local count = GetInteriorPortalEntityCount(interiorId, portalIndex)
  for i=0, count-1 do
    SetInteriorPortalEntityFlag(interiorId, portalIndex, i, 0)
  end
  RefreshInterior(interiorId)
end
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_PORTAL_ENTITY_FLAG)

---
## SET_INTERIOR_PORTAL_FLAG
**Hash:** `0x88B2355E` | **Returns:** `void`
**Alt name:** `SetInteriorPortalFlag`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `flag` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local portalIndex = 0

  SetInteriorPortalFlag(interiorId, portalIndex, 1)
  RefreshInterior(interiorId)
end
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_PORTAL_FLAG)

---
## SET_INTERIOR_PORTAL_ROOM_FROM
**Hash:** `0x298FC783` | **Returns:** `void`
**Alt name:** `SetInteriorPortalRoomFrom`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `roomFrom` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local portalIndex = 0

  SetInteriorPortalRoomFrom(interiorId, portalIndex, 0)
  RefreshInterior(interiorId)
end
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_PORTAL_ROOM_FROM)

---
## SET_INTERIOR_PORTAL_ROOM_TO
**Hash:** `0x58982680` | **Returns:** `void`
**Alt name:** `SetInteriorPortalRoomTo`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `portalIndex` | `int` |
| `roomTo` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  local portalIndex = 0

  SetInteriorPortalRoomTo(interiorId, portalIndex, 0)
  RefreshInterior(interiorId)
end
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_PORTAL_ROOM_TO)

---
## SET_INTERIOR_PROBE_LENGTH
**Hash:** `0x423F7E39` | **Returns:** `void`
**Alt name:** `SetInteriorProbeLength`

Overwrite the games default CPortalTracker interior detection range.
This fixes potentially unwanted behaviour in the base game and allows you to build custom interiors with larger ceiling heights without running into graphical glitches.

By default CPortalTracker will probe 4 units downward trying to reach collisions that are part of the interior the entity is in.
If no collision can be found 16 units are used in some circumstances.

There are 30+ hard coded special cases, only some of them exposed via script (for example `ENABLE_STADIUM_PROBES_THIS_FRAME`).

This native allows you to extend the probe range up to 150 units which is the same value the game uses for the `xs_arena_interior`

**Parameters:**
| Name | Type |
|------|------|
| `probeLength` | `float` |

**Example:**
```lua
RegisterCommand("setInteriorProbeLength", function(src, args, raw)
    local probeLength = (tonumber(args[1]) + 0.0)

    print("Extending interior detection probes to: ", probeLength)
    SetInteriorProbeLength(probeLength)
end)

RegisterCommand("resetInteriorProbeLength", function()
    print("Resetting interior detection probes to default settings")
    SetInteriorProbeLength(0.0)
end)
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_PROBE_LENGTH)

---
## SET_INTERIOR_ROOM_EXTENTS
**Hash:** `0x4FDCF51E` | **Returns:** `void`
**Alt name:** `SetInteriorRoomExtents`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `roomIndex` | `int` |
| `bbMinX` | `float` |
| `bbMinY` | `float` |
| `bbMinZ` | `float` |
| `bbMaxX` | `float` |
| `bbMaxY` | `float` |
| `bbMaxZ` | `float` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)

if interiorId ~= 0 then
  SetInteriorRoomExtents(interiorId, 0, -999.0, -999.0, -100.0, 999.0, 999.0, 100.0) -- 0 is a limbo usually
  RefreshInterior(interiorId)
end
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_ROOM_EXTENTS)

---
## SET_INTERIOR_ROOM_FLAG
**Hash:** `0x5518D60B` | **Returns:** `void`
**Alt name:** `SetInteriorRoomFlag`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `roomIndex` | `int` |
| `flag` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local roomHash = GetRoomKeyFromEntity(playerPed)
local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

if roomId ~= -1 then
  SetInteriorRoomFlag(interiorId, roomId, 64)
  RefreshInterior(interiorId)
end
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_ROOM_FLAG)

---
## SET_INTERIOR_ROOM_TIMECYCLE
**Hash:** `0x31C9A848` | **Returns:** `void`
**Alt name:** `SetInteriorRoomTimecycle`

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `roomIndex` | `int` |
| `timecycleHash` | `int` |

**Example:**
```lua
local playerPed = PlayerPedId()
local interiorId = GetInteriorFromEntity(playerPed)
local roomHash = GetRoomKeyFromEntity(playerPed)
local roomId = GetInteriorRoomIndexByHash(interiorId, roomHash)

if roomId ~= -1 then
  local timecycleHash = GetHashKey("scanline_cam")
  SetInteriorRoomTimecycle(interiorId, roomId, timecycleHash)
  RefreshInterior(interiorId)
end
```

[View docs](https://cfxnatives.dev/natives/SET_INTERIOR_ROOM_TIMECYCLE)

---
## SET_KEY_MAPPING_HIDE_RESOURCES
**Hash:** `0xCB0241B5` | **Returns:** `void`
**Alt name:** `SetKeyMappingHideResources`

Toggles the visibility of resource names in the FiveM key mapping page.

**Parameters:**
| Name | Type |
|------|------|
| `hide` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_KEY_MAPPING_HIDE_RESOURCES)

---
## SET_KILL_FALL_HEIGHT
**Hash:** `0x24091E09` | **Returns:** `void`
**Alt name:** `SetKillFallHeight`

A setter for [GET_KILL_FALL_HEIGHT](#\_0x884C8B5A).

**Parameters:**
| Name | Type |
|------|------|
| `height` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_KILL_FALL_HEIGHT)

---
## SET_LIGHT_ALPHA
**Hash:** `0xC0EBC38` | **Returns:** `void`
**Alt name:** `SetLightAlpha`

Set the alpha transparency of the light.

**Parameters:**
| Name | Type |
|------|------|
| `alpha` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_ALPHA)

---
## SET_LIGHT_AO
**Hash:** `0xE155B53B` | **Returns:** `void`
**Alt name:** `SetLightAo`

Set ambient occlusion (AO) parameters for a specified light.

**Parameters:**
| Name | Type |
|------|------|
| `intensity` | `float` |
| `radius` | `float` |
| `bias` | `float` |
| `intensity2` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_AO)

---
## SET_LIGHT_CAPSULE_SIZE
**Hash:** `0xA3881271` | **Returns:** `void`
**Alt name:** `SetLightCapsuleSize`

Set the capsule size of a specified light.

**Parameters:**
| Name | Type |
|------|------|
| `size` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_CAPSULE_SIZE)

---
## SET_LIGHT_CLIP_RECT
**Hash:** `0xD9DD0717` | **Returns:** `void`
**Alt name:** `SetLightClipRect`

Set the clip rectangle for a created light.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |
| `width` | `int` |
| `height` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_CLIP_RECT)

---
## SET_LIGHT_COLOR
**Hash:** `0x65FE5132` | **Returns:** `void`
**Alt name:** `SetLightColor`

Set the color of a specified light.

**Parameters:**
| Name | Type |
|------|------|
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_COLOR)

---
## SET_LIGHT_CONE
**Hash:** `0x9FE89EF5` | **Returns:** `void`
**Alt name:** `SetLightCone`

Set the inner and outer cone angles of a specified light.

**Parameters:**
| Name | Type |
|------|------|
| `innerConeAngle` | `float` |
| `outerConeAngle` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_CONE)

---
## SET_LIGHT_COORDS
**Hash:** `0x8950BD08` | **Returns:** `void`
**Alt name:** `SetLightCoords`

Set the world coordinates of a specified light.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_COORDS)

---
## SET_LIGHT_DIRECTION
**Hash:** `0xA6FE1977` | **Returns:** `void`
**Alt name:** `SetLightDirection`

Set the forward and tangent direction vectors for an existing light, allowing control over its orientation (useful for spotlights and directional lights).

**Parameters:**
| Name | Type |
|------|------|
| `xDir` | `float` |
| `yDir` | `float` |
| `zDir` | `float` |
| `xTanDir` | `float` |
| `yTanDir` | `float` |
| `zTanDir` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_DIRECTION)

---
## SET_LIGHT_EXTRAFLAGS
**Hash:** `0xB2D37E97` | **Returns:** `void`
**Alt name:** `SetLightExtraflags`

Set additional configuration flags for an existing light

**Parameters:**
| Name | Type |
|------|------|
| `extraFlags` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_EXTRAFLAGS)

---
## SET_LIGHT_FADE_DISTANCE
**Hash:** `0xFA46714D` | **Returns:** `void`
**Alt name:** `SetLightFadeDistance`

Set the fade distance.

**Parameters:**
| Name | Type |
|------|------|
| `fadeDistance` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_FADE_DISTANCE)

---
## SET_LIGHT_FALLOFF
**Hash:** `0x4D7F6E03` | **Returns:** `void`
**Alt name:** `SetLightFalloff`

Adjust the falloff parameter for an existing light, affecting how light intensity decreases over distance.

**Parameters:**
| Name | Type |
|------|------|
| `falloff` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_FALLOFF)

---
## SET_LIGHT_FLAGS
**Hash:** `0x28B22733` | **Returns:** `void`
**Alt name:** `SetLightFlags`

Set or update specific flags for a created light to control its behavior or properties.

**Parameters:**
| Name | Type |
|------|------|
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_FLAGS)

---
## SET_LIGHT_HEADLIGHT
**Hash:** `0xFF44D502` | **Returns:** `void`
**Alt name:** `SetLightHeadlight`

Set the headlight properties of a created light, adjusting its intensity and range.

**Parameters:**
| Name | Type |
|------|------|
| `intensity` | `float` |
| `range` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_HEADLIGHT)

---
## SET_LIGHT_INTENSITY
**Hash:** `0x2CC9A71C` | **Returns:** `void`
**Alt name:** `SetLightIntensity`

Set the intensity of an existing light.

**Parameters:**
| Name | Type |
|------|------|
| `intensity` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_INTENSITY)

---
## SET_LIGHT_INTERIOR
**Hash:** `0x1CC72443` | **Returns:** `void`
**Alt name:** `SetLightInterior`

Set the interior and room where the light should be active.

**Parameters:**
| Name | Type |
|------|------|
| `interiorId` | `int` |
| `isPortal` | `bool` |
| `roomIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_INTERIOR)

---
## SET_LIGHT_PLANE
**Hash:** `0xE46E0CDF` | **Returns:** `void`
**Alt name:** `SetLightPlane`

Set the plane parameters for a light.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `w` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_PLANE)

---
## SET_LIGHT_RADIUS
**Hash:** `0x4A4B5CBE` | **Returns:** `void`
**Alt name:** `SetLightRadius`

Set the radius of a created light.

**Parameters:**
| Name | Type |
|------|------|
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_RADIUS)

---
## SET_LIGHT_SHADOW_DETAILS
**Hash:** `0xA40EAC1A` | **Returns:** `void`
**Alt name:** `SetLightShadowDetails`

Set the shadow details for a created light.

**Parameters:**
| Name | Type |
|------|------|
| `shadowFlags` | `int` |
| `shadowDistance` | `float` |
| `shadowFade` | `float` |
| `shadowDepthBiasScale` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_SHADOW_DETAILS)

---
## SET_LIGHT_SHADOW_FADE_DISTANCE
**Hash:** `0x3C54C2A8` | **Returns:** `void`
**Alt name:** `SetLightShadowFadeDistance`

Set the fade distance for the shadows of a created light.

**Parameters:**
| Name | Type |
|------|------|
| `fadeDistance` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_SHADOW_FADE_DISTANCE)

---
## SET_LIGHT_SPECULAR_FADE_DISTANCE
**Hash:** `0xC3A35A50` | **Returns:** `void`
**Alt name:** `SetLightSpecularFadeDistance`

Set the specular fade distance for a created light.

**Parameters:**
| Name | Type |
|------|------|
| `fadeDistance` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_SPECULAR_FADE_DISTANCE)

---
## SET_LIGHT_TEXTURE
**Hash:** `0x55A50736` | **Returns:** `void`
**Alt name:** `SetLightTexture`

Assign a texture to an existing light source, allowing custom light shapes or patterns using textures from streaming assets.

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |
| `textureHash` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_TEXTURE)

---
## SET_LIGHT_TYPE
**Hash:** `0xCB58679D` | **Returns:** `void`
**Alt name:** `SetLightType`

Change the light type of a already created light.
Certain light type needs more configurations to work properly (Like direction, flags or size)

**Parameters:**
| Name | Type |
|------|------|
| `lightType` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_TYPE)

---
## SET_LIGHT_VOLUME_DETAILS
**Hash:** `0x2F731AE7` | **Returns:** `void`
**Alt name:** `SetLightVolumeDetails`

Set volumetric light properties for an existing light, enabling custom volumetric effects such as fog-like glow.

**Parameters:**
| Name | Type |
|------|------|
| `volIntensity` | `float` |
| `volSizeScale` | `float` |
| `r` | `float` |
| `g` | `float` |
| `b` | `float` |
| `i` | `float` |
| `outerExponent` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_VOLUME_DETAILS)

---
## SET_LIGHT_VOLUMETRIC_FADE_DISTANCE
**Hash:** `0xE1F41605` | **Returns:** `void`
**Alt name:** `SetLightVolumetricFadeDistance`

Set the fade distance for volumetric lightingn.

**Parameters:**
| Name | Type |
|------|------|
| `volumetricFadeDistance` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_LIGHT_VOLUMETRIC_FADE_DISTANCE)

---
## SET_MANUAL_SHUTDOWN_LOADING_SCREEN_NUI
**Hash:** `0x1722C938` | **Returns:** `void`
**Alt name:** `SetManualShutdownLoadingScreenNui`

**Note**: This native is deprecated and doesn't work anymore. Use [loadscreen_manual_shutdown](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/#loadscreen_manual_shutdown) in the fxmanifest.lua instead.

**Parameters:**
| Name | Type |
|------|------|
| `manualShutdown` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_MANUAL_SHUTDOWN_LOADING_SCREEN_NUI)

---
## SET_MAP_NAME
**Hash:** `0xB7BA82DC` | **Returns:** `void`
**Alt name:** `SetMapName`

**Parameters:**
| Name | Type |
|------|------|
| `mapName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_MAP_NAME)

---
## SET_MAP_ZOOM_DATA_LEVEL
**Hash:** `0x447C718E` | **Returns:** `void`
**Alt name:** `SetMapZoomDataLevel`

Sets values to the zoom level data by index.

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |
| `zoomScale` | `float` |
| `zoomSpeed` | `float` |
| `scrollSpeed` | `float` |
| `tilesX` | `float` |
| `tilesY` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_MAP_ZOOM_DATA_LEVEL)

---
## SET_MILLISECONDS_PER_GAME_MINUTE
**Hash:** `0x36CA2554` | **Returns:** `void`
**Alt name:** `SetMillisecondsPerGameMinute`

Overrides how many real ms are equal to one game minute.
A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_MILLISECONDS_PER_GAME_MINUTE)

---
## SET_MINIMAP_CLIP_TYPE
**Hash:** `0xB8B4490C` | **Returns:** `void`
**Alt name:** `SetMinimapClipType`

Sets the type for the minimap blip clipping object to be either rectangular or rounded.

**Parameters:**
| Name | Type |
|------|------|
| `type` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_MINIMAP_CLIP_TYPE)

---
## SET_MINIMAP_COMPONENT_POSITION
**Hash:** `0x3E882B23` | **Returns:** `void`
**Alt name:** `SetMinimapComponentPosition`

Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `alignX` | `char*` |
| `alignY` | `char*` |
| `posX` | `float` |
| `posY` | `float` |
| `sizeX` | `float` |
| `sizeY` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_MINIMAP_COMPONENT_POSITION)

---
## SET_MINIMAP_OVERLAY_DISPLAY
**Hash:** `0x6A48B3CA` | **Returns:** `void`
**Alt name:** `SetMinimapOverlayDisplay`

Sets the display info for a minimap overlay.

**Parameters:**
| Name | Type |
|------|------|
| `miniMap` | `int` |
| `x` | `float` |
| `y` | `float` |
| `xScale` | `float` |
| `yScale` | `float` |
| `alpha` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_MINIMAP_OVERLAY_DISPLAY)

---
## SET_MINIMAP_TYPE
**Hash:** `0x5FB53015` | **Returns:** `void`
**Alt name:** `SetMinimapType`

Possible Types:

```
0 = Off,
1 = Regular,
2 = Expanded,
3 = Simple,
```

**Parameters:**
| Name | Type |
|------|------|
| `type` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_MINIMAP_TYPE)

---
## SET_MODEL_HEADLIGHT_CONFIGURATION
**Hash:** `0x7F6B8D75` | **Returns:** `void`
**Alt name:** `SetModelHeadlightConfiguration`

**This native is deprecated and does nothing!**

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |
| `ratePerSecond` | `float` |
| `headlightRotation` | `float` |
| `invertRotation` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_MODEL_HEADLIGHT_CONFIGURATION)

---
## SET_MP_GAMER_TAGS_USE_VEHICLE_BEHAVIOR
**Hash:** `0x7A27BC93` | **Returns:** `void`
**Alt name:** `SetMpGamerTagsUseVehicleBehavior`

Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.

**Parameters:**
| Name | Type |
|------|------|
| `enabled` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_MP_GAMER_TAGS_USE_VEHICLE_BEHAVIOR)

---
## SET_MP_GAMER_TAGS_VISIBLE_DISTANCE
**Hash:** `0xD61676B3` | **Returns:** `void`
**Alt name:** `SetMpGamerTagsVisibleDistance`

Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.

**Parameters:**
| Name | Type |
|------|------|
| `distance` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_MP_GAMER_TAGS_VISIBLE_DISTANCE)

---
## SET_NETWORK_WALK_MODE
**Hash:** `0x55188D2D` | **Returns:** `void`
**Alt name:** `SetNetworkWalkMode`

**Parameters:**
| Name | Type |
|------|------|
| `enabled` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_NETWORK_WALK_MODE)

---
## SET_NUI_FOCUS
**Hash:** `0x5B98AE30` | **Returns:** `void`
**Alt name:** `SetNuiFocus`

**Parameters:**
| Name | Type |
|------|------|
| `hasFocus` | `BOOL` |
| `hasCursor` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_NUI_FOCUS)

---
## SET_NUI_FOCUS_KEEP_INPUT
**Hash:** `0x3FF5E5F8` | **Returns:** `void`
**Alt name:** `SetNuiFocusKeepInput`

**Parameters:**
| Name | Type |
|------|------|
| `keepInput` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_NUI_FOCUS_KEEP_INPUT)

---
## SET_NUI_ZINDEX
**Hash:** `0x3734AAFF` | **Returns:** `void`
**Alt name:** `SetNuiZindex`

Set the z-index of the NUI resource.

**Parameters:**
| Name | Type |
|------|------|
| `zIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_NUI_ZINDEX)

---
## SET_PED_AMMO
**Hash:** `0xBF90DF1A` | **Returns:** `void`
**Alt name:** `SetPedAmmo`

```
NativeDB Added Parameter 4: BOOL p3
```

**This is the server-side RPC native equivalent of the client native [SET_PED_AMMO](?\_0x14E56BC5B5DB6A19).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammo` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_AMMO)

---
## SET_PED_ARMOUR
**Hash:** `0x4E3A0CC4` | **Returns:** `void`
**Alt name:** `SetPedArmour`

```
Sets the armor of the specified ped.
ped: The Ped to set the armor of.
amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
```

**This is the server-side RPC native equivalent of the client native [SET_PED_ARMOUR](?\_0xCEA04D83135264CC).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `amount` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_ARMOUR)

---
## SET_PED_CAN_RAGDOLL
**Hash:** `0xCF1384C4` | **Returns:** `void`
**Alt name:** `SetPedCanRagdoll`

SET_PED_CAN_RAGDOLL

**This is the server-side RPC native equivalent of the client native [SET_PED_CAN_RAGDOLL](?\_0xB128377056A54E2A).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_CAN_RAGDOLL)

---
## SET_PED_COLLECTION_COMPONENT_VARIATION
**Hash:** `0x88711BBA` | **Returns:** `void`
**Alt name:** `SetPedCollectionComponentVariation`

An alternative to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80) that uses local collection indexing instead of the global one.

The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.

Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `collection` | `char*` |
| `drawableId` | `int` |
| `textureId` | `int` |
| `paletteId` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PED_COLLECTION_COMPONENT_VARIATION)

---
## SET_PED_COLLECTION_PRELOAD_PROP_DATA
**Hash:** `0x14B5BBE0` | **Returns:** `void`
**Alt name:** `SetPedCollectionPreloadPropData`

An alternative to [SET_PED_PRELOAD_PROP_DATA](#\_0x2B16A3BFF1FBCE49) that uses local collection indexing instead of the global one.

The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.

Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |
| `collection` | `char*` |
| `propIndex` | `int` |
| `textureId` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PED_COLLECTION_PRELOAD_PROP_DATA)

---
## SET_PED_COLLECTION_PRELOAD_VARIATION_DATA
**Hash:** `0x3EC75558` | **Returns:** `void`
**Alt name:** `SetPedCollectionPreloadVariationData`

An alternative to [SET_PED_PRELOAD_VARIATION_DATA](#\_0x39D55A620FCB6A3A) that uses local collection indexing instead of the global one.

The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.

Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_DRAWABLE](#\_0xD6BBA48B) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_DRAWABLE](#\_0x94EB1FE4) natives.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `collection` | `char*` |
| `drawableId` | `int` |
| `textureId` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PED_COLLECTION_PRELOAD_VARIATION_DATA)

---
## SET_PED_COLLECTION_PROP_INDEX
**Hash:** `0x75240BCB` | **Returns:** `void`
**Alt name:** `SetPedCollectionPropIndex`

An alternative to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F) that uses local collection indexing instead of the global one.

The local / collection relative indexing is useful because the global index may get shifted after Title Update. While local index will remain the same which simplifies migration to the newer game version.

Collection name and local index inside the collection can be obtained from the global index using [GET_PED_COLLECTION_NAME_FROM_PROP](#\_0x8ED0C17) and [GET_PED_COLLECTION_LOCAL_INDEX_FROM_PROP](#\_0xFBDB885F) natives.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anchorPoint` | `int` |
| `collection` | `char*` |
| `propIndex` | `int` |
| `textureId` | `int` |
| `attach` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_COLLECTION_PROP_INDEX)

---
## SET_PED_COMPONENT_VARIATION
**Hash:** `0xD4F7B05C` | **Returns:** `void`
**Alt name:** `SetPedComponentVariation`

This native is used to set component variation on a ped. Components, drawables and textures IDs are related to the ped model.

### MP Freemode list of components

**0**: Face
**1**: Mask
**2**: Hair
**3**: Torso
**4**: Leg
**5**: Parachute / bag
**6**: Shoes
**7**: Accessory
**8**: Undershirt
**9**: Kevlar
**10**: Badge
**11**: Torso 2
List of Component IDs

```cpp
// Components
enum ePedVarComp
{
PV_COMP_INVALID = 0xFFFFFFFF,
PV_COMP_HEAD = 0, // "HEAD"
PV_COMP_BERD = 1, // "BEARD"
PV_COMP_HAIR = 2, // "HAIR"
PV_COMP_UPPR = 3, // "UPPER"
PV_COMP_LOWR = 4, // "LOWER"
PV_COMP_HAND = 5, // "HAND"
PV_COMP_FEET = 6, // "FEET"
PV_COMP_TEEF = 7, // "TEETH"
PV_COMP_ACCS = 8, // "ACCESSORIES"
PV_COMP_TASK = 9, // "TASK"
PV_COMP_DECL = 10, // "DECL"
PV_COMP_JBIB = 11, // "JBIB"
PV_COMP_MAX = 12,
};
```

**This is the server-side RPC native equivalent of the client native [SET_PED_COMPONENT_VARIATION](?\_0x262B14F48D29DE80).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `drawableId` | `int` |
| `textureId` | `int` |
| `paletteId` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_COMPONENT_VARIATION)

---
## SET_PED_CONFIG_FLAG
**Hash:** `0x9CFBE10D` | **Returns:** `void`
**Alt name:** `SetPedConfigFlag`

```cpp
// Potential names and hash collisions included as comments
enum ePedConfigFlags {
CPED_CONFIG_FLAG_CreatedByFactory = 0,
CPED_CONFIG_FLAG_CanBeShotInVehicle = 1,
CPED_CONFIG_FLAG_NoCriticalHits = 2,
CPED_CONFIG_FLAG_DrownsInWater = 3,
CPED_CONFIG_FLAG_DrownsInSinkingVehicle = 4,
CPED_CONFIG_FLAG_DiesInstantlyWhenSwimming = 5,
CPED_CONFIG_FLAG_HasBulletProofVest = 6,
CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
CPED_CONFIG_FLAG_NeverFallOffSkis = 8,
CPED_CONFIG_FLAG_NeverEverTargetThisPed = 9,
CPED_CONFIG_FLAG_ThisPedIsATargetPriority = 10,
CPED_CONFIG_FLAG_TargettableWithNoLos = 11,
CPED_CONFIG_FLAG_DoesntListenToPlayerGroupCommands = 12,
CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
CPED_CONFIG_FLAG_DoesntDropWeaponsWhenDead = 14,
CPED_CONFIG_FLAG_SetDelayedWeaponAsCurrent = 15,
CPED_CONFIG_FLAG_KeepTasksAfterCleanUp = 16,
CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
CPED_CONFIG_FLAG_HasAScriptBrain = 18,
CPED_CONFIG_FLAG_WaitingForScriptBrainToLoad = 19,
CPED_CONFIG_FLAG_AllowMedicsToReviveMe = 20,
CPED_CONFIG_FLAG_MoneyHasBeenGivenByScript = 21,
CPED_CONFIG_FLAG_NotAllowedToCrouch = 22,
CPED_CONFIG_FLAG_DeathPickupsPersist = 23,
CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
CPED_CONFIG_FLAG_ForceDieIfInjured = 25,
CPED_CONFIG_FLAG_DontDragMeOutCar = 26,
CPED_CONFIG_FLAG_StayInCarOnJack = 27,
CPED_CONFIG_FLAG_ForceDieInCar = 28,
CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
CPED_CONFIG_FLAG_WillRemainOnBoatAfterMissionEnds = 30,
CPED_CONFIG_FLAG_DontStoreAsPersistent = 31,
CPED_CONFIG_FLAG_WillFlyThroughWindscreen = 32,
CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
CPED_CONFIG_FLAG_HasHelmet = 34,
CPED_CONFIG_FLAG_UseHelmet = 35,
CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
CPED_CONFIG_FLAG_HideInCutscene = 37,
CPED_CONFIG_FLAG_PedIsEnemyToPlayer = 38,
CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
CPED_CONFIG_FLAG_PedGeneratesDeadBodyEvents = 40,
CPED_CONFIG_FLAG_DontAttackPlayerWithoutWantedLevel = 41,
CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
_0xDB115BFA = 46,
CPED_CONFIG_FLAG_PedBeingDeleted = 47,
CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
CPED_CONFIG_FLAG_BlockGroupPedAimedAtResponse = 49,
CPED_CONFIG_FLAG_WillFollowLeaderAnyMeans = 50,
CPED_CONFIG_FLAG_BlippedByScript = 51,
CPED_CONFIG_FLAG_DrawRadarVisualField = 52,
CPED_CONFIG_FLAG_StopWeaponFiringOnImpact = 53,
CPED_CONFIG_FLAG_DissableAutoFallOffTests = 54,
CPED_CONFIG_FLAG_SteerAroundDeadBodies = 55,
CPED_CONFIG_FLAG_ConstrainToNavMesh = 56,
CPED_CONFIG_FLAG_SyncingAnimatedProps = 57,
CPED_CONFIG_FLAG_IsFiring = 58,
CPED_CONFIG_FLAG_WasFiring = 59,
CPED_CONFIG_FLAG_IsStanding = 60,
CPED_CONFIG_FLAG_WasStanding = 61,
CPED_CONFIG_FLAG_InVehicle = 62,
CPED_CONFIG_FLAG_OnMount = 63,
CPED_CONFIG_FLAG_AttachedToVehicle = 64,
CPED_CONFIG_FLAG_IsSwimming = 65,
CPED_CONFIG_FLAG_WasSwimming = 66,
CPED_CONFIG_FLAG_IsSkiing = 67,
CPED_CONFIG_FLAG_IsSitting = 68,
CPED_CONFIG_FLAG_KilledByStealth = 69,
CPED_CONFIG_FLAG_KilledByTakedown = 70,
CPED_CONFIG_FLAG_Knockedout = 71,
CPED_CONFIG_FLAG_ClearRadarBlipOnDeath = 72,
CPED_CONFIG_FLAG_JustGotOffTrain = 73,
CPED_CONFIG_FLAG_JustGotOnTrain = 74,
CPED_CONFIG_FLAG_UsingCoverPoint = 75,
CPED_CONFIG_FLAG_IsInTheAir = 76,
CPED_CONFIG_FLAG_KnockedUpIntoAir = 77,
CPED_CONFIG_FLAG_IsAimingGun = 78,
CPED_CONFIG_FLAG_HasJustLeftCar = 79,
CPED_CONFIG_FLAG_TargetWhenInjuredAllowed = 80,
CPED_CONFIG_FLAG_CurrLeftFootCollNM = 81,
CPED_CONFIG_FLAG_PrevLeftFootCollNM = 82,
CPED_CONFIG_FLAG_CurrRightFootCollNM = 83,
CPED_CONFIG_FLAG_PrevRightFootCollNM = 84,
CPED_CONFIG_FLAG_HasBeenBumpedInCar = 85,
CPED_CONFIG_FLAG_InWaterTaskQuitToClimbLadder = 86,
CPED_CONFIG_FLAG_NMTwoHandedWeaponBothHandsConstrained = 87,
CPED_CONFIG_FLAG_CreatedBloodPoolTimer = 88,
CPED_CONFIG_FLAG_DontActivateRagdollFromAnyPedImpact = 89,
CPED_CONFIG_FLAG_GroupPedFailedToEnterCover = 90,
CPED_CONFIG_FLAG_AlreadyChattedOnPhone = 91,
CPED_CONFIG_FLAG_AlreadyReactedToPedOnRoof = 92,
CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
CPED_CONFIG_FLAG_BlockCoweringInCover = 94,
CPED_CONFIG_FLAG_BlockPeekingInCover = 95,
CPED_CONFIG_FLAG_JustLeftCarNotCheckedForDoors = 96,
CPED_CONFIG_FLAG_VaultFromCover = 97,
CPED_CONFIG_FLAG_AutoConversationLookAts = 98,
CPED_CONFIG_FLAG_UsingCrouchedPedCapsule = 99,
CPED_CONFIG_FLAG_HasDeadPedBeenReported = 100,
CPED_CONFIG_FLAG_ForcedAim = 101,
CPED_CONFIG_FLAG_SteersAroundPeds = 102,
CPED_CONFIG_FLAG_SteersAroundObjects = 103,
CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
CPED_CONFIG_FLAG_ForceReload = 105,
CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
CPED_CONFIG_FLAG_IsBeingDraggedToSafety = 111,
CPED_CONFIG_FLAG_HasBeenDraggedToSafety = 112,
CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
CPED_CONFIG_FLAG_ForceScriptControlledKnockout = 114,
CPED_CONFIG_FLAG_FallOutOfVehicleWhenKilled = 115,
CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
CPED_CONFIG_FLAG_BumpedByPlayer = 117,
CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
CPED_CONFIG_FLAG_IsHandCuffed = 120,
CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
CPED_CONFIG_FLAG_DisableMelee = 122,
CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
CPED_CONFIG_FLAG_UNUSED_REPLACE_ME = 125,
CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
CPED_CONFIG_FLAG_CanBeAgitated = 128,
CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
CPED_CONFIG_FLAG_IsScuba = 135,
CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
CPED_CONFIG_FLAG_RidingTrain = 138,
CPED_CONFIG_FLAG_ArrestResult = 139,
CPED_CONFIG_FLAG_CanAttackFriendly = 140,
CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
CPED_CONFIG_FLAG_BumpedByPlayerVehicle = 142,
CPED_CONFIG_FLAG_DodgedPlayerVehicle = 143,
CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
CPED_CONFIG_FLAG_NoCopWantedAggro = 145,
CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
CPED_CONFIG_FLAG_StairsDetected = 147,
CPED_CONFIG_FLAG_SlopeDetected = 148,
CPED_CONFIG_FLAG_HelmetHasBeenShot = 149,
CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
CPED_CONFIG_FLAG_CanPerformArrest = 155,
CPED_CONFIG_FLAG_CanPerformUncuff = 156,
CPED_CONFIG_FLAG_CanBeArrested = 157,
CPED_CONFIG_FLAG_MoverConstrictedByOpposingCollisions = 158,
CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
CPED_CONFIG_FLAG_DontActivateRagdollFromImpactObject = 160,
CPED_CONFIG_FLAG_DontActivateRagdollFromMelee = 161,
CPED_CONFIG_FLAG_DontActivateRagdollFromWaterJet = 162,
CPED_CONFIG_FLAG_DontActivateRagdollFromDrowning = 163,
CPED_CONFIG_FLAG_DontActivateRagdollFromFalling = 164,
CPED_CONFIG_FLAG_DontActivateRagdollFromRubberBullet = 165,
CPED_CONFIG_FLAG_IsInjured = 166,
CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
CPED_CONFIG_FLAG_SwimmingTasksRunning = 168,
CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
CPED_CONFIG_FLAG_ForceDirectEntry = 170,
CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
CPED_CONFIG_FLAG_PlayerInContactWithKinematicPed = 175,
CPED_CONFIG_FLAG_PlayerInContactWithSomethingOtherThanKinematicPed = 176,
CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
CPED_CONFIG_FLAG_AdditionalRappellingPed = 178,
CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
CPED_CONFIG_FLAG_IsInCustody = 180,
CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
CPED_CONFIG_FLAG_IsAgitated = 183,
CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
CPED_CONFIG_FLAG_HasHurtStarted = 187,
CPED_CONFIG_FLAG_DisableHurt = 188,
CPED_CONFIG_FLAG_PlayerIsWeird = 189,
CPED_CONFIG_FLAG_PedHadPhoneConversation = 190,
CPED_CONFIG_FLAG_BeganCrossingRoad = 191,
CPED_CONFIG_FLAG_WarpIntoLeadersVehicle = 192,
CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
CPED_CONFIG_FLAG_UsingScenario = 194,
CPED_CONFIG_FLAG_VisibleOnScreen = 195,
CPED_CONFIG_FLAG_DontCollideWithKinematic = 196,
CPED_CONFIG_FLAG_ActivateOnSwitchFromLowPhysicsLod = 197,
CPED_CONFIG_FLAG_DontActivateRagdollOnPedCollisionWhenDead = 198,
CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
CPED_CONFIG_FLAG_UseDiminishingAmmoRate = 201,
CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
CPED_CONFIG_FLAG_LowPhysicsLodMayPlaceOnNavMesh = 207,
CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
CPED_CONFIG_FLAG_DodgedPlayer = 209,
CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
CPED_CONFIG_FLAG_SteersAroundVehicles = 218,
CPED_CONFIG_FLAG_AllowPedInVehiclesOverrideTaskFlags = 219,
CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
CPED_CONFIG_FLAG_ScriptHasDisabledCollision = 222,
CPED_CONFIG_FLAG_UseAmbientModelScaling = 223,
CPED_CONFIG_FLAG_DontWatchFirstOnNextHurryAway = 224,
CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
CPED_CONFIG_FLAG_CanLosePropsOnDamage = 228,
CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
CPED_CONFIG_FLAG_HasShotBeenReactedToFromFront = 231,
CPED_CONFIG_FLAG_HasShotBeenReactedToFromBack = 232,
CPED_CONFIG_FLAG_HasShotBeenReactedToFromLeft = 233,
CPED_CONFIG_FLAG_HasShotBeenReactedToFromRight = 234,
CPED_CONFIG_FLAG_AllowBlockDeadPedRagdollActivation = 235,
CPED_CONFIG_FLAG_IsHoldingProp = 236,
CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
CPED_CONFIG_FLAG_ForcePlayNormalScenarioExitOnNextScriptCommand = 238,
CPED_CONFIG_FLAG_ForcePlayImmediateScenarioExitOnNextScriptCommand = 239,
CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
CPED_CONFIG_FLAG_InStrafeTransition = 247,
CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
CPED_CONFIG_FLAG_OnStairs = 253,
CPED_CONFIG_FLAG_SimulatingAiming = 254,
CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
CPED_CONFIG_FLAG_ParentCarIsBeingRemoved = 256,
CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
CPED_CONFIG_FLAG_CanLoseHelmetOnDamage = 258,
CPED_CONFIG_FLAG_NeverDoScenarioExitProbeChecks = 259,
CPED_CONFIG_FLAG_SuppressLowLODRagdollSwitchWhenCorpseSettles = 260,
CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
CPED_CONFIG_FLAG_JustLeftVehicleNeedsReset = 262,
CPED_CONFIG_FLAG_TeleportIfCantReachPlayer = 263,
CPED_CONFIG_FLAG_PedsInVehiclePositionNeedsReset = 264,
CPED_CONFIG_FLAG_PedsFullyInSeat = 265,
CPED_CONFIG_FLAG_AllowPlayerLockOnIfFriendly = 266,
CPED_CONFIG_FLAG_UseCameraHeadingForDesiredDirectionLockOnTest = 267,
CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
CPED_CONFIG_FLAG_OnStairSlope = 270,
CPED_CONFIG_FLAG_HasPlayedNMGetup = 271,
CPED_CONFIG_FLAG_DontBlipCop = 272,
CPED_CONFIG_FLAG_SpawnedAtExtendedRangeScenario = 273,
CPED_CONFIG_FLAG_WalkAlongsideLeaderWhenClose = 274,
CPED_CONFIG_FLAG_KillWhenTrapped = 275,
CPED_CONFIG_FLAG_EdgeDetected = 276,
CPED_CONFIG_FLAG_AlwaysWakeUpPhysicsOfIntersectedPeds = 277,
CPED_CONFIG_FLAG_EquippedAmbientLoadOutWeapon = 278,
CPED_CONFIG_FLAG_AvoidTearGas = 279,
CPED_CONFIG_FLAG_StoppedSpeechUponFreezing = 280,
CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
CPED_CONFIG_FLAG_ThrownFromVehicleDueToExhaustion = 283,
CPED_CONFIG_FLAG_UpdateEnclosedSearchRegion = 284,
CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
CPED_CONFIG_FLAG_ShouldChargeNow = 286,
CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
CPED_CONFIG_FLAG_AllowMinorReactionsAsMissionPed = 289,
CPED_CONFIG_FLAG_BlockDeadBodyShockingEventsWhenDead = 290,
CPED_CONFIG_FLAG_PedHasBeenSeen = 291,
CPED_CONFIG_FLAG_PedIsInReusePool = 292,
CPED_CONFIG_FLAG_PedWasReused = 293,
CPED_CONFIG_FLAG_DisableShockingEvents = 294,
CPED_CONFIG_FLAG_MovedUsingLowLodPhysicsSinceLastActive = 295,
CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
CPED_CONFIG_FLAG_ForcePlayFleeScenarioExitOnNextScriptCommand = 297,
CPED_CONFIG_FLAG_JustBumpedIntoVehicle = 298,
CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
CPED_CONFIG_FLAG_ShouldThrowSmokeNow = 300,
CPED_CONFIG_FLAG_DisablePedConstraints = 301,
CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
CPED_CONFIG_FLAG_CreatedByDispatch = 303,
CPED_CONFIG_FLAG_PointGunLeftHandSupporting = 304,
CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerPedImpact = 306,
CPED_CONFIG_FLAG_DontActivateRagdollFromAiRagdollImpact = 307,
CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerRagdollImpact = 308,
CPED_CONFIG_FLAG_DisableQuadrupedSpring = 309,
CPED_CONFIG_FLAG_IsInCluster = 310,
CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
CPED_CONFIG_FLAG_PreferInjuredGetup = 313,
CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
CPED_CONFIG_FLAG_JackedAbandonedCar = 316,
CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
CPED_CONFIG_FLAG_HasPortablePickupAttached = 319,
CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
CPED_CONFIG_FLAG_HasHighHeels = 322,
CPED_CONFIG_FLAG_TreatAsAmbientPedForDriverLockOn = 323,
CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
CPED_CONFIG_FLAG_SpawnedAtScenario = 325,
CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
CPED_CONFIG_FLAG_DisableTalkTo = 329,
CPED_CONFIG_FLAG_DontBlip = 330,
CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
CPED_CONFIG_FLAG_ScriptForceNoTimesliceIntelligenceUpdate = 333,
CPED_CONFIG_FLAG_JackedOutOfMyVehicle = 334,
CPED_CONFIG_FLAG_WentIntoCombatAfterBeingJacked = 335,
CPED_CONFIG_FLAG_DontActivateRagdollForVehicleGrab = 336,
CPED_CONFIG_FLAG_ForcePackageCharacterCloth = 337,
CPED_CONFIG_FLAG_DontRemoveWithValidOrder = 338,
CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
CPED_CONFIG_FLAG_ForcedToStayInCoverDueToPlayerSwitch = 340,
CPED_CONFIG_FLAG_ForceProneCharacterCloth = 341,
CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
CPED_CONFIG_FLAG_InToStrafeTransition = 343,
CPED_CONFIG_FLAG_KilledByStandardMelee = 344,
CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
CPED_CONFIG_FLAG_ForcePlayDirectedNormalScenarioExitOnNextScriptCommand = 346,
CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
CPED_CONFIG_FLAG_EquipJetpack = 349,
CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
CPED_CONFIG_FLAG_ScriptHasCompletelyDisabledCollision = 351,
CPED_CONFIG_FLAG_NeverDoScenarioNavChecks = 352,
CPED_CONFIG_FLAG_ForceSynchronousScenarioExitChecking = 353,
CPED_CONFIG_FLAG_ThrowingGrenadeWhileAiming = 354,
CPED_CONFIG_FLAG_HeadbobToRadioEnabled = 355,
CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
CPED_CONFIG_FLAG_HasReserveParachute = 362,
CPED_CONFIG_FLAG_UseReserveParachute = 363,
CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
CPED_CONFIG_FLAG_DontActivateRagdollFromSmokeGrenade = 367,
CPED_CONFIG_FLAG_LinkMBRToOwnerOnChain = 368,
CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayer = 369,
CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayerVehicle = 370,
CPED_CONFIG_FLAG_InFPSUnholsterTransition = 371,
CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
CPED_CONFIG_FLAG_UseFPSUnholsterTransitionDuringCombatRoll = 376,
CPED_CONFIG_FLAG_ExitingFPSCombatRoll = 377,
CPED_CONFIG_FLAG_ScriptHasControlOfPlayer = 378,
CPED_CONFIG_FLAG_PlayFPSIdleFidgetsForProjectile = 379,
CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInAircraft = 381,
CPED_CONFIG_FLAG_WasPlayingFPSGetup = 382,
CPED_CONFIG_FLAG_WasPlayingFPSMeleeActionResult = 383,
CPED_CONFIG_FLAG_PreferNoPriorityRemoval = 384,
CPED_CONFIG_FLAG_FPSFidgetsAbortedOnFire = 385,
CPED_CONFIG_FLAG_ForceFPSIKWithUpperBodyAnim = 386,
CPED_CONFIG_FLAG_SwitchingCharactersInFirstPerson = 387,
CPED_CONFIG_FLAG_IsClimbingLadder = 388,
CPED_CONFIG_FLAG_HasBareFeet = 389,
CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
CPED_CONFIG_FLAG_ResetLastVehicleOnVehicleExit = 393,
CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
CPED_CONFIG_FLAG_ChangeFromPermanentToAmbientPopTypeOnMigration = 403,
CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
CPED_CONFIG_FLAG_UsingLowriderLeans = 405,
CPED_CONFIG_FLAG_UsingAlternateLowriderLeans = 406,
CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
CPED_CONFIG_FLAG_IsPerformingVehicleMelee = 420,
CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamage = 423,
CPED_CONFIG_FLAG_AllowBikeAlternateAnimations = 424,
CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamageNonSynced = 425,
CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
CPED_CONFIG_FLAG_DisableStartEngine = 429,
CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
CPED_CONFIG_FLAG_CreatedByConcealedPlayer = 439,
CPED_CONFIG_FLAG_PermanentlyDisablePotentialToBeWalkedIntoResponse = 440,
CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
CPED_CONFIG_FLAG_FiresDummyRockets = 449,
CPED_CONFIG_FLAG_PedIsArresting = 450,
CPED_CONFIG_FLAG_IsDecoyPed = 451,
CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
CPED_CONFIG_FLAG_HitByTranqWeapon = 455,
CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
CPED_CONFIG_FLAG_ForcedAimFromArrest = 457,
CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
_0x4376ABF2 = 459,
CPED_CONFIG_FLAG_RagdollFloatsIndefinitely = 460,
CPED_CONFIG_FLAG_BlockElectricWeaponDamage = 461,
_0x262A3B8E = 462,
_0x1AA79A25 = 463,
}
```

**This is the server-side RPC native equivalent of the client native [SET_PED_CONFIG_FLAG](?\_0x1913FE4CBF41C463).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `flagId` | `int` |
| `value` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_CONFIG_FLAG)

---
## SET_PED_DEFAULT_COMPONENT_VARIATION
**Hash:** `0xC866A984` | **Returns:** `void`
**Alt name:** `SetPedDefaultComponentVariation`

```
Sets Ped Default Clothes
```

**This is the server-side RPC native equivalent of the client native [SET_PED_DEFAULT_COMPONENT_VARIATION](?\_0x45EEE61580806D63).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_DEFAULT_COMPONENT_VARIATION)

---
## SET_PED_HAIR_TINT
**Hash:** `0xA23FE32C` | **Returns:** `void`
**Alt name:** `SetPedHairTint`

Sets the tint index for the hair on the specified ped.

```
NativeDB Introduced: v323
```

**This is the server-side RPC native equivalent of the client native [SET_PED_HAIR_TINT](?\_0x4CFFC65454C93A49).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `colorID` | `int` |
| `highlightColorID` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_HAIR_TINT)

---
## SET_PED_HEAD_BLEND_DATA
**Hash:** `0x60746B88` | **Returns:** `void`
**Alt name:** `SetPedHeadBlendData`

For more info and the list of faceIDs please refer to [this](https://gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained) topic. Note that the Skin and Shape IDs are shared. This native will use this same list for both Skin and Shape IDs.
**Other information:**
IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.
This native function is often called prior to calling natives such as:

*   [`SetPedHairColor`](#\_0xA23FE32C)
*   [`SetPedHeadOverlayColor`](#\_0x78935A27)
*   [`SetPedHeadOverlay`](#\_0xD28DBA90)
*   [`SetPedFaceFeature`](#\_0x6C8D4458)

**This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_BLEND_DATA](?\_0x9414E18B9434C2FE).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `shapeFirstID` | `int` |
| `shapeSecondID` | `int` |
| `shapeThirdID` | `int` |
| `skinFirstID` | `int` |
| `skinSecondID` | `int` |
| `skinThirdID` | `int` |
| `shapeMix` | `float` |
| `skinMix` | `float` |
| `thirdMix` | `float` |
| `isParent` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_HEAD_BLEND_DATA)

---
## SET_PED_HEAD_OVERLAY
**Hash:** `0xD28DBA90` | **Returns:** `void`
**Alt name:** `SetPedHeadOverlay`

```
OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
overlayID       Part                  Index, to disable
0               Blemishes             0 - 23, 255
1               Facial Hair           0 - 28, 255
2               Eyebrows              0 - 33, 255
3               Ageing                0 - 14, 255
4               Makeup                0 - 74, 255
5               Blush                 0 - 6, 255
6               Complexion            0 - 11, 255
7               Sun Damage            0 - 10, 255
8               Lipstick              0 - 9, 255
9               Moles/Freckles        0 - 17, 255
10              Chest Hair            0 - 16, 255
11              Body Blemishes        0 - 11, 255
12              Add Body Blemishes    0 - 1, 255
```

**Note:**
You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.

**This is the server-side RPC native equivalent of the client native [SET_PED_HEAD_OVERLAY](?\_0x48F44967FA05CC1E).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `overlayID` | `int` |
| `index` | `int` |
| `opacity` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_HEAD_OVERLAY)

---
## SET_PED_INTO_VEHICLE
**Hash:** `0x7500C79` | **Returns:** `void`
**Alt name:** `SetPedIntoVehicle`

SET_PED_INTO_VEHICLE

**This is the server-side RPC native equivalent of the client native [SET_PED_INTO_VEHICLE](?\_0xF75B0D629E1C063D).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `seatIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_INTO_VEHICLE)

---
## SET_PED_MELEE_COMBAT_LIMITS
**Hash:** `0x8E51EC29` | **Returns:** `void`
**Alt name:** `SetPedMeleeCombatLimits`

Override the limits on the number and types of melee combatants. The game is limited to at most ten combatants among the three types: primary, secondary, and observers.

This native infers the number of observers based on the primary and secondary counts.

**Parameters:**
| Name | Type |
|------|------|
| `primaryCount` | `int` |
| `secondaryCount` | `int` |
| `populationPedCount` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PED_MELEE_COMBAT_LIMITS)

---
## SET_PED_MODEL_HEALTH_CONFIG
**Hash:** `0xAF12A05D` | **Returns:** `void`
**Alt name:** `SetPedModelHealthConfig`

Sets a ped model's health config.
Takes effect only after setting player model with `SET_PLAYER_MODEL`.

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |
| `configName` | `char*` |

**Example:**
```lua
local pedModel = `mp_f_freemode_01`
SetPedModelHealthConfig(pedModel, "Strong")

SetPlayerModel(PlayerId(), pedModel)
SetPedDefaultComponentVariation(PlayerPedId())
```

[View docs](https://cfxnatives.dev/natives/SET_PED_MODEL_HEALTH_CONFIG)

---
## SET_PED_MODEL_PERSONALITY
**Hash:** `0x46F6B38B` | **Returns:** `void`
**Alt name:** `SetPedModelPersonality`

Overrides a ped model personality type.

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |
| `personalityHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_PED_MODEL_PERSONALITY)

---
## SET_PED_PROP_INDEX
**Hash:** `0x829F2E2` | **Returns:** `void`
**Alt name:** `SetPedPropIndex`

This native is used to set prop variation on a ped. Components, drawables and textures IDs are related to the ped model.

### MP Freemode list of props

**0**: Hats
**1**: Glasses
**2**: Ears
**6**: Watches
**7**: Bracelets
List of Prop IDs

```cpp
enum eAnchorPoints
{
ANCHOR_HEAD = 0, // "p_head"
ANCHOR_EYES = 1, // "p_eyes"
ANCHOR_EARS = 2, // "p_ears"
ANCHOR_MOUTH = 3, // "p_mouth"
ANCHOR_LEFT_HAND = 4, // "p_lhand"
ANCHOR_RIGHT_HAND = 5, // "p_rhand"
ANCHOR_LEFT_WRIST = 6, // "p_lwrist"
ANCHOR_RIGHT_WRIST = 7, // "p_rwrist"
ANCHOR_HIP = 8, // "p_lhip"
ANCHOR_LEFT_FOOT = 9, // "p_lfoot"
ANCHOR_RIGHT_FOOT = 10, // "p_rfoot"
ANCHOR_PH_L_HAND = 11, // "ph_lhand"
ANCHOR_PH_R_HAND = 12, // "ph_rhand"
NUM_ANCHORS = 13,
};
```

**This is the server-side RPC native equivalent of the client native [SET_PED_PROP_INDEX](?\_0x93376B65A266EB5F).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `componentId` | `int` |
| `drawableId` | `int` |
| `textureId` | `int` |
| `attach` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_PROP_INDEX)

---
## SET_PED_RANDOM_COMPONENT_VARIATION
**Hash:** `0x4111BA46` | **Returns:** `void`
**Alt name:** `SetPedRandomComponentVariation`

```
p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
```

**This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_COMPONENT_VARIATION](?\_0xC8A9481A01E63C28).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_RANDOM_COMPONENT_VARIATION)

---
## SET_PED_RANDOM_PROPS
**Hash:** `0xE3318E0E` | **Returns:** `void`
**Alt name:** `SetPedRandomProps`

SET_PED_RANDOM_PROPS

**This is the server-side RPC native equivalent of the client native [SET_PED_RANDOM_PROPS](?\_0xC44AA05345C992C6).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_RANDOM_PROPS)

---
## SET_PED_RESET_FLAG
**Hash:** `0xCFF6FF66` | **Returns:** `void`
**Alt name:** `SetPedResetFlag`

PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);
Known values:

**This is the server-side RPC native equivalent of the client native [SET_PED_RESET_FLAG](?\_0xC1E8A365BF3B29F2).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `flagId` | `int` |
| `doReset` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_RESET_FLAG)

---
## SET_PED_TO_RAGDOLL
**Hash:** `0x83CB5052` | **Returns:** `void`
**Alt name:** `SetPedToRagdoll`

p4/p5: Unusued in TU27

### Ragdoll Types

**0**: CTaskNMRelax
**1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
**Else**: CTaskNMBalance

**This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL](?\_0xAE99FB955581844A).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `minTime` | `int` |
| `maxTime` | `int` |
| `ragdollType` | `int` |
| `bAbortIfInjured` | `BOOL` |
| `bAbortIfDead` | `BOOL` |
| `bForceScriptControl` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_TO_RAGDOLL)

---
## SET_PED_TO_RAGDOLL_WITH_FALL
**Hash:** `0xFA12E286` | **Returns:** `void`
**Alt name:** `SetPedToRagdollWithFall`

```cpp
enum eNMFallType {
TYPE_FROM_HIGH = 0,
TYPE_OVER_WALL = 1,
TYPE_DOWN_STAIRS = 2,
TYPE_DIE_TYPES = 3,
TYPE_DIE_FROM_HIGH = 4,
TYPE_DIE_OVER_WALL = 5,
TYPE_DIE_DOWN_STAIRS = 6
}
```

```
Return variable is never used in R*'s scripts.
Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
x, y, and z are coordinates, most likely to where the ped will fall.
p7 is probably the force of the fall, but untested, so I left the variable name the same.
p8 to p13 are always 0f in R*'s scripts.
(Simplified) Example of the usage of the function from R*'s scripts:
ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);
```

**This is the server-side RPC native equivalent of the client native [SET_PED_TO_RAGDOLL_WITH_FALL](?\_0xD76632D99E4966C8).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `minTime` | `int` |
| `maxTime` | `int` |
| `nFallType` | `int` |
| `dirX` | `float` |
| `dirY` | `float` |
| `dirZ` | `float` |
| `fGroundHeight` | `float` |
| `grab1X` | `float` |
| `grab1Y` | `float` |
| `grab1Z` | `float` |
| `grab2X` | `float` |
| `grab2Y` | `float` |
| `grab2Z` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PED_TO_RAGDOLL_WITH_FALL)

---
## SET_PED_TURNING_THRESHOLDS
**Hash:** `0xB300F03` | **Returns:** `void`
**Alt name:** `SetPedTurningThresholds`

Purpose: The game's default values for these make shooting while traveling Left quite a bit slower than shooting while traveling right (This could be a game-balance thing?)

Default Min: -45 Degrees
Default Max: 135 Degrees

```
   \ ,- ~ ||~ - ,
, ' \    x   x    ' ,
```

,      \    x    x   x  ,
,         \  x     x      ,
,            \     x    x  ,
,              \      x    ,
,                \   x     ,
,                 \   x x ,
,                  \  x ,
,                 , '
' - , \_ \_ \_ ,  '  \\

If the transition angle is within the shaded portion (x), there will be no transition(Quicker)
The angle corresponds to where you are looking(North on the circle) vs. the heading of your Ped.
Note: For some reason,

You can set these values to whatever you'd like with this native, but keep in mind that the transitional spin is only clockwise for some reason.

I'd personally recommend something like -135/135

**Parameters:**
| Name | Type |
|------|------|
| `min` | `float` |
| `max` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PED_TURNING_THRESHOLDS)

---
## SET_PLAYER_CONTROL
**Hash:** `0xD17AFCD8` | **Returns:** `void`
**Alt name:** `SetPlayerControl`

```
Flags:
SPC_AMBIENT_SCRIPT = (1 << 1),
SPC_CLEAR_TASKS = (1 << 2),
SPC_REMOVE_FIRES = (1 << 3),
SPC_REMOVE_EXPLOSIONS = (1 << 4),
SPC_REMOVE_PROJECTILES = (1 << 5),
SPC_DEACTIVATE_GADGETS = (1 << 6),
SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
SPC_ALLOW_PAD_SHAKE = (1 << 12)
See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
```

**This is the server-side RPC native equivalent of the client native [SET_PLAYER_CONTROL](?\_0x8D32347D6D4C40A2).**

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `bHasControl` | `BOOL` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PLAYER_CONTROL)

---
## SET_PLAYER_CULLING_RADIUS
**Hash:** `0x8A2FBAD4` | **Returns:** `void`
**Alt name:** `SetPlayerCullingRadius`

Sets the culling radius for the specified player.
Set to `0.0` to reset.

**WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_CULLING_RADIUS)

---
## SET_PLAYER_INVINCIBLE
**Hash:** `0xDFB9A2A2` | **Returns:** `void`
**Alt name:** `SetPlayerInvincible`

Make the player impervious to all forms of damage.

**This is the server-side RPC native equivalent of the client native [SET_PLAYER_INVINCIBLE](?\_0x239528EACDC3E7DE).**

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `bInvincible` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PLAYER_INVINCIBLE)

---
## SET_PLAYER_KILL_FALL_HEIGHT
**Hash:** `0x86BD5722` | **Returns:** `void`
**Alt name:** `SetPlayerKillFallHeight`

A setter for [GET_PLAYER_KILL_FALL_HEIGHT](#\_0x13BC2C63).

**Parameters:**
| Name | Type |
|------|------|
| `height` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_KILL_FALL_HEIGHT)

---
## SET_PLAYER_MAX_STAMINA
**Hash:** `0x35594F67` | **Returns:** `bool`
**Alt name:** `SetPlayerMaxStamina`

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |
| `maxStamina` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_MAX_STAMINA)

---
## SET_PLAYER_MODEL
**Hash:** `0x774A4C54` | **Returns:** `void`
**Alt name:** `SetPlayerModel`

Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
As per usual, make sure to request the model first and wait until it has loaded.

**This is the server-side RPC native equivalent of the client native [SET_PLAYER_MODEL](?\_0x00A1CADD00108836).**

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `model` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PLAYER_MODEL)

---
## SET_PLAYER_ROUTING_BUCKET
**Hash:** `0x6504EB38` | **Returns:** `void`
**Alt name:** `SetPlayerRoutingBucket`

Sets the routing bucket for the specified player.

Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `bucket` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_ROUTING_BUCKET)

---
## SET_PLAYER_STAMINA
**Hash:** `0xA9EC16C7` | **Returns:** `bool`
**Alt name:** `SetPlayerStamina`

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |
| `stamina` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_STAMINA)

---
## SET_PLAYER_TALKING_OVERRIDE
**Hash:** `0xFC02CAF6` | **Returns:** `void`
**Alt name:** `SetPlayerTalkingOverride`

the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
This function doesn't need to be called every frame, it works like a switcher.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_TALKING_OVERRIDE)

---
## SET_PLAYER_WANTED_LEVEL
**Hash:** `0xB7A0914B` | **Returns:** `void`
**Alt name:** `SetPlayerWantedLevel`

SET_PLAYER_WANTED_LEVEL

**This is the server-side RPC native equivalent of the client native [SET_PLAYER_WANTED_LEVEL](?\_0x39FF19C64EF7DA5B).**

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `wantedLevel` | `int` |
| `delayedResponse` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_PLAYER_WANTED_LEVEL)

---
## SET_REACTION_TO_VEHICLE_SIREN_DISABLED
**Hash:** `0x8C3EC64F` | **Returns:** `void`
**Alt name:** `SetReactionToVehicleSirenDisabled`

This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_REACTION_TO_VEHICLE_SIREN_DISABLED)

---
## SET_RESOURCE_KVP
**Hash:** `0x21C7A35B` | **Returns:** `void`
**Alt name:** `SetResourceKvp`

A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |
| `value` | `char*` |

**Example:**
```lua
SetResourceKvp('mollis', 'vesuvius citrate')
```

[View docs](https://cfxnatives.dev/natives/SET_RESOURCE_KVP)

---
## SET_RESOURCE_KVP_FLOAT
**Hash:** `0x9ADD2938` | **Returns:** `void`
**Alt name:** `SetResourceKvpFloat`

A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |
| `value` | `float` |

**Example:**
```lua
local lickMy = 42.5
SetResourceKvpFloat('bananabread', lickMy)
```

[View docs](https://cfxnatives.dev/natives/SET_RESOURCE_KVP_FLOAT)

---
## SET_RESOURCE_KVP_FLOAT_NO_SYNC
**Hash:** `0x3517BFBE` | **Returns:** `void`
**Alt name:** `SetResourceKvpFloatNoSync`

Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_RESOURCE_KVP_FLOAT_NO_SYNC)

---
## SET_RESOURCE_KVP_INT
**Hash:** `0x6A2B1E8` | **Returns:** `void`
**Alt name:** `SetResourceKvpInt`

A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |
| `value` | `int` |

**Example:**
```lua
local lickMy = 42
SetResourceKvp('bananabread', lickMy)
```

[View docs](https://cfxnatives.dev/natives/SET_RESOURCE_KVP_INT)

---
## SET_RESOURCE_KVP_INT_NO_SYNC
**Hash:** `0x26AEB707` | **Returns:** `void`
**Alt name:** `SetResourceKvpIntNoSync`

Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_RESOURCE_KVP_INT_NO_SYNC)

---
## SET_RESOURCE_KVP_NO_SYNC
**Hash:** `0xCF9A2FF` | **Returns:** `void`
**Alt name:** `SetResourceKvpNoSync`

Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).

**Parameters:**
| Name | Type |
|------|------|
| `key` | `char*` |
| `value` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_RESOURCE_KVP_NO_SYNC)

---
## SET_RICH_PRESENCE
**Hash:** `0x7BDCBD45` | **Returns:** `void`
**Alt name:** `SetRichPresence`

Sets the player's rich presence detail state for social platform providers to a specified string.

**Parameters:**
| Name | Type |
|------|------|
| `presenceState` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_RICH_PRESENCE)

---
## SET_ROPE_LENGTH_CHANGE_RATE
**Hash:** `0x69B680A7` | **Returns:** `void`
**Alt name:** `SetRopeLengthChangeRate`

Set's the ropes length change rate, which is the speed that rope should wind if started.

**Parameters:**
| Name | Type |
|------|------|
| `rope` | `int` |
| `lengthChangeRate` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_ROPE_LENGTH_CHANGE_RATE)

---
## SET_ROPES_CREATE_NETWORK_WORLD_STATE
**Hash:** `0xE62FC73` | **Returns:** `void`
**Alt name:** `SetRopesCreateNetworkWorldState`

Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.

**Parameters:**
| Name | Type |
|------|------|
| `shouldCreate` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ROPES_CREATE_NETWORK_WORLD_STATE)

---
## SET_ROUTING_BUCKET_ENTITY_LOCKDOWN_MODE
**Hash:** `0xA0F2201F` | **Returns:** `void`
**Alt name:** `SetRoutingBucketEntityLockdownMode`

Sets the entity lockdown mode for a specific routing bucket.

Lockdown modes are:

| Mode       | Meaning                                                    |
| ---------- | ---------------------------------------------------------- |
| `strict`   | No entities can be created by clients at all.              |
| `relaxed`  | Only script-owned entities created by clients are blocked. |
| `inactive` | Clients can create any entity they want.                   |

**Parameters:**
| Name | Type |
|------|------|
| `bucketId` | `int` |
| `mode` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_ROUTING_BUCKET_ENTITY_LOCKDOWN_MODE)

---
## SET_ROUTING_BUCKET_POPULATION_ENABLED
**Hash:** `0xCE51AC2C` | **Returns:** `void`
**Alt name:** `SetRoutingBucketPopulationEnabled`

Sets whether or not the specified routing bucket has automatically-created population enabled.

**Parameters:**
| Name | Type |
|------|------|
| `bucketId` | `int` |
| `mode` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ROUTING_BUCKET_POPULATION_ENABLED)

---
## SET_RUNTIME_TEXTURE_ARGB_DATA
**Hash:** `0x3963D527` | **Returns:** `BOOL`
**Alt name:** `SetRuntimeTextureArgbData`

**Parameters:**
| Name | Type |
|------|------|
| `tex` | `long` |
| `buffer` | `char*` |
| `length` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_RUNTIME_TEXTURE_ARGB_DATA)

---
## SET_RUNTIME_TEXTURE_IMAGE
**Hash:** `0x28FC4ECB` | **Returns:** `BOOL`
**Alt name:** `SetRuntimeTextureImage`

Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.

If the bitmap is a different size compared to the existing texture, it will be resampled.

This command may end up executed asynchronously, and only update the texture data at a later time.

**Parameters:**
| Name | Type |
|------|------|
| `tex` | `long` |
| `fileName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_RUNTIME_TEXTURE_IMAGE)

---
## SET_RUNTIME_TEXTURE_PIXEL
**Hash:** `0xAB65ACEE` | **Returns:** `void`
**Alt name:** `SetRuntimeTexturePixel`

Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.

**Parameters:**
| Name | Type |
|------|------|
| `tex` | `long` |
| `x` | `int` |
| `y` | `int` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `a` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_RUNTIME_TEXTURE_PIXEL)

---
## SET_SNAKEOIL_FOR_ENTRY
**Hash:** `0xA7DD3209` | **Returns:** `void`
**Alt name:** `SetSnakeoilForEntry`

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `path` | `char*` |
| `data` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_SNAKEOIL_FOR_ENTRY)

---
## SET_STATE_BAG_VALUE
**Hash:** `0x8D50E33A` | **Returns:** `void`
**Alt name:** `SetStateBagValue`

Internal function for setting a state bag value.

**Parameters:**
| Name | Type |
|------|------|
| `bagName` | `char*` |
| `keyName` | `char*` |
| `valueData` | `char*` |
| `valueLength` | `int` |
| `replicated` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_STATE_BAG_VALUE)

---
## SET_TEXT_CHAT_ENABLED
**Hash:** `0x97B2F9F8` | **Returns:** `BOOL`
**Alt name:** `SetTextChatEnabled`

**Parameters:**
| Name | Type |
|------|------|
| `enabled` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_TEXT_CHAT_ENABLED)

---
## SET_TEXT_FONT_FOR_CURRENT_COMMAND
**Hash:** `0xADA9255D` | **Returns:** `void`
**Alt name:** `SetTextFontForCurrentCommand`

Sets the text font for the current text drawing command.

**Parameters:**
| Name | Type |
|------|------|
| `fontId` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_TEXT_FONT_FOR_CURRENT_COMMAND)

---
## SET_TEXT_JUSTIFICATION
**Hash:** `0x68CDFA60` | **Returns:** `void`
**Alt name:** `SetTextJustification`

**Parameters:**
| Name | Type |
|------|------|
| `justifyType` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_TEXT_JUSTIFICATION)

---
## SET_TEXT_WRAP
**Hash:** `0x6F60AB54` | **Returns:** `void`
**Alt name:** `SetTextWrap`

**Parameters:**
| Name | Type |
|------|------|
| `start` | `float` |
| `end` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_TEXT_WRAP)

---
## SET_TIMECYCLE_MODIFIER_VAR
**Hash:** `0x6E0A422B` | **Returns:** `void`
**Alt name:** `SetTimecycleModifierVar`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |
| `varName` | `char*` |
| `value1` | `float` |
| `value2` | `float` |

**Example:**
```lua
local modifierName = "superDARK"
local varName = "postfx_noise"

if DoesTimecycleModifierHasVar(modifierName, varName) then
  local success, value1, value2 = GetTimecycleModifierVar(modifierName, varName)

  if success then
    print(string.format("[%s] removed var %s with values: %f %f", modifierName, varName, value1, value2))
    RemoveTimecycleModifierVar(modifierName, varName)
  end
else
    SetTimecycleModifierVar(modifierName, varName, 1.0, 1.0)
    print(string.format("[%s] created var %s", modifierName, varName))
end
```

[View docs](https://cfxnatives.dev/natives/SET_TIMECYCLE_MODIFIER_VAR)

---
## SET_TRACK_BRAKING_DISTANCE
**Hash:** `0x77EB78D0` | **Returns:** `void`
**Alt name:** `SetTrackBrakingDistance`

Sets the braking distance of the track. Used by trains to determine the point to slow down when entering a station.

**Parameters:**
| Name | Type |
|------|------|
| `track` | `int` |
| `brakingDistance` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_TRACK_BRAKING_DISTANCE)

---
## SET_TRACK_ENABLED
**Hash:** `0x4B41E84C` | **Returns:** `void`
**Alt name:** `SetTrackEnabled`

Toggles the track being active. If disabled mission trains will not be able to spawn on this track and will look for the next closest track to spawn

**Parameters:**
| Name | Type |
|------|------|
| `track` | `int` |
| `enabled` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_TRACK_ENABLED)

---
## SET_TRACK_JUNCTION_ACTIVE
**Hash:** `0x537B449D` | **Returns:** `bool`
**Alt name:** `SetTrackJunctionActive`

Sets the state of a track junction.

**Parameters:**
| Name | Type |
|------|------|
| `junctionIndex` | `int` |
| `state` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_TRACK_JUNCTION_ACTIVE)

---
## SET_TRACK_MAX_SPEED
**Hash:** `0x37BFC732` | **Returns:** `void`
**Alt name:** `SetTrackMaxSpeed`

Sets the max speed for the train tracks. Used by ambient trains and for station calculations

**Parameters:**
| Name | Type |
|------|------|
| `track` | `int` |
| `newSpeed` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_TRACK_MAX_SPEED)

---
## SET_TRAIN_DOOR_OPEN_RATIO
**Hash:** `0x2468DBE8` | **Returns:** `void`
**Alt name:** `SetTrainDoorOpenRatio`

Sets the ratio that a door is open for on a train.

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |
| `doorIndex` | `int` |
| `ratio` | `float` |

**Example:**
```lua
-- open all doors on a train
local doorCount = GetTrainDoorCount(train)
for doorIndex = 0, doorCount - 1 do
    SetTrainDoorOpenRatio(train, doorIndex, 1.0)
end
```

[View docs](https://cfxnatives.dev/natives/SET_TRAIN_DOOR_OPEN_RATIO)

---
## SET_TRAIN_STATE
**Hash:** `0x61CB74A0` | **Returns:** `void`
**Alt name:** `SetTrainState`

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |
| `state` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_TRAIN_STATE)

---
## SET_TRAIN_STOP_AT_STATIONS
**Hash:** `0xECB8B577` | **Returns:** `void`
**Alt name:** `SetTrainStopAtStations`

Toggles a train's ability to stop at stations

**Parameters:**
| Name | Type |
|------|------|
| `train` | `Vehicle` |
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_TRAIN_STOP_AT_STATIONS)

---
## SET_TRAINS_FORCE_DOORS_OPEN
**Hash:** `0xD4D1BA63` | **Returns:** `void`
**Alt name:** `SetTrainsForceDoorsOpen`

Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.

**Parameters:**
| Name | Type |
|------|------|
| `forceOpen` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_TRAINS_FORCE_DOORS_OPEN)

---
## SET_VEHICLE_ALARM
**Hash:** `0x24877D84` | **Returns:** `void`
**Alt name:** `SetVehicleAlarm`

SET_VEHICLE_ALARM

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_ALARM](?\_0xCDE5E70C1DDB954C).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_ALARM)

---
## SET_VEHICLE_ALARM_TIME_LEFT
**Hash:** `0xC108EE6F` | **Returns:** `void`
**Alt name:** `SetVehicleAlarmTimeLeft`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `time` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_ALARM_TIME_LEFT)

---
## SET_VEHICLE_AUTO_REPAIR_DISABLED
**Hash:** `0x5F3A3574` | **Returns:** `void`
**Alt name:** `SetVehicleAutoRepairDisabled`

Disables the vehicle from being repaired when a vehicle extra is enabled.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `value` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_AUTO_REPAIR_DISABLED)

---
## SET_VEHICLE_BODY_HEALTH
**Hash:** `0x920C2517` | **Returns:** `void`
**Alt name:** `SetVehicleBodyHealth`

```
p2 often set to 1000.0 in the decompiled scripts.
```

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_BODY_HEALTH](?\_0xB77D05AC8C78AADB).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_BODY_HEALTH)

---
## SET_VEHICLE_CLUTCH
**Hash:** `0x2F70ACED` | **Returns:** `void`
**Alt name:** `SetVehicleClutch`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `clutch` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_CLUTCH)

---
## SET_VEHICLE_COLOUR_COMBINATION
**Hash:** `0xA557AEAD` | **Returns:** `void`
**Alt name:** `SetVehicleColourCombination`

Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOUR_COMBINATION](?\_0x33E8CD3322E2FE31).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `colorCombination` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_COLOUR_COMBINATION)

---
## SET_VEHICLE_COLOURS
**Hash:** `0x57F24253` | **Returns:** `void`
**Alt name:** `SetVehicleColours`

colorPrimary & colorSecondary are the paint indexes for the vehicle.
For a list of valid paint indexes, view: pastebin.com/pwHci0xK

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_COLOURS](?\_0x4F1D4BE3A7F24601).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `colorPrimary` | `int` |
| `colorSecondary` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_COLOURS)

---
## SET_VEHICLE_CURRENT_GEAR
**Hash:** `0x8923DD42` | **Returns:** `void`
**Alt name:** `SetVehicleCurrentGear`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `gear` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_CURRENT_GEAR)

---
## SET_VEHICLE_CURRENT_RPM
**Hash:** `0x2A01A8FC` | **Returns:** `void`
**Alt name:** `SetVehicleCurrentRpm`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `rpm` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_CURRENT_RPM)

---
## SET_VEHICLE_CUSTOM_PRIMARY_COLOUR
**Hash:** `0x8DF9F9BC` | **Returns:** `void`
**Alt name:** `SetVehicleCustomPrimaryColour`

```
p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
```

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_PRIMARY_COLOUR](?\_0x7141766F91D15BEA).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_CUSTOM_PRIMARY_COLOUR)

---
## SET_VEHICLE_CUSTOM_SECONDARY_COLOUR
**Hash:** `0x9D77259E` | **Returns:** `void`
**Alt name:** `SetVehicleCustomSecondaryColour`

```
p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
```

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_CUSTOM_SECONDARY_COLOUR](?\_0x36CED73BFED89754).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_CUSTOM_SECONDARY_COLOUR)

---
## SET_VEHICLE_DIRT_LEVEL
**Hash:** `0x2B39128B` | **Returns:** `void`
**Alt name:** `SetVehicleDirtLevel`

Sets the dirt level of the passed vehicle.

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DIRT_LEVEL](?\_0x79D3B596FE44EE8B).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `dirtLevel` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_DIRT_LEVEL)

---
## SET_VEHICLE_DOOR_BROKEN
**Hash:** `0x8147FEA7` | **Returns:** `void`
**Alt name:** `SetVehicleDoorBroken`

See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOOR_BROKEN](?\_0xD4D4F6A4AB575A33).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `doorIndex` | `int` |
| `deleteDoor` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_DOOR_BROKEN)

---
## SET_VEHICLE_DOORS_LOCKED
**Hash:** `0x4CDD35D0` | **Returns:** `void`
**Alt name:** `SetVehicleDoorsLocked`

Locks the doors of a specified vehicle to a defined lock state, affecting how players and NPCs can interact with the vehicle.

```
NativeDB Introduced: v323
```

```cpp
enum eVehicleLockState {
// No specific lock state, vehicle behaves according to the game's default settings.
VEHICLELOCK_NONE = 0,
// Vehicle is fully unlocked, allowing free entry by players and NPCs.
VEHICLELOCK_UNLOCKED = 1,
// Vehicle is locked, preventing entry by players and NPCs.
VEHICLELOCK_LOCKED = 2,
// Vehicle locks out only players, allowing NPCs to enter.
VEHICLELOCK_LOCKOUT_PLAYER_ONLY = 3,
// Vehicle is locked once a player enters, preventing others from entering.
VEHICLELOCK_LOCKED_PLAYER_INSIDE = 4,
// Vehicle starts in a locked state, but may be unlocked through game events.
VEHICLELOCK_LOCKED_INITIALLY = 5,
// Forces the vehicle's doors to shut and lock.
VEHICLELOCK_FORCE_SHUT_DOORS = 6,
// Vehicle is locked but can still be damaged.
VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7,
// Vehicle is locked, but its trunk/boot remains unlocked.
VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED = 8,
// Vehicle is locked and does not allow passengers, except for the driver.
VEHICLELOCK_LOCKED_NO_PASSENGERS = 9,
// Vehicle is completely locked, preventing entry entirely, even if previously inside.
VEHICLELOCK_CANNOT_ENTER = 10
};
```

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_DOORS_LOCKED](?\_0xB664292EAECF7FA6).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `doorLockStatus` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_DOORS_LOCKED)

---
## SET_VEHICLE_ENGINE_TEMPERATURE
**Hash:** `0x6C93C4A9` | **Returns:** `void`
**Alt name:** `SetVehicleEngineTemperature`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `temperature` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_ENGINE_TEMPERATURE)

---
## SET_VEHICLE_FLAG
**Hash:** `0x63AE1A34` | **Returns:** `bool`
**Alt name:** `SetVehicleFlag`

This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#\_0xD85C9F57).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `flagIndex` | `int` |
| `value` | `bool` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_FLAG)

---
## SET_VEHICLE_FUEL_LEVEL
**Hash:** `0xBA970511` | **Returns:** `void`
**Alt name:** `SetVehicleFuelLevel`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `level` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_FUEL_LEVEL)

---
## SET_VEHICLE_GEAR_RATIO
**Hash:** `0x496EF2F2` | **Returns:** `void`
**Alt name:** `SetVehicleGearRatio`

Sets the vehicles gear ratio on choosen gear, reverse gear needs to be a negative float and forward moving gear needs to be a positive float. Refer to the examples if confused.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `gear` | `int` |
| `ratio` | `float` |

**Example:**
```lua
local function Set8SpeedVehicleGears(Vehicle)
    SetVehicleGearRatio(Vehicle, 0, -3.32)  -- reverse gear at -3.21:1
    SetVehicleGearRatio(Vehicle, 1, 4.71)   -- 1st gear at 4.71:1
    SetVehicleGearRatio(Vehicle, 2, 3.14)   -- 2nd gear at 3.14:1
    SetVehicleGearRatio(Vehicle, 3, 2.11)   -- 3rd gear at 2.11:1
    SetVehicleGearRatio(Vehicle, 4, 1.67)   -- 4th gear at 1.67:1
    SetVehicleGearRatio(Vehicle, 5, 1.29)   -- 5th gear at 1.29:1
    SetVehicleGearRatio(Vehicle, 6, 1.0)    -- 6th gear at 1.0:1
    SetVehicleGearRatio(Vehicle, 7, 0.84)   -- 7th gear at 0.84:1
    SetVehicleGearRatio(Vehicle, 8, 0.67)   -- 8th gear at 0.67:1
end
```

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_GEAR_RATIO)

---
## SET_VEHICLE_GRAVITY_AMOUNT
**Hash:** `0x1A963E58` | **Returns:** `void`
**Alt name:** `SetVehicleGravityAmount`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `gravity` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_GRAVITY_AMOUNT)

---
## SET_VEHICLE_HANDLING_FIELD
**Hash:** `0x2BA40795` | **Returns:** `void`
**Alt name:** `SetVehicleHandlingField`

Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `class_` | `char*` |
| `fieldName` | `char*` |
| `value` | `Any` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_HANDLING_FIELD)

---
## SET_VEHICLE_HANDLING_FLOAT
**Hash:** `0x488C86D2` | **Returns:** `void`
**Alt name:** `SetVehicleHandlingFloat`

Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `class_` | `char*` |
| `fieldName` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_HANDLING_FLOAT)

---
## SET_VEHICLE_HANDLING_INT
**Hash:** `0xC37F4CF9` | **Returns:** `void`
**Alt name:** `SetVehicleHandlingInt`

Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `class_` | `char*` |
| `fieldName` | `char*` |
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_HANDLING_INT)

---
## SET_VEHICLE_HANDLING_VECTOR
**Hash:** `0x12497890` | **Returns:** `void`
**Alt name:** `SetVehicleHandlingVector`

Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `class_` | `char*` |
| `fieldName` | `char*` |
| `value` | `Vector3` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_HANDLING_VECTOR)

---
## SET_VEHICLE_HIGH_GEAR
**Hash:** `0x20B1B3E6` | **Returns:** `void`
**Alt name:** `SetVehicleHighGear`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `gear` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_HIGH_GEAR)

---
## SET_VEHICLE_NEXT_GEAR
**Hash:** `0x3A4566F4` | **Returns:** `void`
**Alt name:** `SetVehicleNextGear`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `nextGear` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_NEXT_GEAR)

---
## SET_VEHICLE_NITRO_PTFX_RANGE
**Hash:** `0xA40CB822` | **Returns:** `void`
**Alt name:** `SetVehicleNitroPtfxRange`

Sets the maximum distance in which [\_SET_VEHICLE_NITRO_ENABLED](#\_0xC8E9B6B71B8E660D) PTFX are rendered. Distance is measured from the camera position.

**Parameters:**
| Name | Type |
|------|------|
| `range` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_NITRO_PTFX_RANGE)

---
## SET_VEHICLE_NUMBER_PLATE_TEXT
**Hash:** `0x400F9556` | **Returns:** `void`
**Alt name:** `SetVehicleNumberPlateText`

SET_VEHICLE_NUMBER_PLATE_TEXT

**This is the server-side RPC native equivalent of the client native [SET_VEHICLE_NUMBER_PLATE_TEXT](?\_0x95A88F0B409CDA47).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `plateText` | `char*` |

[View docs](https://cfxnatives.dev/natives/CFX~SET_VEHICLE_NUMBER_PLATE_TEXT)

---
## SET_VEHICLE_OIL_LEVEL
**Hash:** `0x90D1CAD1` | **Returns:** `void`
**Alt name:** `SetVehicleOilLevel`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `level` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_OIL_LEVEL)

---
## SET_VEHICLE_PITCH_BIAS
**Hash:** `0x2A6CC9F2` | **Returns:** `void`
**Alt name:** `SetVehiclePitchBias`

Set the vehicle's pitch bias. Only works on planes.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_PITCH_BIAS)

---
## SET_VEHICLE_ROLL_BIAS
**Hash:** `0x264B45DE` | **Returns:** `void`
**Alt name:** `SetVehicleRollBias`

Set the vehicle's roll bias. Only works on planes.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_ROLL_BIAS)

---
## SET_VEHICLE_STEERING_ANGLE
**Hash:** `0xFFCCC2EA` | **Returns:** `void`
**Alt name:** `SetVehicleSteeringAngle`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `angle` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_STEERING_ANGLE)

---
## SET_VEHICLE_STEERING_SCALE
**Hash:** `0xEB46596F` | **Returns:** `void`
**Alt name:** `SetVehicleSteeringScale`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `scale` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_STEERING_SCALE)

---
## SET_VEHICLE_SUSPENSION_HEIGHT
**Hash:** `0xB3439A01` | **Returns:** `void`
**Alt name:** `SetVehicleSuspensionHeight`

Sets the height of the vehicle's suspension.
This changes the same value set by Suspension in the mod shop.
Negatives values raise the car. Positive values lower the car.

This is change is visual only. The collision of the vehicle will not move.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `newHeight` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_SUSPENSION_HEIGHT)

---
## SET_VEHICLE_TURBO_PRESSURE
**Hash:** `0x6485615E` | **Returns:** `void`
**Alt name:** `SetVehicleTurboPressure`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `pressure` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_TURBO_PRESSURE)

---
## SET_VEHICLE_WHEEL_BRAKE_PRESSURE
**Hash:** `0xE80F4E31` | **Returns:** `void`
**Alt name:** `SetVehicleWheelBrakePressure`

Sets brake pressure of a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
Normal values around 1.0f

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `pressure` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_BRAKE_PRESSURE)

---
## SET_VEHICLE_WHEEL_FLAGS
**Hash:** `0xD2B9E90D` | **Returns:** `void`
**Alt name:** `SetVehicleWheelFlags`

Sets the flags of a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_FLAGS)

---
## SET_VEHICLE_WHEEL_HEALTH
**Hash:** `0xB22ECEFD` | **Returns:** `void`
**Alt name:** `SetVehicleWheelHealth`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `health` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_HEALTH)

---
## SET_VEHICLE_WHEEL_IS_POWERED
**Hash:** `0xBD5291A0` | **Returns:** `void`
**Alt name:** `SetVehicleWheelIsPowered`

Sets whether the wheel is powered.
On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `powered` | `BOOL` |

**Example:**
```lua
SetVehicleWheelIsPowered(vehicle, 0, true);
```

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_IS_POWERED)

---
## SET_VEHICLE_WHEEL_POWER
**Hash:** `0xC6146043` | **Returns:** `void`
**Alt name:** `SetVehicleWheelPower`

Sets power being sent to a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `power` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_POWER)

---
## SET_VEHICLE_WHEEL_RIM_COLLIDER_SIZE
**Hash:** `0xF380E184` | **Returns:** `void`
**Alt name:** `SetVehicleWheelRimColliderSize`

Not sure what this changes, probably determines physical rim size in case the tire is blown.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_RIM_COLLIDER_SIZE)

---
## SET_VEHICLE_WHEEL_ROTATION_SPEED
**Hash:** `0x35ED100D` | **Returns:** `void`
**Alt name:** `SetVehicleWheelRotationSpeed`

Sets the rotation speed of a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `speed` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_ROTATION_SPEED)

---
## SET_VEHICLE_WHEEL_SIZE
**Hash:** `0x53AB5C35` | **Returns:** `BOOL`
**Alt name:** `SetVehicleWheelSize`

Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels.
Returns whether change was successful (can be false if trying to set size for non-default wheels).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `size` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_SIZE)

---
## SET_VEHICLE_WHEEL_TIRE_COLLIDER_SIZE
**Hash:** `0xB962D05C` | **Returns:** `void`
**Alt name:** `SetVehicleWheelTireColliderSize`

Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_TIRE_COLLIDER_SIZE)

---
## SET_VEHICLE_WHEEL_TIRE_COLLIDER_WIDTH
**Hash:** `0x47BD0270` | **Returns:** `void`
**Alt name:** `SetVehicleWheelTireColliderWidth`

Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_TIRE_COLLIDER_WIDTH)

---
## SET_VEHICLE_WHEEL_TRACTION_VECTOR_LENGTH
**Hash:** `0x85C85A3A` | **Returns:** `void`
**Alt name:** `SetVehicleWheelTractionVectorLength`

Sets the traction vector length of a wheel.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `length` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_TRACTION_VECTOR_LENGTH)

---
## SET_VEHICLE_WHEEL_WIDTH
**Hash:** `0x64C3F1C0` | **Returns:** `BOOL`
**Alt name:** `SetVehicleWheelWidth`

Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels.
Returns whether change was successful (can be false if trying to set width for non-default wheels).

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `width` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_WIDTH)

---
## SET_VEHICLE_WHEEL_X_OFFSET
**Hash:** `0xBD6357D` | **Returns:** `void`
**Alt name:** `SetVehicleWheelXOffset`

Adjusts the offset of the specified wheel relative to the wheel's axle center.
Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
This function can be especially useful to set the track width of a vehicle, for example:

```
function SetVehicleFrontTrackWidth(vehicle, width)
SetVehicleWheelXOffset(vehicle, 0, -width/2)
SetVehicleWheelXOffset(vehicle, 1, width/2)
end
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `offset` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_X_OFFSET)

---
## SET_VEHICLE_WHEEL_Y_ROTATION
**Hash:** `0xC6C2171F` | **Returns:** `void`
**Alt name:** `SetVehicleWheelYRotation`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `wheelIndex` | `int` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEEL_Y_ROTATION)

---
## SET_VEHICLE_WHEELIE_STATE
**Hash:** `0xEAB8DB65` | **Returns:** `void`
**Alt name:** `SetVehicleWheelieState`

Example script: https://pastebin.com/J6XGbkCW

List of known states:

```
1: Not wheeling.
65: Vehicle is ready to do wheelie (burnouting).
129: Vehicle is doing wheelie.
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `state` | `int` |

**Example:**
```lua
Citizen.CreateThread(function()
  while true do
    Wait(1)

    local ped = PlayerPedId()
    local veh = GetVehiclePedIsUsing(ped)

    if veh ~= 0 then
      -- is vehicle a musclecar
      if GetVehicleClass(veh) == 4 then
        -- is ped a driver
        if GetPedInVehicleSeat(veh, -1) == ped then
          -- don't let vehicle to do wheelie
          SetVehicleWheelieState(veh, 1)
        end
      end
    end
  end
end)
```

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_WHEELIE_STATE)

---
## SET_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR
**Hash:** `0x1683E7F0` | **Returns:** `void`
**Alt name:** `SetVehicleXenonLightsCustomColor`

Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |

**Example:**
```lua
local vehicle = GetVehiclePedIsUsing(PlayerPedId())
if DoesEntityExist(vehicle) then
  -- Toggle xenon lights mod.
  ToggleVehicleMod(vehicle, 22, true)

  -- Set pink lights color.
  SetVehicleXenonLightsCustomColor(vehicle, 244, 5, 82)
end
```

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_XENON_LIGHTS_CUSTOM_COLOR)

---
## SET_VEHICLE_XMAS_SNOW_FACTOR
**Hash:** `0x80CC4C9E` | **Returns:** `void`
**Alt name:** `SetVehicleXmasSnowFactor`

**Parameters:**
| Name | Type |
|------|------|
| `gripFactor` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VEHICLE_XMAS_SNOW_FACTOR)

---
## SET_VISUAL_SETTING_FLOAT
**Hash:** `0xD1D31681` | **Returns:** `void`
**Alt name:** `SetVisualSettingFloat`

Overrides a floating point value from `visualsettings.dat` temporarily.

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_VISUAL_SETTING_FLOAT)

---
## SET_WATER_AREA_CLIP_RECT
**Hash:** `0x9FCD2EE6` | **Returns:** `void`
**Alt name:** `SetWaterAreaClipRect`

Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)
Used internally by LOAD_GLOBAL_WATER_FILE

**Parameters:**
| Name | Type |
|------|------|
| `minX` | `int` |
| `minY` | `int` |
| `maxX` | `int` |
| `maxY` | `int` |

**Example:**
```lua
SetWaterAreaClipRect(-4000, -4000, 4500, 8000)
```

[View docs](https://cfxnatives.dev/natives/SET_WATER_AREA_CLIP_RECT)

---
## SET_WATER_QUAD_ALPHA
**Hash:** `0xF49797EB` | **Returns:** `BOOL`
**Alt name:** `SetWaterQuadAlpha`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `a0` | `int` |
| `a1` | `int` |
| `a2` | `int` |
| `a3` | `int` |

**Example:**
```lua
local success = SetWaterQuadAlpha(0, 5, 5, 5, 5)
```

[View docs](https://cfxnatives.dev/natives/SET_WATER_QUAD_ALPHA)

---
## SET_WATER_QUAD_BOUNDS
**Hash:** `0x80AD144C` | **Returns:** `BOOL`
**Alt name:** `SetWaterQuadBounds`

This native allows you to update the bounds of a specified water quad index.

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `minX` | `int` |
| `minY` | `int` |
| `maxX` | `int` |
| `maxY` | `int` |

**Example:**
```lua
local success = SetWaterQuadBounds(0, -5000.0, -5000.0, 5000.0, 5000.0)
```

[View docs](https://cfxnatives.dev/natives/SET_WATER_QUAD_BOUNDS)

---
## SET_WATER_QUAD_HAS_LIMITED_DEPTH
**Hash:** `0xD1FDCFC1` | **Returns:** `BOOL`
**Alt name:** `SetWaterQuadHasLimitedDepth`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `hasLimitedDepth` | `BOOL` |

**Example:**
```lua
local success = SetWaterQuadHasLimitedDepth(0, true)
```

[View docs](https://cfxnatives.dev/natives/SET_WATER_QUAD_HAS_LIMITED_DEPTH)

---
## SET_WATER_QUAD_IS_INVISIBLE
**Hash:** `0xA387D917` | **Returns:** `BOOL`
**Alt name:** `SetWaterQuadIsInvisible`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `isInvisible` | `BOOL` |

**Example:**
```lua
local success = SetWaterQuadIsInvisible(0, true)
```

[View docs](https://cfxnatives.dev/natives/SET_WATER_QUAD_IS_INVISIBLE)

---
## SET_WATER_QUAD_LEVEL
**Hash:** `0x6292F7A8` | **Returns:** `BOOL`
**Alt name:** `SetWaterQuadLevel`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `level` | `float` |

**Example:**
```lua
local success = SetWaterQuadLevel(0, 55.0)
```

[View docs](https://cfxnatives.dev/natives/SET_WATER_QUAD_LEVEL)

---
## SET_WATER_QUAD_NO_STENCIL
**Hash:** `0xC3FF42FF` | **Returns:** `BOOL`
**Alt name:** `SetWaterQuadNoStencil`

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `noStencil` | `bool` |

**Example:**
```lua
local success = SetWaterQuadNoStencil(0, true)
```

[View docs](https://cfxnatives.dev/natives/SET_WATER_QUAD_NO_STENCIL)

---
## SET_WATER_QUAD_TYPE
**Hash:** `0x50131EB2` | **Returns:** `BOOL`
**Alt name:** `SetWaterQuadType`

This native allows you to update the water quad type.

Valid type definitions:

*   **0** Square
*   **1** Right triangle where the 90 degree angle is at maxX, minY
*   **2** Right triangle where the 90 degree angle is at minX, minY
*   **3** Right triangle where the 90 degree angle is at minX, maxY
*   **4** Right triangle where the 90 degree angle is at maxY, maxY

**Parameters:**
| Name | Type |
|------|------|
| `waterQuad` | `int` |
| `type` | `int` |

**Example:**
```lua
local success = SetWaterQuadType(0, 0)
```

[View docs](https://cfxnatives.dev/natives/SET_WATER_QUAD_TYPE)

---
## SET_WAVE_QUAD_AMPLITUDE
**Hash:** `0xE4174B7B` | **Returns:** `BOOL`
**Alt name:** `SetWaveQuadAmplitude`

**Parameters:**
| Name | Type |
|------|------|
| `waveQuad` | `int` |
| `amplitude` | `float` |

**Example:**
```lua
local success = SetWaveQuadAmplitude(0, 1.0)
```

[View docs](https://cfxnatives.dev/natives/SET_WAVE_QUAD_AMPLITUDE)

---
## SET_WAVE_QUAD_BOUNDS
**Hash:** `0x1FCC1FAF` | **Returns:** `BOOL`
**Alt name:** `SetWaveQuadBounds`

This native allows you to update the bounds of a specified water quad index.

**Parameters:**
| Name | Type |
|------|------|
| `waveQuad` | `int` |
| `minX` | `int` |
| `minY` | `int` |
| `maxX` | `int` |
| `maxY` | `int` |

**Example:**
```lua
local success = SetWaveQuadBounds(0, -5000, -5000, 5000, 5000)
```

[View docs](https://cfxnatives.dev/natives/SET_WAVE_QUAD_BOUNDS)

---
## SET_WAVE_QUAD_DIRECTION
**Hash:** `0xFC9341A3` | **Returns:** `BOOL`
**Alt name:** `SetWaveQuadDirection`

directionX/Y should be constrained between -1.0 and 1.0
A positive value will create the wave starting at min and rolling towards max
A negative value will create the wave starting at max and rolling towards min
Applying both values allows you to make diagonal waves

**Parameters:**
| Name | Type |
|------|------|
| `waveQuad` | `int` |
| `directionX` | `float` |
| `directionY` | `float` |

**Example:**
```lua
local success = SetWaveQuadDirection(0, 0.3, 0.1)
```

[View docs](https://cfxnatives.dev/natives/SET_WAVE_QUAD_DIRECTION)

---
## SET_WEAPON_ACCURACY_SPREAD
**Hash:** `0x598DD6AE` | **Returns:** `void`
**Alt name:** `SetWeaponAccuracySpread`

A setter for the accuracy spread of a weapon.

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `spread` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_WEAPON_ACCURACY_SPREAD)

---
## SET_WEAPON_RECOIL_SHAKE_AMPLITUDE
**Hash:** `0x9864312F` | **Returns:** `void`
**Alt name:** `SetWeaponRecoilShakeAmplitude`

A setter for the recoil shake amplitude of a weapon.

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `amplitude` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_WEAPON_RECOIL_SHAKE_AMPLITUDE)

---
## SET_WEAPONS_NO_AIM_BLOCKING
**Hash:** `0xDFD8F6DE` | **Returns:** `void`
**Alt name:** `SetWeaponsNoAimBlocking`

Disables weapons aim blocking due to environment for local player.
For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#\_0x97A790315D3831FD) can be used.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_WEAPONS_NO_AIM_BLOCKING)

---
## SET_WEAPONS_NO_AUTORELOAD
**Hash:** `0x311150E5` | **Returns:** `void`
**Alt name:** `SetWeaponsNoAutoreload`

Disables the game's built-in auto-reloading.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_WEAPONS_NO_AUTORELOAD)

---
## SET_WEAPONS_NO_AUTOSWAP
**Hash:** `0x2A7B50E` | **Returns:** `void`
**Alt name:** `SetWeaponsNoAutoswap`

Disables autoswapping to another weapon when the current weapon runs out of ammo.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_WEAPONS_NO_AUTOSWAP)

---
## SET_WEATHER_CYCLE_ENTRY
**Hash:** `0xD264D4E1` | **Returns:** `BOOL`
**Alt name:** `SetWeatherCycleEntry`

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |
| `typeName` | `char*` |
| `timeMult` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_WEATHER_CYCLE_ENTRY)

---
## SET_WEATHER_OWNED_BY_NETWORK
**Hash:** `0x2703D582` | **Returns:** `void`
**Alt name:** `SetWeatherOwnedByNetwork`

Sets whether or not the weather should be owned by the network subsystem.

To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.

**Parameters:**
| Name | Type |
|------|------|
| `network` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_WEATHER_OWNED_BY_NETWORK)

---
## SET_WET_CLOTH_PIN_RADIUS_SCALE
**Hash:** `0xF1BD2CEF` | **Returns:** `void`
**Alt name:** `SetWetClothPinRadiusScale`

Modifies the radius scale used in the simulation of wet cloth physics.
This affects how cloth behaves when wet, changing how it sticks or reacts to movement.

**Parameters:**
| Name | Type |
|------|------|
| `scale` | `float` |

**Example:**
```lua
SetWetClothPinRadiusScale(1.0)
```

[View docs](https://cfxnatives.dev/natives/SET_WET_CLOTH_PIN_RADIUS_SCALE)

---
## SHUTDOWN_LOADING_SCREEN_NUI
**Hash:** `0xB9234AFB` | **Returns:** `void`
**Alt name:** `ShutdownLoadingScreenNui`

Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.

[View docs](https://cfxnatives.dev/natives/SHUTDOWN_LOADING_SCREEN_NUI)

---
## START_FIND_EXTERNAL_KVP
**Hash:** `0x8F2EECC3` | **Returns:** `int`
**Alt name:** `StartFindExternalKvp`

Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |
| `prefix` | `char*` |

**Example:**
```lua
local kvpHandle = StartFindExternalKvp('drugs', 'mollis:')

if kvpHandle ~= -1 then 
	local key
	
	repeat
		key = FindKvp(kvpHandle)

		if key then
			print(('%s: %s'):format(key, GetResourceKvpString(key)))
		end
	until not key

	EndFindKvp(kvpHandle)
else
	print('No KVPs found')
end
```

[View docs](https://cfxnatives.dev/natives/START_FIND_EXTERNAL_KVP)

---
## START_FIND_KVP
**Hash:** `0xDD379006` | **Returns:** `int`
**Alt name:** `StartFindKvp`

**Parameters:**
| Name | Type |
|------|------|
| `prefix` | `char*` |

**Example:**
```lua
SetResourceKvp('mollis:2', 'should be taken with alcohol')
SetResourceKvp('mollis:1', 'vesuvius citrate')
SetResourceKvp('mollis:manufacturer', 'Betta Pharmaceuticals')

local kvpHandle = StartFindKvp('mollis:')

if kvpHandle ~= -1 then 
	local key
	
	repeat
		key = FindKvp(kvpHandle)

		if key then
			print(('%s: %s'):format(key, GetResourceKvpString(key)))
		end
	until not key

	EndFindKvp(kvpHandle)
else
	print('No KVPs found')
end
```

[View docs](https://cfxnatives.dev/natives/START_FIND_KVP)

---
## START_RESOURCE
**Hash:** `0x29B440DC` | **Returns:** `BOOL`
**Alt name:** `StartResource`

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |

[View docs](https://cfxnatives.dev/natives/START_RESOURCE)

---
## STATE_BAG_HAS_KEY
**Hash:** `0x12A330` | **Returns:** `bool`
**Alt name:** `StateBagHasKey`

**Parameters:**
| Name | Type |
|------|------|
| `bagName` | `char*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/STATE_BAG_HAS_KEY)

---
## STOP_RESOURCE
**Hash:** `0x21783161` | **Returns:** `BOOL`
**Alt name:** `StopResource`

**Parameters:**
| Name | Type |
|------|------|
| `resourceName` | `char*` |

[View docs](https://cfxnatives.dev/natives/STOP_RESOURCE)

---
## TASK_COMBAT_PED
**Hash:** `0xCB0D8932` | **Returns:** `void`
**Alt name:** `TaskCombatPed`

```
Makes the specified ped attack the target ped.
p2 should be 0
p3 should be 16
```

**This is the server-side RPC native equivalent of the client native [TASK_COMBAT_PED](?\_0xF166E48407BAC484).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `targetPed` | `Ped` |
| `p2` | `int` |
| `p3` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_COMBAT_PED)

---
## TASK_DRIVE_BY
**Hash:** `0x2B84D1C4` | **Returns:** `void`
**Alt name:** `TaskDriveBy`

```
Example:
TASK::TASK_DRIVE_BY(l_467[1/*22*/], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});
Needs working example. Doesn't seem to do anything.
I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
```

**This is the server-side RPC native equivalent of the client native [TASK_DRIVE_BY](?\_0x2F8AF0E82773A171).**

**Parameters:**
| Name | Type |
|------|------|
| `driverPed` | `Ped` |
| `targetPed` | `Ped` |
| `targetVehicle` | `Vehicle` |
| `targetX` | `float` |
| `targetY` | `float` |
| `targetZ` | `float` |
| `distanceToShoot` | `float` |
| `pedAccuracy` | `int` |
| `p8` | `BOOL` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_DRIVE_BY)

---
## TASK_ENTER_VEHICLE
**Hash:** `0xB8689B4E` | **Returns:** `void`
**Alt name:** `TaskEnterVehicle`

```
speed 1.0 = walk, 2.0 = run
p5 1 = normal, 3 = teleport to vehicle, 8 = normal/carjack ped from seat, 16 = teleport directly into vehicle
p6 is always 0
```

**This is the server-side RPC native equivalent of the client native [TASK_ENTER_VEHICLE](?\_0xC20E50AA46D09CA8).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `timeout` | `int` |
| `seatIndex` | `int` |
| `speed` | `float` |
| `flag` | `int` |
| `p6` | `Any` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_ENTER_VEHICLE)

---
## TASK_EVERYONE_LEAVE_VEHICLE
**Hash:** `0xC1971F30` | **Returns:** `void`
**Alt name:** `TaskEveryoneLeaveVehicle`

TASK_EVERYONE_LEAVE_VEHICLE

**This is the server-side RPC native equivalent of the client native [TASK_EVERYONE_LEAVE_VEHICLE](?\_0x7F93691AB4B92272).**

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_EVERYONE_LEAVE_VEHICLE)

---
## TASK_GO_STRAIGHT_TO_COORD
**Hash:** `0x80A9E7A7` | **Returns:** `void`
**Alt name:** `TaskGoStraightToCoord`

TASK_GO_STRAIGHT_TO_COORD

**This is the server-side RPC native equivalent of the client native [TASK_GO_STRAIGHT_TO_COORD](?\_0xD76B57B44F1E6F8B).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `speed` | `float` |
| `timeout` | `int` |
| `targetHeading` | `float` |
| `distanceToSlide` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_GO_STRAIGHT_TO_COORD)

---
## TASK_GO_TO_COORD_ANY_MEANS
**Hash:** `0xF91DF93B` | **Returns:** `void`
**Alt name:** `TaskGoToCoordAnyMeans`

Tells a ped to go to a coord by any means.

```cpp
enum eDrivingMode {
DF_StopForCars = 1,
DF_StopForPeds = 2,
DF_SwerveAroundAllCars = 4,
DF_SteerAroundStationaryCars = 8,
DF_SteerAroundPeds = 16,
DF_SteerAroundObjects = 32,
DF_DontSteerAroundPlayerPed = 64,
DF_StopAtLights = 128,
DF_GoOffRoadWhenAvoiding = 256,
DF_DriveIntoOncomingTraffic = 512,
DF_DriveInReverse = 1024,
// If pathfinding fails, cruise randomly instead of going on a straight line
DF_UseWanderFallbackInsteadOfStraightLine = 2048,
DF_AvoidRestrictedAreas = 4096,
// These only work on MISSION_CRUISE
DF_PreventBackgroundPathfinding = 8192,
DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
DF_UseShortCutLinks =  262144,
DF_ChangeLanesAroundObstructions = 524288,
// cruise tasks ignore this anyway--only used for goto's
DF_UseSwitchedOffNodes =  2097152,
// if you're going to be primarily driving off road
DF_PreferNavmeshRoute =  4194304,
// Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
DF_PlaneTaxiMode =  8388608,
DF_ForceStraightLine = 16777216,
DF_UseStringPullingAtJunctions = 33554432,
DF_AvoidHighways = 536870912,
DF_ForceJoinInRoadDirection = 1073741824,
// Standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
DRIVINGMODE_STOPFORCARS = 786603, // DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,		// Obey lights too
// Like the above, but doesn't steer around anything in its way - will only wait instead.
DRIVINGMODE_STOPFORCARS_STRICT = 262275, // DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks, // Doesn't deviate an inch.
// Default "alerted" driving mode. drives around everything, doesn't obey lights
DRIVINGMODE_AVOIDCARS = 786469, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,
// Very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
DRIVINGMODE_AVOIDCARS_RECKLESS = 786468, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
// Smashes through everything
DRIVINGMODE_PLOUGHTHROUGH = 262144, // DF_UseShortCutLinks
// Drives normally except for the fact that it ignores lights
DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475, // DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
// Try to swerve around everything, but stop for lights if necessary
DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597, // DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
// Swerve around cars, be careful around peds, and stop for lights
DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599 // DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
};
```

**This is the server-side RPC native equivalent of the client native [TASK_GO_TO_COORD_ANY_MEANS](?\_0x5BC448CB78FA3E88).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `fMoveBlendRatio` | `float` |
| `vehicle` | `Vehicle` |
| `bUseLongRangeVehiclePathing` | `BOOL` |
| `drivingFlags` | `int` |
| `fMaxRangeToShootTargets` | `float` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_GO_TO_COORD_ANY_MEANS)

---
## TASK_GO_TO_ENTITY
**Hash:** `0x374827C2` | **Returns:** `void`
**Alt name:** `TaskGoToEntity`

```
The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)
Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
```

**This is the server-side RPC native equivalent of the client native [TASK_GO_TO_ENTITY](?\_0x6A071245EB0D1882).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `target` | `Entity` |
| `duration` | `int` |
| `distance` | `float` |
| `speed` | `float` |
| `p5` | `float` |
| `p6` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_GO_TO_ENTITY)

---
## TASK_HANDS_UP
**Hash:** `0x8DCC19C5` | **Returns:** `void`
**Alt name:** `TaskHandsUp`

```
In the scripts, p3 was always -1.
p3 seems to be duration or timeout of turn animation.
Also facingPed can be 0 or -1 so ped will just raise hands up.
```

**This is the server-side RPC native equivalent of the client native [TASK_HANDS_UP](?\_0xF2EAB31979A7F910).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `duration` | `int` |
| `facingPed` | `Ped` |
| `p3` | `int` |
| `p4` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_HANDS_UP)

---
## TASK_LEAVE_ANY_VEHICLE
**Hash:** `0xDBDD79FA` | **Returns:** `void`
**Alt name:** `TaskLeaveAnyVehicle`

Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)

**This is the server-side RPC native equivalent of the client native [TASK_LEAVE_ANY_VEHICLE](?\_0x504D54DF3F6F2247).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `int` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_LEAVE_ANY_VEHICLE)

---
## TASK_LEAVE_VEHICLE
**Hash:** `0x7B1141C6` | **Returns:** `void`
**Alt name:** `TaskLeaveVehicle`

```
Flags from decompiled scripts:
0 = normal exit and closes door.
1 = normal exit and closes door.
16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
64 = normal exit and closes door, maybe a bit slower animation than 0.
256 = normal exit but does not close the door.
4160 = ped is throwing himself out, even when the vehicle is still.
262144 = ped moves to passenger seat first, then exits normally
Others to be tried out: 320, 512, 131072.
```

**This is the server-side RPC native equivalent of the client native [TASK_LEAVE_VEHICLE](?\_0xD3DBCE61A490BE02).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_LEAVE_VEHICLE)

---
## TASK_PLAY_ANIM
**Hash:** `0x5AB552C6` | **Returns:** `void`
**Alt name:** `TaskPlayAnim`

[Animations list](https://alexguirre.github.io/animations-list/)

```cpp
enum eScriptedAnimFlags
{
AF_LOOPING = 1,
AF_HOLD_LAST_FRAME = 2,
AF_REPOSITION_WHEN_FINISHED = 4,
AF_NOT_INTERRUPTABLE = 8,
AF_UPPERBODY = 16,
AF_SECONDARY = 32,
AF_REORIENT_WHEN_FINISHED = 64,
AF_ABORT_ON_PED_MOVEMENT = 128,
AF_ADDITIVE = 256,
AF_TURN_OFF_COLLISION = 512,
AF_OVERRIDE_PHYSICS = 1024,
AF_IGNORE_GRAVITY = 2048,
AF_EXTRACT_INITIAL_OFFSET = 4096,
AF_EXIT_AFTER_INTERRUPTED = 8192,
AF_TAG_SYNC_IN = 16384,
AF_TAG_SYNC_OUT = 32768,
AF_TAG_SYNC_CONTINUOUS = 65536,
AF_FORCE_START = 131072,
AF_USE_KINEMATIC_PHYSICS = 262144,
AF_USE_MOVER_EXTRACTION = 524288,
AF_HIDE_WEAPON = 1048576,
AF_ENDS_IN_DEAD_POSE = 2097152,
AF_ACTIVATE_RAGDOLL_ON_COLLISION = 4194304,
AF_DONT_EXIT_ON_DEATH = 8388608,
AF_ABORT_ON_WEAPON_DAMAGE = 16777216,
AF_DISABLE_FORCED_PHYSICS_UPDATE = 33554432,
AF_PROCESS_ATTACHMENTS_ON_START = 67108864,
AF_EXPAND_PED_CAPSULE_FROM_SKELETON = 134217728,
AF_USE_ALTERNATIVE_FP_ANIM = 268435456,
AF_BLENDOUT_WRT_LAST_FRAME = 536870912,
AF_USE_FULL_BLENDING = 1073741824
}
```

**This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM](?\_0xEA47FE3719165B94).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `animDictionary` | `char*` |
| `animationName` | `char*` |
| `blendInSpeed` | `float` |
| `blendOutSpeed` | `float` |
| `duration` | `int` |
| `flag` | `int` |
| `playbackRate` | `float` |
| `lockX` | `BOOL` |
| `lockY` | `BOOL` |
| `lockZ` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_PLAY_ANIM)

---
## TASK_PLAY_ANIM_ADVANCED
**Hash:** `0x3DDEB0E6` | **Returns:** `void`
**Alt name:** `TaskPlayAnimAdvanced`

Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
[Animations list](https://alexguirre.github.io/animations-list/)

**This is the server-side RPC native equivalent of the client native [TASK_PLAY_ANIM_ADVANCED](?\_0x83CDB10EA29B370B).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `animDictionary` | `char*` |
| `animationName` | `char*` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `blendInSpeed` | `float` |
| `blendOutSpeed` | `float` |
| `duration` | `int` |
| `flag` | `Any` |
| `animTime` | `float` |
| `p14` | `Any` |
| `p15` | `Any` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_PLAY_ANIM_ADVANCED)

---
## TASK_REACT_AND_FLEE_PED
**Hash:** `0x8A632BD8` | **Returns:** `void`
**Alt name:** `TaskReactAndFleePed`

TASK_REACT_AND_FLEE_PED

**This is the server-side RPC native equivalent of the client native [TASK_REACT_AND_FLEE_PED](?\_0x72C896464915D1B1).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `fleeTarget` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_REACT_AND_FLEE_PED)

---
## TASK_SHOOT_AT_COORD
**Hash:** `0x601C22E3` | **Returns:** `void`
**Alt name:** `TaskShootAtCoord`

```
Firing Pattern Hash Information: https://pastebin.com/Px036isB
```

**This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_COORD](?\_0x46A6CC01E0826106).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `duration` | `int` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_SHOOT_AT_COORD)

---
## TASK_SHOOT_AT_ENTITY
**Hash:** `0xAC0631C9` | **Returns:** `void`
**Alt name:** `TaskShootAtEntity`

```
//this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
Entity aimedentity;
Player player = PLAYER::PLAYER_ID();
PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);
//bg is an array of peds
TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));
in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
Firing Pattern Hash Information: https://pastebin.com/Px036isB
```

**This is the server-side RPC native equivalent of the client native [TASK_SHOOT_AT_ENTITY](?\_0x08DA95E8298AE772).**

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `target` | `Entity` |
| `duration` | `int` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_SHOOT_AT_ENTITY)

---
## TASK_WARP_PED_INTO_VEHICLE
**Hash:** `0x65D4A35D` | **Returns:** `void`
**Alt name:** `TaskWarpPedIntoVehicle`

```
NativeDB Introduced: v323
```

Warp a ped into a vehicle.
**Note**: It's better to use [`TASK_ENTER_VEHICLE`](#\_0xC20E50AA46D09CA8) with the flag "warp" flag instead of this native.

**This is the server-side RPC native equivalent of the client native [TASK_WARP_PED_INTO_VEHICLE](?\_0x9A7D091411C5F684).**

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `seatIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/CFX~TASK_WARP_PED_INTO_VEHICLE)

---
## TEMP_BAN_PLAYER
**Hash:** `0x1E35DBBA` | **Returns:** `void`
**Alt name:** `TempBanPlayer`

**Parameters:**
| Name | Type |
|------|------|
| `playerSrc` | `char*` |
| `reason` | `char*` |

[View docs](https://cfxnatives.dev/natives/TEMP_BAN_PLAYER)

---
## TRIGGER_CLIENT_EVENT_INTERNAL
**Hash:** `0x2F7A49E6` | **Returns:** `void`
**Alt name:** `TriggerClientEventInternal`

The backing function for TriggerClientEvent.

**Parameters:**
| Name | Type |
|------|------|
| `eventName` | `char*` |
| `eventTarget` | `char*` |
| `eventPayload` | `char*` |
| `payloadLength` | `int` |

[View docs](https://cfxnatives.dev/natives/TRIGGER_CLIENT_EVENT_INTERNAL)

---
## TRIGGER_EVENT_INTERNAL
**Hash:** `0x91310870` | **Returns:** `void`
**Alt name:** `TriggerEventInternal`

The backing function for TriggerEvent.

**Parameters:**
| Name | Type |
|------|------|
| `eventName` | `char*` |
| `eventPayload` | `char*` |
| `payloadLength` | `int` |

[View docs](https://cfxnatives.dev/natives/TRIGGER_EVENT_INTERNAL)

---
## TRIGGER_LATENT_CLIENT_EVENT_INTERNAL
**Hash:** `0x70B35890` | **Returns:** `void`
**Alt name:** `TriggerLatentClientEventInternal`

The backing function for TriggerLatentClientEvent.

**Parameters:**
| Name | Type |
|------|------|
| `eventName` | `char*` |
| `eventTarget` | `char*` |
| `eventPayload` | `char*` |
| `payloadLength` | `int` |
| `bps` | `int` |

[View docs](https://cfxnatives.dev/natives/TRIGGER_LATENT_CLIENT_EVENT_INTERNAL)

---
## TRIGGER_LATENT_SERVER_EVENT_INTERNAL
**Hash:** `0x128737EA` | **Returns:** `void`
**Alt name:** `TriggerLatentServerEventInternal`

The backing function for TriggerLatentServerEvent.

**Parameters:**
| Name | Type |
|------|------|
| `eventName` | `char*` |
| `eventPayload` | `char*` |
| `payloadLength` | `int` |
| `bps` | `int` |

[View docs](https://cfxnatives.dev/natives/TRIGGER_LATENT_SERVER_EVENT_INTERNAL)

---
## TRIGGER_SERVER_EVENT_INTERNAL
**Hash:** `0x7FDD1128` | **Returns:** `void`
**Alt name:** `TriggerServerEventInternal`

The backing function for TriggerServerEvent.

**Parameters:**
| Name | Type |
|------|------|
| `eventName` | `char*` |
| `eventPayload` | `char*` |
| `payloadLength` | `int` |

[View docs](https://cfxnatives.dev/natives/TRIGGER_SERVER_EVENT_INTERNAL)

---
## UNREGISTER_RAW_NUI_CALLBACK
**Hash:** `0x7FB46432` | **Returns:** `void`
**Alt name:** `UnregisterRawNuiCallback`

Will unregister and cleanup a registered NUI callback handler.

Use along side the REGISTER_RAW_NUI_CALLBACK native.

**Parameters:**
| Name | Type |
|------|------|
| `callbackType` | `char*` |

[View docs](https://cfxnatives.dev/natives/UNREGISTER_RAW_NUI_CALLBACK)

---
## UPDATE_MAPDATA_ENTITY
**Hash:** `0xFC52CB91` | **Returns:** `void`
**Alt name:** `UpdateMapdataEntity`

Transiently updates the entity with the specified mapdata index and entity index.
This function supports SDK infrastructure and is not intended to be used directly from your code.

**Parameters:**
| Name | Type |
|------|------|
| `mapdata` | `int` |
| `entity` | `int` |
| `entityDef` | `object` |

[View docs](https://cfxnatives.dev/natives/UPDATE_MAPDATA_ENTITY)

---
## VERIFY_PASSWORD_HASH
**Hash:** `0x2E310ACD` | **Returns:** `BOOL`
**Alt name:** `VerifyPasswordHash`

**Parameters:**
| Name | Type |
|------|------|
| `password` | `char*` |
| `hash` | `char*` |

[View docs](https://cfxnatives.dev/natives/VERIFY_PASSWORD_HASH)

---
## WAS_EVENT_CANCELED
**Hash:** `0x58382A19` | **Returns:** `BOOL`
**Alt name:** `WasEventCanceled`

Returns whether or not the currently executing event was canceled.

[View docs](https://cfxnatives.dev/natives/WAS_EVENT_CANCELED)

---

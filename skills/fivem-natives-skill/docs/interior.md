# INTERIOR Natives

> 45 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x38C1CB1CB119A016
**Hash:** `0x38C1CB1CB119A016` | **Returns:** `void`

```
NativeDB Introduced: v1493
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x38C1CB1CB119A016)

---
## _0x405DC2AEF6AF95B9
**Hash:** `0x405DC2AEF6AF95B9` | **Returns:** `void`

```
Usage: INTERIOR::_0x405DC2AEF6AF95B9(INTERIOR::GET_KEY_FOR_ENTITY_IN_ROOM(PLAYER::PLAYER_PED_ID()));  
```

**Parameters:**
| Name | Type |
|------|------|
| `roomHashKey` | `Hash` |

[View docs](https://cfxnatives.dev/natives/0x405DC2AEF6AF95B9)

---
## _0x483ACA1176CA93F1
**Hash:** `0x483ACA1176CA93F1` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x483ACA1176CA93F1)

---
## _0x4C2330E61D3DEB56
**Hash:** `0x4C2330E61D3DEB56` | **Returns:** `Any`

```
Only used once in the entire game scripts.
Does not actually return anything.
```

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |

[View docs](https://cfxnatives.dev/natives/0x4C2330E61D3DEB56)

---
## _0x7241CCB7D020DB69
**Hash:** `0x7241CCB7D020DB69` | **Returns:** `void`

```
Jenkins hash _might_ be 0xFC227584.
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x7241CCB7D020DB69)

---
## _0x7ECDF98587E92DEC
**Hash:** `0x7ECDF98587E92DEC` | **Returns:** `void`

```
NativeDB Introduced: v1604
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x7ECDF98587E92DEC)

---
## _0x82EBB79E258FA2B7
**Hash:** `0x82EBB79E258FA2B7` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `interiorID` | `int` |

[View docs](https://cfxnatives.dev/natives/0x82EBB79E258FA2B7)

---
## _0x9E6542F0CE8E70A3
**Hash:** `0x9E6542F0CE8E70A3` | **Returns:** `void`

```
DISABLE_*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x9E6542F0CE8E70A3)

---
## _0xAF348AFCB575A441
**Hash:** `0xAF348AFCB575A441` | **Returns:** `void`

```
Exemple of use(carmod_shop.c4)  
INTERIOR::_AF348AFCB575A441("V_CarModRoom");  
```

**Parameters:**
| Name | Type |
|------|------|
| `roomName` | `char*` |

[View docs](https://cfxnatives.dev/natives/0xAF348AFCB575A441)

---
## _CLEAR_INTERIOR_FOR_ENTITY
**Hash:** `0x85D5422B2039A70D` | **Returns:** `void`

Immediately removes entity from an interior. Like sets entity to `limbo` room.

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/_CLEAR_INTERIOR_FOR_ENTITY)

---
## _ENABLE_SCRIPT_CULL_MODEL_THIS_FRAME
**Hash:** `0x50C375537449F369` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `mapObjectHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_ENABLE_SCRIPT_CULL_MODEL_THIS_FRAME)

---
## _SET_INTERIOR_ENTITY_SET_COLOR
**Hash:** `0xC1F1920BAF281317` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |
| `entitySetName` | `char*` |
| `color` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_INTERIOR_ENTITY_SET_COLOR)

---
## ACTIVATE_INTERIOR_ENTITY_SET
**Hash:** `0x55E86AF2712B36A1` | **Returns:** `void`
**Alt name:** `ActivateInteriorEntitySet`

```
More info: http://gtaforums.com/topic/836367-adding-props-to-interiors/  
```

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |
| `entitySetName` | `char*` |

[View docs](https://cfxnatives.dev/natives/ACTIVATE_INTERIOR_ENTITY_SET)

---
## ADD_PICKUP_TO_INTERIOR_ROOM_BY_NAME
**Hash:** `0x3F6167F351168730` | **Returns:** `void`
**Alt name:** `AddPickupToInteriorRoomByName`

**Parameters:**
| Name | Type |
|------|------|
| `pickup` | `Pickup` |
| `roomName` | `char*` |

[View docs](https://cfxnatives.dev/natives/ADD_PICKUP_TO_INTERIOR_ROOM_BY_NAME)

---
## CAP_INTERIOR
**Hash:** `0xD9175F941610DB54` | **Returns:** `void`
**Alt name:** `CapInterior`

```
Does something similar to INTERIOR::DISABLE_INTERIOR  
```

**Parameters:**
| Name | Type |
|------|------|
| `interiorID` | `int` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CAP_INTERIOR)

---
## CLEAR_ROOM_FOR_ENTITY
**Hash:** `0xB365FC0C4E27FFA7` | **Returns:** `void`
**Alt name:** `ClearRoomForEntity`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CLEAR_ROOM_FOR_ENTITY)

---
## CLEAR_ROOM_FOR_GAME_VIEWPORT
**Hash:** `0x23B59D8912F94246` | **Returns:** `void`
**Alt name:** `ClearRoomForGameViewport`

[View docs](https://cfxnatives.dev/natives/CLEAR_ROOM_FOR_GAME_VIEWPORT)

---
## DEACTIVATE_INTERIOR_ENTITY_SET
**Hash:** `0x420BD37289EEE162` | **Returns:** `void`
**Alt name:** `DeactivateInteriorEntitySet`

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |
| `entitySetName` | `char*` |

[View docs](https://cfxnatives.dev/natives/DEACTIVATE_INTERIOR_ENTITY_SET)

---
## DISABLE_INTERIOR
**Hash:** `0x6170941419D7D8EC` | **Returns:** `void`
**Alt name:** `DisableInterior`

```
Example:   
This removes the interior from the strip club and when trying to walk inside the player just falls:  
INTERIOR::DISABLE_INTERIOR(118018, true);  
```

**Parameters:**
| Name | Type |
|------|------|
| `interiorID` | `int` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DISABLE_INTERIOR)

---
## ENABLE_EXTERIOR_CULL_MODEL_THIS_FRAME
**Hash:** `0xA97F257D0151A6AB` | **Returns:** `void`
**Alt name:** `EnableExteriorCullModelThisFrame`

```
This is the native that is used to hide the exterior of GTA Online apartment buildings when you are inside an apartment.
```

**Parameters:**
| Name | Type |
|------|------|
| `mapObjectHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/ENABLE_EXTERIOR_CULL_MODEL_THIS_FRAME)

---
## FORCE_ROOM_FOR_ENTITY
**Hash:** `0x52923C4710DD9907` | **Returns:** `void`
**Alt name:** `ForceRoomForEntity`

```
Forces the particular room in an interior to load incase not teleporting into the portal.
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `interior` | `int` |
| `roomHashKey` | `Hash` |

[View docs](https://cfxnatives.dev/natives/FORCE_ROOM_FOR_ENTITY)

---
## FORCE_ROOM_FOR_GAME_VIEWPORT
**Hash:** `0x920D853F3E17F1DA` | **Returns:** `void`
**Alt name:** `ForceRoomForGameViewport`

**Parameters:**
| Name | Type |
|------|------|
| `interiorID` | `int` |
| `roomHashKey` | `Hash` |

[View docs](https://cfxnatives.dev/natives/FORCE_ROOM_FOR_GAME_VIEWPORT)

---
## GET_INTERIOR_AT_COORDS
**Hash:** `0xB0F7F8663821D9C3` | **Returns:** `int`
**Alt name:** `GetInteriorAtCoords`

```
Returns interior ID from specified coordinates. If coordinates are outside, then it returns 0.  
Example for VB.NET  
Dim interiorID As Integer = Native.Function.Call(Of Integer)(Hash.GET_INTERIOR_AT_COORDS, X, Y, Z)  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_AT_COORDS)

---
## GET_INTERIOR_AT_COORDS_WITH_TYPE
**Hash:** `0x05B7A89BD78797FC` | **Returns:** `int`
**Alt name:** `GetInteriorAtCoordsWithType`

```
Returns the interior ID representing the requested interior at that location (if found?). The supplied interior string is not the same as the one used to load the interior.  
Use: INTERIOR::UNPIN_INTERIOR(INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPE(x, y, z, interior))  
Interior types include: "V_Michael", "V_Franklins", "V_Franklinshouse", etc.. you can find them in the scripts.  
Not a very useful native as you could just use GET_INTERIOR_AT_COORDS instead and get the same result, without even having to specify the interior type.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `interiorType` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_AT_COORDS_WITH_TYPE)

---
## GET_INTERIOR_AT_COORDS_WITH_TYPEHASH
**Hash:** `0xF0F77ADB9F67E79D` | **Returns:** `int`
**Alt name:** `GetInteriorAtCoordsWithTypehash`

```
Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `typeHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_AT_COORDS_WITH_TYPEHASH)

---
## GET_INTERIOR_FROM_COLLISION
**Hash:** `0xEC4CF9FCB29A4424` | **Returns:** `int`
**Alt name:** `GetInteriorFromCollision`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_FROM_COLLISION)

---
## GET_INTERIOR_FROM_ENTITY
**Hash:** `0x2107BA504071A6BB` | **Returns:** `int`
**Alt name:** `GetInteriorFromEntity`

```
Returns the handle of the interior that the entity is in. Returns 0 if outside.  
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_FROM_ENTITY)

---
## GET_INTERIOR_FROM_PRIMARY_VIEW
**Hash:** `0xE7D267EC6CA966C3` | **Returns:** `int`
**Alt name:** `GetInteriorFromPrimaryView`

```
NativeDB Introduced: v1604
```

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_FROM_PRIMARY_VIEW)

---
## GET_INTERIOR_GROUP_ID
**Hash:** `0xE4A84ABF135EF91A` | **Returns:** `int`
**Alt name:** `GetInteriorGroupId`

```
Returns the group ID of the specified interior. For example, regular interiors have group 0, subway interiors have group 1. There are a few other groups too.  
```

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_GROUP_ID)

---
## GET_INTERIOR_HEADING
**Hash:** `0xF49B58631D9E22D9` | **Returns:** `float`
**Alt name:** `GetInteriorHeading`

```
NativeDB Introduced: v1493
```

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_HEADING)

---
## GET_INTERIOR_LOCATION_AND_NAMEHASH
**Hash:** `0x252BDC06B73FA6EA` | **Returns:** `void`
**Alt name:** `GetInteriorLocationAndNamehash`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |
| `position` | `Vector3*` |
| `nameHash` | `Hash*` |

[View docs](https://cfxnatives.dev/natives/GET_INTERIOR_LOCATION_AND_NAMEHASH)

---
## GET_KEY_FOR_ENTITY_IN_ROOM
**Hash:** `0x399685DB942336BC` | **Returns:** `Hash`
**Alt name:** `GetKeyForEntityInRoom`

```
Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY  
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_KEY_FOR_ENTITY_IN_ROOM)

---
## GET_OFFSET_FROM_INTERIOR_IN_WORLD_COORDS
**Hash:** `0x9E3B3E6D66F6E22F` | **Returns:** `Vector3`
**Alt name:** `GetOffsetFromInteriorInWorldCoords`

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_OFFSET_FROM_INTERIOR_IN_WORLD_COORDS)

---
## GET_ROOM_KEY_FOR_GAME_VIEWPORT
**Hash:** `0xA6575914D2A0B450` | **Returns:** `Hash`
**Alt name:** `GetRoomKeyForGameViewport`

[View docs](https://cfxnatives.dev/natives/GET_ROOM_KEY_FOR_GAME_VIEWPORT)

---
## GET_ROOM_KEY_FROM_ENTITY
**Hash:** `0x47C2A06D4F5F424B` | **Returns:** `Hash`
**Alt name:** `GetRoomKeyFromEntity`

```
Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.  
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_ROOM_KEY_FROM_ENTITY)

---
## IS_COLLISION_MARKED_OUTSIDE
**Hash:** `0xEEA5AC2EDA7C33E8` | **Returns:** `BOOL`
**Alt name:** `IsCollisionMarkedOutside`

Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/IS_COLLISION_MARKED_OUTSIDE)

---
## IS_INTERIOR_CAPPED
**Hash:** `0x92BAC8ACF88CEC26` | **Returns:** `BOOL`
**Alt name:** `IsInteriorCapped`

**Parameters:**
| Name | Type |
|------|------|
| `interiorID` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_INTERIOR_CAPPED)

---
## IS_INTERIOR_DISABLED
**Hash:** `0xBC5115A5A939DD15` | **Returns:** `BOOL`
**Alt name:** `IsInteriorDisabled`

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_INTERIOR_DISABLED)

---
## IS_INTERIOR_ENTITY_SET_ACTIVE
**Hash:** `0x35F7DD45E8C0A16D` | **Returns:** `BOOL`
**Alt name:** `IsInteriorEntitySetActive`

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |
| `entitySetName` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_INTERIOR_ENTITY_SET_ACTIVE)

---
## IS_INTERIOR_READY
**Hash:** `0x6726BDCCC1932F0E` | **Returns:** `BOOL`
**Alt name:** `IsInteriorReady`

**Parameters:**
| Name | Type |
|------|------|
| `interiorID` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_INTERIOR_READY)

---
## IS_INTERIOR_SCENE
**Hash:** `0xBC72B5D7A1CBD54D` | **Returns:** `BOOL`
**Alt name:** `IsInteriorScene`

[View docs](https://cfxnatives.dev/natives/IS_INTERIOR_SCENE)

---
## IS_VALID_INTERIOR
**Hash:** `0x26B0E73D7EAAF4D3` | **Returns:** `BOOL`
**Alt name:** `IsValidInterior`

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_VALID_INTERIOR)

---
## PIN_INTERIOR_IN_MEMORY
**Hash:** `0x2CA429C029CCF247` | **Returns:** `void`
**Alt name:** `PinInteriorInMemory`

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |

[View docs](https://cfxnatives.dev/natives/PIN_INTERIOR_IN_MEMORY)

---
## REFRESH_INTERIOR
**Hash:** `0x41F37C3427C75AE0` | **Returns:** `void`
**Alt name:** `RefreshInterior`

**Parameters:**
| Name | Type |
|------|------|
| `interiorID` | `int` |

[View docs](https://cfxnatives.dev/natives/REFRESH_INTERIOR)

---
## UNPIN_INTERIOR
**Hash:** `0x261CCE7EED010641` | **Returns:** `void`
**Alt name:** `UnpinInterior`

```
Does something similar to INTERIOR::DISABLE_INTERIOR.  
You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.  
```

**Parameters:**
| Name | Type |
|------|------|
| `interior` | `int` |

[View docs](https://cfxnatives.dev/natives/UNPIN_INTERIOR)

---

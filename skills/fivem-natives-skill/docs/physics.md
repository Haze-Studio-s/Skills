# PHYSICS Natives

> 48 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x36CCB9BE67B970FD
**Hash:** `0x36CCB9BE67B970FD` | **Returns:** `void`

```
ROPE_*
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x36CCB9BE67B970FD)

---
## _0x84DE3B5FB3E666F0
**Hash:** `0x84DE3B5FB3E666F0` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int*` |

[View docs](https://cfxnatives.dev/natives/0x84DE3B5FB3E666F0)

---
## _0x9EBD751E5787BAF2
**Hash:** `0x9EBD751E5787BAF2` | **Returns:** `void`

```
SET_*
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x9EBD751E5787BAF2)

---
## _0xA1AE736541B0FCA3
**Hash:** `0xA1AE736541B0FCA3` | **Returns:** `void`

ROPE_\*

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int*` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xA1AE736541B0FCA3)

---
## _0xB1B6216CA2E7B55E
**Hash:** `0xB1B6216CA2E7B55E` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `BOOL` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xB1B6216CA2E7B55E)

---
## _0xB743F735C03D7810
**Hash:** `0xB743F735C03D7810` | **Returns:** `void`

```
ROPE_*
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/0xB743F735C03D7810)

---
## _0xBC0CE682D4D05650
**Hash:** `0xBC0CE682D4D05650` | **Returns:** `void`

```
Most likely ROPE_ATTACH_*  
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `p1` | `int` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `float` |
| `p7` | `float` |
| `p8` | `float` |
| `p9` | `float` |
| `p10` | `float` |
| `p11` | `float` |
| `p12` | `float` |
| `p13` | `float` |

[View docs](https://cfxnatives.dev/natives/0xBC0CE682D4D05650)

---
## _0xCC6E963682533882
**Hash:** `0xCC6E963682533882` | **Returns:** `void`

```
RESET_*  
```

**Parameters:**
| Name | Type |
|------|------|
| `object` | `Object` |

[View docs](https://cfxnatives.dev/natives/0xCC6E963682533882)

---
## _DOES_ROPE_BELONG_TO_THIS_SCRIPT
**Hash:** `0x271C9D3ACA5D6409` | **Returns:** `BOOL`

Return if the rope was generated or not by the script where the native is called.

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/_DOES_ROPE_BELONG_TO_THIS_SCRIPT)

---
## _GET_HAS_OBJECT_FRAG_INST
**Hash:** `0x0C112765300C7E1E` | **Returns:** `BOOL`

```
GET_*
```

**Parameters:**
| Name | Type |
|------|------|
| `object` | `Object` |

[View docs](https://cfxnatives.dev/natives/_GET_HAS_OBJECT_FRAG_INST)

---
## _SET_ENTITY_PROOF_UNK
**Hash:** `0x15F944730C832252` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_ENTITY_PROOF_UNK)

---
## _SET_LAUNCH_CONTROL_ENABLED
**Hash:** `0xAA6A6098851C396F` | **Returns:** `void`

Related to the lower-end of a vehicles fTractionCurve, e.g., from standing starts and acceleration from low/zero speeds.

```
NativeDB Introduced: v1604
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_LAUNCH_CONTROL_ENABLED)

---
## ACTIVATE_PHYSICS
**Hash:** `0x710311ADF0E20730` | **Returns:** `void`
**Alt name:** `ActivatePhysics`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/ACTIVATE_PHYSICS)

---
## ADD_ROPE
**Hash:** `0xE832D760399EB220` | **Returns:** `int`
**Alt name:** `AddRope`

```
Creates a rope at the specific position, that extends in the specified direction when not attached to any entities.
__
Rope does NOT interact with anything you attach it to, in some cases it make interact with the world AFTER it breaks (seems to occur if you set the type to -1).
Rope will sometimes contract and fall to the ground like you'd expect it to, but since it doesn't interact with the world the effect is just jaring.
```

There are 8 different rope types in the base game. Full rope data can be found in `ropedata.xml`.

```cpp
enum ePhysicsRopeType {
    RopeThin = 0, // Verticies: 1, Radius: 0.03, Textures: rope & rope_n
    RopeWire6 = 1, // Verticies: 4, Radius: 0.015, Textures: steel_cable & steel_cable_n
    RopeWire32 = 2, // Verticies: 32, Radius: 0.025, Textures: steel_cable & steel_cable_n
    RopeMesh = 3, // Verticies: 6, Radius: 0.03, Textures: rope & rope_n
    RopeThinWire32 = 4, // Verticies: 32, Radius: 0.01, Textures: rope & rope_n
    RopeReins = 5, // Verticies: 32, Radius: 0.005, Textures: rope & rope_n
    RopeThin4 = 6, // Verticies: 4, Radius: 0.03, Textures: rope & rope_n
    RopeWire64 = 7 // Verticies: 64, Radius: 0.025, Textures: steel_cable & steel_cable_n
}
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `maxLength` | `float` |
| `ropeType` | `int` |
| `initLength` | `float` |
| `minLength` | `float` |
| `lengthChangeRate` | `float` |
| `onlyPPU` | `BOOL` |
| `collisionOn` | `BOOL` |
| `lockFromFront` | `BOOL` |
| `timeMultiplier` | `float` |
| `breakable` | `BOOL` |
| `unkPtr` | `Any*` |

**Example:**
```lua
local function cleanup_rope_textures()
	-- we only want to cleanup if there are no other ropes still left on the map
	-- otherwise we'll make them go invisible.
	if #GetAllRopes() == 0 then
		-- there are no ropes on the map, we're safe to unload the textures.
		RopeUnloadTextures()
	end
end

CreateThread(function()
	-- if textures aren't loaded then we need to load them
	if not RopeAreTexturesLoaded() then
		-- load the textures so we can see the rope
		RopeLoadTextures()
		while not RopeAreTexturesLoaded() do
			Wait(0)
		end
	end

	-- Create a rope and store the handle
	local rope = AddRope(-2096.096, -311.906, 14.51, 0.0, 0.0, 0.0, 10.0, 1, 10.0, 0.0, 1.0, false, false, false, 1.0, false, 0)
	-- Check if the rope exists.
	if not DoesRopeExist(rope) then
		cleanup_rope_textures()
		-- If the rope does not exist, end the execution of the code here.
		return
	end
	-- Let the rope exist for 3 seconds
	Wait(3000)
	-- Delete the rope!
	DeleteRope(rope)
	cleanup_rope_textures()
end)
```

[View docs](https://cfxnatives.dev/natives/ADD_ROPE)

---
## APPLY_IMPULSE_TO_CLOTH
**Hash:** `0xE37F721824571784` | **Returns:** `void`
**Alt name:** `ApplyImpulseToCloth`

**Parameters:**
| Name | Type |
|------|------|
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `vecX` | `float` |
| `vecY` | `float` |
| `vecZ` | `float` |
| `impulse` | `float` |

[View docs](https://cfxnatives.dev/natives/APPLY_IMPULSE_TO_CLOTH)

---
## ATTACH_ENTITIES_TO_ROPE
**Hash:** `0x3D95EC8B6D940AC3` | **Returns:** `void`
**Alt name:** `AttachEntitiesToRope`

```
Attaches entity 1 to entity 2.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `ent1` | `Entity` |
| `ent2` | `Entity` |
| `ent1_x` | `float` |
| `ent1_y` | `float` |
| `ent1_z` | `float` |
| `ent2_x` | `float` |
| `ent2_y` | `float` |
| `ent2_z` | `float` |
| `length` | `float` |
| `p10` | `BOOL` |
| `p11` | `BOOL` |
| `boneName1` | `char*` |
| `boneName2` | `char*` |

[View docs](https://cfxnatives.dev/natives/ATTACH_ENTITIES_TO_ROPE)

---
## ATTACH_ROPE_TO_ENTITY
**Hash:** `0x4B490A6832559A65` | **Returns:** `void`
**Alt name:** `AttachRopeToEntity`

```
The position supplied can be anywhere, and the entity should anchor relative to that point from it's origin.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `entity` | `Entity` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `p5` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ATTACH_ROPE_TO_ENTITY)

---
## BREAK_ENTITY_GLASS
**Hash:** `0x2E648D16F6E308F3` | **Returns:** `void`
**Alt name:** `BreakEntityGlass`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `float` |
| `p7` | `float` |
| `p8` | `float` |
| `p9` | `Any` |
| `p10` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/BREAK_ENTITY_GLASS)

---
## DELETE_CHILD_ROPE
**Hash:** `0xAA5D6B1888E4DB20` | **Returns:** `void`
**Alt name:** `DeleteChildRope`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/DELETE_CHILD_ROPE)

---
## DELETE_ROPE
**Hash:** `0x52B4829281364649` | **Returns:** `void`
**Alt name:** `DeleteRope`

Deletes the rope with the specified handle.

You should check if the rope exists before trying to delete it, see [DOES_ROPE_EXIST](#\_0xFD5448BE3111ED96).

For an example on how to use this native please refer to [ADD_ROPE](#\_0xE832D760399EB220)

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int*` |

[View docs](https://cfxnatives.dev/natives/DELETE_ROPE)

---
## DETACH_ROPE_FROM_ENTITY
**Hash:** `0xBCF3026912A8647D` | **Returns:** `void`
**Alt name:** `DetachRopeFromEntity`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/DETACH_ROPE_FROM_ENTITY)

---
## DOES_ROPE_EXIST
**Hash:** `0xFD5448BE3111ED96` | **Returns:** `BOOL`
**Alt name:** `DoesRopeExist`

For an example on how to use this native please refer to [ADD_ROPE](#\_0xE832D760399EB220)

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int*` |

[View docs](https://cfxnatives.dev/natives/DOES_ROPE_EXIST)

---
## GET_CGOFFSET
**Hash:** `0x8214A4B5A7A33612` | **Returns:** `Vector3`
**Alt name:** `GetCgoffset`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/GET_CGOFFSET)

---
## GET_ROPE_LAST_VERTEX_COORD
**Hash:** `0x21BB0FBD3E217C2D` | **Returns:** `Vector3`
**Alt name:** `GetRopeLastVertexCoord`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_ROPE_LAST_VERTEX_COORD)

---
## GET_ROPE_VERTEX_COORD
**Hash:** `0xEA61CA8E80F09E4D` | **Returns:** `Vector3`
**Alt name:** `GetRopeVertexCoord`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `vertex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_ROPE_VERTEX_COORD)

---
## GET_ROPE_VERTEX_COUNT
**Hash:** `0x3655F544CD30F0B5` | **Returns:** `int`
**Alt name:** `GetRopeVertexCount`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_ROPE_VERTEX_COUNT)

---
## LOAD_ROPE_DATA
**Hash:** `0xCBB203C04D1ABD27` | **Returns:** `void`
**Alt name:** `LoadRopeData`

```
Rope presets can be found in the gamefiles. One example is "ropeFamily3", it is NOT a hash but rather a string.
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `rope_preset` | `char*` |

[View docs](https://cfxnatives.dev/natives/LOAD_ROPE_DATA)

---
## PIN_ROPE_VERTEX
**Hash:** `0x2B320CF14146B69A` | **Returns:** `void`
**Alt name:** `PinRopeVertex`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `vertex` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/PIN_ROPE_VERTEX)

---
## ROPE_ARE_TEXTURES_LOADED
**Hash:** `0xF2D0E6A75CC05597` | **Returns:** `BOOL`
**Alt name:** `RopeAreTexturesLoaded`

[View docs](https://cfxnatives.dev/natives/ROPE_ARE_TEXTURES_LOADED)

---
## ROPE_CONVERT_TO_SIMPLE
**Hash:** `0x5389D48EFA2F079A` | **Returns:** `void`
**Alt name:** `RopeConvertToSimple`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/ROPE_CONVERT_TO_SIMPLE)

---
## ROPE_DRAW_SHADOW_ENABLED
**Hash:** `0xF159A63806BB5BA8` | **Returns:** `void`
**Alt name:** `RopeDrawShadowEnabled`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int*` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ROPE_DRAW_SHADOW_ENABLED)

---
## ROPE_FORCE_LENGTH
**Hash:** `0xD009F759A723DB1B` | **Returns:** `void`
**Alt name:** `RopeForceLength`

```
Forces a rope to a certain length.
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `length` | `float` |

[View docs](https://cfxnatives.dev/natives/ROPE_FORCE_LENGTH)

---
## ROPE_GET_DISTANCE_BETWEEN_ENDS
**Hash:** `0x73040398DFF9A4A6` | **Returns:** `float`
**Alt name:** `RopeGetDistanceBetweenEnds`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/ROPE_GET_DISTANCE_BETWEEN_ENDS)

---
## ROPE_LOAD_TEXTURES
**Hash:** `0x9B9039DBF2D258C1` | **Returns:** `void`
**Alt name:** `RopeLoadTextures`

```
Loads rope textures for all ropes in the current scene.
```

[View docs](https://cfxnatives.dev/natives/ROPE_LOAD_TEXTURES)

---
## ROPE_RESET_LENGTH
**Hash:** `0xC16DE94D9BEA14A0` | **Returns:** `void`
**Alt name:** `RopeResetLength`

```
Reset a rope to a certain length.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `length` | `float` |

[View docs](https://cfxnatives.dev/natives/ROPE_RESET_LENGTH)

---
## ROPE_SET_UPDATE_ORDER
**Hash:** `0xDC57A637A20006ED` | **Returns:** `void`
**Alt name:** `RopeSetUpdateOrder`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/ROPE_SET_UPDATE_ORDER)

---
## ROPE_SET_UPDATE_PINVERTS
**Hash:** `0xC8D667EE52114ABA` | **Returns:** `void`
**Alt name:** `RopeSetUpdatePinverts`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/ROPE_SET_UPDATE_PINVERTS)

---
## ROPE_UNLOAD_TEXTURES
**Hash:** `0x6CE36C35C1AC8163` | **Returns:** `void`
**Alt name:** `RopeUnloadTextures`

```
Unloads rope textures for all ropes in the current scene.
```

[View docs](https://cfxnatives.dev/natives/ROPE_UNLOAD_TEXTURES)

---
## SET_CG_AT_BOUNDCENTER
**Hash:** `0xBE520D9761FF811F` | **Returns:** `void`
**Alt name:** `SetCgAtBoundcenter`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/SET_CG_AT_BOUNDCENTER)

---
## SET_CGOFFSET
**Hash:** `0xD8FA3908D7B86904` | **Returns:** `void`
**Alt name:** `SetCgoffset`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_CGOFFSET)

---
## SET_DAMPING
**Hash:** `0xEEA3B200A6FEB65B` | **Returns:** `void`
**Alt name:** `SetDamping`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `vertex` | `int` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_DAMPING)

---
## SET_DISABLE_BREAKING
**Hash:** `0x5CEC1A84620E7D5B` | **Returns:** `void`
**Alt name:** `SetDisableBreaking`

**Parameters:**
| Name | Type |
|------|------|
| `object` | `Object` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_DISABLE_BREAKING)

---
## SET_DISABLE_FRAG_DAMAGE
**Hash:** `0x01BA3AED21C16CFB` | **Returns:** `void`
**Alt name:** `SetDisableFragDamage`

**Parameters:**
| Name | Type |
|------|------|
| `object` | `Object` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_DISABLE_FRAG_DAMAGE)

---
## START_ROPE_UNWINDING_FRONT
**Hash:** `0x538D1179EC1AA9A9` | **Returns:** `void`
**Alt name:** `StartRopeUnwindingFront`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/START_ROPE_UNWINDING_FRONT)

---
## START_ROPE_WINDING
**Hash:** `0x1461C72C889E343E` | **Returns:** `void`
**Alt name:** `StartRopeWinding`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/START_ROPE_WINDING)

---
## STOP_ROPE_UNWINDING_FRONT
**Hash:** `0xFFF3A50779EFBBB3` | **Returns:** `void`
**Alt name:** `StopRopeUnwindingFront`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/STOP_ROPE_UNWINDING_FRONT)

---
## STOP_ROPE_WINDING
**Hash:** `0xCB2D4AB84A19AA7C` | **Returns:** `void`
**Alt name:** `StopRopeWinding`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |

[View docs](https://cfxnatives.dev/natives/STOP_ROPE_WINDING)

---
## UNPIN_ROPE_VERTEX
**Hash:** `0x4B5AE2EEE4A8F180` | **Returns:** `void`
**Alt name:** `UnpinRopeVertex`

**Parameters:**
| Name | Type |
|------|------|
| `ropeId` | `int` |
| `vertex` | `int` |

[View docs](https://cfxnatives.dev/natives/UNPIN_ROPE_VERTEX)

---

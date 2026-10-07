# SHAPETEST Natives

> 11 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _START_SHAPE_TEST_SURROUNDING_COORDS
**Hash:** `0xFF6BE494C7987F34` | **Returns:** `int`

Since it is only used in the PC version, likely some mouse-friendly shape test. Uses **in** vector arguments.

Asynchronous.

```
it returns a ShapeTest handle that can be used with GET_SHAPE_TEST_RESULT.  
In its only usage in game scripts its called with flag set to 511, entity to player_ped_id and flag2 set to 7  
```

See [`START_SHAPE_TEST_LOS_PROBE`](#\_0x7EE9F5D83DD4F90E) for flags.

**Parameters:**
| Name | Type |
|------|------|
| `pVec1` | `Vector3*` |
| `pVec2` | `Vector3*` |
| `flag` | `int` |
| `entity` | `Entity` |
| `flag2` | `int` |

[View docs](https://cfxnatives.dev/natives/_START_SHAPE_TEST_SURROUNDING_COORDS)

---
## GET_SHAPE_TEST_RESULT
**Hash:** `0x3D87450E15D98694` | **Returns:** `int`
**Alt name:** `GetShapeTestResult`

Returns the result of a shape test.

When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.

Unless the return value is 2, the other return values are undefined.

**Parameters:**
| Name | Type |
|------|------|
| `shapeTestHandle` | `int` |
| `hit` | `BOOL*` |
| `endCoords` | `Vector3*` |
| `surfaceNormal` | `Vector3*` |
| `entityHit` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/GET_SHAPE_TEST_RESULT)

---
## GET_SHAPE_TEST_RESULT_INCLUDING_MATERIAL
**Hash:** `0x65287525D951F6BE` | **Returns:** `int`
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

[View docs](https://cfxnatives.dev/natives/SHAPETEST~GET_SHAPE_TEST_RESULT_INCLUDING_MATERIAL)

---
## RELEASE_SCRIPT_GUID_FROM_ENTITY
**Hash:** `0x2B3334BCA57CD799` | **Returns:** `void`
**Alt name:** `ReleaseScriptGuidFromEntity`

Invalidates the entity handle passed by removing the fwScriptGuid from the entity. This should be used when receiving an
ambient entity from shape testing natives, but can also be used for other natives returning an 'irrelevant' entity handle.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/RELEASE_SCRIPT_GUID_FROM_ENTITY)

---
## START_EXPENSIVE_SYNCHRONOUS_SHAPE_TEST_LOS_PROBE
**Hash:** `0x377906D8A31E5586` | **Returns:** `int`
**Alt name:** `StartExpensiveSynchronousShapeTestLosProbe`

Does the same as [START_SHAPE_TEST_LOS_PROBE](#\_0x7EE9F5D83DD4F90E), except blocking until the shape test completes.

Use [START_SHAPE_TEST_LOS_PROBE](#\_0x7EE9F5D83DD4F90E) instead. Literally. Rockstar named this correctly: it's expensive, and it's synchronous.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `flags` | `int` |
| `entity` | `Entity` |
| `p8` | `int` |

[View docs](https://cfxnatives.dev/natives/START_EXPENSIVE_SYNCHRONOUS_SHAPE_TEST_LOS_PROBE)

---
## START_SHAPE_TEST_BOUND
**Hash:** `0x37181417CE7C8900` | **Returns:** `int`
**Alt name:** `StartShapeTestBound`

See [`START_SHAPE_TEST_LOS_PROBE`](#\_0x7EE9F5D83DD4F90E) for flags.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `flags1` | `int` |
| `flags2` | `int` |

[View docs](https://cfxnatives.dev/natives/START_SHAPE_TEST_BOUND)

---
## START_SHAPE_TEST_BOUNDING_BOX
**Hash:** `0x052837721A854EC7` | **Returns:** `int`
**Alt name:** `StartShapeTestBoundingBox`

See [`START_SHAPE_TEST_LOS_PROBE`](#\_0x7EE9F5D83DD4F90E) for flags.

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `flags1` | `int` |
| `flags2` | `int` |

[View docs](https://cfxnatives.dev/natives/START_SHAPE_TEST_BOUNDING_BOX)

---
## START_SHAPE_TEST_BOX
**Hash:** `0xFE466162C4401D18` | **Returns:** `int`
**Alt name:** `StartShapeTestBox`

For more information, see [`START_EXPENSIVE_SYNCHRONOUS_SHAPE_TEST_LOS_PROBE`](#\_0x377906D8A31E5586) and [`START_SHAPE_TEST_LOS_PROBE`](#\_0x7EE9F5D83DD4F90E).

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `p9` | `int` |
| `flags` | `int` |
| `entity` | `Entity` |
| `p12` | `int` |

[View docs](https://cfxnatives.dev/natives/START_SHAPE_TEST_BOX)

---
## START_SHAPE_TEST_CAPSULE
**Hash:** `0x28579D1B8F8AAC80` | **Returns:** `int`
**Alt name:** `StartShapeTestCapsule`

Raycast from point to point, where the ray has a radius.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `radius` | `float` |
| `flags` | `int` |
| `entity` | `Entity` |
| `p9` | `int` |

[View docs](https://cfxnatives.dev/natives/START_SHAPE_TEST_CAPSULE)

---
## START_SHAPE_TEST_LOS_PROBE
**Hash:** `0x7EE9F5D83DD4F90E` | **Returns:** `int`
**Alt name:** `StartShapeTestLosProbe`

Asynchronously starts a line-of-sight (raycast) world probe shape test.

```cpp
enum eTraceFlags
{
  None = 0,
  IntersectWorld = 1,
  IntersectVehicles = 2,
  IntersectPeds = 4,
  IntersectRagdolls = 8,
  IntersectObjects = 16,
  IntersectWater = 32,
  IntersectGlass = 64,
  IntersectRiver = 128,
  IntersectFoliage = 256,
  IntersectEverything = -1
}
```

NOTE: Raycasts that intersect with mission_entites (flag = 2) has limited range and will not register for far away entites. The range seems to be about 30 metres.

Use the handle with [GET_SHAPE_TEST_RESULT](#\_0x3D87450E15D98694) or [GET_SHAPE_TEST_RESULT_INCLUDING_MATERIAL](#\_0x65287525D951F6BE) until it returns 0 or 2.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `traceFlags` | `int` |
| `entity` | `Entity` |
| `options` | `int` |

[View docs](https://cfxnatives.dev/natives/START_SHAPE_TEST_LOS_PROBE)

---
## START_SHAPE_TEST_SWEPT_SPHERE
**Hash:** `0xE6AC6C45FBE83004` | **Returns:** `int`
**Alt name:** `StartShapeTestSweptSphere`

Performs the same type of trace as START_SHAPE_TEST_CAPSULE, but with some different hardcoded parameters.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `radius` | `float` |
| `flags` | `int` |
| `entity` | `Entity` |
| `p9` | `int` |

[View docs](https://cfxnatives.dev/natives/START_SHAPE_TEST_SWEPT_SPHERE)

---

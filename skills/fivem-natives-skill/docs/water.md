# WATER Natives

> 12 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x547237AA71AB44DE
**Hash:** `0x547237AA71AB44DE` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0x547237AA71AB44DE)

---
## _REMOVE_CURRENT_RISE
**Hash:** `0xB1252E3E59A82AAF` | **Returns:** `void`

```
p0 is the handle returned from _0xFDBF4CDBC07E1706  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/_REMOVE_CURRENT_RISE)

---
## ADD_EXTRA_CALMING_QUAD
**Hash:** `0xFDBF4CDBC07E1706` | **Returns:** `int`
**Alt name:** `AddExtraCalmingQuad`

Only 8 current rises can exist. If rises need to be changed, use REMOVE_EXTRA_CALMING_QUAD and then ADD_EXTRA_CALMING_QUAD again.
After removing a rise, you will be able to add a rise again.

**Parameters:**
| Name | Type |
|------|------|
| `xLow` | `float` |
| `yLow` | `float` |
| `xHigh` | `float` |
| `yHigh` | `float` |
| `height` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_EXTRA_CALMING_QUAD)

---
## GET_DEEP_OCEAN_SCALER
**Hash:** `0x2B2A2CC86778B619` | **Returns:** `float`
**Alt name:** `GetDeepOceanScaler`

```
Gets the aggressiveness factor of the ocean waves.  
```

[View docs](https://cfxnatives.dev/natives/GET_DEEP_OCEAN_SCALER)

---
## GET_WATER_HEIGHT
**Hash:** `0xF6829842C06AE524` | **Returns:** `BOOL`
**Alt name:** `GetWaterHeight`

Retrieves the depth of the water beneath the specified position, accounting for the waves.

**Note:** The result might vary depending on the specific frame when this command is executed due to wave fluctuations.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `height` | `float*` |

[View docs](https://cfxnatives.dev/natives/GET_WATER_HEIGHT)

---
## GET_WATER_HEIGHT_NO_WAVES
**Hash:** `0x8EE6B53CE13A9794` | **Returns:** `BOOL`
**Alt name:** `GetWaterHeightNoWaves`

Retrieves the depth of the water beneath the specified position, disregarding wave effects.

**Note:** The result remains consistent across different frames as it doesn't consider wave fluctuations.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `height` | `float*` |

[View docs](https://cfxnatives.dev/natives/GET_WATER_HEIGHT_NO_WAVES)

---
## MODIFY_WATER
**Hash:** `0xC443FD757C3BA637` | **Returns:** `void`
**Alt name:** `ModifyWater`

```
Sets the water height for a given position and radius.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `height` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/MODIFY_WATER)

---
## RESET_DEEP_OCEAN_SCALER
**Hash:** `0x5E5E99285AE812DB` | **Returns:** `void`
**Alt name:** `ResetDeepOceanScaler`

```
Sets the waves intensity back to original (1.0 in most cases). 
```

[View docs](https://cfxnatives.dev/natives/RESET_DEEP_OCEAN_SCALER)

---
## SET_DEEP_OCEAN_SCALER
**Hash:** `0xB96B00E976BE977F` | **Returns:** `void`
**Alt name:** `SetDeepOceanScaler`

```
Sets a value that determines how aggressive the ocean waves will be. Values of 2.0 or more make for very aggressive waves like you see during a thunderstorm.  
Works only ~200 meters around the player.  
```

**Parameters:**
| Name | Type |
|------|------|
| `intensity` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_DEEP_OCEAN_SCALER)

---
## TEST_PROBE_AGAINST_ALL_WATER
**Hash:** `0x8974647ED222EA5F` | **Returns:** `BOOL`
**Alt name:** `TestProbeAgainstAllWater`

Flags are identical to START_SHAPE_TEST\*, however, 128 is automatically set.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `flag` | `int` |
| `result` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/TEST_PROBE_AGAINST_ALL_WATER)

---
## TEST_PROBE_AGAINST_WATER
**Hash:** `0xFFA5D878809819DB` | **Returns:** `BOOL`
**Alt name:** `TestProbeAgainstWater`

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `result` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/TEST_PROBE_AGAINST_WATER)

---
## TEST_VERTICAL_PROBE_AGAINST_ALL_WATER
**Hash:** `0x2B3451FA1E3142E2` | **Returns:** `BOOL`
**Alt name:** `TestVerticalProbeAgainstAllWater`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `flag` | `int` |
| `height` | `float*` |

[View docs](https://cfxnatives.dev/natives/TEST_VERTICAL_PROBE_AGAINST_ALL_WATER)

---

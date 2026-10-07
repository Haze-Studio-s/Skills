# GRAPHICS Natives

> 391 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x0218BA067D249DEA
**Hash:** `0x0218BA067D249DEA` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x0218BA067D249DEA)

---
## _0x02369D5C8A51FDCF
**Hash:** `0x02369D5C8A51FDCF` | **Returns:** `void`

```
DISABLE_S*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x02369D5C8A51FDCF)

---
## _0x03300B57FCAC6DDB
**Hash:** `0x03300B57FCAC6DDB` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x03300B57FCAC6DDB)

---
## _0x0AE73D8DF3A762B2
**Hash:** `0x0AE73D8DF3A762B2` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x0AE73D8DF3A762B2)

---
## _0x0E4299C549F0D1F1
**Hash:** `0x0E4299C549F0D1F1` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x0E4299C549F0D1F1)

---
## _0x108BE26959A9D9BB
**Hash:** `0x108BE26959A9D9BB` | **Returns:** `void`

```
UI3DSCENE_*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x108BE26959A9D9BB)

---
## _0x14FC5833464340A8
**Hash:** `0x14FC5833464340A8` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x14FC5833464340A8)

---
## _0x1612C45F9E3E0D44
**Hash:** `0x1612C45F9E3E0D44` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x1612C45F9E3E0D44)

---
## _0x1BBC135A4D25EDDE
**Hash:** `0x1BBC135A4D25EDDE` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x1BBC135A4D25EDDE)

---
## _0x1CBA05AE7BD7EE05
**Hash:** `0x1CBA05AE7BD7EE05` | **Returns:** `void`

```
SET_TRA*
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0x1CBA05AE7BD7EE05)

---
## _0x259BA6D4E6F808F1
**Hash:** `0x259BA6D4E6F808F1` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x259BA6D4E6F808F1)

---
## _0x25FC3E33A31AD0C9
**Hash:** `0x25FC3E33A31AD0C9` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x25FC3E33A31AD0C9)

---
## _0x27CFB1B1E078CB2D
**Hash:** `0x27CFB1B1E078CB2D` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x27CFB1B1E078CB2D)

---
## _0x27FEB5254759CDE3
**Hash:** `0x27FEB5254759CDE3` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x27FEB5254759CDE3)

---
## _0x2A251AA48B2B46DB
**Hash:** `0x2A251AA48B2B46DB` | **Returns:** `void`

```
NativeDB Introduced: v323
```

[View docs](https://cfxnatives.dev/natives/0x2A251AA48B2B46DB)

---
## _0x2B40A97646381508
**Hash:** `0x2B40A97646381508` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x2B40A97646381508)

---
## _0x2C42340F916C5930
**Hash:** `0x2C42340F916C5930` | **Returns:** `Any`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x2C42340F916C5930)

---
## _0x2D3B147AFAD49DE0
**Hash:** `0x2D3B147AFAD49DE0` | **Returns:** `void`

```
Used in arcade games and Beam hack minigame in Doomsday Heist. For example, [Penetrator Arcade Game](https://streamable.com/8igrzw)

NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |
| `textureName` | `char*` |
| `x` | `float` |
| `y` | `float` |
| `width` | `float` |
| `height` | `float` |
| `p6` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |
| `p11` | `int` |

**Example:**
```lua
-- drawing the game area for penetrator arcade game
Citizen.CreateThread(function()
    RequestStreamedTextureDict("MPArcadeDegenatron", false)
    while not HasStreamedTextureDictLoaded("MPArcadeDegenatron") do Citizen.Wait(1) end
    while true do
        N_0x2d3b147afad49de0("MPArcadeDegenatron", "penetrator_scene_frame", 0.5, 0.5, 0.4, 0.6, 0.0, 255, 0, 0, 255, 0)
        Citizen.Wait(1)
    end
end)
```

[View docs](https://cfxnatives.dev/natives/0x2D3B147AFAD49DE0)

---
## _0x2FCB133CA50A49EB
**Hash:** `0x2FCB133CA50A49EB` | **Returns:** `Any`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x2FCB133CA50A49EB)

---
## _0x30432A0118736E00
**Hash:** `0x30432A0118736E00` | **Returns:** `Hash`

```
GET_CURRENT_*

NativeDB Introduced: v1493
```

[View docs](https://cfxnatives.dev/natives/0x30432A0118736E00)

---
## _0x346EF3ECAAAB149E
**Hash:** `0x346EF3ECAAAB149E` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x346EF3ECAAAB149E)

---
## _0x36F6626459D91457
**Hash:** `0x36F6626459D91457` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0x36F6626459D91457)

---
## _0x393BD2275CEB7793
**Hash:** `0x393BD2275CEB7793` | **Returns:** `Any`

[View docs](https://cfxnatives.dev/natives/0x393BD2275CEB7793)

---
## _0x3C788E7F6438754D
**Hash:** `0x3C788E7F6438754D` | **Returns:** `void`

```
NativeDB Introduced: v1180
```

Sets the given checkpoint target to the new coords

**Parameters:**
| Name | Type |
|------|------|
| `checkpointHandle` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/0x3C788E7F6438754D)

---
## _0x43FA7CBE20DAB219
**Hash:** `0x43FA7CBE20DAB219` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x43FA7CBE20DAB219)

---
## _0x46D1A61A21F566FC
**Hash:** `0x46D1A61A21F566FC` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0x46D1A61A21F566FC)

---
## _0x4AF92ACD3141D96C
**Hash:** `0x4AF92ACD3141D96C` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x4AF92ACD3141D96C)

---
## _0x54E22EA2C1956A8D
**Hash:** `0x54E22EA2C1956A8D` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0x54E22EA2C1956A8D)

---
## _0x5B0316762AFD4A64
**Hash:** `0x5B0316762AFD4A64` | **Returns:** `int`

[View docs](https://cfxnatives.dev/natives/0x5B0316762AFD4A64)

---
## _0x5DBF05DB5926D089
**Hash:** `0x5DBF05DB5926D089` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x5DBF05DB5926D089)

---
## _0x5DEBD9C4DC995692
**Hash:** `0x5DEBD9C4DC995692` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x5DEBD9C4DC995692)

---
## _0x5F6DF3D92271E8A1
**Hash:** `0x5F6DF3D92271E8A1` | **Returns:** `void`

```
DISABLE_*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x5F6DF3D92271E8A1)

---
## _0x615D3925E87A3B26
**Hash:** `0x615D3925E87A3B26` | **Returns:** `void`

```
Unknown. Called after creating a checkpoint (type: 51) in the creators.  
```

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |

[View docs](https://cfxnatives.dev/natives/0x615D3925E87A3B26)

---
## _0x61F95E5BB3E0A8C6
**Hash:** `0x61F95E5BB3E0A8C6` | **Returns:** `void`

**This native does absolutely nothing, just a nullsub**

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x61F95E5BB3E0A8C6)

---
## _0x649C97D52332341A
**Hash:** `0x649C97D52332341A` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x649C97D52332341A)

---
## _0x6A51F78772175A51
**Hash:** `0x6A51F78772175A51` | **Returns:** `void`

```
SET_F*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x6A51F78772175A51)

---
## _0x759650634F07B6B4
**Hash:** `0x759650634F07B6B4` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/0x759650634F07B6B4)

---
## _0x7A42B2E236E71415
**Hash:** `0x7A42B2E236E71415` | **Returns:** `void`

```
UI3DSCENE_*
```

[View docs](https://cfxnatives.dev/natives/0x7A42B2E236E71415)

---
## _0x7AC24EAB6D74118D
**Hash:** `0x7AC24EAB6D74118D` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x7AC24EAB6D74118D)

---
## _0x7FA5D82B8F58EC06
**Hash:** `0x7FA5D82B8F58EC06` | **Returns:** `BOOL`

[View docs](https://cfxnatives.dev/natives/0x7FA5D82B8F58EC06)

---
## _0x814AF7DCAACC597B
**Hash:** `0x814AF7DCAACC597B` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x814AF7DCAACC597B)

---
## _0x82ACC484FFA3B05F
**Hash:** `0x82ACC484FFA3B05F` | **Returns:** `Any`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x82ACC484FFA3B05F)

---
## _0x851CD923176EBA7C
**Hash:** `0x851CD923176EBA7C` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x851CD923176EBA7C)

---
## _0x8CDE909A0370BB3A
**Hash:** `0x8CDE909A0370BB3A` | **Returns:** `void`

```
Used only once in the scripts (taxi_clowncar)

SET_PARTICLE_FX_*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x8CDE909A0370BB3A)

---
## _0x908311265D42A820
**Hash:** `0x908311265D42A820` | **Returns:** `void`

```
NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x908311265D42A820)

---
## _0x949F397A288B28B3
**Hash:** `0x949F397A288B28B3` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0x949F397A288B28B3)

---
## _0x9641588DAB93B4B5
**Hash:** `0x9641588DAB93B4B5` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x9641588DAB93B4B5)

---
## _0x98D18905BF723B99
**Hash:** `0x98D18905BF723B99` | **Returns:** `Any`

```
NativeDB Introduced: v1493
```

[View docs](https://cfxnatives.dev/natives/0x98D18905BF723B99)

---
## _0x98EDF76A7271E4F2
**Hash:** `0x98EDF76A7271E4F2` | **Returns:** `void`

```
REQUEST_*
```

[View docs](https://cfxnatives.dev/natives/0x98EDF76A7271E4F2)

---
## _0x9B079E5221D984D3
**Hash:** `0x9B079E5221D984D3` | **Returns:** `void`

```
FORCE_*
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x9B079E5221D984D3)

---
## _0xA46B73FAA3460AE1
**Hash:** `0xA46B73FAA3460AE1` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xA46B73FAA3460AE1)

---
## _0xAAE9BE70EC7C69AB
**Hash:** `0xAAE9BE70EC7C69AB` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |
| `p4` | `Any` |
| `p5` | `Any` |
| `p6` | `Any` |
| `p7` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xAAE9BE70EC7C69AB)

---
## _0xADD6627C4D325458
**Hash:** `0xADD6627C4D325458` | **Returns:** `void`

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xADD6627C4D325458)

---
## _0xAE51BC858F32BA66
**Hash:** `0xAE51BC858F32BA66` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |

[View docs](https://cfxnatives.dev/natives/0xAE51BC858F32BA66)

---
## _0xB2EBE8CBC58B90E9
**Hash:** `0xB2EBE8CBC58B90E9` | **Returns:** `Any`

[View docs](https://cfxnatives.dev/natives/0xB2EBE8CBC58B90E9)

---
## _0xB3C641F3630BF6DA
**Hash:** `0xB3C641F3630BF6DA` | **Returns:** `void`

```
Setter for 0xE59343E9E96529E7

SET_M*
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0xB3C641F3630BF6DA)

---
## _0xB569F41F3E7E83A4
**Hash:** `0xB569F41F3E7E83A4` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xB569F41F3E7E83A4)

---
## _0xBA0127DA25FD54C9
**Hash:** `0xBA0127DA25FD54C9` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xBA0127DA25FD54C9)

---
## _0xBA3D194057C79A7B
**Hash:** `0xBA3D194057C79A7B` | **Returns:** `void`

```
SET_PARTICLE_FX_*
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `char*` |

[View docs](https://cfxnatives.dev/natives/0xBA3D194057C79A7B)

---
## _0xBB90E12CAC1DAB25
**Hash:** `0xBB90E12CAC1DAB25` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0xBB90E12CAC1DAB25)

---
## _0xBCEDB009461DA156
**Hash:** `0xBCEDB009461DA156` | **Returns:** `Any`

[View docs](https://cfxnatives.dev/natives/0xBCEDB009461DA156)

---
## _0xBE197EAA669238F4
**Hash:** `0xBE197EAA669238F4` | **Returns:** `Any`

```
This function is hard-coded to always return 0.  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xBE197EAA669238F4)

---
## _0xC0416B061F2B7E5E
**Hash:** `0xC0416B061F2B7E5E` | **Returns:** `void`

```
GOLF_TRAIL_SET_*
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xC0416B061F2B7E5E)

---
## _0xC35A6D07C93802B2
**Hash:** `0xC35A6D07C93802B2` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0xC35A6D07C93802B2)

---
## _0xC5C8F970D4EDFF71
**Hash:** `0xC5C8F970D4EDFF71` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xC5C8F970D4EDFF71)

---
## _0xCA465D9CC0D231BA
**Hash:** `0xCA465D9CC0D231BA` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xCA465D9CC0D231BA)

---
## _0xCA4AE345A153D573
**Hash:** `0xCA4AE345A153D573` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xCA4AE345A153D573)

---
## _0xCB82A0BF0E3E3265
**Hash:** `0xCB82A0BF0E3E3265` | **Returns:** `int`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/0xCB82A0BF0E3E3265)

---
## _0xCFD16F0DB5A3535C
**Hash:** `0xCFD16F0DB5A3535C` | **Returns:** `void`

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xCFD16F0DB5A3535C)

---
## _0xD1C55B110E4DF534
**Hash:** `0xD1C55B110E4DF534` | **Returns:** `void`

```
SET_TV_???  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xD1C55B110E4DF534)

---
## _0xDB1EA9411C8911EC
**Hash:** `0xDB1EA9411C8911EC` | **Returns:** `void`

```
NativeDB Introduced: v1180
```

This native is used for the "larger" circular checkpoints, and sets the circle/ring around the checkpoint to point in the same direction as the inner arrow

**Parameters:**
| Name | Type |
|------|------|
| `checkpointHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/0xDB1EA9411C8911EC)

---
## _0xE2892E7E55D7073A
**Hash:** `0xE2892E7E55D7073A` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0xE2892E7E55D7073A)

---
## _0xE3E2C1B4C59DBC77
**Hash:** `0xE3E2C1B4C59DBC77` | **Returns:** `void`

```
Sets an unknown value related to timecycles.  
```

**Parameters:**
| Name | Type |
|------|------|
| `unk` | `int` |

[View docs](https://cfxnatives.dev/natives/0xE3E2C1B4C59DBC77)

---
## _0xE59343E9E96529E7
**Hash:** `0xE59343E9E96529E7` | **Returns:** `float`

```
Getter for 0xB3C641F3630BF6DA

GET_M*
```

[View docs](https://cfxnatives.dev/natives/0xE59343E9E96529E7)

---
## _0xE63D7C6EECECB66B
**Hash:** `0xE63D7C6EECECB66B` | **Returns:** `void`

```
TOGGLE_*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xE63D7C6EECECB66B)

---
## _0xE791DF1F73ED2C8B
**Hash:** `0xE791DF1F73ED2C8B` | **Returns:** `Any`

```
This function is hard-coded to always return 0.  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xE791DF1F73ED2C8B)

---
## _0xEC72C258667BE5EA
**Hash:** `0xEC72C258667BE5EA` | **Returns:** `Any`

```
This function is hard-coded to always return 0.  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xEC72C258667BE5EA)

---
## _0xEF398BEEE4EF45F9
**Hash:** `0xEF398BEEE4EF45F9` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xEF398BEEE4EF45F9)

---
## _0xEFABC7722293DA7C
**Hash:** `0xEFABC7722293DA7C` | **Returns:** `void`

```
AD*
```

[View docs](https://cfxnatives.dev/natives/0xEFABC7722293DA7C)

---
## _0xF3F776ADA161E47D
**Hash:** `0xF3F776ADA161E47D` | **Returns:** `void`

```
NativeDB Introduced: v1604
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xF3F776ADA161E47D)

---
## _0xF51D36185993515D
**Hash:** `0xF51D36185993515D` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `unkX` | `float` |
| `unkY` | `float` |
| `unkZ` | `float` |

[View docs](https://cfxnatives.dev/natives/0xF51D36185993515D)

---
## _0xF78B803082D4386F
**Hash:** `0xF78B803082D4386F` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0xF78B803082D4386F)

---
## _0xFCF6788FC4860CD4
**Hash:** `0xFCF6788FC4860CD4` | **Returns:** `void`

SET_CHECKPOINT_\*

```
NativeDB Introduced: v1734
```

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |

[View docs](https://cfxnatives.dev/natives/0xFCF6788FC4860CD4)

---
## _ADD_OIL_DECAL
**Hash:** `0x126D7F89FE859A5E` | **Returns:** `int`

```
NativeDB Introduced: v2699
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `groundLvl` | `float` |
| `width` | `float` |
| `transparency` | `float` |

[View docs](https://cfxnatives.dev/natives/_ADD_OIL_DECAL)

---
## _ANIMPOSTFX_GET_UNK
**Hash:** `0xE35B38A27E8E7179` | **Returns:** `float`

See [`ANIMPOSTFX_PLAY`](#\_0x2206BF9A37B7F724)

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |

[View docs](https://cfxnatives.dev/natives/_ANIMPOSTFX_GET_UNK)

---
## _ANIMPOSTFX_STOP_AND_DO_UNK
**Hash:** `0xD2209BE128B5418C` | **Returns:** `void`

Stops the effect and sets a value (bool) in its data (+0x199) to false; See [`ANIMPOSTFX_PLAY`](#\_0x2206BF9A37B7F724).

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |

[View docs](https://cfxnatives.dev/natives/_ANIMPOSTFX_STOP_AND_DO_UNK)

---
## _CASCADE_SHADOWS_CLEAR_SHADOW_SAMPLE_TYPE
**Hash:** `0x27CB772218215325` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/_CASCADE_SHADOWS_CLEAR_SHADOW_SAMPLE_TYPE)

---
## _CLEAR_EXTRA_TIMECYCLE_MODIFIER
**Hash:** `0x92CCC17A7A2285DA` | **Returns:** `void`

Clears the secondary timecycle modifier usually set with [`SetExtraTimecycleModifier`](#\_0x5096FD9CCB49056D)

[View docs](https://cfxnatives.dev/natives/_CLEAR_EXTRA_TIMECYCLE_MODIFIER)

---
## _DISABLE_SCRIPT_AMBIENT_EFFECTS
**Hash:** `0xEFD97FF47B745B8D` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/_DISABLE_SCRIPT_AMBIENT_EFFECTS)

---
## _DRAW_BINK_MOVIE
**Hash:** `0x7118E83EEB9F7238` | **Returns:** `void`

Must be called each frame, will play at specified position on screen when called with [`_PLAY_BINK_MOVIE`](#\_0x70D2CC8A542A973C)

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `scaleX` | `float` |
| `scaleY` | `float` |
| `rotation` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `a` | `int` |

**Example:**
```lua
Citizen.CreateThread(function()
    local binkint = SetBinkMovie("casino_trailer") -- BINK movie, list can be found at https://gist.github.com/ItsJunction/8046f28c29ea8ff2821e9e4f933f595f
    SetBinkMovieTime(binkint, 0.0) -- Seeks to 0%, just incase of errors.

    while (GetBinkMovieTime(binkint) < 100.0) do
        print(math.floor(GetBinkMovieTime(binkint) * 100)/100 .. "%") -- Prints current playtime (as percentage).
        PlayBinkMovie(binkint)
        DrawBinkMovie(binkint, 0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255) -- This example draws and plays in fullscreen in the center (no matter the resolution).
        Citizen.Wait(0)
    end
end)
```

[View docs](https://cfxnatives.dev/natives/_DRAW_BINK_MOVIE)

---
## _DRAW_INTERACTIVE_SPRITE
**Hash:** `0x2BC54A8188768488` | **Returns:** `void`

Similar to [\_DRAW_SPRITE](#\_0xE7FFAE5EBF23D890), but seems to be some kind of "interactive" sprite, at least used by render targets.
These seem to be the only dicts ever requested by this native:

```
prop_screen_biker_laptop
Prop_Screen_GR_Disruption
Prop_Screen_TaleOfUs
prop_screen_nightclub
Prop_Screen_IE_Adhawk
prop_screen_sm_free_trade_shipping
prop_screen_hacker_truck
MPDesktop
Prop_Screen_Nightclub
And a few others
```

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |
| `textureName` | `char*` |
| `screenX` | `float` |
| `screenY` | `float` |
| `width` | `float` |
| `height` | `float` |
| `heading` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/_DRAW_INTERACTIVE_SPRITE)

---
## _DRAW_LIGHT_WITH_RANGE_AND_SHADOW
**Hash:** `0xF49E9A9716A04595` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `range` | `float` |
| `intensity` | `float` |
| `shadow` | `float` |

[View docs](https://cfxnatives.dev/natives/_DRAW_LIGHT_WITH_RANGE_AND_SHADOW)

---
## _DRAW_MARKER_2
**Hash:** `0xE82728F0DE75D13A` | **Returns:** `void`

```
NativeDB Added Parameter 26: BOOL p25
```

**Parameters:**
| Name | Type |
|------|------|
| `type` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `dirX` | `float` |
| `dirY` | `float` |
| `dirZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `scaleX` | `float` |
| `scaleY` | `float` |
| `scaleZ` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |
| `bobUpAndDown` | `BOOL` |
| `faceCamera` | `BOOL` |
| `p19` | `int` |
| `rotate` | `BOOL` |
| `textureDict` | `char*` |
| `textureName` | `char*` |
| `drawOnEnts` | `BOOL` |
| `p24` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_DRAW_MARKER_2)

---
## _DRAW_SHOWROOM
**Hash:** `0x98C4FE6EC34154CA` | **Returns:** `BOOL`

```
It's called after 0xD3A10FC7FD8D98CD and 0xF1CEA8A4198D8E9A  
p0 was always "CELEBRATION_WINNER"  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `char*` |
| `ped` | `Ped` |
| `p2` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |

[View docs](https://cfxnatives.dev/natives/_DRAW_SHOWROOM)

---
## _DRAW_SPHERE
**Hash:** `0x799017F9E3B10112` | **Returns:** `void`

Draws a 3D sphere, typically seen in the GTA:O freemode event "Penned In".

Example [image](https://imgur.com/nCbtS4H):

```lua
DrawSphere(35.45, 172.66, 126.22, 1.0, 0, 0, 255, 0.2)
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `opacity` | `float` |

[View docs](https://cfxnatives.dev/natives/_DRAW_SPHERE)

---
## _DRAW_SPOT_LIGHT_WITH_SHADOW
**Hash:** `0x5BCA583A583194DB` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `dirX` | `float` |
| `dirY` | `float` |
| `dirZ` | `float` |
| `colorR` | `int` |
| `colorG` | `int` |
| `colorB` | `int` |
| `distance` | `float` |
| `brightness` | `float` |
| `roundness` | `float` |
| `radius` | `float` |
| `falloff` | `float` |
| `shadowId` | `int` |

[View docs](https://cfxnatives.dev/natives/_DRAW_SPOT_LIGHT_WITH_SHADOW)

---
## _DRAW_SPRITE_POLY_2
**Hash:** `0x736D7AA1B750856B` | **Returns:** `void`

Used for drawling Deadline trailing lights, see deadline.ytd

Each vertex has its own colour that is blended/illuminated on the texture. Additionally, the R, G, and B components are floats that are int-casted internally.

For UVW mapping (u,v,w parameters), reference your favourite internet resource for more details.

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
| `red1` | `float` |
| `green1` | `float` |
| `blue1` | `float` |
| `alpha1` | `int` |
| `red2` | `float` |
| `green2` | `float` |
| `blue2` | `float` |
| `alpha2` | `int` |
| `red3` | `float` |
| `green3` | `float` |
| `blue3` | `float` |
| `alpha3` | `int` |
| `textureDict` | `char*` |
| `textureName` | `char*` |
| `u1` | `float` |
| `v1` | `float` |
| `w1` | `float` |
| `u2` | `float` |
| `v2` | `float` |
| `w2` | `float` |
| `u3` | `float` |
| `v3` | `float` |
| `w3` | `float` |

[View docs](https://cfxnatives.dev/natives/_DRAW_SPRITE_POLY_2)

---
## _DRAW_SPRITE_UV
**Hash:** `0x95812F9B26074726` | **Returns:** `void`

Similar to DRAW_SPRITE, but allows to specify the texture coordinates used to draw the sprite.
u1, v1 - texture coordinates for the top-left corner
u2, v2 - texture coordinates for the bottom-right corner

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |
| `textureName` | `char*` |
| `x` | `float` |
| `y` | `float` |
| `width` | `float` |
| `height` | `float` |
| `u1` | `float` |
| `v1` | `float` |
| `u2` | `float` |
| `v2` | `float` |
| `heading` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/_DRAW_SPRITE_UV)

---
## _GET_BINK_MOVIE_TIME
**Hash:** `0x8E17DDD6B9D5BF29` | **Returns:** `float`

In percentage: 0.0 - 100.0

```
NativeDB Introduced: v1734
```

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |

[View docs](https://cfxnatives.dev/natives/_GET_BINK_MOVIE_TIME)

---
## _GET_EXTRA_TIMECYCLE_MODIFIER_INDEX
**Hash:** `0xBB0527EC6341496D` | **Returns:** `int`

See [`GET_TIMECYCLE_MODIFIER_INDEX`](#\_0xFDF3D97C674AFB66) for use, works the same just for the secondary timecycle modifier.

[View docs](https://cfxnatives.dev/natives/_GET_EXTRA_TIMECYCLE_MODIFIER_INDEX)

---
## _GET_SCRIPT_GFX_POSITION
**Hash:** `0x6DD8F5AA635EB4B2` | **Returns:** `void`

Calculates the effective X/Y fractions when applying the values set by `SET_SCRIPT_GFX_ALIGN` and
`SET_SCRIPT_GFX_ALIGN_PARAMS`.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `calculatedX` | `float*` |
| `calculatedY` | `float*` |

**Example:**
```lua
local calcX, calcX = GetScriptGfxPosition(0.2, 0.2)
```

[View docs](https://cfxnatives.dev/natives/_GET_SCRIPT_GFX_POSITION)

---
## _GRASS_LOD_RESET_SCRIPT_AREAS
**Hash:** `0x302C91AB2D477F7E` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/_GRASS_LOD_RESET_SCRIPT_AREAS)

---
## _GRASS_LOD_SHRINK_SCRIPT_AREAS
**Hash:** `0x6D955F6A9E0295B1` | **Returns:** `void`

```
Wraps 0xAAE9BE70EC7C69AB with FLT_MAX as p7, Jenkins: 0x73E96210?
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `float` |

[View docs](https://cfxnatives.dev/natives/_GRASS_LOD_SHRINK_SCRIPT_AREAS)

---
## _IS_PLAYLIST_UNK
**Hash:** `0x1F710BFF7DAE6261` | **Returns:** `BOOL`

```
NativeDB Introduced: v1604
```

**Parameters:**
| Name | Type |
|------|------|
| `tvChannel` | `int` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/_IS_PLAYLIST_UNK)

---
## _IS_TV_PLAYLIST_ITEM_PLAYING
**Hash:** `0x0AD973CA1E077B60` | **Returns:** `BOOL`

```
IS_*
```

**Parameters:**
| Name | Type |
|------|------|
| `videoCliphash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_IS_TV_PLAYLIST_ITEM_PLAYING)

---
## _OVERRIDE_PED_BADGE_TEXTURE
**Hash:** `0x95EB5E34F821BABE` | **Returns:** `BOOL`

```
Overriding ped badge texture to a passed texture. It's synced between players (even custom textures!), don't forget to request used dict on *all* clients to make it sync properly. Can be removed by passing empty strings.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `txd` | `char*` |
| `txn` | `char*` |

[View docs](https://cfxnatives.dev/natives/_OVERRIDE_PED_BADGE_TEXTURE)

---
## _PLAY_BINK_MOVIE
**Hash:** `0x70D2CC8A542A973C` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |

[View docs](https://cfxnatives.dev/natives/_PLAY_BINK_MOVIE)

---
## _REGISTER_NOIR_SCREEN_EFFECT_THIS_FRAME
**Hash:** `0xA44FF770DFBC5DAE` | **Returns:** `void`

Used with 'NG_filmnoir_BW{01,02}' timecycles and the "NOIR_FILTER_SOUNDS" audioref.

[View docs](https://cfxnatives.dev/natives/_REGISTER_NOIR_SCREEN_EFFECT_THIS_FRAME)

---
## _RELEASE_BINK_MOVIE
**Hash:** `0x04D950EEFA4EED8C` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |

[View docs](https://cfxnatives.dev/natives/_RELEASE_BINK_MOVIE)

---
## _RETURN_TWO
**Hash:** `0x40AFB081F8ADD4EE` | **Returns:** `int`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/_RETURN_TWO)

---
## _SEETHROUGH_GET_MAX_THICKNESS
**Hash:** `0x43DBAE39626CE83F` | **Returns:** `float`

```
NativeDB Introduced: v1290
```

[View docs](https://cfxnatives.dev/natives/_SEETHROUGH_GET_MAX_THICKNESS)

---
## _SEETHROUGH_SET_FADE_END_DISTANCE
**Hash:** `0x9D75795B9DC6EBBF` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `distance` | `float` |

[View docs](https://cfxnatives.dev/natives/_SEETHROUGH_SET_FADE_END_DISTANCE)

---
## _SEETHROUGH_SET_FADE_START_DISTANCE
**Hash:** `0xA78DE25577300BA1` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `distance` | `float` |

[View docs](https://cfxnatives.dev/natives/_SEETHROUGH_SET_FADE_START_DISTANCE)

---
## _SEETHROUGH_SET_HI_LIGHT_INTENSITY
**Hash:** `0x19E50EB6E33E1D28` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `intensity` | `float` |

[View docs](https://cfxnatives.dev/natives/_SEETHROUGH_SET_HI_LIGHT_INTENSITY)

---
## _SEETHROUGH_SET_HI_LIGHT_NOISE
**Hash:** `0x1636D7FC127B10D2` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `noise` | `float` |

[View docs](https://cfxnatives.dev/natives/_SEETHROUGH_SET_HI_LIGHT_NOISE)

---
## _SEETHROUGH_SET_MAX_THICKNESS
**Hash:** `0x0C8FAC83902A62DF` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `thickness` | `float` |

[View docs](https://cfxnatives.dev/natives/_SEETHROUGH_SET_MAX_THICKNESS)

---
## _SEETHROUGH_SET_NOISE_AMOUNT_MAX
**Hash:** `0xFEBFBFDFB66039DE` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `amount` | `float` |

[View docs](https://cfxnatives.dev/natives/_SEETHROUGH_SET_NOISE_AMOUNT_MAX)

---
## _SEETHROUGH_SET_NOISE_AMOUNT_MIN
**Hash:** `0xFF5992E1C9E65D05` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `amount` | `float` |

[View docs](https://cfxnatives.dev/natives/_SEETHROUGH_SET_NOISE_AMOUNT_MIN)

---
## _SET_ARTIFICIAL_LIGHTS_STATE_AFFECTS_VEHICLES
**Hash:** `0xE2B187C0939B3D32` | **Returns:** `void`

If "blackout" is enabled, this native allows you to ignore "blackout" for vehicles.

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_ARTIFICIAL_LIGHTS_STATE_AFFECTS_VEHICLES)

---
## _SET_BINK_MOVIE
**Hash:** `0x338D9F609FD632DB` | **Returns:** `int`

Creates an integer (usually 1) for a BINK movie to be called with other natives.
[List of all BINK movies (alphabetically ordered) as of b2802](https://gist.github.com/ItsJunction/8046f28c29ea8ff2821e9e4f933f595f)

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

**Example:**
```lua
Citizen.CreateThread(function()
    local binkint = SetBinkMovie("casino_trailer")
    SetBinkMovieTime(binkint, 0.0) -- Seeks to 0%

    while (GetBinkMovieTime(binkint) < 100.0) do -- Very Basic Idea That Works?
        print(math.floor(GetBinkMovieTime(binkint) * 100)/100 .. "%") -- Prints current playtime (as percentage).
        PlayBinkMovie(binkint)
        DrawBinkMovie(binkint, 0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255) -- This example draws and plays in Fullscreen and in the center of screen (no matter the resolution).
        Citizen.Wait(0)
    end
end)
```

[View docs](https://cfxnatives.dev/natives/_SET_BINK_MOVIE)

---
## _SET_BINK_MOVIE_TIME
**Hash:** `0x0CB6B3446855B57A` | **Returns:** `void`

Seeks a BINK movie to a specified position.

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |
| `progress` | `float` |

**Example:**
```lua
-- Movie drawn prior
SetBinkMovieTime(1, 50.0) -- Seeks to 50% in.
```

[View docs](https://cfxnatives.dev/natives/_SET_BINK_MOVIE_TIME)

---
## _SET_BINK_MOVIE_UNK_2
**Hash:** `0xF816F2933752322D` | **Returns:** `void`

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_BINK_MOVIE_UNK_2)

---
## _SET_BINK_MOVIE_VOLUME
**Hash:** `0xAFF33B1178172223` | **Returns:** `void`

```
binkMovie: Is return value from _SET_BINK_MOVIE. Has something to do with bink volume? (audRequestedSettings::SetVolumeCurveScale)
```

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_BINK_MOVIE_VOLUME)

---
## _SET_BINK_SHOULD_SKIP
**Hash:** `0x6805D58CAA427B72` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |
| `shouldSkip` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_BINK_SHOULD_SKIP)

---
## _SET_CHECKPOINT_ICON_HEIGHT
**Hash:** `0x4B5B4DA5D79F1943` | **Returns:** `void`

This multiplies the height of the icon inside a checkpoint with the default height of about 2 units above the checkpoint's coordinates.

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |
| `height_multiplier` | `float` |

**Example:**
```lua
local checkpoint = CreateCheckpoint(...)
SetCheckpointIconHeight(checkpoint, 2.0) -- places the icon two times as high as the default.
```

[View docs](https://cfxnatives.dev/natives/_SET_CHECKPOINT_ICON_HEIGHT)

---
## _SET_CHECKPOINT_ICON_SCALE
**Hash:** `0x44621483FF966526` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |
| `scale` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_CHECKPOINT_ICON_SCALE)

---
## _SET_EXTRA_TIMECYCLE_MODIFIER
**Hash:** `0x5096FD9CCB49056D` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |

[View docs](https://cfxnatives.dev/natives/_SET_EXTRA_TIMECYCLE_MODIFIER)

---
## _SET_FORCE_PED_FOOTSTEPS_TRACKS
**Hash:** `0xAEEDAD1420C65CC0` | **Returns:** `void`

```
Forces footstep tracks on all surfaces.
USE_/USING_*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_FORCE_PED_FOOTSTEPS_TRACKS)

---
## _SET_FORCE_VEHICLE_TRAILS
**Hash:** `0x4CC7F0FEA5283FE0` | **Returns:** `void`

```
Forces vehicle trails on all surfaces.
USE_/USING_*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_FORCE_VEHICLE_TRAILS)

---
## _SET_PARTICLE_FX_NON_LOOPED_EMITTER_SCALE
**Hash:** `0x1E2E01C00837D26E` | **Returns:** `void`

```
NativeDB Introduced: v2699
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |
| `p1` | `float` |
| `scale` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_PARTICLE_FX_NON_LOOPED_EMITTER_SCALE)

---
## _START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY_BONE
**Hash:** `0x02B1F2A72E0F5325` | **Returns:** `BOOL`

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `entity` | `Entity` |
| `offsetX` | `float` |
| `offsetY` | `float` |
| `offsetZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `boneIndex` | `int` |
| `scale` | `float` |
| `axisX` | `BOOL` |
| `axisY` | `BOOL` |
| `axisZ` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY_BONE)

---
## _STOP_BINK_MOVIE
**Hash:** `0x63606A61DE68898A` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `binkMovie` | `int` |

[View docs](https://cfxnatives.dev/natives/_STOP_BINK_MOVIE)

---
## ADD_DECAL
**Hash:** `0xB302244A1839BDAD` | **Returns:** `int`
**Alt name:** `AddDecal`

Places a decal into the world

```cs
public enum DecalTypes  
{  
    splatters_blood = 1010,  
    splatters_blood_dir = 1015,  
    splatters_blood_mist = 1017,  
    splatters_mud = 1020,  
    splatters_paint = 1030,  
    splatters_water = 1040,  
    splatters_water_hydrant = 1050,  
    splatters_blood2 = 1110,  
    weapImpact_metal = 4010,  
    weapImpact_concrete = 4020,  
    weapImpact_mattress = 4030,  
    weapImpact_mud = 4032,  
    weapImpact_wood = 4050,  
    weapImpact_sand = 4053,  
    weapImpact_cardboard = 4040,  
    weapImpact_melee_glass = 4100,  
    weapImpact_glass_blood = 4102,  
    weapImpact_glass_blood2 = 4104,  
    weapImpact_shotgun_paper = 4200,  
    weapImpact_shotgun_mattress,  
    weapImpact_shotgun_metal,  
    weapImpact_shotgun_wood,  
    weapImpact_shotgun_dirt,  
    weapImpact_shotgun_tvscreen,  
    weapImpact_shotgun_tvscreen2,  
    weapImpact_shotgun_tvscreen3,  
    weapImpact_melee_concrete = 4310,  
    weapImpact_melee_wood = 4312,  
    weapImpact_melee_metal = 4314,  
    burn1 = 4421,  
    burn2,  
    burn3,  
    burn4,  
    burn5,  
    bang_concrete_bang = 5000,  
    bang_concrete_bang2,  
    bang_bullet_bang,  
    bang_bullet_bang2 = 5004,  
    bang_glass = 5031,  
    bang_glass2,  
    solidPool_water = 9000,  
    solidPool_blood,  
    solidPool_oil,  
    solidPool_petrol,  
    solidPool_mud,  
    porousPool_water,  
    porousPool_blood,  
    porousPool_oil,  
    porousPool_petrol,  
    porousPool_mud,  
    porousPool_water_ped_drip,  
    liquidTrail_water = 9050  
}  
```

**Parameters:**
| Name | Type |
|------|------|
| `decalType` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `dirX` | `float` |
| `dirY` | `float` |
| `dirZ` | `float` |
| `sideX` | `float` |
| `sideY` | `float` |
| `sideZ` | `float` |
| `width` | `float` |
| `height` | `float` |
| `rCoef` | `float` |
| `gCoef` | `float` |
| `bCoef` | `float` |
| `opacity` | `float` |
| `timeout` | `float` |
| `isLongRange` | `BOOL` |
| `isDynamic` | `BOOL` |
| `useComplexColn` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ADD_DECAL)

---
## ADD_ENTITY_ICON
**Hash:** `0x9CD43EEE12BF4DD0` | **Returns:** `Any`
**Alt name:** `AddEntityIcon`

```
Example:  
GRAPHICS::ADD_ENTITY_ICON(a_0, "MP_Arrow");  
I tried this and nothing happened...  
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `icon` | `char*` |

[View docs](https://cfxnatives.dev/natives/ADD_ENTITY_ICON)

---
## ADD_PETROL_DECAL
**Hash:** `0x4F5212C7AD880DF8` | **Returns:** `int`
**Alt name:** `AddPetrolDecal`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `groundLvl` | `float` |
| `width` | `float` |
| `transparency` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_PETROL_DECAL)

---
## ADD_PETROL_TRAIL_DECAL_INFO
**Hash:** `0x967278682CB6967A` | **Returns:** `void`
**Alt name:** `AddPetrolTrailDecalInfo`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `p3` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_PETROL_TRAIL_DECAL_INFO)

---
## ADD_TCMODIFIER_OVERRIDE
**Hash:** `0x1A8E2C8B9CF4549C` | **Returns:** `void`
**Alt name:** `AddTcmodifierOverride`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName1` | `char*` |
| `modifierName2` | `char*` |

[View docs](https://cfxnatives.dev/natives/ADD_TCMODIFIER_OVERRIDE)

---
## ADD_VEHICLE_CREW_EMBLEM
**Hash:** `0x428BDCB9DA58DA53` | **Returns:** `BOOL`
**Alt name:** `AddVehicleCrewEmblem`

```
boneIndex is always chassis_dummy in the scripts. The x/y/z params are location relative to the chassis bone.
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `ped` | `Ped` |
| `boneIndex` | `int` |
| `x1` | `float` |
| `x2` | `float` |
| `x3` | `float` |
| `y1` | `float` |
| `y2` | `float` |
| `y3` | `float` |
| `z1` | `float` |
| `z2` | `float` |
| `z3` | `float` |
| `scale` | `float` |
| `p13` | `Any` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/ADD_VEHICLE_CREW_EMBLEM)

---
## ANIMPOSTFX_IS_RUNNING
**Hash:** `0x36AD3E690DA5ACEB` | **Returns:** `BOOL`
**Alt name:** `AnimpostfxIsRunning`

See [`ANIMPOSTFX_PLAY`](#\_0x2206BF9A37B7F724).

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |

[View docs](https://cfxnatives.dev/natives/ANIMPOSTFX_IS_RUNNING)

---
## ANIMPOSTFX_PLAY
**Hash:** `0x2206BF9A37B7F724` | **Returns:** `void`
**Alt name:** `AnimpostfxPlay`

```
duration - is how long to play the effect for in milliseconds. If 0, it plays the default length
if loop is true, the effect won't stop until you call ANIMPOSTFX_STOP on it. (only loopable effects)
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `duration` | `int` |
| `looped` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ANIMPOSTFX_PLAY)

---
## ANIMPOSTFX_STOP
**Hash:** `0x068E835A1D0DC0E3` | **Returns:** `void`
**Alt name:** `AnimpostfxStop`

See [`ANIMPOSTFX_PLAY`](#\_0x2206BF9A37B7F724).

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |

[View docs](https://cfxnatives.dev/natives/ANIMPOSTFX_STOP)

---
## ANIMPOSTFX_STOP_ALL
**Hash:** `0xB4EDDC19532BFB85` | **Returns:** `void`
**Alt name:** `AnimpostfxStopAll`

[View docs](https://cfxnatives.dev/natives/ANIMPOSTFX_STOP_ALL)

---
## ATTACH_TV_AUDIO_TO_ENTITY
**Hash:** `0x845BAD77CC770633` | **Returns:** `void`
**Alt name:** `AttachTvAudioToEntity`

```
Might be more appropriate in AUDIO?  
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/ATTACH_TV_AUDIO_TO_ENTITY)

---
## BEGIN_SCALEFORM_MOVIE_METHOD
**Hash:** `0xF6E48914C7A8694E` | **Returns:** `BOOL`
**Alt name:** `BeginScaleformMovieMethod`

```
Push a function from the Scaleform onto the stack  
```

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `methodName` | `char*` |

[View docs](https://cfxnatives.dev/natives/BEGIN_SCALEFORM_MOVIE_METHOD)

---
## BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND
**Hash:** `0xAB58C27C2E6123C6` | **Returns:** `BOOL`
**Alt name:** `BeginScaleformMovieMethodOnFrontend`

Starts frontend (pause menu) scaleform movie methods.
This can be used when you want to make custom frontend menus, and customize things like images or text in the menus etc.

Use [`BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND_HEADER`](#\_0xB9449845F73F5E9C) for header scaleform functions.

**Parameters:**
| Name | Type |
|------|------|
| `functionName` | `char*` |

[View docs](https://cfxnatives.dev/natives/BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND)

---
## BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND_HEADER
**Hash:** `0xB9449845F73F5E9C` | **Returns:** `BOOL`
**Alt name:** `BeginScaleformMovieMethodOnFrontendHeader`

Starts frontend (pause menu) scaleform movie methods for header options.

Use [`BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND`](#\_0xAB58C27C2E6123C6) to customize the content inside the frontend menus.

**Parameters:**
| Name | Type |
|------|------|
| `functionName` | `char*` |

[View docs](https://cfxnatives.dev/natives/BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND_HEADER)

---
## BEGIN_SCALEFORM_SCRIPT_HUD_MOVIE_METHOD
**Hash:** `0x98C494FD5BDFBFD5` | **Returns:** `BOOL`
**Alt name:** `BeginScaleformScriptHudMovieMethod`

```
Pushes a function from the Hud component Scaleform onto the stack. Same behavior as GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD, just a hud component id instead of a Scaleform.
Known components:
19 - MP_RANK_BAR
20 - HUD_DIRECTOR_MODE
This native requires more research - all information can be found inside of 'hud.gfx'. Using a decompiler, the different components are located under "scripts\__Packages\com\rockstargames\gtav\hud\hudComponents" and "scripts\__Packages\com\rockstargames\gtav\Multiplayer".
```

**Parameters:**
| Name | Type |
|------|------|
| `hudComponent` | `int` |
| `methodName` | `char*` |

[View docs](https://cfxnatives.dev/natives/BEGIN_SCALEFORM_SCRIPT_HUD_MOVIE_METHOD)

---
## BEGIN_TAKE_HIGH_QUALITY_PHOTO
**Hash:** `0xA67C35C56EB1BD9D` | **Returns:** `BOOL`
**Alt name:** `BeginTakeHighQualityPhoto`

[View docs](https://cfxnatives.dev/natives/BEGIN_TAKE_HIGH_QUALITY_PHOTO)

---
## BEGIN_TAKE_MISSION_CREATOR_PHOTO
**Hash:** `0x1DD2139A9A20DCE8` | **Returns:** `BOOL`
**Alt name:** `BeginTakeMissionCreatorPhoto`

[View docs](https://cfxnatives.dev/natives/BEGIN_TAKE_MISSION_CREATOR_PHOTO)

---
## BEGIN_TEXT_COMMAND_SCALEFORM_STRING
**Hash:** `0x80338406F3475E55` | **Returns:** `void`
**Alt name:** `BeginTextCommandScaleformString`

```
Called prior to adding a text component to the UI. After doing so, GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING is called.
Examples:
GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("NUMBER");
HUD::ADD_TEXT_COMPONENT_INTEGER(MISC::ABSI(a_1));
GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRING");
HUD::_ADD_TEXT_COMPONENT_STRING(a_2);
GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM2");
HUD::_0x17299B63C7683A2B(v_3);
HUD::_0x17299B63C7683A2B(v_4);
GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM1");
HUD::_0x17299B63C7683A2B(v_3);
GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
```

**Parameters:**
| Name | Type |
|------|------|
| `textLabel` | `char*` |

[View docs](https://cfxnatives.dev/natives/BEGIN_TEXT_COMMAND_SCALEFORM_STRING)

---
## CALL_SCALEFORM_MOVIE_METHOD
**Hash:** `0xFBD96D87AC96D533` | **Returns:** `void`
**Alt name:** `CallScaleformMovieMethod`

```
Calls the Scaleform function.  
```

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `method` | `char*` |

[View docs](https://cfxnatives.dev/natives/CALL_SCALEFORM_MOVIE_METHOD)

---
## CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER
**Hash:** `0xD0837058AE2E4BEE` | **Returns:** `void`
**Alt name:** `CallScaleformMovieMethodWithNumber`

```
Calls the Scaleform function and passes the parameters as floats.  
The number of parameters passed to the function varies, so the end of the parameter list is represented by -1.0.  
```

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `methodName` | `char*` |
| `param1` | `float` |
| `param2` | `float` |
| `param3` | `float` |
| `param4` | `float` |
| `param5` | `float` |

[View docs](https://cfxnatives.dev/natives/CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER)

---
## CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING
**Hash:** `0xEF662D8D57E290B1` | **Returns:** `void`
**Alt name:** `CallScaleformMovieMethodWithNumberAndString`

```
Calls the Scaleform function and passes both float and string parameters (in their respective order).  
The number of parameters passed to the function varies, so the end of the float parameters is represented by -1.0, and the end of the string parameters is represented by 0 (NULL).  
NOTE: The order of parameters in the function prototype is important! All float parameters must come first, followed by the string parameters.  
Examples:  
// function MY_FUNCTION(floatParam1, floatParam2, stringParam)  
GRAPHICS::_CALL_SCALEFORM_MOVIE_FUNCTION_MIXED_PARAMS(scaleform, "MY_FUNCTION", 10.0, 20.0, -1.0, -1.0, -1.0, "String param", 0, 0, 0, 0);  
// function MY_FUNCTION_2(floatParam, stringParam1, stringParam2)  
GRAPHICS::_CALL_SCALEFORM_MOVIE_FUNCTION_MIXED_PARAMS(scaleform, "MY_FUNCTION_2", 10.0, -1.0, -1.0, -1.0, -1.0, "String param #1", "String param #2", 0, 0, 0);  
```

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `methodName` | `char*` |
| `floatParam1` | `float` |
| `floatParam2` | `float` |
| `floatParam3` | `float` |
| `floatParam4` | `float` |
| `floatParam5` | `float` |
| `stringParam1` | `char*` |
| `stringParam2` | `char*` |
| `stringParam3` | `char*` |
| `stringParam4` | `char*` |
| `stringParam5` | `char*` |

[View docs](https://cfxnatives.dev/natives/CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING)

---
## CALL_SCALEFORM_MOVIE_METHOD_WITH_STRING
**Hash:** `0x51BC1ED3CC44E8F7` | **Returns:** `void`
**Alt name:** `CallScaleformMovieMethodWithString`

```
Calls the Scaleform function and passes the parameters as strings.  
The number of parameters passed to the function varies, so the end of the parameter list is represented by 0 (NULL).  
```

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `methodName` | `char*` |
| `param1` | `char*` |
| `param2` | `char*` |
| `param3` | `char*` |
| `param4` | `char*` |
| `param5` | `char*` |

[View docs](https://cfxnatives.dev/natives/CALL_SCALEFORM_MOVIE_METHOD_WITH_STRING)

---
## CASCADE_SHADOWS_ENABLE_ENTITY_TRACKER
**Hash:** `0x80ECBC0C856D3B0B` | **Returns:** `void`
**Alt name:** `CascadeShadowsEnableEntityTracker`

```
When this is set to ON, shadows only draw as you get nearer.
When OFF, they draw from a further distance.
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_ENABLE_ENTITY_TRACKER)

---
## CASCADE_SHADOWS_INIT_SESSION
**Hash:** `0x03FC694AE06C5A20` | **Returns:** `void`
**Alt name:** `CascadeShadowsInitSession`

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_INIT_SESSION)

---
## CASCADE_SHADOWS_SET_AIRCRAFT_MODE
**Hash:** `0x6DDBF9DFFC4AC080` | **Returns:** `void`
**Alt name:** `CascadeShadowsSetAircraftMode`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_SET_AIRCRAFT_MODE)

---
## CASCADE_SHADOWS_SET_CASCADE_BOUNDS
**Hash:** `0xD2936CAB8B58FCBD` | **Returns:** `void`
**Alt name:** `CascadeShadowsSetCascadeBounds`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `BOOL` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `BOOL` |
| `p7` | `float` |

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_SET_CASCADE_BOUNDS)

---
## CASCADE_SHADOWS_SET_CASCADE_BOUNDS_SCALE
**Hash:** `0x5F0F3F56635809EF` | **Returns:** `void`
**Alt name:** `CascadeShadowsSetCascadeBoundsScale`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_SET_CASCADE_BOUNDS_SCALE)

---
## CASCADE_SHADOWS_SET_DYNAMIC_DEPTH_MODE
**Hash:** `0xD39D13C9FEBF0511` | **Returns:** `void`
**Alt name:** `CascadeShadowsSetDynamicDepthMode`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_SET_DYNAMIC_DEPTH_MODE)

---
## CASCADE_SHADOWS_SET_DYNAMIC_DEPTH_VALUE
**Hash:** `0x02AC28F3A01FA04A` | **Returns:** `void`
**Alt name:** `CascadeShadowsSetDynamicDepthValue`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_SET_DYNAMIC_DEPTH_VALUE)

---
## CASCADE_SHADOWS_SET_ENTITY_TRACKER_SCALE
**Hash:** `0x5E9DAF5A20F15908` | **Returns:** `void`
**Alt name:** `CascadeShadowsSetEntityTrackerScale`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_SET_ENTITY_TRACKER_SCALE)

---
## CASCADE_SHADOWS_SET_SHADOW_SAMPLE_TYPE
**Hash:** `0xB11D94BC55F41932` | **Returns:** `void`
**Alt name:** `CascadeShadowsSetShadowSampleType`

```
Possible values:
"CSM_ST_POINT"
"CSM_ST_LINEAR"
"CSM_ST_TWOTAP"
"CSM_ST_BOX3x3"
"CSM_ST_BOX4x4"
"CSM_ST_DITHER2_LINEAR"
"CSM_ST_CUBIC"
"CSM_ST_DITHER4"
"CSM_ST_DITHER16"
"CSM_ST_SOFT16"
"CSM_ST_DITHER16_RPDB"
"CSM_ST_POISSON16_RPDB_GNORM"
"CSM_ST_HIGHRES_BOX4x4"
"CSM_ST_CLOUDS_SIMPLE"
"CSM_ST_CLOUDS_LINEAR"
"CSM_ST_CLOUDS_TWOTAP"
"CSM_ST_CLOUDS_BOX3x3"
"CSM_ST_CLOUDS_BOX4x4"
"CSM_ST_CLOUDS_DITHER2_LINEAR"
"CSM_ST_CLOUDS_SOFT16"
"CSM_ST_CLOUDS_DITHER16_RPDB"
"CSM_ST_CLOUDS_POISSON16_RPDB_GNORM"
```

**Parameters:**
| Name | Type |
|------|------|
| `type` | `char*` |

[View docs](https://cfxnatives.dev/natives/CASCADE_SHADOWS_SET_SHADOW_SAMPLE_TYPE)

---
## CLEAR_DRAW_ORIGIN
**Hash:** `0xFF0B610F6BE0D7AF` | **Returns:** `void`
**Alt name:** `ClearDrawOrigin`

Resets the screen's draw-origin which was changed by the function [`SET_DRAW_ORIGIN`](#\_0xAA0008F3BBB8F416) back to `x=0, y=0`. See [`SET_DRAW_ORIGIN`](#\_0xAA0008F3BBB8F416) for further information.

[View docs](https://cfxnatives.dev/natives/GRAPHICS~CLEAR_DRAW_ORIGIN)

---
## CLEAR_TIMECYCLE_MODIFIER
**Hash:** `0x0F07E7745A236711` | **Returns:** `void`
**Alt name:** `ClearTimecycleModifier`

[View docs](https://cfxnatives.dev/natives/CLEAR_TIMECYCLE_MODIFIER)

---
## CLEAR_TV_CHANNEL_PLAYLIST
**Hash:** `0xBEB3D46BB7F043C0` | **Returns:** `void`
**Alt name:** `ClearTvChannelPlaylist`

**Parameters:**
| Name | Type |
|------|------|
| `tvChannel` | `int` |

[View docs](https://cfxnatives.dev/natives/CLEAR_TV_CHANNEL_PLAYLIST)

---
## CREATE_CHECKPOINT
**Hash:** `0x0134F0835AB6BFCB` | **Returns:** `int`
**Alt name:** `CreateCheckpoint`

```
Creates a checkpoint. Returns the handle of the checkpoint.  
20/03/17 : Attention, checkpoints are already handled by the game itself, so you must not loop it like markers.
Parameters:  
* type - The type of checkpoint to create. See below for a list of checkpoint types.  
* pos1 - The position of the checkpoint.  
* pos2 - The position of the next checkpoint to point to.  
* diameter - The diameter of the checkpoint.
* color - The color of the checkpoint.  
* reserved - Special parameter, see below for details. Usually set to 0 in the scripts.  
Checkpoint types (prior to game build 2189):  
0-4---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker  
5-9---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker  
10-14-------Ring: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker  
15-19-------1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker        
20-24-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker   
25-29-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker      
30-34-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker   
35-38-------Ring: Airplane Up, Left, Right, UpsideDown  
39----------?  
40----------Ring: just a ring  
41----------?  
42-44-------Cylinder w/ number (uses 'reserved' parameter)  
45-47-------Cylinder no arrow or number  
If using type 42-44, reserved sets number / number and shape to display  
0-99------------Just numbers (0-99)  
100-109-----------------Arrow (0-9)  
110-119------------Two arrows (0-9)  
120-129----------Three arrows (0-9)  
130-139----------------Circle (0-9)  
140-149------------CycleArrow (0-9)  
150-159----------------Circle (0-9)  
160-169----Circle  w/ pointer (0-9)  
170-179-------Perforated ring (0-9)  
180-189----------------Sphere (0-9)  
```

[Checkpoint Types](https://docs.fivem.net/docs/game-references/checkpoints/) as of game build 2189

**Parameters:**
| Name | Type |
|------|------|
| `type` | `int` |
| `posX1` | `float` |
| `posY1` | `float` |
| `posZ1` | `float` |
| `posX2` | `float` |
| `posY2` | `float` |
| `posZ2` | `float` |
| `diameter` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |
| `reserved` | `int` |

[View docs](https://cfxnatives.dev/natives/CREATE_CHECKPOINT)

---
## CREATE_TRACKED_POINT
**Hash:** `0xE2C9439ED45DEA60` | **Returns:** `int`
**Alt name:** `CreateTrackedPoint`

Creates a tracked point: useful for checking the visibility of a 3D point on screen.

Tracked points must be manually managed and will not be destroyed on resource stop (they are not an instance of CScriptResource). See [`DESTROY_TRACKED_POINT`](#\_0xB25DC90BAD56CA42) and [onResourceStop](https://docs.fivem.net/docs/scripting-reference/events/list/onResourceStop/).

Only 64 points may be tracked at a given time.

[View docs](https://cfxnatives.dev/natives/CREATE_TRACKED_POINT)

---
## DELETE_CHECKPOINT
**Hash:** `0xF5ED37F54CD4D52E` | **Returns:** `void`
**Alt name:** `DeleteCheckpoint`

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |

[View docs](https://cfxnatives.dev/natives/DELETE_CHECKPOINT)

---
## DESTROY_TRACKED_POINT
**Hash:** `0xB25DC90BAD56CA42` | **Returns:** `void`
**Alt name:** `DestroyTrackedPoint`

**Parameters:**
| Name | Type |
|------|------|
| `point` | `int` |

[View docs](https://cfxnatives.dev/natives/DESTROY_TRACKED_POINT)

---
## DISABLE_MOON_CYCLE_OVERRIDE
**Hash:** `0x2BF72AD5B41AA739` | **Returns:** `void`
**Alt name:** `DisableMoonCycleOverride`

Removes any custom moon cycle overrides that have been configured with [ENABLE_MOON_CYCLE_OVERRIDE](#\_0x2C328AF17210F009)

**Example:**
```lua
DisableMoonCycleOverride()
```

[View docs](https://cfxnatives.dev/natives/DISABLE_MOON_CYCLE_OVERRIDE)

---
## DISABLE_OCCLUSION_THIS_FRAME
**Hash:** `0x3669F1B198DCAA4F` | **Returns:** `void`
**Alt name:** `DisableOcclusionThisFrame`

[View docs](https://cfxnatives.dev/natives/DISABLE_OCCLUSION_THIS_FRAME)

---
## DISABLE_SCREENBLUR_FADE
**Hash:** `0xDE81239437E8C5A8` | **Returns:** `void`
**Alt name:** `DisableScreenblurFade`

[View docs](https://cfxnatives.dev/natives/DISABLE_SCREENBLUR_FADE)

---
## DISABLE_VEHICLE_DISTANTLIGHTS
**Hash:** `0xC9F98AC1884E73A2` | **Returns:** `void`
**Alt name:** `DisableVehicleDistantlights`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DISABLE_VEHICLE_DISTANTLIGHTS)

---
## DOES_LATEST_BRIEF_STRING_EXIST
**Hash:** `0x5E657EF1099EDD65` | **Returns:** `BOOL`
**Alt name:** `DoesLatestBriefStringExist`

Used in pi_menu.c. Checks if there is a brief entry for specified value.
Values:
0 - Dialogue brief
1 - Help text brief
2 - Mission Objective brief

**Parameters:**
| Name | Type |
|------|------|
| `briefValue` | `int` |

[View docs](https://cfxnatives.dev/natives/DOES_LATEST_BRIEF_STRING_EXIST)

---
## DOES_PARTICLE_FX_LOOPED_EXIST
**Hash:** `0x74AFEF0D2E1E409B` | **Returns:** `BOOL`
**Alt name:** `DoesParticleFxLoopedExist`

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/DOES_PARTICLE_FX_LOOPED_EXIST)

---
## DOES_VEHICLE_HAVE_CREW_EMBLEM
**Hash:** `0x060D935D3981A275` | **Returns:** `BOOL`
**Alt name:** `DoesVehicleHaveCrewEmblem`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/DOES_VEHICLE_HAVE_CREW_EMBLEM)

---
## DONT_RENDER_IN_GAME_UI
**Hash:** `0x22A249A53034450A` | **Returns:** `void`
**Alt name:** `DontRenderInGameUi`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DONT_RENDER_IN_GAME_UI)

---
## DRAW_BOX
**Hash:** `0xD3A9971CADAC7252` | **Returns:** `void`
**Alt name:** `DrawBox`

This native draws a box between two vectors in the game world. It is typically used for visualizing boundaries or areas of interest. The color of the box is specified by the red, green, and blue parameters, with alpha determining its opacity. This native should be called every frame for continuous rendering.

```
NativeDB Introduced: v323
```

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

[View docs](https://cfxnatives.dev/natives/GRAPHICS~DRAW_BOX)

---
## DRAW_DEBUG_BOX
**Hash:** `0x083A2CA4F2E573BD` | **Returns:** `void`
**Alt name:** `DrawDebugBox`

```
NOTE: Debugging functions are not present in the retail version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `a` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_DEBUG_BOX)

---
## DRAW_DEBUG_CROSS
**Hash:** `0x73B1189623049839` | **Returns:** `void`
**Alt name:** `DrawDebugCross`

```
NOTE: Debugging functions are not present in the retail version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `size` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_DEBUG_CROSS)

---
## DRAW_DEBUG_LINE
**Hash:** `0x7FDFADE676AA3CB0` | **Returns:** `void`
**Alt name:** `DrawDebugLine`

```
NOTE: Debugging functions are not present in the retail version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `a` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_DEBUG_LINE)

---
## DRAW_DEBUG_LINE_WITH_TWO_COLOURS
**Hash:** `0xD8B9A8AC5608FF94` | **Returns:** `void`
**Alt name:** `DrawDebugLineWithTwoColours`

```
NOTE: Debugging functions are not present in the retail version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `r1` | `int` |
| `g1` | `int` |
| `b1` | `int` |
| `r2` | `int` |
| `g2` | `int` |
| `b2` | `int` |
| `alpha1` | `int` |
| `alpha2` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_DEBUG_LINE_WITH_TWO_COLOURS)

---
## DRAW_DEBUG_SPHERE
**Hash:** `0xAAD68E1AB39DA632` | **Returns:** `void`
**Alt name:** `DrawDebugSphere`

```
NOTE: Debugging functions are not present in the retail version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_DEBUG_SPHERE)

---
## DRAW_DEBUG_TEXT
**Hash:** `0x3903E216620488E8` | **Returns:** `void`
**Alt name:** `DrawDebugText`

```
NOTE: Debugging functions are not present in the retail version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `text` | `char*` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_DEBUG_TEXT)

---
## DRAW_DEBUG_TEXT_2D
**Hash:** `0xA3BB2E9555C05A8F` | **Returns:** `void`
**Alt name:** `DrawDebugText2d`

```
NOTE: Debugging functions are not present in the retail version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `text` | `char*` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_DEBUG_TEXT_2D)

---
## DRAW_LIGHT_WITH_RANGE
**Hash:** `0xF2A1B2771A01DBD4` | **Returns:** `void`
**Alt name:** `DrawLightWithRange`

**Parameters:**
| Name | Type |
|------|------|
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `colorR` | `int` |
| `colorG` | `int` |
| `colorB` | `int` |
| `range` | `float` |
| `intensity` | `float` |

[View docs](https://cfxnatives.dev/natives/DRAW_LIGHT_WITH_RANGE)

---
## DRAW_LINE
**Hash:** `0x6B7256074AE34680` | **Returns:** `void`
**Alt name:** `DrawLine`

This native draws a line between two vectors in the game world. It is typically used for visualizing paths or connections between points. The color of the line is specified by the red, green, and blue parameters, with alpha determining its opacity. This native should be called every frame for continuous rendering.

```
NativeDB Introduced: v323
```

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

[View docs](https://cfxnatives.dev/natives/GRAPHICS~DRAW_LINE)

---
## DRAW_LOW_QUALITY_PHOTO_TO_PHONE
**Hash:** `0x1072F115DAB0717E` | **Returns:** `void`
**Alt name:** `DrawLowQualityPhotoToPhone`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DRAW_LOW_QUALITY_PHOTO_TO_PHONE)

---
## DRAW_MARKER
**Hash:** `0x28477EC23D892089` | **Returns:** `void`
**Alt name:** `DrawMarker`

Draws a marker with the specified appearance at the target location. This has to be called every frame, e.g. in a `Wait(0)` loop.

There's a [list of markers](https://docs.fivem.net/game-references/markers/) on the FiveM documentation site.

**Parameters:**
| Name | Type |
|------|------|
| `type` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `dirX` | `float` |
| `dirY` | `float` |
| `dirZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `scaleX` | `float` |
| `scaleY` | `float` |
| `scaleZ` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |
| `bobUpAndDown` | `BOOL` |
| `faceCamera` | `BOOL` |
| `p19` | `int` |
| `rotate` | `BOOL` |
| `textureDict` | `char*` |
| `textureName` | `char*` |
| `drawOnEnts` | `BOOL` |

**Example:**
```lua
CreateThread(function()
	while true do
		-- draw every frame
		Wait(0)

		local pedCoords = GetEntityCoords(PlayerPedId())
		DrawMarker(2, pedCoords.x, pedCoords.y, pedCoords.z + 2, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 2.0, 2.0, 2.0, 255, 128, 0, 50, false, true, 2, nil, nil, false)
	end
end)
```

[View docs](https://cfxnatives.dev/natives/DRAW_MARKER)

---
## DRAW_POLY
**Hash:** `0xAC26716048436851` | **Returns:** `void`
**Alt name:** `DrawPoly`

```
x/y/z - Location of a vertex (in world coords), presumably.  
----------------  
x1, y1, z1     : Coordinates for the first point  
x2, y2, z2     : Coordinates for the second point  
x3, y3, z3     : Coordinates for the third point  
r, g, b, alpha : Color with RGBA-Values  
Keep in mind that only one side of the drawn triangle is visible: It's the side, in which the vector-product of the vectors heads to: (b-a)x(c-a) Or (b-a)x(c-b).  
But be aware: The function seems to work somehow differently. I have trouble having them drawn in rotated orientation. Try it yourself and if you somehow succeed, please edit this and post your solution.  
I recommend using a predefined function to call this.  
[VB.NET]  
Public Sub DrawPoly(a As Vector3, b As Vector3, c As Vector3, col As Color)  
    [Function].Call(Hash.DRAW_POLY, a.X, a.Y, a.Z, b.X, b.Y, b.Z, c.X, c.Y, c.Z, col.R, col.G, col.B, col.A)  
End Sub  
[C#]  
public void DrawPoly(Vector3 a, Vector3 b, Vector3 c, Color col)  
{  
    Function.Call(Hash.DRAW_POLY, a.X, a.Y, a.Z, b.X, b.Y, b.Z, c.X, c.Y, c.Z, col.R, col.G, col.B, col.A);  
}  
BTW: Intersecting triangles are not supported: They overlap in the order they were called.  
```

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

[View docs](https://cfxnatives.dev/natives/GRAPHICS~DRAW_POLY)

---
## DRAW_RECT
**Hash:** `0x3A618A217E5154F0` | **Returns:** `void`
**Alt name:** `DrawRect`

```
Draws a rectangle on the screen.  
-x: The relative X point of the center of the rectangle. (0.0-1.0, 0.0 is the left edge of the screen, 1.0 is the right edge of the screen)  
-y: The relative Y point of the center of the rectangle. (0.0-1.0, 0.0 is the top edge of the screen, 1.0 is the bottom edge of the screen)  
-width: The relative width of the rectangle. (0.0-1.0, 1.0 means the whole screen width)  
-height: The relative height of the rectangle. (0.0-1.0, 1.0 means the whole screen height)  
-R: Red part of the color. (0-255)  
-G: Green part of the color. (0-255)  
-B: Blue part of the color. (0-255)  
-A: Alpha part of the color. (0-255, 0 means totally transparent, 255 means totally opaque)  
The total number of rectangles to be drawn in one frame is apparently limited to 399.  
```

```
NativeDB Added Parameter 9: BOOL p8
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `width` | `float` |
| `height` | `float` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |
| `a` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_RECT)

---
## DRAW_SCALEFORM_MOVIE
**Hash:** `0x54972ADAF0294A93` | **Returns:** `void`
**Alt name:** `DrawScaleformMovie`

**Parameters:**
| Name | Type |
|------|------|
| `scaleformHandle` | `int` |
| `x` | `float` |
| `y` | `float` |
| `width` | `float` |
| `height` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |
| `unk` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_SCALEFORM_MOVIE)

---
## DRAW_SCALEFORM_MOVIE_3D
**Hash:** `0x87D51D72255D4E78` | **Returns:** `void`
**Alt name:** `DrawScaleformMovie3d`

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `p7` | `float` |
| `sharpness` | `float` |
| `p9` | `float` |
| `scaleX` | `float` |
| `scaleY` | `float` |
| `scaleZ` | `float` |
| `p13` | `Any` |

[View docs](https://cfxnatives.dev/natives/DRAW_SCALEFORM_MOVIE_3D)

---
## DRAW_SCALEFORM_MOVIE_3D_SOLID
**Hash:** `0x1CE592FDC749D6F5` | **Returns:** `void`
**Alt name:** `DrawScaleformMovie3dSolid`

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `p7` | `float` |
| `p8` | `float` |
| `p9` | `float` |
| `scaleX` | `float` |
| `scaleY` | `float` |
| `scaleZ` | `float` |
| `p13` | `Any` |

[View docs](https://cfxnatives.dev/natives/DRAW_SCALEFORM_MOVIE_3D_SOLID)

---
## DRAW_SCALEFORM_MOVIE_FULLSCREEN
**Hash:** `0x0DF606929C105BE1` | **Returns:** `void`
**Alt name:** `DrawScaleformMovieFullscreen`

```
unk is not used so no need  
```

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |
| `unk` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_SCALEFORM_MOVIE_FULLSCREEN)

---
## DRAW_SCALEFORM_MOVIE_FULLSCREEN_MASKED
**Hash:** `0xCF537FDE4FBD4CE5` | **Returns:** `void`
**Alt name:** `DrawScaleformMovieFullscreenMasked`

**Parameters:**
| Name | Type |
|------|------|
| `scaleform1` | `int` |
| `scaleform2` | `int` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_SCALEFORM_MOVIE_FULLSCREEN_MASKED)

---
## DRAW_SPOT_LIGHT
**Hash:** `0xD0F64B265C8C8B33` | **Returns:** `void`
**Alt name:** `DrawSpotLight`

```
Parameters:  
* pos - coordinate where the spotlight is located  
* dir - the direction vector the spotlight should aim at from its current position  
* r,g,b - color of the spotlight  
* distance - the maximum distance the light can reach  
* brightness - the brightness of the light  
* roundness - "smoothness" of the circle edge  
* radius - the radius size of the spotlight  
* falloff - the falloff size of the light's edge (example: www.i.imgur.com/DemAWeO.jpg)  
Example in C# (spotlight aims at the closest vehicle):  
Vector3 myPos = Game.Player.Character.Position;  
Vehicle nearest = World.GetClosestVehicle(myPos , 1000f);  
Vector3 destinationCoords = nearest.Position;  
Vector3 dirVector = destinationCoords - myPos;  
dirVector.Normalize();  
Function.Call(Hash.DRAW_SPOT_LIGHT, pos.X, pos.Y, pos.Z, dirVector.X, dirVector.Y, dirVector.Z, 255, 255, 255, 100.0f, 1f, 0.0f, 13.0f, 1f);  
```

**Parameters:**
| Name | Type |
|------|------|
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `dirX` | `float` |
| `dirY` | `float` |
| `dirZ` | `float` |
| `colorR` | `int` |
| `colorG` | `int` |
| `colorB` | `int` |
| `distance` | `float` |
| `brightness` | `float` |
| `hardness` | `float` |
| `radius` | `float` |
| `falloff` | `float` |

[View docs](https://cfxnatives.dev/natives/DRAW_SPOT_LIGHT)

---
## DRAW_SPRITE
**Hash:** `0xE7FFAE5EBF23D890` | **Returns:** `void`
**Alt name:** `DrawSprite`

```
Draws a 2D sprite on the screen.  
Parameters:  
textureDict - Name of texture dictionary to load texture from (e.g. "CommonMenu", "MPWeaponsCommon", etc.)  
textureName - Name of texture to load from texture dictionary (e.g. "last_team_standing_icon", "tennis_icon", etc.)  
screenX/Y - Screen offset (0.5 = center)  
scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)  
heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees  
red,green,blue - Sprite color (default = 255/255/255)  
alpha - opacity level  
```

```
NativeDB Added Parameter 12: BOOL p11
```

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |
| `textureName` | `char*` |
| `screenX` | `float` |
| `screenY` | `float` |
| `width` | `float` |
| `height` | `float` |
| `heading` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_SPRITE)

---
## DRAW_TEXTURED_POLY
**Hash:** `0x29280002282F1928` | **Returns:** `void`
**Alt name:** `DrawTexturedPoly`

This native draws a textured polygon between three vectors in the game world. It's commonly utilized for rendering deadline trailing lights, with additional details available in the `deadline.ytd` file. UVW mapping details (u,v,w parameters) can be found on various internet resources. This native is specifically used for drawing textured polygons on the screen, where UV coordinates define the texture mapping and color/alpha parameters define the appearance of the polygon. This native should be called every frame for continuous rendering.

```
NativeDB Introduced: v877
```

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
| `textureDict` | `char*` |
| `textureName` | `char*` |
| `u1` | `float` |
| `v1` | `float` |
| `w1` | `float` |
| `u2` | `float` |
| `v2` | `float` |
| `w2` | `float` |
| `u3` | `float` |
| `v3` | `float` |
| `w3` | `float` |

[View docs](https://cfxnatives.dev/natives/DRAW_TEXTURED_POLY)

---
## DRAW_TV_CHANNEL
**Hash:** `0xFDDC2B4ED3C69DF0` | **Returns:** `void`
**Alt name:** `DrawTvChannel`

```
All calls to this native are preceded by calls to GRAPHICS::_0x61BB1D9B3A95D802 and GRAPHICS::_0xC6372ECD45D73BCD, respectively.
"act_cinema.ysc", line 1483:
HUD::SET_HUD_COMPONENT_POSITION(15, 0.0, -0.0375);
HUD::SET_TEXT_RENDER_ID(l_AE);
GRAPHICS::_0x61BB1D9B3A95D802(4);
GRAPHICS::_0xC6372ECD45D73BCD(1);
if (GRAPHICS::_0x0AD973CA1E077B60(${movie_arthouse})) {
    GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 0.7375, 1.0, 0.0, 255, 255, 255, 255);
} else {
    GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
}
"am_mp_property_int.ysc", line 102545:
if (ENTITY::DOES_ENTITY_EXIST(a_2._f3)) {
    if (HUD::IS_NAMED_RENDERTARGET_LINKED(ENTITY::GET_ENTITY_MODEL(a_2._f3))) {
        HUD::SET_TEXT_RENDER_ID(a_2._f1);
        GRAPHICS::_0x61BB1D9B3A95D802(4);
        GRAPHICS::_0xC6372ECD45D73BCD(1);
        GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
        if (GRAPHICS::GET_TV_CHANNEL() == -1) {
            sub_a8fa5(a_2, 1);
        } else {
            sub_a8fa5(a_2, 1);
            GRAPHICS::ATTACH_TV_AUDIO_TO_ENTITY(a_2._f3);
        }
        HUD::SET_TEXT_RENDER_ID(HUD::GET_DEFAULT_SCRIPT_RENDERTARGET_RENDER_ID());
    }
}
```

**Parameters:**
| Name | Type |
|------|------|
| `xPos` | `float` |
| `yPos` | `float` |
| `xScale` | `float` |
| `yScale` | `float` |
| `rotation` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/DRAW_TV_CHANNEL)

---
## ENABLE_ALIEN_BLOOD_VFX
**Hash:** `0x9DCE1F0F78260875` | **Returns:** `void`
**Alt name:** `EnableAlienBloodVfx`

Creates a motion-blur sort of effect, this native does not seem to work, however by using the [`ANIMPOSTFX_PLAY`](#\_0x2206BF9A37B7F724) native with `"DrugsMichaelAliensFight"` as the effect parameter, you should be able to get the effect.

This native does not seem to work, however by using the [ANIMPOSTFX_PLAY](#\_0x2206BF9A37B7F724) native with "DrugsMichaelAliensFight" as the effect parameter, you should be able to get the effect.

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ENABLE_ALIEN_BLOOD_VFX)

---
## ENABLE_CLOWN_BLOOD_VFX
**Hash:** `0xD821490579791273` | **Returns:** `void`
**Alt name:** `EnableClownBloodVfx`

If true, this native will create purple explosions upon projectile impact, add comic-like PTFX when firing a weapon, create a sound on bullet impact and have its own "blood effect".

If the PTFX asset "scr_rcbarry2" is not requested using ([`RequestNamedPtfxAsset`](#\_0xD821490579791273)) then this native **will not work as intended**.

Excerpt from fm_content_drug_lab_work.c:

```
STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_rcbarry2");
if (STREAMING::HAS_NAMED_PTFX_ASSET_LOADED("scr_rcbarry2"))
{
  GRAPHICS::ENABLE_CLOWN_BLOOD_VFX(true);
  AUDIO::START_AUDIO_SCENE("DLC_CM2022_DRUG_TRIP_SPRINKLERS_SCENE");
  func_720(26);
}
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

**Example:**
```lua
RequestNamedPtfxAsset("scr_rcbarry2") -- Request the PTFX
while not HasNamedPtfxAssetLoaded("scr_rcbarry2") do
  Citizen.Wait(0)
end
EnableClownBloodVfx(true) -- Enable the clown PTFX
```

[View docs](https://cfxnatives.dev/natives/ENABLE_CLOWN_BLOOD_VFX)

---
## ENABLE_MOON_CYCLE_OVERRIDE
**Hash:** `0x2C328AF17210F009` | **Returns:** `void`
**Alt name:** `EnableMoonCycleOverride`

Enable a custom moon cycle, allowing control of which lunar phase the moon is in.

Valid values are from `0.0` to `1.0`, with `0.5` representing a full moon.

| Value |   Lunar Phase   |
| :---: | :-------------: |
| `0.1` | Waxing Crescent |
| `0.2` |  First Quarter  |
| `0.3` | Waxing Gibbous  |
| `0.5` |    Full Moon    |
| `0.7` | Waning Gibbous  |
| `0.8` |  Third Quarter  |
| `0.9` | Waning Crescent |

The moon phase can be disabled with [DISABLE_MOON_CYCLE_OVERRIDE](#\_0x2BF72AD5B41AA739)

**Parameters:**
| Name | Type |
|------|------|
| `phase` | `float` |

**Example:**
```lua
EnableMoonCycleOverride(0.5)
```

[View docs](https://cfxnatives.dev/natives/ENABLE_MOON_CYCLE_OVERRIDE)

---
## ENABLE_MOVIE_KEYFRAME_WAIT
**Hash:** `0x74C180030FDE4B69` | **Returns:** `void`
**Alt name:** `EnableMovieKeyframeWait`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ENABLE_MOVIE_KEYFRAME_WAIT)

---
## ENABLE_MOVIE_SUBTITLES
**Hash:** `0x873FA65C778AD970` | **Returns:** `void`
**Alt name:** `EnableMovieSubtitles`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ENABLE_MOVIE_SUBTITLES)

---
## END_PETROL_TRAIL_DECALS
**Hash:** `0x0A123435A26C36CD` | **Returns:** `void`
**Alt name:** `EndPetrolTrailDecals`

[View docs](https://cfxnatives.dev/natives/END_PETROL_TRAIL_DECALS)

---
## END_SCALEFORM_MOVIE_METHOD
**Hash:** `0xC6796A8FFA375E53` | **Returns:** `void`
**Alt name:** `EndScaleformMovieMethod`

```
Pops and calls the Scaleform function on the stack  
```

[View docs](https://cfxnatives.dev/natives/END_SCALEFORM_MOVIE_METHOD)

---
## END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
**Hash:** `0xC50AA39A577AF886` | **Returns:** `int`
**Alt name:** `EndScaleformMovieMethodReturnValue`

[View docs](https://cfxnatives.dev/natives/END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE)

---
## END_TEXT_COMMAND_SCALEFORM_STRING
**Hash:** `0x362E2D3FE93A9959` | **Returns:** `void`
**Alt name:** `EndTextCommandScaleformString`

[View docs](https://cfxnatives.dev/natives/END_TEXT_COMMAND_SCALEFORM_STRING)

---
## END_TEXT_COMMAND_UNPARSED_SCALEFORM_STRING
**Hash:** `0xAE4E8157D9ECF087` | **Returns:** `void`
**Alt name:** `EndTextCommandUnparsedScaleformString`

Same as END_TEXT_COMMAND_SCALEFORM_STRING but does not perform HTML conversion for text tokens.
Also useful for when you are trying to add blips and inputs in your scaleform (If the scaleform supports it).

[View docs](https://cfxnatives.dev/natives/END_TEXT_COMMAND_UNPARSED_SCALEFORM_STRING)

---
## FADE_DECALS_IN_RANGE
**Hash:** `0xD77EDADB0420E6E0` | **Returns:** `void`
**Alt name:** `FadeDecalsInRange`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `duration` | `float` |

[View docs](https://cfxnatives.dev/natives/FADE_DECALS_IN_RANGE)

---
## FADE_UP_PED_LIGHT
**Hash:** `0xC9B18B4619F48F7B` | **Returns:** `void`
**Alt name:** `FadeUpPedLight`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/FADE_UP_PED_LIGHT)

---
## FORCE_RENDER_IN_GAME_UI
**Hash:** `0xDC459CFA0CCE245B` | **Returns:** `void`
**Alt name:** `ForceRenderInGameUi`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/FORCE_RENDER_IN_GAME_UI)

---
## FREE_MEMORY_FOR_HIGH_QUALITY_PHOTO
**Hash:** `0xD801CC02177FA3F1` | **Returns:** `void`
**Alt name:** `FreeMemoryForHighQualityPhoto`

[View docs](https://cfxnatives.dev/natives/FREE_MEMORY_FOR_HIGH_QUALITY_PHOTO)

---
## FREE_MEMORY_FOR_LOW_QUALITY_PHOTO
**Hash:** `0x6A12D88881435DCA` | **Returns:** `void`
**Alt name:** `FreeMemoryForLowQualityPhoto`

[View docs](https://cfxnatives.dev/natives/FREE_MEMORY_FOR_LOW_QUALITY_PHOTO)

---
## FREE_MEMORY_FOR_MISSION_CREATOR_PHOTO
**Hash:** `0x0A46AF8A78DC5E0A` | **Returns:** `void`
**Alt name:** `FreeMemoryForMissionCreatorPhoto`

[View docs](https://cfxnatives.dev/natives/FREE_MEMORY_FOR_MISSION_CREATOR_PHOTO)

---
## GET_ACTUAL_SCREEN_RESOLUTION
**Hash:** `0x873C9F3104101DD3` | **Returns:** `void`
**Alt name:** `GetActualScreenResolution`

Returns current screen resolution.

```
NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `int*` |
| `y` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_ACTUAL_SCREEN_RESOLUTION)

---
## GET_ASPECT_RATIO
**Hash:** `0xF1307EF624A80D87` | **Returns:** `float`
**Alt name:** `GetAspectRatio`

This native retrieves the aspect ratio of the game window. If `physicalAspect` is `true`, it returns the physical aspect ratio of the game window, which is useful for 3x1 modes. Otherwise, it returns the aspect ratio of the main game window, considering any custom overrides from the settings menu.

```
NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `physicalAspect` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GRAPHICS~GET_ASPECT_RATIO)

---
## GET_CURRENT_NUMBER_OF_CLOUD_PHOTOS
**Hash:** `0x473151EBC762C6DA` | **Returns:** `int`
**Alt name:** `GetCurrentNumberOfCloudPhotos`

[View docs](https://cfxnatives.dev/natives/GET_CURRENT_NUMBER_OF_CLOUD_PHOTOS)

---
## GET_DECAL_WASH_LEVEL
**Hash:** `0x323F647679A09103` | **Returns:** `float`
**Alt name:** `GetDecalWashLevel`

**Parameters:**
| Name | Type |
|------|------|
| `decal` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_DECAL_WASH_LEVEL)

---
## GET_IS_HIDEF
**Hash:** `0x84ED31191CC5D2C9` | **Returns:** `BOOL`
**Alt name:** `GetIsHidef`

This native indicates whether the game is running in high-definition (HD) resolution. It returns `false` if the resolution is less than `1280x720` and `true` if it's equal to or greater than `1280x720`.

```
NativeDB Introduced: v323
```

[View docs](https://cfxnatives.dev/natives/GET_IS_HIDEF)

---
## GET_IS_PETROL_DECAL_IN_RANGE
**Hash:** `0x2F09F7976C512404` | **Returns:** `BOOL`
**Alt name:** `GetIsPetrolDecalInRange`

**Parameters:**
| Name | Type |
|------|------|
| `xCoord` | `float` |
| `yCoord` | `float` |
| `zCoord` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_IS_PETROL_DECAL_IN_RANGE)

---
## GET_IS_WIDESCREEN
**Hash:** `0x30CF4BDA4FCB1905` | **Returns:** `BOOL`
**Alt name:** `GetIsWidescreen`

This native retrieves whether the game is running in widescreen mode or not.

```
NativeDB Introduced: v323
```

[View docs](https://cfxnatives.dev/natives/GET_IS_WIDESCREEN)

---
## GET_MAXIMUM_NUMBER_OF_CLOUD_PHOTOS
**Hash:** `0xDC54A7AF8B3A14EF` | **Returns:** `int`
**Alt name:** `GetMaximumNumberOfCloudPhotos`

```
This function is hard-coded to always return 96.
```

[View docs](https://cfxnatives.dev/natives/GET_MAXIMUM_NUMBER_OF_CLOUD_PHOTOS)

---
## GET_MAXIMUM_NUMBER_OF_PHOTOS
**Hash:** `0x34D23450F028B0BF` | **Returns:** `int`
**Alt name:** `GetMaximumNumberOfPhotos`

```
This function is hard-coded to always return 0.
```

[View docs](https://cfxnatives.dev/natives/GET_MAXIMUM_NUMBER_OF_PHOTOS)

---
## GET_REQUESTINGNIGHTVISION
**Hash:** `0x35FB78DC42B7BD21` | **Returns:** `BOOL`
**Alt name:** `GetRequestingnightvision`

[View docs](https://cfxnatives.dev/natives/GET_REQUESTINGNIGHTVISION)

---
## GET_SAFE_ZONE_SIZE
**Hash:** `0xBAF107B6BB2C97F0` | **Returns:** `float`
**Alt name:** `GetSafeZoneSize`

```
Gets the scale of safe zone. if the safe zone size scale is max, it will return 1.0.  
```

[View docs](https://cfxnatives.dev/natives/GET_SAFE_ZONE_SIZE)

---
## GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_BOOL
**Hash:** `0xD80A80346A45D761` | **Returns:** `BOOL`
**Alt name:** `GetScaleformMovieMethodReturnValueBool`

**Parameters:**
| Name | Type |
|------|------|
| `methodReturn` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_BOOL)

---
## GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT
**Hash:** `0x2DE7EFA66B906036` | **Returns:** `int`
**Alt name:** `GetScaleformMovieMethodReturnValueInt`

Used to get a return value from a scaleform function. Returns an int in the same way GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING returns a string.

**Parameters:**
| Name | Type |
|------|------|
| `method_return` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT)

---
## GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING
**Hash:** `0xE1E258829A885245` | **Returns:** `char*`
**Alt name:** `GetScaleformMovieMethodReturnValueString`

Used to get a return value from a scaleform function. Returns a string in the same way GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT returns an int.

**Parameters:**
| Name | Type |
|------|------|
| `method_return` | `int` |

**Example:**
```lua
local a = RequestScaleformMovie("translate") --scaleform gfx
while not HasScaleformMovieLoaded(a) do
    Citizen.Wait(0)
end
BeginScaleformMovieMethod(a,"EnglishToChinese") --call function
ScaleformMovieMethodAddParamPlayerNameString("Good") --input
local b = EndScaleformMovieMethodReturnValue()
while true do
    if IsScaleformMovieMethodReturnValueReady(b) then
       local c = GetScaleformMovieMethodReturnValueString(b) --output
       print(c)
       break
    end
    Citizen.Wait(0)
end
```

[View docs](https://cfxnatives.dev/natives/GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING)

---
## GET_SCREEN_COORD_FROM_WORLD_COORD
**Hash:** `0x34E82F05DF2974F5` | **Returns:** `BOOL`
**Alt name:** `GetScreenCoordFromWorldCoord`

```
Convert a world coordinate into its relative screen coordinate.  (WorldToScreen)
Returns a boolean; whether or not the operation was successful. It will return false if the coordinates given are not visible to the rendering camera.
For .NET users...
VB:
Public Shared Function World3DToScreen2d(pos as vector3) As Vector2
        Dim x2dp, y2dp As New Native.OutputArgument
        Native.Function.Call(Of Boolean)(Native.Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.x, pos.y, pos.z, x2dp, y2dp)
        Return New Vector2(x2dp.GetResult(Of Single), y2dp.GetResult(Of Single))

    End Function
C#:
Vector2 World3DToScreen2d(Vector3 pos)
    {
        var x2dp = new OutputArgument();
        var y2dp = new OutputArgument();
        Function.Call<bool>(Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.X, pos.Y, pos.Z, x2dp, y2dp);
        return new Vector2(x2dp.GetResult<float>(), y2dp.GetResult<float>());
    }
//USE VERY SMALL VALUES FOR THE SCALE OF RECTS/TEXT because it is dramatically larger on screen than in 3D, e.g '0.05' small.
Used to be called _WORLD3D_TO_SCREEN2D
I thought we lost you from the scene forever. It does seem however that calling SET_DRAW_ORIGIN then your natives, then ending it. Seems to work better for certain things such as keeping boxes around people for a predator missile e.g.
```

**Parameters:**
| Name | Type |
|------|------|
| `worldX` | `float` |
| `worldY` | `float` |
| `worldZ` | `float` |
| `screenX` | `float*` |
| `screenY` | `float*` |

[View docs](https://cfxnatives.dev/natives/GET_SCREEN_COORD_FROM_WORLD_COORD)

---
## GET_SCREEN_RESOLUTION
**Hash:** `0x888D57E407E63624` | **Returns:** `void`
**Alt name:** `GetScreenResolution`

Hardcoded to always return 1280x720. Use [`_GET_ACTIVE_SCREEN_RESOLUTION`](?\_0x873C9F3104101DD3) to retrieve the correct screen resolution.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `int*` |
| `y` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_SCREEN_RESOLUTION)

---
## GET_SCREENBLUR_FADE_CURRENT_TIME
**Hash:** `0x5CCABFFCA31DDE33` | **Returns:** `float`
**Alt name:** `GetScreenblurFadeCurrentTime`

[View docs](https://cfxnatives.dev/natives/GET_SCREENBLUR_FADE_CURRENT_TIME)

---
## GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO
**Hash:** `0x1670F8D05056F257` | **Returns:** `int`
**Alt name:** `GetStatusOfLoadMissionCreatorPhoto`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO)

---
## GET_STATUS_OF_SAVE_HIGH_QUALITY_PHOTO
**Hash:** `0x0C0C4E81E1AC60A0` | **Returns:** `int`
**Alt name:** `GetStatusOfSaveHighQualityPhoto`

[View docs](https://cfxnatives.dev/natives/GET_STATUS_OF_SAVE_HIGH_QUALITY_PHOTO)

---
## GET_STATUS_OF_SORTED_LIST_OPERATION
**Hash:** `0xF5BED327CEA362B1` | **Returns:** `int`
**Alt name:** `GetStatusOfSortedListOperation`

Returns status of gallery photo fetch, which was requested by [`QUEUE_OPERATION_TO_CREATE_SORTED_LIST_OF_PHOTOS`](#\_0x2A893980E96B659A).

**Parameters:**
| Name | Type |
|------|------|
| `scanForSaving` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GET_STATUS_OF_SORTED_LIST_OPERATION)

---
## GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO
**Hash:** `0x0D6CA79EEEBD8CA3` | **Returns:** `int`
**Alt name:** `GetStatusOfTakeHighQualityPhoto`

[View docs](https://cfxnatives.dev/natives/GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO)

---
## GET_STATUS_OF_TAKE_MISSION_CREATOR_PHOTO
**Hash:** `0x90A78ECAA4E78453` | **Returns:** `int`
**Alt name:** `GetStatusOfTakeMissionCreatorPhoto`

[View docs](https://cfxnatives.dev/natives/GET_STATUS_OF_TAKE_MISSION_CREATOR_PHOTO)

---
## GET_TEXTURE_RESOLUTION
**Hash:** `0x35736EE65BD00C11` | **Returns:** `Vector3`
**Alt name:** `GetTextureResolution`

```
Returns the texture resolution of the passed texture dict+name.  
Note: Most texture resolutions are doubled compared to the console version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |
| `textureName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_TEXTURE_RESOLUTION)

---
## GET_TIMECYCLE_MODIFIER_INDEX
**Hash:** `0xFDF3D97C674AFB66` | **Returns:** `int`
**Alt name:** `GetTimecycleModifierIndex`

```
Only use for this in the PC scripts is:
if (GRAPHICS::GET_TIMECYCLE_MODIFIER_INDEX() != -1)
For a full list, see here: pastebin.com/cnk7FTF2
```

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_MODIFIER_INDEX)

---
## GET_TIMECYCLE_TRANSITION_MODIFIER_INDEX
**Hash:** `0x459FD2C8D0AB78BC` | **Returns:** `int`
**Alt name:** `GetTimecycleTransitionModifierIndex`

[View docs](https://cfxnatives.dev/natives/GET_TIMECYCLE_TRANSITION_MODIFIER_INDEX)

---
## GET_TOGGLE_PAUSED_RENDERPHASES_STATUS
**Hash:** `0xEB3DAC2C86001E5E` | **Returns:** `BOOL`
**Alt name:** `GetTogglePausedRenderphasesStatus`

[View docs](https://cfxnatives.dev/natives/GET_TOGGLE_PAUSED_RENDERPHASES_STATUS)

---
## GET_TV_CHANNEL
**Hash:** `0xFC1E275A90D39995` | **Returns:** `int`
**Alt name:** `GetTvChannel`

[View docs](https://cfxnatives.dev/natives/GET_TV_CHANNEL)

---
## GET_TV_VOLUME
**Hash:** `0x2170813D3DD8661B` | **Returns:** `float`
**Alt name:** `GetTvVolume`

[View docs](https://cfxnatives.dev/natives/GET_TV_VOLUME)

---
## GET_USINGNIGHTVISION
**Hash:** `0x2202A3F42C8E5F79` | **Returns:** `BOOL`
**Alt name:** `GetUsingnightvision`

[View docs](https://cfxnatives.dev/natives/GET_USINGNIGHTVISION)

---
## GET_USINGSEETHROUGH
**Hash:** `0x44B80ABAB9D80BD3` | **Returns:** `BOOL`
**Alt name:** `GetUsingseethrough`

[View docs](https://cfxnatives.dev/natives/GET_USINGSEETHROUGH)

---
## GET_VEHICLE_CREW_EMBLEM_REQUEST_STATE
**Hash:** `0xFE26117A5841B2FF` | **Returns:** `int`
**Alt name:** `GetVehicleCrewEmblemRequestState`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_CREW_EMBLEM_REQUEST_STATE)

---
## GOLF_TRAIL_GET_MAX_HEIGHT
**Hash:** `0xA4819F5E23E2FFAD` | **Returns:** `float`
**Alt name:** `GolfTrailGetMaxHeight`

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_GET_MAX_HEIGHT)

---
## GOLF_TRAIL_GET_VISUAL_CONTROL_POINT
**Hash:** `0xA4664972A9B8F8BA` | **Returns:** `Vector3`
**Alt name:** `GolfTrailGetVisualControlPoint`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_GET_VISUAL_CONTROL_POINT)

---
## GOLF_TRAIL_SET_COLOUR
**Hash:** `0x12995F2E53FFA601` | **Returns:** `void`
**Alt name:** `GolfTrailSetColour`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |
| `p1` | `int` |
| `p2` | `int` |
| `p3` | `int` |
| `p4` | `int` |
| `p5` | `int` |
| `p6` | `int` |
| `p7` | `int` |
| `p8` | `int` |
| `p9` | `int` |
| `p10` | `int` |
| `p11` | `int` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_SET_COLOUR)

---
## GOLF_TRAIL_SET_ENABLED
**Hash:** `0xA51C4B86B71652AE` | **Returns:** `void`
**Alt name:** `GolfTrailSetEnabled`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_SET_ENABLED)

---
## GOLF_TRAIL_SET_FACING
**Hash:** `0x06F761EA47C1D3ED` | **Returns:** `void`
**Alt name:** `GolfTrailSetFacing`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_SET_FACING)

---
## GOLF_TRAIL_SET_FIXED_CONTROL_POINT
**Hash:** `0xB1BB03742917A5D6` | **Returns:** `void`
**Alt name:** `GolfTrailSetFixedControlPoint`

```
12 matches across 4 scripts. All 4 scripts were job creators.
type ranged from 0 - 2.
p4 was always 0.2f. Likely scale.
assuming p5 - p8 is RGBA, the graphic is always yellow (255, 255, 0, 255).
Tested but noticed nothing.
```

**Parameters:**
| Name | Type |
|------|------|
| `type` | `int` |
| `xPos` | `float` |
| `yPos` | `float` |
| `zPos` | `float` |
| `p4` | `float` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_SET_FIXED_CONTROL_POINT)

---
## GOLF_TRAIL_SET_PATH
**Hash:** `0x312342E1A4874F3F` | **Returns:** `void`
**Alt name:** `GolfTrailSetPath`

```
p8 seems to always be false.  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `float` |
| `p7` | `float` |
| `p8` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_SET_PATH)

---
## GOLF_TRAIL_SET_RADIUS
**Hash:** `0x2485D34E50A22E84` | **Returns:** `void`
**Alt name:** `GolfTrailSetRadius`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |
| `p1` | `float` |
| `p2` | `float` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_SET_RADIUS)

---
## GOLF_TRAIL_SET_SHADER_PARAMS
**Hash:** `0x9CFDD90B2B844BF7` | **Returns:** `void`
**Alt name:** `GolfTrailSetShaderParams`

```
Only appeared in Golf & Golf_mp. Parameters were all ptrs  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_SET_SHADER_PARAMS)

---
## GOLF_TRAIL_SET_TESSELLATION
**Hash:** `0xDBAA5EC848BA2D46` | **Returns:** `void`
**Alt name:** `GolfTrailSetTessellation`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/GOLF_TRAIL_SET_TESSELLATION)

---
## HAS_SCALEFORM_CONTAINER_MOVIE_LOADED_INTO_PARENT
**Hash:** `0x8217150E1217EBFD` | **Returns:** `BOOL`
**Alt name:** `HasScaleformContainerMovieLoadedIntoParent`

**Parameters:**
| Name | Type |
|------|------|
| `scaleformHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/HAS_SCALEFORM_CONTAINER_MOVIE_LOADED_INTO_PARENT)

---
## HAS_SCALEFORM_MOVIE_FILENAME_LOADED
**Hash:** `0x0C1C5D756FB5F337` | **Returns:** `BOOL`
**Alt name:** `HasScaleformMovieFilenameLoaded`

```
Only values used in the scripts are:
"heist_mp"
"heistmap_mp"
"instructional_buttons"
"heist_pre"
```

**Parameters:**
| Name | Type |
|------|------|
| `scaleformName` | `char*` |

[View docs](https://cfxnatives.dev/natives/HAS_SCALEFORM_MOVIE_FILENAME_LOADED)

---
## HAS_SCALEFORM_MOVIE_LOADED
**Hash:** `0x85F01B8D5B90570E` | **Returns:** `BOOL`
**Alt name:** `HasScaleformMovieLoaded`

**Parameters:**
| Name | Type |
|------|------|
| `scaleformHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/HAS_SCALEFORM_MOVIE_LOADED)

---
## HAS_SCALEFORM_SCRIPT_HUD_MOVIE_LOADED
**Hash:** `0xDF6E5987D2B4D140` | **Returns:** `BOOL`
**Alt name:** `HasScaleformScriptHudMovieLoaded`

**Parameters:**
| Name | Type |
|------|------|
| `hudComponent` | `int` |

[View docs](https://cfxnatives.dev/natives/HAS_SCALEFORM_SCRIPT_HUD_MOVIE_LOADED)

---
## HAS_STREAMED_TEXTURE_DICT_LOADED
**Hash:** `0x0145F696AAAAD2E4` | **Returns:** `BOOL`
**Alt name:** `HasStreamedTextureDictLoaded`

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |

[View docs](https://cfxnatives.dev/natives/HAS_STREAMED_TEXTURE_DICT_LOADED)

---
## IS_DECAL_ALIVE
**Hash:** `0xC694D74949CAFD0C` | **Returns:** `BOOL`
**Alt name:** `IsDecalAlive`

**Parameters:**
| Name | Type |
|------|------|
| `decal` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_DECAL_ALIVE)

---
## IS_SCALEFORM_MOVIE_DELETING
**Hash:** `0x86255B1FC929E33E` | **Returns:** `BOOL`
**Alt name:** `IsScaleformMovieDeleting`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `scaleformIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_SCALEFORM_MOVIE_DELETING)

---
## IS_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_READY
**Hash:** `0x768FF8961BA904D6` | **Returns:** `BOOL`
**Alt name:** `IsScaleformMovieMethodReturnValueReady`

methodReturn: The return value of this native: END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
Returns true if the return value of a scaleform function is ready to be collected (using GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING or GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT).

**Parameters:**
| Name | Type |
|------|------|
| `method_return` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_READY)

---
## IS_SCREENBLUR_FADE_RUNNING
**Hash:** `0x7B226C785A52A0A9` | **Returns:** `BOOL`
**Alt name:** `IsScreenblurFadeRunning`

```
Returns whether screen transition to blur/from blur is running.
```

[View docs](https://cfxnatives.dev/natives/IS_SCREENBLUR_FADE_RUNNING)

---
## IS_TRACKED_POINT_VISIBLE
**Hash:** `0xC45CCDAAC9221CA8` | **Returns:** `BOOL`
**Alt name:** `IsTrackedPointVisible`

**Parameters:**
| Name | Type |
|------|------|
| `point` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_TRACKED_POINT_VISIBLE)

---
## LOAD_MISSION_CREATOR_PHOTO
**Hash:** `0x4862437A486F91B0` | **Returns:** `BOOL`
**Alt name:** `LoadMissionCreatorPhoto`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `char*` |
| `p1` | `Any*` |
| `p2` | `Any*` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/LOAD_MISSION_CREATOR_PHOTO)

---
## LOAD_MOVIE_MESH_SET
**Hash:** `0xB66064452270E8F1` | **Returns:** `int`
**Alt name:** `LoadMovieMeshSet`

**Parameters:**
| Name | Type |
|------|------|
| `movieMeshSetName` | `char*` |

[View docs](https://cfxnatives.dev/natives/LOAD_MOVIE_MESH_SET)

---
## MOVE_VEHICLE_DECALS
**Hash:** `0x84C8D7C2D30D3280` | **Returns:** `void`
**Alt name:** `MoveVehicleDecals`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/MOVE_VEHICLE_DECALS)

---
## OVERRIDE_INTERIOR_SMOKE_END
**Hash:** `0xEFB55E7C25D3B3BE` | **Returns:** `void`
**Alt name:** `OverrideInteriorSmokeEnd`

[View docs](https://cfxnatives.dev/natives/OVERRIDE_INTERIOR_SMOKE_END)

---
## OVERRIDE_INTERIOR_SMOKE_LEVEL
**Hash:** `0x1600FD8CF72EBC12` | **Returns:** `void`
**Alt name:** `OverrideInteriorSmokeLevel`

**Parameters:**
| Name | Type |
|------|------|
| `level` | `float` |

[View docs](https://cfxnatives.dev/natives/OVERRIDE_INTERIOR_SMOKE_LEVEL)

---
## OVERRIDE_INTERIOR_SMOKE_NAME
**Hash:** `0x2A2A52824DB96700` | **Returns:** `void`
**Alt name:** `OverrideInteriorSmokeName`

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/OVERRIDE_INTERIOR_SMOKE_NAME)

---
## PASS_KEYBOARD_INPUT_TO_SCALEFORM
**Hash:** `0xD1C7CB175E012964` | **Returns:** `BOOL`
**Alt name:** `PassKeyboardInputToScaleform`

Passes keyboard input to scaleform. You must call this native every frame. Once an input occurs, this native will return true and call `SET_PC_KEY` scaleform movie method with the key that has been inputted.

The key parameter which is passed to the scaleform can also be: "BACKSPACE", "ENTER" or "\x1b" (Which is ESC).
This native is only used in `web_browser.c` as of game build 2944.

**Parameters:**
| Name | Type |
|------|------|
| `scaleformHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/PASS_KEYBOARD_INPUT_TO_SCALEFORM)

---
## PATCH_DECAL_DIFFUSE_MAP
**Hash:** `0x8A35C742130C6080` | **Returns:** `void`
**Alt name:** `PatchDecalDiffuseMap`

```
REQUEST_STREAMED_TEXTURE_DICT("MPOnMissMarkers", false);  
*uParam0.f_809 = add_decal(9120, vParam1, vVar4, vVar7, 2f, 2f, to_float(iVar0) / 255f, to_float(iVar1) / 255f, to_float(iVar2) / 255f, 1f, -1f, 1, 0, 0);  
PATCH_DECAL_DIFFUSE_MAP(9120, "MPOnMissMarkers", "Capture_The_Flag_Base_Icon");  
```

**Parameters:**
| Name | Type |
|------|------|
| `decalType` | `int` |
| `textureDict` | `char*` |
| `textureName` | `char*` |

[View docs](https://cfxnatives.dev/natives/PATCH_DECAL_DIFFUSE_MAP)

---
## POP_TIMECYCLE_MODIFIER
**Hash:** `0x3C8938D7D872211E` | **Returns:** `void`
**Alt name:** `PopTimecycleModifier`

[View docs](https://cfxnatives.dev/natives/POP_TIMECYCLE_MODIFIER)

---
## PRESET_INTERIOR_AMBIENT_CACHE
**Hash:** `0xD7021272EB0A451E` | **Returns:** `void`
**Alt name:** `PresetInteriorAmbientCache`

```
Only one match in the scripts:
GRAPHICS::PRESET_INTERIOR_AMBIENT_CACHE("int_carrier_hanger");
```

**Parameters:**
| Name | Type |
|------|------|
| `timecycleModifierName` | `char*` |

[View docs](https://cfxnatives.dev/natives/PRESET_INTERIOR_AMBIENT_CACHE)

---
## PUSH_TIMECYCLE_MODIFIER
**Hash:** `0x58F735290861E6B4` | **Returns:** `void`
**Alt name:** `PushTimecycleModifier`

[View docs](https://cfxnatives.dev/natives/PUSH_TIMECYCLE_MODIFIER)

---
## QUERY_MOVIE_MESH_SET_STATE
**Hash:** `0x9B6E70C5CEEF4EEB` | **Returns:** `Any`
**Alt name:** `QueryMovieMeshSetState`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/QUERY_MOVIE_MESH_SET_STATE)

---
## QUEUE_OPERATION_TO_CREATE_SORTED_LIST_OF_PHOTOS
**Hash:** `0x2A893980E96B659A` | **Returns:** `BOOL`
**Alt name:** `QueueOperationToCreateSortedListOfPhotos`

Queues a scan of all gallery photos.
Also see [`GET_STATUS_OF_SORTED_LIST_OPERATION`](#\_0xF5BED327CEA362B1)

**Parameters:**
| Name | Type |
|------|------|
| `scanForSaving` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/QUEUE_OPERATION_TO_CREATE_SORTED_LIST_OF_PHOTOS)

---
## RELEASE_MOVIE_MESH_SET
**Hash:** `0xEB119AA014E89183` | **Returns:** `void`
**Alt name:** `ReleaseMovieMeshSet`

**Parameters:**
| Name | Type |
|------|------|
| `movieMeshSet` | `int` |

[View docs](https://cfxnatives.dev/natives/RELEASE_MOVIE_MESH_SET)

---
## REMOVE_DECAL
**Hash:** `0xED3F346429CCD659` | **Returns:** `void`
**Alt name:** `RemoveDecal`

**Parameters:**
| Name | Type |
|------|------|
| `decal` | `int` |

[View docs](https://cfxnatives.dev/natives/REMOVE_DECAL)

---
## REMOVE_DECALS_FROM_OBJECT
**Hash:** `0xCCF71CBDDF5B6CB9` | **Returns:** `void`
**Alt name:** `RemoveDecalsFromObject`

**Parameters:**
| Name | Type |
|------|------|
| `obj` | `Object` |

[View docs](https://cfxnatives.dev/natives/REMOVE_DECALS_FROM_OBJECT)

---
## REMOVE_DECALS_FROM_OBJECT_FACING
**Hash:** `0xA6F6F70FDC6D144C` | **Returns:** `void`
**Alt name:** `RemoveDecalsFromObjectFacing`

**Parameters:**
| Name | Type |
|------|------|
| `obj` | `Object` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/REMOVE_DECALS_FROM_OBJECT_FACING)

---
## REMOVE_DECALS_FROM_VEHICLE
**Hash:** `0xE91F1B65F2B48D57` | **Returns:** `void`
**Alt name:** `RemoveDecalsFromVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/REMOVE_DECALS_FROM_VEHICLE)

---
## REMOVE_DECALS_IN_RANGE
**Hash:** `0x5D6B2D4830A67C62` | **Returns:** `void`
**Alt name:** `RemoveDecalsInRange`

```
Removes all decals in range from a position, it includes the bullet holes, blood pools, petrol...  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `range` | `float` |

[View docs](https://cfxnatives.dev/natives/REMOVE_DECALS_IN_RANGE)

---
## REMOVE_PARTICLE_FX
**Hash:** `0xC401503DFE8D53CF` | **Returns:** `void`
**Alt name:** `RemoveParticleFx`

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/REMOVE_PARTICLE_FX)

---
## REMOVE_PARTICLE_FX_FROM_ENTITY
**Hash:** `0xB8FEAEEBCC127425` | **Returns:** `void`
**Alt name:** `RemoveParticleFxFromEntity`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/REMOVE_PARTICLE_FX_FROM_ENTITY)

---
## REMOVE_PARTICLE_FX_IN_RANGE
**Hash:** `0xDD19FA1C6D657305` | **Returns:** `void`
**Alt name:** `RemoveParticleFxInRange`

**Parameters:**
| Name | Type |
|------|------|
| `X` | `float` |
| `Y` | `float` |
| `Z` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/REMOVE_PARTICLE_FX_IN_RANGE)

---
## REMOVE_SCALEFORM_SCRIPT_HUD_MOVIE
**Hash:** `0xF44A5456AC3F4F97` | **Returns:** `void`
**Alt name:** `RemoveScaleformScriptHudMovie`

**Parameters:**
| Name | Type |
|------|------|
| `hudComponent` | `int` |

[View docs](https://cfxnatives.dev/natives/REMOVE_SCALEFORM_SCRIPT_HUD_MOVIE)

---
## REMOVE_TCMODIFIER_OVERRIDE
**Hash:** `0x15E33297C3E8DC60` | **Returns:** `void`
**Alt name:** `RemoveTcmodifierOverride`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `char*` |

[View docs](https://cfxnatives.dev/natives/REMOVE_TCMODIFIER_OVERRIDE)

---
## REMOVE_VEHICLE_CREW_EMBLEM
**Hash:** `0xD2300034310557E4` | **Returns:** `void`
**Alt name:** `RemoveVehicleCrewEmblem`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/REMOVE_VEHICLE_CREW_EMBLEM)

---
## REQUEST_SCALEFORM_MOVIE
**Hash:** `0x11FE353CF9733E6F` | **Returns:** `int`
**Alt name:** `RequestScaleformMovie`

**Parameters:**
| Name | Type |
|------|------|
| `scaleformName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REQUEST_SCALEFORM_MOVIE)

---
## REQUEST_SCALEFORM_MOVIE_INSTANCE
**Hash:** `0xC514489CFB8AF806` | **Returns:** `int`
**Alt name:** `RequestScaleformMovieInstance`

Same as [REQUEST_SCALEFORM_MOVIE](#\_0x11FE353CF9733E6F), except it seems to fix stretched scaleforms on ultrawide.

**Parameters:**
| Name | Type |
|------|------|
| `scaleformName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REQUEST_SCALEFORM_MOVIE_INSTANCE)

---
## REQUEST_SCALEFORM_MOVIE_SKIP_RENDER_WHILE_PAUSED
**Hash:** `0xBD06C611BB9048C2` | **Returns:** `int`
**Alt name:** `RequestScaleformMovieSkipRenderWhilePaused`

Requests a scaleform movie that doesn't render when the game is paused (With [`SET_GAME_PAUSED`](#\_0x577D1284D6873711)).

**Parameters:**
| Name | Type |
|------|------|
| `scaleformName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REQUEST_SCALEFORM_MOVIE_SKIP_RENDER_WHILE_PAUSED)

---
## REQUEST_SCALEFORM_MOVIE_WITH_IGNORE_SUPER_WIDESCREEN
**Hash:** `0x65E7E78842E74CDB` | **Returns:** `int`
**Alt name:** `RequestScaleformMovieWithIgnoreSuperWidescreen`

Requests a scaleform movie, which has no widescreen adjustments while rendering (Useful for when your scaleform doesn't fully draw on the screen and borders are visible).

**Parameters:**
| Name | Type |
|------|------|
| `scaleformName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REQUEST_SCALEFORM_MOVIE_WITH_IGNORE_SUPER_WIDESCREEN)

---
## REQUEST_SCALEFORM_SCRIPT_HUD_MOVIE
**Hash:** `0x9304881D6F6537EA` | **Returns:** `void`
**Alt name:** `RequestScaleformScriptHudMovie`

**Parameters:**
| Name | Type |
|------|------|
| `hudComponent` | `int` |

[View docs](https://cfxnatives.dev/natives/REQUEST_SCALEFORM_SCRIPT_HUD_MOVIE)

---
## REQUEST_STREAMED_TEXTURE_DICT
**Hash:** `0xDFA2EF8E04127DD5` | **Returns:** `void`
**Alt name:** `RequestStreamedTextureDict`

```
This function can requests texture dictonaries from following RPFs:
scaleform_generic.rpf
scaleform_minigames.rpf
scaleform_minimap.rpf
scaleform_web.rpf
last param isnt a toggle
```

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/REQUEST_STREAMED_TEXTURE_DICT)

---
## RESET_PARTICLE_FX_OVERRIDE
**Hash:** `0x89C8553DD3274AAE` | **Returns:** `void`
**Alt name:** `ResetParticleFxOverride`

```
Resets the effect of SET_PARTICLE_FX_OVERRIDE
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/RESET_PARTICLE_FX_OVERRIDE)

---
## RESET_PAUSED_RENDERPHASES
**Hash:** `0xE1C8709406F2C41C` | **Returns:** `void`
**Alt name:** `ResetPausedRenderphases`

[View docs](https://cfxnatives.dev/natives/RESET_PAUSED_RENDERPHASES)

---
## RESET_SCRIPT_GFX_ALIGN
**Hash:** `0xE3A3DB414A373DAB` | **Returns:** `void`
**Alt name:** `ResetScriptGfxAlign`

This function resets the alignment set using `SET_SCRIPT_GFX_ALIGN` and `SET_SCRIPT_GFX_ALIGN_PARAMS` to the default
values ('I', 'I'; 0, 0, 0, 0). This should be used after having used the aforementioned functions in order to not affect
any other scripts attempting to draw.

[View docs](https://cfxnatives.dev/natives/RESET_SCRIPT_GFX_ALIGN)

---
## SAVE_HIGH_QUALITY_PHOTO
**Hash:** `0x3DEC726C25A11BAC` | **Returns:** `BOOL`
**Alt name:** `SaveHighQualityPhoto`

**Parameters:**
| Name | Type |
|------|------|
| `unused` | `int` |

[View docs](https://cfxnatives.dev/natives/SAVE_HIGH_QUALITY_PHOTO)

---
## SCALEFORM_MOVIE_METHOD_ADD_PARAM_BOOL
**Hash:** `0xC58424BA936EB458` | **Returns:** `void`
**Alt name:** `ScaleformMovieMethodAddParamBool`

```
Pushes a boolean for the Scaleform function onto the stack.  
```

**Parameters:**
| Name | Type |
|------|------|
| `value` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SCALEFORM_MOVIE_METHOD_ADD_PARAM_BOOL)

---
## SCALEFORM_MOVIE_METHOD_ADD_PARAM_FLOAT
**Hash:** `0xD69736AAE04DB51A` | **Returns:** `void`
**Alt name:** `ScaleformMovieMethodAddParamFloat`

```
Pushes a float for the Scaleform function onto the stack.  
```

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SCALEFORM_MOVIE_METHOD_ADD_PARAM_FLOAT)

---
## SCALEFORM_MOVIE_METHOD_ADD_PARAM_INT
**Hash:** `0xC3D0841A0CC546A6` | **Returns:** `void`
**Alt name:** `ScaleformMovieMethodAddParamInt`

```
Pushes an integer for the Scaleform function onto the stack.  
```

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SCALEFORM_MOVIE_METHOD_ADD_PARAM_INT)

---
## SCALEFORM_MOVIE_METHOD_ADD_PARAM_LATEST_BRIEF_STRING
**Hash:** `0xEC52C631A1831C03` | **Returns:** `void`
**Alt name:** `ScaleformMovieMethodAddParamLatestBriefString`

Values:
0 - Dialogue Brief
1 - Help Text Brief
2 - Mission Objective Brief

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SCALEFORM_MOVIE_METHOD_ADD_PARAM_LATEST_BRIEF_STRING)

---
## SCALEFORM_MOVIE_METHOD_ADD_PARAM_LITERAL_STRING
**Hash:** `0x77FE3402004CD1B0` | **Returns:** `void`
**Alt name:** `ScaleformMovieMethodAddParamLiteralString`

Adds a literal string to a scaleform movie method.
There doesn't seem to be any difference between this and other `SCALEFORM_MOVIE_METHOD_ADD_PARAM_*_STRING` natives in game code.

**Parameters:**
| Name | Type |
|------|------|
| `string` | `char*` |

[View docs](https://cfxnatives.dev/natives/SCALEFORM_MOVIE_METHOD_ADD_PARAM_LITERAL_STRING)

---
## SCALEFORM_MOVIE_METHOD_ADD_PARAM_PLAYER_NAME_STRING
**Hash:** `0xE83A3E3557A56640` | **Returns:** `void`
**Alt name:** `ScaleformMovieMethodAddParamPlayerNameString`

```
This method is the equivalent to PUSH_SCALEFORM_MOVIE_FUNCTION_PARAMETER_STRING when using it to add a new button (like "INSTRUCTIONAL_BUTTONS").  
When switching with a controller, the icons update and become the controller's icons.  
```

**Parameters:**
| Name | Type |
|------|------|
| `string` | `char*` |

[View docs](https://cfxnatives.dev/natives/SCALEFORM_MOVIE_METHOD_ADD_PARAM_PLAYER_NAME_STRING)

---
## SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING
**Hash:** `0xBA7148484BD90365` | **Returns:** `void`
**Alt name:** `ScaleformMovieMethodAddParamTextureNameString`

**Parameters:**
| Name | Type |
|------|------|
| `string` | `char*` |

[View docs](https://cfxnatives.dev/natives/SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING)

---
## SEETHROUGH_RESET
**Hash:** `0x70A64C0234EF522C` | **Returns:** `void`
**Alt name:** `SeethroughReset`

```
NativeDB Introduced: v323
```

[View docs](https://cfxnatives.dev/natives/SEETHROUGH_RESET)

---
## SEETHROUGH_SET_COLOR_NEAR
**Hash:** `0x1086127B3A63505E` | **Returns:** `void`
**Alt name:** `SeethroughSetColorNear`

**Parameters:**
| Name | Type |
|------|------|
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |

[View docs](https://cfxnatives.dev/natives/SEETHROUGH_SET_COLOR_NEAR)

---
## SEETHROUGH_SET_HEATSCALE
**Hash:** `0xD7D0B00177485411` | **Returns:** `void`
**Alt name:** `SeethroughSetHeatscale`

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |
| `heatScale` | `float` |

[View docs](https://cfxnatives.dev/natives/SEETHROUGH_SET_HEATSCALE)

---
## SET_ARTIFICIAL_LIGHTS_STATE
**Hash:** `0x1268615ACE24D504` | **Returns:** `void`
**Alt name:** `SetArtificialLightsState`

Does not affect weapons, particles, fire/explosions, flashlights or the sun.

When set to true, all emissive textures (including ped components that have light effects), street lights, building lights, vehicle lights, etc will all be turned off.

Used in Humane Labs Heist for EMP.

**Parameters:**
| Name | Type |
|------|------|
| `state` | `BOOL` |

**Example:**
```lua
-- Disable all lights in the map.
SetArtificialLightsState(true)

-- Enable all lights in the map.
SetArtificialLightsState(false)
```

[View docs](https://cfxnatives.dev/natives/SET_ARTIFICIAL_LIGHTS_STATE)

---
## SET_BACKFACECULLING
**Hash:** `0x23BA6B0C2AD7B0D3` | **Returns:** `void`
**Alt name:** `SetBackfaceculling`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GRAPHICS~SET_BACKFACECULLING)

---
## SET_CHECKPOINT_CYLINDER_HEIGHT
**Hash:** `0x2707AAE9D9297D89` | **Returns:** `void`
**Alt name:** `SetCheckpointCylinderHeight`

```
Sets the cylinder height of the checkpoint.  
Parameters:  
* nearHeight - The height of the checkpoint when inside of the radius.  
* farHeight - The height of the checkpoint when outside of the radius.  
* radius - The radius of the checkpoint.  
```

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |
| `nearHeight` | `float` |
| `farHeight` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_CHECKPOINT_CYLINDER_HEIGHT)

---
## SET_CHECKPOINT_RGBA
**Hash:** `0x7167371E8AD747F7` | **Returns:** `void`
**Alt name:** `SetCheckpointRgba`

```
Sets the checkpoint color.  
```

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_CHECKPOINT_RGBA)

---
## SET_CHECKPOINT_RGBA2
**Hash:** `0xB9EA40907C680580` | **Returns:** `void`
**Alt name:** `SetCheckpointRgba2`

```
Sets the checkpoint icon color.
```

**Parameters:**
| Name | Type |
|------|------|
| `checkpoint` | `int` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_CHECKPOINT_RGBA2)

---
## SET_CURRENT_PLAYER_TCMODIFIER
**Hash:** `0xBBF327DED94E4DEB` | **Returns:** `void`
**Alt name:** `SetCurrentPlayerTcmodifier`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_CURRENT_PLAYER_TCMODIFIER)

---
## SET_DEBUG_LINES_AND_SPHERES_DRAWING_ACTIVE
**Hash:** `0x175B6BFC15CDD0C5` | **Returns:** `void`
**Alt name:** `SetDebugLinesAndSpheresDrawingActive`

```
NOTE: Debugging functions are not present in the retail version of the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `enabled` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_DEBUG_LINES_AND_SPHERES_DRAWING_ACTIVE)

---
## SET_DISABLE_DECAL_RENDERING_THIS_FRAME
**Hash:** `0x4B5CFC83122DF602` | **Returns:** `void`
**Alt name:** `SetDisableDecalRenderingThisFrame`

[View docs](https://cfxnatives.dev/natives/SET_DISABLE_DECAL_RENDERING_THIS_FRAME)

---
## SET_DISABLE_PETROL_DECALS_IGNITING_THIS_FRAME
**Hash:** `0xD9454B5752C857DC` | **Returns:** `void`
**Alt name:** `SetDisablePetrolDecalsIgnitingThisFrame`

Prevents gas / petrol decals (aka gas / petrol trails and puddles) to be ignited on fire during the frame in which the native is called.

**Note**: This native needs to be called every frame to prevent ignition.

**Example:**
```lua
Citizen.CreateThread(function()
    while true do
        SetDisablePetrolDecalsIgnitingThisFrame()
        Citizen.Wait(0)
    end
end)
```

[View docs](https://cfxnatives.dev/natives/SET_DISABLE_PETROL_DECALS_IGNITING_THIS_FRAME)

---
## SET_DRAW_ORIGIN
**Hash:** `0xAA0008F3BBB8F416` | **Returns:** `void`
**Alt name:** `SetDrawOrigin`

Sets the on-screen drawing origin for draw-functions in world coordinates.

The effect can be reset by calling [`CLEAR_DRAW_ORIGIN`](#\_0xFF0B610F6BE0D7AF) and is limited to 32 different origins each frame.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `p3` | `Any` |

**Example:**
```cs
// From now on, the screen coordinate which displays the given world coordinate on the screen is seen as x=0,y=0.  
Vector3 boneCoord = somePed.GetBoneCoord(Bone.SKEL_Head);  
Function.Call(Hash.SET_DRAW_ORIGIN, boneCoord.X, boneCoord.Y, boneCoord.Z, 0);  
Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", -0.01, -0.015, 0.013, 0.013, 0.0, 255, 0, 0, 200);  
Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", 0.01, -0.015, 0.013, 0.013, 90.0, 255, 0, 0, 200);  
Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", -0.01, 0.015, 0.013, 0.013, 270.0, 255, 0, 0, 200);  
Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", 0.01, 0.015, 0.013, 0.013, 180.0, 255, 0, 0, 200);  
Function.Call(Hash.CLEAR_DRAW_ORIGIN);
```

[View docs](https://cfxnatives.dev/natives/GRAPHICS~SET_DRAW_ORIGIN)

---
## SET_ENTITY_ICON_COLOR
**Hash:** `0x1D5F595CCAE2E238` | **Returns:** `void`
**Alt name:** `SetEntityIconColor`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |
| `alpha` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_ICON_COLOR)

---
## SET_ENTITY_ICON_VISIBILITY
**Hash:** `0xE0E8BEECCA96BA31` | **Returns:** `void`
**Alt name:** `SetEntityIconVisibility`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ENTITY_ICON_VISIBILITY)

---
## SET_FLASH
**Hash:** `0x0AB84296FED9CFC6` | **Returns:** `void`
**Alt name:** `SetFlash`

```
Purpose of p0 and p1 unknown.  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |
| `p1` | `float` |
| `fadeIn` | `float` |
| `duration` | `float` |
| `fadeOut` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_FLASH)

---
## SET_HIDOF_OVERRIDE
**Hash:** `0xBA3D65906822BED5` | **Returns:** `void`
**Alt name:** `SetHidofOverride`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |
| `p1` | `BOOL` |
| `nearplaneOut` | `float` |
| `nearplaneIn` | `float` |
| `farplaneOut` | `float` |
| `farplaneIn` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_HIDOF_OVERRIDE)

---
## SET_NEXT_PLAYER_TCMODIFIER
**Hash:** `0xBF59707B3E5ED531` | **Returns:** `void`
**Alt name:** `SetNextPlayerTcmodifier`

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_NEXT_PLAYER_TCMODIFIER)

---
## SET_NIGHTVISION
**Hash:** `0x18F621F7A5B1F85D` | **Returns:** `void`
**Alt name:** `SetNightvision`

```
Enables Night Vision.  
Example:  
C#: Function.Call(Hash.SET_NIGHTVISION, true);  
C++: GRAPHICS::SET_NIGHTVISION(true);  
BOOL toggle:  
true = turns night vision on for your player.  
false = turns night vision off for your player.  
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_NIGHTVISION)

---
## SET_NOISEOVERIDE
**Hash:** `0xE787BF1C5CF823C9` | **Returns:** `void`
**Alt name:** `SetNoiseoveride`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_NOISEOVERIDE)

---
## SET_NOISINESSOVERIDE
**Hash:** `0xCB6A7C3BB17A0C67` | **Returns:** `void`
**Alt name:** `SetNoisinessoveride`

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_NOISINESSOVERIDE)

---
## SET_PARTICLE_FX_BULLET_IMPACT_SCALE
**Hash:** `0x27E32866E9A5C416` | **Returns:** `void`
**Alt name:** `SetParticleFxBulletImpactScale`

**Parameters:**
| Name | Type |
|------|------|
| `scale` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_BULLET_IMPACT_SCALE)

---
## SET_PARTICLE_FX_CAM_INSIDE_NONPLAYER_VEHICLE
**Hash:** `0xACEE6F360FC1F6B6` | **Returns:** `void`
**Alt name:** `SetParticleFxCamInsideNonplayerVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_CAM_INSIDE_NONPLAYER_VEHICLE)

---
## SET_PARTICLE_FX_CAM_INSIDE_VEHICLE
**Hash:** `0xEEC4047028426510` | **Returns:** `void`
**Alt name:** `SetParticleFxCamInsideVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_CAM_INSIDE_VEHICLE)

---
## SET_PARTICLE_FX_LOOPED_ALPHA
**Hash:** `0x726845132380142E` | **Returns:** `void`
**Alt name:** `SetParticleFxLoopedAlpha`

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |
| `alpha` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_LOOPED_ALPHA)

---
## SET_PARTICLE_FX_LOOPED_COLOUR
**Hash:** `0x7F8F65877F88783B` | **Returns:** `void`
**Alt name:** `SetParticleFxLoopedColour`

Sets the colour tint of a previously started looped particle effect

You can use the [inverse lerp](https://www.gamedev.net/articles/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/) method to normalize in a range from 0.0 to 1.0 an rgb

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |
| `r` | `float` |
| `g` | `float` |
| `b` | `float` |
| `bLocalOnly` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_LOOPED_COLOUR)

---
## SET_PARTICLE_FX_LOOPED_EVOLUTION
**Hash:** `0x5F0C4B5B1C393BE2` | **Returns:** `void`
**Alt name:** `SetParticleFxLoopedEvolution`

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |
| `propertyName` | `char*` |
| `amount` | `float` |
| `noNetwork` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_LOOPED_EVOLUTION)

---
## SET_PARTICLE_FX_LOOPED_FAR_CLIP_DIST
**Hash:** `0xDCB194B85EF7B541` | **Returns:** `void`
**Alt name:** `SetParticleFxLoopedFarClipDist`

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |
| `range` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_LOOPED_FAR_CLIP_DIST)

---
## SET_PARTICLE_FX_LOOPED_OFFSETS
**Hash:** `0xF7DDEBEC43483C43` | **Returns:** `void`
**Alt name:** `SetParticleFxLoopedOffsets`

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_LOOPED_OFFSETS)

---
## SET_PARTICLE_FX_LOOPED_SCALE
**Hash:** `0xB44250AAA456492D` | **Returns:** `void`
**Alt name:** `SetParticleFxLoopedScale`

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |
| `scale` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_LOOPED_SCALE)

---
## SET_PARTICLE_FX_NON_LOOPED_ALPHA
**Hash:** `0x77168D722C58B2FC` | **Returns:** `void`
**Alt name:** `SetParticleFxNonLoopedAlpha`

```
Usage example for C#:  
Function.Call(Hash.SET_PARTICLE_FX_NON_LOOPED_ALPHA, new InputArgument[] { 0.1f });  
		Note: the argument alpha ranges from 0.0f-1.0f !  
```

**Parameters:**
| Name | Type |
|------|------|
| `alpha` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_NON_LOOPED_ALPHA)

---
## SET_PARTICLE_FX_NON_LOOPED_COLOUR
**Hash:** `0x26143A59EF48B262` | **Returns:** `void`
**Alt name:** `SetParticleFxNonLoopedColour`

Only works on some fx's, while on others it might SEEM to work "properly", but the colors can be "strange" or even completly different from what you've expected. Reason for this is that those fx's might already have colors "baked into them" which then start to act as a "mixing palette", resulting in a different color than expected. A hypothetical example of this would be if the fx itself is already full (bright) red (RGB: 1.0, 0.0, 0.0) and you then set the color to (bright) green (RGB: 0.0, 1.0, 0.0), that it MIGHT result in Yellow (RGB: 1.0, 1.0, 0.0).

This doc previously stated that the set color is **NOT** networked, however it does actually turns out to be networked. Tested with all fireworks effects and several other FX effects resulted in colored fx effects on all clients when used in combination with [START_NETWORKED_PARTICLE_FX_NON_LOOPED_AT_COORD](#\_0xF56B8137DF10135D).
This might however not be the case for all types of particle fx's, so it's recommended to test this thoroughly with multiple clients before releasing your script for example.

**Parameters:**
| Name | Type |
|------|------|
| `r` | `float` |
| `g` | `float` |
| `b` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_NON_LOOPED_COLOUR)

---
## SET_PARTICLE_FX_OVERRIDE
**Hash:** `0xEA1E2D93F6F75ED9` | **Returns:** `void`
**Alt name:** `SetParticleFxOverride`

**Parameters:**
| Name | Type |
|------|------|
| `oldAsset` | `char*` |
| `newAsset` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_OVERRIDE)

---
## SET_PARTICLE_FX_SHOOTOUT_BOAT
**Hash:** `0x96EF97DAEB89BEF5` | **Returns:** `void`
**Alt name:** `SetParticleFxShootoutBoat`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/SET_PARTICLE_FX_SHOOTOUT_BOAT)

---
## SET_PLAYER_TCMODIFIER_TRANSITION
**Hash:** `0xBDEB86F4D5809204` | **Returns:** `void`
**Alt name:** `SetPlayerTcmodifierTransition`

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_TCMODIFIER_TRANSITION)

---
## SET_SCALEFORM_MOVIE_AS_NO_LONGER_NEEDED
**Hash:** `0x1D132D614DD86811` | **Returns:** `void`
**Alt name:** `SetScaleformMovieAsNoLongerNeeded`

**Parameters:**
| Name | Type |
|------|------|
| `scaleformHandle` | `int*` |

[View docs](https://cfxnatives.dev/natives/SET_SCALEFORM_MOVIE_AS_NO_LONGER_NEEDED)

---
## SET_SCALEFORM_MOVIE_TO_USE_LARGE_RT
**Hash:** `0x32F34FF7F617643B` | **Returns:** `void`
**Alt name:** `SetScaleformMovieToUseLargeRt`

```
NativeDB Introduced: v573
```

Configures a Scaleform movie to render to a large render target (1280x720), which is useful for ensuring higher quality and clarity in certain display scenarios. Such as displaying the name of an organization (CEO Office) in a visually impactful way for example.

**Parameters:**
| Name | Type |
|------|------|
| `scaleformMovieId` | `int` |
| `useLargeRT` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_SCALEFORM_MOVIE_TO_USE_LARGE_RT)

---
## SET_SCALEFORM_MOVIE_TO_USE_SUPER_LARGE_RT
**Hash:** `0xE6A9F00D4240B519` | **Returns:** `void`
**Alt name:** `SetScaleformMovieToUseSuperLargeRt`

Adjusts a scaleform movie's dimensions to fit a large rendertarget. Mostly used in casino scripts.

**Parameters:**
| Name | Type |
|------|------|
| `scaleformHandle` | `int` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_SCALEFORM_MOVIE_TO_USE_SUPER_LARGE_RT)

---
## SET_SCALEFORM_MOVIE_TO_USE_SYSTEM_TIME
**Hash:** `0x6D8EB211944DCE08` | **Returns:** `void`
**Alt name:** `SetScaleformMovieToUseSystemTime`

**Parameters:**
| Name | Type |
|------|------|
| `scaleform` | `int` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_SCALEFORM_MOVIE_TO_USE_SYSTEM_TIME)

---
## SET_SCRIPT_GFX_ALIGN
**Hash:** `0xB8A850F20A067EB6` | **Returns:** `void`
**Alt name:** `SetScriptGfxAlign`

This function anchors script draws to a side of the safe zone. This needs to be called to make the interface
independent of the player's safe zone configuration.

These values are equivalent to `alignX` and `alignY` in `common:/data/ui/frontend.xml`, which can be used as a baseline
for default alignment.

Valid values for `horizontalAlign`, from original documentation:

*   **C (67)** - Center: DRAW_TEXT starts in the middle of the screen, while DRAW_RECT starts on the right; both move with
    the right side of the screen.
*   **L (76)** - Left: Anchors to the left side, DRAW_RECT starts on the left side of the screen, same as DRAW_TEXT when
    centered.
*   **R (82)** - Right: DRAW_TEXT starts on the left side (normal 0,0), while DRAW_RECT starts some short distance away
    from the right side of the screen, both move with the right side of the screen.

Valid values for `verticalAlign`, from original documentation:

*   **B (66)** - Bottom: DRAW_RECT starts about as far as the middle of the map from the bottom, while DRAW_TEXT is about
    rather centered.
*   **C (67)** - Center: It starts at a certain distance from the bottom, but the distance is fixed, the distance is
    different from 66.
*   **T (84)** - Top: Anchors to the top, DRAW_RECT starts on the top of the screen, DRAW_TEXT just below it.

Using any other value (including 0) will result in the safe zone not being taken into account for this draw. The
canonical value for this is 'I' (73).

For example, you can use `SET_SCRIPT_GFX_ALIGN(0, 84)` to only scale on the Y axis (to the top), but not change the X
axis.

To reset the value, use `RESET_SCRIPT_GFX_ALIGN`.

**Parameters:**
| Name | Type |
|------|------|
| `horizontalAlign` | `int` |
| `verticalAlign` | `int` |

**Example:**
```lua
-- align the next draw to the top left
SetScriptGfxAlign(string.byte('L'), string.byte('T'))

-- prints "THIS LABEL NEEDS TO BE HERE !!!"
BeginTextCommandDisplayText('DUMMY1')
EndTextCommandDisplayText(0.0, 0.0)

-- reset the script draw alignment
ResetScriptGfxAlign()
```

[View docs](https://cfxnatives.dev/natives/SET_SCRIPT_GFX_ALIGN)

---
## SET_SCRIPT_GFX_ALIGN_PARAMS
**Hash:** `0xF5A2C681787E579D` | **Returns:** `void`
**Alt name:** `SetScriptGfxAlignParams`

Sets the draw offset/calculated size for `SET_SCRIPT_GFX_ALIGN`. If using any alignment other than left/top, the game
expects the width/height to be configured using this native in order to get a proper starting position for the draw
command.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `w` | `float` |
| `h` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_SCRIPT_GFX_ALIGN_PARAMS)

---
## SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU
**Hash:** `0xC6372ECD45D73BCD` | **Returns:** `void`
**Alt name:** `SetScriptGfxDrawBehindPausemenu`

Sets a flag defining whether or not script draw commands should continue being drawn behind the pause menu. This is usually used for TV channels and other draw commands that are used with a world render target.

**Parameters:**
| Name | Type |
|------|------|
| `flag` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU)

---
## SET_SCRIPT_GFX_DRAW_ORDER
**Hash:** `0x61BB1D9B3A95D802` | **Returns:** `void`
**Alt name:** `SetScriptGfxDrawOrder`

Sets the draw order for script draw commands.
Examples from decompiled scripts:
GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(7);
GRAPHICS::DRAW_RECT(0.5, 0.5, 3.0, 3.0, v\_4, v\_5, v\_6, a\_0.\_f172, 0);
GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER(1);
GRAPHICS::DRAW_RECT(0.5, 0.5, 1.5, 1.5, 0, 0, 0, 255, 0);

```cpp
enum eGfxDrawOrder
{
    GFX_ORDER_BEFORE_HUD_PRIORITY_LOW = 0,
    GFX_ORDER_BEFORE_HUD = 1,
    GFX_ORDER_BEFORE_HUD_PRIORITY_HIGH = 2,
    GFX_ORDER_AFTER_HUD_PRIORITY_LOW = 3,
    GFX_ORDER_AFTER_HUD = 4,
    GFX_ORDER_AFTER_HUD_PRIORITY_HIGH = 5,
    GFX_ORDER_AFTER_FADE_PRIORITY_LOW = 6,
    GFX_ORDER_AFTER_FADE = 7,
    GFX_ORDER_AFTER_FADE_PRIORITY_HIGH = 8,
}
```

**Parameters:**
| Name | Type |
|------|------|
| `order` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_SCRIPT_GFX_DRAW_ORDER)

---
## SET_SEETHROUGH
**Hash:** `0x7E08924259E08CE0` | **Returns:** `void`
**Alt name:** `SetSeethrough`

```
Toggles Heatvision on/off.  
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_SEETHROUGH)

---
## SET_STREAMED_TEXTURE_DICT_AS_NO_LONGER_NEEDED
**Hash:** `0xBE2CACCF5A8AA805` | **Returns:** `void`
**Alt name:** `SetStreamedTextureDictAsNoLongerNeeded`

**Parameters:**
| Name | Type |
|------|------|
| `textureDict` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_STREAMED_TEXTURE_DICT_AS_NO_LONGER_NEEDED)

---
## SET_TIMECYCLE_MODIFIER
**Hash:** `0x2C933ABF17A1DF41` | **Returns:** `void`
**Alt name:** `SetTimecycleModifier`

```
Loads the specified timecycle modifier. Modifiers are defined separately in another file (e.g. "timecycle_mods_1.xml")
Parameters:
modifierName - The modifier to load (e.g. "V_FIB_IT3", "scanline_cam", etc.)
```

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_TIMECYCLE_MODIFIER)

---
## SET_TIMECYCLE_MODIFIER_STRENGTH
**Hash:** `0x82E7FFCD5B2326B3` | **Returns:** `void`
**Alt name:** `SetTimecycleModifierStrength`

**Parameters:**
| Name | Type |
|------|------|
| `strength` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_TIMECYCLE_MODIFIER_STRENGTH)

---
## SET_TRACKED_POINT_INFO
**Hash:** `0x164ECBB3CF750CB0` | **Returns:** `void`
**Alt name:** `SetTrackedPointInfo`

**Parameters:**
| Name | Type |
|------|------|
| `point` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_TRACKED_POINT_INFO)

---
## SET_TRANSITION_TIMECYCLE_MODIFIER
**Hash:** `0x3BCF567485E1971C` | **Returns:** `void`
**Alt name:** `SetTransitionTimecycleModifier`

This native doesn't work like [`SetWeatherTypeTransition`](#\_0x578C752848ECFA0C).

**Parameters:**
| Name | Type |
|------|------|
| `modifierName` | `char*` |
| `transition` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_TRANSITION_TIMECYCLE_MODIFIER)

---
## SET_TV_AUDIO_FRONTEND
**Hash:** `0x113D2C5DC57E1774` | **Returns:** `void`
**Alt name:** `SetTvAudioFrontend`

```
Probably changes tvs from being a 3d audio to being "global" audio
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_TV_AUDIO_FRONTEND)

---
## SET_TV_CHANNEL
**Hash:** `0xBAABBB23EB6E484E` | **Returns:** `void`
**Alt name:** `SetTvChannel`

**Parameters:**
| Name | Type |
|------|------|
| `channel` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_TV_CHANNEL)

---
## SET_TV_CHANNEL_PLAYLIST
**Hash:** `0xF7B38B8305F1FE8B` | **Returns:** `void`
**Alt name:** `SetTvChannelPlaylist`

Loads specified video sequence into the TV Channel
TV_Channel ranges from 0-2
VideoSequence can be any of the following:
"PL_STD_CNT" CNT Standard Channel
"PL_STD_WZL" Weazel Standard Channel
"PL_LO_CNT"
"PL_LO_WZL"
"PL_SP_WORKOUT"
"PL_SP_INV" - Jay Norris Assassination Mission Fail
"PL_SP_INV_EXP" - Jay Norris Assassination Mission Success
"PL_LO_RS" - Righteous Slaughter Ad
"PL_LO_RS_CUTSCENE" - Righteous Slaughter Cut-scene
"PL_SP_PLSH1\_INTRO"
"PL_LES1\_FAME_OR_SHAME"
"PL_STD_WZL_FOS_EP2"
"PL_MP_WEAZEL" - Weazel Logo on loop
"PL_MP_CCTV" - Generic CCTV loop
Restart:
0=video sequence continues as normal
1=sequence restarts from beginning every time that channel is selected
The above playlists work as intended, and are commonly used, but there are many more playlists, as seen in `tvplaylists.xml`. A pastebin below outlines all playlists, they will be surronded by the name tag I.E. (<Name>PL_STD_CNT</Name> = PL_STD_CNT).
https://pastebin.com/zUzGB6h7

**Parameters:**
| Name | Type |
|------|------|
| `tvChannel` | `int` |
| `playlistName` | `char*` |
| `restart` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_TV_CHANNEL_PLAYLIST)

---
## SET_TV_CHANNEL_PLAYLIST_AT_HOUR
**Hash:** `0x2201C576FACAEBE8` | **Returns:** `void`
**Alt name:** `SetTvChannelPlaylistAtHour`

**Parameters:**
| Name | Type |
|------|------|
| `tvChannel` | `int` |
| `playlistName` | `char*` |
| `hour` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_TV_CHANNEL_PLAYLIST_AT_HOUR)

---
## SET_TV_VOLUME
**Hash:** `0x2982BF73F66E9DDC` | **Returns:** `void`
**Alt name:** `SetTvVolume`

**Parameters:**
| Name | Type |
|------|------|
| `volume` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_TV_VOLUME)

---
## START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY
**Hash:** `0x6F60E89A7B64EE1D` | **Returns:** `int`
**Alt name:** `StartNetworkedParticleFxLoopedOnEntity`

```
network fx  
```

```
NativeDB Added Parameter 13: Any p12
NativeDB Added Parameter 14: Any p13
NativeDB Added Parameter 15: Any p14
NativeDB Added Parameter 16: Any p15
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `entity` | `Entity` |
| `xOffset` | `float` |
| `yOffset` | `float` |
| `zOffset` | `float` |
| `xRot` | `float` |
| `yRot` | `float` |
| `zRot` | `float` |
| `scale` | `float` |
| `xAxis` | `BOOL` |
| `yAxis` | `BOOL` |
| `zAxis` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY)

---
## START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY_BONE
**Hash:** `0xDDE23F30CC5A0F03` | **Returns:** `int`
**Alt name:** `StartNetworkedParticleFxLoopedOnEntityBone`

```
network fx  
```

```
NativeDB Added Parameter 14: Any p13
NativeDB Added Parameter 15: Any p14
NativeDB Added Parameter 16: Any p15
NativeDB Added Parameter 17: Any p16
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `entity` | `Entity` |
| `xOffset` | `float` |
| `yOffset` | `float` |
| `zOffset` | `float` |
| `xRot` | `float` |
| `yRot` | `float` |
| `zRot` | `float` |
| `boneIndex` | `int` |
| `scale` | `float` |
| `xAxis` | `BOOL` |
| `yAxis` | `BOOL` |
| `zAxis` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY_BONE)

---
## START_NETWORKED_PARTICLE_FX_NON_LOOPED_AT_COORD
**Hash:** `0xF56B8137DF10135D` | **Returns:** `BOOL`
**Alt name:** `StartNetworkedParticleFxNonLoopedAtCoord`

NOTE: the [USE_PARTICLE_FX_ASSET](#\_0x6C38AF3693A69A91) needs to be called before EVERY StartNetworkedParticleFxNonLoopedAtCoord(....) call!

List with lots of particle effects: https://vespura.com/fivem/particle-list/

Note: Not all particles on this list are for non looped and vice versa, neither are all of them suited/meant to have SetParticleFxNonLoopedColour(....) called on them.

```
NativeDB Added Parameter 12: BOOL p11
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `xPos` | `float` |
| `yPos` | `float` |
| `zPos` | `float` |
| `xRot` | `float` |
| `yRot` | `float` |
| `zRot` | `float` |
| `scale` | `float` |
| `xAxis` | `BOOL` |
| `yAxis` | `BOOL` |
| `zAxis` | `BOOL` |

**Example:**
```lua
-- If the PtfxAsset hasn't been loaded yet, you'll need to load it first
if not HasNamedPtfxAssetLoaded("scr_indep_fireworks") then
	RequestNamedPtfxAsset("scr_indep_fireworks")
	while not HasNamedPtfxAssetLoaded("scr_indep_fireworks") do
		Wait(10)
	end
end

local CurrentPlayerCoords = GetEntityCoords(GetPlayerPed(-1))

UseParticleFxAssetNextCall("scr_indep_fireworks") -- Prepare the Particle FX for the next upcomming Particle FX call
SetParticleFxNonLoopedColour(1.0, 0.0, 0.0) -- Setting the color to Red (R, G, B)
StartNetworkedParticleFxNonLoopedAtCoord("scr_indep_firework_burst_spawn", CurrentPlayerCoords, 0.0, 0.0, 0.0, 1.0, false, false, false, false) -- Start the animation itself

RemoveNamedPtfxAsset("scr_indep_fireworks") -- Clean up
```

[View docs](https://cfxnatives.dev/natives/START_NETWORKED_PARTICLE_FX_NON_LOOPED_AT_COORD)

---
## START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY
**Hash:** `0xC95EB1DB6E92113D` | **Returns:** `BOOL`
**Alt name:** `StartNetworkedParticleFxNonLoopedOnEntity`

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `entity` | `Entity` |
| `offsetX` | `float` |
| `offsetY` | `float` |
| `offsetZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `scale` | `float` |
| `axisX` | `BOOL` |
| `axisY` | `BOOL` |
| `axisZ` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY)

---
## START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
**Hash:** `0xA41B6A43642AC2CF` | **Returns:** `BOOL`
**Alt name:** `StartNetworkedParticleFxNonLoopedOnPedBone`

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `ped` | `Ped` |
| `offsetX` | `float` |
| `offsetY` | `float` |
| `offsetZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `boneIndex` | `int` |
| `scale` | `float` |
| `axisX` | `BOOL` |
| `axisY` | `BOOL` |
| `axisZ` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_PED_BONE)

---
## START_PARTICLE_FX_LOOPED_AT_COORD
**Hash:** `0xE184F4F0DC5910E7` | **Returns:** `int`
**Alt name:** `StartParticleFxLoopedAtCoord`

```
GRAPHICS::START_PARTICLE_FX_LOOPED_AT_COORD("scr_fbi_falling_debris", 93.7743f, -749.4572f, 70.86904f, 0f, 0f, 0f, 0x3F800000, 0, 0, 0, 0)  
p11 seems to be always 0  
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `xRot` | `float` |
| `yRot` | `float` |
| `zRot` | `float` |
| `scale` | `float` |
| `xAxis` | `BOOL` |
| `yAxis` | `BOOL` |
| `zAxis` | `BOOL` |
| `p11` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_PARTICLE_FX_LOOPED_AT_COORD)

---
## START_PARTICLE_FX_LOOPED_ON_ENTITY
**Hash:** `0x1AE42C1660FD6517` | **Returns:** `int`
**Alt name:** `StartParticleFxLoopedOnEntity`

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `entity` | `Entity` |
| `xOffset` | `float` |
| `yOffset` | `float` |
| `zOffset` | `float` |
| `xRot` | `float` |
| `yRot` | `float` |
| `zRot` | `float` |
| `scale` | `float` |
| `xAxis` | `BOOL` |
| `yAxis` | `BOOL` |
| `zAxis` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_PARTICLE_FX_LOOPED_ON_ENTITY)

---
## START_PARTICLE_FX_LOOPED_ON_ENTITY_BONE
**Hash:** `0xC6EB449E33977F0B` | **Returns:** `int`
**Alt name:** `StartParticleFxLoopedOnEntityBone`

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `entity` | `Entity` |
| `xOffset` | `float` |
| `yOffset` | `float` |
| `zOffset` | `float` |
| `xRot` | `float` |
| `yRot` | `float` |
| `zRot` | `float` |
| `boneIndex` | `int` |
| `scale` | `float` |
| `xAxis` | `BOOL` |
| `yAxis` | `BOOL` |
| `zAxis` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_PARTICLE_FX_LOOPED_ON_ENTITY_BONE)

---
## START_PARTICLE_FX_LOOPED_ON_PED_BONE
**Hash:** `0xF28DA9F38CD1787C` | **Returns:** `int`
**Alt name:** `StartParticleFxLoopedOnPedBone`

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `ped` | `Ped` |
| `xOffset` | `float` |
| `yOffset` | `float` |
| `zOffset` | `float` |
| `xRot` | `float` |
| `yRot` | `float` |
| `zRot` | `float` |
| `boneIndex` | `int` |
| `scale` | `float` |
| `xAxis` | `BOOL` |
| `yAxis` | `BOOL` |
| `zAxis` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_PARTICLE_FX_LOOPED_ON_PED_BONE)

---
## START_PARTICLE_FX_NON_LOOPED_AT_COORD
**Hash:** `0x25129531F77B9ED3` | **Returns:** `int`
**Alt name:** `StartParticleFxNonLoopedAtCoord`

```
GRAPHICS::START_PARTICLE_FX_NON_LOOPED_AT_COORD("scr_paleto_roof_impact", -140.8576f, 6420.789f, 41.1391f, 0f, 0f, 267.3957f, 0x3F800000, 0, 0, 0);  
Axis - Invert Axis Flags  
list: pastebin.com/N9unUFWY  
-------------------------------------------------------------------  
C#  
Function.Call<int>(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, = you are calling this function.  
char *effectname = This is an in-game effect name, for e.g. "scr_fbi4_trucks_crash" is used to give the effects when truck crashes etc  
float x, y, z pos = this one is Simple, you just have to declare, where do you want this effect to take place at, so declare the ordinates  
float xrot, yrot, zrot = Again simple? just mention the value in case if you want the effect to rotate.  
float scale = is declare the scale of the effect, this may vary as per the effects for e.g 1.0f  
bool xaxis, yaxis, zaxis = To bool the axis values.  
example:  
Function.Call<int>(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, "scr_fbi4_trucks_crash", GTA.Game.Player.Character.Position.X, GTA.Game.Player.Character.Position.Y, GTA.Game.Player.Character.Position.Z + 4f, 0, 0, 0, 5.5f, 0, 0, 0);  
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `xPos` | `float` |
| `yPos` | `float` |
| `zPos` | `float` |
| `xRot` | `float` |
| `yRot` | `float` |
| `zRot` | `float` |
| `scale` | `float` |
| `xAxis` | `BOOL` |
| `yAxis` | `BOOL` |
| `zAxis` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_PARTICLE_FX_NON_LOOPED_AT_COORD)

---
## START_PARTICLE_FX_NON_LOOPED_ON_ENTITY
**Hash:** `0x0D53A3B8DA0809D2` | **Returns:** `BOOL`
**Alt name:** `StartParticleFxNonLoopedOnEntity`

```
Starts a particle effect on an entity for example your player.  
List: pastebin.com/N9unUFWY  
Example:  
C#:  
Function.Call(Hash.REQUEST_NAMED_PTFX_ASSET, "scr_rcbarry2");                     Function.Call(Hash._SET_PTFX_ASSET_NEXT_CALL, "scr_rcbarry2");                             Function.Call(Hash.START_PARTICLE_FX_NON_LOOPED_ON_ENTITY, "scr_clown_appears", Game.Player.Character, 0.0, 0.0, -0.5, 0.0, 0.0, 0.0, 1.0, false, false, false);  
Internally this calls the same function as GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE  
however it uses -1 for the specified bone index, so it should be possible to start a non looped fx on an entity bone using that native  
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `entity` | `Entity` |
| `offsetX` | `float` |
| `offsetY` | `float` |
| `offsetZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `scale` | `float` |
| `axisX` | `BOOL` |
| `axisY` | `BOOL` |
| `axisZ` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_PARTICLE_FX_NON_LOOPED_ON_ENTITY)

---
## START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
**Hash:** `0x0E7E72961BA18619` | **Returns:** `BOOL`
**Alt name:** `StartParticleFxNonLoopedOnPedBone`

```
GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE("scr_sh_bong_smoke", PLAYER::PLAYER_PED_ID(), -0.025f, 0.13f, 0f, 0f, 0f, 0f, 31086, 0x3F800000, 0, 0, 0);  
Axis - Invert Axis Flags  
list: pastebin.com/N9unUFWY  
```

**Parameters:**
| Name | Type |
|------|------|
| `effectName` | `char*` |
| `ped` | `Ped` |
| `offsetX` | `float` |
| `offsetY` | `float` |
| `offsetZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `boneIndex` | `int` |
| `scale` | `float` |
| `axisX` | `BOOL` |
| `axisY` | `BOOL` |
| `axisZ` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE)

---
## START_PETROL_TRAIL_DECALS
**Hash:** `0x99AC7F0D8B9C893D` | **Returns:** `void`
**Alt name:** `StartPetrolTrailDecals`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/START_PETROL_TRAIL_DECALS)

---
## STOP_PARTICLE_FX_LOOPED
**Hash:** `0x8F75998877616996` | **Returns:** `void`
**Alt name:** `StopParticleFxLooped`

```
p1 is always 0 in the native scripts  
```

**Parameters:**
| Name | Type |
|------|------|
| `ptfxHandle` | `int` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/STOP_PARTICLE_FX_LOOPED)

---
## TERRAINGRID_ACTIVATE
**Hash:** `0xA356990E161C9E65` | **Returns:** `void`
**Alt name:** `TerraingridActivate`

This native enables/disables the gold putting grid display (https://i.imgur.com/TC6cku6.png).
This requires these two natives to be called as well to configure the grid: [`TERRAINGRID_SET_PARAMS`](#\_0x1C4FC5752BCD8E48) and [`TERRAINGRID_SET_COLOURS`](#\_0x5CE62918F8D703C7).

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TERRAINGRID_ACTIVATE)

---
## TERRAINGRID_SET_COLOURS
**Hash:** `0x5CE62918F8D703C7` | **Returns:** `void`
**Alt name:** `TerraingridSetColours`

This native is used along with these two natives: [`TERRAINGRID_ACTIVATE`](#\_0xA356990E161C9E65) and [`TERRAINGRID_SET_PARAMS`](#\_0x1C4FC5752BCD8E48).
This native sets the colors for the golf putting grid. the 'min...' values are for the lower areas that the grid covers, the 'max...' values are for the higher areas that the grid covers, all remaining values are for the 'normal' ground height.
All those natives combined they will output something like this: https://i.imgur.com/TC6cku6.png

Old description:
Only called in golf and golf_mp\
parameters used are\
GRAPHICS::\_0x5CE62918F8D703C7(255, 0, 0, 64, 255, 255, 255, 5, 255, 255, 0, 64);

**Parameters:**
| Name | Type |
|------|------|
| `lowR` | `int` |
| `lowG` | `int` |
| `lowB` | `int` |
| `lowAlpha` | `int` |
| `R` | `int` |
| `G` | `int` |
| `B` | `int` |
| `Alpha` | `int` |
| `highR` | `int` |
| `highG` | `int` |
| `highB` | `int` |
| `highAlpha` | `int` |

**Example:**
```cs
N_0xa356990e161c9e65(true); // toggle on/off

// this native configures the location, size, rotation, normal height, and the difference ratio between min, normal and max.
N_0x1c4fc5752bcd8e48(-1114.121f, 220.789f, 63.78f, -1f, 0.85f, 0f, 15f, 15f, -1f, 20f, 40f, 63.78f, 0.2f);

// This native defines the colors (and alpha/opacity levels) for min, normal and max heights.
// (in this case: red for lower, white for normal, yellow for higher)
N_0x5ce62918f8d703c7(255, 0, 0, 64, 255, 255, 255, 5, 255, 255, 0, 64);
```

[View docs](https://cfxnatives.dev/natives/TERRAINGRID_SET_COLOURS)

---
## TERRAINGRID_SET_PARAMS
**Hash:** `0x1C4FC5752BCD8E48` | **Returns:** `void`
**Alt name:** `TerraingridSetParams`

This native is used along with these two natives: [`TERRAINGRID_ACTIVATE`](#\_0xA356990E161C9E65) and [`TERRAINGRID_SET_COLOURS`](#\_0x5CE62918F8D703C7).

This native configures the location, size, rotation, normal height, and the difference ratio between min, normal and max.

All those natives combined they will output something like this: https://i.imgur.com/TC6cku6.png

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `p3` | `float` |
| `rotation` | `float` |
| `p5` | `float` |
| `width` | `float` |
| `height` | `float` |
| `p8` | `float` |
| `scale` | `float` |
| `glowIntensity` | `float` |
| `normalHeight` | `float` |
| `heightDiff` | `float` |

**Example:**
```cs
N_0xa356990e161c9e65(true); // toggle on/off

// this native configures the location, size, rotation, normal height, and the difference ratio between min, normal and max.
N_0x1c4fc5752bcd8e48(-1114.121f, 220.789f, 63.78f, -1f, 0.85f, 0f, 15f, 15f, -1f, 20f, 40f, 63.78f, 0.2f);

// This native defines the colors (and alpha/opacity levels) for min, normal and max heights.
// (in this case: red for lower, white for normal, yellow for higher)
N_0x5ce62918f8d703c7(255, 0, 0, 64, 255, 255, 255, 5, 255, 255, 0, 64);
```

[View docs](https://cfxnatives.dev/natives/TERRAINGRID_SET_PARAMS)

---
## TOGGLE_PAUSED_RENDERPHASES
**Hash:** `0xDFC252D8A3E15AB7` | **Returns:** `void`
**Alt name:** `TogglePausedRenderphases`

Switches the rendering display to exclude everything except PostFX, resulting in a frozen screen before the UI pass.

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TOGGLE_PAUSED_RENDERPHASES)

---
## TRIGGER_SCREENBLUR_FADE_IN
**Hash:** `0xA328A24AAA6B7FDC` | **Returns:** `BOOL`
**Alt name:** `TriggerScreenblurFadeIn`

**Parameters:**
| Name | Type |
|------|------|
| `transitionTime` | `float` |

[View docs](https://cfxnatives.dev/natives/TRIGGER_SCREENBLUR_FADE_IN)

---
## TRIGGER_SCREENBLUR_FADE_OUT
**Hash:** `0xEFACC8AEF94430D5` | **Returns:** `BOOL`
**Alt name:** `TriggerScreenblurFadeOut`

**Parameters:**
| Name | Type |
|------|------|
| `transitionTime` | `float` |

[View docs](https://cfxnatives.dev/natives/TRIGGER_SCREENBLUR_FADE_OUT)

---
## UI3DSCENE_IS_AVAILABLE
**Hash:** `0xD3A10FC7FD8D98CD` | **Returns:** `BOOL`
**Alt name:** `Ui3dsceneIsAvailable`

[View docs](https://cfxnatives.dev/natives/UI3DSCENE_IS_AVAILABLE)

---
## UI3DSCENE_PUSH_PRESET
**Hash:** `0xF1CEA8A4198D8E9A` | **Returns:** `BOOL`
**Alt name:** `Ui3dscenePushPreset`

```
All presets can be found in common\data\ui\uiscenes.meta
```

**Parameters:**
| Name | Type |
|------|------|
| `presetName` | `char*` |

[View docs](https://cfxnatives.dev/natives/UI3DSCENE_PUSH_PRESET)

---
## UNPATCH_DECAL_DIFFUSE_MAP
**Hash:** `0xB7ED70C49521A61D` | **Returns:** `void`
**Alt name:** `UnpatchDecalDiffuseMap`

```
GRAPHICS::UNPATCH_DECAL_DIFFUSE_MAP(9123);  
GRAPHICS::SET_STREAMED_TEXTURE_DICT_AS_NO_LONGER_NEEDED("MPMissMarkers256");  
```

**Parameters:**
| Name | Type |
|------|------|
| `decalType` | `int` |

[View docs](https://cfxnatives.dev/natives/UNPATCH_DECAL_DIFFUSE_MAP)

---
## UPDATE_LIGHTS_ON_ENTITY
**Hash:** `0xDEADC0DEDEADC0DE` | **Returns:** `void`
**Alt name:** `UpdateLightsOnEntity`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/UPDATE_LIGHTS_ON_ENTITY)

---
## USE_PARTICLE_FX_ASSET
**Hash:** `0x6C38AF3693A69A91` | **Returns:** `void`
**Alt name:** `UseParticleFxAsset`

```
From the b678d decompiled scripts:
 GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("FM_Mission_Controler");
 GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_apartment_mp");
 GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_indep_fireworks");
 GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_mp_cig_plane");
 GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_mp_creator");
 GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_ornate_heist");
 GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_prison_break_heist_station");
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/USE_PARTICLE_FX_ASSET)

---
## WASH_DECALS_FROM_VEHICLE
**Hash:** `0x5B712761429DBC14` | **Returns:** `void`
**Alt name:** `WashDecalsFromVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `p1` | `float` |

[View docs](https://cfxnatives.dev/natives/WASH_DECALS_FROM_VEHICLE)

---
## WASH_DECALS_IN_RANGE
**Hash:** `0x9C30613D50A6ADEF` | **Returns:** `void`
**Alt name:** `WashDecalsInRange`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |
| `p4` | `Any` |

[View docs](https://cfxnatives.dev/natives/WASH_DECALS_IN_RANGE)

---

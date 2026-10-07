# BRAIN Natives

> 11 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x0B40ED49D7D6FF84
**Hash:** `0x0B40ED49D7D6FF84` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/0x0B40ED49D7D6FF84)

---
## _0x4D953DF78EBF8158
**Hash:** `0x4D953DF78EBF8158` | **Returns:** `void`

```
Something like flush_all_scripts   
Most of time comes after NETWORK_END_TUTORIAL_SESSION() or before TERMINATE_THIS_THREAD()  
```

[View docs](https://cfxnatives.dev/natives/0x4D953DF78EBF8158)

---
## _0x6D6840CEE8845831
**Hash:** `0x6D6840CEE8845831` | **Returns:** `void`

```
Possible values:  
act_cinema  
am_mp_carwash_launch  
am_mp_carwash_control  
am_mp_property_ext  
chop  
fairgroundHub  
launcher_BasejumpHeli  
launcher_BasejumpPack  
launcher_CarWash  
launcher_golf  
launcher_Hunting_Ambient  
launcher_MrsPhilips  
launcher_OffroadRacing  
launcher_pilotschool  
launcher_Racing  
launcher_rampage  
launcher_rampage  
launcher_range  
launcher_stunts  
launcher_stunts  
launcher_tennis  
launcher_Tonya  
launcher_Triathlon  
launcher_Yoga  
ob_mp_bed_low  
ob_mp_bed_med  
```

**Parameters:**
| Name | Type |
|------|------|
| `action` | `char*` |

[View docs](https://cfxnatives.dev/natives/0x6D6840CEE8845831)

---
## _0x6E91B04E08773030
**Hash:** `0x6E91B04E08773030` | **Returns:** `void`

```
Looks like a cousin of above function _6D6840CEE8845831 as it was found among them. Must be similar  
Here are possible values of argument -   
"ob_tv"  
"launcher_Darts"  
```

**Parameters:**
| Name | Type |
|------|------|
| `action` | `char*` |

[View docs](https://cfxnatives.dev/natives/0x6E91B04E08773030)

---
## ADD_SCRIPT_TO_RANDOM_PED
**Hash:** `0x4EE5367468A65CCC` | **Returns:** `void`
**Alt name:** `AddScriptToRandomPed`

```
BRAIN::ADD_SCRIPT_TO_RANDOM_PED("pb_prostitute", ${s_f_y_hooker_01}, 100, 0);
- Nacorpio
-----
Hardcoded to not work in Multiplayer.
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `model` | `Hash` |
| `p2` | `float` |
| `p3` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_SCRIPT_TO_RANDOM_PED)

---
## DISABLE_SCRIPT_BRAIN_SET
**Hash:** `0x14D8518E9760F08F` | **Returns:** `void`
**Alt name:** `DisableScriptBrainSet`

**Parameters:**
| Name | Type |
|------|------|
| `brainSet` | `int` |

[View docs](https://cfxnatives.dev/natives/DISABLE_SCRIPT_BRAIN_SET)

---
## ENABLE_SCRIPT_BRAIN_SET
**Hash:** `0x67AA4D73F0CFA86B` | **Returns:** `void`
**Alt name:** `EnableScriptBrainSet`

**Parameters:**
| Name | Type |
|------|------|
| `brainSet` | `int` |

[View docs](https://cfxnatives.dev/natives/ENABLE_SCRIPT_BRAIN_SET)

---
## IS_OBJECT_WITHIN_BRAIN_ACTIVATION_RANGE
**Hash:** `0xCCBA154209823057` | **Returns:** `BOOL`
**Alt name:** `IsObjectWithinBrainActivationRange`

**Parameters:**
| Name | Type |
|------|------|
| `object` | `Object` |

[View docs](https://cfxnatives.dev/natives/IS_OBJECT_WITHIN_BRAIN_ACTIVATION_RANGE)

---
## IS_WORLD_POINT_WITHIN_BRAIN_ACTIVATION_RANGE
**Hash:** `0xC5042CC6F5E3D450` | **Returns:** `BOOL`
**Alt name:** `IsWorldPointWithinBrainActivationRange`

```
Gets whether the world point the calling script is registered to is within desired range of the player.  
```

[View docs](https://cfxnatives.dev/natives/IS_WORLD_POINT_WITHIN_BRAIN_ACTIVATION_RANGE)

---
## REGISTER_OBJECT_SCRIPT_BRAIN
**Hash:** `0x0BE84C318BA6EC22` | **Returns:** `void`
**Alt name:** `RegisterObjectScriptBrain`

```
Registers a script for any object with a specific model hash.
BRAIN::REGISTER_OBJECT_SCRIPT_BRAIN("ob_telescope", ${prop_telescope_01}, 100, 4.0, -1, 9);
```

**Parameters:**
| Name | Type |
|------|------|
| `scriptName` | `char*` |
| `modelHash` | `Hash` |
| `p2` | `int` |
| `activationRange` | `float` |
| `p4` | `int` |
| `p5` | `int` |

[View docs](https://cfxnatives.dev/natives/REGISTER_OBJECT_SCRIPT_BRAIN)

---
## REGISTER_WORLD_POINT_SCRIPT_BRAIN
**Hash:** `0x3CDC7136613284BD` | **Returns:** `void`
**Alt name:** `RegisterWorldPointScriptBrain`

**Parameters:**
| Name | Type |
|------|------|
| `scriptName` | `char*` |
| `activationRange` | `float` |
| `p2` | `int` |

[View docs](https://cfxnatives.dev/natives/REGISTER_WORLD_POINT_SCRIPT_BRAIN)

---

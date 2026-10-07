# SYSTEM Natives

> 26 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _LOG10
**Hash:** `0xE816E655DE37FE20` | **Returns:** `float`

```
NativeDB Introduced: v1604
```

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/_LOG10)

---
## _SET_THREAD_PRIORITY
**Hash:** `0x42B65DEEF2EDF2A1` | **Returns:** `void`

```
0 = high
1 = normal
2 = low
```

**Parameters:**
| Name | Type |
|------|------|
| `priority` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_THREAD_PRIORITY)

---
## CEIL
**Hash:** `0x11E019C8F43ACC8A` | **Returns:** `int`
**Alt name:** `Ceil`

```
I'm guessing this rounds a float value up to the next whole number, and FLOOR rounds it down  
```

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/CEIL)

---
## COS
**Hash:** `0xD0FFB162F40A139C` | **Returns:** `float`
**Alt name:** `Cos`

Returns the cosine of the given number.

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

**Example:**
```lua
-- Get the heading
local heading = GetEntityHeading(PlayerPedId())
local cos = Cos(heading)

-- equivalent in lua
local cosLua = math.cos(heading * (math.pi / 180))
```

[View docs](https://cfxnatives.dev/natives/COS)

---
## FLOOR
**Hash:** `0xF34EE736CF047844` | **Returns:** `int`
**Alt name:** `Floor`

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/FLOOR)

---
## POW
**Hash:** `0xE3621CC40F31FE2E` | **Returns:** `float`
**Alt name:** `Pow`

**Parameters:**
| Name | Type |
|------|------|
| `base` | `float` |
| `exponent` | `float` |

[View docs](https://cfxnatives.dev/natives/POW)

---
## ROUND
**Hash:** `0xF2DB717A73826179` | **Returns:** `int`
**Alt name:** `Round`

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/ROUND)

---
## SETTIMERA
**Hash:** `0xC1B1E9A034A63A62` | **Returns:** `void`
**Alt name:** `Settimera`

Sets the value for the timer A in milliseconds

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SETTIMERA)

---
## SETTIMERB
**Hash:** `0x5AE11BC36633DE4E` | **Returns:** `void`
**Alt name:** `Settimerb`

Sets the value for the timer B in milliseconds

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SETTIMERB)

---
## SHIFT_LEFT
**Hash:** `0xEDD95A39E5544DE8` | **Returns:** `int`
**Alt name:** `ShiftLeft`

Left bit shifts a value.
It is advised you use the `<<` operator instead of this native. It does the same and is faster.

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |
| `bitShift` | `int` |

[View docs](https://cfxnatives.dev/natives/SHIFT_LEFT)

---
## SHIFT_RIGHT
**Hash:** `0x97EF1E5BCE9DC075` | **Returns:** `int`
**Alt name:** `ShiftRight`

Right bit shifts a value.
It is advised you use the `>>` operator instead of this native. It does the same and is faster.

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |
| `bitShift` | `int` |

[View docs](https://cfxnatives.dev/natives/SHIFT_RIGHT)

---
## SIN
**Hash:** `0x0BADBFA3B172435F` | **Returns:** `float`
**Alt name:** `Sin`

Returns the sine of the given number.

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

**Example:**
```lua
-- Get the heading
local heading = GetEntityHeading(PlayerPedId())
local sin = Sin(heading)

-- equivalent in lua
local sinLua = math.sin(heading * (math.pi / 180))
```

[View docs](https://cfxnatives.dev/natives/SIN)

---
## SQRT
**Hash:** `0x71D93B57D07F9804` | **Returns:** `float`
**Alt name:** `Sqrt`

**Parameters:**
| Name | Type |
|------|------|
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SQRT)

---
## START_NEW_SCRIPT
**Hash:** `0xE81651AD79516E48` | **Returns:** `int`
**Alt name:** `StartNewScript`

```
Examples:
 g_384A = SYSTEM::START_NEW_SCRIPT("cellphone_flashhand", 1424);
 l_10D = SYSTEM::START_NEW_SCRIPT("taxiService", 1828);
 SYSTEM::START_NEW_SCRIPT("AM_MP_YACHT", 5000);
 SYSTEM::START_NEW_SCRIPT("emergencycall", 512);
 SYSTEM::START_NEW_SCRIPT("emergencycall", 512);
 SYSTEM::START_NEW_SCRIPT("FM_maintain_cloud_header_data", 1424);
 SYSTEM::START_NEW_SCRIPT("FM_Mission_Controller", 31000);
 SYSTEM::START_NEW_SCRIPT("tennis_family", 3650);
 SYSTEM::START_NEW_SCRIPT("Celebrations", 3650);
Decompiled examples of usage when starting a script:

    SCRIPT::REQUEST_SCRIPT(a_0);
    if (SCRIPT::HAS_SCRIPT_LOADED(a_0)) {
        SYSTEM::START_NEW_SCRIPT(a_0, v_3);
        SCRIPT::SET_SCRIPT_AS_NO_LONGER_NEEDED(a_0);
        return 1;
    }

or:
    v_2 = "MrsPhilips2";
    SCRIPT::REQUEST_SCRIPT(v_2);
    while (!SCRIPT::HAS_SCRIPT_LOADED(v_2)) {
    SCRIPT::REQUEST_SCRIPT(v_2);
    SYSTEM::WAIT(0);
    }
    sub_8792(36);
    SYSTEM::START_NEW_SCRIPT(v_2, 17000);
    SCRIPT::SET_SCRIPT_AS_NO_LONGER_NEEDED(v_2);
All native script names: pastebin.com/K9adDsu4 and pastebin.com/yLNWicUi
```

**Parameters:**
| Name | Type |
|------|------|
| `scriptName` | `char*` |
| `stackSize` | `int` |

[View docs](https://cfxnatives.dev/natives/START_NEW_SCRIPT)

---
## START_NEW_SCRIPT_WITH_ARGS
**Hash:** `0xB8BA7F44DF1575E1` | **Returns:** `int`
**Alt name:** `StartNewScriptWithArgs`

```
return : script thread id, 0 if failed  
Pass pointer to struct of args in p1, size of struct goes into p2  
```

**Parameters:**
| Name | Type |
|------|------|
| `scriptName` | `char*` |
| `args` | `Any*` |
| `argCount` | `int` |
| `stackSize` | `int` |

[View docs](https://cfxnatives.dev/natives/START_NEW_SCRIPT_WITH_ARGS)

---
## START_NEW_SCRIPT_WITH_NAME_HASH
**Hash:** `0xEB1C67C3A5333A92` | **Returns:** `int`
**Alt name:** `StartNewScriptWithNameHash`

**Parameters:**
| Name | Type |
|------|------|
| `scriptHash` | `Hash` |
| `stackSize` | `int` |

[View docs](https://cfxnatives.dev/natives/START_NEW_SCRIPT_WITH_NAME_HASH)

---
## START_NEW_SCRIPT_WITH_NAME_HASH_AND_ARGS
**Hash:** `0xC4BB298BD441BE78` | **Returns:** `int`
**Alt name:** `StartNewScriptWithNameHashAndArgs`

**Parameters:**
| Name | Type |
|------|------|
| `scriptHash` | `Hash` |
| `args` | `Any*` |
| `argCount` | `int` |
| `stackSize` | `int` |

[View docs](https://cfxnatives.dev/natives/START_NEW_SCRIPT_WITH_NAME_HASH_AND_ARGS)

---
## TIMERA
**Hash:** `0x83666F9FB8FEBD4B` | **Returns:** `int`
**Alt name:** `Timera`

```
Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).  
```

[View docs](https://cfxnatives.dev/natives/TIMERA)

---
## TIMERB
**Hash:** `0xC9D9444186B5A374` | **Returns:** `int`
**Alt name:** `Timerb`

[View docs](https://cfxnatives.dev/natives/TIMERB)

---
## TIMESTEP
**Hash:** `0x0000000050597EE2` | **Returns:** `float`
**Alt name:** `Timestep`

```
Gets the current frame time.  
```

[View docs](https://cfxnatives.dev/natives/TIMESTEP)

---
## TO_FLOAT
**Hash:** `0xBBDA792448DB5A89` | **Returns:** `float`
**Alt name:** `ToFloat`

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/TO_FLOAT)

---
## VDIST
**Hash:** `0x2A488C176D52CCA5` | **Returns:** `float`
**Alt name:** `Vdist`

Calculates the distance between two points in 3D space. For performance reasons, consider using direct mathematical calculations for distance, as they can be more efficient than calling this native function.

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

**Example:**
```lua
-- Define a set of coordinates
local coords = vector3(145.0, 200.0, 1000.0)

-- Get the player's current ped
local playerPed = PlayerPedId()

-- Get the player's current coordinates
local coordsPlayer = GetEntityCoords(playerPed, false)

-- Calculate the distance between the player and the coordinates
local distance = Vdist(coordsPlayer.x, coordsPlayer.y, coordsPlayer.z, coords.x, coords.y, coords.z)

if (distance < 10.0) then
    print("You are close to the coordinates")
else
    print("You are far from the coordinates")
end
```

[View docs](https://cfxnatives.dev/natives/VDIST)

---
## VDIST2
**Hash:** `0xB7A628320EFF8E47` | **Returns:** `float`
**Alt name:** `Vdist2`

Calculates distance between vectors but does not perform Sqrt operations. Its way faster than [`VDIST`](#\_0x2A488C176D52CCA5), but it's not faster than direct mathematical calculations.

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

[View docs](https://cfxnatives.dev/natives/VDIST2)

---
## VMAG
**Hash:** `0x652D2EEEF1D3E62C` | **Returns:** `float`
**Alt name:** `Vmag`

```
Calculates the magnitude of a vector.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/VMAG)

---
## VMAG2
**Hash:** `0xA8CEACB4F35AE058` | **Returns:** `float`
**Alt name:** `Vmag2`

```
Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/VMAG2)

---
## WAIT
**Hash:** `0x4EDE34FBADD967A6` | **Returns:** `void`
**Alt name:** `Wait`

```
Pauses execution of the current script, please note this behavior is only seen when called from one of the game script files(ysc). In order to wait an asi script use "static void WAIT(DWORD time);" found in main.h
```

**Parameters:**
| Name | Type |
|------|------|
| `ms` | `int` |

[View docs](https://cfxnatives.dev/natives/WAIT)

---

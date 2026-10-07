# PAD Natives

> 48 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x14D29BB12D47F68C
**Hash:** `0x14D29BB12D47F68C` | **Returns:** `void`

**This native does absolutely nothing, just a nullsub**

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |
| `p4` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x14D29BB12D47F68C)

---
## _0x23F09EADC01449D6
**Hash:** `0x23F09EADC01449D6` | **Returns:** `BOOL`

Hardcoded to return false.

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/0x23F09EADC01449D6)

---
## _0x25AAA32BDC98F2A3
**Hash:** `0x25AAA32BDC98F2A3` | **Returns:** `Any`

```
NativeDB Introduced: v1365
```

[View docs](https://cfxnatives.dev/natives/0x25AAA32BDC98F2A3)

---
## _0x5B73C77D9EB66E24
**Hash:** `0x5B73C77D9EB66E24` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x5B73C77D9EB66E24)

---
## _0x6CD79468A1E595C6
**Hash:** `0x6CD79468A1E595C6` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/0x6CD79468A1E595C6)

---
## _0xA0CEFCEA390AAB9B
**Hash:** `0xA0CEFCEA390AAB9B` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xA0CEFCEA390AAB9B)

---
## _0xCB0360EFEFB2580D
**Hash:** `0xCB0360EFEFB2580D` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/0xCB0360EFEFB2580D)

---
## _0xE1615EC03B3BB4FD
**Hash:** `0xE1615EC03B3BB4FD` | **Returns:** `BOOL`

```
Used with IS_LOOK_INVERTED() and negates its affect.
--
Not sure how the person above got that description, but here's an actual example:
if (PAD::_GET_LAST_INPUT_METHOD(2)) {
    if (a_5) {
        if (PAD::IS_LOOK_INVERTED()) {
            a_3 *= -1;
        }
        if (PAD::_E1615EC03B3BB4FD()) {
            a_3 *= -1;
        }
    }
}
```

[View docs](https://cfxnatives.dev/natives/0xE1615EC03B3BB4FD)

---
## _0xF239400E16C23E08
**Hash:** `0xF239400E16C23E08` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/0xF239400E16C23E08)

---
## _DISABLE_INPUT_GROUP
**Hash:** `0x7F4724035FDCA1DD` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/_DISABLE_INPUT_GROUP)

---
## _GET_LOCAL_PLAYER_AIM_STATE_2
**Hash:** `0x59B9A7AF4C95133C` | **Returns:** `int`

```
Same behavior as GET_LOCAL_PLAYER_AIM_STATE but only used on the PC version.  
```

[View docs](https://cfxnatives.dev/natives/_GET_LOCAL_PLAYER_AIM_STATE_2)

---
## _GET_TIME_SINCE_LAST_INPUT
**Hash:** `0xD7D22F5592AED8BA` | **Returns:** `int`

```
The number of milliseconds since last padIndex registered pressed
```

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/_GET_TIME_SINCE_LAST_INPUT)

---
## _IS_DISABLED_CONTROL_RELEASED
**Hash:** `0xFB6C4072E9A32E92` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/_IS_DISABLED_CONTROL_RELEASED)

---
## _IS_USING_KEYBOARD
**Hash:** `0xA571D46727E2B718` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/_IS_USING_KEYBOARD)

---
## _IS_USING_KEYBOARD_2
**Hash:** `0x13337B38DB572509` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/_IS_USING_KEYBOARD_2)

---
## _RESET_INPUT_MAPPING_SCHEME
**Hash:** `0x643ED62D5EA3BEBD` | **Returns:** `void`

```
S*
```

[View docs](https://cfxnatives.dev/natives/_RESET_INPUT_MAPPING_SCHEME)

---
## _SET_CONTROL_LIGHT_EFFECT_COLOR
**Hash:** `0x8290252FFF36ACB5` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `red` | `int` |
| `green` | `int` |
| `blue` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_CONTROL_LIGHT_EFFECT_COLOR)

---
## _SET_CONTROL_NORMAL
**Hash:** `0xE8A25867FBA3B05E` | **Returns:** `BOOL`

This is for simulating player input.

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |
| `amount` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_CONTROL_NORMAL)

---
## _SET_CURSOR_LOCATION
**Hash:** `0xFC695459D4D0E219` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_CURSOR_LOCATION)

---
## _SWITCH_TO_INPUT_MAPPING_SCHEME
**Hash:** `0x3D42B92563939375` | **Returns:** `BOOL`

```
Used in carsteal3 script with p0 = "Carsteal4_spycar".
S*
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/_SWITCH_TO_INPUT_MAPPING_SCHEME)

---
## _SWITCH_TO_INPUT_MAPPING_SCHEME_2
**Hash:** `0x4683149ED1DDE7A1` | **Returns:** `BOOL`

```
Same as 0x3D42B92563939375

S*
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/_SWITCH_TO_INPUT_MAPPING_SCHEME_2)

---
## DISABLE_ALL_CONTROL_ACTIONS
**Hash:** `0x5F4B6931816E599B` | **Returns:** `void`
**Alt name:** `DisableAllControlActions`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/DISABLE_ALL_CONTROL_ACTIONS)

---
## DISABLE_CONTROL_ACTION
**Hash:** `0xFE99B66D079CF6BC` | **Returns:** `void`
**Alt name:** `DisableControlAction`

[Control values and meaning](https://docs.fivem.net/docs/game-references/controls/#controls)

Example: `CONTROLS::DISABLE_CONTROL_ACTION(2, 19, true)` disables the switching UI from appearing both when using a keyboard and Xbox 360 controller. Needs to be executed each frame.
Control group 1 and 0 gives the same results as 2. Same results for all players.

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |
| `disable` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DISABLE_CONTROL_ACTION)

---
## ENABLE_ALL_CONTROL_ACTIONS
**Hash:** `0xA5FFE9B05F199DE7` | **Returns:** `void`
**Alt name:** `EnableAllControlActions`

```cpp
enum ePadType {
  PLAYER_CONTROL = 0,
  CAMERA_CONTROL = 1,
  FRONTEND_CONTRO = 2
};
```

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/ENABLE_ALL_CONTROL_ACTIONS)

---
## ENABLE_CONTROL_ACTION
**Hash:** `0x351220255D64C155` | **Returns:** `void`
**Alt name:** `EnableControlAction`

```
control values and meaning: github.com/crosire/scripthookvdotnet/blob/dev_v3/source/scripting/Control.cs  
and  
https://docs.fivem.net/game-references/controls/
0, 1 and 2 used in the scripts.  
Control values from the decompiled scripts:   
0,1,2,3,4,5,6,8,9,10,11,14,15,16,17,19,21,22,24,25,26,30,31,32,33,34,35,36,  
37,44,46,47,59,60,65,68,69,70,71,72,73,74,75,76,79,80,81,82,86,95,98,99,100  
,101,114,140,141,143,172,173,174,175,176,177,178,179,180,181,187,188,189,19  
0,195,196,197,198,199,201,202,203,204,205,206,207,208,209,210,217,218,219,2  
20,221,225,228,229,230,231,234,235,236,237,238,239,240,241,242,245,246,257,  
261,262,263,264,286,287,288,289,337,338,339,340,341,342,343  
INPUTGROUP_MOVE  
INPUTGROUP_LOOK  
INPUTGROUP_WHEEL  
INPUTGROUP_CELLPHONE_NAVIGATE  
INPUTGROUP_CELLPHONE_NAVIGATE_UD  
INPUTGROUP_CELLPHONE_NAVIGATE_LR  
INPUTGROUP_FRONTEND_DPAD_ALL  
INPUTGROUP_FRONTEND_DPAD_UD  
INPUTGROUP_FRONTEND_DPAD_LR  
INPUTGROUP_FRONTEND_LSTICK_ALL  
INPUTGROUP_FRONTEND_RSTICK_ALL  
INPUTGROUP_FRONTEND_GENERIC_UD  
INPUTGROUP_FRONTEND_GENERIC_LR  
INPUTGROUP_FRONTEND_GENERIC_ALL  
INPUTGROUP_FRONTEND_BUMPERS  
INPUTGROUP_FRONTEND_TRIGGERS  
INPUTGROUP_FRONTEND_STICKS  
INPUTGROUP_SCRIPT_DPAD_ALL  
INPUTGROUP_SCRIPT_DPAD_UD  
INPUTGROUP_SCRIPT_DPAD_LR  
INPUTGROUP_SCRIPT_LSTICK_ALL  
INPUTGROUP_SCRIPT_RSTICK_ALL  
INPUTGROUP_SCRIPT_BUMPERS  
INPUTGROUP_SCRIPT_TRIGGERS  
INPUTGROUP_WEAPON_WHEEL_CYCLE  
INPUTGROUP_FLY  
INPUTGROUP_SUB  
INPUTGROUP_VEH_MOVE_ALL  
INPUTGROUP_CURSOR  
INPUTGROUP_CURSOR_SCROLL  
INPUTGROUP_SNIPER_ZOOM_SECONDARY  
INPUTGROUP_VEH_HYDRAULICS_CONTROL  
Took those in IDA Pro.Not sure in which order they go  
```

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |
| `enable` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ENABLE_CONTROL_ACTION)

---
## GET_ALLOW_MOVEMENT_WHILE_ZOOMED
**Hash:** `0xFC859E2374407556` | **Returns:** `BOOL`
**Alt name:** `GetAllowMovementWhileZoomed`

```
Returns profile setting 17.
```

[View docs](https://cfxnatives.dev/natives/GET_ALLOW_MOVEMENT_WHILE_ZOOMED)

---
## GET_CONTROL_GROUP_INSTRUCTIONAL_BUTTON
**Hash:** `0x80C2FD58D720C801` | **Returns:** `char*`
**Alt name:** `GetControlGroupInstructionalButton`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `controlGroup` | `int` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GET_CONTROL_GROUP_INSTRUCTIONAL_BUTTON)

---
## GET_CONTROL_INSTRUCTIONAL_BUTTON
**Hash:** `0x0499D7B09FC9B407` | **Returns:** `char*`
**Alt name:** `GetControlInstructionalButton`

```
formerly called _GET_CONTROL_ACTION_NAME incorrectly  
p2 appears to always be true.  
p2 is unused variable in function.  
EG:  
GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 201, 1) /*INPUT_FRONTEND_ACCEPT (e.g. Enter button)*/  
GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 202, 1) /*INPUT_FRONTEND_CANCEL (e.g. ESC button)*/  
GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 51, 1) /*INPUT_CONTEXT (e.g. E button)*/  
gtaforums.com/topic/819070-c-draw-instructional-buttons-scaleform-movie/#entry1068197378  
0, 1 and 2 used in the scripts. 0 is by far the most common of them.  
```

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GET_CONTROL_INSTRUCTIONAL_BUTTON)

---
## GET_CONTROL_NORMAL
**Hash:** `0xEC3C9B8D5327B563` | **Returns:** `float`
**Alt name:** `GetControlNormal`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_CONTROL_NORMAL)

---
## GET_CONTROL_UNBOUND_NORMAL
**Hash:** `0x5B84D09CEC5209C5` | **Returns:** `float`
**Alt name:** `GetControlUnboundNormal`

```
Seems to return values between -1 and 1 for controls like gas and steering.
```

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_CONTROL_UNBOUND_NORMAL)

---
## GET_CONTROL_VALUE
**Hash:** `0xD95E79E8686D2C27` | **Returns:** `int`
**Alt name:** `GetControlValue`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_CONTROL_VALUE)

---
## GET_DISABLED_CONTROL_NORMAL
**Hash:** `0x11E65974A982637C` | **Returns:** `float`
**Alt name:** `GetDisabledControlNormal`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_DISABLED_CONTROL_NORMAL)

---
## GET_DISABLED_CONTROL_UNBOUND_NORMAL
**Hash:** `0x4F8A26A890FD62FB` | **Returns:** `float`
**Alt name:** `GetDisabledControlUnboundNormal`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_DISABLED_CONTROL_UNBOUND_NORMAL)

---
## GET_IS_USING_ALTERNATE_DRIVEBY
**Hash:** `0x0F70731BACCFBB96` | **Returns:** `BOOL`
**Alt name:** `GetIsUsingAlternateDriveby`

```
Returns profile setting 225.
```

[View docs](https://cfxnatives.dev/natives/GET_IS_USING_ALTERNATE_DRIVEBY)

---
## GET_LOCAL_PLAYER_AIM_STATE
**Hash:** `0xBB41AFBBBC0A0287` | **Returns:** `int`
**Alt name:** `GetLocalPlayerAimState`

Returns the local player's targeting mode. See [`SET_PLAYER_TARGETING_MODE`](#\_0xB1906895227793F3).

[View docs](https://cfxnatives.dev/natives/GET_LOCAL_PLAYER_AIM_STATE)

---
## IS_CONTROL_ENABLED
**Hash:** `0x1CEA6BFDF248E5D9` | **Returns:** `BOOL`
**Alt name:** `IsControlEnabled`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_CONTROL_ENABLED)

---
## IS_CONTROL_JUST_PRESSED
**Hash:** `0x580417101DDB492F` | **Returns:** `BOOL`
**Alt name:** `IsControlJustPressed`

Returns whether a control was newly pressed since the last check.

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_CONTROL_JUST_PRESSED)

---
## IS_CONTROL_JUST_RELEASED
**Hash:** `0x50F940259D3841E6` | **Returns:** `BOOL`
**Alt name:** `IsControlJustReleased`

Returns whether a control was newly released since the last check.

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_CONTROL_JUST_RELEASED)

---
## IS_CONTROL_PRESSED
**Hash:** `0xF3A21BCD95725A4A` | **Returns:** `BOOL`
**Alt name:** `IsControlPressed`

Returns whether a control is currently pressed.

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_CONTROL_PRESSED)

---
## IS_CONTROL_RELEASED
**Hash:** `0x648EE3E7F38877DD` | **Returns:** `BOOL`
**Alt name:** `IsControlReleased`

Returns whether a control is currently *not* pressed.

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_CONTROL_RELEASED)

---
## IS_DISABLED_CONTROL_JUST_PRESSED
**Hash:** `0x91AEF906BCA88877` | **Returns:** `BOOL`
**Alt name:** `IsDisabledControlJustPressed`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_DISABLED_CONTROL_JUST_PRESSED)

---
## IS_DISABLED_CONTROL_JUST_RELEASED
**Hash:** `0x305C8DCD79DA8B0F` | **Returns:** `BOOL`
**Alt name:** `IsDisabledControlJustReleased`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_DISABLED_CONTROL_JUST_RELEASED)

---
## IS_DISABLED_CONTROL_PRESSED
**Hash:** `0xE2587F8CBBD87B1D` | **Returns:** `BOOL`
**Alt name:** `IsDisabledControlPressed`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_DISABLED_CONTROL_PRESSED)

---
## IS_LOOK_INVERTED
**Hash:** `0x77B612531280010D` | **Returns:** `BOOL`
**Alt name:** `IsLookInverted`

[View docs](https://cfxnatives.dev/natives/IS_LOOK_INVERTED)

---
## SET_INPUT_EXCLUSIVE
**Hash:** `0xEDE476E5EE29EDB1` | **Returns:** `void`
**Alt name:** `SetInputExclusive`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `control` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_INPUT_EXCLUSIVE)

---
## SET_PAD_SHAKE
**Hash:** `0x48B3886C1358D0D5` | **Returns:** `void`
**Alt name:** `SetPadShake`

```
p0 always seems to be 0  
duration in milliseconds   
frequency should range from about 10 (slow vibration) to 255 (very fast)  
example:  
SET_PAD_SHAKE(0, 100, 200);  
```

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |
| `duration` | `int` |
| `frequency` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PAD_SHAKE)

---
## SET_PLAYERPAD_SHAKES_WHEN_CONTROLLER_DISABLED
**Hash:** `0x798FDEB5B1575088` | **Returns:** `void`
**Alt name:** `SetPlayerpadShakesWhenControllerDisabled`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYERPAD_SHAKES_WHEN_CONTROLLER_DISABLED)

---
## STOP_PAD_SHAKE
**Hash:** `0x38C16A305E8CDC8D` | **Returns:** `void`
**Alt name:** `StopPadShake`

**Parameters:**
| Name | Type |
|------|------|
| `padIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/STOP_PAD_SHAKE)

---

# MOBILE Natives

> 25 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0xA2CCBE62CD4C91A4
**Hash:** `0xA2CCBE62CD4C91A4` | **Returns:** `void`

```
Needs more research. If the "phone_cam12" filter is applied, this function is called with "TRUE"; otherwise, "FALSE".
Example (XBOX 360):
// check current filter selection
if (MISC::ARE_STRINGS_EQUAL(getElem(g_2471024, &l_17, 4), "phone_cam12") != 0)
{
    MOBILE::_0xC273BB4D(0); // FALSE
}
else
{
    MOBILE::_0xC273BB4D(1); // TRUE
}
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `int*` |

[View docs](https://cfxnatives.dev/natives/0xA2CCBE62CD4C91A4)

---
## _0xAC2890471901861C
**Hash:** `0xAC2890471901861C` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0xAC2890471901861C)

---
## _CELL_CAM_MOVE_FINGER
**Hash:** `0x95C9E72F3D7DEC9B` | **Returns:** `void`

Moves the character's finger in a swiping motion when holding a cellphone in their hand through the use of the [CREATE_MOBILE_PHONE](#\_0xA4E8E696C532FBC7) native.

```cpp
enum eCellInput {
    CELL_INPUT_NONE = 0,
    CELL_INPUT_UP = 1,
    CELL_INPUT_DOWN = 2,
    CELL_INPUT_LEFT = 3,
    CELL_INPUT_RIGHT = 4,
    CELL_INPUT_SELECT = 5
}
```

**Parameters:**
| Name | Type |
|------|------|
| `direction` | `int` |

**Example:**
```lua
CreateThread(function()
	local eCellInput = {
		CELL_INPUT_NONE = 0,
		CELL_INPUT_UP = 1,
		CELL_INPUT_DOWN = 2,
		CELL_INPUT_LEFT = 3,
		CELL_INPUT_RIGHT = 4,
		CELL_INPUT_SELECT = 5
	}
	-- Create a mobile phone object and animate the character
	CreateMobilePhone(eCellInput.CELL_INPUT_NONE)

	Wait(2000)

	-- Swipe up
	CellCamMoveFinger(eCellInput.CELL_INPUT_UP)

	Wait(1500)

	-- Swipe right
	CellCamMoveFinger(eCellInput.CELL_INPUT_RIGHT)

	Wait(1500)

	-- Tap the screen
	CellCamMoveFinger(eCellInput.CELL_INPUT_SELECT)
end)
```

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_MOVE_FINGER)

---
## _CELL_CAM_SET_DISTANCE
**Hash:** `0x53F4892D18EC90A4` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_SET_DISTANCE)

---
## _CELL_CAM_SET_HEAD_HEIGHT
**Hash:** `0x466DA42C89865553` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_SET_HEAD_HEIGHT)

---
## _CELL_CAM_SET_HEAD_PITCH
**Hash:** `0xD6ADE981781FCA09` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_SET_HEAD_PITCH)

---
## _CELL_CAM_SET_HEAD_ROLL
**Hash:** `0xF1E22DC13F5EEBAD` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_SET_HEAD_ROLL)

---
## _CELL_CAM_SET_HORIZONTAL_OFFSET
**Hash:** `0x1B0B4AEED5B9B41C` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_SET_HORIZONTAL_OFFSET)

---
## _CELL_CAM_SET_LEAN
**Hash:** `0x44E44169EF70138E` | **Returns:** `void`

```
if the bool "Toggle" is "true" so the phone is lean.  
if the bool "Toggle" is "false" so the phone is not lean.  
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_SET_LEAN)

---
## _CELL_CAM_SET_ROLL
**Hash:** `0x15E69E2802C24B8D` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_SET_ROLL)

---
## _CELL_CAM_SET_VERTICAL_OFFSET
**Hash:** `0x3117D84EFA60F77B` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/_CELL_CAM_SET_VERTICAL_OFFSET)

---
## CAN_PHONE_BE_SEEN_ON_SCREEN
**Hash:** `0xC4E2813898C97A4B` | **Returns:** `BOOL`
**Alt name:** `CanPhoneBeSeenOnScreen`

```
This one is weird and seems to return a TRUE state regardless of whether the phone is visible on screen or tucked away.  
I can confirm the above. This function is hard-coded to always return 1.  
```

[View docs](https://cfxnatives.dev/natives/CAN_PHONE_BE_SEEN_ON_SCREEN)

---
## CELL_CAM_ACTIVATE
**Hash:** `0xFDE8F069C542D126` | **Returns:** `void`
**Alt name:** `CellCamActivate`

Activates the cellphone camera. Make sure you have a mobile phone created with [`CREATE_MOBILE_PHONE`](#\_0xA4E8E696C532FBC7) or else the camera will not work.

**Parameters:**
| Name | Type |
|------|------|
| `active` | `BOOL` |
| `bGoFirstPerson` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CELL_CAM_ACTIVATE)

---
## CELL_CAM_ACTIVATE_SELFIE_MODE
**Hash:** `0x015C49A93E3E086E` | **Returns:** `void`
**Alt name:** `CellCamActivateSelfieMode`

Toggles the selfie mode on the cellphone camera. Only visible when the cell phone camera is active.

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CELL_CAM_ACTIVATE_SELFIE_MODE)

---
## CELL_CAM_IS_CHAR_VISIBLE_NO_FACE_CHECK
**Hash:** `0x439E9BC95B7E7FBE` | **Returns:** `BOOL`
**Alt name:** `CellCamIsCharVisibleNoFaceCheck`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CELL_CAM_IS_CHAR_VISIBLE_NO_FACE_CHECK)

---
## CREATE_MOBILE_PHONE
**Hash:** `0xA4E8E696C532FBC7` | **Returns:** `void`
**Alt name:** `CreateMobilePhone`

```
Creates a mobile phone of the specified type.  
Possible phone types:  
0 - Default phone / Michael's phone  
1 - Trevor's phone  
2 - Franklin's phone  
4 - Prologue phone  
These values represent bit flags, so a value of '3' would toggle Trevor and Franklin's phones together, causing unexpected behavior and most likely crash the game.  
```

**Parameters:**
| Name | Type |
|------|------|
| `phoneType` | `int` |

[View docs](https://cfxnatives.dev/natives/CREATE_MOBILE_PHONE)

---
## DESTROY_MOBILE_PHONE
**Hash:** `0x3BC861DF703E5097` | **Returns:** `void`
**Alt name:** `DestroyMobilePhone`

```
Destroys the currently active mobile phone.  
```

[View docs](https://cfxnatives.dev/natives/DESTROY_MOBILE_PHONE)

---
## GET_MOBILE_PHONE_POSITION
**Hash:** `0x584FDFDA48805B86` | **Returns:** `void`
**Alt name:** `GetMobilePhonePosition`

**Parameters:**
| Name | Type |
|------|------|
| `position` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/GET_MOBILE_PHONE_POSITION)

---
## GET_MOBILE_PHONE_RENDER_ID
**Hash:** `0xB4A53E05F68B6FA1` | **Returns:** `void`
**Alt name:** `GetMobilePhoneRenderId`

**Parameters:**
| Name | Type |
|------|------|
| `renderId` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_MOBILE_PHONE_RENDER_ID)

---
## GET_MOBILE_PHONE_ROTATION
**Hash:** `0x1CEFB61F193070AE` | **Returns:** `void`
**Alt name:** `GetMobilePhoneRotation`

**Parameters:**
| Name | Type |
|------|------|
| `rotation` | `Vector3*` |
| `p1` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_MOBILE_PHONE_ROTATION)

---
## SCRIPT_IS_MOVING_MOBILE_PHONE_OFFSCREEN
**Hash:** `0xF511F759238A5122` | **Returns:** `void`
**Alt name:** `ScriptIsMovingMobilePhoneOffscreen`

```
If bool Toggle = true so the mobile is hide to screen.  
If bool Toggle = false so the mobile is show to screen.  
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SCRIPT_IS_MOVING_MOBILE_PHONE_OFFSCREEN)

---
## SET_MOBILE_PHONE_DOF_STATE
**Hash:** `0x375A706A5C2FD084` | **Returns:** `void`
**Alt name:** `SetMobilePhoneDofState`

Toggles depth of field on the cellphone camera.

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_MOBILE_PHONE_DOF_STATE)

---
## SET_MOBILE_PHONE_POSITION
**Hash:** `0x693A5C6D6734085B` | **Returns:** `void`
**Alt name:** `SetMobilePhonePosition`

**Parameters:**
| Name | Type |
|------|------|
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_MOBILE_PHONE_POSITION)

---
## SET_MOBILE_PHONE_ROTATION
**Hash:** `0xBB779C0CA917E865` | **Returns:** `void`
**Alt name:** `SetMobilePhoneRotation`

```
Last parameter is unknown and always zero.  
```

**Parameters:**
| Name | Type |
|------|------|
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/SET_MOBILE_PHONE_ROTATION)

---
## SET_MOBILE_PHONE_SCALE
**Hash:** `0xCBDD322A73D6D932` | **Returns:** `void`
**Alt name:** `SetMobilePhoneScale`

```
The minimum/default is 500.0f. If you plan to make it bigger set it's position as well. Also this seems to need to be called in a loop as when you close the phone the scale is reset. If not in a loop you'd need to call it everytime before you re-open the phone.  
```

**Parameters:**
| Name | Type |
|------|------|
| `scale` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_MOBILE_PHONE_SCALE)

---

# REPLAY Natives

> 6 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x5AD3932DAEB1E5D3
**Hash:** `0x5AD3932DAEB1E5D3` | **Returns:** `void`

```
Disables some other rendering (internal)  
```

[View docs](https://cfxnatives.dev/natives/0x5AD3932DAEB1E5D3)

---
## _0x7E2BD3EF6C205F09
**Hash:** `0x7E2BD3EF6C205F09` | **Returns:** `void`

**This native does absolutely nothing, just a nullsub**

```
Something to do with phone cameras.  
startup.c4:  
void sub_2a3d() {  
    UNK2::_7E2BD3EF6C205F09("No_Filter", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam1", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam2", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam3", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam4", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam5", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam6", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam7", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam9", 1);  
    UNK2::_7E2BD3EF6C205F09("phone_cam12", 0);  
}  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `char*` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x7E2BD3EF6C205F09)

---
## _0xE058175F8EAFE79A
**Hash:** `0xE058175F8EAFE79A` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xE058175F8EAFE79A)

---
## _ACTIVATE_ROCKSTAR_EDITOR
**Hash:** `0x49DA8145672B2725` | **Returns:** `void`

Please note that you will need to call DO_SCREEN_FADE_IN after exiting the Rockstar Editor when you call this.

```
NativeDB Added Parameter 1: int p0
```

[View docs](https://cfxnatives.dev/natives/_ACTIVATE_ROCKSTAR_EDITOR)

---
## _IS_INTERIOR_RENDERING_DISABLED
**Hash:** `0x95AB8B5C992C7B58` | **Returns:** `BOOL`

```
Returns a bool if interior rendering is disabled, if yes, all "normal" rendered interiors are invisible  
```

[View docs](https://cfxnatives.dev/natives/_IS_INTERIOR_RENDERING_DISABLED)

---
## _RESET_EDITOR_VALUES
**Hash:** `0x3353D13F09307691` | **Returns:** `void`

```
Sets (almost, not sure) all Rockstar Editor values (bIsRecording etc) to 0.  
```

[View docs](https://cfxnatives.dev/natives/_RESET_EDITOR_VALUES)

---

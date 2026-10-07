# DECORATOR Natives

> 12 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## DECOR_EXIST_ON
**Hash:** `0x05661B80A8C9165F` | **Returns:** `BOOL`
**Alt name:** `DecorExistOn`

```
Returns whether or not the specified property is set for the entity.  
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |

[View docs](https://cfxnatives.dev/natives/DECOR_EXIST_ON)

---
## DECOR_GET_BOOL
**Hash:** `0xDACE671663F2F5DB` | **Returns:** `BOOL`
**Alt name:** `DecorGetBool`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |

[View docs](https://cfxnatives.dev/natives/DECOR_GET_BOOL)

---
## DECOR_GET_FLOAT
**Hash:** `0x6524A2F114706F43` | **Returns:** `float`
**Alt name:** `DecorGetFloat`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |

[View docs](https://cfxnatives.dev/natives/DECOR_GET_FLOAT)

---
## DECOR_GET_INT
**Hash:** `0xA06C969B02A97298` | **Returns:** `int`
**Alt name:** `DecorGetInt`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |

[View docs](https://cfxnatives.dev/natives/DECOR_GET_INT)

---
## DECOR_IS_REGISTERED_AS_TYPE
**Hash:** `0x4F14F9F870D6FBC8` | **Returns:** `BOOL`
**Alt name:** `DecorIsRegisteredAsType`

**Parameters:**
| Name | Type |
|------|------|
| `propertyName` | `char*` |
| `type` | `int` |

[View docs](https://cfxnatives.dev/natives/DECOR_IS_REGISTERED_AS_TYPE)

---
## DECOR_REGISTER
**Hash:** `0x9FD90732F56403CE` | **Returns:** `void`
**Alt name:** `DecorRegister`

```cpp
enum eDecorType
{
    DECOR_TYPE_FLOAT = 1,
    DECOR_TYPE_BOOL = 2,
    DECOR_TYPE_INT = 3,
    DECOR_TYPE_STRING = 4,
    DECOR_TYPE_TIME = 5
};
```

**Parameters:**
| Name | Type |
|------|------|
| `propertyName` | `char*` |
| `type` | `int` |

[View docs](https://cfxnatives.dev/natives/DECOR_REGISTER)

---
## DECOR_REGISTER_LOCK
**Hash:** `0xA9D14EEA259F9248` | **Returns:** `void`
**Alt name:** `DecorRegisterLock`

```
Called after all decorator type initializations.  
```

[View docs](https://cfxnatives.dev/natives/DECOR_REGISTER_LOCK)

---
## DECOR_REMOVE
**Hash:** `0x00EE9F297C738720` | **Returns:** `BOOL`
**Alt name:** `DecorRemove`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |

[View docs](https://cfxnatives.dev/natives/DECOR_REMOVE)

---
## DECOR_SET_BOOL
**Hash:** `0x6B1E8E2ED1335B71` | **Returns:** `BOOL`
**Alt name:** `DecorSetBool`

```
This function sets metadata of type bool to specified entity.  
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |
| `value` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DECOR_SET_BOOL)

---
## DECOR_SET_FLOAT
**Hash:** `0x211AB1DD8D0F363A` | **Returns:** `BOOL`
**Alt name:** `DecorSetFloat`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/DECOR_SET_FLOAT)

---
## DECOR_SET_INT
**Hash:** `0x0CE3AA5E1CA19E10` | **Returns:** `BOOL`
**Alt name:** `DecorSetInt`

```
Sets property to int.  
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/DECOR_SET_INT)

---
## DECOR_SET_TIME
**Hash:** `0x95AED7B8E39ECAA4` | **Returns:** `BOOL`
**Alt name:** `DecorSetTime`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `propertyName` | `char*` |
| `timestamp` | `int` |

[View docs](https://cfxnatives.dev/natives/DECOR_SET_TIME)

---

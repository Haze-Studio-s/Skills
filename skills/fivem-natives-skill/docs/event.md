# EVENT Natives

> 13 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## ADD_SHOCKING_EVENT_AT_POSITION
**Hash:** `0xD9F8455409B525E9` | **Returns:** `ScrHandle`
**Alt name:** `AddShockingEventAtPosition`

```
eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `eventType` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `duration` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_SHOCKING_EVENT_AT_POSITION)

---
## ADD_SHOCKING_EVENT_FOR_ENTITY
**Hash:** `0x7FD8F3BE76F89422` | **Returns:** `ScrHandle`
**Alt name:** `AddShockingEventForEntity`

```
eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `eventType` | `int` |
| `entity` | `Entity` |
| `duration` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_SHOCKING_EVENT_FOR_ENTITY)

---
## BLOCK_DECISION_MAKER_EVENT
**Hash:** `0xE42FCDFD0E4196F7` | **Returns:** `void`
**Alt name:** `BlockDecisionMakerEvent`

```
eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
This is limited to 4 blocked events at a time.
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `Hash` |
| `eventType` | `int` |

[View docs](https://cfxnatives.dev/natives/BLOCK_DECISION_MAKER_EVENT)

---
## CLEAR_DECISION_MAKER_EVENT_RESPONSE
**Hash:** `0x4FC9381A7AEE8968` | **Returns:** `void`
**Alt name:** `ClearDecisionMakerEventResponse`

```
eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `Hash` |
| `eventType` | `int` |

[View docs](https://cfxnatives.dev/natives/CLEAR_DECISION_MAKER_EVENT_RESPONSE)

---
## IS_SHOCKING_EVENT_IN_SPHERE
**Hash:** `0x1374ABB7C15BAB92` | **Returns:** `BOOL`
**Alt name:** `IsShockingEventInSphere`

```
eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `eventType` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/IS_SHOCKING_EVENT_IN_SPHERE)

---
## REMOVE_ALL_SHOCKING_EVENTS
**Hash:** `0xEAABE8FDFA21274C` | **Returns:** `void`
**Alt name:** `RemoveAllShockingEvents`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/REMOVE_ALL_SHOCKING_EVENTS)

---
## REMOVE_SHOCKING_EVENT
**Hash:** `0x2CDA538C44C6CCE5` | **Returns:** `BOOL`
**Alt name:** `RemoveShockingEvent`

**Parameters:**
| Name | Type |
|------|------|
| `event` | `ScrHandle` |

[View docs](https://cfxnatives.dev/natives/REMOVE_SHOCKING_EVENT)

---
## REMOVE_SHOCKING_EVENT_SPAWN_BLOCKING_AREAS
**Hash:** `0x340F1415B68AEADE` | **Returns:** `void`
**Alt name:** `RemoveShockingEventSpawnBlockingAreas`

[View docs](https://cfxnatives.dev/natives/REMOVE_SHOCKING_EVENT_SPAWN_BLOCKING_AREAS)

---
## SET_DECISION_MAKER
**Hash:** `0xB604A2942ADED0EE` | **Returns:** `void`
**Alt name:** `SetDecisionMaker`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `name` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_DECISION_MAKER)

---
## SUPPRESS_AGITATION_EVENTS_NEXT_FRAME
**Hash:** `0x5F3B7749C112D552` | **Returns:** `void`
**Alt name:** `SuppressAgitationEventsNextFrame`

[View docs](https://cfxnatives.dev/natives/SUPPRESS_AGITATION_EVENTS_NEXT_FRAME)

---
## SUPPRESS_SHOCKING_EVENT_TYPE_NEXT_FRAME
**Hash:** `0x3FD2EC8BF1F1CF30` | **Returns:** `void`
**Alt name:** `SuppressShockingEventTypeNextFrame`

```
eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `eventType` | `int` |

[View docs](https://cfxnatives.dev/natives/SUPPRESS_SHOCKING_EVENT_TYPE_NEXT_FRAME)

---
## SUPPRESS_SHOCKING_EVENTS_NEXT_FRAME
**Hash:** `0x2F9A292AD0A3BD89` | **Returns:** `void`
**Alt name:** `SuppressShockingEventsNextFrame`

[View docs](https://cfxnatives.dev/natives/SUPPRESS_SHOCKING_EVENTS_NEXT_FRAME)

---
## UNBLOCK_DECISION_MAKER_EVENT
**Hash:** `0xD7CD9CF34F2C99E8` | **Returns:** `void`
**Alt name:** `UnblockDecisionMakerEvent`

```
eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `Hash` |
| `eventType` | `int` |

[View docs](https://cfxnatives.dev/natives/UNBLOCK_DECISION_MAKER_EVENT)

---

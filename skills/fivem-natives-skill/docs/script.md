# SCRIPT Natives

> 37 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x0F6F1EBBC4E1D5E6
**Hash:** `0x0F6F1EBBC4E1D5E6` | **Returns:** `BOOL`

```
BG_*

NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `scriptIndex` | `int` |
| `p1` | `char*` |

[View docs](https://cfxnatives.dev/natives/0x0F6F1EBBC4E1D5E6)

---
## _0x22E21FBCFC88C149
**Hash:** `0x22E21FBCFC88C149` | **Returns:** `int`

```
BG_*

NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `scriptIndex` | `int` |
| `p1` | `char*` |

[View docs](https://cfxnatives.dev/natives/0x22E21FBCFC88C149)

---
## _0x760910B49D2B98EA
**Hash:** `0x760910B49D2B98EA` | **Returns:** `void`

```
Sets bit 1 in GtaThread+0x154

BG_*

NativeDB Introduced: v323
```

[View docs](https://cfxnatives.dev/natives/0x760910B49D2B98EA)

---
## _0x829CD22E043A2577
**Hash:** `0x829CD22E043A2577` | **Returns:** `int`

```
BG_*

NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Hash` |

[View docs](https://cfxnatives.dev/natives/0x829CD22E043A2577)

---
## _0x836B62713E0534CA
**Hash:** `0x836B62713E0534CA` | **Returns:** `BOOL`

```
Returns true if bit 0 in GtaThread+0x154 is set.

BG_*

NativeDB Introduced: v323
```

[View docs](https://cfxnatives.dev/natives/0x836B62713E0534CA)

---
## _GET_NAME_OF_THREAD
**Hash:** `0x05A42BA9FC8DA96B` | **Returns:** `char*`

**Parameters:**
| Name | Type |
|------|------|
| `threadId` | `int` |

[View docs](https://cfxnatives.dev/natives/_GET_NAME_OF_THREAD)

---
## _GET_NUMBER_OF_REFERENCES_OF_SCRIPT_WITH_NAME_HASH
**Hash:** `0x2C83A9DA6BFFC4F9` | **Returns:** `int`

```
Gets the number of instances of the specified script is currently running.
Actually returns numRefs - 1.
if (program)
	v3 = rage::scrProgram::GetNumRefs(program) - 1;
return v3;
```

**Parameters:**
| Name | Type |
|------|------|
| `scriptHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_GET_NUMBER_OF_REFERENCES_OF_SCRIPT_WITH_NAME_HASH)

---
## _LOCK_LOADING_SCREEN_BUTTONS
**Hash:** `0xB1577667C3708F9B` | **Returns:** `void`

Updates the display of the MP/SP loading buttons, and locks the state so that other options are not displayed or changed. This can only be done once.

[View docs](https://cfxnatives.dev/natives/_LOCK_LOADING_SCREEN_BUTTONS)

---
## _TRIGGER_SCRIPT_EVENT_2
**Hash:** `0xA40CC53DF8E50837` | **Returns:** `void`

```
See TRIGGER_SCRIPT_EVENT
```

**Parameters:**
| Name | Type |
|------|------|
| `eventGroup` | `int` |
| `eventData` | `int*` |
| `eventDataSize` | `int` |
| `playerBits` | `int` |

[View docs](https://cfxnatives.dev/natives/_TRIGGER_SCRIPT_EVENT_2)

---
## BG_END_CONTEXT
**Hash:** `0xDC2BACD920D0A0DD` | **Returns:** `void`
**Alt name:** `BgEndContext`

```
Deletes the given context from the background scripts context map.

NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `contextName` | `char*` |

[View docs](https://cfxnatives.dev/natives/BG_END_CONTEXT)

---
## BG_END_CONTEXT_HASH
**Hash:** `0x107E5CC7CA942BC1` | **Returns:** `void`
**Alt name:** `BgEndContextHash`

```
Hashed version of 0xDC2BACD920D0A0DD.

NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `contextHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/BG_END_CONTEXT_HASH)

---
## BG_START_CONTEXT
**Hash:** `0x9D5A25BADB742ACD` | **Returns:** `void`
**Alt name:** `BgStartContext`

```
Inserts the given context into the background scripts context map.

NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `contextName` | `char*` |

[View docs](https://cfxnatives.dev/natives/BG_START_CONTEXT)

---
## BG_START_CONTEXT_HASH
**Hash:** `0x75B18E49607874C7` | **Returns:** `void`
**Alt name:** `BgStartContextHash`

```
Hashed version of 0x9D5A25BADB742ACD.

NativeDB Introduced: v323
```

**Parameters:**
| Name | Type |
|------|------|
| `contextHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/BG_START_CONTEXT_HASH)

---
## DOES_SCRIPT_EXIST
**Hash:** `0xFC04745FBE67C19A` | **Returns:** `BOOL`
**Alt name:** `DoesScriptExist`

**Parameters:**
| Name | Type |
|------|------|
| `scriptName` | `char*` |

[View docs](https://cfxnatives.dev/natives/DOES_SCRIPT_EXIST)

---
## DOES_SCRIPT_WITH_NAME_HASH_EXIST
**Hash:** `0xF86AA3C56BA31381` | **Returns:** `BOOL`
**Alt name:** `DoesScriptWithNameHashExist`

**Parameters:**
| Name | Type |
|------|------|
| `scriptHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/DOES_SCRIPT_WITH_NAME_HASH_EXIST)

---
## GET_EVENT_AT_INDEX
**Hash:** `0xD8F66A3A60C62153` | **Returns:** `int`
**Alt name:** `GetEventAtIndex`

```
eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
```

**Parameters:**
| Name | Type |
|------|------|
| `eventGroup` | `int` |
| `eventIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_EVENT_AT_INDEX)

---
## GET_EVENT_DATA
**Hash:** `0x2902843FCD2B2D79` | **Returns:** `BOOL`
**Alt name:** `GetEventData`

```
eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
```

**Parameters:**
| Name | Type |
|------|------|
| `eventGroup` | `int` |
| `eventIndex` | `int` |
| `eventData` | `int*` |
| `eventDataSize` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_EVENT_DATA)

---
## GET_EVENT_EXISTS
**Hash:** `0x936E6168A9BCEDB5` | **Returns:** `BOOL`
**Alt name:** `GetEventExists`

```
eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
```

**Parameters:**
| Name | Type |
|------|------|
| `eventGroup` | `int` |
| `eventIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_EVENT_EXISTS)

---
## GET_HASH_OF_THIS_SCRIPT_NAME
**Hash:** `0x8A1C8B1738FFE87E` | **Returns:** `Hash`
**Alt name:** `GetHashOfThisScriptName`

[View docs](https://cfxnatives.dev/natives/GET_HASH_OF_THIS_SCRIPT_NAME)

---
## GET_ID_OF_THIS_THREAD
**Hash:** `0xC30338E8088E2E21` | **Returns:** `int`
**Alt name:** `GetIdOfThisThread`

[View docs](https://cfxnatives.dev/natives/GET_ID_OF_THIS_THREAD)

---
## GET_NO_LOADING_SCREEN
**Hash:** `0x18C1270EA7F199BC` | **Returns:** `BOOL`
**Alt name:** `GetNoLoadingScreen`

[View docs](https://cfxnatives.dev/natives/GET_NO_LOADING_SCREEN)

---
## GET_NUMBER_OF_EVENTS
**Hash:** `0x5F92A689A06620AA` | **Returns:** `int`
**Alt name:** `GetNumberOfEvents`

```
eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
```

**Parameters:**
| Name | Type |
|------|------|
| `eventGroup` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_NUMBER_OF_EVENTS)

---
## GET_THIS_SCRIPT_NAME
**Hash:** `0x442E0A7EDE4A738A` | **Returns:** `char*`
**Alt name:** `GetThisScriptName`

[View docs](https://cfxnatives.dev/natives/GET_THIS_SCRIPT_NAME)

---
## HAS_SCRIPT_LOADED
**Hash:** `0xE6CC9F3BA0FB9EF1` | **Returns:** `BOOL`
**Alt name:** `HasScriptLoaded`

Returns if a script has been loaded into the game. Used to see if a script was loaded after requesting.

**Parameters:**
| Name | Type |
|------|------|
| `scriptName` | `char*` |

[View docs](https://cfxnatives.dev/natives/HAS_SCRIPT_LOADED)

---
## HAS_SCRIPT_WITH_NAME_HASH_LOADED
**Hash:** `0x5F0F0C783EB16C04` | **Returns:** `BOOL`
**Alt name:** `HasScriptWithNameHashLoaded`

**Parameters:**
| Name | Type |
|------|------|
| `scriptHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/HAS_SCRIPT_WITH_NAME_HASH_LOADED)

---
## IS_THREAD_ACTIVE
**Hash:** `0x46E9AE36D8FA6417` | **Returns:** `BOOL`
**Alt name:** `IsThreadActive`

**Parameters:**
| Name | Type |
|------|------|
| `threadId` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_THREAD_ACTIVE)

---
## REQUEST_SCRIPT
**Hash:** `0x6EB5F71AA68F2E8E` | **Returns:** `void`
**Alt name:** `RequestScript`

**Parameters:**
| Name | Type |
|------|------|
| `scriptName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REQUEST_SCRIPT)

---
## REQUEST_SCRIPT_WITH_NAME_HASH
**Hash:** `0xD62A67D26D9653E6` | **Returns:** `void`
**Alt name:** `RequestScriptWithNameHash`

```
formerly _REQUEST_STREAMED_SCRIPT  
```

**Parameters:**
| Name | Type |
|------|------|
| `scriptHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/REQUEST_SCRIPT_WITH_NAME_HASH)

---
## SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID
**Hash:** `0x30B4FA1C82DD4B9F` | **Returns:** `int`
**Alt name:** `ScriptThreadIteratorGetNextThreadId`

```
If the function returns 0, the end of the iteration has been reached.
```

[View docs](https://cfxnatives.dev/natives/SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID)

---
## SCRIPT_THREAD_ITERATOR_RESET
**Hash:** `0xDADFADA5A20143A8` | **Returns:** `void`
**Alt name:** `ScriptThreadIteratorReset`

Starts a new iteration of the current threads.
Call this first, then SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID (0x30B4FA1C82DD4B9F)

[View docs](https://cfxnatives.dev/natives/SCRIPT_THREAD_ITERATOR_RESET)

---
## SET_NO_LOADING_SCREEN
**Hash:** `0x5262CC1995D07E09` | **Returns:** `void`
**Alt name:** `SetNoLoadingScreen`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_NO_LOADING_SCREEN)

---
## SET_SCRIPT_AS_NO_LONGER_NEEDED
**Hash:** `0xC90D2DCACD56184C` | **Returns:** `void`
**Alt name:** `SetScriptAsNoLongerNeeded`

**Parameters:**
| Name | Type |
|------|------|
| `scriptName` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_SCRIPT_AS_NO_LONGER_NEEDED)

---
## SET_SCRIPT_WITH_NAME_HASH_AS_NO_LONGER_NEEDED
**Hash:** `0xC5BC038960E9DB27` | **Returns:** `void`
**Alt name:** `SetScriptWithNameHashAsNoLongerNeeded`

**Parameters:**
| Name | Type |
|------|------|
| `scriptHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_SCRIPT_WITH_NAME_HASH_AS_NO_LONGER_NEEDED)

---
## SHUTDOWN_LOADING_SCREEN
**Hash:** `0x078EBE9809CCD637` | **Returns:** `void`
**Alt name:** `ShutdownLoadingScreen`

[View docs](https://cfxnatives.dev/natives/SHUTDOWN_LOADING_SCREEN)

---
## TERMINATE_THIS_THREAD
**Hash:** `0x1090044AD1DA76FA` | **Returns:** `void`
**Alt name:** `TerminateThisThread`

[View docs](https://cfxnatives.dev/natives/TERMINATE_THIS_THREAD)

---
## TERMINATE_THREAD
**Hash:** `0xC8B189ED9138BCD4` | **Returns:** `void`
**Alt name:** `TerminateThread`

**Parameters:**
| Name | Type |
|------|------|
| `threadId` | `int` |

[View docs](https://cfxnatives.dev/natives/TERMINATE_THREAD)

---
## TRIGGER_SCRIPT_EVENT
**Hash:** `0x5AE99C571D5BBE5D` | **Returns:** `void`
**Alt name:** `TriggerScriptEvent`

```
eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
playerBits (also known as playersToBroadcastTo) is a bitset that indicates which players this event should be sent to. In order to send the event to specific players only, use (1 << playerIndex). Set all bits if it should be broadcast to all players.
```

**Parameters:**
| Name | Type |
|------|------|
| `eventGroup` | `int` |
| `eventData` | `int*` |
| `eventDataSize` | `int` |
| `playerBits` | `int` |

[View docs](https://cfxnatives.dev/natives/TRIGGER_SCRIPT_EVENT)

---

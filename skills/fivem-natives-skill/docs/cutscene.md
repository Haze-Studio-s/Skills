# CUTSCENE Natives

> 54 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x011883F41211432A
**Hash:** `0x011883F41211432A` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `p6` | `int` |

[View docs](https://cfxnatives.dev/natives/0x011883F41211432A)

---
## _0x06EE9048FD080382
**Hash:** `0x06EE9048FD080382` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x06EE9048FD080382)

---
## _0x20746F7B1032A3C7
**Hash:** `0x20746F7B1032A3C7` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |
| `p1` | `BOOL` |
| `p2` | `BOOL` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x20746F7B1032A3C7)

---
## _0x2F137B508DE238F2
**Hash:** `0x2F137B508DE238F2` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x2F137B508DE238F2)

---
## _0x4CEBC1ED31E8925E
**Hash:** `0x4CEBC1ED31E8925E` | **Returns:** `BOOL`

```
This function is hard-coded to always return 1.  
```

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneName` | `char*` |

[View docs](https://cfxnatives.dev/natives/0x4CEBC1ED31E8925E)

---
## _0x4FCD976DA686580C
**Hash:** `0x4FCD976DA686580C` | **Returns:** `Any`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x4FCD976DA686580C)

---
## _0x583DF8E3D4AFBD98
**Hash:** `0x583DF8E3D4AFBD98` | **Returns:** `int`

[View docs](https://cfxnatives.dev/natives/0x583DF8E3D4AFBD98)

---
## _0x5EDEF0CF8C1DAB3C
**Hash:** `0x5EDEF0CF8C1DAB3C` | **Returns:** `BOOL`

[View docs](https://cfxnatives.dev/natives/0x5EDEF0CF8C1DAB3C)

---
## _0x7F96F23FA9B73327
**Hash:** `0x7F96F23FA9B73327` | **Returns:** `void`

```
SET_VEHICLE_*
```

**Parameters:**
| Name | Type |
|------|------|
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/0x7F96F23FA9B73327)

---
## _0x8D9DF6ECA8768583
**Hash:** `0x8D9DF6ECA8768583` | **Returns:** `void`

```
SET_SCRIPT_*
Sets the cutscene's owning thread ID.
```

**Parameters:**
| Name | Type |
|------|------|
| `threadId` | `int` |

[View docs](https://cfxnatives.dev/natives/0x8D9DF6ECA8768583)

---
## _0xA0FE76168A189DDB
**Hash:** `0xA0FE76168A189DDB` | **Returns:** `int`

[View docs](https://cfxnatives.dev/natives/0xA0FE76168A189DDB)

---
## _0xC61B86C9F61EB404
**Hash:** `0xC61B86C9F61EB404` | **Returns:** `void`

```
Toggles a value (bool) for cutscenes.
SET_*
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xC61B86C9F61EB404)

---
## _0xE36A98D8AB3D3C66
**Hash:** `0xE36A98D8AB3D3C66` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xE36A98D8AB3D3C66)

---
## _GET_CUT_FILE_NUM_SECTIONS
**Hash:** `0x0ABC54DE641DC0FC` | **Returns:** `int`

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneName` | `char*` |

[View docs](https://cfxnatives.dev/natives/_GET_CUT_FILE_NUM_SECTIONS)

---
## _GET_CUTSCENE_END_TIME
**Hash:** `0x011883f41211432a` | **Returns:** `int`

Returns the time of the cutscene's end accounting for [`REQUEST_CUTSCENE_WITH_PLAYBACK_LIST`](#\_0xC23DE0E91C30B58C)

If a cutscene is laid out with 10 second sections, and section 0 and 1 are enabled then it would be 20000ms.

```
NativeDB Introduced: v1734
```

[View docs](https://cfxnatives.dev/natives/_GET_CUTSCENE_END_TIME)

---
## CAN_REQUEST_ASSETS_FOR_CUTSCENE_ENTITY
**Hash:** `0xB56BBBCC2955D9CB` | **Returns:** `BOOL`
**Alt name:** `CanRequestAssetsForCutsceneEntity`

Returns when it is safe to start applying changes to cutscene entities.

Should always be used for applying components.

See [`SET_CUTSCENE_PED_COMPONENT_VARIATION_FROM_PED`](#\_0x2A56C06EBEF2B0D9) and [`REGISTER_ENTITY_FOR_CUTSCENE`](#\_0xE40C1C56DF95C2E8) for an example.

This will be true before the cutscene is considered loaded

[View docs](https://cfxnatives.dev/natives/CAN_REQUEST_ASSETS_FOR_CUTSCENE_ENTITY)

---
## CAN_SET_ENTER_STATE_FOR_REGISTERED_ENTITY
**Hash:** `0x645D0B458D8E17B5` | **Returns:** `BOOL`
**Alt name:** `CanSetEnterStateForRegisteredEntity`

```
modelHash (p1) was always 0 in R* scripts  
```

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CAN_SET_ENTER_STATE_FOR_REGISTERED_ENTITY)

---
## CAN_SET_EXIT_STATE_FOR_CAMERA
**Hash:** `0xB2CBCD0930DFB420` | **Returns:** `BOOL`
**Alt name:** `CanSetExitStateForCamera`

Whether or not it is safe to run functions on the camera,
as the camera is now no longer being used by the cutscene.

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CAN_SET_EXIT_STATE_FOR_CAMERA)

---
## CAN_SET_EXIT_STATE_FOR_REGISTERED_ENTITY
**Hash:** `0x4C6A6451C79E4662` | **Returns:** `BOOL`
**Alt name:** `CanSetExitStateForRegisteredEntity`

Returns if the script can begin interacting with the registered entity. Primarly used for lead-outs of cutscenes.
Returns on frame after cutscene ends, so you cannot get is while using IsCutsceneActive()

Whether it is safe to start doing scripted actions on the entity, like simulating walking out of a cutscene.

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CAN_SET_EXIT_STATE_FOR_REGISTERED_ENTITY)

---
## DOES_CUTSCENE_ENTITY_EXIST
**Hash:** `0x499EF20C5DB25C59` | **Returns:** `BOOL`
**Alt name:** `DoesCutsceneEntityExist`

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/DOES_CUTSCENE_ENTITY_EXIST)

---
## GET_CUTSCENE_PLAY_TIME
**Hash:** `0x710286BC5EF4D6E1` | **Returns:** `int`
**Alt name:** `GetCutscenePlayTime`

Gets the current time of the cutscene.

```
NativeDB Introduced: v3258
```

[View docs](https://cfxnatives.dev/natives/GET_CUTSCENE_PLAY_TIME)

---
## GET_CUTSCENE_SECTION_PLAYING
**Hash:** `0x49010A6A396553D8` | **Returns:** `int`
**Alt name:** `GetCutsceneSectionPlaying`

[View docs](https://cfxnatives.dev/natives/GET_CUTSCENE_SECTION_PLAYING)

---
## GET_CUTSCENE_TIME
**Hash:** `0xE625BEABBAFFDAB9` | **Returns:** `int`
**Alt name:** `GetCutsceneTime`

Gets the elapsed time of the current cutscene in

[View docs](https://cfxnatives.dev/natives/GET_CUTSCENE_TIME)

---
## GET_CUTSCENE_TOTAL_DURATION
**Hash:** `0xEE53B14A19E480D4` | **Returns:** `int`
**Alt name:** `GetCutsceneTotalDuration`

Gets the total length of the cutscene irrespective of playback list in milliseconds
To account for sections, see [`_GET_CUTSCENE_END_TIME`](#\_0x971D7B15BCDBEF99)

[View docs](https://cfxnatives.dev/natives/GET_CUTSCENE_TOTAL_DURATION)

---
## GET_ENTITY_INDEX_OF_CUTSCENE_ENTITY
**Hash:** `0x0A2E9FDB9A8C62F6` | **Returns:** `Entity`
**Alt name:** `GetEntityIndexOfCutsceneEntity`

Returns the handle of a cutscene entity, can be ped

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_INDEX_OF_CUTSCENE_ENTITY)

---
## GET_ENTITY_INDEX_OF_REGISTERED_ENTITY
**Hash:** `0xC0741A26499654CD` | **Returns:** `Entity`
**Alt name:** `GetEntityIndexOfRegisteredEntity`

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_INDEX_OF_REGISTERED_ENTITY)

---
## HAS_CUT_FILE_LOADED
**Hash:** `0xA1C996C2A744262E` | **Returns:** `BOOL`
**Alt name:** `HasCutFileLoaded`

```
Simply checks if the cutscene has loaded and doesn't check via CutSceneManager as opposed to HAS_[THIS]_CUTSCENE_LOADED.
```

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneName` | `char*` |

[View docs](https://cfxnatives.dev/natives/HAS_CUT_FILE_LOADED)

---
## HAS_CUTSCENE_CUT_THIS_FRAME
**Hash:** `0x708BDD8CD795B043` | **Returns:** `BOOL`
**Alt name:** `HasCutsceneCutThisFrame`

[View docs](https://cfxnatives.dev/natives/HAS_CUTSCENE_CUT_THIS_FRAME)

---
## HAS_CUTSCENE_FINISHED
**Hash:** `0x7C0A893088881D57` | **Returns:** `BOOL`
**Alt name:** `HasCutsceneFinished`

[View docs](https://cfxnatives.dev/natives/HAS_CUTSCENE_FINISHED)

---
## HAS_CUTSCENE_LOADED
**Hash:** `0xC59F528E9AB9F339` | **Returns:** `BOOL`
**Alt name:** `HasCutsceneLoaded`

[View docs](https://cfxnatives.dev/natives/HAS_CUTSCENE_LOADED)

---
## HAS_THIS_CUTSCENE_LOADED
**Hash:** `0x228D3D94F8A11C3C` | **Returns:** `BOOL`
**Alt name:** `HasThisCutsceneLoaded`

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneName` | `char*` |

[View docs](https://cfxnatives.dev/natives/HAS_THIS_CUTSCENE_LOADED)

---
## IS_CUTSCENE_ACTIVE
**Hash:** `0x991251AFC3981F84` | **Returns:** `BOOL`
**Alt name:** `IsCutsceneActive`

[View docs](https://cfxnatives.dev/natives/IS_CUTSCENE_ACTIVE)

---
## IS_CUTSCENE_PLAYBACK_FLAG_SET
**Hash:** `0x71B74D2AE19338D0` | **Returns:** `BOOL`
**Alt name:** `IsCutscenePlaybackFlagSet`

**Parameters:**
| Name | Type |
|------|------|
| `flag` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_CUTSCENE_PLAYBACK_FLAG_SET)

---
## IS_CUTSCENE_PLAYING
**Hash:** `0xD3C2E180A40F031E` | **Returns:** `BOOL`
**Alt name:** `IsCutscenePlaying`

[View docs](https://cfxnatives.dev/natives/IS_CUTSCENE_PLAYING)

---
## REGISTER_ENTITY_FOR_CUTSCENE
**Hash:** `0xE40C1C56DF95C2E8` | **Returns:** `void`
**Alt name:** `RegisterEntityForCutscene`

This can only be run once [`CAN_REQUEST_ASSETS_FOR_CUTSCENE_ENTITY`](#\_0xB56BBBCC2955D9CB) is true, but can be run before [`HAS_CUTSCENE_LOADED`](#\_0xC59F528E9AB9F339)

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntity` | `Entity` |
| `cutsceneEntName` | `char*` |
| `p2` | `int` |
| `modelHash` | `Hash` |
| `p4` | `int` |

**Example:**
```lua
-- An example that allows for registering non player_zero peds in place, i.e MP peds.
    RequestCutscene("family_5_mcs_5_p5", 8)
    repeat Wait(0) until CanRequestAssetsForCutsceneEntity()
    SetCutscenePedComponentVariationFromPed("Michael", PlayerPedId(), 0)
    -- Registering can occur at any point past here before starting the cutscene.
    RegisterEntityForCutscene(PlayerPedId(), "Michael", 0, 0, 64)
    repeat Wait(0) until HasCutsceneLoaded()
    StartCutscene(0)
```

[View docs](https://cfxnatives.dev/natives/REGISTER_ENTITY_FOR_CUTSCENE)

---
## REGISTER_SYNCHRONISED_SCRIPT_SPEECH
**Hash:** `0x2131046957F31B04` | **Returns:** `void`
**Alt name:** `RegisterSynchronisedScriptSpeech`

Only used twice in armenian1.c

[View docs](https://cfxnatives.dev/natives/REGISTER_SYNCHRONISED_SCRIPT_SPEECH)

---
## REMOVE_CUT_FILE
**Hash:** `0xD00D76A7DFC9D852` | **Returns:** `void`
**Alt name:** `RemoveCutFile`

```
Simply unloads the cutscene and doesn't do extra stuff that REMOVE_CUTSCENE does.
```

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REMOVE_CUT_FILE)

---
## REMOVE_CUTSCENE
**Hash:** `0x440AF51A3462B86F` | **Returns:** `void`
**Alt name:** `RemoveCutscene`

[View docs](https://cfxnatives.dev/natives/REMOVE_CUTSCENE)

---
## REQUEST_CUT_FILE
**Hash:** `0x06A3524161C502BA` | **Returns:** `void`
**Alt name:** `RequestCutFile`

```
Simply loads the cutscene and doesn't do extra stuff that REQUEST_CUTSCENE does.
```

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneName` | `char*` |

[View docs](https://cfxnatives.dev/natives/REQUEST_CUT_FILE)

---
## REQUEST_CUTSCENE
**Hash:** `0x7A86743F475D9E09` | **Returns:** `void`
**Alt name:** `RequestCutscene`

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneName` | `char*` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/REQUEST_CUTSCENE)

---
## REQUEST_CUTSCENE_WITH_PLAYBACK_LIST
**Hash:** `0xC23DE0E91C30B58C` | **Returns:** `void`
**Alt name:** `RequestCutsceneWithPlaybackList`

```
playbackFlags: Which scenes should be played.
Example: 0x105 (bit 0, 2 and 8 set) will enable scene 1, 3 and 9.
```

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneName` | `char*` |
| `playbackFlags` | `int` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/REQUEST_CUTSCENE_WITH_PLAYBACK_LIST)

---
## SET_CUTSCENE_CAN_BE_SKIPPED
**Hash:** `0x41FAA8FB2ECE8720` | **Returns:** `void`
**Alt name:** `SetCutsceneCanBeSkipped`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_CUTSCENE_CAN_BE_SKIPPED)

---
## SET_CUTSCENE_ENTITY_STREAMING_FLAGS
**Hash:** `0x4C61C75BEE8184C2` | **Returns:** `void`
**Alt name:** `SetCutsceneEntityStreamingFlags`

Only used in networked environment with MP cutscenes

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `p1` | `int` |
| `p2` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_CUTSCENE_ENTITY_STREAMING_FLAGS)

---
## SET_CUTSCENE_FADE_VALUES
**Hash:** `0x8093F23ABACCC7D4` | **Returns:** `void`
**Alt name:** `SetCutsceneFadeValues`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |
| `p1` | `BOOL` |
| `p2` | `BOOL` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_CUTSCENE_FADE_VALUES)

---
## SET_CUTSCENE_ORIGIN
**Hash:** `0xB812B3FD1C01CF27` | **Returns:** `void`
**Alt name:** `SetCutsceneOrigin`

Sets cutscene location, used for multiplayer apartments/businesses.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `p4` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_CUTSCENE_ORIGIN)

---
## SET_CUTSCENE_PED_COMPONENT_VARIATION
**Hash:** `0xBA01E7B6DEEFBBC9` | **Returns:** `void`
**Alt name:** `SetCutscenePedComponentVariation`

See [`SET_PED_COMPONENT_VARIATION`](#\_0x262B14F48D29DE80)

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `componentId` | `int` |
| `drawableId` | `int` |
| `textureId` | `int` |
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_CUTSCENE_PED_COMPONENT_VARIATION)

---
## SET_CUTSCENE_PED_COMPONENT_VARIATION_FROM_PED
**Hash:** `0x2A56C06EBEF2B0D9` | **Returns:** `void`
**Alt name:** `SetCutscenePedComponentVariationFromPed`

Sets the components for a cutscene ped, this will take precendence over the cutscene's component overrides. This does not require the entity be registered.

See

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `ped` | `Ped` |
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_CUTSCENE_PED_COMPONENT_VARIATION_FROM_PED)

---
## SET_CUTSCENE_PED_PROP_VARIATION
**Hash:** `0x0546524ADE2E9723` | **Returns:** `void`
**Alt name:** `SetCutscenePedPropVariation`

See [`SET_PED_PROP_INDEX`](#\_0x93376B65A266EB5F)

**Parameters:**
| Name | Type |
|------|------|
| `cutsceneEntName` | `char*` |
| `componentId` | `int` |
| `drawableId` | `int` |
| `textureId` | `int` |
| `modelHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_CUTSCENE_PED_PROP_VARIATION)

---
## SET_CUTSCENE_TRIGGER_AREA
**Hash:** `0x9896CE4721BE84BA` | **Returns:** `void`
**Alt name:** `SetCutsceneTriggerArea`

```
Only used twice in R* scripts  
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

[View docs](https://cfxnatives.dev/natives/SET_CUTSCENE_TRIGGER_AREA)

---
## START_CUTSCENE
**Hash:** `0x186D5CB5E7B0FF7B` | **Returns:** `void`
**Alt name:** `StartCutscene`

```
flags: Usually 0.
```

**Parameters:**
| Name | Type |
|------|------|
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/START_CUTSCENE)

---
## START_CUTSCENE_AT_COORDS
**Hash:** `0x1C9ADDA3244A1FBF` | **Returns:** `void`
**Alt name:** `StartCutsceneAtCoords`

Similar to [`SET_CUTSCENE_ORIGIN`](#\_0xB812B3FD1C01CF27) but without heading and doesn't need [`START_CUTSCENE`](#\_0x186D5CB5E7B0FF7B)

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/START_CUTSCENE_AT_COORDS)

---
## STOP_CUTSCENE
**Hash:** `0xC7272775B4DC786E` | **Returns:** `void`
**Alt name:** `StopCutscene`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/STOP_CUTSCENE)

---
## STOP_CUTSCENE_IMMEDIATELY
**Hash:** `0xD220BDD222AC4A1E` | **Returns:** `void`
**Alt name:** `StopCutsceneImmediately`

Stop cutscene instantly, will dump registered entities right where they were when ran.

[View docs](https://cfxnatives.dev/natives/STOP_CUTSCENE_IMMEDIATELY)

---
## WAS_CUTSCENE_SKIPPED
**Hash:** `0x40C8656EDAEDD569` | **Returns:** `BOOL`
**Alt name:** `WasCutsceneSkipped`

[View docs](https://cfxnatives.dev/natives/WAS_CUTSCENE_SKIPPED)

---

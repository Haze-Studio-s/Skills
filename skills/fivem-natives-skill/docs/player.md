# PLAYER Natives

> 248 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x0032A6DBA562C518
**Hash:** `0x0032A6DBA562C518` | **Returns:** `void`

```
2 matches in 1 script - am_hold_up
Used in multiplayer scripts?
```

[View docs](https://cfxnatives.dev/natives/0x0032A6DBA562C518)

---
## _0x237440E46D918649
**Hash:** `0x237440E46D918649` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x237440E46D918649)

---
## _0x2382AB11450AE7BA
**Hash:** `0x2382AB11450AE7BA` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x2382AB11450AE7BA)

---
## _0x2F41A3BAE005E5FA
**Hash:** `0x2F41A3BAE005E5FA` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x2F41A3BAE005E5FA)

---
## _0x2F7CEB6520288061
**Hash:** `0x2F7CEB6520288061` | **Returns:** `void`

```
Used with radios:
void sub_cf383(auto _a0) {
    if ((a_0)==1) {
        if (MISC::IS_BIT_SET((g_240005._f1), 3)) {
            PLAYER::_2F7CEB6520288061(0);
            AUDIO::SET_AUDIO_FLAG("AllowRadioDuringSwitch", 0);
            AUDIO::SET_MOBILE_PHONE_RADIO_STATE(0);
            AUDIO::SET_AUDIO_FLAG("MobileRadioInGame", 0);
        }
        sub_cf3f6(1);
    } else {
        if (MISC::IS_BIT_SET((g_240005._f1), 3)) {
            PLAYER::_2F7CEB6520288061(1);
            AUDIO::SET_AUDIO_FLAG("AllowRadioDuringSwitch", 1);
            AUDIO::SET_MOBILE_PHONE_RADIO_STATE(1);
            AUDIO::SET_AUDIO_FLAG("MobileRadioInGame", 1);
        }
        sub_cf3f6(0);
    }
}
SET_PLAYER_S*
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x2F7CEB6520288061)

---
## _0x31E90B8873A4CD3B
**Hash:** `0x31E90B8873A4CD3B` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `float` |

[View docs](https://cfxnatives.dev/natives/0x31E90B8873A4CD3B)

---
## _0x36F1B38855F2A8DF
**Hash:** `0x36F1B38855F2A8DF` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0x36F1B38855F2A8DF)

---
## _0x4669B3ED80F24B4E
**Hash:** `0x4669B3ED80F24B4E` | **Returns:** `void`

```
This has been found in use in the decompiled files.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0x4669B3ED80F24B4E)

---
## _0x5501B7A5CDB79D37
**Hash:** `0x5501B7A5CDB79D37` | **Returns:** `void`

```
Name between DISABLE_ALL_CONTROL_ACTIONS and DISABLE_CONTROL_ACTION
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0x5501B7A5CDB79D37)

---
## _0x55FCC0C390620314
**Hash:** `0x55FCC0C390620314` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player1` | `Player` |
| `player2` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x55FCC0C390620314)

---
## _0x690A61A6D13583F6
**Hash:** `0x690A61A6D13583F6` | **Returns:** `BOOL`

```
IS_*
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0x690A61A6D13583F6)

---
## _0x6E4361FF3E8CD7CA
**Hash:** `0x6E4361FF3E8CD7CA` | **Returns:** `Any`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x6E4361FF3E8CD7CA)

---
## _0x70A382ADEC069DD3
**Hash:** `0x70A382ADEC069DD3` | **Returns:** `void`

```
NativeDB Introduced: v1604
```

**Parameters:**
| Name | Type |
|------|------|
| `coordX` | `float` |
| `coordY` | `float` |
| `coordZ` | `float` |

[View docs](https://cfxnatives.dev/natives/0x70A382ADEC069DD3)

---
## _0x7148E0F43D11F0D9
**Hash:** `0x7148E0F43D11F0D9` | **Returns:** `void`

```
NativeDB Introduced: v1604
```

[View docs](https://cfxnatives.dev/natives/0x7148E0F43D11F0D9)

---
## _0x7BAE68775557AE0B
**Hash:** `0x7BAE68775557AE0B` | **Returns:** `void`

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

[View docs](https://cfxnatives.dev/natives/0x7BAE68775557AE0B)

---
## _0x7E07C78925D5FD96
**Hash:** `0x7E07C78925D5FD96` | **Returns:** `Any`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x7E07C78925D5FD96)

---
## _0x823EC8E82BA45986
**Hash:** `0x823EC8E82BA45986` | **Returns:** `void`

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x823EC8E82BA45986)

---
## _0x8D768602ADEF2245
**Hash:** `0x8D768602ADEF2245` | **Returns:** `void`

```
SET_PLAYER_MAX_*
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `float` |

[View docs](https://cfxnatives.dev/natives/0x8D768602ADEF2245)

---
## _0x9097EB6D4BB9A12A
**Hash:** `0x9097EB6D4BB9A12A` | **Returns:** `void`

ADD_\*

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/0x9097EB6D4BB9A12A)

---
## _0x9EDD76E87D5D51BA
**Hash:** `0x9EDD76E87D5D51BA` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0x9EDD76E87D5D51BA)

---
## _0x9F260BFB59ADBCA3
**Hash:** `0x9F260BFB59ADBCA3` | **Returns:** `void`

REMOVE_\*

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/0x9F260BFB59ADBCA3)

---
## _0xAD73CE5A09E42D12
**Hash:** `0xAD73CE5A09E42D12` | **Returns:** `void`

```
This has been found in use in the decompiled files.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0xAD73CE5A09E42D12)

---
## _0xB45EFF719D8427A6
**Hash:** `0xB45EFF719D8427A6` | **Returns:** `void`

```
PLAYER::0xBF6993C7(rPtr((&l_122) + 71)); // Found in decompilation
***
In "am_hold_up.ysc" used once:
l_8d._f47 = MISC::GET_RANDOM_FLOAT_IN_RANGE(18.0, 28.0);
PLAYER::_B45EFF719D8427A6((l_8d._f47));
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/0xB45EFF719D8427A6)

---
## _0xB885852C39CC265D
**Hash:** `0xB885852C39CC265D` | **Returns:** `void`

```
Disables something. Used only once in R* scripts (freemode.ysc).
DISABLE_PLAYER_*
```

[View docs](https://cfxnatives.dev/natives/0xB885852C39CC265D)

---
## _0xB9CF1F793A9F1BF1
**Hash:** `0xB9CF1F793A9F1BF1` | **Returns:** `BOOL`

```
Returns profile setting 237.
GET_*
```

[View docs](https://cfxnatives.dev/natives/0xB9CF1F793A9F1BF1)

---
## _0xBC9490CA15AEA8FB
**Hash:** `0xBC9490CA15AEA8FB` | **Returns:** `void`

```
Seems to only appear in scripts used in Singleplayer.  
Always used like this in scripts  
PLAYER::_BC9490CA15AEA8FB(PLAYER::PLAYER_ID());  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0xBC9490CA15AEA8FB)

---
## _0xC3376F42B1FACCC6
**Hash:** `0xC3376F42B1FACCC6` | **Returns:** `void`

```
- This is called after SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0xC3376F42B1FACCC6)

---
## _0xCAC57395B151135F
**Hash:** `0xCAC57395B151135F` | **Returns:** `void`

```
Found in "director_mode", "fm_bj_race_controler", "fm_deathmatch_controler", "fm_impromptu_dm_controler", "fm_race_controler", "gb_deathmatch".  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xCAC57395B151135F)

---
## _0xCB645E85E97EA48B
**Hash:** `0xCB645E85E97EA48B` | **Returns:** `BOOL`

```
Returns profile setting 243.
GET_*
```

[View docs](https://cfxnatives.dev/natives/0xCB645E85E97EA48B)

---
## _0xD821056B9ACF8052
**Hash:** `0xD821056B9ACF8052` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xD821056B9ACF8052)

---
## _0xDCC07526B8EC45AF
**Hash:** `0xDCC07526B8EC45AF` | **Returns:** `BOOL`

Always returns false.

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0xDCC07526B8EC45AF)

---
## _0xDD2620B7B9D16FF1
**Hash:** `0xDD2620B7B9D16FF1` | **Returns:** `BOOL`

```
2 occurrences in agency_heist3a. p1 was 0.7f then 0.4f.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `float` |

[View docs](https://cfxnatives.dev/natives/0xDD2620B7B9D16FF1)

---
## _0xDE45D1A1EF45EE61
**Hash:** `0xDE45D1A1EF45EE61` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0xDE45D1A1EF45EE61)

---
## _0xFAC75988A7D078D3
**Hash:** `0xFAC75988A7D078D3` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0xFAC75988A7D078D3)

---
## _0xFFEE8FA29AB9A18E
**Hash:** `0xFFEE8FA29AB9A18E` | **Returns:** `void`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/0xFFEE8FA29AB9A18E)

---
## _CLEAR_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
**Hash:** `0x290D248E25815AE8` | **Returns:** `void`

```
NativeDB Introduced: v2372
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/_CLEAR_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE)

---
## _GET_ACHIEVEMENT_PROGRESS
**Hash:** `0x1C186837D0619335` | **Returns:** `int`

```
For Steam.
Always returns 0 in retail version of the game.
```

**Parameters:**
| Name | Type |
|------|------|
| `achievement` | `int` |

[View docs](https://cfxnatives.dev/natives/_GET_ACHIEVEMENT_PROGRESS)

---
## _GET_NUMBER_OF_PLAYERS_IN_TEAM
**Hash:** `0x1FC200409F10E6F1` | **Returns:** `int`

```
NativeDB Introduced: v1180
```

**Parameters:**
| Name | Type |
|------|------|
| `team` | `int` |

[View docs](https://cfxnatives.dev/natives/_GET_NUMBER_OF_PLAYERS_IN_TEAM)

---
## _GET_PLAYER_HEALTH_RECHARGE_LIMIT
**Hash:** `0x8BC515BAE4AAF8FF` | **Returns:** `float`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/_GET_PLAYER_HEALTH_RECHARGE_LIMIT)

---
## _GET_PLAYER_PARACHUTE_MODEL_OVERRIDE
**Hash:** `0xC219887CA3E65C41` | **Returns:** `Hash`

```
NativeDB Introduced: v2372
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/_GET_PLAYER_PARACHUTE_MODEL_OVERRIDE)

---
## _GET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
**Hash:** `0x37FAAA68DCA9D08D` | **Returns:** `Hash`

```
NativeDB Introduced: v2372
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/_GET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE)

---
## _GET_WANTED_LEVEL_PAROLE_DURATION
**Hash:** `0xA72200F51875FEA4` | **Returns:** `int`

```
NativeDB Introduced: v2372
```

[View docs](https://cfxnatives.dev/natives/_GET_WANTED_LEVEL_PAROLE_DURATION)

---
## _HAS_PLAYER_BEEN_SHOT_BY_COP
**Hash:** `0xBC0753C9CA14B506` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `ms` | `int` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_HAS_PLAYER_BEEN_SHOT_BY_COP)

---
## _IS_PLAYER_CAM_CONTROL_DISABLED
**Hash:** `0x7C814D2FB49F40C0` | **Returns:** `BOOL`

```
Returns true when the player is not able to control the cam i.e. when running a benchmark test, switching the player or viewing a cutscene.  
Note: I am not 100% sure if the native actually checks if the cam control is disabled but it seems promising.  
```

[View docs](https://cfxnatives.dev/natives/_IS_PLAYER_CAM_CONTROL_DISABLED)

---
## _IS_PLAYER_DRIVING_DANGEROUSLY
**Hash:** `0xF10B44FD479D69F3` | **Returns:** `BOOL`

```cpp
enum eViolationType {
  // Checks if the player is driving on pedestrians walk ways
  VT_PAVED_PEDESTRIAN_AREAS = 0,
  // Checks if the player is running through red lights
  // This takes some time to return true.
  VT_RUNNING_REDS = 1,
  // checks if the player is driving on the wrong side of the road
  VT_AGAINST_TRAFFIC = 2
};
```

Used solely in "Al Di Napoli" with type 2 for a voiceline.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `type` | `int` |

[View docs](https://cfxnatives.dev/natives/_IS_PLAYER_DRIVING_DANGEROUSLY)

---
## _SET_ACHIEVEMENT_PROGRESS
**Hash:** `0xC2AFFFDABBDC2C5C` | **Returns:** `BOOL`

For Steam.
Does nothing and always returns false in the retail version of the game.

**Parameters:**
| Name | Type |
|------|------|
| `achievement` | `int` |
| `progress` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_ACHIEVEMENT_PROGRESS)

---
## _SET_PLAYER_FALL_DISTANCE
**Hash:** `0xEFD79FA81DFBA9CB` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `distance` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_PLAYER_FALL_DISTANCE)

---
## _SET_PLAYER_HEALTH_RECHARGE_LIMIT
**Hash:** `0xC388A0F065F5BC34` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `limit` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_PLAYER_HEALTH_RECHARGE_LIMIT)

---
## _SET_PLAYER_HOMING_ROCKET_DISABLED
**Hash:** `0xEE4EBDD2593BA844` | **Returns:** `void`

```
NativeDB Introduced: v1180
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_PLAYER_HOMING_ROCKET_DISABLED)

---
## _SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED
**Hash:** `0x6BC97F4F4BB3C04B` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED)

---
## _SET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
**Hash:** `0x0764486AEDE748DB` | **Returns:** `void`

```
NativeDB Introduced: v2372
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `model` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_SET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE)

---
## _SET_PLAYER_UNDERWATER_TIME_REMAINING
**Hash:** `0xA0D3E4F7AAFB7E78` | **Returns:** `Any`

Seems to lock the underwater timer of the specified player. Set `percentage` to `50.0` will reduce the value of [GET_PLAYER_UNDERWATER_TIME_REMAINING](#\_0xA1FCF8E6AF40B731) to 5.0.

If you want to increase the underwater time for ped, use [SET_PED_MAX_TIME_UNDERWATER](#\_0x6BA428C528D9E522) instead.

Using this native after [SET_PED_MAX_TIME_UNDERWATER](#\_0x6BA428C528D9E522) **WILL NOT** get what you want. For example, if you set the max time underwater to `100.0` seconds using [SET_PED_MAX_TIME_UNDERWATER](#\_0x6BA428C528D9E522) and then call this native and set the `percentage` to 50.0, you will not get `50.0`, instead `2.0`.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `percentage` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_PLAYER_UNDERWATER_TIME_REMAINING)

---
## _SET_PLAYER_WEAPON_DEFENSE_MODIFIER_2
**Hash:** `0xBCFDE9EDE4CF27DC` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `modifier` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_PLAYER_WEAPON_DEFENSE_MODIFIER_2)

---
## _SET_SPECIAL_ABILITY
**Hash:** `0xB214D570EAD7F81A` | **Returns:** `void`

```
NativeDB Added Parameter 3: Any p2
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_SPECIAL_ABILITY)

---
## _SET_WANTED_LEVEL_HIDDEN_EVASION_TIME
**Hash:** `0x49B856B1360C47C7` | **Returns:** `void`

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `wantedLevel` | `int` |
| `lossTime` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_WANTED_LEVEL_HIDDEN_EVASION_TIME)

---
## _SPECIAL_ABILITY_ACTIVATE
**Hash:** `0x821FDC827D6F4090` | **Returns:** `void`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Any` |

[View docs](https://cfxnatives.dev/natives/_SPECIAL_ABILITY_ACTIVATE)

---
## _SPECIAL_ABILITY_DEPLETE
**Hash:** `0x17F7471EACA78290` | **Returns:** `void`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/_SPECIAL_ABILITY_DEPLETE)

---
## _UPDATE_PLAYER_TELEPORT
**Hash:** `0xE23D5873C2394C61` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/_UPDATE_PLAYER_TELEPORT)

---
## ARE_PLAYER_FLASHING_STARS_ABOUT_TO_DROP
**Hash:** `0xAFAF86043E5874E9` | **Returns:** `BOOL`
**Alt name:** `ArePlayerFlashingStarsAboutToDrop`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/ARE_PLAYER_FLASHING_STARS_ABOUT_TO_DROP)

---
## ARE_PLAYER_STARS_GREYED_OUT
**Hash:** `0x0A6EB355EE14A2DB` | **Returns:** `BOOL`
**Alt name:** `ArePlayerStarsGreyedOut`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/ARE_PLAYER_STARS_GREYED_OUT)

---
## ASSISTED_MOVEMENT_CLOSE_ROUTE
**Hash:** `0xAEBF081FFC0A0E5E` | **Returns:** `void`
**Alt name:** `AssistedMovementCloseRoute`

[View docs](https://cfxnatives.dev/natives/ASSISTED_MOVEMENT_CLOSE_ROUTE)

---
## ASSISTED_MOVEMENT_FLUSH_ROUTE
**Hash:** `0x8621390F0CDCFE1F` | **Returns:** `void`
**Alt name:** `AssistedMovementFlushRoute`

[View docs](https://cfxnatives.dev/natives/ASSISTED_MOVEMENT_FLUSH_ROUTE)

---
## CAN_PED_HEAR_PLAYER
**Hash:** `0xF297383AA91DCA29` | **Returns:** `BOOL`
**Alt name:** `CanPedHearPlayer`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CAN_PED_HEAR_PLAYER)

---
## CAN_PLAYER_START_MISSION
**Hash:** `0xDE7465A27D403C06` | **Returns:** `BOOL`
**Alt name:** `CanPlayerStartMission`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/CAN_PLAYER_START_MISSION)

---
## CHANGE_PLAYER_PED
**Hash:** `0x048189FAC643DEEE` | **Returns:** `void`
**Alt name:** `ChangePlayerPed`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `ped` | `Ped` |
| `b2` | `BOOL` |
| `resetDamage` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/CHANGE_PLAYER_PED)

---
## CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED
**Hash:** `0x4AACB96203D11A31` | **Returns:** `void`
**Alt name:** `ClearPlayerHasDamagedAtLeastOneNonAnimalPed`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED)

---
## CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_PED
**Hash:** `0xF0B67A4DE6AB5F98` | **Returns:** `void`
**Alt name:** `ClearPlayerHasDamagedAtLeastOnePed`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_PED)

---
## CLEAR_PLAYER_PARACHUTE_MODEL_OVERRIDE
**Hash:** `0x8753997EB5F6EE3F` | **Returns:** `void`
**Alt name:** `ClearPlayerParachuteModelOverride`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/CLEAR_PLAYER_PARACHUTE_MODEL_OVERRIDE)

---
## CLEAR_PLAYER_PARACHUTE_PACK_MODEL_OVERRIDE
**Hash:** `0x10C54E4389C12B42` | **Returns:** `void`
**Alt name:** `ClearPlayerParachutePackModelOverride`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/CLEAR_PLAYER_PARACHUTE_PACK_MODEL_OVERRIDE)

---
## CLEAR_PLAYER_PARACHUTE_VARIATION_OVERRIDE
**Hash:** `0x0F4CC924CF8C7B21` | **Returns:** `void`
**Alt name:** `ClearPlayerParachuteVariationOverride`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/CLEAR_PLAYER_PARACHUTE_VARIATION_OVERRIDE)

---
## CLEAR_PLAYER_WANTED_LEVEL
**Hash:** `0xB302540597885499` | **Returns:** `void`
**Alt name:** `ClearPlayerWantedLevel`

```
This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);  
PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/PLAYER~CLEAR_PLAYER_WANTED_LEVEL)

---
## DISABLE_PLAYER_FIRING
**Hash:** `0x5E6CC07646BBEAB8` | **Returns:** `void`
**Alt name:** `DisablePlayerFiring`

Inhibits the player from using any method of combat including melee and firearms.\
NOTE: Only disables the firing for one frame

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DISABLE_PLAYER_FIRING)

---
## DISABLE_PLAYER_VEHICLE_REWARDS
**Hash:** `0xC142BE3BB9CE125F` | **Returns:** `void`
**Alt name:** `DisablePlayerVehicleRewards`

Disables vehicle rewards for the current frame.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/DISABLE_PLAYER_VEHICLE_REWARDS)

---
## DISPLAY_SYSTEM_SIGNIN_UI
**Hash:** `0x94DD7888C10A979E` | **Returns:** `void`
**Alt name:** `DisplaySystemSigninUi`

```
Purpose of the BOOL currently unknown.  
Both, true and false, work  
```

**Parameters:**
| Name | Type |
|------|------|
| `unk` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DISPLAY_SYSTEM_SIGNIN_UI)

---
## ENABLE_SPECIAL_ABILITY
**Hash:** `0x181EC197DAEFE121` | **Returns:** `void`
**Alt name:** `EnableSpecialAbility`

```
NativeDB Added Parameter 3: Any p2
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ENABLE_SPECIAL_ABILITY)

---
## EXTEND_WORLD_BOUNDARY_FOR_PLAYER
**Hash:** `0x5006D96C995A5827` | **Returns:** `void`
**Alt name:** `ExtendWorldBoundaryForPlayer`

```
Appears only 3 times in the scripts, more specifically in michael1.ysc
-
This can be used to prevent dying if you are "out of the world"
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/EXTEND_WORLD_BOUNDARY_FOR_PLAYER)

---
## FORCE_CLEANUP
**Hash:** `0xBC8983F38F78ED51` | **Returns:** `void`
**Alt name:** `ForceCleanup`

```
used with 1,2,8,64,128 in the scripts  
```

**Parameters:**
| Name | Type |
|------|------|
| `cleanupFlags` | `int` |

[View docs](https://cfxnatives.dev/natives/FORCE_CLEANUP)

---
## FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME
**Hash:** `0x4C68DDDDF0097317` | **Returns:** `void`
**Alt name:** `ForceCleanupForAllThreadsWithThisName`

```
PLAYER::FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME("pb_prostitute", 1); // Found in decompilation  
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `cleanupFlags` | `int` |

[View docs](https://cfxnatives.dev/natives/FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME)

---
## FORCE_CLEANUP_FOR_THREAD_WITH_THIS_ID
**Hash:** `0xF745B37630DF176B` | **Returns:** `void`
**Alt name:** `ForceCleanupForThreadWithThisId`

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |
| `cleanupFlags` | `int` |

[View docs](https://cfxnatives.dev/natives/FORCE_CLEANUP_FOR_THREAD_WITH_THIS_ID)

---
## GET_CAUSE_OF_MOST_RECENT_FORCE_CLEANUP
**Hash:** `0x9A41CF4674A12272` | **Returns:** `int`
**Alt name:** `GetCauseOfMostRecentForceCleanup`

[View docs](https://cfxnatives.dev/natives/GET_CAUSE_OF_MOST_RECENT_FORCE_CLEANUP)

---
## GET_ENTITY_PLAYER_IS_FREE_AIMING_AT
**Hash:** `0x2975C866E6713290` | **Returns:** `BOOL`
**Alt name:** `GetEntityPlayerIsFreeAimingAt`

```
Returns TRUE if it found an entity in your crosshair within range of your weapon. Assigns the handle of the target to the *entity that you pass it.  
Returns false if no entity found.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `entity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/GET_ENTITY_PLAYER_IS_FREE_AIMING_AT)

---
## GET_IS_PLAYER_DRIVING_ON_HIGHWAY
**Hash:** `0x5FC472C501CCADB3` | **Returns:** `BOOL`
**Alt name:** `GetIsPlayerDrivingOnHighway`

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

**Example:**
```lua
-- Get and store the local player index
local playerId = PlayerId()

if GetIsPlayerDrivingOnHighway(playerId) then
    print("Player is driving on a highway!")
else
    print("Player is not driving on a highway.")
end
```

[View docs](https://cfxnatives.dev/natives/GET_IS_PLAYER_DRIVING_ON_HIGHWAY)

---
## GET_MAX_WANTED_LEVEL
**Hash:** `0x462E0DB9B137DC5F` | **Returns:** `int`
**Alt name:** `GetMaxWantedLevel`

```
Gets the maximum wanted level the player can get.  
Ranges from 0 to 5.  
```

[View docs](https://cfxnatives.dev/natives/GET_MAX_WANTED_LEVEL)

---
## GET_NUMBER_OF_PLAYERS
**Hash:** `0x407C7F91DDB46C16` | **Returns:** `int`
**Alt name:** `GetNumberOfPlayers`

```
Gets the number of players in the current session.
If not multiplayer, always returns 1.
```

[View docs](https://cfxnatives.dev/natives/GET_NUMBER_OF_PLAYERS)

---
## GET_PLAYER_CURRENT_STEALTH_NOISE
**Hash:** `0x2F395D61F3A1F877` | **Returns:** `float`
**Alt name:** `GetPlayerCurrentStealthNoise`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_CURRENT_STEALTH_NOISE)

---
## GET_PLAYER_FAKE_WANTED_LEVEL
**Hash:** `0x56105E599CAB0EFA` | **Returns:** `int`
**Alt name:** `GetPlayerFakeWantedLevel`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/PLAYER~GET_PLAYER_FAKE_WANTED_LEVEL)

---
## GET_PLAYER_GROUP
**Hash:** `0x0D127585F77030AF` | **Returns:** `int`
**Alt name:** `GetPlayerGroup`

```
Returns the group ID the player is member of.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_GROUP)

---
## GET_PLAYER_HAS_RESERVE_PARACHUTE
**Hash:** `0x5DDFE2FF727F3CA3` | **Returns:** `BOOL`
**Alt name:** `GetPlayerHasReserveParachute`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_HAS_RESERVE_PARACHUTE)

---
## GET_PLAYER_INDEX
**Hash:** `0xA5EDC40EF369B48D` | **Returns:** `Player`
**Alt name:** `GetPlayerIndex`

```
Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT  
```

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_INDEX)

---
## GET_PLAYER_INVINCIBLE
**Hash:** `0xB721981B2B939E07` | **Returns:** `BOOL`
**Alt name:** `GetPlayerInvincible`

```
Returns the Player's Invincible status.  
This function will always return false if 0x733A643B5B0C53C1 is used to set the invincibility status. To always get the correct result, use this:  
	bool IsPlayerInvincible(Player player)  
	{  
auto addr = getScriptHandleBaseAddress(GET_PLAYER_PED(player));	  
if (addr)  
{  
	DWORD flag = *(DWORD *)(addr + 0x188);  
	return ((flag & (1 << 8)) != 0) || ((flag & (1 << 9)) != 0);  
}  
return false;  
	}  
============================================================  
This has bothered me for too long, whoever may come across this, where did anyone ever come up with this made up hash? 0x733A643B5B0C53C1 I've looked all over old hash list, and this nativedb I can not find that PC hash anywhere. What native name is it now or was it?  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/PLAYER~GET_PLAYER_INVINCIBLE)

---
## GET_PLAYER_MAX_ARMOUR
**Hash:** `0x92659B4CE1863CB3` | **Returns:** `int`
**Alt name:** `GetPlayerMaxArmour`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/PLAYER~GET_PLAYER_MAX_ARMOUR)

---
## GET_PLAYER_NAME
**Hash:** `0x6D0DE6A7B5DA71F8` | **Returns:** `char*`
**Alt name:** `GetPlayerName`

Returns the players name from a specified player index

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/PLAYER~GET_PLAYER_NAME)

---
## GET_PLAYER_PARACHUTE_PACK_TINT_INDEX
**Hash:** `0x6E9C742F340CE5A2` | **Returns:** `void`
**Alt name:** `GetPlayerParachutePackTintIndex`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `tintIndex` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_PARACHUTE_PACK_TINT_INDEX)

---
## GET_PLAYER_PARACHUTE_SMOKE_TRAIL_COLOR
**Hash:** `0xEF56DBABD3CD4887` | **Returns:** `void`
**Alt name:** `GetPlayerParachuteSmokeTrailColor`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `r` | `int*` |
| `g` | `int*` |
| `b` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_PARACHUTE_SMOKE_TRAIL_COLOR)

---
## GET_PLAYER_PARACHUTE_TINT_INDEX
**Hash:** `0x75D3F7A1B0D9B145` | **Returns:** `void`
**Alt name:** `GetPlayerParachuteTintIndex`

```
Tints:  
None = -1,  
Rainbow = 0,  
Red = 1,  
SeasideStripes = 2,  
WidowMaker = 3,  
Patriot = 4,  
Blue = 5,  
Black = 6,  
Hornet = 7,  
AirFocce = 8,  
Desert = 9,  
Shadow = 10,  
HighAltitude = 11,  
Airbone = 12,  
Sunrise = 13,  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `tintIndex` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_PARACHUTE_TINT_INDEX)

---
## GET_PLAYER_PED
**Hash:** `0x43A66C31C68491C0` | **Returns:** `Ped`
**Alt name:** `GetPlayerPed`

Gets the ped for a specified player index.

**Parameters:**
| Name | Type |
|------|------|
| `playerId` | `Player` |

**Example:**
```lua
local playerIdx = GetPlayerFromServerId(source)
local ped = GetPlayerPed(playerIdx)

-- act on the ped
```

[View docs](https://cfxnatives.dev/natives/PLAYER~GET_PLAYER_PED)

---
## GET_PLAYER_PED_SCRIPT_INDEX
**Hash:** `0x50FAC3A3E030A6E1` | **Returns:** `Ped`
**Alt name:** `GetPlayerPedScriptIndex`

```
Does the same like PLAYER::GET_PLAYER_PED
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_PED_SCRIPT_INDEX)

---
## GET_PLAYER_RESERVE_PARACHUTE_TINT_INDEX
**Hash:** `0xD5A016BC3C09CF40` | **Returns:** `void`
**Alt name:** `GetPlayerReserveParachuteTintIndex`

```
Tints:  
None = -1,  
Rainbow = 0,  
Red = 1,  
SeasideStripes = 2,  
WidowMaker = 3,  
Patriot = 4,  
Blue = 5,  
Black = 6,  
Hornet = 7,  
AirFocce = 8,  
Desert = 9,  
Shadow = 10,  
HighAltitude = 11,  
Airbone = 12,  
Sunrise = 13,  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `index` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_RESERVE_PARACHUTE_TINT_INDEX)

---
## GET_PLAYER_RGB_COLOUR
**Hash:** `0xE902EF951DCE178F` | **Returns:** `void`
**Alt name:** `GetPlayerRgbColour`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `r` | `int*` |
| `g` | `int*` |
| `b` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_RGB_COLOUR)

---
## GET_PLAYER_SPRINT_STAMINA_REMAINING
**Hash:** `0x3F9F16F8E65A7ED7` | **Returns:** `float`
**Alt name:** `GetPlayerSprintStaminaRemaining`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_SPRINT_STAMINA_REMAINING)

---
## GET_PLAYER_SPRINT_TIME_REMAINING
**Hash:** `0x1885BC9B108B4C99` | **Returns:** `float`
**Alt name:** `GetPlayerSprintTimeRemaining`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_SPRINT_TIME_REMAINING)

---
## GET_PLAYER_TARGET_ENTITY
**Hash:** `0x13EDE1A5DBF797C9` | **Returns:** `BOOL`
**Alt name:** `GetPlayerTargetEntity`

```
Assigns the handle of locked-on melee target to *entity that you pass it.  
Returns false if no entity found.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `entity` | `Entity*` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_TARGET_ENTITY)

---
## GET_PLAYER_TEAM
**Hash:** `0x37039302F4E0A008` | **Returns:** `int`
**Alt name:** `GetPlayerTeam`

```
Gets the player's team.  
Does nothing in singleplayer.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/PLAYER~GET_PLAYER_TEAM)

---
## GET_PLAYER_UNDERWATER_TIME_REMAINING
**Hash:** `0xA1FCF8E6AF40B731` | **Returns:** `float`
**Alt name:** `GetPlayerUnderwaterTimeRemaining`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_PLAYER_UNDERWATER_TIME_REMAINING)

---
## GET_PLAYER_WANTED_CENTRE_POSITION
**Hash:** `0x0C92BA89F1AF26F8` | **Returns:** `Vector3`
**Alt name:** `GetPlayerWantedCentrePosition`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/PLAYER~GET_PLAYER_WANTED_CENTRE_POSITION)

---
## GET_PLAYER_WANTED_LEVEL
**Hash:** `0xE28E54788CE8F12D` | **Returns:** `int`
**Alt name:** `GetPlayerWantedLevel`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/PLAYER~GET_PLAYER_WANTED_LEVEL)

---
## GET_PLAYERS_LAST_VEHICLE
**Hash:** `0xB6997A7EB3F5C8C0` | **Returns:** `Vehicle`
**Alt name:** `GetPlayersLastVehicle`

### Warning

This native will return `0` if the last vehicle the player was in was destroyed.

### Alternative

You can use [GET_VEHICLE_PED_IS_IN](#\_0x9A9112A0FE9A4713), which will actually get the last vehicle, even if it was destroyed.

[View docs](https://cfxnatives.dev/natives/GET_PLAYERS_LAST_VEHICLE)

---
## GET_TIME_SINCE_LAST_ARREST
**Hash:** `0x5063F92F07C2A316` | **Returns:** `int`
**Alt name:** `GetTimeSinceLastArrest`

```
Returns the time since the character was arrested in (ms) milliseconds.  
example  
var time = Function.call<int>(Hash.GET_TIME_SINCE_LAST_ARREST();  
UI.DrawSubtitle(time.ToString());  
if player has not been arrested, the int returned will be -1.  
```

[View docs](https://cfxnatives.dev/natives/GET_TIME_SINCE_LAST_ARREST)

---
## GET_TIME_SINCE_LAST_DEATH
**Hash:** `0xC7034807558DDFCA` | **Returns:** `int`
**Alt name:** `GetTimeSinceLastDeath`

```
Returns the time since the character died in (ms) milliseconds.  
example  
var time = Function.call<int>(Hash.GET_TIME_SINCE_LAST_DEATH();  
UI.DrawSubtitle(time.ToString());  
if player has not died, the int returned will be -1.  
```

[View docs](https://cfxnatives.dev/natives/GET_TIME_SINCE_LAST_DEATH)

---
## GET_TIME_SINCE_PLAYER_DROVE_AGAINST_TRAFFIC
**Hash:** `0xDB89591E290D9182` | **Returns:** `int`
**Alt name:** `GetTimeSincePlayerDroveAgainstTraffic`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_TIME_SINCE_PLAYER_DROVE_AGAINST_TRAFFIC)

---
## GET_TIME_SINCE_PLAYER_DROVE_ON_PAVEMENT
**Hash:** `0xD559D2BE9E37853B` | **Returns:** `int`
**Alt name:** `GetTimeSincePlayerDroveOnPavement`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_TIME_SINCE_PLAYER_DROVE_ON_PAVEMENT)

---
## GET_TIME_SINCE_PLAYER_HIT_PED
**Hash:** `0xE36A25322DC35F42` | **Returns:** `int`
**Alt name:** `GetTimeSincePlayerHitPed`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_TIME_SINCE_PLAYER_HIT_PED)

---
## GET_TIME_SINCE_PLAYER_HIT_VEHICLE
**Hash:** `0x5D35ECF3A81A0EE0` | **Returns:** `int`
**Alt name:** `GetTimeSincePlayerHitVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_TIME_SINCE_PLAYER_HIT_VEHICLE)

---
## GET_WANTED_LEVEL_RADIUS
**Hash:** `0x085DEB493BE80812` | **Returns:** `float`
**Alt name:** `GetWantedLevelRadius`

```
Remnant from GTA IV. Does nothing in GTA V.
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/GET_WANTED_LEVEL_RADIUS)

---
## GET_WANTED_LEVEL_THRESHOLD
**Hash:** `0xFDD179EAF45B556C` | **Returns:** `int`
**Alt name:** `GetWantedLevelThreshold`

```
Drft  
```

**Parameters:**
| Name | Type |
|------|------|
| `wantedLevel` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_WANTED_LEVEL_THRESHOLD)

---
## GIVE_ACHIEVEMENT_TO_PLAYER
**Hash:** `0xBEC7076D64130195` | **Returns:** `BOOL`
**Alt name:** `GiveAchievementToPlayer`

```
Achievements from 0-57
more achievements came with update 1.29 (freemode events update), I'd say that they now go to 60, but I'll need to check.
```

**Parameters:**
| Name | Type |
|------|------|
| `achievement` | `int` |

[View docs](https://cfxnatives.dev/natives/GIVE_ACHIEVEMENT_TO_PLAYER)

---
## GIVE_PLAYER_RAGDOLL_CONTROL
**Hash:** `0x3C49C870E66F0A28` | **Returns:** `void`
**Alt name:** `GivePlayerRagdollControl`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GIVE_PLAYER_RAGDOLL_CONTROL)

---
## HAS_ACHIEVEMENT_BEEN_PASSED
**Hash:** `0x867365E111A3B6EB` | **Returns:** `BOOL`
**Alt name:** `HasAchievementBeenPassed`

**Parameters:**
| Name | Type |
|------|------|
| `achievement` | `int` |

[View docs](https://cfxnatives.dev/natives/HAS_ACHIEVEMENT_BEEN_PASSED)

---
## HAS_FORCE_CLEANUP_OCCURRED
**Hash:** `0xC968670BFACE42D9` | **Returns:** `BOOL`
**Alt name:** `HasForceCleanupOccurred`

**Parameters:**
| Name | Type |
|------|------|
| `cleanupFlags` | `int` |

[View docs](https://cfxnatives.dev/natives/HAS_FORCE_CLEANUP_OCCURRED)

---
## HAS_PLAYER_BEEN_SPOTTED_IN_STOLEN_VEHICLE
**Hash:** `0xD705740BB0A1CF4C` | **Returns:** `BOOL`
**Alt name:** `HasPlayerBeenSpottedInStolenVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/HAS_PLAYER_BEEN_SPOTTED_IN_STOLEN_VEHICLE)

---
## HAS_PLAYER_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED
**Hash:** `0xE4B90F367BD81752` | **Returns:** `BOOL`
**Alt name:** `HasPlayerDamagedAtLeastOneNonAnimalPed`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/HAS_PLAYER_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED)

---
## HAS_PLAYER_DAMAGED_AT_LEAST_ONE_PED
**Hash:** `0x20CE80B0C2BF4ACC` | **Returns:** `BOOL`
**Alt name:** `HasPlayerDamagedAtLeastOnePed`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/HAS_PLAYER_DAMAGED_AT_LEAST_ONE_PED)

---
## HAS_PLAYER_LEFT_THE_WORLD
**Hash:** `0xD55DDFB47991A294` | **Returns:** `BOOL`
**Alt name:** `HasPlayerLeftTheWorld`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/HAS_PLAYER_LEFT_THE_WORLD)

---
## INT_TO_PARTICIPANTINDEX
**Hash:** `0x9EC6603812C24710` | **Returns:** `int`
**Alt name:** `IntToParticipantindex`

```
Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).  
--------------------------------------------------------  
if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::INT_TO_PARTICIPANTINDEX(i)))  
```

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/INT_TO_PARTICIPANTINDEX)

---
## INT_TO_PLAYERINDEX
**Hash:** `0x41BD2A6B006AF756` | **Returns:** `Player`
**Alt name:** `IntToPlayerindex`

```
Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).  
```

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/INT_TO_PLAYERINDEX)

---
## IS_PLAYER_BATTLE_AWARE
**Hash:** `0x38D28DA81E4E9BF9` | **Returns:** `BOOL`
**Alt name:** `IsPlayerBattleAware`

```
Returns true if an unk value is greater than 0.0f  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_BATTLE_AWARE)

---
## IS_PLAYER_BEING_ARRESTED
**Hash:** `0x388A47C51ABDAC8E` | **Returns:** `BOOL`
**Alt name:** `IsPlayerBeingArrested`

```
Return true while player is being arrested / busted.  
If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)  
If atArresting is set to 0, this function will return 1 only when the busted screen is shown.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `atArresting` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_BEING_ARRESTED)

---
## IS_PLAYER_BLUETOOTH_ENABLE
**Hash:** `0x65FAEE425DE637B0` | **Returns:** `BOOL`
**Alt name:** `IsPlayerBluetoothEnable`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_BLUETOOTH_ENABLE)

---
## IS_PLAYER_CLIMBING
**Hash:** `0x95E8F73DC65EFB9C` | **Returns:** `BOOL`
**Alt name:** `IsPlayerClimbing`

```
Returns TRUE if the player ('s ped) is climbing at the moment.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_CLIMBING)

---
## IS_PLAYER_CONTROL_ON
**Hash:** `0x49C32D60007AFA47` | **Returns:** `BOOL`
**Alt name:** `IsPlayerControlOn`

```
Can the player control himself, used to disable controls for player for things like a cutscene.  
---  
You can't disable controls with this, use SET_PLAYER_CONTROL(...) for this.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_CONTROL_ON)

---
## IS_PLAYER_DEAD
**Hash:** `0x424D4687FA1E5652` | **Returns:** `BOOL`
**Alt name:** `IsPlayerDead`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_DEAD)

---
## IS_PLAYER_FREE_AIMING
**Hash:** `0x2E397FD2ECD37C87` | **Returns:** `BOOL`
**Alt name:** `IsPlayerFreeAiming`

```
Gets a value indicating whether the specified player is currently aiming freely.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_FREE_AIMING)

---
## IS_PLAYER_FREE_AIMING_AT_ENTITY
**Hash:** `0x3C06B5C839B38F7B` | **Returns:** `BOOL`
**Alt name:** `IsPlayerFreeAimingAtEntity`

```
Gets a value indicating whether the specified player is currently aiming freely at the specified entity.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_FREE_AIMING_AT_ENTITY)

---
## IS_PLAYER_FREE_FOR_AMBIENT_TASK
**Hash:** `0xDCCFD3F106C36AB4` | **Returns:** `BOOL`
**Alt name:** `IsPlayerFreeForAmbientTask`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_FREE_FOR_AMBIENT_TASK)

---
## IS_PLAYER_LOGGING_IN_NP
**Hash:** `0x74556E1420867ECA` | **Returns:** `BOOL`
**Alt name:** `IsPlayerLoggingInNp`

```
this function is hard-coded to always return 0.  
```

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_LOGGING_IN_NP)

---
## IS_PLAYER_ONLINE
**Hash:** `0xF25D331DC2627BBC` | **Returns:** `BOOL`
**Alt name:** `IsPlayerOnline`

It returns true if the player is online, suggesting they are also logged in locally. Note that this is an alias for `NETWORK_IS_SIGNED_ONLINE`.

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_ONLINE)

---
## IS_PLAYER_PLAYING
**Hash:** `0x5E9564D8246B909A` | **Returns:** `BOOL`
**Alt name:** `IsPlayerPlaying`

```
Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_PLAYING)

---
## IS_PLAYER_PRESSING_HORN
**Hash:** `0xFA1E2BF8B10598F9` | **Returns:** `BOOL`
**Alt name:** `IsPlayerPressingHorn`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_PRESSING_HORN)

---
## IS_PLAYER_READY_FOR_CUTSCENE
**Hash:** `0x908CBECC2CAA3690` | **Returns:** `BOOL`
**Alt name:** `IsPlayerReadyForCutscene`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_READY_FOR_CUTSCENE)

---
## IS_PLAYER_RIDING_TRAIN
**Hash:** `0x4EC12697209F2196` | **Returns:** `BOOL`
**Alt name:** `IsPlayerRidingTrain`

```
Returns true if the player is riding a train.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_RIDING_TRAIN)

---
## IS_PLAYER_SCRIPT_CONTROL_ON
**Hash:** `0x8A876A65283DD7D7` | **Returns:** `BOOL`
**Alt name:** `IsPlayerScriptControlOn`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_SCRIPT_CONTROL_ON)

---
## IS_PLAYER_TARGETTING_ANYTHING
**Hash:** `0x78CFE51896B6B8A4` | **Returns:** `BOOL`
**Alt name:** `IsPlayerTargettingAnything`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_TARGETTING_ANYTHING)

---
## IS_PLAYER_TARGETTING_ENTITY
**Hash:** `0x7912F7FC4F6264B6` | **Returns:** `BOOL`
**Alt name:** `IsPlayerTargettingEntity`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_TARGETTING_ENTITY)

---
## IS_PLAYER_TELEPORT_ACTIVE
**Hash:** `0x02B15662D7F8886F` | **Returns:** `BOOL`
**Alt name:** `IsPlayerTeleportActive`

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_TELEPORT_ACTIVE)

---
## IS_PLAYER_WANTED_LEVEL_GREATER
**Hash:** `0x238DB2A2C23EE9EF` | **Returns:** `BOOL`
**Alt name:** `IsPlayerWantedLevelGreater`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `wantedLevel` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYER_WANTED_LEVEL_GREATER)

---
## IS_SPECIAL_ABILITY_ACTIVE
**Hash:** `0x3E5F7FC85D854E15` | **Returns:** `BOOL`
**Alt name:** `IsSpecialAbilityActive`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_SPECIAL_ABILITY_ACTIVE)

---
## IS_SPECIAL_ABILITY_ENABLED
**Hash:** `0xB1D200FE26AEF3CB` | **Returns:** `BOOL`
**Alt name:** `IsSpecialAbilityEnabled`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_SPECIAL_ABILITY_ENABLED)

---
## IS_SPECIAL_ABILITY_METER_FULL
**Hash:** `0x05A1FE504B7F2587` | **Returns:** `BOOL`
**Alt name:** `IsSpecialAbilityMeterFull`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/IS_SPECIAL_ABILITY_METER_FULL)

---
## IS_SPECIAL_ABILITY_UNLOCKED
**Hash:** `0xC6017F6A6CDFA694` | **Returns:** `BOOL`
**Alt name:** `IsSpecialAbilityUnlocked`

**Parameters:**
| Name | Type |
|------|------|
| `playerModel` | `Hash` |

[View docs](https://cfxnatives.dev/natives/IS_SPECIAL_ABILITY_UNLOCKED)

---
## IS_SYSTEM_UI_BEING_DISPLAYED
**Hash:** `0x5D511E3867C87139` | **Returns:** `BOOL`
**Alt name:** `IsSystemUiBeingDisplayed`

[View docs](https://cfxnatives.dev/natives/IS_SYSTEM_UI_BEING_DISPLAYED)

---
## NETWORK_PLAYER_ID_TO_INT
**Hash:** `0xEE68096F9F37341E` | **Returns:** `int`
**Alt name:** `NetworkPlayerIdToInt`

```
Does exactly the same thing as PLAYER_ID()  
```

[View docs](https://cfxnatives.dev/natives/NETWORK_PLAYER_ID_TO_INT)

---
## PLAYER_ATTACH_VIRTUAL_BOUND
**Hash:** `0xED51733DC73AED51` | **Returns:** `void`
**Alt name:** `PlayerAttachVirtualBound`

```
Only 1 match. ob_sofa_michael.  
PLAYER::PLAYER_ATTACH_VIRTUAL_BOUND(-804.5928f, 173.1801f, 71.68436f, 0f, 0f, 0.590625f, 1f, 0.7f);1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;  
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

[View docs](https://cfxnatives.dev/natives/PLAYER_ATTACH_VIRTUAL_BOUND)

---
## PLAYER_DETACH_VIRTUAL_BOUND
**Hash:** `0x1DD5897E2FA6E7C9` | **Returns:** `void`
**Alt name:** `PlayerDetachVirtualBound`

```
1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;  
```

[View docs](https://cfxnatives.dev/natives/PLAYER_DETACH_VIRTUAL_BOUND)

---
## PLAYER_ID
**Hash:** `0x4F8644AF03D0E0D6` | **Returns:** `Player`
**Alt name:** `PlayerId`

Returns the player index for the local player.

[View docs](https://cfxnatives.dev/natives/PLAYER_ID)

---
## PLAYER_PED_ID
**Hash:** `0xD80958FC74E988A6` | **Returns:** `Ped`
**Alt name:** `PlayerPedId`

Returns the entity handle for the local player ped. Note that this entity handle will change after using commands such as SET_PLAYER_MODEL.

[View docs](https://cfxnatives.dev/natives/PLAYER_PED_ID)

---
## REMOVE_PLAYER_HELMET
**Hash:** `0xF3AC26D3CC576528` | **Returns:** `void`
**Alt name:** `RemovePlayerHelmet`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/REMOVE_PLAYER_HELMET)

---
## REPORT_CRIME
**Hash:** `0xE9B09589827545E7` | **Returns:** `void`
**Alt name:** `ReportCrime`

```
PLAYER::REPORT_CRIME(PLAYER::PLAYER_ID(), 37, PLAYER::GET_WANTED_LEVEL_THRESHOLD(1));  
From am_armybase.ysc.c4:  
PLAYER::REPORT_CRIME(PLAYER::PLAYER_ID(4), 36, PLAYER::GET_WANTED_LEVEL_THRESHOLD(4));  
-----  
This was taken from the GTAV.exe v1.334. The function is called sub_140592CE8. For a full decompilation of the function, see here: pastebin.com/09qSMsN7   
-----  
crimeType:  
1: Firearms possession  
2: Person running a red light ("5-0-5")  
3: Reckless driver  
4: Speeding vehicle (a "5-10")  
5: Traffic violation (a "5-0-5")  
6: Motorcycle rider without a helmet  
7: Vehicle theft (a "5-0-3")  
8: Grand Theft Auto  
9: ???  
10: ???  
11: Assault on a civilian (a "2-40")  
12: Assault on an officer  
13: Assault with a deadly weapon (a "2-45")  
14: Officer shot (a "2-45")  
15: Pedestrian struck by a vehicle  
16: Officer struck by a vehicle  
17: Helicopter down (an "AC"?)  
18: Civilian on fire (a "2-40")  
19: Officer set on fire (a "10-99")  
20: Car on fire  
21: Air unit down (an "AC"?)  
22: An explosion (a "9-96")  
23: A stabbing (a "2-45") (also something else I couldn't understand)  
24: Officer stabbed (also something else I couldn't understand)  
25: Attack on a vehicle ("MDV"?)  
26: Damage to property  
27: Suspect threatening officer with a firearm  
28: Shots fired  
29: ???  
30: ???  
31: ???  
32: ???  
33: ???  
34: A "2-45"  
35: ???  
36: A "9-25"  
37: ???  
38: ???  
39: ???  
40: ???  
41: ???  
42: ???  
43: Possible disturbance  
44: Civilian in need of assistance  
45: ???  
46: ???  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `crimeType` | `int` |
| `wantedLvlThresh` | `int` |

[View docs](https://cfxnatives.dev/natives/REPORT_CRIME)

---
## REPORT_POLICE_SPOTTED_PLAYER
**Hash:** `0xDC64D2C53493ED12` | **Returns:** `void`
**Alt name:** `ReportPoliceSpottedPlayer`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/REPORT_POLICE_SPOTTED_PLAYER)

---
## RESET_PLAYER_ARREST_STATE
**Hash:** `0x2D03E13C460760D6` | **Returns:** `void`
**Alt name:** `ResetPlayerArrestState`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/RESET_PLAYER_ARREST_STATE)

---
## RESET_PLAYER_INPUT_GAIT
**Hash:** `0x19531C47A2ABD691` | **Returns:** `void`
**Alt name:** `ResetPlayerInputGait`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/RESET_PLAYER_INPUT_GAIT)

---
## RESET_PLAYER_STAMINA
**Hash:** `0xA6F312FCCE9C1DFE` | **Returns:** `void`
**Alt name:** `ResetPlayerStamina`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/RESET_PLAYER_STAMINA)

---
## RESET_WANTED_LEVEL_DIFFICULTY
**Hash:** `0xB9D0DD990DC141DD` | **Returns:** `void`
**Alt name:** `ResetWantedLevelDifficulty`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/RESET_WANTED_LEVEL_DIFFICULTY)

---
## RESET_WORLD_BOUNDARY_FOR_PLAYER
**Hash:** `0xDA1DF03D5A315F4E` | **Returns:** `void`
**Alt name:** `ResetWorldBoundaryForPlayer`

```
NativeDB Introduced: v323
```

[View docs](https://cfxnatives.dev/natives/RESET_WORLD_BOUNDARY_FOR_PLAYER)

---
## RESTORE_PLAYER_STAMINA
**Hash:** `0xA352C1B864CAFD33` | **Returns:** `void`
**Alt name:** `RestorePlayerStamina`

Adds a percentage to a players stamina

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `percentage` | `float` |

**Example:**
```lua
Citizen.CreateThread(function()
  while true do
    RestorePlayerStamina(PlayerId(), 0.3)
    Citizen.Wait(15000) -- 15 seconds
  end
end)
```

[View docs](https://cfxnatives.dev/natives/RESTORE_PLAYER_STAMINA)

---
## SET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE
**Hash:** `0xCA7DC8329F0A1E9E` | **Returns:** `void`
**Alt name:** `SetAirDragMultiplierForPlayersVehicle`

```
This can be between 1.0f - 14.9f   
You can change the max in IDA from 15.0. I say 15.0 as the function blrs if what you input is greater than or equal to 15.0 hence why it's 14.9 max default.  
On PC the multiplier can be between 0.0f and 50.0f (inclusive).  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE)

---
## SET_ALL_RANDOM_PEDS_FLEE
**Hash:** `0x056E0FE8534C2949` | **Returns:** `void`
**Alt name:** `SetAllRandomPedsFlee`

Sets whether all random peds will run away from the player if they are agitated (threatened) (bool=true), or if they will stand their ground (bool=false).

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ALL_RANDOM_PEDS_FLEE)

---
## SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
**Hash:** `0x471D2FF42A94B4F2` | **Returns:** `void`
**Alt name:** `SetAllRandomPedsFleeThisFrame`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME)

---
## SET_AUTO_GIVE_PARACHUTE_WHEN_ENTER_PLANE
**Hash:** `0x9F343285A00B4BB6` | **Returns:** `void`
**Alt name:** `SetAutoGiveParachuteWhenEnterPlane`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_AUTO_GIVE_PARACHUTE_WHEN_ENTER_PLANE)

---
## SET_AUTO_GIVE_SCUBA_GEAR_WHEN_EXIT_VEHICLE
**Hash:** `0xD2B315B6689D537D` | **Returns:** `void`
**Alt name:** `SetAutoGiveScubaGearWhenExitVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_AUTO_GIVE_SCUBA_GEAR_WHEN_EXIT_VEHICLE)

---
## SET_DISABLE_AMBIENT_MELEE_MOVE
**Hash:** `0x2E8AABFA40A84F8C` | **Returns:** `void`
**Alt name:** `SetDisableAmbientMeleeMove`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_DISABLE_AMBIENT_MELEE_MOVE)

---
## SET_DISPATCH_COPS_FOR_PLAYER
**Hash:** `0xDB172424876553F4` | **Returns:** `void`
**Alt name:** `SetDispatchCopsForPlayer`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_DISPATCH_COPS_FOR_PLAYER)

---
## SET_EVERYONE_IGNORE_PLAYER
**Hash:** `0x8EEDA153AD141BA4` | **Returns:** `void`
**Alt name:** `SetEveryoneIgnorePlayer`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_EVERYONE_IGNORE_PLAYER)

---
## SET_IGNORE_LOW_PRIORITY_SHOCKING_EVENTS
**Hash:** `0x596976B02B6B5700` | **Returns:** `void`
**Alt name:** `SetIgnoreLowPriorityShockingEvents`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_IGNORE_LOW_PRIORITY_SHOCKING_EVENTS)

---
## SET_MAX_WANTED_LEVEL
**Hash:** `0xAA5F02DB48D704B9` | **Returns:** `void`
**Alt name:** `SetMaxWantedLevel`

**Parameters:**
| Name | Type |
|------|------|
| `maxWantedLevel` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_MAX_WANTED_LEVEL)

---
## SET_PLAYER_BLUETOOTH_STATE
**Hash:** `0x5DC40A8869C22141` | **Returns:** `void`
**Alt name:** `SetPlayerBluetoothState`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `state` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_BLUETOOTH_STATE)

---
## SET_PLAYER_CAN_BE_HASSLED_BY_GANGS
**Hash:** `0xD5E460AD7020A246` | **Returns:** `void`
**Alt name:** `SetPlayerCanBeHassledByGangs`

```
Sets whether this player can be hassled by gangs.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_CAN_BE_HASSLED_BY_GANGS)

---
## SET_PLAYER_CAN_DO_DRIVE_BY
**Hash:** `0x6E8834B52EC20C77` | **Returns:** `void`
**Alt name:** `SetPlayerCanDoDriveBy`

Sets whether the player is able to do drive-bys in vehicle (shooting & aiming in vehicles), this also includes middle finger taunts.

This is a toggle, it does not have to be ran every frame.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_CAN_DO_DRIVE_BY)

---
## SET_PLAYER_CAN_LEAVE_PARACHUTE_SMOKE_TRAIL
**Hash:** `0xF401B182DBA8AF53` | **Returns:** `void`
**Alt name:** `SetPlayerCanLeaveParachuteSmokeTrail`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `enabled` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_CAN_LEAVE_PARACHUTE_SMOKE_TRAIL)

---
## SET_PLAYER_CAN_USE_COVER
**Hash:** `0xD465A8599DFF6814` | **Returns:** `void`
**Alt name:** `SetPlayerCanUseCover`

```
Sets whether this player can take cover.
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_CAN_USE_COVER)

---
## SET_PLAYER_CLOTH_LOCK_COUNTER
**Hash:** `0x14D913B777DFF5DA` | **Returns:** `void`
**Alt name:** `SetPlayerClothLockCounter`

```
6 matches across 4 scripts. 5 occurrences were 240. The other was 255.  
```

**Parameters:**
| Name | Type |
|------|------|
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_CLOTH_LOCK_COUNTER)

---
## SET_PLAYER_CLOTH_PACKAGE_INDEX
**Hash:** `0x9F7BBA2EA6372500` | **Returns:** `void`
**Alt name:** `SetPlayerClothPackageIndex`

```
Every occurrence was either 0 or 2.  
```

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_CLOTH_PACKAGE_INDEX)

---
## SET_PLAYER_CLOTH_PIN_FRAMES
**Hash:** `0x749FADDF97DFE930` | **Returns:** `void`
**Alt name:** `SetPlayerClothPinFrames`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_CLOTH_PIN_FRAMES)

---
## SET_PLAYER_CONTROL
**Hash:** `0x8D32347D6D4C40A2` | **Returns:** `void`
**Alt name:** `SetPlayerControl`

```
Flags:
SPC_AMBIENT_SCRIPT = (1 << 1),
SPC_CLEAR_TASKS = (1 << 2),
SPC_REMOVE_FIRES = (1 << 3),
SPC_REMOVE_EXPLOSIONS = (1 << 4),
SPC_REMOVE_PROJECTILES = (1 << 5),
SPC_DEACTIVATE_GADGETS = (1 << 6),
SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
SPC_ALLOW_PAD_SHAKE = (1 << 12)
See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `bHasControl` | `BOOL` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/PLAYER~SET_PLAYER_CONTROL)

---
## SET_PLAYER_FORCE_SKIP_AIM_INTRO
**Hash:** `0x7651BC64AE59E128` | **Returns:** `void`
**Alt name:** `SetPlayerForceSkipAimIntro`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_FORCE_SKIP_AIM_INTRO)

---
## SET_PLAYER_FORCED_AIM
**Hash:** `0x0FEE4F80AC44A726` | **Returns:** `void`
**Alt name:** `SetPlayerForcedAim`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_FORCED_AIM)

---
## SET_PLAYER_FORCED_ZOOM
**Hash:** `0x75E7D505F2B15902` | **Returns:** `void`
**Alt name:** `SetPlayerForcedZoom`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_FORCED_ZOOM)

---
## SET_PLAYER_HAS_RESERVE_PARACHUTE
**Hash:** `0x7DDAB28D31FAC363` | **Returns:** `void`
**Alt name:** `SetPlayerHasReserveParachute`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_HAS_RESERVE_PARACHUTE)

---
## SET_PLAYER_HEALTH_RECHARGE_MULTIPLIER
**Hash:** `0x5DB660B38DD98A31` | **Returns:** `void`
**Alt name:** `SetPlayerHealthRechargeMultiplier`

This multiplier is reset to `1.0` every time the player ped is changed, often times via [`SET_PLAYER_MODEL`](#\_0x00A1CADD00108836) or [`CHANGE_PLAYER_PED`](#\_0x048189FAC643DEEE).

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `regenRate` | `float` |

**Example:**
```lua
-- To disable the health recharge completely:
SetPlayerHealthRechargeMultiplier(PlayerId(), 0.0)

-- To reset it back to the normal recharge speed:
SetPlayerHealthRechargeMultiplier(PlayerId(), 1.0)
```

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_HEALTH_RECHARGE_MULTIPLIER)

---
## SET_PLAYER_INVINCIBLE
**Hash:** `0x239528EACDC3E7DE` | **Returns:** `void`
**Alt name:** `SetPlayerInvincible`

Make the player impervious to all forms of damage.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `bInvincible` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/PLAYER~SET_PLAYER_INVINCIBLE)

---
## SET_PLAYER_LEAVE_PED_BEHIND
**Hash:** `0xFF300C7649724A0B` | **Returns:** `void`
**Alt name:** `SetPlayerLeavePedBehind`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_LEAVE_PED_BEHIND)

---
## SET_PLAYER_LOCKON
**Hash:** `0x5C8B2F450EE4328E` | **Returns:** `void`
**Alt name:** `SetPlayerLockon`

```
Used to toggle the square up aim.
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

**Example:**
```lua
local plyId = PlayerId()
SetPlayerLockon(plyId, false)
```

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_LOCKON)

---
## SET_PLAYER_LOCKON_RANGE_OVERRIDE
**Hash:** `0x29961D490E5814FD` | **Returns:** `void`
**Alt name:** `SetPlayerLockonRangeOverride`

```
Affects the range of auto aim target.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `range` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_LOCKON_RANGE_OVERRIDE)

---
## SET_PLAYER_MAX_ARMOUR
**Hash:** `0x77DFCCF5948B8C71` | **Returns:** `void`
**Alt name:** `SetPlayerMaxArmour`

```
Default is 100. Use player id and not ped id. For instance: PLAYER::SET_PLAYER_MAX_ARMOUR(PLAYER::PLAYER_ID(), 100); // main_persistent.ct4  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_MAX_ARMOUR)

---
## SET_PLAYER_MAY_NOT_ENTER_ANY_VEHICLE
**Hash:** `0x1DE37BBF9E9CC14A` | **Returns:** `void`
**Alt name:** `SetPlayerMayNotEnterAnyVehicle`

Establishes a reset flag to prevent the player from entering any vehicle. Not that this native must be called every frame.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_MAY_NOT_ENTER_ANY_VEHICLE)

---
## SET_PLAYER_MAY_ONLY_ENTER_THIS_VEHICLE
**Hash:** `0x8026FF78F208978A` | **Returns:** `void`
**Alt name:** `SetPlayerMayOnlyEnterThisVehicle`

Limit the player to only enter this vehicle. Note set vehicle to false if you want them to access any vehicle.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_MAY_ONLY_ENTER_THIS_VEHICLE)

---
## SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER
**Hash:** `0x4A3DC7ECCC321032` | **Returns:** `void`
**Alt name:** `SetPlayerMeleeWeaponDamageModifier`

```
NativeDB Added Parameter 3: BOOL p2
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `modifier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER)

---
## SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER
**Hash:** `0xAE540335B4ABC4E2` | **Returns:** `void`
**Alt name:** `SetPlayerMeleeWeaponDefenseModifier`

```
modifier's min value is 0.1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `modifier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER)

---
## SET_PLAYER_MODEL
**Hash:** `0x00A1CADD00108836` | **Returns:** `void`
**Alt name:** `SetPlayerModel`

Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.

As per usual, make sure to request the model first and wait until it has loaded.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `model` | `Hash` |

**Example:**
```lua
local model = `a_f_m_beach_01`
if IsModelInCdimage(model) and IsModelValid(model) then
  RequestModel(model)
  while not HasModelLoaded(model) do
    Wait(0)
  end
  SetPlayerModel(PlayerId(), model)
  SetModelAsNoLongerNeeded(model)
end
```

[View docs](https://cfxnatives.dev/natives/PLAYER~SET_PLAYER_MODEL)

---
## SET_PLAYER_NOISE_MULTIPLIER
**Hash:** `0xDB89EF50FF25FCE9` | **Returns:** `void`
**Alt name:** `SetPlayerNoiseMultiplier`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_NOISE_MULTIPLIER)

---
## SET_PLAYER_PARACHUTE_MODEL_OVERRIDE
**Hash:** `0x977DB4641F6FC3DB` | **Returns:** `void`
**Alt name:** `SetPlayerParachuteModelOverride`

```
example:  
PLAYER::SET_PLAYER_PARACHUTE_MODEL_OVERRIDE(PLAYER::PLAYER_ID(), 0x73268708);  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `model` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_PARACHUTE_MODEL_OVERRIDE)

---
## SET_PLAYER_PARACHUTE_PACK_MODEL_OVERRIDE
**Hash:** `0xDC80A4C2F18A2B64` | **Returns:** `void`
**Alt name:** `SetPlayerParachutePackModelOverride`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `model` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_PARACHUTE_PACK_MODEL_OVERRIDE)

---
## SET_PLAYER_PARACHUTE_PACK_TINT_INDEX
**Hash:** `0x93B0FB27C9A04060` | **Returns:** `void`
**Alt name:** `SetPlayerParachutePackTintIndex`

```
tints 0- 13
0 - unkown
1 - unkown
2 - unkown
3 - unkown
4 - unkown
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `tintIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_PARACHUTE_PACK_TINT_INDEX)

---
## SET_PLAYER_PARACHUTE_SMOKE_TRAIL_COLOR
**Hash:** `0x8217FD371A4625CF` | **Returns:** `void`
**Alt name:** `SetPlayerParachuteSmokeTrailColor`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_PARACHUTE_SMOKE_TRAIL_COLOR)

---
## SET_PLAYER_PARACHUTE_TINT_INDEX
**Hash:** `0xA3D0E54541D9A5E5` | **Returns:** `void`
**Alt name:** `SetPlayerParachuteTintIndex`

```
Tints:  
None = -1,  
Rainbow = 0,  
Red = 1,  
SeasideStripes = 2,  
WidowMaker = 3,  
Patriot = 4,  
Blue = 5,  
Black = 6,  
Hornet = 7,  
AirFocce = 8,  
Desert = 9,  
Shadow = 10,  
HighAltitude = 11,  
Airbone = 12,  
Sunrise = 13,  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `tintIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_PARACHUTE_TINT_INDEX)

---
## SET_PLAYER_PARACHUTE_VARIATION_OVERRIDE
**Hash:** `0xD9284A8C0D48352C` | **Returns:** `void`
**Alt name:** `SetPlayerParachuteVariationOverride`

```
p1 was always 5.  
p4 was always false.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `int` |
| `p2` | `Any` |
| `p3` | `Any` |
| `p4` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_PARACHUTE_VARIATION_OVERRIDE)

---
## SET_PLAYER_RESERVE_PARACHUTE_TINT_INDEX
**Hash:** `0xAF04C87F5DC1DF38` | **Returns:** `void`
**Alt name:** `SetPlayerReserveParachuteTintIndex`

```
Tints:  
None = -1,  
Rainbow = 0,  
Red = 1,  
SeasideStripes = 2,  
WidowMaker = 3,  
Patriot = 4,  
Blue = 5,  
Black = 6,  
Hornet = 7,  
AirFocce = 8,  
Desert = 9,  
Shadow = 10,  
HighAltitude = 11,  
Airbone = 12,  
Sunrise = 13,  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_RESERVE_PARACHUTE_TINT_INDEX)

---
## SET_PLAYER_RESET_FLAG_PREFER_REAR_SEATS
**Hash:** `0x11D5F725F0E780E0` | **Returns:** `void`
**Alt name:** `SetPlayerResetFlagPreferRearSeats`

```
example:  
flags: 0-6  
PLAYER::SET_PLAYER_RESET_FLAG_PREFER_REAR_SEATS(PLAYER::PLAYER_ID(), 6);  
wouldnt the flag be the seatIndex?  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_RESET_FLAG_PREFER_REAR_SEATS)

---
## SET_PLAYER_SIMULATE_AIMING
**Hash:** `0xC54C95DA968EC5B5` | **Returns:** `void`
**Alt name:** `SetPlayerSimulateAiming`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_SIMULATE_AIMING)

---
## SET_PLAYER_SNEAKING_NOISE_MULTIPLIER
**Hash:** `0xB2C1A29588A9F47C` | **Returns:** `void`
**Alt name:** `SetPlayerSneakingNoiseMultiplier`

```
Values around 1.0f to 2.0f used in game scripts.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_SNEAKING_NOISE_MULTIPLIER)

---
## SET_PLAYER_SPRINT
**Hash:** `0xA01B8075D8B92DF4` | **Returns:** `void`
**Alt name:** `SetPlayerSprint`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_SPRINT)

---
## SET_PLAYER_STEALTH_PERCEPTION_MODIFIER
**Hash:** `0x4E9021C1FCDD507A` | **Returns:** `void`
**Alt name:** `SetPlayerStealthPerceptionModifier`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_STEALTH_PERCEPTION_MODIFIER)

---
## SET_PLAYER_TARGET_LEVEL
**Hash:** `0x5702B917B99DB1CD` | **Returns:** `void`
**Alt name:** `SetPlayerTargetLevel`

**Parameters:**
| Name | Type |
|------|------|
| `targetLevel` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_TARGET_LEVEL)

---
## SET_PLAYER_TARGETING_MODE
**Hash:** `0xB1906895227793F3` | **Returns:** `void`
**Alt name:** `SetPlayerTargetingMode`

```
Sets your targeting mode.
0 = Assisted Aim - Full
1 = Assisted Aim - Partial
2 = Free Aim - Assisted
3 = Free Aim
```

**Parameters:**
| Name | Type |
|------|------|
| `targetMode` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_TARGETING_MODE)

---
## SET_PLAYER_TEAM
**Hash:** `0x0299FA38396A4940` | **Returns:** `void`
**Alt name:** `SetPlayerTeam`

Set the player's current team.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `team` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_TEAM)

---
## SET_PLAYER_VEHICLE_DAMAGE_MODIFIER
**Hash:** `0xA50E117CDDF82F0C` | **Returns:** `void`
**Alt name:** `SetPlayerVehicleDamageModifier`

```
modifier's min value is 0.1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `modifier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_VEHICLE_DAMAGE_MODIFIER)

---
## SET_PLAYER_VEHICLE_DEFENSE_MODIFIER
**Hash:** `0x4C60E6EFDAFF2462` | **Returns:** `void`
**Alt name:** `SetPlayerVehicleDefenseModifier`

```
modifier's min value is 0.1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `modifier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_VEHICLE_DEFENSE_MODIFIER)

---
## SET_PLAYER_WANTED_CENTRE_POSITION
**Hash:** `0x520E541A97A13354` | **Returns:** `void`
**Alt name:** `SetPlayerWantedCentrePosition`

```
# Predominant call signatures  
PLAYER::SET_PLAYER_WANTED_CENTRE_POSITION(PLAYER::PLAYER_ID(), ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1));  
# Parameter value ranges  
P0: PLAYER::PLAYER_ID()  
P1: ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1)  
P2: Not set by any call  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `position` | `Vector3*` |
| `p2` | `BOOL` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_WANTED_CENTRE_POSITION)

---
## SET_PLAYER_WANTED_LEVEL
**Hash:** `0x39FF19C64EF7DA5B` | **Returns:** `void`
**Alt name:** `SetPlayerWantedLevel`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `wantedLevel` | `int` |
| `delayedResponse` | `BOOL` |

**Example:**
```lua
local player = PlayerId()
SetPlayerWantedLevel(player, 5, false) -- 5 star wanted level
```

[View docs](https://cfxnatives.dev/natives/PLAYER~SET_PLAYER_WANTED_LEVEL)

---
## SET_PLAYER_WANTED_LEVEL_NO_DROP
**Hash:** `0x340E61DE7F471565` | **Returns:** `void`
**Alt name:** `SetPlayerWantedLevelNoDrop`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `wantedLevel` | `int` |
| `delayedResponse` | `BOOL` |

**Example:**
```lua
local player = PlayerId()
SetPlayerWantedLevelNoDrop(player, 5, false) -- 5 star wanted level
```

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_WANTED_LEVEL_NO_DROP)

---
## SET_PLAYER_WANTED_LEVEL_NOW
**Hash:** `0xE0A7D1E497FFCD6F` | **Returns:** `void`
**Alt name:** `SetPlayerWantedLevelNow`

```
Forces any pending wanted level to be applied to the specified player immediately.  
Call SET_PLAYER_WANTED_LEVEL with the desired wanted level, followed by SET_PLAYER_WANTED_LEVEL_NOW.  
Second parameter is unknown (always false).  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_WANTED_LEVEL_NOW)

---
## SET_PLAYER_WEAPON_DAMAGE_MODIFIER
**Hash:** `0xCE07B9F7817AADA3` | **Returns:** `void`
**Alt name:** `SetPlayerWeaponDamageModifier`

The native ensures the 'modifier' parameter is 0.1 or greater.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `modifier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_WEAPON_DAMAGE_MODIFIER)

---
## SET_PLAYER_WEAPON_DEFENSE_MODIFIER
**Hash:** `0x2D83BC011CA14A3C` | **Returns:** `void`
**Alt name:** `SetPlayerWeaponDefenseModifier`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `modifier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PLAYER_WEAPON_DEFENSE_MODIFIER)

---
## SET_POLICE_IGNORE_PLAYER
**Hash:** `0x32C62AA929C2DA6A` | **Returns:** `void`
**Alt name:** `SetPoliceIgnorePlayer`

```
The player will be ignored by the police if toggle is set to true  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_POLICE_IGNORE_PLAYER)

---
## SET_POLICE_RADAR_BLIPS
**Hash:** `0x43286D561B72B8BF` | **Returns:** `void`
**Alt name:** `SetPoliceRadarBlips`

```
If toggle is set to false:
 The police won't be shown on the (mini)map
If toggle is set to true:
 The police will be shown on the (mini)map
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_POLICE_RADAR_BLIPS)

---
## SET_RUN_SPRINT_MULTIPLIER_FOR_PLAYER
**Hash:** `0x6DB47AA77FD94E09` | **Returns:** `void`
**Alt name:** `SetRunSprintMultiplierForPlayer`

```
Multiplier goes up to 1.49 any value above will be completely overruled by the game and the multiplier will not take effect, this can be edited in memory however.  
Just call it one time, it is not required to be called once every tick.  
Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and SWIM above. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.  
It is not possible to "decrease" speed. Anything below 1 will be ignored.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_RUN_SPRINT_MULTIPLIER_FOR_PLAYER)

---
## SET_SPECIAL_ABILITY_MULTIPLIER
**Hash:** `0xA49C426ED0CA4AB7` | **Returns:** `void`
**Alt name:** `SetSpecialAbilityMultiplier`

**Parameters:**
| Name | Type |
|------|------|
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_SPECIAL_ABILITY_MULTIPLIER)

---
## SET_SWIM_MULTIPLIER_FOR_PLAYER
**Hash:** `0xA91C6F0FF7D16A13` | **Returns:** `void`
**Alt name:** `SetSwimMultiplierForPlayer`

```
Swim speed multiplier.  
Multiplier goes up to 1.49  
Just call it one time, it is not required to be called once every tick. - Note copied from below native.  
Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and RUN_SPRINT below. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_SWIM_MULTIPLIER_FOR_PLAYER)

---
## SET_WANTED_LEVEL_DIFFICULTY
**Hash:** `0x9B0BB33B04405E7A` | **Returns:** `void`
**Alt name:** `SetWantedLevelDifficulty`

```
Max value is 1.0  
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `difficulty` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_WANTED_LEVEL_DIFFICULTY)

---
## SET_WANTED_LEVEL_MULTIPLIER
**Hash:** `0x020E5F00CDA207BA` | **Returns:** `void`
**Alt name:** `SetWantedLevelMultiplier`

**Parameters:**
| Name | Type |
|------|------|
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_WANTED_LEVEL_MULTIPLIER)

---
## SIMULATE_PLAYER_INPUT_GAIT
**Hash:** `0x477D5D63E63ECA5D` | **Returns:** `void`
**Alt name:** `SimulatePlayerInputGait`

This is to make the player walk without accepting input.

Call this native every frame so you can control the direction of your ped.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `amount` | `float` |
| `gaitType` | `int` |
| `rotationSpeed` | `float` |
| `p4` | `BOOL` |
| `p5` | `BOOL` |

**Example:**
```cs
SimulatePlayerInputGait(Game.Player.Handle, 1f, 100, 1f, 1, 0); //Player will go forward for 100ms
SimulatePlayerInputGait(Game.Player.Handle, 1f, -1, 0f, 1, 0); //Player will go straight forward forever, stop when facing walls or obstacles.
```

[View docs](https://cfxnatives.dev/natives/SIMULATE_PLAYER_INPUT_GAIT)

---
## SPECIAL_ABILITY_CHARGE_ABSOLUTE
**Hash:** `0xB7B0870EB531D08D` | **Returns:** `void`
**Alt name:** `SpecialAbilityChargeAbsolute`

```
p1 appears as 5, 10, 15, 25, or 30. p2 is always true.
```

```
NativeDB Added Parameter 4: Any p3
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `int` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_CHARGE_ABSOLUTE)

---
## SPECIAL_ABILITY_CHARGE_CONTINUOUS
**Hash:** `0xED481732DFF7E997` | **Returns:** `void`
**Alt name:** `SpecialAbilityChargeContinuous`

```
p1 appears to always be 1 (only comes up twice)
```

```
NativeDB Added Parameter 3: Any p2
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p2` | `Ped` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_CHARGE_CONTINUOUS)

---
## SPECIAL_ABILITY_CHARGE_LARGE
**Hash:** `0xF733F45FA4497D93` | **Returns:** `void`
**Alt name:** `SpecialAbilityChargeLarge`

```
2 matches. p1 was always true.
```

```
NativeDB Added Parameter 4: Any p3
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `BOOL` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_CHARGE_LARGE)

---
## SPECIAL_ABILITY_CHARGE_MEDIUM
**Hash:** `0xF113E3AA9BC54613` | **Returns:** `void`
**Alt name:** `SpecialAbilityChargeMedium`

```
Only 1 match. Both p1 & p2 were true.
```

```
NativeDB Added Parameter 4: Any p3
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `BOOL` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_CHARGE_MEDIUM)

---
## SPECIAL_ABILITY_CHARGE_NORMALIZED
**Hash:** `0xA0696A65F009EE18` | **Returns:** `void`
**Alt name:** `SpecialAbilityChargeNormalized`

```
normalizedValue is from 0.0 - 1.0
p2 is always 1
```

```
NativeDB Added Parameter 4: Any p3
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `normalizedValue` | `float` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_CHARGE_NORMALIZED)

---
## SPECIAL_ABILITY_CHARGE_ON_MISSION_FAILED
**Hash:** `0xC9A763D8FE87436A` | **Returns:** `void`
**Alt name:** `SpecialAbilityChargeOnMissionFailed`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_CHARGE_ON_MISSION_FAILED)

---
## SPECIAL_ABILITY_CHARGE_SMALL
**Hash:** `0x2E7B9B683481687D` | **Returns:** `void`
**Alt name:** `SpecialAbilityChargeSmall`

```
Every occurrence of p1 & p2 were both true.
```

```
NativeDB Added Parameter 4: Any p3
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `BOOL` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_CHARGE_SMALL)

---
## SPECIAL_ABILITY_DEACTIVATE
**Hash:** `0xD6A953C6D1492057` | **Returns:** `void`
**Alt name:** `SpecialAbilityDeactivate`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_DEACTIVATE)

---
## SPECIAL_ABILITY_DEACTIVATE_FAST
**Hash:** `0x9CB5CE07A3968D5A` | **Returns:** `void`
**Alt name:** `SpecialAbilityDeactivateFast`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_DEACTIVATE_FAST)

---
## SPECIAL_ABILITY_DEPLETE_METER
**Hash:** `0x1D506DBBBC51E64B` | **Returns:** `void`
**Alt name:** `SpecialAbilityDepleteMeter`

```
p1 was always true.
```

```
NativeDB Added Parameter 3: Any p2
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_DEPLETE_METER)

---
## SPECIAL_ABILITY_FILL_METER
**Hash:** `0x3DACA8DDC6FD4980` | **Returns:** `void`
**Alt name:** `SpecialAbilityFillMeter`

```
Also known as _RECHARGE_SPECIAL_ABILITY
```

```
NativeDB Added Parameter 3: Any p2
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_FILL_METER)

---
## SPECIAL_ABILITY_LOCK
**Hash:** `0x6A09D0D590A47D13` | **Returns:** `void`
**Alt name:** `SpecialAbilityLock`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `playerModel` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_LOCK)

---
## SPECIAL_ABILITY_RESET
**Hash:** `0x375F0E738F861A94` | **Returns:** `void`
**Alt name:** `SpecialAbilityReset`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_RESET)

---
## SPECIAL_ABILITY_UNLOCK
**Hash:** `0xF145F3BE2EFA9A3B` | **Returns:** `void`
**Alt name:** `SpecialAbilityUnlock`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `playerModel` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SPECIAL_ABILITY_UNLOCK)

---
## START_FIRING_AMNESTY
**Hash:** `0xBF9BD71691857E48` | **Returns:** `void`
**Alt name:** `StartFiringAmnesty`

**Parameters:**
| Name | Type |
|------|------|
| `duration` | `int` |

[View docs](https://cfxnatives.dev/natives/START_FIRING_AMNESTY)

---
## START_PLAYER_TELEPORT
**Hash:** `0xAD15F075A4DA0FDE` | **Returns:** `void`
**Alt name:** `StartPlayerTeleport`

Teleports the player to the given coordinates.

If findCollisionLand is true it will try to find the Z value for you, this however has a timeout of 100 frames.

When trying to find the Z value the native will take longer the higher the difference from the given Z to the ground, this combined with the timeout can cause the teleport to just teleport to the given Z value, so try to estimate the z value, so don't just pass in 1000.0.

Also if you're in a vehicle and teleportWithVehicle is true it will not find the Z value for you.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `teleportWithVehicle` | `BOOL` |
| `findCollisionLand` | `BOOL` |
| `p7` | `BOOL` |

**Example:**
```lua
local coords = vector3(100.0, 100.0, 50.0)
StartPlayerTeleport(PlayerId(), coords.x, coords.y, coords.z, 0.0, false, true, true)

while IsPlayerTeleportActive() do
  Citizen.Wait(0)
end

--- If you would want to make 100% sure the ped is on the ground here you would have to do some additional checks here
--- Easiest would be a simple: GetEntityHeightAboveGround(PlayerPedId())
```

[View docs](https://cfxnatives.dev/natives/START_PLAYER_TELEPORT)

---
## STOP_PLAYER_TELEPORT
**Hash:** `0xC449EDED9D73009C` | **Returns:** `void`
**Alt name:** `StopPlayerTeleport`

```
Disables the player's teleportation  
```

[View docs](https://cfxnatives.dev/natives/STOP_PLAYER_TELEPORT)

---
## SUPPRESS_CRIME_THIS_FRAME
**Hash:** `0x9A987297ED8BD838` | **Returns:** `void`
**Alt name:** `SuppressCrimeThisFrame`

Suppresses a crime for a given player for this frame only.

**Note:** This native needs to be executed inside a thread if a crime is meant to be suppressed for a given amount of time.

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `crimeType` | `int` |

[View docs](https://cfxnatives.dev/natives/SUPPRESS_CRIME_THIS_FRAME)

---

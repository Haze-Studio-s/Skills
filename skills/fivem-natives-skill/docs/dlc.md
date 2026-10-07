# DLC Natives

> 11 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x241FCA5B1AA14F75
**Hash:** `0x241FCA5B1AA14F75` | **Returns:** `BOOL`

```
Only used once in scripts, in maintransition.
maintransition.c4, line ~82432:
if (PED::_7350823473013C02(PLAYER::PLAYER_PED_ID()) && (DECORATOR::_241FCA5B1AA14F75() == 0)) {
    g_2542A5 = a_1; // 'g_2542A5' used in 'building_controller.ysc' for IPL stuff?
    return 1;
}
Likely used solely for the players ped. The function it's in seems to only be used for initialization/quitting. Called among natives to discard scaleforms, disable frontend, fading in/out, etc. Neighboring strings to some calls include "HUD_JOINING", "HUD_QUITTING".
Most likely ARE_*
```

[View docs](https://cfxnatives.dev/natives/0x241FCA5B1AA14F75)

---
## _0x9489659372A81585
**Hash:** `0x9489659372A81585` | **Returns:** `BOOL`

[View docs](https://cfxnatives.dev/natives/0x9489659372A81585)

---
## _0xA213B11DFF526300
**Hash:** `0xA213B11DFF526300` | **Returns:** `BOOL`

[View docs](https://cfxnatives.dev/natives/0xA213B11DFF526300)

---
## _0xC4637A6D03C24CC3
**Hash:** `0xC4637A6D03C24CC3` | **Returns:** `BOOL`

GET_IS_LOADING_\*

```
NativeDB Introduced: v1734
```

[View docs](https://cfxnatives.dev/natives/0xC4637A6D03C24CC3)

---
## _0xF2E07819EF1A5289
**Hash:** `0xF2E07819EF1A5289` | **Returns:** `BOOL`

[View docs](https://cfxnatives.dev/natives/0xF2E07819EF1A5289)

---
## _GET_EXTRA_CONTENT_PACK_HAS_BEEN_INSTALLED
**Hash:** `0x8D30F648014A92B5` | **Returns:** `BOOL`

[View docs](https://cfxnatives.dev/natives/_GET_EXTRA_CONTENT_PACK_HAS_BEEN_INSTALLED)

---
## GET_IS_LOADING_SCREEN_ACTIVE
**Hash:** `0x10D0A8F259E93EC9` | **Returns:** `BOOL`
**Alt name:** `GetIsLoadingScreenActive`

[View docs](https://cfxnatives.dev/natives/GET_IS_LOADING_SCREEN_ACTIVE)

---
## HAS_CLOUD_REQUESTS_FINISHED
**Hash:** `0x46E2B844905BC5F0` | **Returns:** `BOOL`
**Alt name:** `HasCloudRequestsFinished`

```
Sets the value of the specified variable to 0.
Always returns true.
```

**Parameters:**
| Name | Type |
|------|------|
| `variable` | `BOOL*` |
| `unused` | `Any` |

[View docs](https://cfxnatives.dev/natives/HAS_CLOUD_REQUESTS_FINISHED)

---
## IS_DLC_PRESENT
**Hash:** `0x812595A0644CE1DE` | **Returns:** `BOOL`
**Alt name:** `IsDlcPresent`

```
Example:
DLC::IS_DLC_PRESENT($\mpbusiness2\);
($ = gethashkey)
bruteforce these:
0xB119F6D
0x96F02EE6
```

**Parameters:**
| Name | Type |
|------|------|
| `dlcHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/IS_DLC_PRESENT)

---
## ON_ENTER_MP
**Hash:** `0x0888C3502DBBEEF5` | **Returns:** `void`
**Alt name:** `OnEnterMp`

```
This loads the GTA:O dlc map parts (high end garages, apartments).
Works in singleplayer.
In order to use GTA:O heist IPL's you have to call this native with the following params: SET_INSTANCE_PRIORITY_MODE(1);
```

[View docs](https://cfxnatives.dev/natives/ON_ENTER_MP)

---
## ON_ENTER_SP
**Hash:** `0xD7C10C4A637992C9` | **Returns:** `void`
**Alt name:** `OnEnterSp`

```
Unloads GROUP_MAP (GTAO/MP) DLC data and loads GROUP_MAP_SP DLC. Neither are loaded by default, 0888C3502DBBEEF5 is a cognate to this function and loads MP DLC (and unloads SP DLC by extension).
The original (and wrong) definition is below:
This unload the GTA:O DLC map parts (like high end garages/apartments).
Works in singleplayer.
```

[View docs](https://cfxnatives.dev/natives/ON_ENTER_SP)

---

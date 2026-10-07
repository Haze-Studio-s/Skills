# FIRE Natives

> 18 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _GET_ENTITY_INSIDE_EXPLOSION_AREA
**Hash:** `0x14BA4BA137AF6CEC` | **Returns:** `Entity`

```
Returns a handle to the first entity within the a circle spawned inside the 2 points from a radius.
```

**Parameters:**
| Name | Type |
|------|------|
| `explosionType` | `int` |
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/_GET_ENTITY_INSIDE_EXPLOSION_AREA)

---
## _GET_ENTITY_INSIDE_EXPLOSION_SPHERE
**Hash:** `0xB3CD51E3DB86F176` | **Returns:** `Entity`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `explosionType` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/_GET_ENTITY_INSIDE_EXPLOSION_SPHERE)

---
## _SET_FIRE_SPREAD_RATE
**Hash:** `0x8F390AC4155099BA` | **Returns:** `void`

SET_FIRE_\*

```
NativeDB Introduced: v1734
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_FIRE_SPREAD_RATE)

---
## ADD_EXPLOSION
**Hash:** `0xE3AD2BDBAEE269AC` | **Returns:** `void`
**Alt name:** `AddExplosion`

```
NativeDB Added Parameter 9: BOOL noDamage
```

```
BOOL isAudible = If explosion makes a sound.  
BOOL isInvisible = If the explosion is invisible or not.
BOOL noDamage = false: damage || nodamage = true: no damage
```

```cpp
enum eExplosionTag
{
	DONTCARE = -1,
	GRENADE = 0,
	GRENADELAUNCHER = 1,
	STICKYBOMB = 2,
	MOLOTOV = 3,
	ROCKET = 4,
	TANKSHELL = 5,
	HI_OCTANE = 6,
	CAR = 7,
	PLANE = 8,
	PETROL_PUMP = 9,
	BIKE = 10,
	DIR_STEAM = 11,
	DIR_FLAME = 12,
	DIR_WATER_HYDRANT = 13,
	DIR_GAS_CANISTER = 14,
	BOAT = 15,
	SHIP_DESTROY = 16,
	TRUCK = 17,
	BULLET = 18,
	SMOKE_GRENADE_LAUNCHER = 19,
	SMOKE_GRENADE = 20,
	BZGAS = 21,
	FLARE = 22,
	GAS_CANISTER = 23,
	EXTINGUISHER = 24,
	PROGRAMMABLEAR = 25,
	TRAIN = 26,
	BARREL = 27,
	PROPANE = 28,
	BLIMP = 29,
	DIR_FLAME_EXPLODE = 30,
	TANKER = 31,
	PLANE_ROCKET = 32,
	VEHICLE_BULLET = 33,
	GAS_TANK = 34,
	BIRD_CRAP = 35,
	RAILGUN = 36,
	BLIMP2 = 37,
	FIREWORK = 38,
	SNOWBALL = 39,
	PROXMINE = 40,
	VALKYRIE_CANNON = 41,
	AIR_DEFENCE = 42,
	PIPEBOMB = 43,
	VEHICLEMINE = 44,
	EXPLOSIVEAMMO = 45,
	APCSHELL = 46,
	BOMB_CLUSTER = 47,
	BOMB_GAS = 48,
	BOMB_INCENDIARY = 49,
	BOMB_STANDARD = 50,
	TORPEDO = 51,
	TORPEDO_UNDERWATER = 52,
	BOMBUSHKA_CANNON = 53,
	BOMB_CLUSTER_SECONDARY = 54,
	HUNTER_BARRAGE = 55,
	HUNTER_CANNON = 56,
	ROGUE_CANNON = 57,
	MINE_UNDERWATER = 58,
	ORBITAL_CANNON = 59,
	BOMB_STANDARD_WIDE = 60,
	EXPLOSIVEAMMO_SHOTGUN = 61,
	OPPRESSOR2_CANNON = 62,
	MORTAR_KINETIC = 63,
	VEHICLEMINE_KINETIC = 64,
	VEHICLEMINE_EMP = 65,
	VEHICLEMINE_SPIKE = 66,
	VEHICLEMINE_SLICK = 67,
	VEHICLEMINE_TAR = 68,
	SCRIPT_DRONE = 69,
	RAYGUN = 70,
	BURIEDMINE = 71,
	SCRIPT_MISSILE = 72,
	RCTANK_ROCKET = 73,
	BOMB_WATER = 74,
	BOMB_WATER_SECONDARY = 75,
	MINE_CNCSPIKE = 76,
	BZGAS_MK2 = 77,
	FLASHGRENADE = 78,
	STUNGRENADE = 79,
	CNC_KINETICRAM = 80,
	SCRIPT_MISSILE_LARGE = 81,
	SUBMARINE_BIG = 82,
	EMPLAUNCHER_EMP = 83
};
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `explosionType` | `int` |
| `damageScale` | `float` |
| `isAudible` | `BOOL` |
| `isInvisible` | `BOOL` |
| `cameraShake` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_EXPLOSION)

---
## ADD_EXPLOSION_WITH_USER_VFX
**Hash:** `0x36DD3FE58B5E5212` | **Returns:** `void`
**Alt name:** `AddExplosionWithUserVfx`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `explosionType` | `int` |
| `explosionFx` | `Hash` |
| `damageScale` | `float` |
| `isAudible` | `BOOL` |
| `isInvisible` | `BOOL` |
| `cameraShake` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_EXPLOSION_WITH_USER_VFX)

---
## ADD_OWNED_EXPLOSION
**Hash:** `0x172AA1B624FA1013` | **Returns:** `void`
**Alt name:** `AddOwnedExplosion`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `explosionType` | `int` |
| `damageScale` | `float` |
| `isAudible` | `BOOL` |
| `isInvisible` | `BOOL` |
| `cameraShake` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_OWNED_EXPLOSION)

---
## GET_CLOSEST_FIRE_POS
**Hash:** `0x352A9F6BCF90081F` | **Returns:** `BOOL`
**Alt name:** `GetClosestFirePos`

```
Returns TRUE if it found something. FALSE if not.  
```

**Parameters:**
| Name | Type |
|------|------|
| `outPosition` | `Vector3*` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_CLOSEST_FIRE_POS)

---
## GET_NUMBER_OF_FIRES_IN_RANGE
**Hash:** `0x50CAD495A460B305` | **Returns:** `int`
**Alt name:** `GetNumberOfFiresInRange`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_NUMBER_OF_FIRES_IN_RANGE)

---
## IS_ENTITY_ON_FIRE
**Hash:** `0x28D3FED7190D3A0B` | **Returns:** `BOOL`
**Alt name:** `IsEntityOnFire`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/IS_ENTITY_ON_FIRE)

---
## IS_EXPLOSION_ACTIVE_IN_AREA
**Hash:** `0x6070104B699B2EF4` | **Returns:** `BOOL`
**Alt name:** `IsExplosionActiveInArea`

**Parameters:**
| Name | Type |
|------|------|
| `explosionType` | `int` |
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |

[View docs](https://cfxnatives.dev/natives/IS_EXPLOSION_ACTIVE_IN_AREA)

---
## IS_EXPLOSION_IN_ANGLED_AREA
**Hash:** `0xA079A6C51525DC4B` | **Returns:** `BOOL`
**Alt name:** `IsExplosionInAngledArea`

See [`IS_POINT_IN_ANGLED_AREA`](#\_0x2A70BAE8883E4C81) for the definition of an angled area.

**Parameters:**
| Name | Type |
|------|------|
| `explosionType` | `int` |
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `width` | `float` |

[View docs](https://cfxnatives.dev/natives/IS_EXPLOSION_IN_ANGLED_AREA)

---
## IS_EXPLOSION_IN_AREA
**Hash:** `0x2E2EBA0EE7CED0E0` | **Returns:** `BOOL`
**Alt name:** `IsExplosionInArea`

**Parameters:**
| Name | Type |
|------|------|
| `explosionType` | `int` |
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |

[View docs](https://cfxnatives.dev/natives/IS_EXPLOSION_IN_AREA)

---
## IS_EXPLOSION_IN_SPHERE
**Hash:** `0xAB0F816885B0E483` | **Returns:** `BOOL`
**Alt name:** `IsExplosionInSphere`

**Parameters:**
| Name | Type |
|------|------|
| `explosionType` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/IS_EXPLOSION_IN_SPHERE)

---
## REMOVE_SCRIPT_FIRE
**Hash:** `0x7FF548385680673F` | **Returns:** `void`
**Alt name:** `RemoveScriptFire`

**Parameters:**
| Name | Type |
|------|------|
| `fireHandle` | `FireId` |

[View docs](https://cfxnatives.dev/natives/REMOVE_SCRIPT_FIRE)

---
## START_ENTITY_FIRE
**Hash:** `0xF6A9D9708F6F23DF` | **Returns:** `FireId`
**Alt name:** `StartEntityFire`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/START_ENTITY_FIRE)

---
## START_SCRIPT_FIRE
**Hash:** `0x6B83617E04503888` | **Returns:** `FireId`
**Alt name:** `StartScriptFire`

```
Starts a fire:  
xyz: Location of fire  
maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.  
isGasFire: Whether or not the fire is powered by gasoline.  
```

**Parameters:**
| Name | Type |
|------|------|
| `X` | `float` |
| `Y` | `float` |
| `Z` | `float` |
| `maxChildren` | `int` |
| `isGasFire` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/START_SCRIPT_FIRE)

---
## STOP_ENTITY_FIRE
**Hash:** `0x7F0DD2EBBB651AFF` | **Returns:** `void`
**Alt name:** `StopEntityFire`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/STOP_ENTITY_FIRE)

---
## STOP_FIRE_IN_RANGE
**Hash:** `0x056A8A219B8E829F` | **Returns:** `void`
**Alt name:** `StopFireInRange`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/STOP_FIRE_IN_RANGE)

---

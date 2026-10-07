# WEAPON Natives

> 116 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x24C024BA8379A70A
**Hash:** `0x24C024BA8379A70A` | **Returns:** `void`

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x24C024BA8379A70A)

---
## _0x50276EF8172F5F12
**Hash:** `0x50276EF8172F5F12` | **Returns:** `void`

Related to the ped's weapon - flag used when disabling ped vehicle weapon

SET_PED_\*

```
NativeDB Introduced: v1734
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/0x50276EF8172F5F12)

---
## _0x977CA98939E82E4B
**Hash:** `0x977CA98939E82E4B` | **Returns:** `void`

```
SET_WEAPON_OBJECT_*
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponObject` | `Object` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/0x977CA98939E82E4B)

---
## _0xA2C9AC24B4061285
**Hash:** `0xA2C9AC24B4061285` | **Returns:** `int`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/0xA2C9AC24B4061285)

---
## _0xE4DCEC7FD5B739A5
**Hash:** `0xE4DCEC7FD5B739A5` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/0xE4DCEC7FD5B739A5)

---
## _0xE6D2CEDD370FF98E
**Hash:** `0xE6D2CEDD370FF98E` | **Returns:** `void`

```
NativeDB Introduced: v2372
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xE6D2CEDD370FF98E)

---
## _ADD_AMMO_TO_PED_BY_TYPE
**Hash:** `0x2472622CE1F2D45F` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ammoType` | `Hash` |
| `ammo` | `int` |

[View docs](https://cfxnatives.dev/natives/_ADD_AMMO_TO_PED_BY_TYPE)

---
## _CREATE_AIR_DEFENSE_AREA
**Hash:** `0x9DA58CDBF6BDBC08` | **Returns:** `int`

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
| `p8` | `float` |
| `p9` | `float` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_CREATE_AIR_DEFENSE_AREA)

---
## _CREATE_AIR_DEFENSE_SPHERE
**Hash:** `0x91EF34584710BE99` | **Returns:** `int`

Both coordinates are from objects in the decompiled scripts.

Native related to [\_0xECDC202B25E5CF48](#\_0xECDC202B25E5CF48) p1 value. The only weapon hash used in the decompiled scripts is weapon_air_defence_gun. These two natives are used by the yacht script, decompiled scripts suggest it and the weapon hash used (valkyrie's rockets) are also used by yachts.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `float` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_CREATE_AIR_DEFENSE_SPHERE)

---
## _DOES_AIR_DEFENSE_ZONE_EXIST
**Hash:** `0xCD79A550999D7D4F` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `zoneId` | `int` |

[View docs](https://cfxnatives.dev/natives/_DOES_AIR_DEFENSE_ZONE_EXIST)

---
## _FIRE_AIR_DEFENSE_WEAPON
**Hash:** `0x44F1012B69313374` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `zoneId` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/_FIRE_AIR_DEFENSE_WEAPON)

---
## _GET_MAX_AMMO_BY_TYPE
**Hash:** `0x585847C5E4E11709` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ammoType` | `Hash` |
| `ammo` | `int*` |

[View docs](https://cfxnatives.dev/natives/_GET_MAX_AMMO_BY_TYPE)

---
## _GET_PED_AMMO_TYPE_FROM_WEAPON_2
**Hash:** `0xF489B44DD5AF4BD9` | **Returns:** `Hash`

```
Returns the base/default ammo type of the specified ped's specified weapon.

Use GET_PED_AMMO_TYPE_FROM_WEAPON if you want current ammo type (like AMMO_MG_INCENDIARY/AMMO_MG_TRACER while using MkII magazines) and use this if you want base ammo type. (AMMO_MG)
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_GET_PED_AMMO_TYPE_FROM_WEAPON_2)

---
## _GET_PED_WEAPON_LIVERY_COLOR
**Hash:** `0xF0A60040BE558F2D` | **Returns:** `int`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `camoComponentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_GET_PED_WEAPON_LIVERY_COLOR)

---
## _GET_WEAPON_COMPONENT_VARIANT_EXTRA_COMPONENT_COUNT
**Hash:** `0x6558AC7C17BFEF58` | **Returns:** `int`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_GET_WEAPON_COMPONENT_VARIANT_EXTRA_COMPONENT_COUNT)

---
## _GET_WEAPON_COMPONENT_VARIANT_EXTRA_COMPONENT_MODEL
**Hash:** `0x4D1CB8DC40208A17` | **Returns:** `Hash`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `extraComponentIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/_GET_WEAPON_COMPONENT_VARIANT_EXTRA_COMPONENT_MODEL)

---
## _GET_WEAPON_OBJECT_LIVERY_COLOR
**Hash:** `0xB3EA4FEABF41464B` | **Returns:** `int`

**Parameters:**
| Name | Type |
|------|------|
| `weaponObject` | `Object` |
| `camoComponentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_GET_WEAPON_OBJECT_LIVERY_COLOR)

---
## _GET_WEAPON_TIME_BETWEEN_SHOTS
**Hash:** `0x065D2AACAD8CF7A4` | **Returns:** `float`

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_GET_WEAPON_TIME_BETWEEN_SHOTS)

---
## _GIVE_LOADOUT_TO_PED
**Hash:** `0x68F8BE6AF5CDF8A6` | **Returns:** `void`

List of all available loadouts:

```
LOADOUT_DEFAULT
LOADOUT_ANIMAL
LOADOUT_COUGAR
LOADOUT_HILLBILLY
LOADOUT_CULT
LOADOUT_CHEAT_0
LOADOUT_CHEAT_1
LOADOUT_GUARD
LOADOUT_NETWORK_BOT
LOADOUT_LOST
LOADOUT_LOST_L1
LOADOUT_LOST_L2
LOADOUT_LOST_L3
LOADOUT_MEXICAN
LOADOUT_MEXICAN_L1
LOADOUT_MEXICAN_L2
LOADOUT_MEXICAN_L3
LOADOUT_FAMILY
LOADOUT_ASIAN
LOADOUT_SECUR
LOADOUT_POLICE_GUARD
LOADOUT_COP
LOADOUT_COP_L1
LOADOUT_COP_L2
LOADOUT_COP_L3
LOADOUT_SWAT
LOADOUT_SWAT_NO_LASER
LOADOUT_COP_SHOTGUN
LOADOUT_FIREMAN
LOADOUT_COP_HELI
LOADOUT_COP_BOAT
LOADOUT_ARMY
LOADOUT_ANIMAL_RETRIEVER
LOADOUT_SMALL_DOG
LOADOUT_TIGER_SHARK
LOADOUT_HAMMERHEAD_SHARK
LOADOUT_KILLER_WHALE
LOADOUT_BOAR
LOADOUT_PIG
LOADOUT_COYOTE
LOADOUT_DEER
LOADOUT_HEN
LOADOUT_RABBIT
LOADOUT_CAT
LOADOUT_COW
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `loadoutHash` | `Hash` |

**Example:**
```lua
GiveLoadoutToPed(PlayerPedId(), `LOADOUT_FIREMAN`)
```

[View docs](https://cfxnatives.dev/natives/_GIVE_LOADOUT_TO_PED)

---
## _IS_ANY_AIR_DEFENSE_ZONE_INSIDE_SPHERE
**Hash:** `0xDAB963831DBFD3F4` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `SphereIndex` | `int*` |

[View docs](https://cfxnatives.dev/natives/_IS_ANY_AIR_DEFENSE_ZONE_INSIDE_SPHERE)

---
## _REMOVE_AIR_DEFENSE_ZONE
**Hash:** `0x0ABF535877897560` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `zoneId` | `int` |

[View docs](https://cfxnatives.dev/natives/_REMOVE_AIR_DEFENSE_ZONE)

---
## _REMOVE_ALL_AIR_DEFENSE_ZONES
**Hash:** `0x1E45B34ADEBEE48E` | **Returns:** `void`

[View docs](https://cfxnatives.dev/natives/_REMOVE_ALL_AIR_DEFENSE_ZONES)

---
## _SET_CAN_PED_EQUIP_ALL_WEAPONS
**Hash:** `0xEFF296097FF1E509` | **Returns:** `void`

Does the same as [`_SET_CAN_PED_SELECT_WEAPON`](#\_0xB4771B9AAF4E68E4) except for all weapons.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_CAN_PED_EQUIP_ALL_WEAPONS)

---
## _SET_CAN_PED_EQUIP_WEAPON
**Hash:** `0xB4771B9AAF4E68E4` | **Returns:** `void`

Disables selecting the given weapon. Ped isn't forced to put the gun away. However you can't reselect the weapon if you holster then unholster. Weapon is also grayed out on the weapon wheel.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_CAN_PED_EQUIP_WEAPON)

---
## _SET_FLASH_LIGHT_ENABLED
**Hash:** `0x988DB6FE9B3AC000` | **Returns:** `void`

Enables/disables flashlight on ped's weapon.

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_FLASH_LIGHT_ENABLED)

---
## _SET_PED_WEAPON_LIVERY_COLOR
**Hash:** `0x9FE5633880ECD8ED` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `camoComponentHash` | `Hash` |
| `colorIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_PED_WEAPON_LIVERY_COLOR)

---
## _SET_PLAYER_AIR_DEFENSE_ZONE_FLAG
**Hash:** `0xECDC202B25E5CF48` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `player` | `Player` |
| `zoneId` | `int` |
| `enable` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_PLAYER_AIR_DEFENSE_ZONE_FLAG)

---
## _SET_WEAPON_DAMAGE_MODIFIER
**Hash:** `0x4757F00BC6323CFE` | **Returns:** `void`

Changes the weapon damage output by the given multiplier value.
Does NOT need to be called every frame.

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `damageMultiplier` | `float` |

**Example:**
```lua
SetWeaponDamageModifier(`WEAPON_CARBINERIFLE`, 0.8)
```

[View docs](https://cfxnatives.dev/natives/_SET_WEAPON_DAMAGE_MODIFIER)

---
## _SET_WEAPON_EXPLOSION_RADIUS_MULTIPLIER
**Hash:** `0x4AE5AC8B852D642C` | **Returns:** `void`

```
NativeDB Introduced: v2372
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_WEAPON_EXPLOSION_RADIUS_MULTIPLIER)

---
## _SET_WEAPON_OBJECT_LIVERY_COLOR
**Hash:** `0x5DA825A85D0EA6E6` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `weaponObject` | `Object` |
| `camoComponentHash` | `Hash` |
| `colorIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_WEAPON_OBJECT_LIVERY_COLOR)

---
## ADD_AMMO_TO_PED
**Hash:** `0x78F0424C34306220` | **Returns:** `void`
**Alt name:** `AddAmmoToPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammo` | `int` |

[View docs](https://cfxnatives.dev/natives/ADD_AMMO_TO_PED)

---
## CAN_USE_WEAPON_ON_PARACHUTE
**Hash:** `0xBC7BE5ABC0879F74` | **Returns:** `BOOL`
**Alt name:** `CanUseWeaponOnParachute`

```
this returns if you can use the weapon while using a parachute  
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/CAN_USE_WEAPON_ON_PARACHUTE)

---
## CLEAR_ENTITY_LAST_WEAPON_DAMAGE
**Hash:** `0xAC678E40BE7C74D2` | **Returns:** `void`
**Alt name:** `ClearEntityLastWeaponDamage`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/CLEAR_ENTITY_LAST_WEAPON_DAMAGE)

---
## CLEAR_PED_LAST_WEAPON_DAMAGE
**Hash:** `0x0E98F88A24C5F4B8` | **Returns:** `void`
**Alt name:** `ClearPedLastWeaponDamage`

Does NOT seem to work with HAS_PED_BEEN_DAMAGED_BY_WEAPON. Use CLEAR_ENTITY_LAST_WEAPON_DAMAGE and HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON instead.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CLEAR_PED_LAST_WEAPON_DAMAGE)

---
## CREATE_WEAPON_OBJECT
**Hash:** `0x9541D3CF0D398F36` | **Returns:** `Object`
**Alt name:** `CreateWeaponObject`

Create a weapon object that cannot be attached to a ped. If you want to create a weapon object that can be attached to a ped, use [`CREATE_OBJECT`](#\_0x509D5878EB39E842) instead.

```
NativeDB Added Parameter 9: BOOL bRegisterAsNetworkObject
NativeDB Added Parameter 10: BOOL bScriptHostObject
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `ammoCount` | `int` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `bCreateDefaultComponents` | `BOOL` |
| `scale` | `float` |
| `customModelHash` | `int` |

[View docs](https://cfxnatives.dev/natives/CREATE_WEAPON_OBJECT)

---
## DOES_WEAPON_TAKE_WEAPON_COMPONENT
**Hash:** `0x5CEE3DF569CECAB0` | **Returns:** `BOOL`
**Alt name:** `DoesWeaponTakeWeaponComponent`

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/DOES_WEAPON_TAKE_WEAPON_COMPONENT)

---
## ENABLE_LASER_SIGHT_RENDERING
**Hash:** `0xC8B46D7727D864AA` | **Returns:** `void`
**Alt name:** `EnableLaserSightRendering`

```
Enables laser sight on any weapon.  
It doesn't work. Neither on tick nor OnKeyDown  
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ENABLE_LASER_SIGHT_RENDERING)

---
## EXPLODE_PROJECTILES
**Hash:** `0xFC4BD125DE7611E4` | **Returns:** `void`
**Alt name:** `ExplodeProjectiles`

```
WEAPON::EXPLODE_PROJECTILES(PLAYER::PLAYER_PED_ID(), func_221(0x00000003), 0x00000001);  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/EXPLODE_PROJECTILES)

---
## GET_AMMO_IN_CLIP
**Hash:** `0x2E1202248937775C` | **Returns:** `BOOL`
**Alt name:** `GetAmmoInClip`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammo` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_AMMO_IN_CLIP)

---
## GET_AMMO_IN_PED_WEAPON
**Hash:** `0x015A522136D7F951` | **Returns:** `int`
**Alt name:** `GetAmmoInPedWeapon`

```
WEAPON::GET_AMMO_IN_PED_WEAPON(PLAYER::PLAYER_PED_ID(), a_0)  
From decompiled scripts  
Returns total ammo in weapon  
GTALua Example :  
natives.WEAPON.GET_AMMO_IN_PED_WEAPON(plyPed, WeaponHash)  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponhash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_AMMO_IN_PED_WEAPON)

---
## GET_BEST_PED_WEAPON
**Hash:** `0x8483E98E8B888AE2` | **Returns:** `Hash`
**Alt name:** `GetBestPedWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ignoreAmmoCount` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GET_BEST_PED_WEAPON)

---
## GET_CURRENT_PED_VEHICLE_WEAPON
**Hash:** `0x1017582BCD3832DC` | **Returns:** `BOOL`
**Alt name:** `GetCurrentPedVehicleWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash*` |

[View docs](https://cfxnatives.dev/natives/GET_CURRENT_PED_VEHICLE_WEAPON)

---
## GET_CURRENT_PED_WEAPON
**Hash:** `0x3A87E44BB9A01D54` | **Returns:** `BOOL`
**Alt name:** `GetCurrentPedWeapon`

```
The return value seems to indicate returns true if the hash of the weapon object weapon equals the weapon hash.  
p2 seems to be 1 most of the time; and is not implemented.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash*` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/WEAPON~GET_CURRENT_PED_WEAPON)

---
## GET_CURRENT_PED_WEAPON_ENTITY_INDEX
**Hash:** `0x3B390A939AF0B5FC` | **Returns:** `Entity`
**Alt name:** `GetCurrentPedWeaponEntityIndex`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_CURRENT_PED_WEAPON_ENTITY_INDEX)

---
## GET_IS_PED_GADGET_EQUIPPED
**Hash:** `0xF731332072F5156C` | **Returns:** `BOOL`
**Alt name:** `GetIsPedGadgetEquipped`

```
gadgetHash - was always 0xFBAB5776 ("GADGET_PARACHUTE").  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `gadgetHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_IS_PED_GADGET_EQUIPPED)

---
## GET_LOCKON_DISTANCE_OF_CURRENT_PED_WEAPON
**Hash:** `0x840F03E9041E2C9C` | **Returns:** `float`
**Alt name:** `GetLockonDistanceOfCurrentPedWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_LOCKON_DISTANCE_OF_CURRENT_PED_WEAPON)

---
## GET_MAX_AMMO
**Hash:** `0xDC16122C7A20C933` | **Returns:** `BOOL`
**Alt name:** `GetMaxAmmo`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammo` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_MAX_AMMO)

---
## GET_MAX_AMMO_IN_CLIP
**Hash:** `0xA38DCFFCEA8962FA` | **Returns:** `int`
**Alt name:** `GetMaxAmmoInClip`

```
p2 is mostly 1 in the scripts.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GET_MAX_AMMO_IN_CLIP)

---
## GET_MAX_RANGE_OF_CURRENT_PED_WEAPON
**Hash:** `0x814C9D19DFD69679` | **Returns:** `float`
**Alt name:** `GetMaxRangeOfCurrentPedWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_MAX_RANGE_OF_CURRENT_PED_WEAPON)

---
## GET_PED_AMMO_BY_TYPE
**Hash:** `0x39D22031557946C1` | **Returns:** `int`
**Alt name:** `GetPedAmmoByType`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ammoType` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_PED_AMMO_BY_TYPE)

---
## GET_PED_AMMO_TYPE_FROM_WEAPON
**Hash:** `0x7FEAD38B326B9F74` | **Returns:** `Hash`
**Alt name:** `GetPedAmmoTypeFromWeapon`

```
Returns the current ammo type of the specified ped's specified weapon.

MkII magazines will change the return value, like Pistol MkII returning AMMO_PISTOL without any components and returning AMMO_PISTOL_TRACER after Tracer Rounds component is attached.

Use 0xF489B44DD5AF4BD9 if you always want AMMO_PISTOL.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_PED_AMMO_TYPE_FROM_WEAPON)

---
## GET_PED_LAST_WEAPON_IMPACT_COORD
**Hash:** `0x6C4D0409BA1A2BC2` | **Returns:** `BOOL`
**Alt name:** `GetPedLastWeaponImpactCoord`

```
Pass ped. Pass address of Vector3.  
The coord will be put into the Vector3.  
The return will determine whether there was a coord found or not.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `coords` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/GET_PED_LAST_WEAPON_IMPACT_COORD)

---
## GET_PED_WEAPON_TINT_INDEX
**Hash:** `0x2B9EEDC07BD06B9F` | **Returns:** `int`
**Alt name:** `GetPedWeaponTintIndex`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_PED_WEAPON_TINT_INDEX)

---
## GET_PED_WEAPONTYPE_IN_SLOT
**Hash:** `0xEFFED78E9011134D` | **Returns:** `Hash`
**Alt name:** `GetPedWeapontypeInSlot`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponSlot` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_PED_WEAPONTYPE_IN_SLOT)

---
## GET_SELECTED_PED_WEAPON
**Hash:** `0x0A6DB4965674D243` | **Returns:** `Hash`
**Alt name:** `GetSelectedPedWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/WEAPON~GET_SELECTED_PED_WEAPON)

---
## GET_WEAPON_CLIP_SIZE
**Hash:** `0x583BE370B1EC6EB4` | **Returns:** `int`
**Alt name:** `GetWeaponClipSize`

```
// Returns the size of the default weapon component clip.  
Use it like this:  
char cClipSize[32];  
Hash cur;  
if (WEAPON::GET_CURRENT_PED_WEAPON(playerPed, &cur, 1))  
{  
    if (WEAPON::IS_WEAPON_VALID(cur))  
    {  
        int iClipSize = WEAPON::GET_WEAPON_CLIP_SIZE(cur);  
        sprintf_s(cClipSize, "ClipSize: %.d", iClipSize);  
        vDrawString(cClipSize, 0.5f, 0.5f);  
    }  
}  
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_CLIP_SIZE)

---
## GET_WEAPON_COMPONENT_HUD_STATS
**Hash:** `0xB3CAF387AE12E9F8` | **Returns:** `BOOL`
**Alt name:** `GetWeaponComponentHudStats`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `outData` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_HUD_STATS)

---
## GET_WEAPON_COMPONENT_TYPE_MODEL
**Hash:** `0x0DB57B41EC1DB083` | **Returns:** `Hash`
**Alt name:** `GetWeaponComponentTypeModel`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_COMPONENT_TYPE_MODEL)

---
## GET_WEAPON_DAMAGE
**Hash:** `0x3133B907D8B32053` | **Returns:** `float`
**Alt name:** `GetWeaponDamage`

This native does not return damages of weapons from the melee and explosive group.

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_DAMAGE)

---
## GET_WEAPON_DAMAGE_TYPE
**Hash:** `0x3BE0BB12D25FB305` | **Returns:** `int`
**Alt name:** `GetWeaponDamageType`

```
0=unknown (or incorrect weaponHash)  
1= no damage (flare,snowball, petrolcan)  
2=melee  
3=bullet  
4=force ragdoll fall  
5=explosive (RPG, Railgun, grenade)  
6=fire(molotov)  
8=fall(WEAPON_HELI_CRASH)  
10=electric  
11=barbed wire  
12=extinguisher  
13=gas  
14=water cannon(WEAPON_HIT_BY_WATER_CANNON)  
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_DAMAGE_TYPE)

---
## GET_WEAPON_HUD_STATS
**Hash:** `0xD92C739EE34C9EBA` | **Returns:** `BOOL`
**Alt name:** `GetWeaponHudStats`

```
// members should be aligned to 8 bytes by default but it's best to use alignas here, just to be sure  
struct WeaponHudStatsData  
{  
	alignas(8) uint8_t hudDamage; // 0x0000  
	alignas(8) uint8_t hudSpeed; // 0x0008  
	alignas(8) uint8_t hudCapacity; // 0x0010  
	alignas(8) uint8_t hudAccuracy; // 0x0018  
	alignas(8) uint8_t hudRange; // 0x0020  
};  
Usage:  
WeaponHudStatsData data;  
if (GET_WEAPON_HUD_STATS(weaponHash, (Any*)&data))  
{  
    // uint8_t damagePercentage = data.hudDamage etc...  
}  
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `outData` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_HUD_STATS)

---
## GET_WEAPON_OBJECT_FROM_PED
**Hash:** `0xCAE1DC9A0E22A16D` | **Returns:** `Object`
**Alt name:** `GetWeaponObjectFromPed`

```
Drops the current weapon and returns the object  
Unknown behavior when unarmed.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_OBJECT_FROM_PED)

---
## GET_WEAPON_OBJECT_TINT_INDEX
**Hash:** `0xCD183314F7CD2E57` | **Returns:** `int`
**Alt name:** `GetWeaponObjectTintIndex`

**Parameters:**
| Name | Type |
|------|------|
| `weapon` | `Object` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_OBJECT_TINT_INDEX)

---
## GET_WEAPON_TINT_COUNT
**Hash:** `0x5DCF6C5CAB2E9BF7` | **Returns:** `int`
**Alt name:** `GetWeaponTintCount`

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPON_TINT_COUNT)

---
## GET_WEAPONTYPE_GROUP
**Hash:** `0xC3287EE3050FB74C` | **Returns:** `Hash`
**Alt name:** `GetWeapontypeGroup`

Gets and returns the hash of the group of the specified weapon (group names can be found/changed under "Group" in the weapons' meta file).
Note that the group is **not** the same as the location on the weapon wheel.

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

**Example:**
```lua
print(GetWeapontypeGroup(`WEAPON_PISTOL`)) -- Outputs the hash of GROUP_PISTOL
print(GetWeapontypeGroup(`WEAPON_RPG`)) -- Outputs the hash of GROUP_HEAVY
print(GetWeapontypeGroup(`WEAPON_SNOWBALL`)) -- Outputs the hash of GROUP_THROWN
print(GetWeapontypeGroup(`WEAPON_MUSKET`)) -- Outputs the hash of GROUP_SNIPER
print(GetWeapontypeGroup(GetSelectedPedWeapon(PlayerPedId()))) -- Outputs the hash of the currently selected weapon
```

[View docs](https://cfxnatives.dev/natives/GET_WEAPONTYPE_GROUP)

---
## GET_WEAPONTYPE_MODEL
**Hash:** `0xF46CDC33180FDA94` | **Returns:** `Hash`
**Alt name:** `GetWeapontypeModel`

```
Returns the model of any weapon.  
Can also take an ammo hash?  
sub_6663a(&l_115B, WEAPON::GET_WEAPONTYPE_MODEL(${ammo_rpg}));  
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPONTYPE_MODEL)

---
## GET_WEAPONTYPE_SLOT
**Hash:** `0x4215460B9B8B7FA0` | **Returns:** `Hash`
**Alt name:** `GetWeapontypeSlot`

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_WEAPONTYPE_SLOT)

---
## GIVE_DELAYED_WEAPON_TO_PED
**Hash:** `0xB282DC6EBD803C75` | **Returns:** `void`
**Alt name:** `GiveDelayedWeaponToPed`

```
Gives a weapon to PED with a delay, example:
WEAPON::GIVE_DELAYED_WEAPON_TO_PED(PED::PLAYER_PED_ID(), MISC::GET_HASH_KEY("WEAPON_PISTOL"), 1000, false)
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammoCount` | `int` |
| `bForceInHand` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GIVE_DELAYED_WEAPON_TO_PED)

---
## GIVE_WEAPON_COMPONENT_TO_PED
**Hash:** `0xD966D51AA5B28BB9` | **Returns:** `void`
**Alt name:** `GiveWeaponComponentToPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/WEAPON~GIVE_WEAPON_COMPONENT_TO_PED)

---
## GIVE_WEAPON_COMPONENT_TO_WEAPON_OBJECT
**Hash:** `0x33E179436C0B31DB` | **Returns:** `void`
**Alt name:** `GiveWeaponComponentToWeaponObject`

```
addonHash:
(use WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL() to get hash value)
${component_at_ar_flsh}, ${component_at_ar_supp}, ${component_at_pi_flsh}, ${component_at_scope_large}, ${component_at_ar_supp_02}
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponObject` | `Object` |
| `addonHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GIVE_WEAPON_COMPONENT_TO_WEAPON_OBJECT)

---
## GIVE_WEAPON_OBJECT_TO_PED
**Hash:** `0xB1FA61371AF7C4B7` | **Returns:** `void`
**Alt name:** `GiveWeaponObjectToPed`

**Parameters:**
| Name | Type |
|------|------|
| `weaponObject` | `Object` |
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GIVE_WEAPON_OBJECT_TO_PED)

---
## GIVE_WEAPON_TO_PED
**Hash:** `0xBF0FD6E56C964FCB` | **Returns:** `void`
**Alt name:** `GiveWeaponToPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammoCount` | `int` |
| `isHidden` | `BOOL` |
| `bForceInHand` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/WEAPON~GIVE_WEAPON_TO_PED)

---
## HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON
**Hash:** `0x131D401334815E94` | **Returns:** `BOOL`
**Alt name:** `HasEntityBeenDamagedByWeapon`

```
It determines what weapons caused damage:
If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
If you want to define any melee weapon, second parameter=0, third parameter=1.
If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `weaponHash` | `Hash` |
| `weaponType` | `int` |

[View docs](https://cfxnatives.dev/natives/HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON)

---
## HAS_PED_BEEN_DAMAGED_BY_WEAPON
**Hash:** `0x2D343D2219CD027A` | **Returns:** `BOOL`
**Alt name:** `HasPedBeenDamagedByWeapon`

```
It determines what weapons caused damage:  
If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0  
If you want to define any melee weapon, second parameter=0, third parameter=1.  
If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `weaponType` | `int` |

[View docs](https://cfxnatives.dev/natives/HAS_PED_BEEN_DAMAGED_BY_WEAPON)

---
## HAS_PED_GOT_WEAPON
**Hash:** `0x8DECB02F88F428BC` | **Returns:** `BOOL`
**Alt name:** `HasPedGotWeapon`

```
p2 should be FALSE, otherwise it seems to always return FALSE  
Bool does not check if the weapon is current equipped, unfortunately.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/HAS_PED_GOT_WEAPON)

---
## HAS_PED_GOT_WEAPON_COMPONENT
**Hash:** `0xC593212475FAE340` | **Returns:** `BOOL`
**Alt name:** `HasPedGotWeaponComponent`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/HAS_PED_GOT_WEAPON_COMPONENT)

---
## HAS_VEHICLE_GOT_PROJECTILE_ATTACHED
**Hash:** `0x717C8481234E3B88` | **Returns:** `BOOL`
**Alt name:** `HasVehicleGotProjectileAttached`

```
Third Parameter = unsure, but pretty sure it is weapon hash  
--> get_hash_key("weapon_stickybomb")  
Fourth Parameter = unsure, almost always -1  
```

**Parameters:**
| Name | Type |
|------|------|
| `driver` | `Ped` |
| `vehicle` | `Vehicle` |
| `weaponHash` | `Hash` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/HAS_VEHICLE_GOT_PROJECTILE_ATTACHED)

---
## HAS_WEAPON_ASSET_LOADED
**Hash:** `0x36E353271F0E90EE` | **Returns:** `BOOL`
**Alt name:** `HasWeaponAssetLoaded`

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/HAS_WEAPON_ASSET_LOADED)

---
## HAS_WEAPON_GOT_WEAPON_COMPONENT
**Hash:** `0x76A18844E743BF91` | **Returns:** `BOOL`
**Alt name:** `HasWeaponGotWeaponComponent`

**Parameters:**
| Name | Type |
|------|------|
| `weapon` | `Object` |
| `addonHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/HAS_WEAPON_GOT_WEAPON_COMPONENT)

---
## HIDE_PED_WEAPON_FOR_SCRIPTED_CUTSCENE
**Hash:** `0x6F6981D2253C208F` | **Returns:** `void`
**Alt name:** `HidePedWeaponForScriptedCutscene`

```
Hides the players weapon during a cutscene.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/HIDE_PED_WEAPON_FOR_SCRIPTED_CUTSCENE)

---
## IS_FLASH_LIGHT_ON
**Hash:** `0x4B7620C47217126C` | **Returns:** `BOOL`
**Alt name:** `IsFlashLightOn`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/WEAPON~IS_FLASH_LIGHT_ON)

---
## IS_PED_ARMED
**Hash:** `0x475768A975D5AD17` | **Returns:** `BOOL`
**Alt name:** `IsPedArmed`

Checks if the ped is currently equipped with a weapon matching a bit specified using a bitwise-or in typeFlags.

| Bit value | Effect            |
|-----------|-------------------|
| 1         | Melee weapons     |
| 2         | Explosive weapons |
| 4         | Any other weapons |

Not specifying any bit will lead to the native *always* returning 'false', and for example specifying '4 | 2' will check for any weapon except fists and melee weapons.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `typeFlags` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_PED_ARMED)

---
## IS_PED_CURRENT_WEAPON_SILENCED
**Hash:** `0x65F0C5AE05943EC7` | **Returns:** `BOOL`
**Alt name:** `IsPedCurrentWeaponSilenced`

```
This native returns a true or false value.  
Ped ped = The ped whose weapon you want to check.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_CURRENT_WEAPON_SILENCED)

---
## IS_PED_WEAPON_COMPONENT_ACTIVE
**Hash:** `0x0D78DE0572D3969E` | **Returns:** `BOOL`
**Alt name:** `IsPedWeaponComponentActive`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/IS_PED_WEAPON_COMPONENT_ACTIVE)

---
## IS_PED_WEAPON_READY_TO_SHOOT
**Hash:** `0xB80CA294F2F26749` | **Returns:** `BOOL`
**Alt name:** `IsPedWeaponReadyToShoot`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_WEAPON_READY_TO_SHOOT)

---
## IS_WEAPON_VALID
**Hash:** `0x937C71165CF334B3` | **Returns:** `BOOL`
**Alt name:** `IsWeaponValid`

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/IS_WEAPON_VALID)

---
## MAKE_PED_RELOAD
**Hash:** `0x20AE33F3AC9C0033` | **Returns:** `BOOL`
**Alt name:** `MakePedReload`

Forces a ped to reload only if they are able to; if they have a full magazine, they will not reload.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/MAKE_PED_RELOAD)

---
## REFILL_AMMO_INSTANTLY
**Hash:** `0x8C0D57EA686FAD87` | **Returns:** `BOOL`
**Alt name:** `RefillAmmoInstantly`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/REFILL_AMMO_INSTANTLY)

---
## REMOVE_ALL_PED_WEAPONS
**Hash:** `0xF25DF915FA38C5F3` | **Returns:** `void`
**Alt name:** `RemoveAllPedWeapons`

Parameter `p1` does not seem to be used or referenced in game binaries.\
**Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/WEAPON~REMOVE_ALL_PED_WEAPONS)

---
## REMOVE_ALL_PROJECTILES_OF_TYPE
**Hash:** `0xFC52E0F37E446528` | **Returns:** `void`
**Alt name:** `RemoveAllProjectilesOfType`

If `explode` true, then removal is done through exploding the projectile. Basically the same as EXPLODE_PROJECTILES but without defining the owner ped.

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `explode` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/REMOVE_ALL_PROJECTILES_OF_TYPE)

---
## REMOVE_WEAPON_ASSET
**Hash:** `0xAA08EF13F341C8FC` | **Returns:** `void`
**Alt name:** `RemoveWeaponAsset`

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/REMOVE_WEAPON_ASSET)

---
## REMOVE_WEAPON_COMPONENT_FROM_PED
**Hash:** `0x1E8BE90C74FB4C09` | **Returns:** `void`
**Alt name:** `RemoveWeaponComponentFromPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/WEAPON~REMOVE_WEAPON_COMPONENT_FROM_PED)

---
## REMOVE_WEAPON_COMPONENT_FROM_WEAPON_OBJECT
**Hash:** `0xF7D82B0D66777611` | **Returns:** `void`
**Alt name:** `RemoveWeaponComponentFromWeaponObject`

**Parameters:**
| Name | Type |
|------|------|
| `weaponObject` | `Object` |
| `addonHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/REMOVE_WEAPON_COMPONENT_FROM_WEAPON_OBJECT)

---
## REMOVE_WEAPON_FROM_PED
**Hash:** `0x4899CB088EDF59B8` | **Returns:** `void`
**Alt name:** `RemoveWeaponFromPed`

```
This native removes a specified weapon from your selected ped.  
Weapon Hashes: pastebin.com/0wwDZgkF  
Example:  
C#:  
Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);  
C++:  
WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);  
The code above removes the knife from the player.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/WEAPON~REMOVE_WEAPON_FROM_PED)

---
## REQUEST_WEAPON_ASSET
**Hash:** `0x5443438F033E29C3` | **Returns:** `void`
**Alt name:** `RequestWeaponAsset`

```
Nearly every instance of p1 I found was 31. Nearly every instance of p2 I found was 0.  
REQUEST_WEAPON_ASSET(iLocal_1888, 31, 26);  
```

**Parameters:**
| Name | Type |
|------|------|
| `weaponHash` | `Hash` |
| `p1` | `int` |
| `p2` | `int` |

[View docs](https://cfxnatives.dev/natives/REQUEST_WEAPON_ASSET)

---
## REQUEST_WEAPON_HIGH_DETAIL_MODEL
**Hash:** `0x48164DBB970AC3F0` | **Returns:** `void`
**Alt name:** `RequestWeaponHighDetailModel`

**Parameters:**
| Name | Type |
|------|------|
| `weaponObject` | `Entity` |

[View docs](https://cfxnatives.dev/natives/REQUEST_WEAPON_HIGH_DETAIL_MODEL)

---
## SET_AMMO_IN_CLIP
**Hash:** `0xDCD2A934D65CB497` | **Returns:** `BOOL`
**Alt name:** `SetAmmoInClip`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammo` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_AMMO_IN_CLIP)

---
## SET_CURRENT_PED_VEHICLE_WEAPON
**Hash:** `0x75C55983C2C39DAA` | **Returns:** `BOOL`
**Alt name:** `SetCurrentPedVehicleWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_CURRENT_PED_VEHICLE_WEAPON)

---
## SET_CURRENT_PED_WEAPON
**Hash:** `0xADF692B254977C0C` | **Returns:** `void`
**Alt name:** `SetCurrentPedWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `bForceInHand` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/WEAPON~SET_CURRENT_PED_WEAPON)

---
## SET_FLASH_LIGHT_FADE_DISTANCE
**Hash:** `0xCEA66DAD478CD39B` | **Returns:** `Any`
**Alt name:** `SetFlashLightFadeDistance`

**Parameters:**
| Name | Type |
|------|------|
| `distance` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_FLASH_LIGHT_FADE_DISTANCE)

---
## SET_PED_AMMO
**Hash:** `0x14E56BC5B5DB6A19` | **Returns:** `void`
**Alt name:** `SetPedAmmo`

```
NativeDB Added Parameter 4: BOOL p3
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `ammo` | `int` |

[View docs](https://cfxnatives.dev/natives/WEAPON~SET_PED_AMMO)

---
## SET_PED_AMMO_BY_TYPE
**Hash:** `0x5FD1E1F011E76D7E` | **Returns:** `void`
**Alt name:** `SetPedAmmoByType`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ammoType` | `Hash` |
| `ammo` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PED_AMMO_BY_TYPE)

---
## SET_PED_AMMO_TO_DROP
**Hash:** `0xA4EFEF9440A5B0EF` | **Returns:** `void`
**Alt name:** `SetPedAmmoToDrop`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ammo` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PED_AMMO_TO_DROP)

---
## SET_PED_CHANCE_OF_FIRING_BLANKS
**Hash:** `0x8378627201D5497D` | **Returns:** `void`
**Alt name:** `SetPedChanceOfFiringBlanks`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `xBias` | `float` |
| `yBias` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PED_CHANCE_OF_FIRING_BLANKS)

---
## SET_PED_CURRENT_WEAPON_VISIBLE
**Hash:** `0x0725A4CCFDED9A70` | **Returns:** `void`
**Alt name:** `SetPedCurrentWeaponVisible`

```
Has 5 parameters since latest patches.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `visible` | `BOOL` |
| `deselectWeapon` | `BOOL` |
| `p3` | `BOOL` |
| `p4` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_CURRENT_WEAPON_VISIBLE)

---
## SET_PED_DROPS_INVENTORY_WEAPON
**Hash:** `0x208A1888007FC0E6` | **Returns:** `void`
**Alt name:** `SetPedDropsInventoryWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `xOffset` | `float` |
| `yOffset` | `float` |
| `zOffset` | `float` |
| `ammoCount` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PED_DROPS_INVENTORY_WEAPON)

---
## SET_PED_DROPS_WEAPON
**Hash:** `0x6B7513D9966FBEC0` | **Returns:** `void`
**Alt name:** `SetPedDropsWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/SET_PED_DROPS_WEAPON)

---
## SET_PED_DROPS_WEAPONS_WHEN_DEAD
**Hash:** `0x476AE72C1D19D1A8` | **Returns:** `void`
**Alt name:** `SetPedDropsWeaponsWhenDead`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_DROPS_WEAPONS_WHEN_DEAD)

---
## SET_PED_GADGET
**Hash:** `0xD0D7B1E680ED4A1A` | **Returns:** `void`
**Alt name:** `SetPedGadget`

```
p1/gadgetHash was always 0xFBAB5776 ("GADGET_PARACHUTE").  
p2 is always true.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `gadgetHash` | `Hash` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_GADGET)

---
## SET_PED_INFINITE_AMMO
**Hash:** `0x3EDCB0505123623B` | **Returns:** `void`
**Alt name:** `SetPedInfiniteAmmo`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `toggle` | `BOOL` |
| `weaponHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/SET_PED_INFINITE_AMMO)

---
## SET_PED_INFINITE_AMMO_CLIP
**Hash:** `0x183DADC6AA953186` | **Returns:** `void`
**Alt name:** `SetPedInfiniteAmmoClip`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_INFINITE_AMMO_CLIP)

---
## SET_PED_SHOOT_ORDNANCE_WEAPON
**Hash:** `0xB4C8D77C80C0421E` | **Returns:** `Object`
**Alt name:** `SetPedShootOrdnanceWeapon`

```
Returns handle of the projectile.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PED_SHOOT_ORDNANCE_WEAPON)

---
## SET_PED_WEAPON_TINT_INDEX
**Hash:** `0x50969B9B89ED5738` | **Returns:** `void`
**Alt name:** `SetPedWeaponTintIndex`

```
tintIndex can be the following:  
0 : Default/Black
1 : Green
2 : Gold
3 : Pink
4 : Army
5 : LSPD
6 : Orange
7 : Platinum

tintIndex for MK2 weapons :
0 : Classic Black
1 : Classic Gray
2 : Classic Two-Tone
3 : Classic White
4 : Classic Beige
5 : Classic Green
6 : Classic Blue
7 : Classic Earth
8 : Classic Brown & Black
9 : Red Contrast
10 : Blue Contrast
11 : Yellow Contrast
12 : Orange Contrast
13 : Bold Pink
14 : Bold Purple & Yellow
15 : Bold Orange
16 : Bold Green & Purple
17 : Bold Red Features
18 : Bold Green Features
19 : Bold Cyan Features
20 : Bold Yellow Features
21 : Bold Red & White
22 : Bold Blue & White
23 : Metallic Gold
24 : Metallic Platinum
25 : Metallic Gray & Lilac
26 : Metallic Purple & Lime
27 : Metallic Red
28 : Metallic Green
29 : Metallic Blue
30 : Metallic White & Aqua
31 : Metallic Orange & Yellow
32 : Mettalic Red and Yellow
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `weaponHash` | `Hash` |
| `tintIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_PED_WEAPON_TINT_INDEX)

---
## SET_PICKUP_AMMO_AMOUNT_SCALER
**Hash:** `0xE620FD3512A04F18` | **Returns:** `void`
**Alt name:** `SetPickupAmmoAmountScaler`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PICKUP_AMMO_AMOUNT_SCALER)

---
## SET_WEAPON_ANIMATION_OVERRIDE
**Hash:** `0x1055AC3A667F09D9` | **Returns:** `void`
**Alt name:** `SetWeaponAnimationOverride`

Changes the selected ped aiming animation style, you can find the list of animations below.

These are stored in the `weaponanimations.meta` file located in `Grand Theft Auto V\update\update.rpf\common\data\ai\weaponanimations.meta`.

For Lua, it's best if you send the animation using [compile-time jenkins](https://cookbook.fivem.net/2019/06/23/lua-support-for-compile-time-jenkins-hashes/) hashes to avoid overhead. An example is shown down below.

### Animations

```cpp
enum eWeaponAnimationOverrides {
	Ballistic = 0x5534A626,
	Default = 0xE4DF46D5,
	Franklin = 0x44C24694,
	Gang = 0xBC066B98,
	Michael = 0x55932F38,
	MP_F_Freemode = 0xACB10C83,
	Trevor = 0x2737D5AC,
	Hillbilly = 0x8503D409,
	Gang1H = 0x724A7AB7,
	FirstPerson = 0xEE38E8E0,
	FirstPersonAiming = 0xC76297A3,
	FirstPersonRNG = 0xA4FDD608,
	FirstPersonScope = 0x28117C22,
	FirstPersonMichael = 0xEAA2550B,
	FirstPersonMichaelAiming = 0x3E6FF30F,
	FirstPersonMichaelRNG = 0xB7A826C1,
	FirstPersonMichaelScope = 0xC554CF97,
	FirstPersonFranklin = 0xC407163A,
	FirstPersonFranklinAiming = 0x3D4B7B03,
	FirstPersonFranklinRNG = 0xBE79B0B4,
	FirstPersonFranklinScope = 0xAFEA6593,
	FirstPersonTrevor = 0xA65D5351,
	FirstPersonTrevorAiming = 0xF9BE8ED9,
	FirstPersonTrevorRNG = 0xD181ED09,
	FirstPersonTrevorScope = 0x34A67D6D,
	FirstPersonMPFemale = 0x8431583F,
	Fat = 0xC531A409,
	SuperFat = 0x529E5780,
	Female = 0x6D155A1B,
	GangFemale = 0x678ADF82,
}
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `animStyle` | `Hash` |

**Example:**
```lua
-- Works when holding a pistol.
-- 'Hillbilly' also works for most peds.
SetWeaponAnimationOverride(PlayerPedId(), `Gang1H`)
```

[View docs](https://cfxnatives.dev/natives/SET_WEAPON_ANIMATION_OVERRIDE)

---
## SET_WEAPON_OBJECT_TINT_INDEX
**Hash:** `0xF827589017D4E4A9` | **Returns:** `void`
**Alt name:** `SetWeaponObjectTintIndex`

**Parameters:**
| Name | Type |
|------|------|
| `weapon` | `Object` |
| `tintIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_WEAPON_OBJECT_TINT_INDEX)

---

# FILES Natives

> 47 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x6CEBE002E58DEE97
**Hash:** `0x6CEBE002E58DEE97` | **Returns:** `int`

Returns some sort of index/offset for props.
Needs \_GET_NUM_PROPS_FROM_OUTFIT to be called with p3 = true and componentId = -1 first, returns -1 otherwise.

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/0x6CEBE002E58DEE97)

---
## _0x96E2929292A4DB77
**Hash:** `0x96E2929292A4DB77` | **Returns:** `int`

Returns some sort of index/offset for components.
Needs \_GET_NUM_PROPS_FROM_OUTFIT to be called with p3 = false and componentId with the drawable's component slot first, returns -1 otherwise.

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/0x96E2929292A4DB77)

---
## _GET_DLC_WEAPON_COMPONENT_DATA_SP
**Hash:** `0x31D5E073B6F93CDC` | **Returns:** `BOOL`

Same as GET_DLC_WEAPON_COMPONENT_DATA but only works for DLC components that are available in SP.

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `dlcWeaponIndex` | `int` |
| `dlcWeapCompIndex` | `int` |
| `ComponentDataPtr` | `int*` |

[View docs](https://cfxnatives.dev/natives/_GET_DLC_WEAPON_COMPONENT_DATA_SP)

---
## _GET_DLC_WEAPON_DATA_SP
**Hash:** `0x310836EE7129BA33` | **Returns:** `BOOL`

Same as GET_DLC_WEAPON_DATA but only works for DLC weapons that are available in SP.

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `dlcWeaponIndex` | `int` |
| `outData` | `int*` |

[View docs](https://cfxnatives.dev/natives/_GET_DLC_WEAPON_DATA_SP)

---
## _GET_NUM_DLC_WEAPON_COMPONENTS_SP
**Hash:** `0xAD2A7A6DFF55841B` | **Returns:** `int`

Returns the total number of DLC weapon components that are available in SP.

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `dlcWeaponIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/_GET_NUM_DLC_WEAPON_COMPONENTS_SP)

---
## _GET_NUM_DLC_WEAPONS_SP
**Hash:** `0x4160B65AE085B5A9` | **Returns:** `int`

Returns the total number of DLC weapons that are available in SP (availableInSP field in shop_weapon.meta).

```
NativeDB Introduced: v2060
```

[View docs](https://cfxnatives.dev/natives/_GET_NUM_DLC_WEAPONS_SP)

---
## _GET_SHOP_PED_APPAREL_VARIANT_PROP_COUNT
**Hash:** `0xD40AAC51E8E4C663` | **Returns:** `int`

**Parameters:**
| Name | Type |
|------|------|
| `propHash` | `Hash` |

**Example:**
```lua
local iVar16 = GetPedPropIndex(PlayerPedId(), 0) -- helmet prop index
local iVar17 = GetPedPropTextureIndex(PlayerPedId(), 0) -- helmet prop index
local iVar18 = GetHashNameForProp(PlayerPedId(), 0, iVar16, iVar17) -- gets the hash name for the helmet
if N_0xd40aac51e8e4c663(iVar18) > 0 then -- visor variant so can toggle the visor
    BeginTextCommandDisplayHelp("VISOR_TOGGLE") -- Hold ~INPUT_SWITCH_VISOR~ to flip your helmet visor open or closed when on foot or on a motorcycle. You can also set the default state of your Helmet Visor in the Style section of the Interaction menu.
    EndTextCommandDisplayHelp(0, 0, true, 6000)
end
```

[View docs](https://cfxnatives.dev/natives/_GET_SHOP_PED_APPAREL_VARIANT_PROP_COUNT)

---
## _GET_VARIANT_PROP
**Hash:** `0xD81B7F27BC773E66` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `variantPropIndex` | `int` |
| `nameHash` | `Hash*` |
| `enumValue` | `int*` |
| `anchorPoint` | `int*` |

[View docs](https://cfxnatives.dev/natives/_GET_VARIANT_PROP)

---
## _LOAD_CONTENT_CHANGE_SET_GROUP
**Hash:** `0x6BEDF5769AC2DC07` | **Returns:** `void`

```
From fm_deathmatch_creator and fm_race_creator:

FILES::_UNLOAD_CONTENT_CHANGE_SET_GROUP(joaat("GROUP_MAP_SP"));
FILES::_LOAD_CONTENT_CHANGE_SET_GROUP(joaat("GROUP_MAP"));

NativeDB Introduced: v1604
```

**Parameters:**
| Name | Type |
|------|------|
| `hash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_LOAD_CONTENT_CHANGE_SET_GROUP)

---
## _UNLOAD_CONTENT_CHANGE_SET_GROUP
**Hash:** `0x3C1978285B036B25` | **Returns:** `void`

```
From fm_deathmatch_creator and fm_race_creator:

FILES::_UNLOAD_CONTENT_CHANGE_SET_GROUP(joaat("GROUP_MAP_SP"));
FILES::_LOAD_CONTENT_CHANGE_SET_GROUP(joaat("GROUP_MAP"));

NativeDB Introduced: v1604
```

**Parameters:**
| Name | Type |
|------|------|
| `hash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/_UNLOAD_CONTENT_CHANGE_SET_GROUP)

---
## DOES_SHOP_PED_APPAREL_HAVE_RESTRICTION_TAG
**Hash:** `0x341DE7ED1D2A1BFD` | **Returns:** `BOOL`
**Alt name:** `DoesShopPedApparelHaveRestrictionTag`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `restrictionTagHash` | `Hash` |
| `componentId` | `int` |

[View docs](https://cfxnatives.dev/natives/DOES_SHOP_PED_APPAREL_HAVE_RESTRICTION_TAG)

---
## GET_DLC_VEHICLE_DATA
**Hash:** `0x33468EDC08E371F6` | **Returns:** `BOOL`
**Alt name:** `GetDlcVehicleData`

The Second item in the struct `*(Hash *)(outData + 1)` is the vehicle hash.

**Parameters:**
| Name | Type |
|------|------|
| `dlcVehicleIndex` | `int` |
| `outData` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_DLC_VEHICLE_DATA)

---
## GET_DLC_VEHICLE_FLAGS
**Hash:** `0x5549EE11FA22FCF2` | **Returns:** `int`
**Alt name:** `GetDlcVehicleFlags`

**Parameters:**
| Name | Type |
|------|------|
| `dlcVehicleIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_DLC_VEHICLE_FLAGS)

---
## GET_DLC_VEHICLE_MOD_LOCK_HASH
**Hash:** `0xC098810437312FFF` | **Returns:** `Hash`
**Alt name:** `GetDlcVehicleModLockHash`

**Parameters:**
| Name | Type |
|------|------|
| `hash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_DLC_VEHICLE_MOD_LOCK_HASH)

---
## GET_DLC_VEHICLE_MODEL
**Hash:** `0xECC01B7C5763333C` | **Returns:** `Hash`
**Alt name:** `GetDlcVehicleModel`

```
dlcVehicleIndex is 0 to GET_NUM_DLC_VEHICLS()  
```

**Parameters:**
| Name | Type |
|------|------|
| `dlcVehicleIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_DLC_VEHICLE_MODEL)

---
## GET_DLC_WEAPON_COMPONENT_DATA
**Hash:** `0x6CF598A2957C2BF8` | **Returns:** `BOOL`
**Alt name:** `GetDlcWeaponComponentData`

```
p0 seems to be the weapon index  
p1 seems to be the weapon component index  
struct DlcComponentData{  
int attachBone;  
int padding1;  
int bActiveByDefault;  
int padding2;  
int unk;  
int padding3;  
int componentHash;  
int padding4;  
int unk2;  
int padding5;  
int componentCost;  
int padding6;  
char nameLabel[64];  
char descLabel[64];  
};  
```

**Parameters:**
| Name | Type |
|------|------|
| `dlcWeaponIndex` | `int` |
| `dlcWeapCompIndex` | `int` |
| `ComponentDataPtr` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_DLC_WEAPON_COMPONENT_DATA)

---
## GET_DLC_WEAPON_DATA
**Hash:** `0x79923CD21BECE14E` | **Returns:** `BOOL`
**Alt name:** `GetDlcWeaponData`

```
dlcWeaponIndex takes a number from 0 - GET_NUM_DLC_WEAPONS() - 1.  
struct DlcWeaponData  
{  
int emptyCheck; //use DLC1::_IS_DLC_DATA_EMPTY on this  
int padding1;  
int weaponHash;  
int padding2;  
int unk;  
int padding3;  
int weaponCost;  
int padding4;  
int ammoCost;  
int padding5;  
int ammoType;  
int padding6;  
int defaultClipSize;  
int padding7;  
char nameLabel[64];  
char descLabel[64];  
char desc2Label[64]; // usually "the" + name  
char upperCaseNameLabel[64];  
};  
```

**Parameters:**
| Name | Type |
|------|------|
| `dlcWeaponIndex` | `int` |
| `outData` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_DLC_WEAPON_DATA)

---
## GET_FORCED_COMPONENT
**Hash:** `0x6C93ED8C2F74859B` | **Returns:** `void`
**Alt name:** `GetForcedComponent`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `forcedComponentIndex` | `int` |
| `nameHash` | `Hash*` |
| `enumValue` | `int*` |
| `componentType` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_FORCED_COMPONENT)

---
## GET_FORCED_PROP
**Hash:** `0xE1CA84EBF72E691D` | **Returns:** `void`
**Alt name:** `GetForcedProp`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `forcedPropIndex` | `int` |
| `nameHash` | `Hash*` |
| `enumValue` | `int*` |
| `anchorPoint` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_FORCED_PROP)

---
## GET_HASH_NAME_FOR_COMPONENT
**Hash:** `0x0368B3A838070348` | **Returns:** `Hash`
**Alt name:** `GetHashNameForComponent`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `componentId` | `int` |
| `drawableVariant` | `int` |
| `textureVariant` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_HASH_NAME_FOR_COMPONENT)

---
## GET_HASH_NAME_FOR_PROP
**Hash:** `0x5D6160275CAEC8DD` | **Returns:** `Hash`
**Alt name:** `GetHashNameForProp`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `componentId` | `int` |
| `propIndex` | `int` |
| `propTextureIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_HASH_NAME_FOR_PROP)

---
## GET_NUM_DLC_VEHICLES
**Hash:** `0xA7A866D21CD2329B` | **Returns:** `int`
**Alt name:** `GetNumDlcVehicles`

Returns the total number of DLC vehicles.

[View docs](https://cfxnatives.dev/natives/GET_NUM_DLC_VEHICLES)

---
## GET_NUM_DLC_WEAPON_COMPONENTS
**Hash:** `0x405425358A7D61FE` | **Returns:** `int`
**Alt name:** `GetNumDlcWeaponComponents`

```
Returns the total number of DLC weapon components.
```

**Parameters:**
| Name | Type |
|------|------|
| `dlcWeaponIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_NUM_DLC_WEAPON_COMPONENTS)

---
## GET_NUM_DLC_WEAPONS
**Hash:** `0xEE47635F352DA367` | **Returns:** `int`
**Alt name:** `GetNumDlcWeapons`

```
Returns the total number of DLC weapons.
```

[View docs](https://cfxnatives.dev/natives/GET_NUM_DLC_WEAPONS)

---
## GET_NUM_TATTOO_SHOP_DLC_ITEMS
**Hash:** `0x278F76C3B0A8F109` | **Returns:** `int`
**Alt name:** `GetNumTattooShopDlcItems`

```
Character types:
0 = Michael,
1 = Franklin,
2 = Trevor,
3 = MPMale,
4 = MPFemale
```

**Parameters:**
| Name | Type |
|------|------|
| `character` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_NUM_TATTOO_SHOP_DLC_ITEMS)

---
## GET_SHOP_PED_APPAREL_FORCED_COMPONENT_COUNT
**Hash:** `0xC6B9DB42C04DD8C3` | **Returns:** `int`
**Alt name:** `GetShopPedApparelForcedComponentCount`

```
Returns number of possible values of the forcedComponentIndex argument of GET_FORCED_COMPONENT.
```

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_APPAREL_FORCED_COMPONENT_COUNT)

---
## GET_SHOP_PED_APPAREL_FORCED_PROP_COUNT
**Hash:** `0x017568A8182D98A6` | **Returns:** `int`
**Alt name:** `GetShopPedApparelForcedPropCount`

```
Returns number of possible values of the forcedPropIndex argument of GET_FORCED_PROP.
```

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_APPAREL_FORCED_PROP_COUNT)

---
## GET_SHOP_PED_APPAREL_VARIANT_COMPONENT_COUNT
**Hash:** `0xC17AD0E5752BECDA` | **Returns:** `int`
**Alt name:** `GetShopPedApparelVariantComponentCount`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_APPAREL_VARIANT_COMPONENT_COUNT)

---
## GET_SHOP_PED_COMPONENT
**Hash:** `0x74C0E2A57EC66760` | **Returns:** `void`
**Alt name:** `GetShopPedComponent`

```
More info here: https://gist.github.com/root-cause/3b80234367b0c856d60bf5cb4b826f86
```

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `outComponent` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_COMPONENT)

---
## GET_SHOP_PED_OUTFIT
**Hash:** `0xB7952076E444979D` | **Returns:** `void`
**Alt name:** `GetShopPedOutfit`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_OUTFIT)

---
## GET_SHOP_PED_OUTFIT_COMPONENT_VARIANT
**Hash:** `0x19F2A026EDF0013F` | **Returns:** `BOOL`
**Alt name:** `GetShopPedOutfitComponentVariant`

**Parameters:**
| Name | Type |
|------|------|
| `outfit` | `Hash` |
| `slot` | `int` |
| `outComponentVariant` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_OUTFIT_COMPONENT_VARIANT)

---
## GET_SHOP_PED_OUTFIT_LOCATE
**Hash:** `0x073CA26B079F956E` | **Returns:** `int`
**Alt name:** `GetShopPedOutfitLocate`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_OUTFIT_LOCATE)

---
## GET_SHOP_PED_OUTFIT_PROP_VARIANT
**Hash:** `0xA9F9C2E0FDE11CBB` | **Returns:** `BOOL`
**Alt name:** `GetShopPedOutfitPropVariant`

**Parameters:**
| Name | Type |
|------|------|
| `outfitHash` | `Hash` |
| `variantIndex` | `int` |
| `outPropVariant` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_OUTFIT_PROP_VARIANT)

---
## GET_SHOP_PED_PROP
**Hash:** `0x5D5CAFF661DDF6FC` | **Returns:** `void`
**Alt name:** `GetShopPedProp`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `outProp` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_PROP)

---
## GET_SHOP_PED_QUERY_COMPONENT
**Hash:** `0x249E310B2D920699` | **Returns:** `void`
**Alt name:** `GetShopPedQueryComponent`

**Parameters:**
| Name | Type |
|------|------|
| `componentId` | `int` |
| `outComponent` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_QUERY_COMPONENT)

---
## GET_SHOP_PED_QUERY_OUTFIT
**Hash:** `0x6D793F03A631FE56` | **Returns:** `void`
**Alt name:** `GetShopPedQueryOutfit`

```
struct Outfit_s  
{  
	int mask, torso, pants, parachute, shoes, misc1, tops1, armour, crew, tops2, hat, glasses, earpiece;  
	int maskTexture, torsoTexture, pantsTexture, parachuteTexture, shoesTexture, misc1Texture, tops1Texture,   
		armourTexture, crewTexture, tops2Texture, hatTexture, glassesTexture, earpieceTexture;  
};  
```

**Parameters:**
| Name | Type |
|------|------|
| `outfitIndex` | `int` |
| `outfit` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_QUERY_OUTFIT)

---
## GET_SHOP_PED_QUERY_PROP
**Hash:** `0xDE44A00999B2837D` | **Returns:** `void`
**Alt name:** `GetShopPedQueryProp`

**Parameters:**
| Name | Type |
|------|------|
| `componentId` | `int` |
| `outProp` | `Any*` |

[View docs](https://cfxnatives.dev/natives/GET_SHOP_PED_QUERY_PROP)

---
## GET_TATTOO_SHOP_DLC_ITEM_DATA
**Hash:** `0xFF56381874F82086` | **Returns:** `BOOL`
**Alt name:** `GetTattooShopDlcItemData`

Returns data that adheres to the tattoo shop item data that is used in shop_tattoo.meta

Character types:

```cpp
enum eTattooFaction
{
	TATTOO_SP_MICHAEL = 0,
	TATTOO_SP_FRANKLIN = 1,
	TATTOO_SP_TREVOR = 2,
	TATTOO_MP_FM = 3,
	TATTOO_MP_FM_F = 4
}
```

Returned struct properties:

```cpp
struct sTattooShopItemValues
{
	// Lock hash, used with IS_CONTENT_ITEM_LOCKED
	int LockHash;
	// Unique ID of this slot. It can also be 0.
	int Index;
	// Collection hash of this tattoo
	int CollectionHash;
	// Preset hash of this tattoo
	int PresetHash;
	// Cost of this tattoo in shops.
	int Cost;
	// Secondary placement of this tattoo.
	int eFacing;
	// Location of this tattoo on the body (for example, for torso there would be chest upper, stomach, etc)
	int UpdateGroup;
	// This tattoo's name in the form of a text label.
	const char* NameTextLabel;
};
```

**Parameters:**
| Name | Type |
|------|------|
| `characterType` | `int` |
| `decorationIndex` | `int` |
| `outComponent` | `Any*` |

**Example:**
```lua
local function TattooBlobToTable(blob)
    local LockHash = string.unpack('<i4', blob, 1) & 0xFFFFFFFF -- uint (hash)
    local Index = string.unpack('<i4', blob, 9) -- int
    local Collection = string.unpack('<i4', blob, 17) & 0xFFFFFFFF -- uint (hash)
    local Preset = string.unpack('<i4', blob, 25) & 0xFFFFFFFF -- uint (hash)
    local Price = string.unpack('<i4', blob, 33) -- int
    local eFacing = string.unpack('<i4', blob, 41) -- TattooZoneData
    local UpdateGroup = string.unpack('<i4', blob, 49) -- uint (hash)
    local TextLabel = string.unpack('z', blob, 57) -- uint

    return {
        LockHash = LockHash,
        Index = Index,
        Collection = Collection,
        Preset = Preset,
        Price = Price,
        eFacing = eFacing,
        UpdateGroup = UpdateGroup,
        TextLabel = TextLabel
    }
end

function GetTattooDlcItemDataTable(CharacterType, DecorationIndex)
	local blob = string.rep('\0\0\0\0\0\0\0\0', 7+16)
	if not Citizen.InvokeNative(0xFF56381874F82086, CharacterType, DecorationIndex, blob) then return nil end -- Data doesn't exist, return a nil

	return TattooBlobToTable(blob) -- Return the data table
end

local numberOfTattoos = GetNumTattooShopDlcItems(3) -- get all tattoos for mpmale
for i = 0, numberOfTattoos - 1 do
	local tattooData = GetTattooDlcItemDataTable(3, i)
	-- Do stuff with your tattoo data
end
```

[View docs](https://cfxnatives.dev/natives/GET_TATTOO_SHOP_DLC_ITEM_DATA)

---
## GET_TATTOO_SHOP_DLC_ITEM_INDEX
**Hash:** `0x10144267DD22866C` | **Returns:** `int`
**Alt name:** `GetTattooShopDlcItemIndex`

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `character` | `int` |
| `collection` | `int` |
| `preset` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_TATTOO_SHOP_DLC_ITEM_INDEX)

---
## GET_VARIANT_COMPONENT
**Hash:** `0x6E11F282F11863B6` | **Returns:** `void`
**Alt name:** `GetVariantComponent`

**Parameters:**
| Name | Type |
|------|------|
| `componentHash` | `Hash` |
| `variantComponentIndex` | `int` |
| `nameHash` | `Hash*` |
| `enumValue` | `int*` |
| `componentType` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_VARIANT_COMPONENT)

---
## INIT_SHOP_PED_COMPONENT
**Hash:** `0x1E8C308FD312C036` | **Returns:** `void`
**Alt name:** `InitShopPedComponent`

**Parameters:**
| Name | Type |
|------|------|
| `outComponent` | `int*` |

[View docs](https://cfxnatives.dev/natives/INIT_SHOP_PED_COMPONENT)

---
## INIT_SHOP_PED_PROP
**Hash:** `0xEB0A2B758F7B850F` | **Returns:** `void`
**Alt name:** `InitShopPedProp`

**Parameters:**
| Name | Type |
|------|------|
| `outProp` | `int*` |

[View docs](https://cfxnatives.dev/natives/INIT_SHOP_PED_PROP)

---
## IS_CONTENT_ITEM_LOCKED
**Hash:** `0xD4D7B033C3AA243C` | **Returns:** `BOOL`
**Alt name:** `IsContentItemLocked`

**Parameters:**
| Name | Type |
|------|------|
| `itemHash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/IS_CONTENT_ITEM_LOCKED)

---
## IS_DLC_VEHICLE_MOD
**Hash:** `0x0564B9FF9631B82C` | **Returns:** `BOOL`
**Alt name:** `IsDlcVehicleMod`

**Parameters:**
| Name | Type |
|------|------|
| `hash` | `Hash` |

[View docs](https://cfxnatives.dev/natives/IS_DLC_VEHICLE_MOD)

---
## SETUP_SHOP_PED_APPAREL_QUERY
**Hash:** `0x50F457823CE6EB5F` | **Returns:** `int`
**Alt name:** `SetupShopPedApparelQuery`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |
| `p1` | `int` |
| `p2` | `int` |
| `p3` | `int` |

[View docs](https://cfxnatives.dev/natives/SETUP_SHOP_PED_APPAREL_QUERY)

---
## SETUP_SHOP_PED_APPAREL_QUERY_TU
**Hash:** `0x9BDF59818B1E38C1` | **Returns:** `int`
**Alt name:** `SetupShopPedApparelQueryTu`

```
character is 0 for Michael, 1 for Franklin, 2 for Trevor, 3 for freemode male, and 4 for freemode female.
componentId is between 0 and 11 and corresponds to the usual component slots.
p1 could be the outfit number; unsure.
p2 is usually -1; unknown function.
p3 appears to be for selecting between clothes and props; false is used with components/clothes, true is used with props.
p4 is usually -1; unknown function.
componentId is -1 when p3 is true in decompiled scripts.
```

**Parameters:**
| Name | Type |
|------|------|
| `character` | `int` |
| `p1` | `int` |
| `p2` | `int` |
| `p3` | `BOOL` |
| `p4` | `int` |
| `componentId` | `int` |

[View docs](https://cfxnatives.dev/natives/SETUP_SHOP_PED_APPAREL_QUERY_TU)

---
## SETUP_SHOP_PED_OUTFIT_QUERY
**Hash:** `0xF3FBE2D50A6A8C28` | **Returns:** `int`
**Alt name:** `SetupShopPedOutfitQuery`

```
characters
0: Michael
1: Franklin
2: Trevor
3: MPMale
4: MPFemale
```

**Parameters:**
| Name | Type |
|------|------|
| `character` | `int` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SETUP_SHOP_PED_OUTFIT_QUERY)

---

# DATAFILE Natives

> 57 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x6AD0BD5E087866CB
**Hash:** `0x6AD0BD5E087866CB` | **Returns:** `void`

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x6AD0BD5E087866CB)

---
## _0xA6EEF01087181EDD
**Hash:** `0xA6EEF01087181EDD` | **Returns:** `Any`

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xA6EEF01087181EDD)

---
## _0xDBF860CF1DB8E599
**Hash:** `0xDBF860CF1DB8E599` | **Returns:** `Any`

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0xDBF860CF1DB8E599)

---
## DATAARRAY_ADD_BOOL
**Hash:** `0xF8B0F5A43E928C76` | **Returns:** `void`
**Alt name:** `DataarrayAddBool`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `value` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_ADD_BOOL)

---
## DATAARRAY_ADD_DICT
**Hash:** `0x6889498B3E19C797` | **Returns:** `Any*`
**Alt name:** `DataarrayAddDict`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_ADD_DICT)

---
## DATAARRAY_ADD_FLOAT
**Hash:** `0x57A995FD75D37F56` | **Returns:** `void`
**Alt name:** `DataarrayAddFloat`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_ADD_FLOAT)

---
## DATAARRAY_ADD_INT
**Hash:** `0xCABDB751D86FE93B` | **Returns:** `void`
**Alt name:** `DataarrayAddInt`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_ADD_INT)

---
## DATAARRAY_ADD_STRING
**Hash:** `0x2F0661C155AEEEAA` | **Returns:** `void`
**Alt name:** `DataarrayAddString`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `value` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_ADD_STRING)

---
## DATAARRAY_ADD_VECTOR
**Hash:** `0x407F8D034F70F0C2` | **Returns:** `void`
**Alt name:** `DataarrayAddVector`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `valueX` | `float` |
| `valueY` | `float` |
| `valueZ` | `float` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_ADD_VECTOR)

---
## DATAARRAY_GET_BOOL
**Hash:** `0x50C1B2874E50C114` | **Returns:** `BOOL`
**Alt name:** `DataarrayGetBool`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `arrayIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_GET_BOOL)

---
## DATAARRAY_GET_COUNT
**Hash:** `0x065DB281590CEA2D` | **Returns:** `int`
**Alt name:** `DataarrayGetCount`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_GET_COUNT)

---
## DATAARRAY_GET_DICT
**Hash:** `0x8B5FADCC4E3A145F` | **Returns:** `Any*`
**Alt name:** `DataarrayGetDict`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `arrayIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_GET_DICT)

---
## DATAARRAY_GET_FLOAT
**Hash:** `0xC0C527B525D7CFB5` | **Returns:** `float`
**Alt name:** `DataarrayGetFloat`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `arrayIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_GET_FLOAT)

---
## DATAARRAY_GET_INT
**Hash:** `0x3E5AE19425CD74BE` | **Returns:** `int`
**Alt name:** `DataarrayGetInt`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `arrayIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_GET_INT)

---
## DATAARRAY_GET_STRING
**Hash:** `0xD3F2FFEB8D836F52` | **Returns:** `char*`
**Alt name:** `DataarrayGetString`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `arrayIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_GET_STRING)

---
## DATAARRAY_GET_TYPE
**Hash:** `0x3A0014ADB172A3C5` | **Returns:** `int`
**Alt name:** `DataarrayGetType`

```
Types:  
1 = Boolean  
2 = Integer  
3 = Float  
4 = String  
5 = Vector3  
6 = Object  
7 = Array  
```

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `arrayIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_GET_TYPE)

---
## DATAARRAY_GET_VECTOR
**Hash:** `0x8D2064E5B64A628A` | **Returns:** `Vector3`
**Alt name:** `DataarrayGetVector`

**Parameters:**
| Name | Type |
|------|------|
| `arrayData` | `Any*` |
| `arrayIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAARRAY_GET_VECTOR)

---
## DATADICT_CREATE_ARRAY
**Hash:** `0x5B11728527CA6E5F` | **Returns:** `Any*`
**Alt name:** `DatadictCreateArray`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_CREATE_ARRAY)

---
## DATADICT_CREATE_DICT
**Hash:** `0xA358F56F10732EE1` | **Returns:** `Any*`
**Alt name:** `DatadictCreateDict`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_CREATE_DICT)

---
## DATADICT_GET_ARRAY
**Hash:** `0x7A983AA9DA2659ED` | **Returns:** `Any*`
**Alt name:** `DatadictGetArray`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_GET_ARRAY)

---
## DATADICT_GET_BOOL
**Hash:** `0x1186940ED72FFEEC` | **Returns:** `BOOL`
**Alt name:** `DatadictGetBool`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_GET_BOOL)

---
## DATADICT_GET_DICT
**Hash:** `0xB6B9DDC412FCEEE2` | **Returns:** `Any*`
**Alt name:** `DatadictGetDict`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_GET_DICT)

---
## DATADICT_GET_FLOAT
**Hash:** `0x06610343E73B9727` | **Returns:** `float`
**Alt name:** `DatadictGetFloat`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_GET_FLOAT)

---
## DATADICT_GET_INT
**Hash:** `0x78F06F6B1FB5A80C` | **Returns:** `int`
**Alt name:** `DatadictGetInt`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_GET_INT)

---
## DATADICT_GET_STRING
**Hash:** `0x3D2FD9E763B24472` | **Returns:** `char*`
**Alt name:** `DatadictGetString`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_GET_STRING)

---
## DATADICT_GET_TYPE
**Hash:** `0x031C55ED33227371` | **Returns:** `int`
**Alt name:** `DatadictGetType`

```
Types:  
1 = Boolean  
2 = Integer  
3 = Float  
4 = String  
5 = Vector3  
6 = Object  
7 = Array  
```

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_GET_TYPE)

---
## DATADICT_GET_VECTOR
**Hash:** `0x46CD3CB66E0825CC` | **Returns:** `Vector3`
**Alt name:** `DatadictGetVector`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_GET_VECTOR)

---
## DATADICT_SET_BOOL
**Hash:** `0x35124302A556A325` | **Returns:** `void`
**Alt name:** `DatadictSetBool`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |
| `value` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DATADICT_SET_BOOL)

---
## DATADICT_SET_FLOAT
**Hash:** `0xC27E1CC2D795105E` | **Returns:** `void`
**Alt name:** `DatadictSetFloat`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/DATADICT_SET_FLOAT)

---
## DATADICT_SET_INT
**Hash:** `0xE7E035450A7948D5` | **Returns:** `void`
**Alt name:** `DatadictSetInt`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |
| `value` | `int` |

[View docs](https://cfxnatives.dev/natives/DATADICT_SET_INT)

---
## DATADICT_SET_STRING
**Hash:** `0x8FF3847DADD8E30C` | **Returns:** `void`
**Alt name:** `DatadictSetString`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |
| `value` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATADICT_SET_STRING)

---
## DATADICT_SET_VECTOR
**Hash:** `0x4CD49B76338C7DEE` | **Returns:** `void`
**Alt name:** `DatadictSetVector`

**Parameters:**
| Name | Type |
|------|------|
| `objectData` | `Any*` |
| `key` | `char*` |
| `valueX` | `float` |
| `valueY` | `float` |
| `valueZ` | `float` |

[View docs](https://cfxnatives.dev/natives/DATADICT_SET_VECTOR)

---
## DATAFILE_CLEAR_WATCH_LIST
**Hash:** `0x6CC86E78358D5119` | **Returns:** `void`
**Alt name:** `DatafileClearWatchList`

[View docs](https://cfxnatives.dev/natives/DATAFILE_CLEAR_WATCH_LIST)

---
## DATAFILE_CREATE
**Hash:** `0xD27058A1CA2B13EE` | **Returns:** `void`
**Alt name:** `DatafileCreate`

```
NativeDB Added Parameter 1: int p0
```

[View docs](https://cfxnatives.dev/natives/DATAFILE_CREATE)

---
## DATAFILE_DELETE
**Hash:** `0x9AB9C1CFC8862DFB` | **Returns:** `void`
**Alt name:** `DatafileDelete`

```
NativeDB Added Parameter 1: int p0
```

[View docs](https://cfxnatives.dev/natives/DATAFILE_DELETE)

---
## DATAFILE_DELETE_REQUESTED_FILE
**Hash:** `0x8F5EA1C01D65A100` | **Returns:** `BOOL`
**Alt name:** `DatafileDeleteRequestedFile`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_DELETE_REQUESTED_FILE)

---
## DATAFILE_FLUSH_MISSION_HEADER
**Hash:** `0xC55854C7D7274882` | **Returns:** `void`
**Alt name:** `DatafileFlushMissionHeader`

[View docs](https://cfxnatives.dev/natives/DATAFILE_FLUSH_MISSION_HEADER)

---
## DATAFILE_GET_FILE_DICT
**Hash:** `0x906B778CA1DC72B6` | **Returns:** `char*`
**Alt name:** `DatafileGetFileDict`

```
NativeDB Added Parameter 1: int p0
```

[View docs](https://cfxnatives.dev/natives/DATAFILE_GET_FILE_DICT)

---
## DATAFILE_HAS_LOADED_FILE_DATA
**Hash:** `0x15FF52B809DB2353` | **Returns:** `BOOL`
**Alt name:** `DatafileHasLoadedFileData`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_HAS_LOADED_FILE_DATA)

---
## DATAFILE_HAS_VALID_FILE_DATA
**Hash:** `0xF8CC1EBE0B62E29F` | **Returns:** `BOOL`
**Alt name:** `DatafileHasValidFileData`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_HAS_VALID_FILE_DATA)

---
## DATAFILE_IS_SAVE_PENDING
**Hash:** `0xBEDB96A7584AA8CF` | **Returns:** `BOOL`
**Alt name:** `DatafileIsSavePending`

```
Example:  
if (!DATAFILE::_BEDB96A7584AA8CF())  
{  
    if (!g_109E3)  
	{  
        if (((sub_d4f() == 2) == 0) && (!NETWORK::NETWORK_IS_GAME_IN_PROGRESS()))  
{  
            if (NETWORK::NETWORK_IS_CLOUD_AVAILABLE())  
	{  
                g_17A8B = 0;  
            }  
            if (!g_D52C)  
	{  
                sub_730();  
            }  
        }  
    }  
}  
```

[View docs](https://cfxnatives.dev/natives/DATAFILE_IS_SAVE_PENDING)

---
## DATAFILE_IS_VALID_REQUEST_ID
**Hash:** `0xFCCAE5B92A830878` | **Returns:** `BOOL`
**Alt name:** `DatafileIsValidRequestId`

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_IS_VALID_REQUEST_ID)

---
## DATAFILE_LOAD_OFFLINE_UGC
**Hash:** `0xC5238C011AF405E4` | **Returns:** `BOOL`
**Alt name:** `DatafileLoadOfflineUgc`

```
Loads a User-Generated Content (UGC) file. These files can be found in "[GTA5]\data\ugc" and "[GTA5]\common\patch\ugc". They seem to follow a naming convention, most likely of "[name]_[part].ugc". See example below for usage.
Returns whether or not the file was successfully loaded.
Example:
DATAFILE::_LOAD_UGC_FILE("RockstarPlaylists") // loads "rockstarplaylists_00.ugc"
```

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `filename` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_LOAD_OFFLINE_UGC)

---
## DATAFILE_SELECT_ACTIVE_FILE
**Hash:** `0x22DA66936E0FFF37` | **Returns:** `BOOL`
**Alt name:** `DatafileSelectActiveFile`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_SELECT_ACTIVE_FILE)

---
## DATAFILE_SELECT_CREATOR_STATS
**Hash:** `0x01095C95CD46B624` | **Returns:** `BOOL`
**Alt name:** `DatafileSelectCreatorStats`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_SELECT_CREATOR_STATS)

---
## DATAFILE_SELECT_UGC_DATA
**Hash:** `0xA69AC4ADE82B57A4` | **Returns:** `BOOL`
**Alt name:** `DatafileSelectUgcData`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_SELECT_UGC_DATA)

---
## DATAFILE_SELECT_UGC_PLAYER_DATA
**Hash:** `0x52818819057F2B40` | **Returns:** `BOOL`
**Alt name:** `DatafileSelectUgcPlayerData`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_SELECT_UGC_PLAYER_DATA)

---
## DATAFILE_SELECT_UGC_STATS
**Hash:** `0x9CB0BFA7A9342C3D` | **Returns:** `BOOL`
**Alt name:** `DatafileSelectUgcStats`

```
NativeDB Added Parameter 3: Any p2
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_SELECT_UGC_STATS)

---
## DATAFILE_START_SAVE_TO_CLOUD
**Hash:** `0x83BCCE3224735F05` | **Returns:** `BOOL`
**Alt name:** `DatafileStartSaveToCloud`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `filename` | `char*` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_START_SAVE_TO_CLOUD)

---
## DATAFILE_STORE_MISSION_HEADER
**Hash:** `0x2ED61456317B8178` | **Returns:** `void`
**Alt name:** `DatafileStoreMissionHeader`

```
NativeDB Added Parameter 1: int p0
```

[View docs](https://cfxnatives.dev/natives/DATAFILE_STORE_MISSION_HEADER)

---
## DATAFILE_UPDATE_SAVE_TO_CLOUD
**Hash:** `0x4DFDD9EB705F8140` | **Returns:** `BOOL`
**Alt name:** `DatafileUpdateSaveToCloud`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL*` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_UPDATE_SAVE_TO_CLOUD)

---
## DATAFILE_WATCH_REQUEST_ID
**Hash:** `0xAD6875BBC0FC899C` | **Returns:** `void`
**Alt name:** `DatafileWatchRequestId`

```
Adds the given request ID to the watch list.
```

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |

[View docs](https://cfxnatives.dev/natives/DATAFILE_WATCH_REQUEST_ID)

---
## UGC_CREATE_CONTENT
**Hash:** `0xC84527E235FCA219` | **Returns:** `BOOL`
**Alt name:** `UgcCreateContent`

```
NativeDB Added Parameter 8: Any p7
```

**Parameters:**
| Name | Type |
|------|------|
| `data` | `char*` |
| `dataCount` | `int` |
| `contentName` | `char*` |
| `description` | `char*` |
| `tagsCsv` | `char*` |
| `contentTypeName` | `char*` |
| `publish` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/UGC_CREATE_CONTENT)

---
## UGC_CREATE_MISSION
**Hash:** `0xA5EFC3E847D60507` | **Returns:** `BOOL`
**Alt name:** `UgcCreateMission`

```
NativeDB Added Parameter 6: Any p5
```

**Parameters:**
| Name | Type |
|------|------|
| `contentName` | `char*` |
| `description` | `char*` |
| `tagsCsv` | `char*` |
| `contentTypeName` | `char*` |
| `publish` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/UGC_CREATE_MISSION)

---
## UGC_SET_PLAYER_DATA
**Hash:** `0x692D808C34A82143` | **Returns:** `BOOL`
**Alt name:** `UgcSetPlayerData`

```
NativeDB Added Parameter 4: Any p3
```

**Parameters:**
| Name | Type |
|------|------|
| `contentId` | `char*` |
| `rating` | `float` |
| `contentTypeName` | `char*` |

[View docs](https://cfxnatives.dev/natives/UGC_SET_PLAYER_DATA)

---
## UGC_UPDATE_CONTENT
**Hash:** `0x648E7A5434AF7969` | **Returns:** `BOOL`
**Alt name:** `UgcUpdateContent`

```
NativeDB Added Parameter 8: Any p7
```

**Parameters:**
| Name | Type |
|------|------|
| `contentId` | `char*` |
| `data` | `Any*` |
| `dataCount` | `int` |
| `contentName` | `char*` |
| `description` | `char*` |
| `tagsCsv` | `char*` |
| `contentTypeName` | `char*` |

[View docs](https://cfxnatives.dev/natives/UGC_UPDATE_CONTENT)

---
## UGC_UPDATE_MISSION
**Hash:** `0x4645DE9980999E93` | **Returns:** `BOOL`
**Alt name:** `UgcUpdateMission`

```
NativeDB Added Parameter 6: Any p5
```

**Parameters:**
| Name | Type |
|------|------|
| `contentId` | `char*` |
| `contentName` | `char*` |
| `description` | `char*` |
| `tagsCsv` | `char*` |
| `contentTypeName` | `char*` |

[View docs](https://cfxnatives.dev/natives/UGC_UPDATE_MISSION)

---

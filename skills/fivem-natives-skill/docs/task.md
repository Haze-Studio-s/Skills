# TASK Natives

> 304 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0x0FFB3C758E8C07B9
**Hash:** `0x0FFB3C758E8C07B9` | **Returns:** `Any`

Doesn't actually return anything.

```
NativeDB Introduced: v2060
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/0x0FFB3C758E8C07B9)

---
## _0x1F351CF1C6475734
**Hash:** `0x1F351CF1C6475734` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |
| `p4` | `Any` |
| `p5` | `Any` |
| `p6` | `Any` |
| `p7` | `Any` |
| `p8` | `Any` |
| `p9` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x1F351CF1C6475734)

---
## _0x29682E2CCF21E9B5
**Hash:** `0x29682E2CCF21E9B5` | **Returns:** `void`

```
NativeDB Introduced: v1868
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
| `p6` | `Any` |
| `p7` | `Any` |
| `p8` | `Any` |
| `p9` | `Any` |
| `p10` | `Any` |
| `p11` | `Any` |
| `p12` | `Any` |
| `p13` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x29682E2CCF21E9B5)

---
## _0x3E38E28A1D80DDF6
**Hash:** `0x3E38E28A1D80DDF6` | **Returns:** `BOOL`

```
IS_*
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/0x3E38E28A1D80DDF6)

---
## _0x53DDC75BC3AC0A90
**Hash:** `0x53DDC75BC3AC0A90` | **Returns:** `void`

Related to [`_CLEAR_VEHICLE_TASKS`](#\_0xDBBC7A2432524127) and requires more research (e.g., \_CLEAR_VEHICLE_SECONDARY_TASKS).

```
CLEAR_*

NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/0x53DDC75BC3AC0A90)

---
## _0x6100B3CEFD43452E
**Hash:** `0x6100B3CEFD43452E` | **Returns:** `void`

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x6100B3CEFD43452E)

---
## _0x8423541E8B3A1589
**Hash:** `0x8423541E8B3A1589` | **Returns:** `void`

```
NativeDB Introduced: v1493
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x8423541E8B3A1589)

---
## _0x8634CEF2522D987B
**Hash:** `0x8634CEF2522D987B` | **Returns:** `void`

```
NativeDB Introduced: v1493
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/0x8634CEF2522D987B)

---
## _0x9D252648778160DF
**Hash:** `0x9D252648778160DF` | **Returns:** `Any`

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/0x9D252648778160DF)

---
## _0xAB13A5565480B6D9
**Hash:** `0xAB13A5565480B6D9` | **Returns:** `Any`

```
Used only once in the scripts (fm_mission_controller) like so:

TASK::_0xAB13A5565480B6D9(iLocal_3160, "Cutting");

SET_*
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `char*` |

[View docs](https://cfxnatives.dev/natives/0xAB13A5565480B6D9)

---
## _0xFA83CA6776038F64
**Hash:** `0xFA83CA6776038F64` | **Returns:** `void`

```
REMOVE_*

NativeDB Introduced: v1493
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/0xFA83CA6776038F64)

---
## _CLEAR_VEHICLE_TASKS
**Hash:** `0xDBBC7A2432524127` | **Returns:** `void`

```
CLEAR_*

NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/_CLEAR_VEHICLE_TASKS)

---
## _GET_TASK_MOVE_NETWORK_SIGNAL_FLOAT
**Hash:** `0x44AB0B3AFECCE242` | **Returns:** `float`

```
NativeDB Introduced: v1493
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `signalName` | `char*` |

[View docs](https://cfxnatives.dev/natives/_GET_TASK_MOVE_NETWORK_SIGNAL_FLOAT)

---
## _SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT_2
**Hash:** `0x373EF409B82697A3` | **Returns:** `void`

```
NativeDB Introduced: v1493
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `signalName` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/_SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT_2)

---
## _TASK_AGITATED_ACTION
**Hash:** `0x19D1B791CB3670FE` | **Returns:** `void`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ped2` | `Ped` |

[View docs](https://cfxnatives.dev/natives/_TASK_AGITATED_ACTION)

---
## _TASK_HELI_ESCORT_HELI
**Hash:** `0xB385523325077210` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `pilot` | `Ped` |
| `heli1` | `Vehicle` |
| `heli2` | `Vehicle` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |

[View docs](https://cfxnatives.dev/natives/_TASK_HELI_ESCORT_HELI)

---
## _TASK_MOVE_NETWORK_BY_NAME_WITH_INIT_PARAMS
**Hash:** `0x3D45B0B355C5E0C9` | **Returns:** `void`

```
Used only once in the scripts (am_mp_nightclub)
```

```
Used only once in the scripts (am_mp_nightclub)

NativeDB Introduced: v1493
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `char*` |
| `data` | `Any*` |
| `p3` | `float` |
| `p4` | `BOOL` |
| `animDict` | `char*` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/_TASK_MOVE_NETWORK_BY_NAME_WITH_INIT_PARAMS)

---
## _TASK_PLANE_GOTO_PRECISE_VTOL
**Hash:** `0xF7F9DCCA89E7505B` | **Returns:** `void`

```
NativeDB Introduced: v1290
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `p2` | `Any` |
| `p3` | `Any` |
| `p4` | `Any` |
| `p5` | `Any` |
| `p6` | `Any` |
| `p7` | `Any` |
| `p8` | `Any` |
| `p9` | `Any` |

[View docs](https://cfxnatives.dev/natives/_TASK_PLANE_GOTO_PRECISE_VTOL)

---
## _TASK_RAPPEL_DOWN_WALL
**Hash:** `0xEAF66ACDDC794793` | **Returns:** `void`

Attaches a ped to a rope and allows player control to rappel down a wall.
Disables all collisions while on the rope.

NativeDB Introduced: v1868

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `minZ` | `float` |
| `ropeId` | `int` |
| `clipset` | `char*` |
| `p10` | `Any` |

**Example:**
```lua
local coords = vector3(258.68, -3311.5, 45.72)
RopeLoadTextures()
SetEntityCoords(PlayerPedId(), coords - vector3(0, 0, 10.0))
local ropeId = AddRope(coords, -90.0, 90.0, -90.0, 78.0, 7, 78.0, 78.0, 1.2, false, false, true, 10.0, false, 0)
TaskRappelDownWall(PlayerPedId(), coords, coords, -130.0, ropeId, "clipset@anim_heist@hs3f@ig1_rappel@male", 1)
N_0xa1ae736541b0fca3(ropeId, true)
PinRopeVertex(ropeId, (GetRopeVertexCount(ropeId) - 1), coords + vector3(0, 0, 1.0))
RopeSetUpdateOrder(ropeId, 0)
```

[View docs](https://cfxnatives.dev/natives/_TASK_RAPPEL_DOWN_WALL)

---
## _TASK_SUBMARINE_GOTO_AND_STOP
**Hash:** `0xC22B40579A498CA4` | **Returns:** `void`

Used in am_vehicle_spawn.ysc and am_mp_submarine.ysc.
p0 is always 0, p5 is always 1
p1 is the vehicle handle of the submarine. Submarine must have a driver, but the ped handle is not passed to the native.
Speed can be set by calling SET_DRIVE_TASK_CRUISE_SPEED after

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `submarine` | `Vehicle` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `p5` | `Any` |

[View docs](https://cfxnatives.dev/natives/_TASK_SUBMARINE_GOTO_AND_STOP)

---
## _TASK_WANDER_SPECIFIC
**Hash:** `0x6919A2F136426098` | **Returns:** `void`

```
NativeDB Introduced: v1868
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/_TASK_WANDER_SPECIFIC)

---
## ADD_COVER_BLOCKING_AREA
**Hash:** `0x45C597097DD7CB81` | **Returns:** `void`
**Alt name:** `AddCoverBlockingArea`

**Parameters:**
| Name | Type |
|------|------|
| `playerX` | `float` |
| `playerY` | `float` |
| `playerZ` | `float` |
| `radiusX` | `float` |
| `radiusY` | `float` |
| `radiusZ` | `float` |
| `p6` | `BOOL` |
| `p7` | `BOOL` |
| `p8` | `BOOL` |
| `p9` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ADD_COVER_BLOCKING_AREA)

---
## ADD_COVER_POINT
**Hash:** `0xD5C12A75C7B9497F` | **Returns:** `ScrHandle`
**Alt name:** `AddCoverPoint`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `Any` |
| `p5` | `Any` |
| `p6` | `Any` |
| `p7` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/ADD_COVER_POINT)

---
## ADD_PATROL_ROUTE_LINK
**Hash:** `0x23083260DEC3A551` | **Returns:** `void`
**Alt name:** `AddPatrolRouteLink`

connects/links 2 [route nodes](#\_0x8EDF950167586B7C)\
image representing the cyclic example below:\
![image](https://user-images.githubusercontent.com/55803068/188470866-c32c6a9f-a25d-4772-9b18-5be46e2c14a1.png)

**Parameters:**
| Name | Type |
|------|------|
| `id1` | `int` |
| `id2` | `int` |

**Example:**
```lua
-- these lines connect 1,2,3,4,5,6 in a cyclic manner (1 > 2 > 3 > 4 > 5 > 6 > 1)


AddPatrolRouteLink(1,2)
AddPatrolRouteLink(2,3)
AddPatrolRouteLink(3,4)
AddPatrolRouteLink(4,5)
AddPatrolRouteLink(5,6)
AddPatrolRouteLink(6,1)
```

[View docs](https://cfxnatives.dev/natives/ADD_PATROL_ROUTE_LINK)

---
## ADD_PATROL_ROUTE_NODE
**Hash:** `0x8EDF950167586B7C` | **Returns:** `void`
**Alt name:** `AddPatrolRouteNode`

x2,y2 and z2 are the coordinates to which the ped should look at

**Parameters:**
| Name | Type |
|------|------|
| `id` | `int` |
| `guardScenario` | `char*` |
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `waitTime` | `int` |

**Example:**
```lua
-- the guard will go toward vector3(1.0, 1.0, 1.0) coordinates looking toward vector3(0.0, 0.0, 0.0) coordinates waiting 1000ms with the WORLD_HUMAN_GUARD_STAND animation
AddPatrolRouteNode(1, "WORLD_HUMAN_GUARD_STAND", vector3(1.0, 1.0, 1.0), vector3(0.0, 0.0, 0.0), 1000)
```

[View docs](https://cfxnatives.dev/natives/ADD_PATROL_ROUTE_NODE)

---
## ADD_VEHICLE_SUBTASK_ATTACK_COORD
**Hash:** `0x5CF0D8F9BBA0DD75` | **Returns:** `void`
**Alt name:** `AddVehicleSubtaskAttackCoord`

```
x, y, z: offset in world coords from some entity.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_VEHICLE_SUBTASK_ATTACK_COORD)

---
## ADD_VEHICLE_SUBTASK_ATTACK_PED
**Hash:** `0x85F462BADC7DA47F` | **Returns:** `void`
**Alt name:** `AddVehicleSubtaskAttackPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ped2` | `Ped` |

[View docs](https://cfxnatives.dev/natives/ADD_VEHICLE_SUBTASK_ATTACK_PED)

---
## ASSISTED_MOVEMENT_IS_ROUTE_LOADED
**Hash:** `0x60F9A4393A21F741` | **Returns:** `BOOL`
**Alt name:** `AssistedMovementIsRouteLoaded`

**Parameters:**
| Name | Type |
|------|------|
| `route` | `char*` |

[View docs](https://cfxnatives.dev/natives/ASSISTED_MOVEMENT_IS_ROUTE_LOADED)

---
## ASSISTED_MOVEMENT_OVERRIDE_LOAD_DISTANCE_THIS_FRAME
**Hash:** `0x13945951E16EF912` | **Returns:** `void`
**Alt name:** `AssistedMovementOverrideLoadDistanceThisFrame`

**Parameters:**
| Name | Type |
|------|------|
| `dist` | `float` |

[View docs](https://cfxnatives.dev/natives/ASSISTED_MOVEMENT_OVERRIDE_LOAD_DISTANCE_THIS_FRAME)

---
## ASSISTED_MOVEMENT_REMOVE_ROUTE
**Hash:** `0x3548536485DD792B` | **Returns:** `void`
**Alt name:** `AssistedMovementRemoveRoute`

**Parameters:**
| Name | Type |
|------|------|
| `route` | `char*` |

[View docs](https://cfxnatives.dev/natives/ASSISTED_MOVEMENT_REMOVE_ROUTE)

---
## ASSISTED_MOVEMENT_REQUEST_ROUTE
**Hash:** `0x817268968605947A` | **Returns:** `void`
**Alt name:** `AssistedMovementRequestRoute`

```
Routes: "1_FIBStairs", "2_FIBStairs", "3_FIBStairs", "4_FIBStairs", "5_FIBStairs", "5_TowardsFire", "6a_FIBStairs", "7_FIBStairs", "8_FIBStairs", "Aprtmnt_1", "AssAfterLift", "ATM_1", "coroner2", "coroner_stairs", "f5_jimmy1", "fame1", "family5b", "family5c", "Family5d", "family5d", "FIB_Glass1", "FIB_Glass2", "FIB_Glass3", "finaBroute1A", "finalb1st", "finalB1sta", "finalbround", "finalbroute2", "Hairdresser1", "jan_foyet_ft_door", "Jo_3", "Lemar1", "Lemar2", "mansion_1", "Mansion_1", "pols_1", "pols_2", "pols_3", "pols_4", "pols_5", "pols_6", "pols_7", "pols_8", "Pro_S1", "Pro_S1a", "Pro_S2", "Towards_case", "trev_steps", "tunrs1", "tunrs2", "tunrs3", "Wave01457s"  
```

**Parameters:**
| Name | Type |
|------|------|
| `route` | `char*` |

[View docs](https://cfxnatives.dev/natives/ASSISTED_MOVEMENT_REQUEST_ROUTE)

---
## ASSISTED_MOVEMENT_SET_ROUTE_PROPERTIES
**Hash:** `0xD5002D78B7162E1B` | **Returns:** `void`
**Alt name:** `AssistedMovementSetRouteProperties`

**Parameters:**
| Name | Type |
|------|------|
| `route` | `char*` |
| `props` | `int` |

[View docs](https://cfxnatives.dev/natives/ASSISTED_MOVEMENT_SET_ROUTE_PROPERTIES)

---
## CLEAR_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK
**Hash:** `0xC35B5CDB2824CF69` | **Returns:** `void`
**Alt name:** `ClearDrivebyTaskUnderneathDrivingTask`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CLEAR_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK)

---
## CLEAR_PED_SECONDARY_TASK
**Hash:** `0x176CECF6F920D707` | **Returns:** `void`
**Alt name:** `ClearPedSecondaryTask`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK~CLEAR_PED_SECONDARY_TASK)

---
## CLEAR_PED_TASKS
**Hash:** `0xE1EF3C1216AFF2CD` | **Returns:** `void`
**Alt name:** `ClearPedTasks`

Clear a ped's tasks. Stop animations and other tasks created by scripts.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK~CLEAR_PED_TASKS)

---
## CLEAR_PED_TASKS_IMMEDIATELY
**Hash:** `0xAAA34F8A7CB32098` | **Returns:** `void`
**Alt name:** `ClearPedTasksImmediately`

Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK~CLEAR_PED_TASKS_IMMEDIATELY)

---
## CLEAR_SEQUENCE_TASK
**Hash:** `0x3841422E9C488D8C` | **Returns:** `void`
**Alt name:** `ClearSequenceTask`

For an example on how to use this please refer to [OPEN_SEQUENCE_TASK](#\_0xE8854A4326B9E12B)

#### NOTE

If you fail to call [`CLOSE_SEQUENCE_TASK`](#\_0x39E72BC99E6360CB) and `CLEAR_SEQUENCE_TASK` the sequence system can get stuck in a broken state until you restart your client.

**Parameters:**
| Name | Type |
|------|------|
| `taskSequenceId` | `int*` |

[View docs](https://cfxnatives.dev/natives/CLEAR_SEQUENCE_TASK)

---
## CLOSE_PATROL_ROUTE
**Hash:** `0xB043ECA801B8CBC1` | **Returns:** `void`
**Alt name:** `ClosePatrolRoute`

[View docs](https://cfxnatives.dev/natives/CLOSE_PATROL_ROUTE)

---
## CLOSE_SEQUENCE_TASK
**Hash:** `0x39E72BC99E6360CB` | **Returns:** `void`
**Alt name:** `CloseSequenceTask`

For an example on how to use this please refer to [OPEN_SEQUENCE_TASK](#\_0xE8854A4326B9E12B)

#### NOTE

If you fail to call `CLOSE_SEQUENCE_TASK` and [`CLEAR_SEQUENCE_TASK`](#\_0x3841422E9C488D8C) this can get stuck in a broken state until you restart your client.

**Parameters:**
| Name | Type |
|------|------|
| `taskSequenceId` | `int` |

[View docs](https://cfxnatives.dev/natives/CLOSE_SEQUENCE_TASK)

---
## CONTROL_MOUNTED_WEAPON
**Hash:** `0xDCFE42068FE0135A` | **Returns:** `BOOL`
**Alt name:** `ControlMountedWeapon`

```
Forces the ped to use the mounted weapon.  
Returns false if task is not possible.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/CONTROL_MOUNTED_WEAPON)

---
## CREATE_PATROL_ROUTE
**Hash:** `0xAF8A443CCC8018DC` | **Returns:** `void`
**Alt name:** `CreatePatrolRoute`

[View docs](https://cfxnatives.dev/natives/CREATE_PATROL_ROUTE)

---
## DELETE_PATROL_ROUTE
**Hash:** `0x7767DD9D65E91319` | **Returns:** `void`
**Alt name:** `DeletePatrolRoute`

```
From the b617d scripts:
TASK::DELETE_PATROL_ROUTE("miss_merc0");
TASK::DELETE_PATROL_ROUTE("miss_merc1");
TASK::DELETE_PATROL_ROUTE("miss_merc2");
TASK::DELETE_PATROL_ROUTE("miss_dock");
```

**Parameters:**
| Name | Type |
|------|------|
| `patrolRoute` | `char*` |

[View docs](https://cfxnatives.dev/natives/DELETE_PATROL_ROUTE)

---
## DOES_SCENARIO_EXIST_IN_AREA
**Hash:** `0x5A59271FFADD33C1` | **Returns:** `BOOL`
**Alt name:** `DoesScenarioExistInArea`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `b` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DOES_SCENARIO_EXIST_IN_AREA)

---
## DOES_SCENARIO_GROUP_EXIST
**Hash:** `0xF9034C136C9E00D3` | **Returns:** `BOOL`
**Alt name:** `DoesScenarioGroupExist`

```
Occurrences in the b617d scripts:
"ARMY_GUARD",
"ARMY_HELI",
"Cinema_Downtown",
"Cinema_Morningwood",
"Cinema_Textile",
"City_Banks",
"Countryside_Banks",
"DEALERSHIP",
"GRAPESEED_PLANES",
"KORTZ_SECURITY",
"LOST_BIKERS",
"LSA_Planes",
"LSA_Planes",
"MP_POLICE",
"Observatory_Bikers",
"POLICE_POUND1",
"POLICE_POUND2",
"POLICE_POUND3",
"POLICE_POUND4",
"POLICE_POUND5"
"QUARRY",
"SANDY_PLANES",
"SCRAP_SECURITY",
"SEW_MACHINE",
"SOLOMON_GATE",
"Triathlon_1_Start",
"Triathlon_2_Start",
"Triathlon_3_Start"
Sometimes used with IS_SCENARIO_GROUP_ENABLED:
if (TASK::DOES_SCENARIO_GROUP_EXIST("Observatory_Bikers") && (!TASK::IS_SCENARIO_GROUP_ENABLED("Observatory_Bikers"))) {
else if (TASK::IS_SCENARIO_GROUP_ENABLED("BLIMP")) {
```

**Parameters:**
| Name | Type |
|------|------|
| `scenarioGroup` | `char*` |

[View docs](https://cfxnatives.dev/natives/DOES_SCENARIO_GROUP_EXIST)

---
## DOES_SCENARIO_OF_TYPE_EXIST_IN_AREA
**Hash:** `0x0A9D0C2A3BBC86C1` | **Returns:** `BOOL`
**Alt name:** `DoesScenarioOfTypeExistInArea`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `char*` |
| `p4` | `float` |
| `p5` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/DOES_SCENARIO_OF_TYPE_EXIST_IN_AREA)

---
## DOES_SCRIPTED_COVER_POINT_EXIST_AT_COORDS
**Hash:** `0xA98B8E3C088E5A31` | **Returns:** `BOOL`
**Alt name:** `DoesScriptedCoverPointExistAtCoords`

```
Checks if there is a cover point at position  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/DOES_SCRIPTED_COVER_POINT_EXIST_AT_COORDS)

---
## GET_ACTIVE_VEHICLE_MISSION_TYPE
**Hash:** `0x534AEBA6E5ED4CAB` | **Returns:** `int`
**Alt name:** `GetActiveVehicleMissionType`

```
https://alloc8or.re/gta5/doc/enums/eVehicleMissionType.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_ACTIVE_VEHICLE_MISSION_TYPE)

---
## GET_CLIP_SET_FOR_SCRIPTED_GUN_TASK
**Hash:** `0x3A8CADC7D37AACC5` | **Returns:** `char*`
**Alt name:** `GetClipSetForScriptedGunTask`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_CLIP_SET_FOR_SCRIPTED_GUN_TASK)

---
## GET_IS_TASK_ACTIVE
**Hash:** `0xB0760331C7AA4155` | **Returns:** `BOOL`
**Alt name:** `GetIsTaskActive`

```
Task index enum: https://alloc8or.re/gta5/doc/enums/eTaskTypeIndex.txt
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `taskIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_IS_TASK_ACTIVE)

---
## GET_IS_WAYPOINT_RECORDING_LOADED
**Hash:** `0xCB4E8BE8A0063C5D` | **Returns:** `BOOL`
**Alt name:** `GetIsWaypointRecordingLoaded`

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_IS_WAYPOINT_RECORDING_LOADED)

---
## GET_NAVMESH_ROUTE_DISTANCE_REMAINING
**Hash:** `0xC6F5C0BCDC74D62D` | **Returns:** `int`
**Alt name:** `GetNavmeshRouteDistanceRemaining`

```
Looks like the last parameter returns true if the path has been calculated, while the first returns the remaining distance to the end of the path.
Return value of native is the same as GET_NAVMESH_ROUTE_RESULT
Looks like the native returns an int for the path's state:
1 - ???
2 - ???
3 - Finished Generating
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `distanceRemaining` | `float*` |
| `isPathReady` | `BOOL*` |

[View docs](https://cfxnatives.dev/natives/GET_NAVMESH_ROUTE_DISTANCE_REMAINING)

---
## GET_NAVMESH_ROUTE_RESULT
**Hash:** `0x632E831F382A0FA8` | **Returns:** `int`
**Alt name:** `GetNavmeshRouteResult`

See [`GET_NAVMESH_ROUTE_DISTANCE_REMAINING`](#\_0xC6F5C0BCDC74D62D) for more details.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_NAVMESH_ROUTE_RESULT)

---
## GET_PED_DESIRED_MOVE_BLEND_RATIO
**Hash:** `0x8517D4A6CA8513ED` | **Returns:** `float`
**Alt name:** `GetPedDesiredMoveBlendRatio`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_DESIRED_MOVE_BLEND_RATIO)

---
## GET_PED_WAYPOINT_DISTANCE
**Hash:** `0xE6A877C64CAF1BC5` | **Returns:** `float`
**Alt name:** `GetPedWaypointDistance`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/GET_PED_WAYPOINT_DISTANCE)

---
## GET_PED_WAYPOINT_PROGRESS
**Hash:** `0x2720AAA75001E094` | **Returns:** `int`
**Alt name:** `GetPedWaypointProgress`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PED_WAYPOINT_PROGRESS)

---
## GET_PHONE_GESTURE_ANIM_CURRENT_TIME
**Hash:** `0x47619ABE8B268C60` | **Returns:** `float`
**Alt name:** `GetPhoneGestureAnimCurrentTime`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PHONE_GESTURE_ANIM_CURRENT_TIME)

---
## GET_PHONE_GESTURE_ANIM_TOTAL_TIME
**Hash:** `0x1EE0F68A7C25DEC6` | **Returns:** `float`
**Alt name:** `GetPhoneGestureAnimTotalTime`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_PHONE_GESTURE_ANIM_TOTAL_TIME)

---
## GET_SCRIPT_TASK_STATUS
**Hash:** `0x77F1BEB8863288D5` | **Returns:** `int`
**Alt name:** `GetScriptTaskStatus`

Gets the status of a spesifed script-assigned task on the given ped. The return value is always an int between 0-7.

You can set taskHash to `SCRIPT_TASK_ANY` to check if any task is active, it will return 1 for active, 3 for no active.
`SCRIPT_TASK_INVALID` can be similarly used, it returns 7 if there are any active task, and 3 if there are no active tasks.

taskHash list: https://alloc8or.re/gta5/doc/enums/eScriptTaskHash.txt

Returns:

```
0 = WAITING_TO_START_TASK
1 = PERFORMING_TASK
2 = DORMANT_TASK
3 = VACANT_STAGE
7 = TASK_FINISHED_OR_NOT_FOUND
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `taskHash` | `Hash` |

**Example:**
```lua
local playerPed = PlayerPedId()
local coords = GetOffsetFromEntityInWorldCoords(playerPed, 0.0, 6.0, 0.0)
TaskGoStraightToCoord(playerPed, coords, 1.0, 5000, GetEntityHeading(playerPed), 0.15)

Citizen.CreateThread(function()
    while true do
        local taskStatus = GetScriptTaskStatus(PlayerPedId(), "SCRIPT_TASK_GO_STRAIGHT_TO_COORD")
        print(taskStatus)
        if taskStatus == 7 then print("task was finished!"); break end
        Citizen.Wait(250)
    end
end)
```

[View docs](https://cfxnatives.dev/natives/GET_SCRIPT_TASK_STATUS)

---
## GET_SCRIPTED_COVER_POINT_COORDS
**Hash:** `0x594A1028FC2A3E85` | **Returns:** `Vector3`
**Alt name:** `GetScriptedCoverPointCoords`

**Parameters:**
| Name | Type |
|------|------|
| `coverpoint` | `ScrHandle` |

[View docs](https://cfxnatives.dev/natives/GET_SCRIPTED_COVER_POINT_COORDS)

---
## GET_SEQUENCE_PROGRESS
**Hash:** `0x00A9010CFE1E3533` | **Returns:** `int`
**Alt name:** `GetSequenceProgress`

```
returned values:
0 to 7 = task that's currently in progress, 0 meaning the first one.
-1 no task sequence in progress.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_SEQUENCE_PROGRESS)

---
## GET_TASK_MOVE_NETWORK_EVENT
**Hash:** `0xB4F47213DF45A64C` | **Returns:** `BOOL`
**Alt name:** `GetTaskMoveNetworkEvent`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `eventName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_TASK_MOVE_NETWORK_EVENT)

---
## GET_TASK_MOVE_NETWORK_SIGNAL_BOOL
**Hash:** `0xA7FFBA498E4AAF67` | **Returns:** `BOOL`
**Alt name:** `GetTaskMoveNetworkSignalBool`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `signalName` | `char*` |

[View docs](https://cfxnatives.dev/natives/GET_TASK_MOVE_NETWORK_SIGNAL_BOOL)

---
## GET_TASK_MOVE_NETWORK_STATE
**Hash:** `0x717E4D1F2048376D` | **Returns:** `char*`
**Alt name:** `GetTaskMoveNetworkState`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/GET_TASK_MOVE_NETWORK_STATE)

---
## GET_VEHICLE_WAYPOINT_PROGRESS
**Hash:** `0x9824CFF8FC66E159` | **Returns:** `int`
**Alt name:** `GetVehicleWaypointProgress`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WAYPOINT_PROGRESS)

---
## GET_VEHICLE_WAYPOINT_TARGET_POINT
**Hash:** `0x416B62AC8B9E5BBD` | **Returns:** `int`
**Alt name:** `GetVehicleWaypointTargetPoint`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_WAYPOINT_TARGET_POINT)

---
## GET_WAYPOINT_DISTANCE_ALONG_ROUTE
**Hash:** `0xA5B769058763E497` | **Returns:** `float`
**Alt name:** `GetWaypointDistanceAlongRoute`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `char*` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_WAYPOINT_DISTANCE_ALONG_ROUTE)

---
## IS_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK
**Hash:** `0x8785E6E40C7A8818` | **Returns:** `BOOL`
**Alt name:** `IsDrivebyTaskUnderneathDrivingTask`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK)

---
## IS_MOUNTED_WEAPON_TASK_UNDERNEATH_DRIVING_TASK
**Hash:** `0xA320EF046186FA3B` | **Returns:** `BOOL`
**Alt name:** `IsMountedWeaponTaskUnderneathDrivingTask`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_MOUNTED_WEAPON_TASK_UNDERNEATH_DRIVING_TASK)

---
## IS_MOVE_BLEND_RATIO_RUNNING
**Hash:** `0xD4D8636C0199A939` | **Returns:** `BOOL`
**Alt name:** `IsMoveBlendRatioRunning`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_MOVE_BLEND_RATIO_RUNNING)

---
## IS_MOVE_BLEND_RATIO_SPRINTING
**Hash:** `0x24A2AD74FA9814E2` | **Returns:** `BOOL`
**Alt name:** `IsMoveBlendRatioSprinting`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_MOVE_BLEND_RATIO_SPRINTING)

---
## IS_MOVE_BLEND_RATIO_STILL
**Hash:** `0x349CE7B56DAFD95C` | **Returns:** `BOOL`
**Alt name:** `IsMoveBlendRatioStill`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_MOVE_BLEND_RATIO_STILL)

---
## IS_MOVE_BLEND_RATIO_WALKING
**Hash:** `0xF133BBBE91E1691F` | **Returns:** `BOOL`
**Alt name:** `IsMoveBlendRatioWalking`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_MOVE_BLEND_RATIO_WALKING)

---
## IS_PED_ACTIVE_IN_SCENARIO
**Hash:** `0xAA135F9482C82CC3` | **Returns:** `BOOL`
**Alt name:** `IsPedActiveInScenario`

This is a stricter version of [`IS_PED_USING_ANY_SCENARIO`](#\_0x57AB4A3080F85143). It only returns true if the ped is playing the ambient animations associated with the scenario.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_ACTIVE_IN_SCENARIO)

---
## IS_PED_BEING_ARRESTED
**Hash:** `0x90A09F3A45FED688` | **Returns:** `BOOL`
**Alt name:** `IsPedBeingArrested`

```
This function is hard-coded to always return 0.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_BEING_ARRESTED)

---
## IS_PED_CUFFED
**Hash:** `0x74E559B3BC910685` | **Returns:** `BOOL`
**Alt name:** `IsPedCuffed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_CUFFED)

---
## IS_PED_GETTING_UP
**Hash:** `0x2A74E1D5F2F00EEC` | **Returns:** `BOOL`
**Alt name:** `IsPedGettingUp`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_GETTING_UP)

---
## IS_PED_IN_WRITHE
**Hash:** `0xDEB6D52126E7D640` | **Returns:** `BOOL`
**Alt name:** `IsPedInWrithe`

This native checks if a ped is on the ground, in pain from a (gunshot) wound.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_IN_WRITHE)

---
## IS_PED_PLAYING_BASE_CLIP_IN_SCENARIO
**Hash:** `0x621C6E4729388E41` | **Returns:** `BOOL`
**Alt name:** `IsPedPlayingBaseClipInScenario`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_PLAYING_BASE_CLIP_IN_SCENARIO)

---
## IS_PED_RUNNING
**Hash:** `0xC5286FFC176F28A2` | **Returns:** `BOOL`
**Alt name:** `IsPedRunning`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_RUNNING)

---
## IS_PED_RUNNING_ARREST_TASK
**Hash:** `0x3DC52677769B4AE0` | **Returns:** `BOOL`
**Alt name:** `IsPedRunningArrestTask`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_RUNNING_ARREST_TASK)

---
## IS_PED_SPRINTING
**Hash:** `0x57E457CD2C0FC168` | **Returns:** `BOOL`
**Alt name:** `IsPedSprinting`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_SPRINTING)

---
## IS_PED_STILL
**Hash:** `0xAC29253EEF8F0180` | **Returns:** `BOOL`
**Alt name:** `IsPedStill`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_STILL)

---
## IS_PED_STRAFING
**Hash:** `0xE45B7F222DE47E09` | **Returns:** `BOOL`
**Alt name:** `IsPedStrafing`

```
What's strafing?  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK~IS_PED_STRAFING)

---
## IS_PED_WALKING
**Hash:** `0xDE4C184B2B9B071A` | **Returns:** `BOOL`
**Alt name:** `IsPedWalking`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PED_WALKING)

---
## IS_PLAYING_PHONE_GESTURE_ANIM
**Hash:** `0xB8EBB1E9D3588C10` | **Returns:** `BOOL`
**Alt name:** `IsPlayingPhoneGestureAnim`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_PLAYING_PHONE_GESTURE_ANIM)

---
## IS_SCENARIO_GROUP_ENABLED
**Hash:** `0x367A09DED4E05B99` | **Returns:** `BOOL`
**Alt name:** `IsScenarioGroupEnabled`

```
 Occurrences in the b617d scripts:
 "ARMY_GUARD",
 "ARMY_HELI",
 "BLIMP",
 "Cinema_Downtown",
 "Cinema_Morningwood",
 "Cinema_Textile",
 "City_Banks",
 "Countryside_Banks",
 "DEALERSHIP",
 "KORTZ_SECURITY",
 "LSA_Planes",
 "MP_POLICE",
 "Observatory_Bikers",
 "POLICE_POUND1",
 "POLICE_POUND2",
 "POLICE_POUND3",
 "POLICE_POUND4",
 "POLICE_POUND5",
 "Rampage1",
 "SANDY_PLANES",
 "SCRAP_SECURITY",
 "SEW_MACHINE",
 "SOLOMON_GATE"
Sometimes used with DOES_SCENARIO_GROUP_EXIST:
if (TASK::DOES_SCENARIO_GROUP_EXIST("Observatory_Bikers") &&   (!TASK::IS_SCENARIO_GROUP_ENABLED("Observatory_Bikers"))) {
else if (TASK::IS_SCENARIO_GROUP_ENABLED("BLIMP")) {
```

**Parameters:**
| Name | Type |
|------|------|
| `scenarioGroup` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_SCENARIO_GROUP_ENABLED)

---
## IS_SCENARIO_OCCUPIED
**Hash:** `0x788756D73AC2E07C` | **Returns:** `BOOL`
**Alt name:** `IsScenarioOccupied`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/IS_SCENARIO_OCCUPIED)

---
## IS_SCENARIO_TYPE_ENABLED
**Hash:** `0x3A815DB3EA088722` | **Returns:** `BOOL`
**Alt name:** `IsScenarioTypeEnabled`

```
Occurrences in the b617d scripts:
"PROP_HUMAN_SEAT_CHAIR",
"WORLD_HUMAN_DRINKING",
"WORLD_HUMAN_HANG_OUT_STREET",
"WORLD_HUMAN_SMOKING",
"WORLD_MOUNTAIN_LION_WANDER",
"WORLD_HUMAN_DRINKING"
Sometimes used together with MISC::IS_STRING_NULL_OR_EMPTY in the scripts.
scenarioType could be the same as scenarioName, used in for example TASK::TASK_START_SCENARIO_AT_POSITION.
```

**Parameters:**
| Name | Type |
|------|------|
| `scenarioType` | `char*` |

[View docs](https://cfxnatives.dev/natives/IS_SCENARIO_TYPE_ENABLED)

---
## IS_TASK_MOVE_NETWORK_ACTIVE
**Hash:** `0x921CE12C489C4C41` | **Returns:** `BOOL`
**Alt name:** `IsTaskMoveNetworkActive`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_TASK_MOVE_NETWORK_ACTIVE)

---
## IS_TASK_MOVE_NETWORK_READY_FOR_TRANSITION
**Hash:** `0x30ED88D5E0C56A37` | **Returns:** `BOOL`
**Alt name:** `IsTaskMoveNetworkReadyForTransition`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/IS_TASK_MOVE_NETWORK_READY_FOR_TRANSITION)

---
## IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_PED
**Hash:** `0xE03B3F2D3DC59B64` | **Returns:** `BOOL`
**Alt name:** `IsWaypointPlaybackGoingOnForPed`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_PED)

---
## IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_VEHICLE
**Hash:** `0xF5134943EA29868C` | **Returns:** `BOOL`
**Alt name:** `IsWaypointPlaybackGoingOnForVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_VEHICLE)

---
## OPEN_PATROL_ROUTE
**Hash:** `0xA36BFB5EE89F3D82` | **Returns:** `void`
**Alt name:** `OpenPatrolRoute`

```
The patrol route name must starts with "miss_" to be properly created. 

 patrolRoutes found in the b617d scripts:
 "miss_Ass0",
 "miss_Ass1",
 "miss_Ass2",
 "miss_Ass3",
 "miss_Ass4",
 "miss_Ass5",
 "miss_Ass6",
 "MISS_PATROL_6",
 "MISS_PATROL_7",
 "MISS_PATROL_8",
 "MISS_PATROL_9",
 "miss_Tower_01",
 "miss_Tower_02",
 "miss_Tower_03",
 "miss_Tower_04",
 "miss_Tower_05",
 "miss_Tower_06",
 "miss_Tower_07",
 "miss_Tower_08",
 "miss_Tower_10"
```

**Parameters:**
| Name | Type |
|------|------|
| `patrolRoute` | `char*` |

[View docs](https://cfxnatives.dev/natives/OPEN_PATROL_ROUTE)

---
## OPEN_SEQUENCE_TASK
**Hash:** `0xE8854A4326B9E12B` | **Returns:** `void`
**Alt name:** `OpenSequenceTask`

### NOTE

If this returns 0 that means it failed to get a sequence id.

If you fail to call [`CLOSE_SEQUENCE_TASK`](#\_0x39E72BC99E6360CB) and [`CLEAR_SEQUENCE_TASK`](#\_0x3841422E9C488D8C) the sequence system can get stuck in a broken state until you restart your client.

**Parameters:**
| Name | Type |
|------|------|
| `taskSequenceId` | `int*` |

**Example:**
```lua
Citizen.CreateThread(function()
    local animDict = 'timetable@ron@ig_5_p3'

    RequestAnimDict(animDict)
    while not HasAnimDictLoaded(animDict) do
        Wait(0)
    end

    local ped = PlayerPedId()
    local pos = GetEntityCoords(ped)

    -- you can change the model, but you might have to change the offsets below.
    local objModelHash = `prop_bench_01a`

    local obj = GetClosestObjectOfType(pos.x, pos.y, pos.z, 5.0, objModelHash, false, false, false)
    if obj == 0 then
        print("No valid object within range!")
        return
    end

    local tgtPos = GetOffsetFromEntityInWorldCoords(obj, 0.0, -0.7, 0.0)

    -- open the task sequence so we can get our sequence id
    local sequence = OpenSequenceTask()

    -- set our desired heading to be the same as the objects
    local desiredHeading = GetEntityHeading(obj) - 180.0

    -- go to the entities offset
    TaskGoStraightToCoord(nil, tgtPos.x, tgtPos.y, tgtPos.z, 1.0, 4000, desiredHeading, 1.0)

    -- sit on the bench indefinitely (you can change -1 here to however long you want to sit)
    TaskPlayAnim(nil, animDict, 'ig_5_p3_base', 8.0, 8.0, -1, 1)

    -- close the sequence so we can perform it
    CloseSequenceTask(sequence)

    -- perform the sequence, this will not work if the sequence is still open.
    TaskPerformSequence(ped, sequence)

    -- free the sequence slot so it can be re-used
    ClearSequenceTask(sequence)

    -- cleanup the animation dict so the engine can remove it when its no longer needed
    RemoveAnimDict(animDict)
end)
```

[View docs](https://cfxnatives.dev/natives/OPEN_SEQUENCE_TASK)

---
## PED_HAS_USE_SCENARIO_TASK
**Hash:** `0x295E3CCEC879CCD7` | **Returns:** `BOOL`
**Alt name:** `PedHasUseScenarioTask`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/PED_HAS_USE_SCENARIO_TASK)

---
## PLAY_ANIM_ON_RUNNING_SCENARIO
**Hash:** `0x748040460F8DF5DC` | **Returns:** `void`
**Alt name:** `PlayAnimOnRunningScenario`

[Animations list](https://alexguirre.github.io/animations-list/)

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `animDict` | `char*` |
| `animName` | `char*` |

[View docs](https://cfxnatives.dev/natives/PLAY_ANIM_ON_RUNNING_SCENARIO)

---
## PLAY_ENTITY_SCRIPTED_ANIM
**Hash:** `0x77A1EEC547E7FCF1` | **Returns:** `void`
**Alt name:** `PlayEntityScriptedAnim`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any*` |
| `p2` | `Any*` |
| `p3` | `Any*` |
| `p4` | `float` |
| `p5` | `float` |

[View docs](https://cfxnatives.dev/natives/PLAY_ENTITY_SCRIPTED_ANIM)

---
## REMOVE_ALL_COVER_BLOCKING_AREAS
**Hash:** `0xDB6708C0B46F56D8` | **Returns:** `void`
**Alt name:** `RemoveAllCoverBlockingAreas`

[View docs](https://cfxnatives.dev/natives/REMOVE_ALL_COVER_BLOCKING_AREAS)

---
## REMOVE_COVER_POINT
**Hash:** `0xAE287C923D891715` | **Returns:** `void`
**Alt name:** `RemoveCoverPoint`

**Parameters:**
| Name | Type |
|------|------|
| `coverpoint` | `ScrHandle` |

[View docs](https://cfxnatives.dev/natives/REMOVE_COVER_POINT)

---
## REMOVE_WAYPOINT_RECORDING
**Hash:** `0xFF1B8B4AA1C25DC8` | **Returns:** `void`
**Alt name:** `RemoveWaypointRecording`

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/REMOVE_WAYPOINT_RECORDING)

---
## REQUEST_TASK_MOVE_NETWORK_STATE_TRANSITION
**Hash:** `0xD01015C7316AE176` | **Returns:** `BOOL`
**Alt name:** `RequestTaskMoveNetworkStateTransition`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/REQUEST_TASK_MOVE_NETWORK_STATE_TRANSITION)

---
## REQUEST_WAYPOINT_RECORDING
**Hash:** `0x9EEFB62EB27B5792` | **Returns:** `void`
**Alt name:** `RequestWaypointRecording`

```
For a full list of the points, see here: goo.gl/wIH0vn
Max number of loaded recordings is 32.
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |

[View docs](https://cfxnatives.dev/natives/REQUEST_WAYPOINT_RECORDING)

---
## RESET_EXCLUSIVE_SCENARIO_GROUP
**Hash:** `0x4202BBCB8684563D` | **Returns:** `void`
**Alt name:** `ResetExclusiveScenarioGroup`

[View docs](https://cfxnatives.dev/natives/RESET_EXCLUSIVE_SCENARIO_GROUP)

---
## RESET_SCENARIO_GROUPS_ENABLED
**Hash:** `0xDD902D0349AFAD3A` | **Returns:** `void`
**Alt name:** `ResetScenarioGroupsEnabled`

[View docs](https://cfxnatives.dev/natives/RESET_SCENARIO_GROUPS_ENABLED)

---
## RESET_SCENARIO_TYPES_ENABLED
**Hash:** `0x0D40EE2A7F2B2D6D` | **Returns:** `void`
**Alt name:** `ResetScenarioTypesEnabled`

[View docs](https://cfxnatives.dev/natives/RESET_SCENARIO_TYPES_ENABLED)

---
## SET_ANIM_LOOPED
**Hash:** `0x70033C3CC29A1FF4` | **Returns:** `void`
**Alt name:** `SetAnimLooped`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `BOOL` |
| `p2` | `Any` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ANIM_LOOPED)

---
## SET_ANIM_PHASE
**Hash:** `0xDDF3CB5A0A4C0B49` | **Returns:** `void`
**Alt name:** `SetAnimPhase`

```
NativeDB Introduced: v2372
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `p1` | `float` |
| `p2` | `Any` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ANIM_PHASE)

---
## SET_ANIM_RATE
**Hash:** `0x032D49C5E359C847` | **Returns:** `void`
**Alt name:** `SetAnimRate`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `Any` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ANIM_RATE)

---
## SET_ANIM_WEIGHT
**Hash:** `0x207F1A47C0342F48` | **Returns:** `void`
**Alt name:** `SetAnimWeight`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `Any` |
| `p3` | `Any` |
| `p4` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ANIM_WEIGHT)

---
## SET_DRIVE_TASK_CRUISE_SPEED
**Hash:** `0x5C9B84BD7D31D908` | **Returns:** `void`
**Alt name:** `SetDriveTaskCruiseSpeed`

**Parameters:**
| Name | Type |
|------|------|
| `driver` | `Ped` |
| `cruiseSpeed` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_DRIVE_TASK_CRUISE_SPEED)

---
## SET_DRIVE_TASK_DRIVING_STYLE
**Hash:** `0xDACE1BE37D88AF67` | **Returns:** `void`
**Alt name:** `SetDriveTaskDrivingStyle`

Sets the driving style for a ped currently performing a driving task.

Each flag in the `eVehicleDrivingFlags` enum can be combined to create a driving style, with each enabling or disabling a specific driving behavior. The driving style can be set to one of the predefined driving styles, or a custom driving style can be created by combining the flags. This can be done by using the bitwise OR operator (`|`) to combine the flags or by adding the decimal values of the flags together.

```cpp
enum eVehicleDrivingFlags
{
  None = 0,
  StopForVehicles = 1,
  StopForPeds = 2,
  SwerveAroundAllVehicles = 4,
  SteerAroundStationaryVehicles = 8,
  SteerAroundPeds = 16,
  SteerAroundObjects = 32,
  DontSteerAroundPlayerPed = 64,
  StopAtTrafficLights = 128,
  GoOffRoadWhenAvoiding = 256,
  AllowGoingWrongWay = 512,
  Reverse = 1024,
  UseWanderFallbackInsteadOfStraightLine = 2048,
  AvoidRestrictedAreas = 4096,
  PreventBackgroundPathfinding = 8192,
  AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
  UseShortCutLinks = 262144,
  ChangeLanesAroundObstructions = 524288,
  UseSwitchedOffNodes = 2097152,
  PreferNavmeshRoute = 4194304,
  PlaneTaxiMode = 8388608,
  ForceStraightLine = 16777216,
  UseStringPullingAtJunctions = 33554432,
  TryToAvoidHighways = 536870912,
  ForceJoinInRoadDirection = 1073741824,
  StopAtDestination = 2147483648,
  // StopForVehicles | StopForPeds | SteerAroundObjects | SteerAroundStationaryVehicles | StopAtTrafficLights | UseShortCutLinks | ChangeLanesAroundObstructions
  DrivingModeStopForVehicles = 786603,
  // StopForVehicles | StopForPeds | StopAtTrafficLights | UseShortCutLinks
  DrivingModeStopForVehiclesStrict = 262275,
  // SwerveAroundAllVehicles | SteerAroundObjects | UseShortCutLinks | ChangeLanesAroundObstructions | StopForVehicles
  DrivingModeAvoidVehicles = 786469,
  // SwerveAroundAllVehicles | SteerAroundObjects | UseShortCutLinks | ChangeLanesAroundObstructions
  DrivingModeAvoidVehiclesReckless = 786468,
  // StopForVehicles | SteerAroundStationaryVehicles | StopForPeds | SteerAroundObjects | UseShortCutLinks | ChangeLanesAroundObstructions
  DrivingModeStopForVehiclesIgnoreLights = 786475,
  // SwerveAroundAllVehicles | StopAtTrafficLights | SteerAroundObjects | UseShortCutLinks | ChangeLanesAroundObstructions | StopForVehicles
  DrivingModeAvoidVehiclesObeyLights = 786597,
  // SwerveAroundAllVehicles | StopAtTrafficLights | StopForPeds | SteerAroundObjects | UseShortCutLinks | ChangeLanesAroundObstructions | StopForVehicles
  DrivingModeAvoidVehiclesStopForPedsObeyLights = 786599,
}
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `drivingStyle` | `int` |

**Example:**
```lua
local vehicle_model = `adder`
RequestModel(vehicle_model)
repeat Wait(0) until HasModelLoaded(vehicle_model)

-- Player needs to be in a vehicle for this to work
local ped = PlayerPedId()
local coords = GetEntityCoords(ped) - GetEntityForwardVector(ped) * 15.0
local vehicle = CreateVehicle(vehicle_model, coords.x, coords.y, coords.z, GetEntityHeading(ped), true, false)
 -- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(vehicle_model)

local ped_model = `a_m_m_skater_01`
RequestModel(ped_model)
repeat Wait(0) until HasModelLoaded(ped_model)

local driver = CreatePedInsideVehicle(vehicle, 0, ped_model, -1, true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(ped_model)

TaskVehicleChase(driver, ped)
SetDriveTaskDrivingStyle(driver, 786468)
-- Driving Style: DrivingModeAvoidVehiclesReckless
SetPedKeepTask(driver, true)
```

[View docs](https://cfxnatives.dev/natives/SET_DRIVE_TASK_DRIVING_STYLE)

---
## SET_DRIVE_TASK_MAX_CRUISE_SPEED
**Hash:** `0x404A5AA9B9F0B746` | **Returns:** `void`
**Alt name:** `SetDriveTaskMaxCruiseSpeed`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_DRIVE_TASK_MAX_CRUISE_SPEED)

---
## SET_DRIVEBY_TASK_TARGET
**Hash:** `0xE5B302114D8162EE` | **Returns:** `void`
**Alt name:** `SetDrivebyTaskTarget`

```
For p1 & p2 (Ped, Vehicle). I could be wrong, as the only time this native is called in scripts is once and both are 0, but I assume this native will work like SET_MOUNTED_WEAPON_TARGET in which has the same exact amount of parameters and the 1st and last 3 parameters are right and the same for both natives.  
```

**Parameters:**
| Name | Type |
|------|------|
| `shootingPed` | `Ped` |
| `targetPed` | `Ped` |
| `targetVehicle` | `Vehicle` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_DRIVEBY_TASK_TARGET)

---
## SET_EXCLUSIVE_SCENARIO_GROUP
**Hash:** `0x535E97E1F7FC0C6A` | **Returns:** `void`
**Alt name:** `SetExclusiveScenarioGroup`

```
Groups found in the scripts used with this native:  
"AMMUNATION",  
"QUARRY",  
"Triathlon_1",  
"Triathlon_2",  
"Triathlon_3"  
```

**Parameters:**
| Name | Type |
|------|------|
| `scenarioGroup` | `char*` |

[View docs](https://cfxnatives.dev/natives/SET_EXCLUSIVE_SCENARIO_GROUP)

---
## SET_GLOBAL_MIN_BIRD_FLIGHT_HEIGHT
**Hash:** `0x6C6B148586F934F7` | **Returns:** `void`
**Alt name:** `SetGlobalMinBirdFlightHeight`

```
Birds will try to reach the given height.  
```

**Parameters:**
| Name | Type |
|------|------|
| `height` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_GLOBAL_MIN_BIRD_FLIGHT_HEIGHT)

---
## SET_HIGH_FALL_TASK
**Hash:** `0x8C825BDC7741D37C` | **Returns:** `void`
**Alt name:** `SetHighFallTask`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `duration` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/SET_HIGH_FALL_TASK)

---
## SET_MOUNTED_WEAPON_TARGET
**Hash:** `0xCCD892192C6D2BB9` | **Returns:** `void`
**Alt name:** `SetMountedWeaponTarget`

```
Note: Look in decompiled scripts and the times that p1 and p2 aren't 0. They are filled with vars. If you look through out that script what other natives those vars are used in, you can tell p1 is a ped and p2 is a vehicle. Which most likely means if you want the mounted weapon to target a ped set targetVehicle to 0 or vice-versa.  
```

```
NativeDB Added Parameter 7: Any p6
NativeDB Added Parameter 8: Any p7
```

**Parameters:**
| Name | Type |
|------|------|
| `shootingPed` | `Ped` |
| `targetPed` | `Ped` |
| `targetVehicle` | `Vehicle` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_MOUNTED_WEAPON_TARGET)

---
## SET_NEXT_DESIRED_MOVE_STATE
**Hash:** `0xF1B9F16E89E2C93A` | **Returns:** `void`
**Alt name:** `SetNextDesiredMoveState`

**This native does absolutely nothing, just a nullsub**

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_NEXT_DESIRED_MOVE_STATE)

---
## SET_PARACHUTE_TASK_TARGET
**Hash:** `0xC313379AF0FCEDA7` | **Returns:** `void`
**Alt name:** `SetParachuteTaskTarget`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARACHUTE_TASK_TARGET)

---
## SET_PARACHUTE_TASK_THRUST
**Hash:** `0x0729BAC1B8C64317` | **Returns:** `void`
**Alt name:** `SetParachuteTaskThrust`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `thrust` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PARACHUTE_TASK_THRUST)

---
## SET_PED_CAN_PLAY_AMBIENT_IDLES
**Hash:** `0x8FD89A6240813FD0` | **Returns:** `void`
**Alt name:** `SetPedCanPlayAmbientIdles`

Prevents a ped from playing ambient idle animations.

**Note:** This native must be called every frame.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `bBlockIdleClips` | `BOOL` |
| `bRemoveIdleClipIfPlaying` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_CAN_PLAY_AMBIENT_IDLES)

---
## SET_PED_DESIRED_MOVE_BLEND_RATIO
**Hash:** `0x1E982AC8716912C5` | **Returns:** `void`
**Alt name:** `SetPedDesiredMoveBlendRatio`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PED_DESIRED_MOVE_BLEND_RATIO)

---
## SET_PED_PATH_AVOID_FIRE
**Hash:** `0x4455517B28441E60` | **Returns:** `void`
**Alt name:** `SetPedPathAvoidFire`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `avoidFire` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_PATH_AVOID_FIRE)

---
## SET_PED_PATH_CAN_DROP_FROM_HEIGHT
**Hash:** `0xE361C5C71C431A4F` | **Returns:** `void`
**Alt name:** `SetPedPathCanDropFromHeight`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `Toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_PATH_CAN_DROP_FROM_HEIGHT)

---
## SET_PED_PATH_CAN_USE_CLIMBOVERS
**Hash:** `0x8E06A6FE76C9EFF4` | **Returns:** `void`
**Alt name:** `SetPedPathCanUseClimbovers`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `Toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_PATH_CAN_USE_CLIMBOVERS)

---
## SET_PED_PATH_CAN_USE_LADDERS
**Hash:** `0x77A5B103C87F476E` | **Returns:** `void`
**Alt name:** `SetPedPathCanUseLadders`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `Toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_PATH_CAN_USE_LADDERS)

---
## SET_PED_PATH_CLIMB_COST_MODIFIER
**Hash:** `0x88E32DB8C1A4AA4B` | **Returns:** `void`
**Alt name:** `SetPedPathClimbCostModifier`

```
Default modifier is 1.0, minimum is 0.0 and maximum is 10.0.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `modifier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_PED_PATH_CLIMB_COST_MODIFIER)

---
## SET_PED_PATH_MAY_ENTER_WATER
**Hash:** `0xF35425A4204367EC` | **Returns:** `void`
**Alt name:** `SetPedPathMayEnterWater`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `mayEnterWater` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_PATH_MAY_ENTER_WATER)

---
## SET_PED_PATH_PREFER_TO_AVOID_WATER
**Hash:** `0x38FE1EC73743793C` | **Returns:** `void`
**Alt name:** `SetPedPathPreferToAvoidWater`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `avoidWater` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_PATH_PREFER_TO_AVOID_WATER)

---
## SET_PED_WAYPOINT_ROUTE_OFFSET
**Hash:** `0xED98E10B0AFCE4B4` | **Returns:** `Any`
**Alt name:** `SetPedWaypointRouteOffset`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/SET_PED_WAYPOINT_ROUTE_OFFSET)

---
## SET_SCENARIO_GROUP_ENABLED
**Hash:** `0x02C8E5B49848664E` | **Returns:** `void`
**Alt name:** `SetScenarioGroupEnabled`

```
Occurrences in the b617d scripts: pastebin.com/Tvg2PRHU  
```

**Parameters:**
| Name | Type |
|------|------|
| `scenarioGroup` | `char*` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_SCENARIO_GROUP_ENABLED)

---
## SET_SCENARIO_TYPE_ENABLED
**Hash:** `0xEB47EC4E34FB7EE1` | **Returns:** `void`
**Alt name:** `SetScenarioTypeEnabled`

```
seems to enable/disable specific scenario-types from happening in the game world.
Here are some scenario types from the scripts:
"WORLD_MOUNTAIN_LION_REST"
"WORLD_MOUNTAIN_LION_WANDER"
"DRIVE"
"WORLD_VEHICLE_POLICE_BIKE"
"WORLD_VEHICLE_POLICE_CAR"
"WORLD_VEHICLE_POLICE_NEXT_TO_CAR"
"WORLD_VEHICLE_DRIVE_SOLO"
"WORLD_VEHICLE_BIKER"
"WORLD_VEHICLE_DRIVE_PASSENGERS"
"WORLD_VEHICLE_SALTON_DIRT_BIKE"
"WORLD_VEHICLE_BICYCLE_MOUNTAIN"
"PROP_HUMAN_SEAT_CHAIR"
"WORLD_VEHICLE_ATTRACTOR"
"WORLD_HUMAN_LEANING"
"WORLD_HUMAN_HANG_OUT_STREET"
"WORLD_HUMAN_DRINKING"
"WORLD_HUMAN_SMOKING"
"WORLD_HUMAN_GUARD_STAND"
"WORLD_HUMAN_CLIPBOARD"
"WORLD_HUMAN_HIKER"
"WORLD_VEHICLE_EMPTY"
"WORLD_VEHICLE_BIKE_OFF_ROAD_RACE"
"WORLD_HUMAN_PAPARAZZI"
"WORLD_VEHICLE_PARK_PERPENDICULAR_NOSE_IN"
"WORLD_VEHICLE_PARK_PARALLEL"
"WORLD_VEHICLE_CONSTRUCTION_SOLO"
"WORLD_VEHICLE_CONSTRUCTION_PASSENGERS"
"WORLD_VEHICLE_TRUCK_LOGS"
scenarioType could be the same as scenarioName, used in for example TASK::TASK_START_SCENARIO_AT_POSITION.
```

**Parameters:**
| Name | Type |
|------|------|
| `scenarioType` | `char*` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_SCENARIO_TYPE_ENABLED)

---
## SET_SEQUENCE_TO_REPEAT
**Hash:** `0x58C70CF3A41E4AE7` | **Returns:** `void`
**Alt name:** `SetSequenceToRepeat`

**Parameters:**
| Name | Type |
|------|------|
| `taskSequenceId` | `int` |
| `repeat` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_SEQUENCE_TO_REPEAT)

---
## SET_TASK_MOVE_NETWORK_SIGNAL_BOOL
**Hash:** `0xB0A6CFD2C69C1088` | **Returns:** `void`
**Alt name:** `SetTaskMoveNetworkSignalBool`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `signalName` | `char*` |
| `value` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_TASK_MOVE_NETWORK_SIGNAL_BOOL)

---
## SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT
**Hash:** `0xD5BB4025AE449A4E` | **Returns:** `void`
**Alt name:** `SetTaskMoveNetworkSignalFloat`

```
p0 - PLAYER::PLAYER_PED_ID();
p1 - "Phase", "Wobble", "x_axis","y_axis","introphase","speed".
p2 - From what i can see it goes up to 1f (maybe).
-LcGamingHD
Example: TASK::_D5BB4025AE449A4E(PLAYER::PLAYER_PED_ID(), "Phase", 0.5);
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `signalName` | `char*` |
| `value` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT)

---
## SET_TASK_VEHICLE_CHASE_BEHAVIOR_FLAG
**Hash:** `0xCC665AAC360D31E7` | **Returns:** `void`
**Alt name:** `SetTaskVehicleChaseBehaviorFlag`

```
* Flag 1: Aggressive ramming of suspect
* Flag 2: Ram attempts
* Flag 8: Medium-aggressive boxing tactic with a bit of PIT
* Flag 16: Ramming, seems to be slightly less aggressive than 1-2.
* Flag 32: Stay back from suspect, no tactical contact. Convoy-like.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `flag` | `int` |
| `set` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_TASK_VEHICLE_CHASE_BEHAVIOR_FLAG)

---
## SET_TASK_VEHICLE_CHASE_IDEAL_PURSUIT_DISTANCE
**Hash:** `0x639B642FACBE4EDD` | **Returns:** `void`
**Alt name:** `SetTaskVehicleChaseIdealPursuitDistance`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `distance` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_TASK_VEHICLE_CHASE_IDEAL_PURSUIT_DISTANCE)

---
## STOP_ANIM_PLAYBACK
**Hash:** `0xEE08C992D238C5D1` | **Returns:** `void`
**Alt name:** `StopAnimPlayback`

```
Looks like p1 may be a flag, still need to do some research, though.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `int` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/STOP_ANIM_PLAYBACK)

---
## STOP_ANIM_TASK
**Hash:** `0x97FF36A1D40EA00A` | **Returns:** `void`
**Alt name:** `StopAnimTask`

[Animations list](https://alexguirre.github.io/animations-list/)

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `animDictionary` | `char*` |
| `animationName` | `char*` |
| `animExitSpeed` | `float` |

[View docs](https://cfxnatives.dev/natives/STOP_ANIM_TASK)

---
## TASK_ACHIEVE_HEADING
**Hash:** `0x93B93A37987F1F3D` | **Returns:** `void`
**Alt name:** `TaskAchieveHeading`

```
Makes the specified ped achieve the specified heading.  
pedHandle: The handle of the ped to assign the task to.  
heading: The desired heading.  
timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is cancelled, and the ped will stay at the heading it managed to reach in the time.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `heading` | `float` |
| `timeout` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_ACHIEVE_HEADING)

---
## TASK_AIM_GUN_AT_COORD
**Hash:** `0x6671F3EEC681BDA1` | **Returns:** `void`
**Alt name:** `TaskAimGunAtCoord`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `time` | `int` |
| `bInstantBlendToAim` | `BOOL` |
| `bPlayAimIntro` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_AIM_GUN_AT_COORD)

---
## TASK_AIM_GUN_AT_ENTITY
**Hash:** `0x9B53BB6E8943AF53` | **Returns:** `void`
**Alt name:** `TaskAimGunAtEntity`

```
duration: the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `entity` | `Entity` |
| `duration` | `int` |
| `bInstantBlendToAim` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_AIM_GUN_AT_ENTITY)

---
## TASK_AIM_GUN_SCRIPTED
**Hash:** `0x7A192BE16D373D00` | **Returns:** `void`
**Alt name:** `TaskAimGunScripted`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `scriptTask` | `Hash` |
| `bDisableBlockingClip` | `BOOL` |
| `bInstantBlendToAim` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_AIM_GUN_SCRIPTED)

---
## TASK_AIM_GUN_SCRIPTED_WITH_TARGET
**Hash:** `0x8605AF0DE8B3A5AC` | **Returns:** `void`
**Alt name:** `TaskAimGunScriptedWithTarget`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `targetPed` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `iGunTaskType` | `Hash` |
| `bDisableBlockingClip` | `BOOL` |
| `bForceAim` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_AIM_GUN_SCRIPTED_WITH_TARGET)

---
## TASK_ARREST_PED
**Hash:** `0xF3B9A78A178572B1` | **Returns:** `void`
**Alt name:** `TaskArrestPed`

```
Example from "me_amanda1.ysc.c4":
TASK::TASK_ARREST_PED(l_19F /* This is a Ped */ , PLAYER::PLAYER_PED_ID());
Example from "armenian1.ysc.c4":
if (!PED::IS_PED_INJURED(l_B18[0/*1*/])) {
    TASK::TASK_ARREST_PED(l_B18[0/*1*/], PLAYER::PLAYER_PED_ID());
}
I would love to have time to experiment to see if a player Ped can arrest another Ped. Might make for a good cop mod.
Looks like only the player can be arrested this way. Peds react and try to arrest you if you task them, but the player charater doesn't do anything if tasked to arrest another ped.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `target` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK_ARREST_PED)

---
## TASK_BOAT_MISSION
**Hash:** `0x15C86013127CE63F` | **Returns:** `void`
**Alt name:** `TaskBoatMission`

All parameters except ped and boat are optional, with `pedTarget`, `vehicleTarget`, `x`, `y`, `z` being dependent on `missionType` (ie. Attack/Flee mission types require a target ped/vehicle, whereas GoTo mission types require either `x`, `y`, `z` or a target ped/vehicle).

If you don't want to use a parameter; pass `0.0f` for `x`, `y` and `z`, `0` for `pedTarget`, `vehicleTarget` and other int parameters, and `-1.0f` for the remaining float parameters.

```cpp
enum eBoatMissionFlags
{
  None = 0,
  StopAtEnd = 1,
  StopAtShore = 2,
  AvoidShore = 4,
  PreferForward = 8,
  NeverStop = 16,
  NeverNavMesh = 32,
  NeverRoute = 64,
  ForceBeached = 128,
  UseWanderRoute = 256,
  UseFleeRoute = 512,
  NeverPause = 1024,
  // StopAtEnd | StopAtShore | AvoidShore
  DefaultSettings = 7,
  // StopAtEnd | StopAtShore | AvoidShore | PreferForward | NeverNavMesh | NeverRoute
  OpenOceanSettings = 111,
  // StopAtEnd | StopAtShore | AvoidShore | PreferForward | NeverNavMesh | NeverPause
  BoatTaxiSettings = 1071,
}
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `boat` | `Vehicle` |
| `vehicleTarget` | `Vehicle` |
| `pedTarget` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `missionType` | `int` |
| `speed` | `float` |
| `drivingStyle` | `int` |
| `radius` | `float` |
| `missionFlags` | `int` |

**Example:**
```lua
local boat_model = `tropic`
RequestModel(boat_model)
repeat Wait(0) until HasModelLoaded(boat_model)

-- Player needs to be in open water & in a boat for this to work
local ped = PlayerPedId()
local coords = GetEntityCoords(ped) - GetEntityForwardVector(ped) * 15.0
local vehicle = CreateVehicle(boat_model, coords.x, coords.y, coords.z, GetEntityHeading(ped), true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(boat_model)

local ped_model = `a_m_m_skater_01`
RequestModel(ped_model)
repeat Wait(0) until HasModelLoaded(ped_model)

local driver = CreatePedInsideVehicle(vehicle, 0, ped_model, -1, true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(ped_model)

TaskBoatMission(driver, vehicle, GetVehiclePedIsIn(ped, false), 0, 0.0, 0.0, 0.0, 7, -1.0, 786468, -1.0, 1044)
-- Mission Type: Follow | Drive Style: DrivingModeAvoidVehiclesReckless | Mission Flags: AvoidShore | NeverStop | NeverPause
SetPedKeepTask(driver, true)
```

[View docs](https://cfxnatives.dev/natives/TASK_BOAT_MISSION)

---
## TASK_CHAT_TO_PED
**Hash:** `0x8C338E0263E4FD19` | **Returns:** `void`
**Alt name:** `TaskChatToPed`

```
p2 tend to be 16, 17 or 1  
p3 to p7 tend to be 0.0  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `target` | `Ped` |
| `p2` | `Any` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `float` |
| `p7` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_CHAT_TO_PED)

---
## TASK_CLEAR_DEFENSIVE_AREA
**Hash:** `0x95A6C46A31D1917D` | **Returns:** `void`
**Alt name:** `TaskClearDefensiveArea`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_CLEAR_DEFENSIVE_AREA)

---
## TASK_CLEAR_LOOK_AT
**Hash:** `0x0F804F1DB19B9689` | **Returns:** `void`
**Alt name:** `TaskClearLookAt`

```
Not clear what it actually does, but here's how script uses it -
if (OBJECT::HAS_PICKUP_BEEN_COLLECTED(...)
{
 if(ENTITY::DOES_ENTITY_EXIST(PLAYER::PLAYER_PED_ID()))
    {
     TASK::TASK_CLEAR_LOOK_AT(PLAYER::PLAYER_PED_ID());
  }
 ...
}
Another one where it doesn't "look" at current player -
TASK::TASK_PLAY_ANIM(l_3ED, "missheist_agency2aig_2", "look_at_phone_a", 1000.0, -2.0, -1, 48, v_2, 0, 0, 0);
PED::_2208438012482A1A(l_3ED, 0, 0);
TASK::TASK_CLEAR_LOOK_AT(l_3ED);
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK_CLEAR_LOOK_AT)

---
## TASK_CLIMB
**Hash:** `0x89D9FCC2435112F1` | **Returns:** `void`
**Alt name:** `TaskClimb`

```
Climbs or vaults the nearest thing.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `unused` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_CLIMB)

---
## TASK_CLIMB_LADDER
**Hash:** `0xB6C987F9285A3814` | **Returns:** `void`
**Alt name:** `TaskClimbLadder`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_CLIMB_LADDER)

---
## TASK_COMBAT_HATED_TARGETS_AROUND_PED
**Hash:** `0x7BF835BB9E2698C8` | **Returns:** `void`
**Alt name:** `TaskCombatHatedTargetsAroundPed`

```
Despite its name, it only attacks ONE hated target. The one closest hated target.  
p2 seems to be always 0  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `radius` | `float` |
| `p2` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_COMBAT_HATED_TARGETS_AROUND_PED)

---
## TASK_COMBAT_HATED_TARGETS_AROUND_PED_TIMED
**Hash:** `0x2BBA30B854534A0C` | **Returns:** `void`
**Alt name:** `TaskCombatHatedTargetsAroundPedTimed`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `Any` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_COMBAT_HATED_TARGETS_AROUND_PED_TIMED)

---
## TASK_COMBAT_HATED_TARGETS_IN_AREA
**Hash:** `0x4CF5F55DAC3280A0` | **Returns:** `void`
**Alt name:** `TaskCombatHatedTargetsInArea`

```
Despite its name, it only attacks ONE hated target. The one closest to the specified position.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `p5` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_COMBAT_HATED_TARGETS_IN_AREA)

---
## TASK_COMBAT_PED
**Hash:** `0xF166E48407BAC484` | **Returns:** `void`
**Alt name:** `TaskCombatPed`

```
Makes the specified ped attack the target ped.  
p2 should be 0  
p3 should be 16  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `targetPed` | `Ped` |
| `p2` | `int` |
| `p3` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_COMBAT_PED)

---
## TASK_COMBAT_PED_TIMED
**Hash:** `0x944F30DCB7096BDE` | **Returns:** `void`
**Alt name:** `TaskCombatPedTimed`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `ped` | `Ped` |
| `p2` | `int` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_COMBAT_PED_TIMED)

---
## TASK_COWER
**Hash:** `0x3EB1FE9E8E908E15` | **Returns:** `void`
**Alt name:** `TaskCower`

The ped will act like NPC's involved in a gunfight. The ped will squat down with their heads held in place and look around.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `duration` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_COWER)

---
## TASK_DRIVE_BY
**Hash:** `0x2F8AF0E82773A171` | **Returns:** `void`
**Alt name:** `TaskDriveBy`

```
Example:
TASK::TASK_DRIVE_BY(l_467[1/*22*/], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});
Needs working example. Doesn't seem to do anything.
I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
```

**Parameters:**
| Name | Type |
|------|------|
| `driverPed` | `Ped` |
| `targetPed` | `Ped` |
| `targetVehicle` | `Vehicle` |
| `targetX` | `float` |
| `targetY` | `float` |
| `targetZ` | `float` |
| `distanceToShoot` | `float` |
| `pedAccuracy` | `int` |
| `p8` | `BOOL` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_DRIVE_BY)

---
## TASK_ENTER_VEHICLE
**Hash:** `0xC20E50AA46D09CA8` | **Returns:** `void`
**Alt name:** `TaskEnterVehicle`

```
speed 1.0 = walk, 2.0 = run  
p5 1 = normal, 3 = teleport to vehicle, 8 = normal/carjack ped from seat, 16 = teleport directly into vehicle  
p6 is always 0  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `timeout` | `int` |
| `seatIndex` | `int` |
| `speed` | `float` |
| `flag` | `int` |
| `p6` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_ENTER_VEHICLE)

---
## TASK_EVERYONE_LEAVE_VEHICLE
**Hash:** `0x7F93691AB4B92272` | **Returns:** `void`
**Alt name:** `TaskEveryoneLeaveVehicle`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_EVERYONE_LEAVE_VEHICLE)

---
## TASK_EXIT_COVER
**Hash:** `0x79B258E397854D29` | **Returns:** `void`
**Alt name:** `TaskExitCover`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_EXIT_COVER)

---
## TASK_EXTEND_ROUTE
**Hash:** `0x1E7889778264843A` | **Returns:** `void`
**Alt name:** `TaskExtendRoute`

Adds a new point to the current point route; a maximum of 8 points can be added.

Call [TASK_FLUSH_ROUTE](#\_0x841142A1376E9006) before the first call to this. Call [TASK_FOLLOW_POINT_ROUTE](#\_0x595583281858626E) to make the Ped go the route.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_EXTEND_ROUTE)

---
## TASK_FLUSH_ROUTE
**Hash:** `0x841142A1376E9006` | **Returns:** `void`
**Alt name:** `TaskFlushRoute`

Clears the current point route. Call this before [TASK_EXTEND_ROUTE](#\_0x1E7889778264843A) and [TASK_FOLLOW_POINT_ROUTE](#\_0x595583281858626E).

[View docs](https://cfxnatives.dev/natives/TASK_FLUSH_ROUTE)

---
## TASK_FOLLOW_NAV_MESH_TO_COORD
**Hash:** `0x15D3A79D4E44B913` | **Returns:** `void`
**Alt name:** `TaskFollowNavMeshToCoord`

Sometimes a path may not be able to be found. This could happen because there simply isn't any way to get there, or maybe a bunch of dynamic objects have blocked the way,
or maybe the destination is too far away. In this case the ped will simply stand still.
To identify when this has happened, you can use GET_NAVMESH_ROUTE_RESULT. This will help you find situations where peds cannot get to their target.

```cpp
enum eNavScriptFlags {
    // Default flag
    ENAV_DEFAULT = 0,
    // Will ensure the ped continues to move whilst waiting for the path
    // to be found, and will not slow down at the end of their route.
    ENAV_NO_STOPPING = 1,
    // Performs a slide-to-coord at the end of the task. This requires that the
    // accompanying NAVDATA structure has the 'SlideToCoordHeading' member set correctly.
    ENAV_ADV_SLIDE_TO_COORD_AND_ACHIEVE_HEADING_AT_END = 2,
    // If the navmesh is not loaded in under the target position, then this will
    // cause the ped to get as close as is possible on whatever navmesh is loaded.
    // The navmesh must still be loaded at the path start.
    ENAV_GO_FAR_AS_POSSIBLE_IF_TARGET_NAVMESH_NOT_LOADED = 4,
    // Will allow navigation underwater - by default this is not allowed.
    ENAV_ALLOW_SWIMMING_UNDERWATER = 8,
    // Will only allow navigation on pavements. If the path starts or ends off
    // the pavement, the command will fail. Likewise if no pavement-only route
    // can be found even although the start and end are on pavement.
    ENAV_KEEP_TO_PAVEMENTS = 16,
    // Prevents the path from entering water at all.
    ENAV_NEVER_ENTER_WATER = 32,
    // Disables object-avoidance for this path. The ped may still make minor
    // steering adjustments to avoid objects, but will not pathfind around them.
    ENAV_DONT_AVOID_OBJECTS = 64,
    // Specifies that the navmesh route will only be able to traverse up slopes
    // which are under the angle specified, in the MaxSlopeNavigable member of the accompanying NAVDATA structure.
    ENAV_ADVANCED_USE_MAX_SLOPE_NAVIGABLE = 128,
    // Unused.
    ENAV_STOP_EXACTLY = 512,
    // The entity will look ahead in its path for a longer distance to make the
    // walk/run start go more in the right direction.
    ENAV_ACCURATE_WALKRUN_START = 1024,
    // Disables ped-avoidance for this path while we move.
    ENAV_DONT_AVOID_PEDS = 2048,
    // If target pos is inside the boundingbox of an object it will otherwise be pushed out.
    ENAV_DONT_ADJUST_TARGET_POSITION = 4096,
    // Turns off the default behaviour, which is to stop exactly at the target position.
    // Occasionally this can cause footsliding/skating problems.
    ENAV_SUPPRESS_EXACT_STOP = 8192,
    // Prevents the path-search from finding paths outside of this search distance.
    // This can be used to prevent peds from finding long undesired routes.
    ENAV_ADVANCED_USE_CLAMP_MAX_SEARCH_DISTANCE = 16384,
    // Pulls out the paths from edges at corners for a longer distance, to prevent peds walking into stuff.
    ENAV_PULL_FROM_EDGE_EXTRA = 32768
};
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `moveBlendRatio` | `float` |
| `time` | `int` |
| `radius` | `float` |
| `flags` | `int` |
| `finalHeading` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_FOLLOW_NAV_MESH_TO_COORD)

---
## TASK_FOLLOW_NAV_MESH_TO_COORD_ADVANCED
**Hash:** `0x17F58B88D085DBAC` | **Returns:** `void`
**Alt name:** `TaskFollowNavMeshToCoordAdvanced`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `speed` | `float` |
| `timeout` | `int` |
| `unkFloat` | `float` |
| `unkInt` | `int` |
| `unkX` | `float` |
| `unkY` | `float` |
| `unkZ` | `float` |
| `unk_40000f` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_FOLLOW_NAV_MESH_TO_COORD_ADVANCED)

---
## TASK_FOLLOW_POINT_ROUTE
**Hash:** `0x595583281858626E` | **Returns:** `void`
**Alt name:** `TaskFollowPointRoute`

Makes the ped go on a point route.

```cpp
enum eFollowPointRouteMode {
	TICKET_SINGLE = 0,
	TICKET_RETURN = 1,
	TICKET_SEASON = 2,
	TICKET_LOOP = 3
}
```

This native is often times used with [`TASK_FLUSH_ROUTE`](#\_0x841142A1376E9006) and [`TASK_EXTEND_ROUTE`](#\_0x1E7889778264843A)

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `speed` | `float` |
| `routeMode` | `int` |

**Example:**
```lua
TaskFlushRoute()
TaskExtendRoute(0.0, 0.0, 70.0)
TaskExtendRoute(10.0, 0.0, 70.0)
TaskExtendRoute(10.0, 10.0, 70.0)
TaskFollowPointRoute(PlayerPedId(), 1.0, 0)
```

[View docs](https://cfxnatives.dev/natives/TASK_FOLLOW_POINT_ROUTE)

---
## TASK_FOLLOW_TO_OFFSET_OF_ENTITY
**Hash:** `0x304AE42E357B8C7E` | **Returns:** `void`
**Alt name:** `TaskFollowToOffsetOfEntity`

```
p6 always -1  
p7 always 10.0  
p8 always 1  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `entity` | `Entity` |
| `offsetX` | `float` |
| `offsetY` | `float` |
| `offsetZ` | `float` |
| `movementSpeed` | `float` |
| `timeout` | `int` |
| `stoppingRange` | `float` |
| `persistFollowing` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_FOLLOW_TO_OFFSET_OF_ENTITY)

---
## TASK_FOLLOW_WAYPOINT_RECORDING
**Hash:** `0x0759591819534F7B` | **Returns:** `void`
**Alt name:** `TaskFollowWaypointRecording`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `Any` |
| `p3` | `Any` |
| `p4` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_FOLLOW_WAYPOINT_RECORDING)

---
## TASK_FORCE_MOTION_STATE
**Hash:** `0x4F056E1AFFEF17AB` | **Returns:** `void`
**Alt name:** `TaskForceMotionState`

See [`FORCE_PED_MOTION_STATE`](#\_0xF28965D04F570DCA)

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `state` | `Hash` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_FORCE_MOTION_STATE)

---
## TASK_GET_OFF_BOAT
**Hash:** `0x9C00E77AF14B2DFF` | **Returns:** `void`
**Alt name:** `TaskGetOffBoat`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `boat` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/TASK_GET_OFF_BOAT)

---
## TASK_GO_STRAIGHT_TO_COORD
**Hash:** `0xD76B57B44F1E6F8B` | **Returns:** `void`
**Alt name:** `TaskGoStraightToCoord`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `speed` | `float` |
| `timeout` | `int` |
| `targetHeading` | `float` |
| `distanceToSlide` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_GO_STRAIGHT_TO_COORD)

---
## TASK_GO_STRAIGHT_TO_COORD_RELATIVE_TO_ENTITY
**Hash:** `0x61E360B7E040D12E` | **Returns:** `void`
**Alt name:** `TaskGoStraightToCoordRelativeToEntity`

**Parameters:**
| Name | Type |
|------|------|
| `entity1` | `Entity` |
| `entity2` | `Entity` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_GO_STRAIGHT_TO_COORD_RELATIVE_TO_ENTITY)

---
## TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD
**Hash:** `0xA55547801EB331FC` | **Returns:** `void`
**Alt name:** `TaskGoToCoordAndAimAtHatedEntitiesNearCoord`

```
The ped will walk or run towards goToLocation, aiming towards goToLocation or focusLocation (depending on the aimingFlag) and shooting if shootAtEnemies = true to any enemy in his path.
If the ped is closer than noRoadsDistance, the ped will ignore pathing/navmesh and go towards goToLocation directly. This could cause the ped to get stuck behind tall walls if the goToLocation is on the other side. To avoid this, use 0.0f and the ped will always use pathing/navmesh to reach his destination.
If the speed is set to 0.0f, the ped will just stand there while aiming, if set to 1.0f he will walk while aiming, 2.0f will run while aiming.
The ped will stop aiming when he is closer than distanceToStopAt to goToLocation.
I still can't figure out what unkTrue is used for. I don't notice any difference if I set it to false but in the decompiled scripts is always true.
I think that unkFlag, like the driving styles, could be a flag that "work as a list of 32 bits converted to a decimal integer. Each bit acts as a flag, and enables or disables a function". What leads me to this conclusion is the fact that in the decompiled scripts, unkFlag takes values like: 0, 1, 5 (101 in binary) and 4097 (4096 + 1 or 1000000000001 in binary). For now, I don't know what behavior enable or disable this possible flag so I leave it at 0.
Note: After some testing, using unkFlag = 16 (0x10) enables the use of sidewalks while moving towards goToLocation.
The aimingFlag takes 2 values: 0 to aim at the focusLocation, 1 to aim at where the ped is heading (goToLocation).
Example:
enum AimFlag
{
   AimAtFocusLocation,
   AimAtGoToLocation
};
Vector3 goToLocation1 = { 996.2867f, 0, -2143.044f, 0, 28.4763f, 0 }; // remember the padding.
Vector3 goToLocation2 = { 990.2867f, 0, -2140.044f, 0, 28.4763f, 0 }; // remember the padding.
Vector3 focusLocation = { 994.3478f, 0, -2136.118f, 0, 29.2463f, 0 }; // the coord z should be a little higher, around +1.0f to avoid aiming at the ground
// 1st example
TASK::TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD(pedHandle, goToLocation1.x, goToLocation1.y, goToLocation1.z, focusLocation.x, focusLocation.y, focusLocation.z, 2.0f /*run*/, true /*shoot*/, 3.0f /*stop at*/, 0.0f /*noRoadsDistance*/, true /*always true*/, 0 /*possible flag*/, AimFlag::AimAtGoToLocation, -957453492 /*FullAuto pattern*/);
// 2nd example
TASK::TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD(pedHandle, goToLocation2.x, goToLocation2.y, goToLocation2.z, focusLocation.x, focusLocation.y, focusLocation.z, 1.0f /*walk*/, false /*don't shoot*/, 3.0f /*stop at*/, 0.0f /*noRoadsDistance*/, true /*always true*/, 0 /*possible flag*/, AimFlag::AimAtFocusLocation, -957453492 /*FullAuto pattern*/);
1st example: The ped (pedhandle) will run towards goToLocation1. While running and aiming towards goToLocation1, the ped will shoot on sight to any enemy in his path, using "FullAuto" firing pattern. The ped will stop once he is closer than distanceToStopAt to goToLocation1.
2nd example: The ped will walk towards goToLocation2. This time, while walking towards goToLocation2 and aiming at focusLocation, the ped will point his weapon on sight to any enemy in his path without shooting. The ped will stop once he is closer than distanceToStopAt to goToLocation2.
```

**Parameters:**
| Name | Type |
|------|------|
| `pedHandle` | `Ped` |
| `goToLocationX` | `float` |
| `goToLocationY` | `float` |
| `goToLocationZ` | `float` |
| `focusLocationX` | `float` |
| `focusLocationY` | `float` |
| `focusLocationZ` | `float` |
| `speed` | `float` |
| `shootAtEnemies` | `BOOL` |
| `distanceToStopAt` | `float` |
| `noRoadsDistance` | `float` |
| `unkTrue` | `BOOL` |
| `unkFlag` | `int` |
| `aimingFlag` | `int` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD)

---
## TASK_GO_TO_COORD_ANY_MEANS
**Hash:** `0x5BC448CB78FA3E88` | **Returns:** `void`
**Alt name:** `TaskGoToCoordAnyMeans`

Tells a ped to go to a coord by any means.

```cpp
enum eDrivingMode {
  DF_StopForCars = 1,
  DF_StopForPeds = 2,
  DF_SwerveAroundAllCars = 4,
  DF_SteerAroundStationaryCars = 8,
  DF_SteerAroundPeds = 16,
  DF_SteerAroundObjects = 32,
  DF_DontSteerAroundPlayerPed = 64,
  DF_StopAtLights = 128,
  DF_GoOffRoadWhenAvoiding = 256,
  DF_DriveIntoOncomingTraffic = 512,
  DF_DriveInReverse = 1024,

  // If pathfinding fails, cruise randomly instead of going on a straight line
  DF_UseWanderFallbackInsteadOfStraightLine = 2048,

  DF_AvoidRestrictedAreas = 4096,

  // These only work on MISSION_CRUISE
  DF_PreventBackgroundPathfinding = 8192,
  DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,

  DF_UseShortCutLinks =  262144,
  DF_ChangeLanesAroundObstructions = 524288,
  // cruise tasks ignore this anyway--only used for goto's
  DF_UseSwitchedOffNodes =  2097152,
  // if you're going to be primarily driving off road
  DF_PreferNavmeshRoute =  4194304,

  // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
  DF_PlaneTaxiMode =  8388608,

  DF_ForceStraightLine = 16777216,
  DF_UseStringPullingAtJunctions = 33554432,

  DF_AvoidHighways = 536870912,
  DF_ForceJoinInRoadDirection = 1073741824,

  // Standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
  DRIVINGMODE_STOPFORCARS = 786603, // DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,		// Obey lights too

  // Like the above, but doesn't steer around anything in its way - will only wait instead.
  DRIVINGMODE_STOPFORCARS_STRICT = 262275, // DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks, // Doesn't deviate an inch.

  // Default "alerted" driving mode. drives around everything, doesn't obey lights
  DRIVINGMODE_AVOIDCARS = 786469, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,

  // Very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
  DRIVINGMODE_AVOIDCARS_RECKLESS = 786468, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,

  // Smashes through everything
  DRIVINGMODE_PLOUGHTHROUGH = 262144, // DF_UseShortCutLinks

  // Drives normally except for the fact that it ignores lights
  DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475, // DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions

  // Try to swerve around everything, but stop for lights if necessary
  DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597, // DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars

  // Swerve around cars, be careful around peds, and stop for lights
  DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599 // DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
};
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `fMoveBlendRatio` | `float` |
| `vehicle` | `Vehicle` |
| `bUseLongRangeVehiclePathing` | `BOOL` |
| `drivingFlags` | `int` |
| `fMaxRangeToShootTargets` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_GO_TO_COORD_ANY_MEANS)

---
## TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS
**Hash:** `0x1DD45F9ECFDB1BC9` | **Returns:** `void`
**Alt name:** `TaskGoToCoordAnyMeansExtraParams`

```
NativeDB Added Parameter 13: Any p12
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `speed` | `float` |
| `p5` | `Any` |
| `p6` | `BOOL` |
| `walkingStyle` | `int` |
| `p8` | `float` |
| `p9` | `Any` |
| `p10` | `Any` |
| `p11` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS)

---
## TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED
**Hash:** `0xB8ECD61F531A7B02` | **Returns:** `void`
**Alt name:** `TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed`

```
NativeDB Added Parameter 14: Any p13
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `speed` | `float` |
| `p5` | `Any` |
| `p6` | `BOOL` |
| `walkingStyle` | `int` |
| `p8` | `float` |
| `p9` | `Any` |
| `p10` | `Any` |
| `p11` | `Any` |
| `p12` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED)

---
## TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD
**Hash:** `0x11315AB3385B8AC0` | **Returns:** `void`
**Alt name:** `TaskGoToCoordWhileAimingAtCoord`

Will make the ped move to a coordinate while aiming (and optionally shooting) at given coordinates.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `aimAtX` | `float` |
| `aimAtY` | `float` |
| `aimAtZ` | `float` |
| `moveSpeed` | `float` |
| `shoot` | `BOOL` |
| `p9` | `float` |
| `p10` | `float` |
| `p11` | `BOOL` |
| `flags` | `Any` |
| `p13` | `BOOL` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD)

---
## TASK_GO_TO_COORD_WHILE_AIMING_AT_ENTITY
**Hash:** `0xB2A16444EAD9AE47` | **Returns:** `void`
**Alt name:** `TaskGoToCoordWhileAimingAtEntity`

Will make the ped move to a coordinate while aiming (and optionally shooting) at the given entity.

```cpp
enum eFiringPatternHashes {
    FIRING_PATTERN_DEFAULT = 0,
    FIRING_PATTERN_BURST_FIRE = -687903391,
    FIRING_PATTERN_BURST_FIRE_DRIVEBY = -753768974,
    FIRING_PATTERN_FULL_AUTO = -957453492,
    FIRING_PATTERN_SINGLE_SHOT = 1566631136,
    FIRING_PATTERN_DELAY_FIRE_BY_ONE_SEC = 2055493265,
    FIRING_PATTERN_BURST_FIRE_HELI = -1857128337,
    FIRING_PATTERN_SHORT_BURSTS = 445831135,
    FIRING_PATTERN_BURST_FIRE_MICRO = 1122960381,
    FIRING_PATTERN_SLOW_FIRE_TANK = -490063247,
    FIRING_PATTERN_TAMPA_MORTAR = -1842093953
}
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `entityToAimAt` | `Entity` |
| `moveSpeed` | `float` |
| `shoot` | `BOOL` |
| `targetRadius` | `float` |
| `slowDistance` | `float` |
| `useNavMesh` | `BOOL` |
| `navFlags` | `int` |
| `instantBlendAtAim` | `BOOL` |
| `firingPattern` | `Hash` |
| `time` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_GO_TO_COORD_WHILE_AIMING_AT_ENTITY)

---
## TASK_GO_TO_ENTITY
**Hash:** `0x6A071245EB0D1882` | **Returns:** `void`
**Alt name:** `TaskGoToEntity`

```
The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)
Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `target` | `Entity` |
| `duration` | `int` |
| `distance` | `float` |
| `speed` | `float` |
| `p5` | `float` |
| `p6` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_GO_TO_ENTITY)

---
## TASK_GO_TO_ENTITY_WHILE_AIMING_AT_COORD
**Hash:** `0x04701832B739DCE5` | **Returns:** `void`
**Alt name:** `TaskGoToEntityWhileAimingAtCoord`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `BOOL` |
| `p7` | `float` |
| `p8` | `float` |
| `p9` | `BOOL` |
| `p10` | `BOOL` |
| `p11` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_GO_TO_ENTITY_WHILE_AIMING_AT_COORD)

---
## TASK_GO_TO_ENTITY_WHILE_AIMING_AT_ENTITY
**Hash:** `0x97465886D35210E9` | **Returns:** `void`
**Alt name:** `TaskGoToEntityWhileAimingAtEntity`

```
shootatEntity:  
If true, peds will shoot at Entity till it is dead.  
If false, peds will just walk till they reach the entity and will cease shooting.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `entityToWalkTo` | `Entity` |
| `entityToAimAt` | `Entity` |
| `speed` | `float` |
| `shootatEntity` | `BOOL` |
| `p5` | `float` |
| `p6` | `float` |
| `p7` | `BOOL` |
| `p8` | `BOOL` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/TASK_GO_TO_ENTITY_WHILE_AIMING_AT_ENTITY)

---
## TASK_GOTO_ENTITY_AIMING
**Hash:** `0xA9DA48FAB8A76C12` | **Returns:** `void`
**Alt name:** `TaskGotoEntityAiming`

```
eg
 TASK::TASK_GOTO_ENTITY_AIMING(v_2, PLAYER::PLAYER_PED_ID(), 5.0, 25.0);
ped = Ped you want to perform this task.
target = the Entity they should aim at.
distanceToStopAt = distance from the target, where the ped should stop to aim.
StartAimingDist = distance where the ped should start to aim.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `target` | `Entity` |
| `distanceToStopAt` | `float` |
| `StartAimingDist` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_GOTO_ENTITY_AIMING)

---
## TASK_GOTO_ENTITY_OFFSET
**Hash:** `0xE39B4FF4FDEBDE27` | **Returns:** `void`
**Alt name:** `TaskGotoEntityOffset`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `Any` |
| `p2` | `Any` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `duration` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_GOTO_ENTITY_OFFSET)

---
## TASK_GOTO_ENTITY_OFFSET_XY
**Hash:** `0x338E7EF52B6095A9` | **Returns:** `void`
**Alt name:** `TaskGotoEntityOffsetXy`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `entity` | `Entity` |
| `duration` | `int` |
| `xOffset` | `float` |
| `yOffset` | `float` |
| `zOffset` | `float` |
| `moveBlendRatio` | `float` |
| `useNavmesh` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_GOTO_ENTITY_OFFSET_XY)

---
## TASK_GUARD_ASSIGNED_DEFENSIVE_AREA
**Hash:** `0xD2A207EEBDF9889B` | **Returns:** `void`
**Alt name:** `TaskGuardAssignedDefensiveArea`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_GUARD_ASSIGNED_DEFENSIVE_AREA)

---
## TASK_GUARD_CURRENT_POSITION
**Hash:** `0x4A58A47A72E3FCB4` | **Returns:** `void`
**Alt name:** `TaskGuardCurrentPosition`

```
From re_prisonvanbreak:
TASK::TASK_GUARD_CURRENT_POSITION(l_DD, 35.0, 35.0, 1);
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Ped` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_GUARD_CURRENT_POSITION)

---
## TASK_GUARD_SPHERE_DEFENSIVE_AREA
**Hash:** `0xC946FE14BE0EB5E2` | **Returns:** `void`
**Alt name:** `TaskGuardSphereDefensiveArea`

```
p0 - Guessing PedID  
p1, p2, p3 - XYZ?  
p4 - ???  
p5 - Maybe the size of sphere from XYZ?  
p6 - ???  
p7, p8, p9 - XYZ again?  
p10 - Maybe the size of sphere from second XYZ?  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Ped` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `Any` |
| `p7` | `float` |
| `p8` | `float` |
| `p9` | `float` |
| `p10` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_GUARD_SPHERE_DEFENSIVE_AREA)

---
## TASK_HANDS_UP
**Hash:** `0xF2EAB31979A7F910` | **Returns:** `void`
**Alt name:** `TaskHandsUp`

```
In the scripts, p3 was always -1.  
p3 seems to be duration or timeout of turn animation.  
Also facingPed can be 0 or -1 so ped will just raise hands up.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `duration` | `int` |
| `facingPed` | `Ped` |
| `p3` | `int` |
| `p4` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_HANDS_UP)

---
## TASK_HELI_CHASE
**Hash:** `0xAC83B1DB38D0ADA0` | **Returns:** `void`
**Alt name:** `TaskHeliChase`

```
Ped pilot should be in a heli.  
EntityToFollow can be a vehicle or Ped.  
x,y,z appear to be how close to the EntityToFollow the heli should be. Scripts use 0.0, 0.0, 80.0. Then the heli tries to position itself 80 units above the EntityToFollow. If you reduce it to -5.0, it tries to go below (if the EntityToFollow is a heli or plane)  
NOTE: If the pilot finds enemies, it will engage them, then remain there idle, not continuing to chase the Entity given.  
```

**Parameters:**
| Name | Type |
|------|------|
| `pilot` | `Ped` |
| `entityToFollow` | `Entity` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_HELI_CHASE)

---
## TASK_HELI_MISSION
**Hash:** `0xDAD029E187A2BEB4` | **Returns:** `void`
**Alt name:** `TaskHeliMission`

All parameters except ped, heli and speed are optional, with `pedTarget`, `vehicleTarget`, `x`, `y`, `z` being dependent on `missionType` (ie. Attack/Flee mission types require a target ped/vehicle, whereas GoTo mission types require either `x`, `y`, `z` or a target ped/vehicle).

If you don't want to use a parameter; pass `0.0f` for `x`, `y` and `z`, `0` for `pedTarget`, `vehicleTarget`, `0` for other int parameters, and `-1.0f` for the remaining float parameters.

```cpp
enum eHeliMissionFlags
{
  None = 0,
  AttainRequestedOrientation = 1,
  DontModifyOrientation = 2,
  DontModifyPitch = 4,
  DontModifyThrottle = 8,
  DontModifyRoll = 16,
  LandOnArrival = 32,
  DontDoAvoidance = 64,
  StartEngineImmediately = 128,
  ForceHeightMapAvoidance = 256,
  DontClampProbesToDestination = 512,
  EnableTimeslicingWhenPossible = 1024,
  CircleOppositeDirection = 2048,
  MaintainHeightAboveTerrain = 4096,
  IgnoreHiddenEntitiesDuringLand = 8192,
  DisableAllHeightMapAvoidance = 16384,
  // ForceHeightMapAvoidance | DontDoAvoidance
  HeightMapOnlyAvoidance = 320,
}
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `heli` | `Vehicle` |
| `vehicleTarget` | `Vehicle` |
| `pedTarget` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `missionType` | `int` |
| `speed` | `float` |
| `radius` | `float` |
| `heading` | `float` |
| `height` | `float` |
| `minHeight` | `float` |
| `slowDist` | `float` |
| `missionFlags` | `int` |

**Example:**
```lua
local heli_model = `akula`
RequestModel(heli_model)
repeat Wait(0) until HasModelLoaded(heli_model)

-- Player needs to be outside for this to work
local ped = PlayerPedId()
local coords = GetEntityCoords(ped) + GetEntityForwardVector(ped) * 100.0
local heli = CreateVehicle(heli_model, coords.x, coords.y, coords.z + 50.0, GetEntityHeading(ped) - 180.0, true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(heli_model)
SetHeliBladesFullSpeed(heli)

local ped_model = `a_m_m_skater_01`
RequestModel(ped_model)
repeat Wait(0) until HasModelLoaded(ped_model)

local pilot = CreatePedInsideVehicle(heli, 0, ped_model, -1, true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(ped_model)

TaskHeliMission(pilot, heli, 0, 0, coords.x, coords.y, coords.z, 19, 10.0, -1.0, -1.0, -1.0, -1.0, -1.0, 96)
-- Mission Type: Land | Mission Flags: LandOnArrival | DontDoAvoidance
SetPedKeepTask(pilot, true)
```

[View docs](https://cfxnatives.dev/natives/TASK_HELI_MISSION)

---
## TASK_JUMP
**Hash:** `0x0AE4086104E067B1` | **Returns:** `void`
**Alt name:** `TaskJump`

```
Definition is wrong. This has 4 parameters (Not sure when they were added. v350 has 2, v678 has 4).  
v350: Ped ped, bool unused  
v678: Ped ped, bool unused, bool flag1, bool flag2  
flag1 = super jump, flag2 = do nothing if flag1 is false and doubles super jump height if flag1 is true.  
```

```
NativeDB Added Parameter 3: Any p2
NativeDB Added Parameter 4: Any p3
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `unused` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_JUMP)

---
## TASK_LEAVE_ANY_VEHICLE
**Hash:** `0x504D54DF3F6F2247` | **Returns:** `void`
**Alt name:** `TaskLeaveAnyVehicle`

Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `int` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_LEAVE_ANY_VEHICLE)

---
## TASK_LEAVE_VEHICLE
**Hash:** `0xD3DBCE61A490BE02` | **Returns:** `void`
**Alt name:** `TaskLeaveVehicle`

```
Flags from decompiled scripts:  
0 = normal exit and closes door.  
1 = normal exit and closes door.  
16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
64 = normal exit and closes door, maybe a bit slower animation than 0.  
256 = normal exit but does not close the door.  
4160 = ped is throwing himself out, even when the vehicle is still.  
262144 = ped moves to passenger seat first, then exits normally  
Others to be tried out: 320, 512, 131072.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_LEAVE_VEHICLE)

---
## TASK_LOOK_AT_COORD
**Hash:** `0x6FA46612594F7973` | **Returns:** `void`
**Alt name:** `TaskLookAtCoord`

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `duration` | `int` |
| `p5` | `Any` |
| `p6` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_LOOK_AT_COORD)

---
## TASK_LOOK_AT_ENTITY
**Hash:** `0x69F4BE8C8CC4796C` | **Returns:** `void`
**Alt name:** `TaskLookAtEntity`

```
param3: duration in ms, use -1 to look forever  
param4: using 2048 is fine  
param5: using 3 is fine  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `lookAt` | `Entity` |
| `duration` | `int` |
| `unknown1` | `int` |
| `unknown2` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_LOOK_AT_ENTITY)

---
## TASK_MOVE_NETWORK_ADVANCED_BY_NAME
**Hash:** `0xD5B35BEA41919ACB` | **Returns:** `void`
**Alt name:** `TaskMoveNetworkAdvancedByName`

```
Example:
TASK::TASK_MOVE_NETWORK_ADVANCED_BY_NAME(PLAYER::PLAYER_PED_ID(), "minigame_tattoo_michael_parts", 324.13f, 181.29f, 102.6f, 0.0f, 0.0f, 22.32f, 2, 0, false, 0, 0);
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `char*` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `float` |
| `p7` | `float` |
| `p8` | `Any` |
| `p9` | `float` |
| `p10` | `BOOL` |
| `animDict` | `char*` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_MOVE_NETWORK_ADVANCED_BY_NAME)

---
## TASK_MOVE_NETWORK_BY_NAME
**Hash:** `0x2D537BA194896636` | **Returns:** `void`
**Alt name:** `TaskMoveNetworkByName`

```
Example:
TASK::TASK_MOVE_NETWORK_BY_NAME(PLAYER::PLAYER_PED_ID(), "arm_wrestling_sweep_paired_a_rev3", 0.0f, true, "mini@arm_wrestling", 0);
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `task` | `char*` |
| `multiplier` | `float` |
| `p3` | `BOOL` |
| `animDict` | `char*` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_MOVE_NETWORK_BY_NAME)

---
## TASK_OPEN_VEHICLE_DOOR
**Hash:** `0x965791A9A488A062` | **Returns:** `void`
**Alt name:** `TaskOpenVehicleDoor`

The given ped will try to open the nearest door to 'seat'.

Example: telling the ped to open the door for the driver seat does not necessarily mean it will open the driver door, it may choose to open the passenger door instead if that one is closer.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `timeOut` | `int` |
| `seat` | `int` |
| `speed` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_OPEN_VEHICLE_DOOR)

---
## TASK_PARACHUTE
**Hash:** `0xD2F1C53C97EE81AB` | **Returns:** `void`
**Alt name:** `TaskParachute`

```
This function has a third parameter as well (bool).  
Second parameter is unused.  
seconds parameter was for jetpack in the early stages of gta and the hard coded code is now removed  
```

```
NativeDB Added Parameter 3: BOOL p2
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_PARACHUTE)

---
## TASK_PARACHUTE_TO_TARGET
**Hash:** `0xB33E291AFA6BD03A` | **Returns:** `void`
**Alt name:** `TaskParachuteToTarget`

```
makes ped parachute to coords x y z. Works well with PATHFIND::GET_SAFE_COORD_FOR_PED  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_PARACHUTE_TO_TARGET)

---
## TASK_PATROL
**Hash:** `0xBDA5DF49D080FE4E` | **Returns:** `void`
**Alt name:** `TaskPatrol`

```
After looking at some scripts the second parameter seems to be an id of some kind. Here are some I found from some R* scripts:
"miss_Tower_01" (this went from 01 - 10)
"miss_Ass0" (0, 4, 6, 3)
"MISS_PATROL_8"
I think they're patrol routes, but I'm not sure. And I believe the 3rd parameter is a BOOL, but I can't confirm other than only seeing 0 and 1 being passed.
As far as I can see the patrol routes names such as "miss_Ass0" have been defined earlier in the scripts. This leads me to believe we can defined our own new patrol routes by following the same approach.
From the scripts
    TASK::OPEN_PATROL_ROUTE("miss_Ass0");
    TASK::ADD_PATROL_ROUTE_NODE(0, "WORLD_HUMAN_GUARD_STAND", l_738[0/*3*/], -139.4076690673828, -993.4732055664062, 26.2754, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));
    TASK::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_738[1/*3*/], -116.1391830444336, -987.4984130859375, 26.38541030883789, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));
    TASK::ADD_PATROL_ROUTE_NODE(2, "WORLD_HUMAN_GUARD_STAND", l_738[2/*3*/], -128.46847534179688, -979.0340576171875, 26.2754, MISC::GET_RANDOM_INT_IN_RANGE(5000, 10000));
    TASK::ADD_PATROL_ROUTE_LINK(0, 1);
    TASK::ADD_PATROL_ROUTE_LINK(1, 2);
    TASK::ADD_PATROL_ROUTE_LINK(2, 0);
    TASK::CLOSE_PATROL_ROUTE();
    TASK::CREATE_PATROL_ROUTE();
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `char*` |
| `p2` | `Any` |
| `p3` | `BOOL` |
| `p4` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_PATROL)

---
## TASK_PAUSE
**Hash:** `0xE73A266DB0CA9042` | **Returns:** `void`
**Alt name:** `TaskPause`

This tasks the ped to do nothing for the specified amount of miliseconds.
This is useful if you want to add a delay between tasks when using a sequence task.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `ms` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_PAUSE)

---
## TASK_PED_SLIDE_TO_COORD
**Hash:** `0xD04FE6765D990A06` | **Returns:** `void`
**Alt name:** `TaskPedSlideToCoord`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `duration` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_PED_SLIDE_TO_COORD)

---
## TASK_PED_SLIDE_TO_COORD_HDG_RATE
**Hash:** `0x5A4A6A6D3DC64F52` | **Returns:** `void`
**Alt name:** `TaskPedSlideToCoordHdgRate`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `p5` | `float` |
| `p6` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_PED_SLIDE_TO_COORD_HDG_RATE)

---
## TASK_PERFORM_SEQUENCE
**Hash:** `0x5ABA3986D90D8A3B` | **Returns:** `void`
**Alt name:** `TaskPerformSequence`

For an example on how to use this please refer to [OPEN_SEQUENCE_TASK](#\_0xE8854A4326B9E12B)

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `taskSequenceId` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_PERFORM_SEQUENCE)

---
## TASK_PERFORM_SEQUENCE_FROM_PROGRESS
**Hash:** `0x89221B16730234F0` | **Returns:** `void`
**Alt name:** `TaskPerformSequenceFromProgress`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `taskIndex` | `int` |
| `progress1` | `int` |
| `progress2` | `int` |

**Example:**
```lua
Citizen.CreateThread(function()
    local animDict = 'timetable@ron@ig_5_p3'

    RequestAnimDict(animDict)
    while not HasAnimDictLoaded(animDict) do
        Wait(0)
    end

    local ped = PlayerPedId()
    local pos = GetEntityCoords(ped)

    -- you can change the model, but you might have to change the offsets below.
    local objModelHash = `prop_bench_01a`

    local obj = GetClosestObjectOfType(pos.x, pos.y, pos.z, 5.0, objModelHash, false, false, false)
    if obj == 0 then
        print("No valid object within range!")
        return
    end

    local tgtPos = GetOffsetFromEntityInWorldCoords(obj, 0.0, -0.7, 0.0)

    -- open the task sequence so we can get our sequence id
    local sequence = OpenSequenceTask()

    local desiredHeading = GetEntityHeading(obj) - 180.0

    -- go to the entities offset
    TaskGoStraightToCoord(nil, tgtPos.x, tgtPos.y, tgtPos.z, 1.0, 4000, desiredHeading, 1.0)

    -- sit on the bench indefinitely (you can change -1 here to however long you want to sit)
    TaskPlayAnim(nil, animDict, 'ig_5_p3_base', 8.0, 8.0, -1, 1)

    -- close the sequence so we can perform it
    CloseSequenceTask(sequence)

    -- perform the sequence, this will not work if the sequence is still open.
    -- note that progress1 is set to 1, this means it will skip the first sequence
    TaskPerformSequenceFromProgress(ped, sequence, 1, 1)

    -- free the sequence slot so it can be re-used
    ClearSequenceTask(sequence)

    -- cleanup the animation dict so the engine can remove it when its no longer needed
    RemoveAnimDict(animDict)
end)
```

[View docs](https://cfxnatives.dev/natives/TASK_PERFORM_SEQUENCE_FROM_PROGRESS)

---
## TASK_PERFORM_SEQUENCE_LOCALLY
**Hash:** `0x8C33220C8D78CA0D` | **Returns:** `void`
**Alt name:** `TaskPerformSequenceLocally`

For an example on how to use this please refer to \[OPEN_SEQUENCE_TASK]\(#\_0xE8854A4326B9E12B

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `taskSequenceId` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_PERFORM_SEQUENCE_LOCALLY)

---
## TASK_PLANE_CHASE
**Hash:** `0x2D2386F273FF7A25` | **Returns:** `void`
**Alt name:** `TaskPlaneChase`

**Parameters:**
| Name | Type |
|------|------|
| `pilot` | `Ped` |
| `entityToFollow` | `Entity` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_PLANE_CHASE)

---
## TASK_PLANE_LAND
**Hash:** `0xBF19721FA34D32C0` | **Returns:** `void`
**Alt name:** `TaskPlaneLand`

**Parameters:**
| Name | Type |
|------|------|
| `pilot` | `Ped` |
| `plane` | `Vehicle` |
| `runwayStartX` | `float` |
| `runwayStartY` | `float` |
| `runwayStartZ` | `float` |
| `runwayEndX` | `float` |
| `runwayEndY` | `float` |
| `runwayEndZ` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_PLANE_LAND)

---
## TASK_PLANE_MISSION
**Hash:** `0x23703CD154E83B88` | **Returns:** `void`
**Alt name:** `TaskPlaneMission`

```
EDITED (7/13/2017)  
NOTE: If you want air combat, AI::TASK_COMBAT_PED (while your pilot is in an aircraft) also does the same thing as this native.  
DESCRIPTION:  
Ever wish your buddy could shoot down one of your enemies for you? Ever wanted an auto-pilot? Well look no further! This is the native for you! (Ped intelligence may vary)  
USAGE:  
-- REQUIRED --  
• pilot = The ped flying the aircraft.  
• aircraft = The aircraft the pilot is flying  
-- OPTIONAL -- [atleast 1 must be assigned]  
• targetVehicle = The vehicle the pilot will target.  
• targetPed = The ped the pilot will target.  
• destinationX, destinationY, destinationZ = The location the pilot will target.  
-- LOGIC --  
• missionFlag = The type of mission. pastebin.com/R8x73dbv  
• angularDrag = The higher the value, the slower the plane will rotate. Value ranges from 0 - Infinity.  
• unk = Set to 0, and you'll be fine.  
• targetHeading = The target angle (from world space north) that the pilot will try to acheive before executing an attack/landing.  
• maxZ = Maximum Z coordinate height for flying.  
• minZ = Minimum Z coordinate height for flying.  
Z: 2,700 is the default max height a pilot will be able to fly. Anything greater and he will fly downward until reaching 2,700 again.  
Mission Types (incase you don't like links..):  
0 = None  
1 = Unk  
2 = CTaskVehicleRam  
3 = CTaskVehicleBlock  
4 = CTaskVehicleGoToPlane  
5 = CTaskVehicleStop  
6 = CTaskVehicleAttack  
7 = CTaskVehicleFollow  
8 = CTaskVehicleFleeAirborne  
9 = CTaskVehicleCircle  
10 = CTaskVehicleEscort  
15 = CTaskVehicleFollowRecording  
16 = CTaskVehiclePoliceBehaviour  
17 = CTaskVehicleCrash  
Example C#:  
Function.Call(Hash.TASK_PLANE_MISSION, pilot, vehicle, 0, Game.Player.Character, 0, 0, 0, 6, 0f, 0f, 0f, 2500.0f, -1500f);  
Example C++  
AI::TASK_PLANE_MISSION(pilot, vehicle, 0, PLAYER::GET_PLAYER_PED(PLAYER::GET_PLAYER_INDEX()), 0, 0, 0, 6, 0.0, 0.0, 0.0, 2500.0, -1500.0);  
[DEPRECATED] EXAMPLE USAGE:  
pastebin.com/gx7Finsk  
```

```
NativeDB Added Parameter 14: Any p13
```

**Parameters:**
| Name | Type |
|------|------|
| `pilot` | `Ped` |
| `aircraft` | `Vehicle` |
| `targetVehicle` | `Vehicle` |
| `targetPed` | `Ped` |
| `destinationX` | `float` |
| `destinationY` | `float` |
| `destinationZ` | `float` |
| `missionFlag` | `int` |
| `angularDrag` | `float` |
| `unk` | `float` |
| `targetHeading` | `float` |
| `maxZ` | `float` |
| `minZ` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_PLANE_MISSION)

---
## TASK_PLANE_TAXI
**Hash:** `0x92C360B5F15D2302` | **Returns:** `void`
**Alt name:** `TaskPlaneTaxi`

The given ped will try to drive the plane to the given coordinates and will then drive around the given coords (the plane will form 8s on the ground)

**Parameters:**
| Name | Type |
|------|------|
| `pilot` | `Ped` |
| `aircraft` | `Vehicle` |
| `xPos` | `float` |
| `yPos` | `float` |
| `zPos` | `float` |
| `fCruiseSpeed` | `float` |
| `fTargetReachedDist` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_PLANE_TAXI)

---
## TASK_PLANT_BOMB
**Hash:** `0x965FEC691D55E9BF` | **Returns:** `void`
**Alt name:** `TaskPlantBomb`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_PLANT_BOMB)

---
## TASK_PLAY_ANIM
**Hash:** `0xEA47FE3719165B94` | **Returns:** `void`
**Alt name:** `TaskPlayAnim`

[Animations list](https://alexguirre.github.io/animations-list/)

```cpp
enum eScriptedAnimFlags
{
    AF_LOOPING = 1,
    AF_HOLD_LAST_FRAME = 2,
    AF_REPOSITION_WHEN_FINISHED = 4,
    AF_NOT_INTERRUPTABLE = 8,
    AF_UPPERBODY = 16,
    AF_SECONDARY = 32,
    AF_REORIENT_WHEN_FINISHED = 64,
    AF_ABORT_ON_PED_MOVEMENT = 128,
    AF_ADDITIVE = 256,
    AF_TURN_OFF_COLLISION = 512,
    AF_OVERRIDE_PHYSICS = 1024,
    AF_IGNORE_GRAVITY = 2048,
    AF_EXTRACT_INITIAL_OFFSET = 4096,
    AF_EXIT_AFTER_INTERRUPTED = 8192,
    AF_TAG_SYNC_IN = 16384,
    AF_TAG_SYNC_OUT = 32768,
    AF_TAG_SYNC_CONTINUOUS = 65536,
    AF_FORCE_START = 131072,
    AF_USE_KINEMATIC_PHYSICS = 262144,
    AF_USE_MOVER_EXTRACTION = 524288,
    AF_HIDE_WEAPON = 1048576,
    AF_ENDS_IN_DEAD_POSE = 2097152,
    AF_ACTIVATE_RAGDOLL_ON_COLLISION = 4194304,
    AF_DONT_EXIT_ON_DEATH = 8388608,
    AF_ABORT_ON_WEAPON_DAMAGE = 16777216,
    AF_DISABLE_FORCED_PHYSICS_UPDATE = 33554432,
    AF_PROCESS_ATTACHMENTS_ON_START = 67108864,
    AF_EXPAND_PED_CAPSULE_FROM_SKELETON = 134217728,
    AF_USE_ALTERNATIVE_FP_ANIM = 268435456,
    AF_BLENDOUT_WRT_LAST_FRAME = 536870912,
    AF_USE_FULL_BLENDING = 1073741824
}
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `animDictionary` | `char*` |
| `animationName` | `char*` |
| `blendInSpeed` | `float` |
| `blendOutSpeed` | `float` |
| `duration` | `int` |
| `flag` | `int` |
| `playbackRate` | `float` |
| `lockX` | `BOOL` |
| `lockY` | `BOOL` |
| `lockZ` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_PLAY_ANIM)

---
## TASK_PLAY_ANIM_ADVANCED
**Hash:** `0x83CDB10EA29B370B` | **Returns:** `void`
**Alt name:** `TaskPlayAnimAdvanced`

Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.

[Animations list](https://alexguirre.github.io/animations-list/)

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `animDictionary` | `char*` |
| `animationName` | `char*` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `rotX` | `float` |
| `rotY` | `float` |
| `rotZ` | `float` |
| `blendInSpeed` | `float` |
| `blendOutSpeed` | `float` |
| `duration` | `int` |
| `flag` | `Any` |
| `animTime` | `float` |
| `p14` | `Any` |
| `p15` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_PLAY_ANIM_ADVANCED)

---
## TASK_PLAY_PHONE_GESTURE_ANIMATION
**Hash:** `0x8FBB6758B3B3E9EC` | **Returns:** `void`
**Alt name:** `TaskPlayPhoneGestureAnimation`

```
Example from the scripts:
TASK::TASK_PLAY_PHONE_GESTURE_ANIMATION(PLAYER::PLAYER_PED_ID(), v_3, v_2, v_4, 0.25, 0.25, 0, 0);
=========================================================
^^ No offense, but Idk how that would really help anyone.
As for the animDict & animation, they're both store in a global in all 5 scripts. So if anyone would be so kind as to read that global and comment what strings they use. Thanks.
Known boneMaskTypes'
"BONEMASK_HEADONLY"
"BONEMASK_HEAD_NECK_AND_ARMS"
"BONEMASK_HEAD_NECK_AND_L_ARM"
"BONEMASK_HEAD_NECK_AND_R_ARM"
p4 known args - 0.0f, 0.5f, 0.25f
p5 known args - 0.0f, 0.25f
p6 known args - 1 if a global if check is passed.
p7 known args - 1 if a global if check is passed.
The values found above, I found within the 5 scripts this is ever called in. (fmmc_launcher, fm_deathmatch_controller, fm_impromptu_dm_controller, fm_mission_controller, and freemode).
=========================================================
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `animDict` | `char*` |
| `animation` | `char*` |
| `boneMaskType` | `char*` |
| `p4` | `float` |
| `p5` | `float` |
| `p6` | `BOOL` |
| `p7` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_PLAY_PHONE_GESTURE_ANIMATION)

---
## TASK_PUT_PED_DIRECTLY_INTO_COVER
**Hash:** `0x4172393E6BE1FECE` | **Returns:** `void`
**Alt name:** `TaskPutPedDirectlyIntoCover`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `timeout` | `Any` |
| `p5` | `BOOL` |
| `p6` | `float` |
| `p7` | `BOOL` |
| `p8` | `BOOL` |
| `p9` | `Any` |
| `p10` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_PUT_PED_DIRECTLY_INTO_COVER)

---
## TASK_PUT_PED_DIRECTLY_INTO_MELEE
**Hash:** `0x1C6CD14A876FFE39` | **Returns:** `void`
**Alt name:** `TaskPutPedDirectlyIntoMelee`

```
from armenian3.c4
TASK::TASK_PUT_PED_DIRECTLY_INTO_MELEE(PlayerPed, armenianPed, 0.0, -1.0, 0.0, 0);
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `meleeTarget` | `Ped` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_PUT_PED_DIRECTLY_INTO_MELEE)

---
## TASK_RAPPEL_FROM_HELI
**Hash:** `0x09693B0312F91649` | **Returns:** `void`
**Alt name:** `TaskRappelFromHeli`

```
Only appears twice in the scripts.
TASK::TASK_RAPPEL_FROM_HELI(PLAYER::PLAYER_PED_ID(), 0x41200000);
TASK::TASK_RAPPEL_FROM_HELI(a_0, 0x41200000);
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `unused` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_RAPPEL_FROM_HELI)

---
## TASK_REACT_AND_FLEE_PED
**Hash:** `0x72C896464915D1B1` | **Returns:** `void`
**Alt name:** `TaskReactAndFleePed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `fleeTarget` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_REACT_AND_FLEE_PED)

---
## TASK_RELOAD_WEAPON
**Hash:** `0x62D2916F56B9CD2D` | **Returns:** `void`
**Alt name:** `TaskReloadWeapon`

```
The 2nd param (unused) is not implemented.
-----------------------------------------------------------------------
The only occurrence I found in a R* script ("assassin_construction.ysc.c4"):
            if (((v_3 < v_4) && (TASK::GET_SCRIPT_TASK_STATUS(PLAYER::PLAYER_PED_ID(), 0x6a67a5cc) != 1)) && (v_5 > v_3)) {
                TASK::TASK_RELOAD_WEAPON(PLAYER::PLAYER_PED_ID(), 1);
            }
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `unused` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_RELOAD_WEAPON)

---
## TASK_SCRIPTED_ANIMATION
**Hash:** `0x126EF75F1E17ABE5` | **Returns:** `void`
**Alt name:** `TaskScriptedAnimation`

```
From fm_mission_controller.c:  
reserve_network_mission_objects(get_num_reserved_mission_objects(0) + 1);  
	vVar28 = {0.094f, 0.02f, -0.005f};  
	vVar29 = {-92.24f, 63.64f, 150.24f};  
	func_253(&uVar30, joaat("prop_ld_case_01"), Global_1592429.imm_34757[iParam1 <268>], 1, 1, 0, 1);  
	set_entity_lod_dist(net_to_ent(uVar30), 500);  
	attach_entity_to_entity(net_to_ent(uVar30), iParam0, get_ped_bone_index(iParam0, 28422), vVar28, vVar29, 1, 0, 0, 0, 2, 1);  
	Var31.imm_4 = 1065353216;  
	Var31.imm_5 = 1065353216;  
	Var31.imm_9 = 1065353216;  
	Var31.imm_10 = 1065353216;  
	Var31.imm_14 = 1065353216;  
	Var31.imm_15 = 1065353216;  
	Var31.imm_17 = 1040187392;  
	Var31.imm_18 = 1040187392;  
	Var31.imm_19 = -1;  
	Var32.imm_4 = 1065353216;  
	Var32.imm_5 = 1065353216;  
	Var32.imm_9 = 1065353216;  
	Var32.imm_10 = 1065353216;  
	Var32.imm_14 = 1065353216;  
	Var32.imm_15 = 1065353216;  
	Var32.imm_17 = 1040187392;  
	Var32.imm_18 = 1040187392;  
	Var32.imm_19 = -1;  
	Var31 = 1;  
	Var31.imm_1 = "weapons@misc@jerrycan@mp_male";  
	Var31.imm_2 = "idle";  
	Var31.imm_20 = 1048633;  
	Var31.imm_4 = 0.5f;  
	Var31.imm_16 = get_hash_key("BONEMASK_ARMONLY_R");  
	task_scripted_animation(iParam0, &Var31, &Var32, &Var32, 0f, 0.25f);  
	set_model_as_no_longer_needed(joaat("prop_ld_case_01"));  
	remove_anim_dict("anim@heists@biolab@");  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `Any*` |
| `p2` | `Any*` |
| `p3` | `Any*` |
| `p4` | `float` |
| `p5` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_SCRIPTED_ANIMATION)

---
## TASK_SEEK_COVER_FROM_PED
**Hash:** `0x84D32B3BEC531324` | **Returns:** `void`
**Alt name:** `TaskSeekCoverFromPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `target` | `Ped` |
| `duration` | `int` |
| `p3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_SEEK_COVER_FROM_PED)

---
## TASK_SEEK_COVER_FROM_POS
**Hash:** `0x75AC2B60386D89F2` | **Returns:** `void`
**Alt name:** `TaskSeekCoverFromPos`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `duration` | `int` |
| `p5` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_SEEK_COVER_FROM_POS)

---
## TASK_SEEK_COVER_TO_COORDS
**Hash:** `0x39246A6958EF072C` | **Returns:** `void`
**Alt name:** `TaskSeekCoverToCoords`

```
from michael2:
TASK::TASK_SEEK_COVER_TO_COORDS(ped, 967.5164794921875, -2121.603515625, 30.479299545288086, 978.94677734375, -2125.84130859375, 29.4752, -1, 1);
appears to be shorter variation
from michael3:
TASK::TASK_SEEK_COVER_TO_COORDS(ped, -2231.011474609375, 263.6326599121094, 173.60195922851562, -1, 0);
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `p7` | `Any` |
| `p8` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_SEEK_COVER_TO_COORDS)

---
## TASK_SEEK_COVER_TO_COVER_POINT
**Hash:** `0xD43D95C7A869447F` | **Returns:** `void`
**Alt name:** `TaskSeekCoverToCoverPoint`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `Any` |
| `p6` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_SEEK_COVER_TO_COVER_POINT)

---
## TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS
**Hash:** `0x90D2156198831D69` | **Returns:** `void`
**Alt name:** `TaskSetBlockingOfNonTemporaryEvents`

```
I cant believe I have to define this, this is one of the best natives.  
It makes the ped ignore basically all shocking events around it. Occasionally the ped may comment or gesture, but other than that they just continue their daily activities. This includes shooting and wounding the ped. And - most importantly - they do not flee.  
Since it is a task, every time the native is called the ped will stop for a moment.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS)

---
## TASK_SET_DECISION_MAKER
**Hash:** `0xEB8517DDA73720DA` | **Returns:** `void`
**Alt name:** `TaskSetDecisionMaker`

```
p1 is always GET_HASH_KEY("empty") in scripts, for the rare times this is used  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `Hash` |

[View docs](https://cfxnatives.dev/natives/TASK_SET_DECISION_MAKER)

---
## TASK_SET_SPHERE_DEFENSIVE_AREA
**Hash:** `0x933C06518B52A9A4` | **Returns:** `void`
**Alt name:** `TaskSetSphereDefensiveArea`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_SET_SPHERE_DEFENSIVE_AREA)

---
## TASK_SHOCKING_EVENT_REACT
**Hash:** `0x452419CBD838065B` | **Returns:** `void`
**Alt name:** `TaskShockingEventReact`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `eventHandle` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_SHOCKING_EVENT_REACT)

---
## TASK_SHOOT_AT_COORD
**Hash:** `0x46A6CC01E0826106` | **Returns:** `void`
**Alt name:** `TaskShootAtCoord`

```
Firing Pattern Hash Information: https://pastebin.com/Px036isB
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `duration` | `int` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_SHOOT_AT_COORD)

---
## TASK_SHOOT_AT_ENTITY
**Hash:** `0x08DA95E8298AE772` | **Returns:** `void`
**Alt name:** `TaskShootAtEntity`

```
//this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
Entity aimedentity;
Player player = PLAYER::PLAYER_ID();
PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);
//bg is an array of peds
TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));
in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
Firing Pattern Hash Information: https://pastebin.com/Px036isB
```

**Parameters:**
| Name | Type |
|------|------|
| `entity` | `Entity` |
| `target` | `Entity` |
| `duration` | `int` |
| `firingPattern` | `Hash` |

[View docs](https://cfxnatives.dev/natives/TASK~TASK_SHOOT_AT_ENTITY)

---
## TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT
**Hash:** `0x7AA80209BDA643EB` | **Returns:** `void`
**Alt name:** `TaskShuffleToNextVehicleSeat`

```
Makes the specified ped shuffle to the next vehicle seat.  
The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.  
```

```
NativeDB Added Parameter 3: Any p2
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT)

---
## TASK_SKY_DIVE
**Hash:** `0x601736CFE536B0A0` | **Returns:** `void`
**Alt name:** `TaskSkyDive`

```
NativeDB Added Parameter 2: BOOL p1
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK_SKY_DIVE)

---
## TASK_SMART_FLEE_COORD
**Hash:** `0x94587F17E9C365D5` | **Returns:** `void`
**Alt name:** `TaskSmartFleeCoord`

```
Makes the specified ped flee the specified distance from the specified position.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `distance` | `float` |
| `time` | `int` |
| `p6` | `BOOL` |
| `p7` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_SMART_FLEE_COORD)

---
## TASK_SMART_FLEE_PED
**Hash:** `0x22B0D0E37CCB840D` | **Returns:** `void`
**Alt name:** `TaskSmartFleePed`

```
Makes a ped run away from another ped (fleeTarget).  
distance = ped will flee this distance.  
fleeTime = ped will flee for this amount of time, set to "-1" to flee forever  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `fleeTarget` | `Ped` |
| `distance` | `float` |
| `fleeTime` | `Any` |
| `p4` | `BOOL` |
| `p5` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_SMART_FLEE_PED)

---
## TASK_STAND_GUARD
**Hash:** `0xAE032F8BBA959E90` | **Returns:** `void`
**Alt name:** `TaskStandGuard`

```
scenarioName example: "WORLD_HUMAN_GUARD_STAND"  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `scenarioName` | `char*` |

[View docs](https://cfxnatives.dev/natives/TASK_STAND_GUARD)

---
## TASK_STAND_STILL
**Hash:** `0x919BE13EED931959` | **Returns:** `void`
**Alt name:** `TaskStandStill`

```
Makes the specified ped stand still for (time) milliseconds.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `time` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_STAND_STILL)

---
## TASK_START_SCENARIO_AT_POSITION
**Hash:** `0xFA4EFC79F69D4F07` | **Returns:** `void`
**Alt name:** `TaskStartScenarioAtPosition`

The ped will move or warp to the position and heading given, then start the scenario passed. See [`TASK_START_SCENARIO_IN_PLACE`](#\_0x142A02425FF02BD9) for a list of scenarios.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `scenarioName` | `char*` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `timeToLeave` | `int` |
| `playIntro` | `BOOL` |
| `warp` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_START_SCENARIO_AT_POSITION)

---
## TASK_START_SCENARIO_IN_PLACE
**Hash:** `0x142A02425FF02BD9` | **Returns:** `void`
**Alt name:** `TaskStartScenarioInPlace`

Puts the ped into the given scenario immediately at their current location. [List of scenario names](https://pastebin.com/6mrYTdQv) or in `update/update.rpf/common/data/ai/scenarios.meta`.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `scenarioName` | `char*` |
| `timeToLeave` | `int` |
| `playIntroClip` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_START_SCENARIO_IN_PLACE)

---
## TASK_STAY_IN_COVER
**Hash:** `0xE5DA8615A6180789` | **Returns:** `void`
**Alt name:** `TaskStayInCover`

```
Makes the ped run to take cover  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK_STAY_IN_COVER)

---
## TASK_STEALTH_KILL
**Hash:** `0xAA5DC05579D60BD9` | **Returns:** `void`
**Alt name:** `TaskStealthKill`

```
Stealth kill action name hashes:  
stealth kills can be found here: Grand Theft Auto V\common.rpf\data\action\stealth_kills.meta  
...  
{  
    "ACT_stealth_kill_a",  
    "ACT_stealth_kill_weapon",  
    "ACT_stealth_kill_b",  
    "ACT_stealth_kill_c",  
    "ACT_stealth_kill_d",  
    "ACT_stealth_kill_a_gardener"  
}  
Only known script using this native: fbi4_prep2  
EXAMPLE:  
ai::task_stealth_kill(iParam1, Local_252, gameplay::get_hash_key("AR_stealth_kill_a"), 1f, 0);ai::task_stealth_kill(iParam1, Local_252, gameplay::get_hash_key("AR_stealth_kill_knife"), 1f, 0);  
Also it may be important to note, that each time this task is called, it's followed by AI::CLEAR_PED_TASKS on the target  
```

**Parameters:**
| Name | Type |
|------|------|
| `killer` | `Ped` |
| `target` | `Ped` |
| `actionType` | `Hash` |
| `p3` | `float` |
| `p4` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_STEALTH_KILL)

---
## TASK_STOP_PHONE_GESTURE_ANIMATION
**Hash:** `0x3FA00D4F4641BFAE` | **Returns:** `void`
**Alt name:** `TaskStopPhoneGestureAnimation`

```
NativeDB Added Parameter 2: Any p1
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK_STOP_PHONE_GESTURE_ANIMATION)

---
## TASK_SWAP_WEAPON
**Hash:** `0xA21C51255B205245` | **Returns:** `void`
**Alt name:** `TaskSwapWeapon`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_SWAP_WEAPON)

---
## TASK_SWEEP_AIM_ENTITY
**Hash:** `0x2047C02158D6405A` | **Returns:** `void`
**Alt name:** `TaskSweepAimEntity`

```
This function is called on peds in vehicles.  
anim: animation name  
p2, p3, p4: "sweep_low", "sweep_med" or "sweep_high"  
p5: no idea what it does but is usually -1  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `anim` | `char*` |
| `p2` | `char*` |
| `p3` | `char*` |
| `p4` | `char*` |
| `p5` | `int` |
| `vehicle` | `Vehicle` |
| `p7` | `float` |
| `p8` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_SWEEP_AIM_ENTITY)

---
## TASK_SWEEP_AIM_POSITION
**Hash:** `0x7AFE8FDC10BC07D2` | **Returns:** `void`
**Alt name:** `TaskSweepAimPosition`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any*` |
| `p2` | `Any*` |
| `p3` | `Any*` |
| `p4` | `Any*` |
| `p5` | `Any` |
| `p6` | `float` |
| `p7` | `float` |
| `p8` | `float` |
| `p9` | `float` |
| `p10` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_SWEEP_AIM_POSITION)

---
## TASK_SYNCHRONIZED_SCENE
**Hash:** `0xEEA929141F699854` | **Returns:** `void`
**Alt name:** `TaskSynchronizedScene`

```
 TASK::TASK_SYNCHRONIZED_SCENE(ped, scene, "creatures@rottweiler@in_vehicle@std_car", "get_in", 1000.0, -8.0, 4, 0, 0x447a0000, 0);
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `scene` | `int` |
| `animDictionary` | `char*` |
| `animationName` | `char*` |
| `speed` | `float` |
| `speedMultiplier` | `float` |
| `duration` | `int` |
| `flag` | `int` |
| `playbackRate` | `float` |
| `p9` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_SYNCHRONIZED_SCENE)

---
## TASK_THROW_PROJECTILE
**Hash:** `0x7285951DBF6B5A51` | **Returns:** `void`
**Alt name:** `TaskThrowProjectile`

```
In every case of this native, I've only seen the first parameter passed as 0, although I believe it's a Ped after seeing tasks around it using 0. That's because it's used in a Sequence Task.  
The last 3 parameters are definitely coordinates after seeing them passed in other scripts, and even being used straight from the player's coordinates.  
---  
It seems that - in the decompiled scripts - this native was used on a ped who was in a vehicle to throw a projectile out the window at the player. This is something any ped will naturally do if they have a throwable and they are doing driveby-combat (although not very accurately).  
It is possible, however, that this is how SWAT throws smoke grenades at the player when in cover.  
----------------------------------------------------  
The first comment is right it definately is the ped as if you look in script finale_heist2b.c line 59628 in Xbox Scripts atleast you will see task_throw_projectile and the first param is Local_559[2 <14>] if you look above it a little bit line 59622 give_weapon_to_ped uses the same exact param Local_559[2 <14>] and we all know the first param of that native is ped. So it guaranteed has to be ped. 0 just may mean to use your ped by default for some reason.  
```

```
NativeDB Added Parameter 5: Any p4
NativeDB Added Parameter 6: Any p5
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_THROW_PROJECTILE)

---
## TASK_TOGGLE_DUCK
**Hash:** `0xAC96609B9995EDF8` | **Returns:** `void`
**Alt name:** `TaskToggleDuck`

```
used in sequence task  
both parameters seems to be always 0  
```

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `BOOL` |
| `p1` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_TOGGLE_DUCK)

---
## TASK_TURN_PED_TO_FACE_COORD
**Hash:** `0x1DDA930A0AC38571` | **Returns:** `void`
**Alt name:** `TaskTurnPedToFaceCoord`

```
duration in milliseconds  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `duration` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_TURN_PED_TO_FACE_COORD)

---
## TASK_TURN_PED_TO_FACE_ENTITY
**Hash:** `0x5AD23D40115353AC` | **Returns:** `void`
**Alt name:** `TaskTurnPedToFaceEntity`

```
duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `entity` | `Entity` |
| `duration` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_TURN_PED_TO_FACE_ENTITY)

---
## TASK_USE_MOBILE_PHONE
**Hash:** `0xBD2A8EC3AF4DE7DB` | **Returns:** `void`
**Alt name:** `TaskUseMobilePhone`

```
Actually has 3 params, not 2.  
p0: Ped  
p1: int (or bool?)  
p2: int  
```

```
NativeDB Added Parameter 3: Any p2
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_USE_MOBILE_PHONE)

---
## TASK_USE_MOBILE_PHONE_TIMED
**Hash:** `0x5EE02954A14C69DB` | **Returns:** `void`
**Alt name:** `TaskUseMobilePhoneTimed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `duration` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_USE_MOBILE_PHONE_TIMED)

---
## TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD
**Hash:** `0x9FDA1B3D7E7028B3` | **Returns:** `void`
**Alt name:** `TaskUseNearestScenarioChainToCoord`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD)

---
## TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD_WARP
**Hash:** `0x97A28E63F0BA5631` | **Returns:** `void`
**Alt name:** `TaskUseNearestScenarioChainToCoordWarp`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD_WARP)

---
## TASK_USE_NEAREST_SCENARIO_TO_COORD
**Hash:** `0x277F471BA9DB000B` | **Returns:** `void`
**Alt name:** `TaskUseNearestScenarioToCoord`

```
Updated variables
An alternative to TASK::TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP. Makes the ped walk to the scenario instead.
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `distance` | `float` |
| `duration` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_USE_NEAREST_SCENARIO_TO_COORD)

---
## TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP
**Hash:** `0x58E2E0F23F6B76C3` | **Returns:** `void`
**Alt name:** `TaskUseNearestScenarioToCoordWarp`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `p5` | `Any` |

[View docs](https://cfxnatives.dev/natives/TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP)

---
## TASK_VEHICLE_AIM_AT_COORD
**Hash:** `0x447C1E9EF844BC0F` | **Returns:** `void`
**Alt name:** `TaskVehicleAimAtCoord`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_AIM_AT_COORD)

---
## TASK_VEHICLE_AIM_AT_PED
**Hash:** `0xE41885592B08B097` | **Returns:** `void`
**Alt name:** `TaskVehicleAimAtPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `target` | `Ped` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_AIM_AT_PED)

---
## TASK_VEHICLE_CHASE
**Hash:** `0x3C08A8E30363B353` | **Returns:** `void`
**Alt name:** `TaskVehicleChase`

```
chases targetEnt fast and aggressively  
--  
Makes ped (needs to be in vehicle) chase targetEnt.  
```

**Parameters:**
| Name | Type |
|------|------|
| `driver` | `Ped` |
| `targetEnt` | `Entity` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_CHASE)

---
## TASK_VEHICLE_DRIVE_TO_COORD
**Hash:** `0xE2A2AA2F659D77A7` | **Returns:** `void`
**Alt name:** `TaskVehicleDriveToCoord`

```
info about driving modes: HTTP://gtaforums.com/topic/822314-guide-driving-styles/  
---------------------------------------------------------------  
Passing P6 value as floating value didn't throw any errors, though unsure what is it exactly, looks like radius or something.  
P10 though, it is mentioned as float, however, I used bool and set it to true, that too worked.  
Here the e.g. code I used  
Function.Call(Hash.TASK_VEHICLE_DRIVE_TO_COORD, Ped, Vehicle, Cor X, Cor Y, Cor Z, 30f, 1f, Vehicle.GetHashCode(), 16777216, 1f, true);  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `speed` | `float` |
| `p6` | `Any` |
| `vehicleModel` | `Hash` |
| `drivingMode` | `int` |
| `stopRange` | `float` |
| `p10` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_DRIVE_TO_COORD)

---
## TASK_VEHICLE_DRIVE_TO_COORD_LONGRANGE
**Hash:** `0x158BB33F920D360C` | **Returns:** `void`
**Alt name:** `TaskVehicleDriveToCoordLongrange`

You can let your character drive to the destination at the speed and driving style you set. You can use map marks to set the destination.

```cpp
enum eDriveBehaviorFlags {
  DF_StopForCars = 1,
  DF_StopForPeds = 2,
  DF_SwerveAroundAllCars = 4,
  DF_SteerAroundStationaryCars = 8,
  DF_SteerAroundPeds = 16,
  DF_SteerAroundObjects = 32,
  DF_DontSteerAroundPlayerPed = 64,
  DF_StopAtLights = 128,
  DF_GoOffRoadWhenAvoiding = 256,
  DF_DriveIntoOncomingTraffic = 512,
  DF_DriveInReverse = 1024,
  DF_UseWanderFallbackInsteadOfStraightLine = 2048,
  DF_AvoidRestrictedAreas = 4096,
  DF_PreventBackgroundPathfinding = 8192, // **These only work on MISSION_CRUISE**
  DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
  DF_UseShortCutLinks = 262144,
  DF_ChangeLanesAroundObstructions = 524288,
  DF_UseSwitchedOffNodes = 2097152,	//cruise tasks ignore this anyway--only used for goto's
  DF_PreferNavmeshRoute = 4194304,	//if you're going to be primarily driving off road
  DF_PlaneTaxiMode = 8388608, // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
  DF_ForceStraightLine = 16777216,
  DF_UseStringPullingAtJunctions = 33554432,
  DF_AvoidHighways = 536870912,
  DF_ForceJoinInRoadDirection = 1073741824
}
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `speed` | `float` |
| `drivingStyle` | `int` |
| `stopRange` | `float` |

**Example:**
```cs
// A short example showcasing how this native works with map marks.

// Get the map mark location.
Vector3 destination = GetBlipInfoIdCoord(GetFirstBlipInfoId(8));

// If no mark is set, return immediately.
if (destination == Vector3.Zero)
{
    return;
}

TaskVehicleDriveToCoordLongrange(Game.PlayerPed.Handle, Game.PlayerPed.CurrentVehicle.Handle, destination.X, destination.Y, destination.Z, 60f, 447, 20f);
```

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_DRIVE_TO_COORD_LONGRANGE)

---
## TASK_VEHICLE_DRIVE_WANDER
**Hash:** `0x480142959D337D00` | **Returns:** `void`
**Alt name:** `TaskVehicleDriveWander`

Drive randomly with no destination set.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `speed` | `float` |
| `drivingStyle` | `int` |

**Example:**
```cs
TaskVehicleDriveWander(Game.PlayerPed.Handle, Game.PlayerPed.CurrentVehicle.Handle, 60f, 447);
```

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_DRIVE_WANDER)

---
## TASK_VEHICLE_ESCORT
**Hash:** `0x0FA6E4B75F302400` | **Returns:** `void`
**Alt name:** `TaskVehicleEscort`

```
Makes a ped follow the targetVehicle with <minDistance> in between.  
note: minDistance is ignored if drivingstyle is avoiding traffic, but Rushed is fine.  
Mode: The mode defines the relative position to the targetVehicle. The ped will try to position its vehicle there.  
-1 = behind  
0 = ahead  
1 = left  
2 = right  
3 = back left  
4 = back right  
if the target is closer than noRoadsDistance, the driver will ignore pathing/roads and follow you directly.  
Driving Styles guide: gtaforums.com/topic/822314-guide-driving-styles/  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `targetVehicle` | `Vehicle` |
| `mode` | `int` |
| `speed` | `float` |
| `drivingStyle` | `int` |
| `minDistance` | `float` |
| `p7` | `int` |
| `noRoadsDistance` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_ESCORT)

---
## TASK_VEHICLE_FOLLOW
**Hash:** `0xFC545A9F0626E3B6` | **Returns:** `void`
**Alt name:** `TaskVehicleFollow`

```
Makes a ped in a vehicle follow an entity (ped, vehicle, etc.)
drivingStyle: http://gtaforums.com/topic/822314-guide-driving-styles/
```

**Parameters:**
| Name | Type |
|------|------|
| `driver` | `Ped` |
| `vehicle` | `Vehicle` |
| `targetEntity` | `Entity` |
| `speed` | `float` |
| `drivingStyle` | `int` |
| `minDistance` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_FOLLOW)

---
## TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING
**Hash:** `0x3123FAA6DB1CF7ED` | **Returns:** `void`
**Alt name:** `TaskVehicleFollowWaypointRecording`

```
task_vehicle_follow_waypoint_recording(Ped p0, Vehicle p1, string p2, int p3, int p4, int p5, int p6, float.x p7, float.Y p8, float.Z p9, bool p10, int p11)
p2 = Waypoint recording string (found in update\update.rpf\x64\levels\gta5\waypointrec.rpf
p3 = 786468
p4 = 0
p5 = 16
p6 = -1 (angle?)
p7/8/9 = usually v3.zero
p10 = bool (repeat?)
p11 = 1073741824
-khorio
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `WPRecording` | `char*` |
| `p3` | `int` |
| `p4` | `int` |
| `p5` | `int` |
| `p6` | `int` |
| `p7` | `float` |
| `p8` | `BOOL` |
| `p9` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING)

---
## TASK_VEHICLE_GOTO_NAVMESH
**Hash:** `0x195AEEB13CEFE2EE` | **Returns:** `void`
**Alt name:** `TaskVehicleGotoNavmesh`

```
Differs from TASK_VEHICLE_DRIVE_TO_COORDS in that it will pick the shortest possible road route without taking one-way streets and other "road laws" into consideration.  
WARNING:  
A behaviorFlag value of 0 will result in a clunky, stupid driver!  
Recommended settings:  
speed = 30.0f,  
behaviorFlag = 156,   
stoppingRange = 5.0f;  
If you simply want to have your driver move to a fixed location, call it only once, or, when necessary in the event of interruption.   
If using this to continually follow a Ped who is on foot:  You will need to run this in a tick loop.  Call it in with the Ped's updated coordinates every 20 ticks or so and you will have one hell of a smart, fast-reacting NPC driver -- provided he doesn't get stuck.  If your update frequency is too fast, the Ped may not have enough time to figure his way out of being stuck, and thus, remain stuck.  One way around this would be to implement an "anti-stuck" mechanism, which allows the driver to realize he's stuck, temporarily pause the tick, unstuck, then resume the tick.  
EDIT:  This is being discussed in more detail at http://gtaforums.com/topic/818504-any-idea-on-how-to-make-peds-clever-and-insanely-fast-c/  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `speed` | `float` |
| `behaviorFlag` | `int` |
| `stoppingRange` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_GOTO_NAVMESH)

---
## TASK_VEHICLE_HELI_PROTECT
**Hash:** `0x1E09C32048FEFD1C` | **Returns:** `void`
**Alt name:** `TaskVehicleHeliProtect`

```
pilot, vehicle and altitude are rather self-explanatory.  
p4: is unused variable in the function.  
entityToFollow: you can provide a Vehicle entity or a Ped entity, the heli will protect them.  
'targetSpeed':  The pilot will dip the nose AS MUCH AS POSSIBLE so as to reach this value AS FAST AS POSSIBLE.  As such, you'll want to modulate it as opposed to calling it via a hard-wired, constant #.  
'radius' isn't just "stop within radius of X of target" like with ground vehicles.  In this case, the pilot will fly an entire circle around 'radius' and continue to do so.  
NOT CONFIRMED:  p7 appears to be a FlyingStyle enum.  Still investigating it as of this writing, but playing around with values here appears to result in different -behavior- as opposed to offsetting coordinates, altitude, target speed, etc.  
NOTE: If the pilot finds enemies, it will engage them until it kills them, but will return to protect the ped/vehicle given shortly thereafter.  
```

**Parameters:**
| Name | Type |
|------|------|
| `pilot` | `Ped` |
| `vehicle` | `Vehicle` |
| `entityToFollow` | `Entity` |
| `targetSpeed` | `float` |
| `p4` | `int` |
| `radius` | `float` |
| `altitude` | `int` |
| `p7` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_HELI_PROTECT)

---
## TASK_VEHICLE_MISSION
**Hash:** `0x659427E0EF36BCDE` | **Returns:** `void`
**Alt name:** `TaskVehicleMission`

All parameters except ped, vehicle, vehicleTarget and speed are optional; with `missionType` being only those that require a target entity.

If you don't want to use a parameter; pass `0` for int parameters, and `-1.0f` for the remaining float parameters.

```cpp
enum eVehicleMissionType
{
  None = 0,
  Cruise = 1,
  Ram = 2,
  Block = 3,
  GoTo = 4,
  Stop = 5,
  Attack = 6,
  Follow = 7,
  Flee = 8,
  Circle = 9,
  Escort = 12,
  GoToRacing = 14,
  FollowRecording = 15,
  PoliceBehaviour = 16,
  Land = 19,
  LandAndWait = 20,
  Crash = 21,
  PullOver = 22,
  HeliProtect = 23
}
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `vehicleTarget` | `Vehicle` |
| `missionType` | `int` |
| `speed` | `float` |
| `drivingStyle` | `int` |
| `radius` | `float` |
| `straightLineDist` | `float` |
| `DriveAgainstTraffic` | `BOOL` |

**Example:**
```lua
local vehicle_model = `adder`
RequestModel(vehicle_model)
repeat Wait(0) until HasModelLoaded(vehicle_model)

-- Player needs in a vehicle for this to work
local ped = PlayerPedId()
local coords = GetEntityCoords(ped) - GetEntityForwardVector(ped) * 15.0
local vehicle = CreateVehicle(vehicle_model, coords.x, coords.y, coords.z, GetEntityHeading(ped), true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(vehicle_model)

local ped_model = `a_m_m_skater_01`
RequestModel(ped_model)
repeat Wait(0) until HasModelLoaded(ped_model)

local driver = CreatePedInsideVehicle(vehicle, 0, ped_model, -1, true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(ped_model)

TaskVehicleMission(driver, vehicle, GetVehiclePedIsIn(ped, false), 8, 35.0, 786468, -1.0, -1.0, true)
-- Mission Type: Flee | Drive Style: DrivingModeAvoidVehiclesReckless
SetPedKeepTask(driver, true)
```

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_MISSION)

---
## TASK_VEHICLE_MISSION_COORS_TARGET
**Hash:** `0xF0AF20AA7731F8C3` | **Returns:** `void`
**Alt name:** `TaskVehicleMissionCoorsTarget`

All parameters except ped, vehicle, x, y, z and speed are optional; with `missionType` being only those that don't require a target entity.

If you don't want to use a parameter; pass `0` for int parameters, and `-1.0f` for the remaining float parameters.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `missionType` | `int` |
| `speed` | `float` |
| `drivingStyle` | `int` |
| `radius` | `float` |
| `straightLineDist` | `float` |
| `DriveAgainstTraffic` | `BOOL` |

**Example:**
```lua
local vehicle_model = `adder`
RequestModel(vehicle_model)
repeat Wait(0) until HasModelLoaded(vehicle_model)

local ped = PlayerPedId()
local coords = GetEntityCoords(ped)
local spawn_coords = coords - GetEntityForwardVector(ped) * 15.0
local vehicle = CreateVehicle(vehicle_model, spawn_coords.x, spawn_coords.y, spawn_coords.z, GetEntityHeading(ped), true, false)

-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(vehicle_model)

local ped_model = `a_m_m_skater_01`
RequestModel(ped_model)
repeat Wait(0) until HasModelLoaded(ped_model)

local driver = CreatePedInsideVehicle(vehicle, 0, ped_model, -1, true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(ped_model)

TaskVehicleMissionCoorsTarget(driver, vehicle, coords.x, coords.y, coords.z, 8, 35.0, 786468, -1.0, -1.0, true)
-- Mission Type: Flee | Drive Style: DrivingModeAvoidVehiclesReckless
SetPedKeepTask(driver, true)
```

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_MISSION_COORS_TARGET)

---
## TASK_VEHICLE_MISSION_PED_TARGET
**Hash:** `0x9454528DF15D657A` | **Returns:** `void`
**Alt name:** `TaskVehicleMissionPedTarget`

All parameters except ped, vehicle, pedTarget and speed are optional; with `missionType` being only those that require a target entity.

If you don't want to use a parameter; pass `0` for int parameters, and `-1.0f` for the remaining float parameters.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `pedTarget` | `Ped` |
| `missionType` | `int` |
| `speed` | `float` |
| `drivingStyle` | `int` |
| `radius` | `float` |
| `straightLineDist` | `float` |
| `DriveAgainstTraffic` | `BOOL` |

**Example:**
```lua
local vehicle_model = `adder`
RequestModel(vehicle_model)
repeat Wait(0) until HasModelLoaded(vehicle_model)

local ped = PlayerPedId()
local coords = GetEntityCoords(ped) - GetEntityForwardVector(ped) * 15.0
local vehicle = CreateVehicle(vehicle_model, coords.x, coords.y, coords.z, GetEntityHeading(ped), true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(vehicle_model)

local ped_model = `a_m_m_skater_01`
RequestModel(ped_model)
repeat Wait(0) until HasModelLoaded(ped_model)

local driver = CreatePedInsideVehicle(vehicle, 0, ped_model, -1, true, false)
-- Allow the game engine to clear the model from memory
SetModelAsNoLongerNeeded(ped_model)

TaskVehicleMissionPedTarget(driver, vehicle, ped, 8, 35.0, 786468, -1.0, -1.0, true)
-- Mission Type: Flee | Drive Style: DrivingModeAvoidVehiclesReckless
SetPedKeepTask(driver, true)
```

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_MISSION_PED_TARGET)

---
## TASK_VEHICLE_PARK
**Hash:** `0x0F3E34E968EA374E` | **Returns:** `void`
**Alt name:** `TaskVehiclePark`

```
Modes:  
0 - ignore heading  
1 - park forward  
2 - park backwards  
Depending on the angle of approach, the vehicle can park at the specified heading or at its exact opposite (-180) angle.  
Radius seems to define how close the vehicle has to be -after parking- to the position for this task considered completed. If the value is too small, the vehicle will try to park again until it's exactly where it should be. 20.0 Works well but lower values don't, like the radius is measured in centimeters or something.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `mode` | `int` |
| `radius` | `float` |
| `keepEngineOn` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_PARK)

---
## TASK_VEHICLE_PLAY_ANIM
**Hash:** `0x69F5C3BD0F3EBD89` | **Returns:** `void`
**Alt name:** `TaskVehiclePlayAnim`

```
Most probably plays a specific animation on vehicle. For example getting chop out of van etc...
Here's how its used -
TASK::TASK_VEHICLE_PLAY_ANIM(l_325, "rcmnigel1b", "idle_speedo");
TASK::TASK_VEHICLE_PLAY_ANIM(l_556[0/*1*/], "missfra0_chop_drhome", "InCar_GetOutofBack_Speedo");
FYI : Speedo is the name of van in which chop was put in the mission.
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `animationSet` | `char*` |
| `animationName` | `char*` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_PLAY_ANIM)

---
## TASK_VEHICLE_SHOOT_AT_COORD
**Hash:** `0x5190796ED39C9B6D` | **Returns:** `void`
**Alt name:** `TaskVehicleShootAtCoord`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `p4` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_SHOOT_AT_COORD)

---
## TASK_VEHICLE_SHOOT_AT_PED
**Hash:** `0x10AB107B887214D8` | **Returns:** `void`
**Alt name:** `TaskVehicleShootAtPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `target` | `Ped` |
| `p2` | `float` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_SHOOT_AT_PED)

---
## TASK_VEHICLE_TEMP_ACTION
**Hash:** `0xC429DCEEB339E129` | **Returns:** `void`
**Alt name:** `TaskVehicleTempAction`

Gives the vehicle a temporary action.

**Note**: For migrating objects, a `CScriptEntityStateChangeEvent` will be sent over the network to let other clients know that this object is being given a temporary action. At the same time, temporary actions cannot be applied to clones/remote objects.

```cpp
enum eTempAction {
    TA_NONE = 0,
    TA_WAIT = 1,
    TA_UNUSED = 2,
    TA_BRAKE_REVERSE = 3,
    TA_HANDBRAKE_TURN_LEFT = 4,
    TA_HANDBRAKE_TURN_RIGHT = 5,
    TA_HANDBRAKE_UNTIL_TIME_ENDS = 6,
    TA_TURN_LEFT = 7,
    TA_TURN_RIGHT = 8,
    TA_ACCELERATE = 9,
    TA_TURN_LEFT = 10,
    TA_TURN_RIGHT = 11,
    TA_UNUSED_12 = 12,
    TA_TURN_LEFT_GO_REVERSE = 13,
    TA_TURN_RIGHT_GO_REVERSE = 14,
    TA_PLANE_FLY_UP = 15, // (crashes game if not in plane)
    TA_PLANE_FLY_STRAIGHT = 16, // (crashes game if not in plane)
    TA_PLANE_SHARP_LEFT = 17, // (crashes game if not in plane)
    TA_PLANE_SHARP_RIGHT = 18, // (crashes game if not in plane)
    TA_STRONG_BRAKE = 19,
    TA_TURN_LEFT_AND_STOP = 20,
    TA_TURN_RIGHT_AND_STOP = 21,
    TA_GO_IN_REVERSE = 22,
    TA_ACCELERATE_FAST = 23,
    TA_BRAKE_ACTION = 24,
    TA_HANDBRAKE_TURN_LEFT_MORE = 25,
    TA_HANDBRAKE_TURN_RIGHT_MORE = 26,
    TA_HANDBRAKE_BRAKE_STRAIGHT = 27,
    TA_BRAKE_STRONG_REVERSE_ACCELERATION = 28,
    TA_UNUSED_29 = 29,
    TA_PERFORMS_BURNOUT = 30,
    TA_REV_ENGINE = 31,
    TA_ACCELERATE_VERY_STRONG = 32,
    TA_SURFACE_IN_SUBMARINE = 33
};
```

**Parameters:**
| Name | Type |
|------|------|
| `driver` | `Ped` |
| `vehicle` | `Vehicle` |
| `action` | `int` |
| `time` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_VEHICLE_TEMP_ACTION)

---
## TASK_WANDER_IN_AREA
**Hash:** `0xE054346CA3A0F315` | **Returns:** `void`
**Alt name:** `TaskWanderInArea`

Makes a ped wander/patrol around the specified area.

The ped will continue to wander after getting distracted, but only if this additional task is temporary, ie. killing a target, after killing the target it will continue to wander around.

Use `GetIsTaskActive(ped, 222)` to check if the ped is still wandering the area.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `minimalLength` | `int` |
| `timeBetweenWalks` | `float` |

**Example:**
```lua
-- Load model for panther
local model = `a_c_panther`
RequestModel(model)
while not HasModelLoaded(model) do
  Citizen.Wait(0)
end

-- Spawn a panther at current coordinates
local coords = GetEntityCoords(PlayerPedId())
local ped = CreatePed(0, model, coords.x, coords.y, coords.z, 0.0, true)

-- Make sure the ped doesn't flee or gets distracted
SetBlockingOfNonTemporaryEvents(ped, true)

-- Make ped wander in spawned area with radius of 100 meters, will wander at least 2 meters and wait for around 10 seconds between patrols
TaskWanderInArea(ped, coords.x, coords.y, coords.z, 100.0, 2, 10.0)

-- Check if the ped is wandering
-- Tasks don't trigger instantly, so wait a bit before checking
Citizen.Wait(1000)
print(GetIsTaskActive(ped, 222)) -- 1
```

[View docs](https://cfxnatives.dev/natives/TASK_WANDER_IN_AREA)

---
## TASK_WANDER_STANDARD
**Hash:** `0xBB9CE077274F6A1B` | **Returns:** `void`
**Alt name:** `TaskWanderStandard`

```
Makes ped walk around the area.  
set p1 to 10.0f and p2 to 10 if you want the ped to walk anywhere without a duration.  
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `p1` | `float` |
| `p2` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_WANDER_STANDARD)

---
## TASK_WARP_PED_DIRECTLY_INTO_COVER
**Hash:** `0x6E01E9E8D89F8276` | **Returns:** `void`
**Alt name:** `TaskWarpPedDirectlyIntoCover`

This task warps a ped directly into a cover position closest to the specified point. This can be used to quickly place peds in strategic positions during gameplay.

```
NativeDB Introduced: 2545
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `time` | `int` |
| `canPeekAndAim` | `BOOL` |
| `forceInitialFacingDirection` | `BOOL` |
| `forceFaceLeft` | `BOOL` |
| `coverIndex` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_WARP_PED_DIRECTLY_INTO_COVER)

---
## TASK_WARP_PED_INTO_VEHICLE
**Hash:** `0x9A7D091411C5F684` | **Returns:** `void`
**Alt name:** `TaskWarpPedIntoVehicle`

```
NativeDB Introduced: v323
```

Warp a ped into a vehicle.

**Note**: It's better to use [`TASK_ENTER_VEHICLE`](#\_0xC20E50AA46D09CA8) with the flag "warp" flag instead of this native.

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `vehicle` | `Vehicle` |
| `seatIndex` | `int` |

**Example:**
```lua
-- This example creates a vehicle and warps the player into the driver's seat

-- Retrieve the player ped
local playerPed = PlayerPedId()

-- Define the vehicle model and check if it exists in the game files
local modelHash = `adder`  -- Use Compile-time hashes to get the model hash
if not IsModelInCdimage(modelHash) then
    return
end

-- Request the model and wait for it to load
RequestModel(modelHash)  
repeat
    Wait(0)
until HasModelLoaded(modelHash)

-- Create the vehicle at the player's coordinates with a heading of 0.0
local coordsPlayer, heading = GetEntityCoords(playerPed), 0.0
local vehicle = CreateVehicle(modelHash, coordsPlayer, heading, true, false)

-- Define the seat index for the Ped (e.g., -1 for the driver's seat)
local seatIndex = -1  

-- Check if the vehicle exists and the player is alive
if not DoesEntityExist(vehicle) or IsEntityDead(playerPed) then
    return
end

-- Warp the Ped into the specified vehicle seat
TaskWarpPedIntoVehicle(playerPed, vehicle, seatIndex)
```

[View docs](https://cfxnatives.dev/natives/TASK~TASK_WARP_PED_INTO_VEHICLE)

---
## TASK_WRITHE
**Hash:** `0xCDDC2B77CE54AC6E` | **Returns:** `void`
**Alt name:** `TaskWrithe`

```
NativeDB Added Parameter 5: Any p4
NativeDB Added Parameter 6: Any p5
```

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `target` | `Ped` |
| `time` | `int` |
| `p3` | `int` |

[View docs](https://cfxnatives.dev/natives/TASK_WRITHE)

---
## UNCUFF_PED
**Hash:** `0x67406F2C8F87FC4F` | **Returns:** `void`
**Alt name:** `UncuffPed`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |

[View docs](https://cfxnatives.dev/natives/UNCUFF_PED)

---
## UPDATE_TASK_AIM_GUN_SCRIPTED_TARGET
**Hash:** `0x9724FB59A3E72AD0` | **Returns:** `void`
**Alt name:** `UpdateTaskAimGunScriptedTarget`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Ped` |
| `p1` | `Ped` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `float` |
| `p5` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/UPDATE_TASK_AIM_GUN_SCRIPTED_TARGET)

---
## UPDATE_TASK_HANDS_UP_DURATION
**Hash:** `0xA98FCAFD7893C834` | **Returns:** `void`
**Alt name:** `UpdateTaskHandsUpDuration`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `duration` | `int` |

[View docs](https://cfxnatives.dev/natives/UPDATE_TASK_HANDS_UP_DURATION)

---
## UPDATE_TASK_SWEEP_AIM_ENTITY
**Hash:** `0xE4973DBDBE6E44B3` | **Returns:** `void`
**Alt name:** `UpdateTaskSweepAimEntity`

**Parameters:**
| Name | Type |
|------|------|
| `ped` | `Ped` |
| `entity` | `Entity` |

[View docs](https://cfxnatives.dev/natives/UPDATE_TASK_SWEEP_AIM_ENTITY)

---
## UPDATE_TASK_SWEEP_AIM_POSITION
**Hash:** `0xBB106883F5201FC4` | **Returns:** `void`
**Alt name:** `UpdateTaskSweepAimPosition`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |

[View docs](https://cfxnatives.dev/natives/UPDATE_TASK_SWEEP_AIM_POSITION)

---
## USE_WAYPOINT_RECORDING_AS_ASSISTED_MOVEMENT_ROUTE
**Hash:** `0x5A353B8E6B1095B5` | **Returns:** `void`
**Alt name:** `UseWaypointRecordingAsAssistedMovementRoute`

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `p1` | `BOOL` |
| `p2` | `float` |
| `p3` | `float` |

[View docs](https://cfxnatives.dev/natives/USE_WAYPOINT_RECORDING_AS_ASSISTED_MOVEMENT_ROUTE)

---
## VEHICLE_WAYPOINT_PLAYBACK_OVERRIDE_SPEED
**Hash:** `0x121F0593E0A431D7` | **Returns:** `void`
**Alt name:** `VehicleWaypointPlaybackOverrideSpeed`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |
| `speed` | `float` |

[View docs](https://cfxnatives.dev/natives/VEHICLE_WAYPOINT_PLAYBACK_OVERRIDE_SPEED)

---
## VEHICLE_WAYPOINT_PLAYBACK_PAUSE
**Hash:** `0x8A4E6AC373666BC5` | **Returns:** `void`
**Alt name:** `VehicleWaypointPlaybackPause`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/VEHICLE_WAYPOINT_PLAYBACK_PAUSE)

---
## VEHICLE_WAYPOINT_PLAYBACK_RESUME
**Hash:** `0xDC04FCAA7839D492` | **Returns:** `void`
**Alt name:** `VehicleWaypointPlaybackResume`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/VEHICLE_WAYPOINT_PLAYBACK_RESUME)

---
## VEHICLE_WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED
**Hash:** `0x5CEB25A7D2848963` | **Returns:** `void`
**Alt name:** `VehicleWaypointPlaybackUseDefaultSpeed`

**Parameters:**
| Name | Type |
|------|------|
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/VEHICLE_WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED)

---
## WAYPOINT_PLAYBACK_GET_IS_PAUSED
**Hash:** `0x701375A7D43F01CB` | **Returns:** `BOOL`
**Alt name:** `WaypointPlaybackGetIsPaused`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_GET_IS_PAUSED)

---
## WAYPOINT_PLAYBACK_OVERRIDE_SPEED
**Hash:** `0x7D7D2B47FA788E85` | **Returns:** `void`
**Alt name:** `WaypointPlaybackOverrideSpeed`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_OVERRIDE_SPEED)

---
## WAYPOINT_PLAYBACK_PAUSE
**Hash:** `0x0F342546AA06FED5` | **Returns:** `void`
**Alt name:** `WaypointPlaybackPause`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `BOOL` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_PAUSE)

---
## WAYPOINT_PLAYBACK_RESUME
**Hash:** `0x244F70C84C547D2D` | **Returns:** `void`
**Alt name:** `WaypointPlaybackResume`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `BOOL` |
| `p2` | `Any` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_RESUME)

---
## WAYPOINT_PLAYBACK_START_AIMING_AT_COORD
**Hash:** `0x8968400D900ED8B3` | **Returns:** `void`
**Alt name:** `WaypointPlaybackStartAimingAtCoord`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_START_AIMING_AT_COORD)

---
## WAYPOINT_PLAYBACK_START_AIMING_AT_PED
**Hash:** `0x20E330937C399D29` | **Returns:** `void`
**Alt name:** `WaypointPlaybackStartAimingAtPed`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_START_AIMING_AT_PED)

---
## WAYPOINT_PLAYBACK_START_SHOOTING_AT_COORD
**Hash:** `0x057A25CFCC9DB671` | **Returns:** `void`
**Alt name:** `WaypointPlaybackStartShootingAtCoord`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `float` |
| `p2` | `float` |
| `p3` | `float` |
| `p4` | `BOOL` |
| `p5` | `Any` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_START_SHOOTING_AT_COORD)

---
## WAYPOINT_PLAYBACK_START_SHOOTING_AT_PED
**Hash:** `0xE70BA7B90F8390DC` | **Returns:** `void`
**Alt name:** `WaypointPlaybackStartShootingAtPed`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |
| `p1` | `Any` |
| `p2` | `BOOL` |
| `p3` | `Any` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_START_SHOOTING_AT_PED)

---
## WAYPOINT_PLAYBACK_STOP_AIMING_OR_SHOOTING
**Hash:** `0x47EFA040EBB8E2EA` | **Returns:** `void`
**Alt name:** `WaypointPlaybackStopAimingOrShooting`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_STOP_AIMING_OR_SHOOTING)

---
## WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED
**Hash:** `0x6599D834B12D0800` | **Returns:** `void`
**Alt name:** `WaypointPlaybackUseDefaultSpeed`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED)

---
## WAYPOINT_RECORDING_GET_CLOSEST_WAYPOINT
**Hash:** `0xB629A298081F876F` | **Returns:** `BOOL`
**Alt name:** `WaypointRecordingGetClosestWaypoint`

```
For a full list of the points, see here: goo.gl/wIH0vn
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `point` | `int*` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_RECORDING_GET_CLOSEST_WAYPOINT)

---
## WAYPOINT_RECORDING_GET_COORD
**Hash:** `0x2FB897405C90B361` | **Returns:** `BOOL`
**Alt name:** `WaypointRecordingGetCoord`

```
For a full list of the points, see here: goo.gl/wIH0vn
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `point` | `int` |
| `coord` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_RECORDING_GET_COORD)

---
## WAYPOINT_RECORDING_GET_NUM_POINTS
**Hash:** `0x5343532C01A07234` | **Returns:** `BOOL`
**Alt name:** `WaypointRecordingGetNumPoints`

```
For a full list of the points, see here: goo.gl/wIH0vn
```

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `points` | `int*` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_RECORDING_GET_NUM_POINTS)

---
## WAYPOINT_RECORDING_GET_SPEED_AT_POINT
**Hash:** `0x005622AEBC33ACA9` | **Returns:** `float`
**Alt name:** `WaypointRecordingGetSpeedAtPoint`

**Parameters:**
| Name | Type |
|------|------|
| `name` | `char*` |
| `point` | `int` |

[View docs](https://cfxnatives.dev/natives/WAYPOINT_RECORDING_GET_SPEED_AT_POINT)

---

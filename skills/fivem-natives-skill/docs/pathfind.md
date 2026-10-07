# PATHFIND Natives

> 59 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## _0xAA76052DDA9BFC3E
**Hash:** `0xAA76052DDA9BFC3E` | **Returns:** `void`

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

[View docs](https://cfxnatives.dev/natives/0xAA76052DDA9BFC3E)

---
## _GET_HEIGHTMAP_BOTTOM_Z_FOR_AREA
**Hash:** `0x3599D741C9AC6310` | **Returns:** `float`

```
Returns CGameWorldHeightMap's minimum Z among all grid nodes that intersect with the specified rectangle.
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `x2` | `float` |
| `y2` | `float` |

[View docs](https://cfxnatives.dev/natives/_GET_HEIGHTMAP_BOTTOM_Z_FOR_AREA)

---
## _GET_HEIGHTMAP_BOTTOM_Z_FOR_POSITION
**Hash:** `0x336511A34F2E5185` | **Returns:** `float`

```
Returns CGameWorldHeightMap's minimum Z value at specified point (grid node).
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |

[View docs](https://cfxnatives.dev/natives/_GET_HEIGHTMAP_BOTTOM_Z_FOR_POSITION)

---
## _GET_HEIGHTMAP_TOP_Z_FOR_AREA
**Hash:** `0x8ABE8608576D9CE3` | **Returns:** `float`

```
Returns CGameWorldHeightMap's maximum Z among all grid nodes that intersect with the specified rectangle.
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `x2` | `float` |
| `y2` | `float` |

[View docs](https://cfxnatives.dev/natives/_GET_HEIGHTMAP_TOP_Z_FOR_AREA)

---
## _GET_HEIGHTMAP_TOP_Z_FOR_POSITION
**Hash:** `0x29C24BFBED8AB8FB` | **Returns:** `float`

```
Returns CGameWorldHeightMap's maximum Z value at specified point (grid node).
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |

[View docs](https://cfxnatives.dev/natives/_GET_HEIGHTMAP_TOP_Z_FOR_POSITION)

---
## _GET_POINT_ON_ROAD_SIDE
**Hash:** `0x16F46FB18C8009E4` | **Returns:** `BOOL`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `p3` | `int` |
| `outPosition` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/_GET_POINT_ON_ROAD_SIDE)

---
## _IS_NAVMESH_REQUIRED_REGION_OWNED_BY_ANY_THREAD
**Hash:** `0x705A844002B39DC0` | **Returns:** `BOOL`

```
IS_*
```

[View docs](https://cfxnatives.dev/natives/_IS_NAVMESH_REQUIRED_REGION_OWNED_BY_ANY_THREAD)

---
## _REQUEST_PATHS_PREFER_ACCURATE_BOUNDINGSTRUCT
**Hash:** `0x07FB139B592FA687` | **Returns:** `BOOL`

```
Used internally for long range tasks
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `x2` | `float` |
| `y2` | `float` |

[View docs](https://cfxnatives.dev/natives/_REQUEST_PATHS_PREFER_ACCURATE_BOUNDINGSTRUCT)

---
## _SET_AI_GLOBAL_PATH_NODES_TYPE
**Hash:** `0xF74B1FFA4A15FBEA` | **Returns:** `void`

Activates Cayo Perico path nodes if passed `1`. GPS navigation will start working, maybe more stuff will change, not sure. It seems if you try to unload (pass `0`) when close to the island, your game might crash.

```
NativeDB Introduced: v2189
```

**Parameters:**
| Name | Type |
|------|------|
| `type` | `int` |

[View docs](https://cfxnatives.dev/natives/_SET_AI_GLOBAL_PATH_NODES_TYPE)

---
## _SET_ALL_PATHS_CACHE_BOUNDINGSTRUCT
**Hash:** `0x228E5C6AD4D74BFD` | **Returns:** `void`

```
Toggles a global boolean, name is probably a hash collision but describes its functionality.
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_ALL_PATHS_CACHE_BOUNDINGSTRUCT)

---
## _SET_IGNORE_SECONDARY_ROUTE_NODES
**Hash:** `0x1FC289A0C3FF470F` | **Returns:** `void`

```
See: SET_BLIP_ROUTE
```

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/_SET_IGNORE_SECONDARY_ROUTE_NODES)

---
## ADD_NAVMESH_BLOCKING_OBJECT
**Hash:** `0xFCD5C8E06E502F5A` | **Returns:** `Any`
**Alt name:** `AddNavmeshBlockingObject`

Creates a navmesh blocking object, vehicles will avoid driving through this area.

Only 32 blocking objects may exist at a given time and must be manually managed. See [`REMOVE_NAVMESH_BLOCKING_OBJECT`](#\_0x46399A7895957C0E) and [`onResourceStop`](https://docs.fivem.net/docs/scripting-reference/events/list/onResourceStop/)

```cpp
enum eBlockingObjectFlags {
    // Default Flag
    BLOCKING_OBJECT_DEFAULT = 0,
    // Blocking object will block wander paths
    BLOCKING_OBJECT_WANDERPATH = 1,
    // Blocking object will block (regular) shortest-paths
    BLOCKING_OBJECT_SHORTESTPATH = 2,
    // Blocking object will block flee paths
    BLOCKING_OBJECT_FLEEPATH = 4,
    // Blocking object will block all paths
    BLOCKING_OBJECT_ALLPATHS = 7,
}
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `width` | `float` |
| `length` | `float` |
| `height` | `float` |
| `heading` | `float` |
| `bPermanent` | `BOOL` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/ADD_NAVMESH_BLOCKING_OBJECT)

---
## ADD_NAVMESH_REQUIRED_REGION
**Hash:** `0x387EAD7EE42F6685` | **Returns:** `void`
**Alt name:** `AddNavmeshRequiredRegion`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `radius` | `float` |

[View docs](https://cfxnatives.dev/natives/ADD_NAVMESH_REQUIRED_REGION)

---
## ARE_ALL_NAVMESH_REGIONS_LOADED
**Hash:** `0x8415D95B194A3AEA` | **Returns:** `BOOL`
**Alt name:** `AreAllNavmeshRegionsLoaded`

[View docs](https://cfxnatives.dev/natives/ARE_ALL_NAVMESH_REGIONS_LOADED)

---
## ARE_NODES_LOADED_FOR_AREA
**Hash:** `0xF7B79A50B905A30D` | **Returns:** `BOOL`
**Alt name:** `AreNodesLoadedForArea`

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `x2` | `float` |
| `y2` | `float` |

[View docs](https://cfxnatives.dev/natives/ARE_NODES_LOADED_FOR_AREA)

---
## CALCULATE_TRAVEL_DISTANCE_BETWEEN_POINTS
**Hash:** `0xADD95C7005C4A197` | **Returns:** `float`
**Alt name:** `CalculateTravelDistanceBetweenPoints`

Calculates the travel distance between a set of points.
Doesn't seem to correlate with distance on gps sometimes.

This function returns the value 100000.0 over long distances, seems to be a failure mode result, potentially occurring when not all path nodes are loaded into pathfind.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |

[View docs](https://cfxnatives.dev/natives/CALCULATE_TRAVEL_DISTANCE_BETWEEN_POINTS)

---
## CLEAR_GPS_DISABLED_ZONE_AT_INDEX
**Hash:** `0x2801D0012266DF07` | **Returns:** `void`
**Alt name:** `ClearGpsDisabledZoneAtIndex`

Clears a disabled GPS route area from a certain index previously set using [`SET_GPS_DISABLED_ZONE_AT_INDEX`](#\_0xD0BC1C6FB18EE154).

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/CLEAR_GPS_DISABLED_ZONE_AT_INDEX)

---
## DISABLE_NAVMESH_IN_AREA
**Hash:** `0x4C8872D8CDBE1B8B` | **Returns:** `void`
**Alt name:** `DisableNavmeshInArea`

Use this if you want to completely disable a large area of navmesh.
For smaller areas, use [`ADD_NAVMESH_BLOCKING_OBJECT`](#\_0xFCD5C8E06E502F5A) instead.

**Parameters:**
| Name | Type |
|------|------|
| `posMinX` | `float` |
| `posMinY` | `float` |
| `posMinZ` | `float` |
| `posMaxX` | `float` |
| `posMaxY` | `float` |
| `posMaxZ` | `float` |
| `bDisable` | `bool` |

[View docs](https://cfxnatives.dev/natives/DISABLE_NAVMESH_IN_AREA)

---
## DOES_NAVMESH_BLOCKING_OBJECT_EXIST
**Hash:** `0x0EAEB0DB4B132399` | **Returns:** `BOOL`
**Alt name:** `DoesNavmeshBlockingObjectExist`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/DOES_NAVMESH_BLOCKING_OBJECT_EXIST)

---
## GENERATE_DIRECTIONS_TO_COORD
**Hash:** `0xF90125F1F79ECDF8` | **Returns:** `int`
**Alt name:** `GenerateDirectionsToCoord`

```
p3 is 0 in the only game script occurrence (trevor3) but 1 doesn't seem to make a difference
distToNxJunction seems to be the distance in metres * 10.0f
direction:
0 = This happens randomly during the drive for seemingly no reason but if you consider that this native is only used in trevor3, it seems to mean "Next frame, stop whatever's being said and tell the player the direction."
1 = Route is being calculated or the player is going in the wrong direction
2 = Please Proceed the Highlighted Route
3 = In (distToNxJunction) Turn Left
4 = In (distToNxJunction) Turn Right
5 = In (distToNxJunction) Keep Straight
6 = In (distToNxJunction) Turn Sharply To The Left
7 = In (distToNxJunction) Turn Sharply To The Right
8 = Route is being recalculated or the navmesh is confusing. This happens randomly during the drive but consistently at {2044.0358, 2996.6116, 44.9717} if you face towards the bar and the route needs you to turn right. In that particular case, it could be a bug with how the turn appears to be 270 deg. CCW instead of "right." Either way, this seems to be the engine saying "I don't know the route right now."
return value set to 0 always
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `p3` | `BOOL` |
| `direction` | `int*` |
| `vehicle` | `float*` |
| `distToNxJunction` | `float*` |

[View docs](https://cfxnatives.dev/natives/GENERATE_DIRECTIONS_TO_COORD)

---
## GET_CLOSEST_MAJOR_VEHICLE_NODE
**Hash:** `0x2EABE3B06F58C1BE` | **Returns:** `BOOL`
**Alt name:** `GetClosestMajorVehicleNode`

```
Get the closest vehicle node to a given position, unknown1 = 3.0, unknown2 = 0  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `outPosition` | `Vector3*` |
| `unknown1` | `float` |
| `unknown2` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_CLOSEST_MAJOR_VEHICLE_NODE)

---
## GET_CLOSEST_ROAD
**Hash:** `0x132F52BBA570FE92` | **Returns:** `bool`
**Alt name:** `GetClosestRoad`

Finds an edge (node connection to another node) that satisfies the specified criteria.

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `minimumEdgeLength` | `float` |
| `minimumLaneCount` | `int` |
| `srcNode` | `Vector3*` |
| `targetNode` | `Vector3*` |
| `laneCountForward` | `int*` |
| `laneCountBackward` | `int*` |
| `width` | `float*` |
| `onlyMajorRoads` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/GET_CLOSEST_ROAD)

---
## GET_CLOSEST_VEHICLE_NODE
**Hash:** `0x240A18690AE96513` | **Returns:** `BOOL`
**Alt name:** `GetClosestVehicleNode`

```
FYI: When falling through the map (or however you got under it) you will respawn when your player ped's height is <= -200.0 meters (I think you all know this) and when in a vehicle you will actually respawn at the closest vehicle node.
----------
Vector3 nodePos;
GET_CLOSEST_VEHICLE_NODE(x,y,z,&nodePos,...)
p4 is either 0, 1 or 8. 1 means any path/road. 0 means node in the middle of the closest main (asphalt) road.
p5, p6 are always the same:
0x40400000 (3.0), 0
p5 can also be 100.0 and p6 can be 2.5:
PATHFIND::GET_CLOSEST_VEHICLE_NODE(a_0, &v_5, v_9, 100.0, 2.5)
Known node types: simple path/asphalt road, only asphalt road, water, under the map at always the same coords.
The node types follows a pattern. For example, every fourth node is of the type water i.e. 3, 7, 11, 15, 19, 23, 27, 31, 35, 39... 239. Could not see any difference between nodes within certain types.
Starting at 2, every fourth node is under the map, always same coords.
Same with only asphalt road (0, 4, 8, etc) and simple path/asphalt road (1, 5, 9, etc).
gtaforums.com/topic/843561-pathfind-node-types
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `outPosition` | `Vector3*` |
| `nodeType` | `int` |
| `p5` | `float` |
| `p6` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_CLOSEST_VEHICLE_NODE)

---
## GET_CLOSEST_VEHICLE_NODE_WITH_HEADING
**Hash:** `0xFF071FB798B803B0` | **Returns:** `BOOL`
**Alt name:** `GetClosestVehicleNodeWithHeading`

```
p5, p6 and p7 seems to be about the same as p4, p5 and p6 for GET_CLOSEST_VEHICLE_NODE. p6 and/or p7 has something to do with finding a node on the same path/road and same direction(at least for this native, something to do with the heading maybe). Edit this when you find out more.  
p5 is either 1 or 12. 1 means any path/road. 12, 8, 0 means node in the middle of the closest main (asphalt) road.  
p6 is always 3.0  
p7 is always 0.  
Known node types: simple path/asphalt road, only asphalt road, water, under the map at always the same coords.   
The node types follows a pattern. For example, every fourth node is of the type water i.e. 3, 7, 11, 15, 19, 23, 27, 31, 35, 39... 239. Could not see any difference between nodes within certain types.   
Starting at 2, every fourth node is under the map, always same coords.  
Same with only asphalt road (0, 4, 8, etc) and simple path/asphalt road (1, 5, 9, etc).  
gtaforums.com/topic/843561-pathfind-node-types  
Example of usage, moving vehicle to closest path/road:  
Vector3 coords = ENTITY::GET_ENTITY_COORDS(playerVeh, true);  
Vector3 closestVehicleNodeCoords;   
float roadHeading;   
PATHFIND::GET_CLOSEST_VEHICLE_NODE_WITH_HEADING(coords.x, coords.y, coords.z, &closestVehicleNodeCoords, &roadHeading, 1, 3, 0);   
ENTITY::SET_ENTITY_HEADING(playerVeh, roadHeading);  
ENTITY::SET_ENTITY_COORDS(playerVeh, closestVehicleNodeCoords.x, closestVehicleNodeCoords.y, closestVehicleNodeCoords.z, 1, 0, 0, 1);  
VEHICLE::SET_VEHICLE_ON_GROUND_PROPERLY(playerVeh);  
------------------------------------------------------------------  
C# Example (ins1de) : pastebin.com/fxtMWAHD  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `outPosition` | `Vector3*` |
| `outHeading` | `float*` |
| `nodeType` | `int` |
| `p6` | `float` |
| `p7` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_CLOSEST_VEHICLE_NODE_WITH_HEADING)

---
## GET_GPS_BLIP_ROUTE_FOUND
**Hash:** `0x869DAACBBE9FA006` | **Returns:** `BOOL`
**Alt name:** `GetGpsBlipRouteFound`

[View docs](https://cfxnatives.dev/natives/GET_GPS_BLIP_ROUTE_FOUND)

---
## GET_GPS_BLIP_ROUTE_LENGTH
**Hash:** `0xBBB45C3CF5C8AA85` | **Returns:** `int`
**Alt name:** `GetGpsBlipRouteLength`

[View docs](https://cfxnatives.dev/natives/GET_GPS_BLIP_ROUTE_LENGTH)

---
## GET_NEXT_GPS_DISABLED_ZONE_INDEX
**Hash:** `0xD3A6A0EF48823A8C` | **Returns:** `int`
**Alt name:** `GetNextGpsDisabledZoneIndex`

Gets the next zone that has been disabled using SET_GPS_DISABLED_ZONE_AT_INDEX.

```
NativeDB Removed Parameter 1: int index
```

**Parameters:**
| Name | Type |
|------|------|
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_NEXT_GPS_DISABLED_ZONE_INDEX)

---
## GET_NTH_CLOSEST_VEHICLE_NODE
**Hash:** `0xE50E52416CCF948B` | **Returns:** `BOOL`
**Alt name:** `GetNthClosestVehicleNode`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `nthClosest` | `int` |
| `outPosition` | `Vector3*` |
| `unknown1` | `Any` |
| `unknown2` | `Any` |
| `unknown3` | `Any` |

[View docs](https://cfxnatives.dev/natives/GET_NTH_CLOSEST_VEHICLE_NODE)

---
## GET_NTH_CLOSEST_VEHICLE_NODE_FAVOUR_DIRECTION
**Hash:** `0x45905BE8654AE067` | **Returns:** `BOOL`
**Alt name:** `GetNthClosestVehicleNodeFavourDirection`

```
See gtaforums.com/topic/843561-pathfind-node-types for node type info. 0 = paved road only, 1 = any road, 3 = water  
p10 always equal 0x40400000  
p11 always equal 0  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `desiredX` | `float` |
| `desiredY` | `float` |
| `desiredZ` | `float` |
| `nthClosest` | `int` |
| `outPosition` | `Vector3*` |
| `outHeading` | `float*` |
| `nodetype` | `int` |
| `p10` | `float` |
| `p11` | `Any` |

[View docs](https://cfxnatives.dev/natives/GET_NTH_CLOSEST_VEHICLE_NODE_FAVOUR_DIRECTION)

---
## GET_NTH_CLOSEST_VEHICLE_NODE_ID
**Hash:** `0x22D7275A79FE8215` | **Returns:** `int`
**Alt name:** `GetNthClosestVehicleNodeId`

```
Returns the id.  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `nth` | `int` |
| `nodetype` | `int` |
| `p5` | `float` |
| `p6` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_NTH_CLOSEST_VEHICLE_NODE_ID)

---
## GET_NTH_CLOSEST_VEHICLE_NODE_ID_WITH_HEADING
**Hash:** `0x6448050E9C2A7207` | **Returns:** `int`
**Alt name:** `GetNthClosestVehicleNodeIdWithHeading`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `nthClosest` | `int` |
| `outPosition` | `Vector3*` |
| `outHeading` | `float*` |
| `p6` | `Any` |
| `p7` | `float` |
| `p8` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_NTH_CLOSEST_VEHICLE_NODE_ID_WITH_HEADING)

---
## GET_NTH_CLOSEST_VEHICLE_NODE_WITH_HEADING
**Hash:** `0x80CA6A8B6C094CC4` | **Returns:** `BOOL`
**Alt name:** `GetNthClosestVehicleNodeWithHeading`

Get the nth closest vehicle node with its heading and total lane count.
If you need specific forward and backward lane counts use [GET_CLOSEST_ROAD](#\_0x132F52BBA570FE92)

```cpp
enum eNodeFlags {
	NONE = 0,
	INCLUDE_SWITCHED_OFF_NODES = 1,
	INCLUDE_BOAT_NODES = 2,
	IGNORE_SLIPLANES = 4,
	IGNORE_SWITCHED_OFF_DEAD_ENDS = 8,
}
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `nthClosest` | `int` |
| `outPosition` | `Vector3*` |
| `heading` | `float*` |
| `totalLanes` | `int*` |
| `searchFlags` | `int` |
| `zMeasureMult` | `float` |
| `zTolerance` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_NTH_CLOSEST_VEHICLE_NODE_WITH_HEADING)

---
## GET_NUM_NAVMESHES_EXISTING_IN_AREA
**Hash:** `0x01708E8DD3FF8C65` | **Returns:** `int`
**Alt name:** `GetNumNavmeshesExistingInArea`

**Parameters:**
| Name | Type |
|------|------|
| `posMinX` | `float` |
| `posMinY` | `float` |
| `posMinZ` | `float` |
| `posMaxX` | `float` |
| `posMaxY` | `float` |
| `posMaxZ` | `float` |

[View docs](https://cfxnatives.dev/natives/GET_NUM_NAVMESHES_EXISTING_IN_AREA)

---
## GET_POS_ALONG_GPS_TYPE_ROUTE
**Hash:** `0xF3162836C28F9DA5` | **Returns:** `BOOL`
**Alt name:** `GetPosAlongGpsTypeRoute`

Native to get a position along current player GPS route using supplied slot.
This native was previously named `GET_GPS_WAYPOINT_ROUTE_END`, but its named changed.

```cpp
enum eGpsSlotType {
	GPS_SLOT_WAYPOINT = 0,
	GPS_SLOT_RADAR_BLIP = 1,
	GPS_SLOT_DISCRETE = 2
}
```

**Parameters:**
| Name | Type |
|------|------|
| `result` | `Vector3*` |
| `bStartAtPlayerPos` | `BOOL` |
| `fDistanceAlongRoute` | `float` |
| `slotType` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_POS_ALONG_GPS_TYPE_ROUTE)

---
## GET_RANDOM_VEHICLE_NODE
**Hash:** `0x93E0DB8440B73A7D` | **Returns:** `BOOL`
**Alt name:** `GetRandomVehicleNode`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `radius` | `float` |
| `p4` | `BOOL` |
| `p5` | `BOOL` |
| `p6` | `BOOL` |
| `outPosition` | `Vector3*` |
| `nodeId` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_RANDOM_VEHICLE_NODE)

---
## GET_ROAD_BOUNDARY_USING_HEADING
**Hash:** `0xA0F8A7517A273C05` | **Returns:** `BOOL`
**Alt name:** `GetRoadBoundaryUsingHeading`

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `heading` | `float` |
| `outPosition` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/GET_ROAD_BOUNDARY_USING_HEADING)

---
## GET_SAFE_COORD_FOR_PED
**Hash:** `0xB61C8E878A4199CA` | **Returns:** `BOOL`
**Alt name:** `GetSafeCoordForPed`

```
Flags are:
1 = 1 = B02_IsFootpath
2 = 4 = !B15_InteractionUnk
4 = 0x20 = !B14_IsInterior
8 = 0x40 = !B07_IsWater
16 = 0x200 = B17_IsFlatGround
When onGround == true outPosition is a position located on the nearest pavement.
When a safe coord could not be found the result of a function is false and outPosition == Vector3.Zero.
In the scripts these flags are used: 0, 14, 12, 16, 20, 21, 28. 0 is most commonly used, then 16.
16 works for me, 0 crashed the script.
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `onGround` | `BOOL` |
| `outPosition` | `Vector3*` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_SAFE_COORD_FOR_PED)

---
## GET_STREET_NAME_AT_COORD
**Hash:** `0x2EB41072B4C1E4C0` | **Returns:** `void`
**Alt name:** `GetStreetNameAtCoord`

```
Determines the name of the street which is the closest to the given coordinates.
x,y,z - the coordinates of the street
streetName - returns a hash to the name of the street the coords are on
crossingRoad - if the coordinates are on an intersection, a hash to the name of the crossing road
Note: the names are returned as hashes, the strings can be returned using the function HUD::GET_STREET_NAME_FROM_HASH_KEY.
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `streetName` | `Hash*` |
| `crossingRoad` | `Hash*` |

[View docs](https://cfxnatives.dev/natives/GET_STREET_NAME_AT_COORD)

---
## GET_VEHICLE_NODE_IS_GPS_ALLOWED
**Hash:** `0xA2AE5C478B96E3B6` | **Returns:** `BOOL`
**Alt name:** `GetVehicleNodeIsGpsAllowed`

```
Returns false for nodes that aren't used for GPS routes.
Example:
Nodes in Fort Zancudo and LSIA are false
```

**Parameters:**
| Name | Type |
|------|------|
| `nodeID` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_NODE_IS_GPS_ALLOWED)

---
## GET_VEHICLE_NODE_IS_SWITCHED_OFF
**Hash:** `0x4F5070AA58F69279` | **Returns:** `BOOL`
**Alt name:** `GetVehicleNodeIsSwitchedOff`

```
Returns true when the node is Offroad. Alleys, some dirt roads, and carparks return true.
Normal roads where plenty of Peds spawn will return false
```

**Parameters:**
| Name | Type |
|------|------|
| `nodeID` | `int` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_NODE_IS_SWITCHED_OFF)

---
## GET_VEHICLE_NODE_POSITION
**Hash:** `0x703123E5E7D429C2` | **Returns:** `void`
**Alt name:** `GetVehicleNodePosition`

```
Calling this with an invalid node id, will crash the game.
Note that IS_VEHICLE_NODE_ID_VALID simply checks if nodeId is not zero. It does not actually ensure that the id is valid.
Eg. IS_VEHICLE_NODE_ID_VALID(1) will return true, but will crash when calling GET_VEHICLE_NODE_POSITION().
```

**Parameters:**
| Name | Type |
|------|------|
| `nodeId` | `int` |
| `outPosition` | `Vector3*` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_NODE_POSITION)

---
## GET_VEHICLE_NODE_PROPERTIES
**Hash:** `0x0568566ACBB5DEDC` | **Returns:** `BOOL`
**Alt name:** `GetVehicleNodeProperties`

Gets the density and flags of the closest node to the specified position.\
Density is a value between 0 and 15, indicating how busy the road is.

```cpp
enum eVehicleNodeProperties {
	OFF_ROAD = 1 << 0,
	ON_PLAYERS_ROAD =  1 << 1,
	NO_BIG_VEHICLES = 1 << 2,
	SWITCHED_OFF = 1 << 3,
	TUNNEL_OR_INTERIOR = 1 << 4,
	LEADS_TO_DEAD_END = 1 << 5,
	HIGHWAY = 1 << 6,
	JUNCTION = 1 << 7,
	TRAFFIC_LIGHT = 1 << 8,
	GIVE_WAY = 1 << 9,
	WATER = 1 << 10,
}
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `density` | `int*` |
| `flags` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_VEHICLE_NODE_PROPERTIES)

---
## IS_NAVMESH_LOADED_IN_AREA
**Hash:** `0xF813C7E63F9062A5` | **Returns:** `BOOL`
**Alt name:** `IsNavmeshLoadedInArea`

```
Returns whether navmesh for the region is loaded. The region is a rectangular prism defined by it's top left deepest corner to it's bottom right shallowest corner.  
If you can re-word this so it makes more sense, please do. I'm horrible with words sometimes...  
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |

[View docs](https://cfxnatives.dev/natives/IS_NAVMESH_LOADED_IN_AREA)

---
## IS_POINT_ON_ROAD
**Hash:** `0x125BF4ABFC536B09` | **Returns:** `BOOL`
**Alt name:** `IsPointOnRoad`

```
Gets a value indicating whether the specified position is on a road.  
The vehicle parameter is not implemented (ignored).  
```

**Parameters:**
| Name | Type |
|------|------|
| `x` | `float` |
| `y` | `float` |
| `z` | `float` |
| `vehicle` | `Vehicle` |

[View docs](https://cfxnatives.dev/natives/IS_POINT_ON_ROAD)

---
## IS_VEHICLE_NODE_ID_VALID
**Hash:** `0x1EAF30FCFBF5AF74` | **Returns:** `BOOL`
**Alt name:** `IsVehicleNodeIdValid`

```
Returns true if the id is non zero.  
```

**Parameters:**
| Name | Type |
|------|------|
| `vehicleNodeId` | `int` |

[View docs](https://cfxnatives.dev/natives/IS_VEHICLE_NODE_ID_VALID)

---
## LOAD_ALL_PATH_NODES
**Hash:** `0x80E4A6EDDB0BE8D9` | **Returns:** `BOOL`
**Alt name:** `LoadAllPathNodes`

```
This native has been removed in v1180.  
```

**Parameters:**
| Name | Type |
|------|------|
| `keepInMemory` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/LOAD_ALL_PATH_NODES)

---
## REMOVE_NAVMESH_BLOCKING_OBJECT
**Hash:** `0x46399A7895957C0E` | **Returns:** `void`
**Alt name:** `RemoveNavmeshBlockingObject`

**Parameters:**
| Name | Type |
|------|------|
| `p0` | `Any` |

[View docs](https://cfxnatives.dev/natives/REMOVE_NAVMESH_BLOCKING_OBJECT)

---
## REMOVE_NAVMESH_REQUIRED_REGIONS
**Hash:** `0x916F0A3CDEC3445E` | **Returns:** `void`
**Alt name:** `RemoveNavmeshRequiredRegions`

[View docs](https://cfxnatives.dev/natives/REMOVE_NAVMESH_REQUIRED_REGIONS)

---
## SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME
**Hash:** `0x0B919E1FB47CC4E0` | **Returns:** `void`
**Alt name:** `SetAmbientPedRangeMultiplierThisFrame`

**Parameters:**
| Name | Type |
|------|------|
| `multiplier` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME)

---
## SET_GPS_DISABLED_ZONE
**Hash:** `0xDC20483CD3DD5201` | **Returns:** `void`
**Alt name:** `SetGpsDisabledZone`

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_GPS_DISABLED_ZONE)

---
## SET_GPS_DISABLED_ZONE_AT_INDEX
**Hash:** `0xD0BC1C6FB18EE154` | **Returns:** `void`
**Alt name:** `SetGpsDisabledZoneAtIndex`

Disables the GPS route displayed on the minimap while within a certain zone (area). When in a disabled zone and creating a waypoint, the GPS route is not shown on the minimap until you are outside of the zone. When disabled, the direct distance is shown on minimap opposed to distance to travel. Seems to only work before setting a waypoint.

You can clear the disabled zone with CLEAR_GPS_DISABLED_ZONE_AT_INDEX.

**Setting a waypoint at the same coordinate:**

Disabled Zone: <https://i.imgur.com/P9VUuxM.png>

Enabled Zone (normal): <https://i.imgur.com/BPi24aw.png>

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `index` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_GPS_DISABLED_ZONE_AT_INDEX)

---
## SET_IGNORE_NO_GPS_FLAG
**Hash:** `0x72751156E7678833` | **Returns:** `void`
**Alt name:** `SetIgnoreNoGpsFlag`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_IGNORE_NO_GPS_FLAG)

---
## SET_PED_PATHS_BACK_TO_ORIGINAL
**Hash:** `0xE04B48F2CC926253` | **Returns:** `void`
**Alt name:** `SetPedPathsBackToOriginal`

```
NativeDB Added Parameter 7: Any p6
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

[View docs](https://cfxnatives.dev/natives/SET_PED_PATHS_BACK_TO_ORIGINAL)

---
## SET_PED_PATHS_IN_AREA
**Hash:** `0x34F060F4BF92E018` | **Returns:** `void`
**Alt name:** `SetPedPathsInArea`

```
NativeDB Added Parameter 8: Any p7
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `unknown` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_PED_PATHS_IN_AREA)

---
## SET_ROADS_BACK_TO_ORIGINAL
**Hash:** `0x1EE7063B80FFC77C` | **Returns:** `void`
**Alt name:** `SetRoadsBackToOriginal`

```
missing a last parameter int p6  
```

```
NativeDB Added Parameter 7: Any p6
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

[View docs](https://cfxnatives.dev/natives/SET_ROADS_BACK_TO_ORIGINAL)

---
## SET_ROADS_BACK_TO_ORIGINAL_IN_ANGLED_AREA
**Hash:** `0x0027501B9F3B407E` | **Returns:** `void`
**Alt name:** `SetRoadsBackToOriginalInAngledArea`

See [`IS_POINT_IN_ANGLED_AREA`](#\_0x2A70BAE8883E4C81) for the definition of an angled area.

```
NativeDB Added Parameter 8: Any p7

bool p7 - always 1  
```

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `width` | `float` |

[View docs](https://cfxnatives.dev/natives/SET_ROADS_BACK_TO_ORIGINAL_IN_ANGLED_AREA)

---
## SET_ROADS_IN_ANGLED_AREA
**Hash:** `0x1A5AA1208AF5DB59` | **Returns:** `void`
**Alt name:** `SetRoadsInAngledArea`

unknown3 is related to `SEND_SCRIPT_WORLD_STATE_EVENT > CNetworkRoadNodeWorldStateData` in networked environments.

See [`IS_POINT_IN_ANGLED_AREA`](#\_0x2A70BAE8883E4C81) for the definition of an angled area.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `width` | `float` |
| `unknown1` | `BOOL` |
| `unknown2` | `BOOL` |
| `unknown3` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ROADS_IN_ANGLED_AREA)

---
## SET_ROADS_IN_AREA
**Hash:** `0xBF1A602B5BA52FEE` | **Returns:** `void`
**Alt name:** `SetRoadsInArea`

When this is set to false, all nodes in the area get disabled.

`GET_VEHICLE_NODE_IS_SWITCHED_OFF` returns true afterwards.

If it's true,

`GET_VEHICLE_NODE_IS_SWITCHED_OFF` returns false.

**Parameters:**
| Name | Type |
|------|------|
| `x1` | `float` |
| `y1` | `float` |
| `z1` | `float` |
| `x2` | `float` |
| `y2` | `float` |
| `z2` | `float` |
| `nodeEnabled` | `BOOL` |
| `unknown2` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/SET_ROADS_IN_AREA)

---
## UPDATE_NAVMESH_BLOCKING_OBJECT
**Hash:** `0x109E99373F290687` | **Returns:** `void`
**Alt name:** `UpdateNavmeshBlockingObject`

**Parameters:**
| Name | Type |
|------|------|
| `object` | `Object` |
| `posX` | `float` |
| `posY` | `float` |
| `posZ` | `float` |
| `scaleX` | `float` |
| `scaleY` | `float` |
| `scaleZ` | `float` |
| `heading` | `float` |
| `flags` | `int` |

[View docs](https://cfxnatives.dev/natives/UPDATE_NAVMESH_BLOCKING_OBJECT)

---

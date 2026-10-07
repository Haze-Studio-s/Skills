# CLOCK Natives

> 16 natives | Version: `1.0.0+natives.20260324` | Updated: 2026-03-24
## ADD_TO_CLOCK_TIME
**Hash:** `0xD716F30D8C8980E2` | **Returns:** `void`
**Alt name:** `AddToClockTime`

**Parameters:**
| Name | Type |
|------|------|
| `hours` | `int` |
| `minutes` | `int` |
| `seconds` | `int` |

[View docs](https://cfxnatives.dev/natives/ADD_TO_CLOCK_TIME)

---
## ADVANCE_CLOCK_TIME_TO
**Hash:** `0xC8CA9670B9D83B3B` | **Returns:** `void`
**Alt name:** `AdvanceClockTimeTo`

**Parameters:**
| Name | Type |
|------|------|
| `hour` | `int` |
| `minute` | `int` |
| `second` | `int` |

[View docs](https://cfxnatives.dev/natives/ADVANCE_CLOCK_TIME_TO)

---
## GET_CLOCK_DAY_OF_MONTH
**Hash:** `0x3D10BC92A4DB1D35` | **Returns:** `int`
**Alt name:** `GetClockDayOfMonth`

[View docs](https://cfxnatives.dev/natives/GET_CLOCK_DAY_OF_MONTH)

---
## GET_CLOCK_DAY_OF_WEEK
**Hash:** `0xD972E4BD7AEB235F` | **Returns:** `int`
**Alt name:** `GetClockDayOfWeek`

```
Gets the current day of the week.  
0: Sunday  
1: Monday  
2: Tuesday  
3: Wednesday  
4: Thursday  
5: Friday  
6: Saturday  
```

[View docs](https://cfxnatives.dev/natives/GET_CLOCK_DAY_OF_WEEK)

---
## GET_CLOCK_HOURS
**Hash:** `0x25223CA6B4D20B7F` | **Returns:** `int`
**Alt name:** `GetClockHours`

```
Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)  
```

[View docs](https://cfxnatives.dev/natives/GET_CLOCK_HOURS)

---
## GET_CLOCK_MINUTES
**Hash:** `0x13D2B8ADD79640F2` | **Returns:** `int`
**Alt name:** `GetClockMinutes`

```
Gets the current ingame clock minute.  
```

[View docs](https://cfxnatives.dev/natives/GET_CLOCK_MINUTES)

---
## GET_CLOCK_MONTH
**Hash:** `0xBBC72712E80257A1` | **Returns:** `int`
**Alt name:** `GetClockMonth`

[View docs](https://cfxnatives.dev/natives/GET_CLOCK_MONTH)

---
## GET_CLOCK_SECONDS
**Hash:** `0x494E97C2EF27C470` | **Returns:** `int`
**Alt name:** `GetClockSeconds`

```
Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in GTA is only 48 minutes in real life.  
```

[View docs](https://cfxnatives.dev/natives/GET_CLOCK_SECONDS)

---
## GET_CLOCK_YEAR
**Hash:** `0x961777E64BDAF717` | **Returns:** `int`
**Alt name:** `GetClockYear`

[View docs](https://cfxnatives.dev/natives/GET_CLOCK_YEAR)

---
## GET_LOCAL_TIME
**Hash:** `0x50C7A99057A69748` | **Returns:** `void`
**Alt name:** `GetLocalTime`

```
Gets local system time as year, month, day, hour, minute and second.  
Example usage:  
int year;  
int month;  
int day;  
int hour;  
int minute;  
int second;  
or use std::tm struct  
TIME::GET_LOCAL_TIME(&year, &month, &day, &hour, &minute, &second);  
```

**Parameters:**
| Name | Type |
|------|------|
| `year` | `int*` |
| `month` | `int*` |
| `day` | `int*` |
| `hour` | `int*` |
| `minute` | `int*` |
| `second` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_LOCAL_TIME)

---
## GET_MILLISECONDS_PER_GAME_MINUTE
**Hash:** `0x2F8B4D1C595B11DB` | **Returns:** `int`
**Alt name:** `GetMillisecondsPerGameMinute`

Returns how many real ms are equal to one game minute.
A getter for [`SetMillisecondsPerGameMinute`](#\_0x36CA2554).

[View docs](https://cfxnatives.dev/natives/GET_MILLISECONDS_PER_GAME_MINUTE)

---
## GET_POSIX_TIME
**Hash:** `0xDA488F299A5B164E` | **Returns:** `void`
**Alt name:** `GetPosixTime`

```
Gets system time as year, month, day, hour, minute and second.  
Example usage:  
	int year;  
	int month;  
	int day;  
	int hour;  
	int minute;  
	int second;  
	TIME::GET_POSIX_TIME(&year, &month, &day, &hour, &minute, &second);  
```

**Parameters:**
| Name | Type |
|------|------|
| `year` | `int*` |
| `month` | `int*` |
| `day` | `int*` |
| `hour` | `int*` |
| `minute` | `int*` |
| `second` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_POSIX_TIME)

---
## GET_UTC_TIME
**Hash:** `0x8117E09A19EEF4D3` | **Returns:** `void`
**Alt name:** `GetUtcTime`

```
Gets current UTC time
```

**Parameters:**
| Name | Type |
|------|------|
| `year` | `int*` |
| `month` | `int*` |
| `day` | `int*` |
| `hour` | `int*` |
| `minute` | `int*` |
| `second` | `int*` |

[View docs](https://cfxnatives.dev/natives/GET_UTC_TIME)

---
## PAUSE_CLOCK
**Hash:** `0x4055E40BD2DBEC1D` | **Returns:** `void`
**Alt name:** `PauseClock`

**Parameters:**
| Name | Type |
|------|------|
| `toggle` | `BOOL` |

[View docs](https://cfxnatives.dev/natives/PAUSE_CLOCK)

---
## SET_CLOCK_DATE
**Hash:** `0xB096419DF0D06CE7` | **Returns:** `void`
**Alt name:** `SetClockDate`

**Parameters:**
| Name | Type |
|------|------|
| `day` | `int` |
| `month` | `int` |
| `year` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_CLOCK_DATE)

---
## SET_CLOCK_TIME
**Hash:** `0x47C3B5848C3E45D8` | **Returns:** `void`
**Alt name:** `SetClockTime`

```
SET_CLOCK_TIME(12, 34, 56);  
```

**Parameters:**
| Name | Type |
|------|------|
| `hour` | `int` |
| `minute` | `int` |
| `second` | `int` |

[View docs](https://cfxnatives.dev/natives/SET_CLOCK_TIME)

---

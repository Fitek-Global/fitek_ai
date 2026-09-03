# SessionClientDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `LoginIP` | string | yes |  |
| `DeviceName` | string | yes |  |
| `AppVersion` | string | yes |  |
| `OSName` | string | yes |  |
| `BrowserName` | string | yes |  |
| `BrowserVersion` | string | yes |  |
| `Id` | int64 | no |  |
| `IsCurrent` | boolean | no |  |
| `Location` | [IpInfoResponse](IpInfoResponse.md) | no |  |
| `UserAccountGuid` | uuid | no |  |

Used by:

- GET /api/Session/GetMySessions (response) — [Session](../endpoints/Session.md)

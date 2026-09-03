# CreateSessionDataDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `deviceName` | string | yes |  |
| `appVersion` | string | yes |  |
| `browserName` | string | yes |  |
| `browserVersion` | string | yes |  |
| `token` | string | yes |  |
| `country` | string | yes |  |
| `loginMethod` | enum [LoginMethods](LoginMethods.md) | no |  |

Used by:

- POST /api/v1.0/CreateSession (request) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/CreateSession (request) — [MobileApp](../endpoints/MobileApp.md)

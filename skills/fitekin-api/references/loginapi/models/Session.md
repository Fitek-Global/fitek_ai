# Session

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `token` | string | yes |  |
| `expirationTime` | string | yes |  |
| `userGuid` | uuid | no |  |
| `userLastCompanyGuid` | uuid | no |  |
| `userCompanies` | [CompanyShort](CompanyShort.md)[] | yes |  |
| `isBoAdmin` | boolean | no |  |
| `isBetaUser` | boolean | no |  |
| `authStatus` | enum [AuthStatus](AuthStatus.md) | no |  |

Used by:

- POST /api/Login (response) — [Login](../endpoints/Login.md)
- POST /api/Login/EmailLoginWCaptcha (response) — [Login](../endpoints/Login.md)
- POST /api/Login/IdLogin (response) — [Login](../endpoints/Login.md)
- POST /api/Login/IdLoginWCaptcha (response) — [Login](../endpoints/Login.md)
- POST /api/Login/LoginWCaptcha (response) — [Login](../endpoints/Login.md)
- POST /api/SmartId/Check (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/CreateSession (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/SmartId/Check (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/CreateSession (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/SmartId/Check (response) — [MobileApp](../endpoints/MobileApp.md)
- [MobileIdCheckResponse](MobileIdCheckResponse.md).session

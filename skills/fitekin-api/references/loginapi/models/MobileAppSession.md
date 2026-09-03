# MobileAppSession

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
| `refreshToken` | string | yes |  |

Used by:

- POST /api/Login/MobileAppEmailLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/Login/MobileAppLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/Login/MobileAppLoginWCaptcha (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/Login/MobileAppTokenRefresh (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/Login/MobileAppEmailLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/Login/MobileAppLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/Login/MobileAppLoginWCaptcha (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/Login/MobileAppTokenRefresh (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/Login/MobileAppEmailLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/Login/MobileAppLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/Login/MobileAppLoginWCaptcha (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/Login/MobileAppTokenRefresh (response) — [MobileApp](../endpoints/MobileApp.md)

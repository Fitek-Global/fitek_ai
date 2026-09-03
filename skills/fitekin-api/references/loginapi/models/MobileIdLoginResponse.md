# MobileIdLoginResponse

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `sessionGuid` | uuid | no |  |
| `checkCode` | string | yes |  |
| `isError` | boolean | no |  |
| `error` | string | yes |  |
| `token` | string | yes |  |
| `authStatus` | enum [AuthStatus](AuthStatus.md) | no |  |
| `country` | string | yes |  |

Used by:

- POST /api/Mobile/MobileLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/Mobile/MobileLoginWCaptcha (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/Mobile/MobileLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/Mobile/MobileLoginWCaptcha (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/Mobile/MobileLogin (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/Mobile/MobileLoginWCaptcha (response) — [MobileApp](../endpoints/MobileApp.md)

# StrongAuthUsersResponseDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `authStatus` | enum [AuthStatus](AuthStatus.md) | no |  |
| `users` | [StrongAuthUserDto](StrongAuthUserDto.md)[] | yes |  |

Used by:

- POST /api/IdCard/login (response) — [IdCard](../endpoints/IdCard.md)
- POST /api/Login/v2.0/IdLogin/IdLoginWCaptcha (response) — [Login](../endpoints/Login.md)
- POST /api/Login/v2/IdLogin/IdLoginWCaptcha (response) — [Login](../endpoints/Login.md)
- POST /api/v2.0/Mobile/MobileCheck (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v2.0/SmartId/Check (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v2/Mobile/MobileCheck (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v2/SmartId/Check (response) — [MobileApp](../endpoints/MobileApp.md)

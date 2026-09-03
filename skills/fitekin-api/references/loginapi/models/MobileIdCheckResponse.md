# MobileIdCheckResponse

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `isAuthenticated` | boolean | no |  |
| `isWaiting` | boolean | no |  |
| `isError` | boolean | no |  |
| `error` | string | yes |  |
| `session` | [Session](Session.md) | no |  |

Used by:

- POST /api/Mobile/MobileCheck (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1.0/Mobile/MobileCheck (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v1/Mobile/MobileCheck (response) — [MobileApp](../endpoints/MobileApp.md)

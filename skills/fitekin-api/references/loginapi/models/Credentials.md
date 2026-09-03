# Credentials

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `username` | string | yes |  |
| `password` | string | yes |  |
| `deviceName` | string | yes |  |
| `appVersion` | string | yes |  |
| `browserName` | string | yes |  |
| `browserVersion` | string | yes |  |

Used by:

- POST /api/Login (request) — [Login](../endpoints/Login.md)
- POST /api/v2.0/Login/MobileAppLogin (request) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/v2/Login/MobileAppLogin (request) — [MobileApp](../endpoints/MobileApp.md)
- [CredentialsCaptchaWrapper](CredentialsCaptchaWrapper.md).body

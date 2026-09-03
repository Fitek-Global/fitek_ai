# FitekIN Login API: endpoint index

Base path: `{BASE_URL}/LoginApi`. Anonymous. Returns the session token used by the Web API (see ../auth.md).

Generated from `loginapi-v1.json` (OpenAPI 3.0.1). 53 endpoints, 32 models, 4 enums.

Find the endpoint here, then open `endpoints/<Tag>.md` for parameters and `models/<Model>.md` for properties.

## IdCard — [endpoints/IdCard.md](endpoints/IdCard.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/IdCard/challenge` | — | [ChallengeDto](models/ChallengeDto.md) |
| POST | `/api/IdCard/login` | [WebEidAuthTokenWrapperDto](models/WebEidAuthTokenWrapperDto.md) | [StrongAuthUsersResponseDto](models/StrongAuthUsersResponseDto.md) |

## Login — [endpoints/Login.md](endpoints/Login.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Login` | [Credentials](models/Credentials.md) | [Session](models/Session.md) |
| GET | `/api/Login/CheckEmailExists` | — | [EmailStatus](models/EmailStatus.md) |
| POST | `/api/Login/EmailLoginWCaptcha` | [EmailCredentialsCaptchaWrapper](models/EmailCredentialsCaptchaWrapper.md) | [Session](models/Session.md) |
| POST | `/api/Login/IdLogin` | [IdLoginRequest](models/IdLoginRequest.md) | [Session](models/Session.md) |
| POST | `/api/Login/IdLoginWCaptcha` | [IdLoginRequestCaptchaWrapper](models/IdLoginRequestCaptchaWrapper.md) | [Session](models/Session.md) |
| GET | `/api/Login/IpInfo` | — | [IpInfoResponse](models/IpInfoResponse.md) |
| POST | `/api/Login/LoginWCaptcha` | [CredentialsCaptchaWrapper](models/CredentialsCaptchaWrapper.md) | [Session](models/Session.md) |
| GET | `/api/Login/SendPasswordResetLink` | — | [Response](models/Response.md) |
| POST | `/api/Login/v2.0/IdLogin/IdLoginWCaptcha` | [IdLoginRequestCaptchaWrapper](models/IdLoginRequestCaptchaWrapper.md) | [StrongAuthUsersResponseDto](models/StrongAuthUsersResponseDto.md) |
| POST | `/api/Login/v2/IdLogin/IdLoginWCaptcha` | [IdLoginRequestCaptchaWrapper](models/IdLoginRequestCaptchaWrapper.md) | [StrongAuthUsersResponseDto](models/StrongAuthUsersResponseDto.md) |

## MobileApp — [endpoints/MobileApp.md](endpoints/MobileApp.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Login/MobileAppEmailLogin` | inline | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/Login/MobileAppLogin` | inline | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/Login/MobileAppLoginWCaptcha` | [CredentialsCaptchaWrapper](models/CredentialsCaptchaWrapper.md) | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/Login/MobileAppTokenRefresh` | [TokenRefreshRequest](models/TokenRefreshRequest.md) | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/Mobile/MobileCheck` | [MobileIdCheckRequest](models/MobileIdCheckRequest.md) | [MobileIdCheckResponse](models/MobileIdCheckResponse.md) |
| POST | `/api/Mobile/MobileLogin` | [MobileCredentials](models/MobileCredentials.md) | [MobileIdLoginResponse](models/MobileIdLoginResponse.md) |
| POST | `/api/Mobile/MobileLoginWCaptcha` | [MobileCredentialsCaptchaWrapper](models/MobileCredentialsCaptchaWrapper.md) | [MobileIdLoginResponse](models/MobileIdLoginResponse.md) |
| POST | `/api/SmartId/Check` | [SmartIDCheckDTO](models/SmartIDCheckDTO.md) | [Session](models/Session.md) |
| POST | `/api/SmartId/Start` | [SmartIDStartDTO](models/SmartIDStartDTO.md) | [AuthorizationResponse](models/AuthorizationResponse.md) |
| POST | `/api/SmartId/StartWCaptcha` | [SmartIDStartDTOCaptchaWrapper](models/SmartIDStartDTOCaptchaWrapper.md) | [AuthorizationResponse](models/AuthorizationResponse.md) |
| POST | `/api/v1.0/CreateSession` | [CreateSessionDataDto](models/CreateSessionDataDto.md) | [Session](models/Session.md) |
| POST | `/api/v1.0/Login/MobileAppEmailLogin` | inline | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/v1.0/Login/MobileAppLogin` | inline | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/v1.0/Login/MobileAppLoginWCaptcha` | [CredentialsCaptchaWrapper](models/CredentialsCaptchaWrapper.md) | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/v1.0/Login/MobileAppTokenRefresh` | [TokenRefreshRequest](models/TokenRefreshRequest.md) | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/v1.0/Mobile/MobileCheck` | [MobileIdCheckRequest](models/MobileIdCheckRequest.md) | [MobileIdCheckResponse](models/MobileIdCheckResponse.md) |
| POST | `/api/v1.0/Mobile/MobileLogin` | [MobileCredentials](models/MobileCredentials.md) | [MobileIdLoginResponse](models/MobileIdLoginResponse.md) |
| POST | `/api/v1.0/Mobile/MobileLoginWCaptcha` | [MobileCredentialsCaptchaWrapper](models/MobileCredentialsCaptchaWrapper.md) | [MobileIdLoginResponse](models/MobileIdLoginResponse.md) |
| POST | `/api/v1.0/SmartId/Check` | [SmartIDCheckDTO](models/SmartIDCheckDTO.md) | [Session](models/Session.md) |
| POST | `/api/v1.0/SmartId/Start` | [SmartIDStartDTO](models/SmartIDStartDTO.md) | [AuthorizationResponse](models/AuthorizationResponse.md) |
| POST | `/api/v1.0/SmartId/StartWCaptcha` | [SmartIDStartDTOCaptchaWrapper](models/SmartIDStartDTOCaptchaWrapper.md) | [AuthorizationResponse](models/AuthorizationResponse.md) |
| POST | `/api/v1/CreateSession` | [CreateSessionDataDto](models/CreateSessionDataDto.md) | [Session](models/Session.md) |
| POST | `/api/v1/Login/MobileAppEmailLogin` | inline | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/v1/Login/MobileAppLogin` | inline | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/v1/Login/MobileAppLoginWCaptcha` | [CredentialsCaptchaWrapper](models/CredentialsCaptchaWrapper.md) | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/v1/Login/MobileAppTokenRefresh` | [TokenRefreshRequest](models/TokenRefreshRequest.md) | [MobileAppSession](models/MobileAppSession.md) |
| POST | `/api/v1/Mobile/MobileCheck` | [MobileIdCheckRequest](models/MobileIdCheckRequest.md) | [MobileIdCheckResponse](models/MobileIdCheckResponse.md) |
| POST | `/api/v1/Mobile/MobileLogin` | [MobileCredentials](models/MobileCredentials.md) | [MobileIdLoginResponse](models/MobileIdLoginResponse.md) |
| POST | `/api/v1/Mobile/MobileLoginWCaptcha` | [MobileCredentialsCaptchaWrapper](models/MobileCredentialsCaptchaWrapper.md) | [MobileIdLoginResponse](models/MobileIdLoginResponse.md) |
| POST | `/api/v1/SmartId/Check` | [SmartIDCheckDTO](models/SmartIDCheckDTO.md) | [Session](models/Session.md) |
| POST | `/api/v1/SmartId/Start` | [SmartIDStartDTO](models/SmartIDStartDTO.md) | [AuthorizationResponse](models/AuthorizationResponse.md) |
| POST | `/api/v1/SmartId/StartWCaptcha` | [SmartIDStartDTOCaptchaWrapper](models/SmartIDStartDTOCaptchaWrapper.md) | [AuthorizationResponse](models/AuthorizationResponse.md) |
| POST | `/api/v2.0/Login/MobileAppLogin` | [Credentials](models/Credentials.md) | — |
| POST | `/api/v2.0/Mobile/MobileCheck` | [MobileIdCheckRequest](models/MobileIdCheckRequest.md) | [StrongAuthUsersResponseDto](models/StrongAuthUsersResponseDto.md) |
| POST | `/api/v2.0/SmartId/Check` | [SmartIDCheckDTO](models/SmartIDCheckDTO.md) | [StrongAuthUsersResponseDto](models/StrongAuthUsersResponseDto.md) |
| POST | `/api/v2/Login/MobileAppLogin` | [Credentials](models/Credentials.md) | — |
| POST | `/api/v2/Mobile/MobileCheck` | [MobileIdCheckRequest](models/MobileIdCheckRequest.md) | [StrongAuthUsersResponseDto](models/StrongAuthUsersResponseDto.md) |
| POST | `/api/v2/SmartId/Check` | [SmartIDCheckDTO](models/SmartIDCheckDTO.md) | [StrongAuthUsersResponseDto](models/StrongAuthUsersResponseDto.md) |

## Status — [endpoints/Status.md](endpoints/Status.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/Status/Headers` | — | — |
| GET | `/api/Status/Status` | — | — |
| GET | `/api/Status/Version` | — | — |

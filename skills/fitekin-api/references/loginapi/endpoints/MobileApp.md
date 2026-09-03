# FitekIN Login API: MobileApp

Base path: `{BASE_URL}/LoginApi`. Anonymous. Returns the session token used by the Web API (see ../auth.md).

38 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Login/MobileAppEmailLogin

**Parameters**

_No parameters._

**Request body**

Inline body as `application/json`:

| Field | Type | Required |
|---|---|---|
| `Email` | string | no |
| `Password` | string | no |
| `DeviceName` | string | no |
| `AppVersion` | string | no |
| `BrowserName` | string | no |
| `BrowserVersion` | string | no |


**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/Login/MobileAppLogin

**Parameters**

_No parameters._

**Request body**

Inline body as `application/json`:

| Field | Type | Required |
|---|---|---|
| `Username` | string | no |
| `Password` | string | no |
| `DeviceName` | string | no |
| `AppVersion` | string | no |
| `BrowserName` | string | no |
| `BrowserVersion` | string | no |


**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/Login/MobileAppLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[CredentialsCaptchaWrapper](../models/CredentialsCaptchaWrapper.md) as `application/json`

**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/Login/MobileAppTokenRefresh

**Parameters**

_No parameters._

**Request body**

[TokenRefreshRequest](../models/TokenRefreshRequest.md) as `application/json`

**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/Mobile/MobileCheck

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `canRefresh` | query | no | boolean |  |

**Request body**

[MobileIdCheckRequest](../models/MobileIdCheckRequest.md) as `application/json`

**Response (200)**

[MobileIdCheckResponse](../models/MobileIdCheckResponse.md)

## POST /api/Mobile/MobileLogin

**Parameters**

_No parameters._

**Request body**

[MobileCredentials](../models/MobileCredentials.md) as `application/json`

**Response (200)**

[MobileIdLoginResponse](../models/MobileIdLoginResponse.md)

## POST /api/Mobile/MobileLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[MobileCredentialsCaptchaWrapper](../models/MobileCredentialsCaptchaWrapper.md) as `application/json`

**Response (200)**

[MobileIdLoginResponse](../models/MobileIdLoginResponse.md)

## POST /api/SmartId/Check

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `mobile` | query | no | boolean |  |

**Request body**

[SmartIDCheckDTO](../models/SmartIDCheckDTO.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## POST /api/SmartId/Start

**Parameters**

_No parameters._

**Request body**

[SmartIDStartDTO](../models/SmartIDStartDTO.md) as `application/json`

**Response (200)**

[AuthorizationResponse](../models/AuthorizationResponse.md)

## POST /api/SmartId/StartWCaptcha

**Parameters**

_No parameters._

**Request body**

[SmartIDStartDTOCaptchaWrapper](../models/SmartIDStartDTOCaptchaWrapper.md) as `application/json`

**Response (200)**

[AuthorizationResponse](../models/AuthorizationResponse.md)

## POST /api/v1.0/CreateSession

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `mobile` | query | no | boolean |  |

**Request body**

[CreateSessionDataDto](../models/CreateSessionDataDto.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## POST /api/v1.0/Login/MobileAppEmailLogin

**Parameters**

_No parameters._

**Request body**

Inline body as `application/json`:

| Field | Type | Required |
|---|---|---|
| `Email` | string | no |
| `Password` | string | no |
| `DeviceName` | string | no |
| `AppVersion` | string | no |
| `BrowserName` | string | no |
| `BrowserVersion` | string | no |


**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/v1.0/Login/MobileAppLogin

**Parameters**

_No parameters._

**Request body**

Inline body as `application/json`:

| Field | Type | Required |
|---|---|---|
| `Username` | string | no |
| `Password` | string | no |
| `DeviceName` | string | no |
| `AppVersion` | string | no |
| `BrowserName` | string | no |
| `BrowserVersion` | string | no |


**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/v1.0/Login/MobileAppLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[CredentialsCaptchaWrapper](../models/CredentialsCaptchaWrapper.md) as `application/json`

**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/v1.0/Login/MobileAppTokenRefresh

**Parameters**

_No parameters._

**Request body**

[TokenRefreshRequest](../models/TokenRefreshRequest.md) as `application/json`

**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/v1.0/Mobile/MobileCheck

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `canRefresh` | query | no | boolean |  |

**Request body**

[MobileIdCheckRequest](../models/MobileIdCheckRequest.md) as `application/json`

**Response (200)**

[MobileIdCheckResponse](../models/MobileIdCheckResponse.md)

## POST /api/v1.0/Mobile/MobileLogin

**Parameters**

_No parameters._

**Request body**

[MobileCredentials](../models/MobileCredentials.md) as `application/json`

**Response (200)**

[MobileIdLoginResponse](../models/MobileIdLoginResponse.md)

## POST /api/v1.0/Mobile/MobileLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[MobileCredentialsCaptchaWrapper](../models/MobileCredentialsCaptchaWrapper.md) as `application/json`

**Response (200)**

[MobileIdLoginResponse](../models/MobileIdLoginResponse.md)

## POST /api/v1.0/SmartId/Check

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `mobile` | query | no | boolean |  |

**Request body**

[SmartIDCheckDTO](../models/SmartIDCheckDTO.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## POST /api/v1.0/SmartId/Start

**Parameters**

_No parameters._

**Request body**

[SmartIDStartDTO](../models/SmartIDStartDTO.md) as `application/json`

**Response (200)**

[AuthorizationResponse](../models/AuthorizationResponse.md)

## POST /api/v1.0/SmartId/StartWCaptcha

**Parameters**

_No parameters._

**Request body**

[SmartIDStartDTOCaptchaWrapper](../models/SmartIDStartDTOCaptchaWrapper.md) as `application/json`

**Response (200)**

[AuthorizationResponse](../models/AuthorizationResponse.md)

## POST /api/v1/CreateSession

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `mobile` | query | no | boolean |  |

**Request body**

[CreateSessionDataDto](../models/CreateSessionDataDto.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## POST /api/v1/Login/MobileAppEmailLogin

**Parameters**

_No parameters._

**Request body**

Inline body as `application/json`:

| Field | Type | Required |
|---|---|---|
| `Email` | string | no |
| `Password` | string | no |
| `DeviceName` | string | no |
| `AppVersion` | string | no |
| `BrowserName` | string | no |
| `BrowserVersion` | string | no |


**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/v1/Login/MobileAppLogin

**Parameters**

_No parameters._

**Request body**

Inline body as `application/json`:

| Field | Type | Required |
|---|---|---|
| `Username` | string | no |
| `Password` | string | no |
| `DeviceName` | string | no |
| `AppVersion` | string | no |
| `BrowserName` | string | no |
| `BrowserVersion` | string | no |


**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/v1/Login/MobileAppLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[CredentialsCaptchaWrapper](../models/CredentialsCaptchaWrapper.md) as `application/json`

**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/v1/Login/MobileAppTokenRefresh

**Parameters**

_No parameters._

**Request body**

[TokenRefreshRequest](../models/TokenRefreshRequest.md) as `application/json`

**Response (200)**

[MobileAppSession](../models/MobileAppSession.md)

## POST /api/v1/Mobile/MobileCheck

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `canRefresh` | query | no | boolean |  |

**Request body**

[MobileIdCheckRequest](../models/MobileIdCheckRequest.md) as `application/json`

**Response (200)**

[MobileIdCheckResponse](../models/MobileIdCheckResponse.md)

## POST /api/v1/Mobile/MobileLogin

**Parameters**

_No parameters._

**Request body**

[MobileCredentials](../models/MobileCredentials.md) as `application/json`

**Response (200)**

[MobileIdLoginResponse](../models/MobileIdLoginResponse.md)

## POST /api/v1/Mobile/MobileLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[MobileCredentialsCaptchaWrapper](../models/MobileCredentialsCaptchaWrapper.md) as `application/json`

**Response (200)**

[MobileIdLoginResponse](../models/MobileIdLoginResponse.md)

## POST /api/v1/SmartId/Check

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `mobile` | query | no | boolean |  |

**Request body**

[SmartIDCheckDTO](../models/SmartIDCheckDTO.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## POST /api/v1/SmartId/Start

**Parameters**

_No parameters._

**Request body**

[SmartIDStartDTO](../models/SmartIDStartDTO.md) as `application/json`

**Response (200)**

[AuthorizationResponse](../models/AuthorizationResponse.md)

## POST /api/v1/SmartId/StartWCaptcha

**Parameters**

_No parameters._

**Request body**

[SmartIDStartDTOCaptchaWrapper](../models/SmartIDStartDTOCaptchaWrapper.md) as `application/json`

**Response (200)**

[AuthorizationResponse](../models/AuthorizationResponse.md)

## POST /api/v2.0/Login/MobileAppLogin

**Parameters**

_No parameters._

**Request body**

[Credentials](../models/Credentials.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/v2.0/Mobile/MobileCheck

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `canRefresh` | query | no | boolean |  |

**Request body**

[MobileIdCheckRequest](../models/MobileIdCheckRequest.md) as `application/json`

**Response (200)**

[StrongAuthUsersResponseDto](../models/StrongAuthUsersResponseDto.md)

## POST /api/v2.0/SmartId/Check

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `mobile` | query | no | boolean |  |

**Request body**

[SmartIDCheckDTO](../models/SmartIDCheckDTO.md) as `application/json`

**Response (200)**

[StrongAuthUsersResponseDto](../models/StrongAuthUsersResponseDto.md)

## POST /api/v2/Login/MobileAppLogin

**Parameters**

_No parameters._

**Request body**

[Credentials](../models/Credentials.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/v2/Mobile/MobileCheck

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `canRefresh` | query | no | boolean |  |

**Request body**

[MobileIdCheckRequest](../models/MobileIdCheckRequest.md) as `application/json`

**Response (200)**

[StrongAuthUsersResponseDto](../models/StrongAuthUsersResponseDto.md)

## POST /api/v2/SmartId/Check

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `mobile` | query | no | boolean |  |

**Request body**

[SmartIDCheckDTO](../models/SmartIDCheckDTO.md) as `application/json`

**Response (200)**

[StrongAuthUsersResponseDto](../models/StrongAuthUsersResponseDto.md)

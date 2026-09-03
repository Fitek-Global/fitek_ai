# FitekIN Login API: Login

Base path: `{BASE_URL}/LoginApi`. Anonymous. Returns the session token used by the Web API (see ../auth.md).

10 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Login

**Parameters**

_No parameters._

**Request body**

[Credentials](../models/Credentials.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## GET /api/Login/CheckEmailExists

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `email` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[EmailStatus](../models/EmailStatus.md)

## POST /api/Login/EmailLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[EmailCredentialsCaptchaWrapper](../models/EmailCredentialsCaptchaWrapper.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## POST /api/Login/IdLogin

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `captchaScore` | query | no | double |  |

**Request body**

[IdLoginRequest](../models/IdLoginRequest.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## POST /api/Login/IdLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[IdLoginRequestCaptchaWrapper](../models/IdLoginRequestCaptchaWrapper.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## GET /api/Login/IpInfo

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[IpInfoResponse](../models/IpInfoResponse.md)

## POST /api/Login/LoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[CredentialsCaptchaWrapper](../models/CredentialsCaptchaWrapper.md) as `application/json`

**Response (200)**

[Session](../models/Session.md)

## GET /api/Login/SendPasswordResetLink

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `email` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[Response](../models/Response.md)

## POST /api/Login/v2.0/IdLogin/IdLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[IdLoginRequestCaptchaWrapper](../models/IdLoginRequestCaptchaWrapper.md) as `application/json`

**Response (200)**

[StrongAuthUsersResponseDto](../models/StrongAuthUsersResponseDto.md)

## POST /api/Login/v2/IdLogin/IdLoginWCaptcha

**Parameters**

_No parameters._

**Request body**

[IdLoginRequestCaptchaWrapper](../models/IdLoginRequestCaptchaWrapper.md) as `application/json`

**Response (200)**

[StrongAuthUsersResponseDto](../models/StrongAuthUsersResponseDto.md)

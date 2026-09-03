# FitekIN Login API: IdCard

Base path: `{BASE_URL}/LoginApi`. Anonymous. Returns the session token used by the Web API (see ../auth.md).

2 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/IdCard/challenge

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[ChallengeDto](../models/ChallengeDto.md)

## POST /api/IdCard/login

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `sessionId` | query | no | string |  |

**Request body**

[WebEidAuthTokenWrapperDto](../models/WebEidAuthTokenWrapperDto.md) as `application/json`

**Response (200)**

[StrongAuthUsersResponseDto](../models/StrongAuthUsersResponseDto.md)

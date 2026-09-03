# FitekIN Web API: Login

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

2 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Login/Login

**Parameters**

_No parameters._

**Request body**

[Credentials](../models/Credentials.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Login/Logout

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `token` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

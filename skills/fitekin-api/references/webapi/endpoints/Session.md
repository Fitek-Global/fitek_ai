# FitekIN Web API: Session

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

7 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Session/Check

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Session/ExtendSession

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Session/GetMySessions

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[SessionClientDto[]](../models/SessionClientDto.md)

## GET /api/Session/GetUserCompanies

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `lastCompanyGuid` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[BackOfficeCompanyDTO[]](../models/BackOfficeCompanyDTO.md)

## GET /api/Session/Status

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Session/StatusRest

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Session/TerminateSessions

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

`array`

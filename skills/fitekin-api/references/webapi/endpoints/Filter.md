# FitekIN Web API: Filter

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

5 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## GET /api/Filter/DeleteFilter

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `gFilterId` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[FilterDto](../models/FilterDto.md)

## GET /api/Filter/GetAllFilters

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[FilterDto[]](../models/FilterDto.md)

## GET /api/Filter/GetFilter

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `gFilterId` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[FilterDto](../models/FilterDto.md)

## GET /api/Filter/RecreateSystemFilters

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[FilterDto[]](../models/FilterDto.md)

## POST /api/Filter/SetFilter

**Parameters**

_No parameters._

**Request body**

[FilterDto](../models/FilterDto.md) as `application/json`

**Response (200)**

[FilterDto](../models/FilterDto.md)

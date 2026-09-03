# FitekIN Web API: FilterTemplate

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

3 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## DELETE /api/FilterTemplate/DeleteFilterTemplate/{templateId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `templateId` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/FilterTemplate/GetTemplates

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[FilterTemplateDTO[]](../models/FilterTemplateDTO.md)

## POST /api/FilterTemplate/SaveFilterTemplate

**Parameters**

_No parameters._

**Request body**

[FilterTemplateDTO](../models/FilterTemplateDTO.md) as `application/json`

**Response (200)**

[FilterTemplateDTO](../models/FilterTemplateDTO.md)

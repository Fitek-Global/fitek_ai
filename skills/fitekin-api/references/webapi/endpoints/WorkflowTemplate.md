# FitekIN Web API: WorkflowTemplate

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

11 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/WorkflowTemplate/AddWorkflowTemplate

**Parameters**

_No parameters._

**Request body**

[WorkflowTemplateDTO](../models/WorkflowTemplateDTO.md) as `application/json`

**Response (200)**

[Response](../models/Response.md)

## POST /api/WorkflowTemplate/AddWorkflowTemplateItem

**Parameters**

_No parameters._

**Request body**

[WorkflowTemplateItemDTO](../models/WorkflowTemplateItemDTO.md) as `application/json`

**Response (200)**

[WorkflowTemplateItemDTO](../models/WorkflowTemplateItemDTO.md)

## POST /api/WorkflowTemplate/DeleteTemplates

**Parameters**

_No parameters._

**Request body**

[WorkflowTemplateDTO](../models/WorkflowTemplateDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/WorkflowTemplate/ExportWorkflowTemplatesToCsv (deprecated)

**Parameters**

_No parameters._

**Request body**

[RestrictionItem[]](../models/RestrictionItem.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/WorkflowTemplate/ExportWorkflowTemplatesToXls

**Parameters**

_No parameters._

**Request body**

[RestrictionItem[]](../models/RestrictionItem.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/WorkflowTemplate/GetById/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[WorkflowTemplateDTO](../models/WorkflowTemplateDTO.md)

## POST /api/WorkflowTemplate/GetCompanyTemplates

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[WorkflowTemplateDTOPagedListContainer](../models/WorkflowTemplateDTOPagedListContainer.md)

## POST /api/WorkflowTemplate/GetCompanyTemplatesMin

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[WorkflowTemplateMinDTOPagedListContainer](../models/WorkflowTemplateMinDTOPagedListContainer.md)

## POST /api/WorkflowTemplate/ReplaceUserInConfirmationFlows

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `oldGroupMemberId` | query | no | int32 |  |
| `newGroupMemberId` | query | no | int32 |  |
| `checkOnly` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

`array`

## POST /api/WorkflowTemplate/UpdateTemplates

**Parameters**

_No parameters._

**Request body**

[WorkflowTemplateDTO](../models/WorkflowTemplateDTO.md) as `application/json`

**Response (200)**

[WorkflowTemplateDTO](../models/WorkflowTemplateDTO.md)

## POST /api/WorkflowTemplate/UpdateWorkflowTemplate

**Parameters**

_No parameters._

**Request body**

[WorkflowTemplateDTO](../models/WorkflowTemplateDTO.md) as `application/json`

**Response (200)**

[Response](../models/Response.md)

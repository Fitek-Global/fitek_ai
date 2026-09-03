# FitekIN Web API: CustomCostObjective

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

25 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/CustomCostObjective/AddCustomCostObjective

**Parameters**

_No parameters._

**Request body**

[CustomCostObjectiveFullDto](../models/CustomCostObjectiveFullDto.md) as `application/json`

**Response (200)**

[CustomCostObjectiveFullDto](../models/CustomCostObjectiveFullDto.md)

## POST /api/CustomCostObjective/AddDimension

**Parameters**

_No parameters._

**Request body**

[DimensionDTO](../models/DimensionDTO.md) as `application/json`

**Response (200)**

[DimensionDTO](../models/DimensionDTO.md)

## DELETE /api/CustomCostObjective/DeleteCustomCostObjective/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## DELETE /api/CustomCostObjective/DeleteDimension/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/CustomCostObjective/EditCustomCostObjective

**Parameters**

_No parameters._

**Request body**

[CustomCostObjectiveFullDto](../models/CustomCostObjectiveFullDto.md) as `application/json`

**Response (200)**

[CustomCostObjectiveFullDto](../models/CustomCostObjectiveFullDto.md)

## POST /api/CustomCostObjective/ExportAccountingToCSV (deprecated)

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/CustomCostObjective/ExportAccountingToXls

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/CustomCostObjective/ExportDimensionsToCSV (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | query | no | int32 |  |

**Request body**

[RestrictionItem[]](../models/RestrictionItem.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/CustomCostObjective/ExportDimensionsToXls

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | query | no | int32 |  |

**Request body**

[RestrictionItem[]](../models/RestrictionItem.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/CustomCostObjective/GetAllCompanyCustomCostObjectives

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[CustomCostObjectiveFullDto[]](../models/CustomCostObjectiveFullDto.md)

## GET /api/CustomCostObjective/GetByCode

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `code` | query | no | string |  |
| `includeDimensions` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[CustomCostObjectiveFullDto](../models/CustomCostObjectiveFullDto.md)

## GET /api/CustomCostObjective/GetByDescriptionPart

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `descriptionPart` | query | no | string |  |
| `includeDimensions` | query | no | boolean |  |
| `invoiceType` | query | no | enum [CustomFieldsInvoiceTypeEnum](../models/CustomFieldsInvoiceTypeEnum.md) |  |

**Request body**

_None._

**Response (200)**

[CustomCostObjectiveFullDto[]](../models/CustomCostObjectiveFullDto.md)

## GET /api/CustomCostObjective/GetCompanyCustomCostObjectivesWithoutDimensions

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `ccoSearchType` | query | no | enum [CustomFieldsInvoiceTypeEnum](../models/CustomFieldsInvoiceTypeEnum.md) |  |

**Request body**

_None._

**Response (200)**

[CustomCostObjectiveDTOListResponse](../models/CustomCostObjectiveDTOListResponse.md)

## GET /api/CustomCostObjective/GetCustomCostObjective/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `includeDimensions` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[CustomCostObjectiveFullDto](../models/CustomCostObjectiveFullDto.md)

## POST /api/CustomCostObjective/GetCustomCostObjectiveDimensions/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[DimensionDTOPagedListContainer](../models/DimensionDTOPagedListContainer.md)

## POST /api/CustomCostObjective/GetDimensions

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[CustomCostObjectiveDTOPagedListContainer](../models/CustomCostObjectiveDTOPagedListContainer.md)

## GET /api/CustomCostObjective/GetInvoiceCountInUseForCustomCostObjective

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `customCostObjectiveId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/CustomCostObjective/GetInvoiceCountInUseForDimension

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `dimensionId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/CustomCostObjective/MoveDown/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `includeDimensions` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[CustomCostObjectiveFullDto[]](../models/CustomCostObjectiveFullDto.md)

## GET /api/CustomCostObjective/MoveUp/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `includeDimensions` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[CustomCostObjectiveFullDto[]](../models/CustomCostObjectiveFullDto.md)

## POST /api/CustomCostObjective/UpdateCustomCostObjective

**Parameters**

_No parameters._

**Request body**

[CustomCostObjectiveDTO](../models/CustomCostObjectiveDTO.md) as `application/json`

**Response (200)**

[CustomCostObjectiveDTO](../models/CustomCostObjectiveDTO.md)

## POST /api/CustomCostObjective/UpdateCustomCostObjectiveOrderNumber

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `dimensionId` | query | no | int32 |  |
| `newOrderNumber` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/CustomCostObjective/UpdateDimension

**Parameters**

_No parameters._

**Request body**

[DimensionDTO](../models/DimensionDTO.md) as `application/json`

**Response (200)**

[DimensionDTO](../models/DimensionDTO.md)

## POST /api/CustomCostObjective/UploadCSVFile2

**Parameters**

_No parameters._

**Request body**

[CsvUploadDimensionsRequest](../models/CsvUploadDimensionsRequest.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

## POST /api/CustomCostObjective/UploadDimensionFile

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `ccoCode` | query | no | string |  |

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

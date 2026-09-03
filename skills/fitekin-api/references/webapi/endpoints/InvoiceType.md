# FitekIN Web API: InvoiceType

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

6 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/InvoiceType/Add

**Parameters**

_No parameters._

**Request body**

[InvoiceTypeDTO](../models/InvoiceTypeDTO.md) as `application/json`

**Response (200)**

[InvoiceTypeDTO](../models/InvoiceTypeDTO.md)

## POST /api/InvoiceType/Delete

**Parameters**

_No parameters._

**Request body**

[InvoiceTypeDTO](../models/InvoiceTypeDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/InvoiceType/GetInvoiceTypeByCode

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `code` | query | no | string |  |
| `type` | query | no | enum [InvType](../models/InvType.md) |  |
| `isIncludeInUseCount` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[InvoiceTypeDTO](../models/InvoiceTypeDTO.md)

## GET /api/InvoiceType/GetInvoiceTypesByTypeId

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `typeId` | query | no | int32 |  |
| `isIncludeInUseCount` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[InvoiceTypeDTO[]](../models/InvoiceTypeDTO.md)

## POST /api/InvoiceType/GetList

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `isIncludeInUseCount` | query | no | boolean |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[InvoiceTypeDTOPagedListContainer](../models/InvoiceTypeDTOPagedListContainer.md)

## POST /api/InvoiceType/Update

**Parameters**

_No parameters._

**Request body**

[InvoiceTypeDTO](../models/InvoiceTypeDTO.md) as `application/json`

**Response (200)**

[InvoiceTypeDTO](../models/InvoiceTypeDTO.md)

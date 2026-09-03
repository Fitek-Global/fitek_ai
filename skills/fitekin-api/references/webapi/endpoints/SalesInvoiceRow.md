# FitekIN Web API: SalesInvoiceRow

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

10 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/SalesInvoiceRow/Add

**Parameters**

_No parameters._

**Request body**

[SalesInvoiceRowDTO[]](../models/SalesInvoiceRowDTO.md) as `application/json`

**Response (200)**

[SalesInvoiceRowDTO[]](../models/SalesInvoiceRowDTO.md)

## GET /api/SalesInvoiceRow/CloneSalesInvoiceRow

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `sourceInvoiceRow` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[SalesInvoiceRowWithTotalNumbersDTO](../models/SalesInvoiceRowWithTotalNumbersDTO.md)

## POST /api/SalesInvoiceRow/Delete

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

[SalesInvoiceRowWithTotalNumbersDTO](../models/SalesInvoiceRowWithTotalNumbersDTO.md)

## GET /api/SalesInvoiceRow/GetById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `rowId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[SalesInvoiceRowDTO](../models/SalesInvoiceRowDTO.md)

## POST /api/SalesInvoiceRow/GetByInvoiceId

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[SalesInvoiceRowDTOPagedListContainer](../models/SalesInvoiceRowDTOPagedListContainer.md)

## POST /api/SalesInvoiceRow/GetLocalFieldsUnitsList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[LocalFieldDTOPagedListContainer](../models/LocalFieldDTOPagedListContainer.md)

## POST /api/SalesInvoiceRow/GetLocalFieldsVatList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[LocalFieldDTOPagedListContainer](../models/LocalFieldDTOPagedListContainer.md)

## POST /api/SalesInvoiceRow/GetRowsOrderNumbers

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

[SalesInvoiceRowOrderNumberDTO[]](../models/SalesInvoiceRowOrderNumberDTO.md)

## POST /api/SalesInvoiceRow/Update

**Parameters**

_No parameters._

**Request body**

[SalesInvoiceRowDTO[]](../models/SalesInvoiceRowDTO.md) as `application/json`

**Response (200)**

[SalesInvoiceRowDTO[]](../models/SalesInvoiceRowDTO.md)

## POST /api/SalesInvoiceRow/UpdateSalesInvoiceRow

**Parameters**

_No parameters._

**Request body**

[SalesInvoiceRowDTO](../models/SalesInvoiceRowDTO.md) as `application/json`

**Response (200)**

[SalesInvoiceRowWithTotalNumbersDTO](../models/SalesInvoiceRowWithTotalNumbersDTO.md)

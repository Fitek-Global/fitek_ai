# FitekIN Web API: InvoiceRow

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

7 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## GET /api/InvoiceRow/GetInvoiceRowExt

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `rowId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceRowExtDTO](../models/InvoiceRowExtDTO.md)

## GET /api/InvoiceRow/GetInvoiceRowMicro

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `rowId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceRowMicroDTO](../models/InvoiceRowMicroDTO.md)

## GET /api/InvoiceRow/GetInvoiceRowsById/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `page` | query | no | int32 |  |
| `pagesize` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceRowDTO[]](../models/InvoiceRowDTO.md)

## POST /api/InvoiceRow/GetInvoiceRowsByInvoiceId/{invoiceId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | path | yes | int32 |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[InvoiceRowDTOPagedListContainer](../models/InvoiceRowDTOPagedListContainer.md)

## GET /api/InvoiceRow/GetInvoiceRowsMin/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `page` | query | no | int32 |  |
| `pagesize` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceRowMinDTO[]](../models/InvoiceRowMinDTO.md)

## GET /api/InvoiceRow/GetProductItems

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `name` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[ProductItemDTO[]](../models/ProductItemDTO.md)

## POST /api/InvoiceRow/UpdateInvoiceRow

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

[InvoiceRowDTO](../models/InvoiceRowDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

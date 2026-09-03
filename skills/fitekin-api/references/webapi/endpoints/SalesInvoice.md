# FitekIN Web API: SalesInvoice

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

10 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## GET /api/SalesInvoice/CloneSalesInvoice

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `sourceSalesInvoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/SalesInvoice/DeleteSalesInvoice

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[SalesInvoiceDTO](../models/SalesInvoiceDTO.md)

## POST /api/SalesInvoice/ExportSalesInvoicesToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/SalesInvoice/GetByGuid

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `guid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[SalesInvoiceDTO](../models/SalesInvoiceDTO.md)

## GET /api/SalesInvoice/GetById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[SalesInvoiceDTO](../models/SalesInvoiceDTO.md)

## GET /api/SalesInvoice/GetInvoiceXml (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/SalesInvoice/GetList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[SalesInvoiceDTOPagedListContainer](../models/SalesInvoiceDTOPagedListContainer.md)

## POST /api/SalesInvoice/GetSalesInvoiceHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `isDescending` | query | no | boolean |  |

**Request body**

[SalesInvoiceHistoryAction[]](../models/SalesInvoiceHistoryAction.md) as `application/json`

**Response (200)**

[SalesInvoiceHistoryDTO[]](../models/SalesInvoiceHistoryDTO.md)

## POST /api/SalesInvoice/Save

**Parameters**

_No parameters._

**Request body**

[SalesInvoiceDTO](../models/SalesInvoiceDTO.md) as `application/json`

**Response (200)**

[SalesInvoiceDTO](../models/SalesInvoiceDTO.md)

## POST /api/SalesInvoice/SendSalesInvoice

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

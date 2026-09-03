# FitekIN Web API: InvoiceHistory

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

9 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## GET /api/InvoiceHistory/GetInvoiceHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataHistory](../models/InvoiceDataHistory.md)

## POST /api/InvoiceHistory/GetInvoiceHistoryItems

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

[InvoiceDataHistory[]](../models/InvoiceDataHistory.md)

## GET /api/InvoiceHistory/UpdateAccountHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `accountId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataHistory](../models/InvoiceDataHistory.md)

## GET /api/InvoiceHistory/UpdateAllHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataHistory](../models/InvoiceDataHistory.md)

## GET /api/InvoiceHistory/UpdateCompanyHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataHistory](../models/InvoiceDataHistory.md)

## GET /api/InvoiceHistory/UpdateCustomCostObjectiveHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `customCostObjectiveId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataHistory](../models/InvoiceDataHistory.md)

## GET /api/InvoiceHistory/UpdateDimensionHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `customCostObjectiveId` | query | no | int32 |  |
| `dimensionId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataHistory](../models/InvoiceDataHistory.md)

## GET /api/InvoiceHistory/UpdateSupplierHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataHistory](../models/InvoiceDataHistory.md)

## GET /api/InvoiceHistory/UpdateVatCodeHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `vatCodeId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataHistory](../models/InvoiceDataHistory.md)

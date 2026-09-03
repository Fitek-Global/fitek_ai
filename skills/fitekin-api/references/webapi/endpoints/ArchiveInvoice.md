# FitekIN Web API: ArchiveInvoice

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

6 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## GET /api/ArchiveInvoice/GetAccounts

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[AccountDTO[]](../models/AccountDTO.md)

## GET /api/ArchiveInvoice/GetCustomCostObjectives

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[CustomCostObjectiveFullDto[]](../models/CustomCostObjectiveFullDto.md)

## GET /api/ArchiveInvoice/GetInvoiceDataById/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataDTO](../models/InvoiceDataDTO.md)

## GET /api/ArchiveInvoice/GetInvoiceRowsById/{id}

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

## POST /api/ArchiveInvoice/GetInvoicesSmall

**Parameters**

_No parameters._

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[InvoiceDTOPagedListContainer](../models/InvoiceDTOPagedListContainer.md)

## GET /api/ArchiveInvoice/GetInvoiceTransactionRows/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `page` | query | no | int32 |  |
| `pagesize` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[TransactionRowDTO[]](../models/TransactionRowDTO.md)

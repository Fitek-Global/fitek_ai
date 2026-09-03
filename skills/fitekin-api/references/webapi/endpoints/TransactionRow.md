# FitekIN Web API: TransactionRow

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

25 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/TransactionRow/AddTransactionRow

**Parameters**

_No parameters._

**Request body**

[TransactionRowDTO](../models/TransactionRowDTO.md) as `application/json`

**Response (200)**

[TransactionRowDTO](../models/TransactionRowDTO.md)

## POST /api/TransactionRow/CopyAccountingRowData

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `accountingRowId` | query | no | int32 |  |
| `actionModifier` | query | no | enum [ActionModifier](../models/ActionModifier.md) |  |

**Request body**

`array` as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/CopyDown

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `orderno` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/CopyDown/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## DELETE /api/TransactionRow/DeleteAccountDistributionItem/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/DeleteTransactionRow

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/ExportTransactionRowsToCSV (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/ExportTransactionRowsToXls (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/ExportTransactionRowsToXlsV2

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/ExportTransactionRowsWithFormulasToXls (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/ExportTransactionRowsWithFormulasToXlsV2

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/GetAvailableIsibFunds

**Parameters**

_No parameters._

**Request body**

[IsibRequestDTO](../models/IsibRequestDTO.md) as `application/json`

**Response (200)**

[IsibResponseDTO](../models/IsibResponseDTO.md)

## GET /api/TransactionRow/GetById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `transactionRowId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[TransactionRowDTO](../models/TransactionRowDTO.md)

## POST /api/TransactionRow/GetByIds

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

[TransactionRowDTO[]](../models/TransactionRowDTO.md)

## GET /api/TransactionRow/GetRowHistory/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[TransactionRowHistoryDTO[]](../models/TransactionRowHistoryDTO.md)

## GET /api/TransactionRow/GetTransactionRowsExtendedInfoList/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[GroupingTransactionRowExtensionDTO[]](../models/GroupingTransactionRowExtensionDTO.md)

## POST /api/TransactionRow/GetTransactionRowsHistoryList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[TransactionRowHistoryItemDTOPagedListContainer](../models/TransactionRowHistoryItemDTOPagedListContainer.md)

## POST /api/TransactionRow/UpdateComment/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

[CommentMessage](../models/CommentMessage.md) as `application/json`

**Response (200)**

[TransactionRowDTO](../models/TransactionRowDTO.md)

## POST /api/TransactionRow/UpdateDate/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

[AccountingDateMessage](../models/AccountingDateMessage.md) as `application/json`

**Response (200)**

[TransactionRowDTO](../models/TransactionRowDTO.md)

## POST /api/TransactionRow/UpdateTransactionRow

**Parameters**

_No parameters._

**Request body**

[TransactionRowSimpleDTO](../models/TransactionRowSimpleDTO.md) as `application/json`

**Response (200)**

[TransactionRowDTO](../models/TransactionRowDTO.md)

## POST /api/TransactionRow/UpdateTransactionRowProductItemBuyerId

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `transactionRowId` | query | no | int32 |  |
| `newProductItem` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/TransactionRow/UpdateVatCode

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

[TransactionRowDTO](../models/TransactionRowDTO.md) as `application/json`

**Response (200)**

[TransactionRowDTO](../models/TransactionRowDTO.md)

## POST /api/TransactionRow/UpdateVatCodeV2

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `transactionRowId` | query | no | int32 |  |
| `vatCodeId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[TransactionRowDTO](../models/TransactionRowDTO.md)

## POST /api/TransactionRow/UploadTransactionRowsFile/{invoiceId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | path | yes | string |  |

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[TransactionRowsImportFileResultDTO](../models/TransactionRowsImportFileResultDTO.md)

## GET /api/TransactionRow/VerifyIsibFunds

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[IsibVerificationDTO[]](../models/IsibVerificationDTO.md)

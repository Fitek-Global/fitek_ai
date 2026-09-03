# FitekIN Web API: Invoice

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

68 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Invoice/AddInvoiceRow

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

[InvoiceRowDTO](../models/InvoiceRowDTO.md) as `application/json`

**Response (200)**

[InvoiceRowDTO](../models/InvoiceRowDTO.md)

## GET /api/Invoice/ApplyAiToTransactionRows

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `companyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[Response](../models/Response.md)

## POST /api/Invoice/Approve

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `stepNumber` | query | no | int32 |  |

**Request body**

[TaskActionDTO](../models/TaskActionDTO.md) as `application/json`

**Response (200)**

[TaskDTO](../models/TaskDTO.md)

## POST /api/Invoice/ApproveInvoices

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/BulkDeleteInvoiceRow

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `actionModifier` | query | no | enum [ActionModifier](../models/ActionModifier.md) |  |

**Request body**

`array` as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/CanMergeTransactionRows

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

`array` as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Invoice/ChangeInvoiceCompany

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyReceiverGuid` | query | no | uuid |  |
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDTO](../models/InvoiceDTO.md)

## POST /api/Invoice/CheckIsDuplicate

**Parameters**

_No parameters._

**Request body**

[InvoiceBL](../models/InvoiceBL.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/ConfirmAllWaitingInvoices

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[BulkConfirmInvoicesResultDTO](../models/BulkConfirmInvoicesResultDTO.md)

## POST /api/Invoice/CreateAccountingRows

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/CreateTransactionRowsWithAT

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `isManual` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Invoice/Deletefield/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/DeleteInvoiceFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/DeleteInvoiceRow

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

[InvoiceRowDTO](../models/InvoiceRowDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/ExportInvoicesApproversToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/ExportInvoicesToCSV (deprecated)

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/ExportInvoicesToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Invoice/ExportStatusReset/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Invoice/GetAccounts

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[AccountDTO[]](../models/AccountDTO.md)

## GET /api/Invoice/GetAvailableCustomizationFields

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `customizationId` | query | no | int32 |  |
| `customFieldItemPart` | query | no | string |  |
| `page` | query | no | int32 |  |
| `pageSize` | query | no | int32 |  |
| `filterByDate` | query | no | date-time |  |

**Request body**

_None._

**Response (200)**

[CustomizationDTO[]](../models/CustomizationDTO.md)

## GET /api/Invoice/GetById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `includeRows` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[InvoiceDTO](../models/InvoiceDTO.md)

## GET /api/Invoice/GetByIdWithInvoiceRowsAndFiles/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[MinInvoiceWithRowsAndFilesDTO](../models/MinInvoiceWithRowsAndFilesDTO.md)

## GET /api/Invoice/GetDashboardInvoiceExt

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDashboardExtDTO](../models/InvoiceDashboardExtDTO.md)

## POST /api/Invoice/GetDashboardInvoicesMin

**Parameters**

_No parameters._

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[InvoiceDashboardMinDTOPagedListContainer](../models/InvoiceDashboardMinDTOPagedListContainer.md)

## GET /api/Invoice/GetDomasErrorDefinitions

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[ErrorDefinition[]](../models/ErrorDefinition.md)

## POST /api/Invoice/GetInvoiceCustomFieldsHistory

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[InvoiceCustomFieldsHistoryDTOPagedListContainer](../models/InvoiceCustomFieldsHistoryDTOPagedListContainer.md)

## GET /api/Invoice/GetInvoiceDataById/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataDTO](../models/InvoiceDataDTO.md)

## GET /api/Invoice/GetInvoiceDataExt

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceConfirmationExtDTO](../models/InvoiceConfirmationExtDTO.md)

## GET /api/Invoice/GetInvoiceDataMin/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceConfirmationMinDTO](../models/InvoiceConfirmationMinDTO.md)

## GET /api/Invoice/GetInvoiceHeaderChanges/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[AuditHistoryEntryDTO[]](../models/AuditHistoryEntryDTO.md)

## POST /api/Invoice/GetInvoiceHeaderHistory

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[InvoiceHeaderHistorySmallDTOPagedListContainer](../models/InvoiceHeaderHistorySmallDTOPagedListContainer.md)

## GET /api/Invoice/GetInvoiceHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[HistoryDTO[]](../models/HistoryDTO.md)

## POST /api/Invoice/GetInvoicesFull

**Parameters**

_No parameters._

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[InvoiceDTOPagedListContainer](../models/InvoiceDTOPagedListContainer.md)

## POST /api/Invoice/GetInvoicesMedium

**Parameters**

_No parameters._

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[InvoiceDTOPagedListContainer](../models/InvoiceDTOPagedListContainer.md)

## POST /api/Invoice/GetInvoicesSmall

**Parameters**

_No parameters._

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[InvoiceDTOPagedListContainer](../models/InvoiceDTOPagedListContainer.md)

## GET /api/Invoice/GetInvoiceTaskItemsById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[WorkflowTaskExtDTO[]](../models/WorkflowTaskExtDTO.md)

## GET /api/Invoice/GetInvoiceTransactionRows/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `page` | query | no | int32 |  |
| `pageSize` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[TransactionRowDTO[]](../models/TransactionRowDTO.md)

## POST /api/Invoice/GetInvoiceTransactionRowsByInvoiceId/{invoiceId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | path | yes | int32 |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[TransactionRowDTOPagedListContainer](../models/TransactionRowDTOPagedListContainer.md)

## GET /api/Invoice/GetInvoiceTransactionRowsVatRates

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[Int32DecimalNullableTuple[]](../models/Int32DecimalNullableTuple.md)

## GET /api/Invoice/GetInvoiceTransactionRowsVatSum

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/GetPurchaseOrdersLinkingHistory

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[PuchaseOrderLinkingHistorySmallDTOPagedListContainer](../models/PuchaseOrderLinkingHistorySmallDTOPagedListContainer.md)

## POST /api/Invoice/GetSliderInvoicesMin

**Parameters**

_No parameters._

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[InvoiceSliderMinDTOPagedListContainer](../models/InvoiceSliderMinDTOPagedListContainer.md)

## POST /api/Invoice/GetTotalAmounts

**Parameters**

_No parameters._

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[TotalAmountDto[]](../models/TotalAmountDto.md)

## POST /api/Invoice/GetUserExpenses

**Parameters**

_No parameters._

**Request body**

[PagingOptions](../models/PagingOptions.md) as `application/json`

**Response (200)**

[ExpenseInvoicesForMobileDTOPagedListContainer](../models/ExpenseInvoicesForMobileDTOPagedListContainer.md)

## POST /api/Invoice/ImportTransactionRowsXls

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/MergeAccountingRows

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `groupKey` | query | no | string |  |
| `save` | query | no | boolean |  |

**Request body**

`array` as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/MergeAccountingRowsByTransactionRowExtension/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

[GroupingTransactionRowExtensionDTO](../models/GroupingTransactionRowExtensionDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/MergeAccountingRowsVariative

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |
| `actionModifier` | query | no | enum [ActionModifier](../models/ActionModifier.md) |  |
| `save` | query | no | boolean |  |

**Request body**

`array` as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Invoice/MergeAllAccountingRows/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/MergeTransactionRowsByTransactionRowExtensionV2/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

[GroupingTransactionRowExtensionDTO](../models/GroupingTransactionRowExtensionDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/ReceiptOcr (deprecated)

**Parameters**

_No parameters._

**Request body**

[ReceiptOcrRequest](../models/ReceiptOcrRequest.md) as `application/json`

**Response (200)**

[ReceiptOcrResponse](../models/ReceiptOcrResponse.md)

## POST /api/Invoice/ReceiptOcrV2

**Parameters**

_No parameters._

**Request body**

[ReceiptOcrRequest](../models/ReceiptOcrRequest.md) as `application/json`

**Response (200)**

[ReceiptOcrResponse](../models/ReceiptOcrResponse.md)

## POST /api/Invoice/RemoveDuplicateFlag

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[InvoiceDTO](../models/InvoiceDTO.md)

## POST /api/Invoice/ReplaceTasksInWorkflow

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `confirmFirst` | query | no | boolean |  |

**Request body**

[WorkflowWithTasksDTO](../models/WorkflowWithTasksDTO.md) as `application/json`

**Response (200)**

[WorkflowDTO](../models/WorkflowDTO.md)

## POST /api/Invoice/RestoreDeletedInvoice

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDTO](../models/InvoiceDTO.md)

## POST /api/Invoice/Save

**Parameters**

_No parameters._

**Request body**

[InvoiceDTO](../models/InvoiceDTO.md) as `application/json`

**Response (200)**

[InvoiceDTO](../models/InvoiceDTO.md)

## POST /api/Invoice/SaveCopy

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `originalId` | query | no | int32 |  |

**Request body**

[InvoiceDTO](../models/InvoiceDTO.md) as `application/json`

**Response (200)**

[InvoiceDTO](../models/InvoiceDTO.md)

## POST /api/Invoice/SaveCustomFieldsAfterExport

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

[InvoiceCustomizationDTO[]](../models/InvoiceCustomizationDTO.md) as `application/json`

**Response (200)**

[InvoiceCustomizationDTO[]](../models/InvoiceCustomizationDTO.md)

## POST /api/Invoice/SendComplaint

**Parameters**

_No parameters._

**Request body**

[InvoiceError](../models/InvoiceError.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/SetInvoiceToDeleted

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `additionalInfo` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/SplitTransactionRow

**Parameters**

_No parameters._

**Request body**

[TransactionRowSplitDTO](../models/TransactionRowSplitDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/UpdateAccount

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `accountId` | query | no | int32 |  |
| `id` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[TransactionRowDTO](../models/TransactionRowDTO.md)

## POST /api/Invoice/UpdateCustomField

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | query | no | int32 |  |

**Request body**

[TransactionRowsDimensionDTO](../models/TransactionRowsDimensionDTO.md) as `application/json`

**Response (200)**

[TransactionRowsDimensionDTO](../models/TransactionRowsDimensionDTO.md)

## POST /api/Invoice/UpdateCustomFields

**Parameters**

_No parameters._

**Request body**

[TransactionRowsDimensionDTO[]](../models/TransactionRowsDimensionDTO.md) as `application/json`

**Response (200)**

[TransactionRowsDimensionDTO](../models/TransactionRowsDimensionDTO.md)

## POST /api/Invoice/UpdateCustomFieldWithRelations

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `rowId` | query | no | int32 |  |

**Request body**

[TransactionRowsDimensionDTO](../models/TransactionRowsDimensionDTO.md) as `application/json`

**Response (200)**

[TransactionRowsDimensionDTO[]](../models/TransactionRowsDimensionDTO.md)

## GET /api/Invoice/UpdateInvoiceExportSetting/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `enabledExport` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Invoice/UpdateSupplierId

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `supplierId` | query | no | int32 |  |
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceDTO](../models/InvoiceDTO.md)

## POST /api/Invoice/UploadInvoiceFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

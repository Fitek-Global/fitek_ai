# FitekIN Web API: PurchaseOrders

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

50 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/PurchaseOrders/AddNewPurchaseOrder

**Parameters**

_No parameters._

**Request body**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md) as `application/json`

**Response (200)**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md)

## POST /api/PurchaseOrders/BuildNextPurchaseNumber

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/CancelPurchaseOrder

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/PurchaseOrders/ClonePurchaseOrder

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `sourcePurchaseOrderId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/PurchaseOrders/CountOfFindByFilter

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `filterId` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/CountOfFindByFilter

**Parameters**

_No parameters._

**Request body**

[FilterDto](../models/FilterDto.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/CreateNewPurchaseOrder

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md)

## GET /api/PurchaseOrders/DeletePurchaseOrder

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md)

## POST /api/PurchaseOrders/DeletePurchaseOrderFile

**Parameters**

_No parameters._

**Request body**

[PurchaseOrderFileAttachmentDTO](../models/PurchaseOrderFileAttachmentDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/DeletePurchaseOrderRow

**Parameters**

_No parameters._

**Request body**

[PurchaseOrdersRowDTO](../models/PurchaseOrdersRowDTO.md) as `application/json`

**Response (200)**

[PurchaseOrdersRowWithTotalNumbersDto](../models/PurchaseOrdersRowWithTotalNumbersDto.md)

## POST /api/PurchaseOrders/DoHeartBeat

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderTaskActionDto](../models/PurchaseOrderTaskActionDto.md)

## GET /api/PurchaseOrders/DownloadPurchaseOrderFile

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderFileAttachmentId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/PurchaseOrders/DuplicatePurchaseOrder

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `sourcePurchaseOrderId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md)

## POST /api/PurchaseOrders/ExportPurchaseOrdersApproversToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/ExportPurchaseOrdersToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/ExportPurchaseOrdersWithCostObjectivesToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/PurchaseOrders/FindByFilter

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `filterId` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrdersDTOPagedListContainer](../models/PurchaseOrdersDTOPagedListContainer.md)

## POST /api/PurchaseOrders/FindByFilter

**Parameters**

_No parameters._

**Request body**

[FilterDto](../models/FilterDto.md) as `application/json`

**Response (200)**

[PurchaseOrdersDTOPagedListContainer](../models/PurchaseOrdersDTOPagedListContainer.md)

## GET /api/PurchaseOrders/GetAllSupplierNames

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

`array`

## POST /api/PurchaseOrders/GetDashboardPurchaseOrdersMin

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[PurchaseOrderDashboardMinDTOPagedListContainer](../models/PurchaseOrderDashboardMinDTOPagedListContainer.md)

## GET /api/PurchaseOrders/GetFilterStructureDto

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[FilterStructureDto](../models/FilterStructureDto.md)

## POST /api/PurchaseOrders/GetInvoicesForPurchaseOrder

**Parameters**

_No parameters._

**Request body**

[PurchaseOrderLinkedInvoicesRequestDto](../models/PurchaseOrderLinkedInvoicesRequestDto.md) as `application/json`

**Response (200)**

[LinkedInvoiceDtoPagedListContainer](../models/LinkedInvoiceDtoPagedListContainer.md)

## GET /api/PurchaseOrders/GetLinkedInvoicesCount/{poId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `poId` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[LinkedObjectsCountAndSumsDTO](../models/LinkedObjectsCountAndSumsDTO.md)

## GET /api/PurchaseOrders/GetLinkedPurchaseOrdersCount/{invoiceId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[LinkedObjectsCountAndSumsDTO](../models/LinkedObjectsCountAndSumsDTO.md)

## POST /api/PurchaseOrders/GetList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[PurchaseOrdersDTOPagedListContainer](../models/PurchaseOrdersDTOPagedListContainer.md)

## GET /api/PurchaseOrders/GetPurchaseOrderById/{poId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `poId` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderWithoutRowsDto](../models/PurchaseOrderWithoutRowsDto.md)

## GET /api/PurchaseOrders/GetPurchaseOrderByToken

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `sToken` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md)

## POST /api/PurchaseOrders/GetPurchaseOrderHeaderHistory

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[PurchaseOrderHeaderHistoryDTOPagedListContainer](../models/PurchaseOrderHeaderHistoryDTOPagedListContainer.md)

## GET /api/PurchaseOrders/GetPurchaseOrderHistory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `purchaseOrderId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderHistoryDTO[]](../models/PurchaseOrderHistoryDTO.md)

## GET /api/PurchaseOrders/GetPurchaseOrderRelatedDocuments/{poId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `poId` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderFileAttachmentDTO[]](../models/PurchaseOrderFileAttachmentDTO.md)

## GET /api/PurchaseOrders/GetPurchaseOrderRows/{poId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `poId` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrdersRowDTO[]](../models/PurchaseOrdersRowDTO.md)

## POST /api/PurchaseOrders/GetPurchaseOrderRowsPaginated/{poId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `poId` | path | yes | int32 |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[PurchaseOrdersRowDTOPagedListContainer](../models/PurchaseOrdersRowDTOPagedListContainer.md)

## POST /api/PurchaseOrders/GetPurchaseOrdersForInvoice

**Parameters**

_No parameters._

**Request body**

[InvoiceLinkedPurchaseOrdersRequestDto](../models/InvoiceLinkedPurchaseOrdersRequestDto.md) as `application/json`

**Response (200)**

[LinkedPurchaseOrderDTOPagedListContainer](../models/LinkedPurchaseOrderDTOPagedListContainer.md)

## POST /api/PurchaseOrders/GetPurchaseOrdersMin

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[PurchaseOrdersListMinDTOPagedListContainer](../models/PurchaseOrdersListMinDTOPagedListContainer.md)

## POST /api/PurchaseOrders/GetPurchaseOrderTaskItems

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderTask[]](../models/PurchaseOrderTask.md)

## POST /api/PurchaseOrders/GetPurchaseOrderTaskItemsDto

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderTaskDTO[]](../models/PurchaseOrderTaskDTO.md)

## POST /api/PurchaseOrders/GetPurchaseOrderToken

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/PurchaseOrders/IsOrderNumberDuplicate

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `orderNumber` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/LinkPurchaseOrderToInvoice

**Parameters**

_No parameters._

**Request body**

[PurchaseOrderLinkRequest](../models/PurchaseOrderLinkRequest.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/ReassignToLast

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `purchaseOrderId` | query | no | int32 |  |
| `comment` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderTaskActionDto](../models/PurchaseOrderTaskActionDto.md)

## POST /api/PurchaseOrders/RecalculateEmptyLinkedSumsForPurchaseOrders

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyGuid` | path | yes | uuid |  |
| `amount` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/RemoveTaskAction

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderId` | query | no | int32 |  |
| `iGroupMemberId` | query | no | int32 |  |
| `iOrderNumberToInsert` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderTaskActionDto](../models/PurchaseOrderTaskActionDto.md)

## POST /api/PurchaseOrders/SavePurchaseOrder

**Parameters**

_No parameters._

**Request body**

[PurchaseOrderWithoutRowsDto](../models/PurchaseOrderWithoutRowsDto.md) as `application/json`

**Response (200)**

[PurchaseOrderWithoutRowsDto](../models/PurchaseOrderWithoutRowsDto.md)

## POST /api/PurchaseOrders/SavePurchaseOrderRow/{poId}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `poId` | path | yes | int32 |  |

**Request body**

[PurchaseOrdersRowDTO](../models/PurchaseOrdersRowDTO.md) as `application/json`

**Response (200)**

[PurchaseOrdersRowWithTotalNumbersDto](../models/PurchaseOrdersRowWithTotalNumbersDto.md)

## POST /api/PurchaseOrders/UnLinkPurchaseOrderToInvoice

**Parameters**

_No parameters._

**Request body**

[PurchaseOrderLinkRequest](../models/PurchaseOrderLinkRequest.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/UpdateExtraStatus

**Parameters**

_No parameters._

**Request body**

[PurchaseOrderExtraStatusDto](../models/PurchaseOrderExtraStatusDto.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PurchaseOrders/UpdatePurchaseOrder

**Parameters**

_No parameters._

**Request body**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md) as `application/json`

**Response (200)**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md)

## POST /api/PurchaseOrders/UpdatePurchaseOrdersRowCustomField

**Parameters**

_No parameters._

**Request body**

[PurchaseOrdersRowsDimensionDTO](../models/PurchaseOrdersRowsDimensionDTO.md) as `application/json`

**Response (200)**

[PurchaseOrdersRowsDimensionDTO](../models/PurchaseOrdersRowsDimensionDTO.md)

## POST /api/PurchaseOrders/UpdatePurchaseOrderTasks

**Parameters**

_No parameters._

**Request body**

[UpdatePurchaseOrderTasksDto](../models/UpdatePurchaseOrderTasksDto.md) as `application/json`

**Response (200)**

[PurchaseOrderTaskDTO[]](../models/PurchaseOrderTaskDTO.md)

## POST /api/PurchaseOrders/UploadPurchaseOrderInvoiceFile

**Parameters**

_No parameters._

**Request body**

[PurchaseOrderFileAttachmentDTO](../models/PurchaseOrderFileAttachmentDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

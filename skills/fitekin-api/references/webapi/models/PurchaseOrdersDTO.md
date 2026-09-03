# PurchaseOrdersDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `OrderNumber` | string | yes |  |
| `Description` | string | yes |  |
| `CreatedById` | int32 | yes |  |
| `CreatedByName` | string | yes |  |
| `SupplierId` | int32 | yes |  |
| `DateCreated` | date-time | no |  |
| `OrderStatus` | enum [PurchaseOrderStatus](PurchaseOrderStatus.md) | no |  |
| `OrderExtraStatus` | enum [PurchaseOrderExtraStatus](PurchaseOrderExtraStatus.md) | no |  |
| `OrderType` | enum [PurchaseOrderType](PurchaseOrderType.md) | no |  |
| `ModifiedBy` | int32 | yes |  |
| `Currency` | string | yes |  |
| `TotalWithoutVat` | double | yes |  |
| `Total` | double | yes |  |
| `IsManualFulfilment` | boolean | no |  |
| `IsLinked` | boolean | no |  |
| `UniqId` | uuid | yes |  |
| `LinkedInvoicesSum` | double | yes |  |
| `LinkedInvoicesCount` | int32 | no |  |
| `DecisionDate` | date-time | yes |  |
| `RemainingSum` | double | yes |  |
| `CurrentlyAssignedUsers` | [PurchaseOrderAssignedUser](PurchaseOrderAssignedUser.md)[] | yes |  |
| `DocumentFiles` | [PurchaseOrderFileAttachmentDTO](PurchaseOrderFileAttachmentDTO.md)[] | yes |  |
| `Supplier` | [SupplierDTO](SupplierDTO.md) | no |  |
| `PurchaseOrdersRows` | [PurchaseOrdersRowDTO](PurchaseOrdersRowDTO.md)[] | yes |  |
| `PurchaseOrderTasks` | [PurchaseOrderTaskDTO](PurchaseOrderTaskDTO.md)[] | yes |  |

Used by:

- GET /api/PurchaseOrders/DeletePurchaseOrder (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- GET /api/PurchaseOrders/DuplicatePurchaseOrder (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- GET /api/PurchaseOrders/GetPurchaseOrderById (response) — [MobileApp](../endpoints/MobileApp.md)
- GET /api/PurchaseOrders/GetPurchaseOrderByToken (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/AddNewPurchaseOrder (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/AddNewPurchaseOrder (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/CreateNewPurchaseOrder (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/UpdatePurchaseOrder (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/UpdatePurchaseOrder (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- [PurchaseOrderTaskActionDto](PurchaseOrderTaskActionDto.md).PurchaseOrder
- [PurchaseOrdersDTOPagedListContainer](PurchaseOrdersDTOPagedListContainer.md).Items

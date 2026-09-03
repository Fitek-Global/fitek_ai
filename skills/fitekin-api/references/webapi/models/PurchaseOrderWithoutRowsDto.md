# PurchaseOrderWithoutRowsDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `OrderNumber` | string | yes |  |
| `Description` | string | yes |  |
| `CreatedById` | int32 | no |  |
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
| `IsLinked` | boolean | no |  |
| `LinkedInvoicesSum` | double | yes |  |
| `LinkedInvoicesCount` | int32 | no |  |
| `IsManualFulfilment` | boolean | no |  |
| `Supplier` | [SupplierDTO](SupplierDTO.md) | no |  |

Used by:

- GET /api/PurchaseOrders/GetPurchaseOrderById/{poId} (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/SavePurchaseOrder (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/SavePurchaseOrder (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)

# PurchaseOrders

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `OrderNumber` | string | yes |  |
| `Description` | string | yes |  |
| `SupplierId` | int32 | yes |  |
| `DateCreated` | date-time | no |  |
| `OrderStatus` | enum [PurchaseOrderStatus](PurchaseOrderStatus.md) | no |  |
| `OrderExtraStatus` | enum [PurchaseOrderExtraStatus](PurchaseOrderExtraStatus.md) | no |  |
| `OrderType` | enum [PurchaseOrderType](PurchaseOrderType.md) | no |  |
| `ModifiedBy` | int32 | yes |  |
| `TotalWithoutVat` | double | yes |  |
| `Total` | double | yes |  |
| `CreatedById` | int32 | yes |  |
| `ExternalId` | string | yes |  |
| `Currency` | string | yes |  |
| `IsManualFulfilment` | boolean | no |  |
| `LinkedInvoicesSum` | double | yes |  |
| `LinkedInvoicesCount` | int32 | no |  |
| `DecisionDate` | date-time | yes |  |
| `Supplier` | [Supplier](Supplier.md) | no |  |
| `CreatedBy` | [GroupMember](GroupMember.md) | no |  |
| `PurchaseOrdersRows` | [PurchaseOrdersRows](PurchaseOrdersRows.md)[] | yes |  |
| `PurchaseOrderTasks` | [PurchaseOrderTask](PurchaseOrderTask.md)[] | yes |  |
| `PurchaseOrderHistory` | [PurchaseOrderHistory](PurchaseOrderHistory.md)[] | yes |  |
| `Invoices` | [Invoice](Invoice.md)[] | yes |  |
| `InvoicePurchaseOrderLink` | [InvoicePurchaseOrderLink](InvoicePurchaseOrderLink.md)[] | yes |  |

Used by:

- [GroupMember](GroupMember.md).PurchaseOrders
- [InvoicePurchaseOrderLink](InvoicePurchaseOrderLink.md).LinkedPurchaseOrder
- [Invoice](Invoice.md).PurchaseOrders
- [PurchaseOrderHistory](PurchaseOrderHistory.md).PurchaseOrders
- [PurchaseOrderTask](PurchaseOrderTask.md).ParentPurchaseOrder
- [PurchaseOrdersRows](PurchaseOrdersRows.md).PurchaseOrder
- [Supplier](Supplier.md).PurchaseOrders

# PurchaseOrdersListMinDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `SupplierName` | string | yes |  |
| `OrderNumber` | string | yes |  |
| `DateCreated` | date-time | no |  |
| `Currency` | string | yes |  |
| `Total` | double | yes |  |
| `Description` | string | yes |  |
| `OrderType` | enum [PurchaseOrderType](PurchaseOrderType.md) | no |  |
| `OrderStatus` | enum [PurchaseOrderStatus](PurchaseOrderStatus.md) | no |  |
| `OrderExtraStatus` | enum [PurchaseOrderExtraStatus](PurchaseOrderExtraStatus.md) | no |  |
| `CurrentlyAssignedUsers` | [PurchaseOrderAssignedUser](PurchaseOrderAssignedUser.md)[] | yes |  |

Used by:

- [PurchaseOrdersListMinDTOPagedListContainer](PurchaseOrdersListMinDTOPagedListContainer.md).Items

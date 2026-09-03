# LinkedPurchaseOrderDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `PurchaseOrderNumber` | string | yes |  |
| `Currency` | string | yes |  |
| `CreatedDate` | date-time | no |  |
| `SupplierName` | string | yes |  |
| `LinkerName` | string | yes |  |
| `LinkedDate` | date-time | yes |  |
| `SumWithoutVat` | double | no |  |
| `TotalAmountWithVat` | double | no |  |
| `IsLinked` | boolean | no |  |
| `OrderStatus` | enum [PurchaseOrderStatus](PurchaseOrderStatus.md) | no |  |

Used by:

- [LinkedPurchaseOrderDTOPagedListContainer](LinkedPurchaseOrderDTOPagedListContainer.md).Items

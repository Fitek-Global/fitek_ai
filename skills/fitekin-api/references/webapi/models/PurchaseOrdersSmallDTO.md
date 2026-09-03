# PurchaseOrdersSmallDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `DateCreated` | date-time | no |  |
| `Description` | string | yes |  |
| `OrderNumber` | string | yes |  |
| `Total` | double | yes |  |
| `Currency` | string | yes |  |
| `Supplier` | [SupplierDTO](SupplierDTO.md) | no |  |

Used by:

- [PurchaseOrdersSmallDTOPagedListContainer](PurchaseOrdersSmallDTOPagedListContainer.md).Items

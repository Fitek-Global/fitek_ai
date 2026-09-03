# PurchaseOrderHeaderHistoryDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `AuditId` | int32 | no |  |
| `AuditAction` | string | yes |  |
| `AuditDate` | date-time | no |  |
| `AuditApp` | string | yes |  |
| `OrderNumber` | string | yes |  |
| `Description` | string | yes |  |
| `DateCreated` | date-time | no |  |
| `OrderType` | enum [PurchaseOrderType](PurchaseOrderType.md) | no |  |
| `Currency` | string | yes |  |
| `SupplierId` | int32 | no |  |
| `SupplierName` | string | yes |  |
| `CreatedById` | int32 | no |  |
| `CreatedByName` | string | yes |  |
| `ModifiedById` | int32 | no |  |
| `ModifiedByName` | string | yes |  |
| `Change` | [ChangeDto](ChangeDto.md) | no |  |

Used by:

- [PurchaseOrderHeaderHistoryDTOPagedListContainer](PurchaseOrderHeaderHistoryDTOPagedListContainer.md).Items

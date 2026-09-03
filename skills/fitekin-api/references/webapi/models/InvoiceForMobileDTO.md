# InvoiceForMobileDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `SenderName` | string | yes | read-only |
| `SupplierName` | string | yes |  |
| `Number` | string | yes |  |
| `TotalAmountWithVat` | double | no |  |
| `Currency` | string | yes |  |
| `DueDate` | date-time | yes |  |
| `HasTransactionRows` | boolean | no |  |
| `IsUserLastInWorkflow` | boolean | no |  |
| `IsCredit` | boolean | no |  |
| `IsDuplicate` | boolean | no |  |
| `InvoiceType` | int32 | yes |  |

Used by:

- [InvoiceForMobileDTOPagedListContainer](InvoiceForMobileDTOPagedListContainer.md).Items

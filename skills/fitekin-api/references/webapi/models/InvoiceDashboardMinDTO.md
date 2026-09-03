# InvoiceDashboardMinDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `SenderName` | string | yes | read-only |
| `SupplierName` | string | yes |  |
| `TotalAmountWithVat` | double | no |  |
| `Currency` | string | yes |  |
| `Number` | string | yes |  |
| `InvoiceDate` | date-time | yes |  |
| `InvoiceType` | [InvoiceTypeDTO](InvoiceTypeDTO.md) | no |  |
| `Status` | int32 | no |  |
| `SenderCode` | string | yes | read-only |
| `SupplierCode` | string | yes |  |
| `IsCredit` | boolean | no |  |
| `IsDuplicate` | boolean | no |  |
| `Description` | string | yes |  |
| `DueDate` | date-time | yes |  |

Used by:

- [InvoiceDashboardMinDTOPagedListContainer](InvoiceDashboardMinDTOPagedListContainer.md).Items

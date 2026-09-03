# ExpenseInvoicesForMobileDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `Number` | string | yes |  |
| `Description` | string | yes |  |
| `SupplierName` | string | yes |  |
| `InvoiceDate` | date-time | yes |  |
| `DueDate` | date-time | yes |  |
| `Status` | int32 | no |  |
| `TotalAmountWithVat` | double | no |  |
| `Currency` | string | yes |  |
| `IsDuplicate` | boolean | no |  |
| `IsCredit` | boolean | no |  |
| `HasTransactionRows` | boolean | no |  |
| `InvoiceType` | [InvoiceTypeDTO](InvoiceTypeDTO.md) | no |  |

Used by:

- [ExpenseInvoicesForMobileDTOPagedListContainer](ExpenseInvoicesForMobileDTOPagedListContainer.md).Items

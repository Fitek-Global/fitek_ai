# LinkedInvoiceDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `Number` | string | yes |  |
| `Currency` | string | yes |  |
| `InvoiceDate` | date-time | yes |  |
| `SupplierName` | string | yes |  |
| `LinkerName` | string | yes |  |
| `LinkedDate` | date-time | yes |  |
| `SumWithoutVat` | double | no |  |
| `TotalAmountWithVat` | double | no |  |
| `IsLinked` | boolean | no |  |
| `Status` | int32 | no |  |

Used by:

- [LinkedInvoiceDtoPagedListContainer](LinkedInvoiceDtoPagedListContainer.md).Items

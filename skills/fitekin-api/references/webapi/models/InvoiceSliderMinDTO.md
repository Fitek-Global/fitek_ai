# InvoiceSliderMinDTO

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

Used by:

- [InvoiceSliderMinDTOPagedListContainer](InvoiceSliderMinDTOPagedListContainer.md).Items

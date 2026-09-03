# InvoiceRowMicroDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `Description` | string | yes |  |
| `ItemDetailInfo` | [ItemDetailInfoMinDTO](ItemDetailInfoMinDTO.md)[] | yes |  |
| `Total` | double | no |  |
| `Vat` | double | no |  |
| `VatRate` | double | no |  |
| `BuyerProductName` | string | yes |  |

Used by:

- GET /api/InvoiceRow/GetInvoiceRowMicro (response) — [InvoiceRow](../endpoints/InvoiceRow.md)

# InvoiceRowMinDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `Description` | string | yes |  |
| `ItemDetailInfo` | [ItemDetailInfoMinDTO](ItemDetailInfoMinDTO.md)[] | yes |  |
| `Total` | double | no |  |
| `Vat` | double | no |  |
| `VatRate` | double | no |  |
| `ItemReserve` | [ItemReserveMinDTO](ItemReserveMinDTO.md)[] | yes |  |
| `BuyerProductName` | string | yes |  |

Used by:

- GET /api/InvoiceRow/GetInvoiceRowsMin/{id} (response) — [InvoiceRow](../endpoints/InvoiceRow.md)

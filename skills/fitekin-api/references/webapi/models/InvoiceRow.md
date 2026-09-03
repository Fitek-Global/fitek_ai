# InvoiceRow

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `SumWithoutVat` | double | no |  |
| `Total` | double | no |  |
| `VAT` | double | no |  |
| `Description` | string | yes |  |
| `InvoiceGuid` | uuid | yes |  |
| `InvoiceId` | int32 | no |  |
| `VatRate` | double | no |  |
| `SerialNumber` | string | yes |  |
| `SellerProductId` | string | yes |  |
| `BuyerProductId` | string | yes |  |
| `TaricCode` | string | yes |  |
| `CustomerRef` | string | yes |  |
| `EAN` | string | yes |  |
| `GroupId` | string | yes |  |
| `ExternalId` | string | yes |  |
| `Name` | string | yes |  |
| `InitialReading` | string | yes |  |
| `FinalReading` | string | yes |  |
| `ItemSum` | double | yes |  |
| `OrderNo` | int32 | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `ImportError` | boolean | no |  |
| `Invoice` | [Invoice](Invoice.md) | no |  |
| `ItemReserve` | [ItemReserve](ItemReserve.md)[] | yes |  |
| `ItemDetailInfo` | [ItemDetailInfo](ItemDetailInfo.md)[] | yes |  |
| `InvoiceRowDiscounts` | [InvoiceRowDiscount](InvoiceRowDiscount.md)[] | yes |  |

Used by:

- [InvoiceRowDiscount](InvoiceRowDiscount.md).InvoiceRow
- [Invoice](Invoice.md).InvoiceRows
- [ItemDetailInfo](ItemDetailInfo.md).InvoiceRow
- [ItemReserve](ItemReserve.md).InvoiceRow

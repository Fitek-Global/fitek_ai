# InvoiceRowBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `SumWithoutVat` | double | no |  |
| `VAT` | double | no |  |
| `Total` | double | no |  |
| `VatRate` | double | no |  |
| `Description` | string | yes |  |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | yes |  |
| `AccountingRowId` | int32 | yes |  |
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
| `Amount` | int32 | no |  |
| `OrderNo` | int32 | no |  |
| `ImportError` | boolean | no |  |
| `ItemReserve` | [ItemReserveBL](ItemReserveBL.md)[] | yes |  |
| `ItemDetailInfo` | [ItemDetailInfoBL](ItemDetailInfoBL.md)[] | yes |  |
| `InvoiceRowDiscounts` | [InvoiceRowDiscountBL](InvoiceRowDiscountBL.md)[] | yes |  |

Used by:

- [InvoiceBL](InvoiceBL.md).InvoiceRows

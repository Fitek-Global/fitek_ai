# SalesInvoiceRow

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `OrderNo` | int32 | no |  |
| `Description` | string | yes |  |
| `ItemAmount` | double | no |  |
| `ItemUnit` | string | yes |  |
| `ItemPrice` | double | no |  |
| `SumWithoutVat` | double | no |  |
| `VAT` | double | no |  |
| `VatRate` | double | no |  |
| `Total` | double | no |  |
| `ModifiedBy` | int32 | yes |  |
| `SerialNumber` | string | yes |  |
| `SellerProductId` | string | yes |  |
| `BuyerProductId` | string | yes |  |
| `TaricCode` | string | yes |  |
| `CustomerRef` | string | yes |  |
| `EAN` | string | yes |  |
| `InitialReading` | string | yes |  |
| `FinalReading` | string | yes |  |
| `ItemUnitLocalFieldId` | int32 | yes |  |
| `TaxTypeLocalFieldId` | int32 | yes |  |
| `SalesInvoice` | [SalesInvoice](SalesInvoice.md) | no |  |
| `SalesInvoiceAdditions` | [SalesInvoiceAddition](SalesInvoiceAddition.md)[] | yes |  |
| `SalesInvoiceItemReserves` | [SalesInvoiceExtension](SalesInvoiceExtension.md)[] | yes |  |
| `ItemUnitLocalField` | [LocalField](LocalField.md) | no |  |
| `TaxTypeLocalField` | [LocalField](LocalField.md) | no |  |

Used by:

- [LocalField](LocalField.md).SalesInvoiceRowsByUnit
- [LocalField](LocalField.md).SalesInvoiceRowsByVat
- [SalesInvoiceAddition](SalesInvoiceAddition.md).SalesInvoiceRow
- [SalesInvoiceExtension](SalesInvoiceExtension.md).SalesInvoiceRow
- [SalesInvoice](SalesInvoice.md).SalesInvoiceRows

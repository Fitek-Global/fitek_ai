# TransactionRowBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `AtRowConditions` | string | yes |  |
| `Description` | string | yes |  |
| `DescriptionOriginal` | string | yes |  |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `VAT` | double | no |  |
| `VatRate` | double | no |  |
| `VatRateOriginal` | double | no |  |
| `Total` | double | no |  |
| `OrderNo` | int32 | yes |  |
| `SortOrderNo` | int32 | no |  |
| `SumWithoutVat` | double | no |  |
| `Comment` | string | yes |  |
| `AccountId` | int32 | yes |  |
| `VatCodeId` | int32 | yes |  |
| `TransactionRowsDimensions` | [TransactionRowsDimensionBL](TransactionRowsDimensionBL.md)[] | yes |  |
| `TransactionRowChangeSource` | [TransactionRowChangeSourceBL](TransactionRowChangeSourceBL.md) | no |  |
| `VatCode` | [VatCodeBL](VatCodeBL.md) | no |  |
| `AccountingDate` | date-time | yes |  |
| `TransactionRowExtensions` | [TransactionRowExtensionBL](TransactionRowExtensionBL.md)[] | yes |  |
| `ItemUnit` | string | yes |  |
| `ItemAmount` | double | yes |  |
| `ItemPrice` | double | yes |  |
| `SellerProductId` | string | yes |  |
| `BuyerProductId` | string | yes |  |
| `AllocationDescription` | string | yes |  |
| `AllocationComment` | string | yes |  |
| `SerialNumber` | string | yes |  |
| `TaricCode` | string | yes |  |
| `CustomerRef` | string | yes |  |
| `EAN` | string | yes |  |
| `InvoiceRowHistory` | string | yes |  |

Used by:

- [InvoiceBL](InvoiceBL.md).TransactionRows
- [TransactionRowChangeSourceBL](TransactionRowChangeSourceBL.md).TransactionRow
- [TransactionRowsDimensionBL](TransactionRowsDimensionBL.md).TransactionRow

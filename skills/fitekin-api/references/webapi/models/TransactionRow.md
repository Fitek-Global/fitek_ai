# TransactionRow

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceGuid` | uuid | yes |  |
| `InvoiceId` | int32 | no |  |
| `SumWithoutVat` | double | no |  |
| `VAT` | double | no |  |
| `Total` | double | no |  |
| `VatRate` | double | yes |  |
| `Description` | string | yes |  |
| `Comment` | string | yes |  |
| `AccountId` | int32 | yes |  |
| `VatCodeId` | int32 | yes |  |
| `AccountingDate` | date-time | yes |  |
| `OrderNo` | int32 | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `ItemUnit` | string | yes |  |
| `ItemAmount` | double | yes |  |
| `ItemPrice` | double | yes |  |
| `SellerProductId` | string | yes |  |
| `BuyerProductId` | string | yes |  |
| `SerialNumber` | string | yes |  |
| `TaricCode` | string | yes |  |
| `CustomerRef` | string | yes |  |
| `EAN` | string | yes |  |
| `TransactionRowsDimensions` | [TransactionRowsDimension](TransactionRowsDimension.md)[] | yes |  |
| `TransactionRowExtensions` | [TransactionRowExtension](TransactionRowExtension.md)[] | yes |  |
| `TransactionRowChangeSource` | [TransactionRowChangeSource](TransactionRowChangeSource.md) | no |  |
| `Invoice` | [Invoice](Invoice.md) | no |  |
| `Account` | [Account](Account.md) | no |  |
| `VatCode` | [VatCode](VatCode.md) | no |  |
| `InvoiceRowHistory` | string | yes |  |

Used by:

- [Account](Account.md).TransactionRows
- [Invoice](Invoice.md).TransactionRows
- [TransactionRowChangeSource](TransactionRowChangeSource.md).TransactionRow
- [TransactionRowExtension](TransactionRowExtension.md).TransactionRow
- [TransactionRowsDimension](TransactionRowsDimension.md).TransactionRow
- [VatCode](VatCode.md).TransactionRow

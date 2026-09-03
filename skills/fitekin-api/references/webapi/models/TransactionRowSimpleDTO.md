# TransactionRowSimpleDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Description` | string | yes |  |
| `UnitLookupId` | int32 | no |  |
| `VAT` | double | no |  |
| `VatRate` | double | no |  |
| `Total` | double | no |  |
| `InvoiceId` | int32 | no |  |
| `OrderNo` | int32 | yes |  |
| `ItemUnit` | string | yes |  |
| `ItemAmount` | double | yes |  |
| `ItemPrice` | double | yes |  |
| `BuyerProductId` | string | yes |  |
| `SerialNumber` | string | yes |  |
| `SumWithoutVat` | double | no |  |
| `Comment` | string | yes |  |
| `AccountDescription` | string | yes |  |
| `AccountingDate` | date-time | yes |  |
| `SellerProductId` | string | yes |  |
| `TaricCode` | string | yes |  |
| `CustomerRef` | string | yes |  |
| `EAN` | string | yes |  |

Used by:

- POST /api/TransactionRow/UpdateTransactionRow (request) — [TransactionRow](../endpoints/TransactionRow.md)

# VatCode

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `VatRate` | double | no |  |
| `Description` | string | yes |  |
| `IsDefault` | boolean | yes |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `Supplier` | [Supplier](Supplier.md)[] | yes |  |
| `TransactionRow` | [TransactionRow](TransactionRow.md)[] | yes |  |
| `PurchaseOrdersRow` | [PurchaseOrdersRows](PurchaseOrdersRows.md)[] | yes |  |
| `AutoTransactionsRows` | [AutoTransactionsRows](AutoTransactionsRows.md)[] | yes |  |

Used by:

- [AutoTransactionsRows](AutoTransactionsRows.md).VatCode
- [PurchaseOrdersRows](PurchaseOrdersRows.md).VatCode
- [Supplier](Supplier.md).VatCodeModel
- [TransactionRow](TransactionRow.md).VatCode

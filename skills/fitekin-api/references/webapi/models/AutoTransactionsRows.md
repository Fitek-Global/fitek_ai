# AutoTransactionsRows

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `AutoTransactionId` | int32 | no |  |
| `RowSearchString` | string | yes |  |
| `RowSearchConditions` | string | yes |  |
| `Percentage` | double | no |  |
| `FixedSum` | double | yes |  |
| `AllocationDescription` | string | yes |  |
| `AllocationComment` | string | yes |  |
| `AccountId` | int32 | yes |  |
| `VatCodeId` | int32 | yes |  |
| `VatCodeRate` | double | yes |  |
| `Comment` | string | yes |  |
| `OrderNo` | int32 | no |  |
| `CombinationOption` | int32 | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `AutoTransactionsRowsDimensions` | [AutoTransactionsRowsDimensions](AutoTransactionsRowsDimensions.md)[] | yes |  |
| `AutoTransaction` | [AutoTransactions](AutoTransactions.md) | no |  |
| `Account` | [Account](Account.md) | no |  |
| `VatCode` | [VatCode](VatCode.md) | no |  |

Used by:

- [Account](Account.md).AutoTransactionsRows
- [AutoTransactionsRowsDimensions](AutoTransactionsRowsDimensions.md).AutoTransactionRow
- [AutoTransactions](AutoTransactions.md).AutoTransactionsRows
- [VatCode](VatCode.md).AutoTransactionsRows

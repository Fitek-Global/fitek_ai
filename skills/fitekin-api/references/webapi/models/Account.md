# Account

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Description` | string | yes |  |
| `Code` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `AdditionalFields` | [AdditionalField](AdditionalField.md)[] | yes |  |
| `TransactionRows` | [TransactionRow](TransactionRow.md)[] | yes |  |
| `AutoTransactionsRows` | [AutoTransactionsRows](AutoTransactionsRows.md)[] | yes |  |

Used by:

- [AdditionalField](AdditionalField.md).Account
- [AutoTransactionsRows](AutoTransactionsRows.md).Account
- [TransactionRow](TransactionRow.md).Account

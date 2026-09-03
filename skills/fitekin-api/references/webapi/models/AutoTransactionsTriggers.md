# AutoTransactionsTriggers

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `AutoTransactionId` | int32 | no |  |
| `MatchType` | int32 | no |  |
| `ExtensionType` | int32 | yes |  |
| `ExtensionField` | int32 | yes |  |
| `Value` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `AutoTransaction` | [AutoTransactions](AutoTransactions.md) | no |  |

Used by:

- [AutoTransactions](AutoTransactions.md).AutoTransactionsTriggers

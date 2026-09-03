# AutoTransactionsRowsDimensions

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `AutoTransactionRowId` | int32 | no |  |
| `DimensionId` | int32 | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `AutoTransactionRow` | [AutoTransactionsRows](AutoTransactionsRows.md) | no |  |
| `Dimension` | [Dimension](Dimension.md) | no |  |

Used by:

- [AutoTransactionsRows](AutoTransactionsRows.md).AutoTransactionsRowsDimensions
- [Dimension](Dimension.md).AutoTransactionsRowsDimensions

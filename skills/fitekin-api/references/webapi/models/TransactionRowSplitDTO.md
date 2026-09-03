# TransactionRowSplitDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `AccountDistributionItem` | [TransactionRowDTO](TransactionRowDTO.md) | no |  |
| `SplitBy` | [DimensionDTO](DimensionDTO.md) | no |  |
| `SplitRows` | [SplitFieldDTO](SplitFieldDTO.md)[] | yes |  |

Used by:

- POST /api/Invoice/SplitTransactionRow (request) — [Invoice](../endpoints/Invoice.md)

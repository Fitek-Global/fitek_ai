# TransactionRowChangeSourceBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `ProductCode` | int32 | no |  |
| `Account` | int32 | no |  |
| `VatCode` | int32 | no |  |
| `KauntConfidenceAccount` | string | yes |  |
| `KauntConfidenceVat` | string | yes |  |
| `KauntConfidenceProductItem` | string | yes |  |
| `TransactionRow` | [TransactionRowBL](TransactionRowBL.md) | no |  |

Used by:

- [TransactionRowBL](TransactionRowBL.md).TransactionRowChangeSource

# TransactionRowChangeSource

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `ProductCode` | int32 | no |  |
| `Account` | int32 | no |  |
| `VatCode` | int32 | no |  |
| `KauntConfidenceAccount` | string | yes |  |
| `KauntConfidenceVat` | string | yes |  |
| `KauntConfidenceProductItem` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `TransactionRow` | [TransactionRow](TransactionRow.md) | no |  |

Used by:

- [TransactionRow](TransactionRow.md).TransactionRowChangeSource

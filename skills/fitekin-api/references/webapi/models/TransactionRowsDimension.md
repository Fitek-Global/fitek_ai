# TransactionRowsDimension

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `TransactionRowId` | int32 | no |  |
| `CustomCostObjectiveId` | int32 | no |  |
| `DimensionId` | int32 | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `KauntConfidence` | string | yes |  |
| `Dimension` | [Dimension](Dimension.md) | no |  |
| `TransactionRow` | [TransactionRow](TransactionRow.md) | no |  |
| `CustomCostObjective` | [CustomCostObjective](CustomCostObjective.md) | no |  |

Used by:

- [CustomCostObjective](CustomCostObjective.md).TransactionRowsDimensions
- [Dimension](Dimension.md).TransactionRowsDimension
- [TransactionRow](TransactionRow.md).TransactionRowsDimensions

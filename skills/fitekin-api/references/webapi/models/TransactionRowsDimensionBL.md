# TransactionRowsDimensionBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `TransactionRowId` | int32 | no |  |
| `CustomCostObjectiveId` | int32 | no |  |
| `DimensionId` | int32 | yes |  |
| `CustomCostObjective` | [CustomCostObjectiveBL](CustomCostObjectiveBL.md) | no |  |
| `TransactionRow` | [TransactionRowBL](TransactionRowBL.md) | no |  |
| `KauntConfidence` | string | yes |  |

Used by:

- [TransactionRowBL](TransactionRowBL.md).TransactionRowsDimensions

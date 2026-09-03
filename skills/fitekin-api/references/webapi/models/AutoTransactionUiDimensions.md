# AutoTransactionUiDimensions

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `AutoTransactionRowId` | int32 | no |  |
| `CostObjectiveType` | enum [CostObjectiveType](CostObjectiveType.md) | no |  |
| `CostObjectiveId` | int32 | yes |  |
| `CostObjectiveCode` | string | yes |  |
| `CostObjectiveDescription` | string | yes |  |
| `CustomCostObjectiveId` | int32 | no |  |
| `CustomCostObjectiveCode` | string | yes |  |
| `CustomCostObjectiveDescription` | string | yes |  |
| `OrderNo` | int32 | yes |  |

Used by:

- [AutoTransactionUiAllocation](AutoTransactionUiAllocation.md).Dimensions

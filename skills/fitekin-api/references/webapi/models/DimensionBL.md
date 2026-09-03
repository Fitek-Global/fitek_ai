# DimensionBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `CustomCostObjectiveId` | int32 | no |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |

Used by:

- [CustomCostObjectiveBL](CustomCostObjectiveBL.md).Dimensions

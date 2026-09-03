# AdditionalField

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `CustomCostObjectiveId` | int32 | no |  |
| `AccountId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `CustomCostObjective` | [CustomCostObjective](CustomCostObjective.md) | no |  |
| `Account` | [Account](Account.md) | no |  |

Used by:

- [Account](Account.md).AdditionalFields
- [CustomCostObjective](CustomCostObjective.md).AdditionalFields

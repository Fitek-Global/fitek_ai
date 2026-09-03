# PurchaseOrdersRowsDimension

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `PurchaseOrdersRowId` | int32 | no |  |
| `CustomCostObjectiveId` | int32 | no |  |
| `DimensionId` | int32 | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `Dimension` | [Dimension](Dimension.md) | no |  |
| `PurchaseOrdersRow` | [PurchaseOrdersRows](PurchaseOrdersRows.md) | no |  |
| `CustomCostObjective` | [CustomCostObjective](CustomCostObjective.md) | no |  |

Used by:

- [CustomCostObjective](CustomCostObjective.md).PurchaseOrdersRowsDimensions
- [Dimension](Dimension.md).PurchaseOrdersRowsDimensions
- [PurchaseOrdersRows](PurchaseOrdersRows.md).PurchaseOrdersRowsDimensions

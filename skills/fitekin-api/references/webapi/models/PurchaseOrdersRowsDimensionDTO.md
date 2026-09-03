# PurchaseOrdersRowsDimensionDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `PurchaseOrdersRowId` | int32 | no |  |
| `CustomCostObjectiveId` | int32 | no |  |
| `DimensionId` | int32 | yes |  |
| `IsMandatory` | boolean | no |  |
| `IsVisible` | boolean | no |  |
| `ModifiedBy` | int32 | yes |  |
| `Dimension` | [DimensionDTO](DimensionDTO.md) | no |  |
| `CustomCostObjective` | [CustomCostObjectiveDTO](CustomCostObjectiveDTO.md) | no |  |

Used by:

- POST /api/PurchaseOrders/UpdatePurchaseOrdersRowCustomField (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/UpdatePurchaseOrdersRowCustomField (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- [PurchaseOrdersRowDTO](PurchaseOrdersRowDTO.md).PurchaseOrdersRowsDimensions

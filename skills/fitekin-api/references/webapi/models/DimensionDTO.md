# DimensionDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `CustomCostObjectiveId` | int32 | no |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `InvoiceCountInUse` | int32 | yes |  |
| `AutoTransactionCountInUse` | int32 | yes |  |
| `AssignedCurrentToUser` | boolean | no |  |

Used by:

- POST /api/CustomCostObjective/AddDimension (request) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/AddDimension (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/UpdateDimension (request) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/UpdateDimension (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- [CustomCostObjectiveFullDto](CustomCostObjectiveFullDto.md).Dimensions
- [DimensionDTOPagedListContainer](DimensionDTOPagedListContainer.md).Items
- [PurchaseOrdersRowsDimensionDTO](PurchaseOrdersRowsDimensionDTO.md).Dimension
- [TransactionRowSplitDTO](TransactionRowSplitDTO.md).SplitBy
- [TransactionRowsDimensionDTO](TransactionRowsDimensionDTO.md).Dimension

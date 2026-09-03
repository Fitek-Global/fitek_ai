# TransactionRowsDimensionDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `TransactionRowId` | int32 | no |  |
| `CustomCostObjectiveId` | int32 | yes |  |
| `DimensionId` | int32 | yes |  |
| `CustomCostObjective` | [CustomCostObjectiveDTO](CustomCostObjectiveDTO.md) | no |  |
| `Dimension` | [DimensionDTO](DimensionDTO.md) | no |  |
| `IsMandatory` | boolean | no |  |
| `IsVisible` | boolean | no |  |
| `ModifiedBy` | int32 | yes |  |
| `KauntConfidence` | [KauntProposalConfidence](KauntProposalConfidence.md) | no |  |

Used by:

- POST /api/Invoice/UpdateCustomField (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/UpdateCustomField (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/UpdateCustomFieldWithRelations (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/UpdateCustomFieldWithRelations (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/UpdateCustomFields (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/UpdateCustomFields (response) — [Invoice](../endpoints/Invoice.md)
- [TransactionRowDTO](TransactionRowDTO.md).TransactionRowsDimensions

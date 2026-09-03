# Dimension

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `CustomCostObjectiveId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `CustomCostObjective` | [CustomCostObjective](CustomCostObjective.md) | no |  |
| `AutoTransactionsRowsDimensions` | [AutoTransactionsRowsDimensions](AutoTransactionsRowsDimensions.md)[] | yes |  |
| `TransactionRowsDimension` | [TransactionRowsDimension](TransactionRowsDimension.md)[] | yes |  |
| `PurchaseOrdersRowsDimensions` | [PurchaseOrdersRowsDimension](PurchaseOrdersRowsDimension.md)[] | yes |  |

Used by:

- [AutoTransactionsRowsDimensions](AutoTransactionsRowsDimensions.md).Dimension
- [CustomCostObjective](CustomCostObjective.md).Dimensions
- [PurchaseOrdersRowsDimension](PurchaseOrdersRowsDimension.md).Dimension
- [TransactionRowsDimension](TransactionRowsDimension.md).Dimension

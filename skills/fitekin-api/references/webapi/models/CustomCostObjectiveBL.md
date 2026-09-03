# CustomCostObjectiveBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `IsVisible` | boolean | no |  |
| `IsMandatory` | boolean | no |  |
| `IsMandatoryInPurchaseOrders` | boolean | no |  |
| `IsVisibleInPurchaseOrders` | boolean | no |  |
| `ActiveInPurchaseOrders` | boolean | no |  |
| `ActiveInInvoices` | boolean | no |  |
| `OrderNo` | int32 | no |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `SetActiveForUsers` | boolean | no |  |
| `Dimensions` | [DimensionBL](DimensionBL.md)[] | yes |  |

Used by:

- [TransactionRowsDimensionBL](TransactionRowsDimensionBL.md).CustomCostObjective

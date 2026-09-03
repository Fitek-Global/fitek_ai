# CustomCostObjective

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `IsMandatory` | boolean | no |  |
| `IsVisible` | boolean | no |  |
| `IsMandatoryInPurchaseOrders` | boolean | no |  |
| `IsVisibleInPurchaseOrders` | boolean | no |  |
| `ActiveInPurchaseOrders` | boolean | no |  |
| `ActiveInInvoices` | boolean | no |  |
| `OrderNo` | int32 | no |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `SetActiveForUsers` | boolean | no |  |
| `TransactionRowsDimensions` | [TransactionRowsDimension](TransactionRowsDimension.md)[] | yes |  |
| `PurchaseOrdersRowsDimensions` | [PurchaseOrdersRowsDimension](PurchaseOrdersRowsDimension.md)[] | yes |  |
| `Dimensions` | [Dimension](Dimension.md)[] | yes |  |
| `AdditionalFields` | [AdditionalField](AdditionalField.md)[] | yes |  |

Used by:

- [AdditionalField](AdditionalField.md).CustomCostObjective
- [Dimension](Dimension.md).CustomCostObjective
- [PurchaseOrdersRowsDimension](PurchaseOrdersRowsDimension.md).CustomCostObjective
- [TransactionRowsDimension](TransactionRowsDimension.md).CustomCostObjective

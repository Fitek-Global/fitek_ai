# CustomCostObjectiveDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `IsMandatory` | boolean | no |  |
| `IsVisible` | boolean | no |  |
| `IsMandatoryInPurchaseOrders` | boolean | no |  |
| `IsVisibleInPurchaseOrders` | boolean | no |  |
| `ActiveInPurchaseOrders` | boolean | no |  |
| `ActiveInInvoices` | boolean | no |  |
| `OrderNo` | int32 | no |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `InvoiceCountInUse` | int32 | yes |  |
| `AutoTransactionCountInUse` | int32 | yes |  |
| `SetActiveForUsers` | boolean | no |  |

Used by:

- POST /api/CustomCostObjective/UpdateCustomCostObjective (request) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/UpdateCustomCostObjective (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- [CustomCostObjectiveDTOListResponse](CustomCostObjectiveDTOListResponse.md).Result
- [CustomCostObjectiveDTOPagedListContainer](CustomCostObjectiveDTOPagedListContainer.md).Items
- [PurchaseOrdersRowsDimensionDTO](PurchaseOrdersRowsDimensionDTO.md).CustomCostObjective
- [TransactionRowsDimensionDTO](TransactionRowsDimensionDTO.md).CustomCostObjective

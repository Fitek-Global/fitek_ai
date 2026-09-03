# CustomCostObjectiveFullDto

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
| `Dimensions` | [DimensionDTO](DimensionDTO.md)[] | yes |  |

Used by:

- GET /api/ArchiveInvoice/GetCustomCostObjectives (response) — [ArchiveInvoice](../endpoints/ArchiveInvoice.md)
- GET /api/CustomCostObjective/GetAllCompanyCustomCostObjectives (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- GET /api/CustomCostObjective/GetByCode (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- GET /api/CustomCostObjective/GetByDescriptionPart (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- GET /api/CustomCostObjective/GetCustomCostObjective/{id} (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- GET /api/CustomCostObjective/MoveDown/{id} (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- GET /api/CustomCostObjective/MoveUp/{id} (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/AddCustomCostObjective (request) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/AddCustomCostObjective (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/EditCustomCostObjective (request) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/EditCustomCostObjective (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)

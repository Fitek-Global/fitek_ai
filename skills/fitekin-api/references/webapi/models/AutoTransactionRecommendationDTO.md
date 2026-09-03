# AutoTransactionRecommendationDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `SupplierId` | int32 | no |  |
| `SupplierName` | string | yes |  |
| `ManualInvoices` | int32 | no |  |
| `CoveragePct` | double | no |  |
| `PatternStrength` | double | no |  |
| `TriggerCurrency` | string | yes |  |
| `Steps` | [AutoTransactionRecommendationStepDTO](AutoTransactionRecommendationStepDTO.md)[] | yes |  |

Used by:

- GET /api/AutoTransactions/GetRecommendations (response) — [AutoTransactions](../endpoints/AutoTransactions.md)
- POST /api/AutoTransactions/CreateFromRecommendation (request) — [AutoTransactions](../endpoints/AutoTransactions.md)

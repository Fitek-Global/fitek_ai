# DataExchangeModel.Requests.PurchaseOrderCostObjectivesExportRequest

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `poNumber` | null,string | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /PurchaseOrderCostObjectives (request) — [Export](../endpoints/Export.md)

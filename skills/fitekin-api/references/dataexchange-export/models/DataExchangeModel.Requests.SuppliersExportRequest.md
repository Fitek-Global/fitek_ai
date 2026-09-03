# DataExchangeModel.Requests.SuppliersExportRequest

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `requestId` | uuid | no | required |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Suppliers (request) — [Export](../endpoints/Export.md)

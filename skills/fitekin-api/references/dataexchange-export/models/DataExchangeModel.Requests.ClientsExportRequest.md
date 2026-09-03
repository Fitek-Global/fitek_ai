# DataExchangeModel.Requests.ClientsExportRequest

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `queryParams` | [DataExchangeModel.Requests.ClientsExportQueryParams](DataExchangeModel.Requests.ClientsExportQueryParams.md) | no |  |
| `requestId` | uuid | no | required |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Clients (request) — [Export](../endpoints/Export.md)

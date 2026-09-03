# DataExchangeModel.Requests.TransactionRowsRequest

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `invoiceGuid` | uuid | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /TransactionRows (request) — [Export](../endpoints/Export.md)

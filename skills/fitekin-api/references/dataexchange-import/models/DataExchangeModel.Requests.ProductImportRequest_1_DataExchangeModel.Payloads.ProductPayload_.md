# DataExchangeModel.Requests.ProductImportRequest`1[DataExchangeModel.Payloads.ProductPayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | [DataExchangeModel.Payloads.ProductPayload](DataExchangeModel.Payloads.ProductPayload.md) | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /ProductItem (request) — [Import](../endpoints/Import.md)

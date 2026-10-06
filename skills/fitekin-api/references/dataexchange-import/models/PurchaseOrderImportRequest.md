# DataExchangeModel.Requests.PurchaseOrderImportRequest

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | [DataExchangeModel.Payloads.PurchaseOrderPayload](PurchaseOrderPayload.md) | no | required |
| `originalXml` | null,string | no |  |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /PurchaseOrder (request) — [Import](../endpoints/Import.md)
- POST /PurchaseOrderUpdate (request) — [Import](../endpoints/Import.md)

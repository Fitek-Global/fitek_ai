# DataExchangeModel.Requests.InvoiceImportRequest

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | [DataExchangeModel.Payloads.InvoicePayload](DataExchangeModel.Payloads.InvoicePayload.md) | no | required |
| `originalXml` | null,string | no |  |
| `originalUbl` | null,string | no |  |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Invoice (request) — [Import](../endpoints/Import.md)

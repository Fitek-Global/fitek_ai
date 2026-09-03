# DataExchangeModel.General.Input.ImportRequest`1[DataExchangeModel.Payloads.InvoiceUpdatePayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | [DataExchangeModel.Payloads.InvoiceUpdatePayload](DataExchangeModel.Payloads.InvoiceUpdatePayload.md) | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /InvoiceUpdate (request) — [Import](../endpoints/Import.md)

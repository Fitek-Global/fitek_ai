# DataExchangeModel.General.Input.ImportRequest`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | [DataExchangeModel.Payloads.InvoiceConfirmationPayload](InvoiceConfirmationPayload.md) | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /ConfirmationFlowAction (request) — [Import](../endpoints/Import.md)

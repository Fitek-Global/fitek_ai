# DataExchangeModel.General.Input.ImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceUpdatePayload]]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | null,array | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /InvoicesUpdate (request) — [Import](../endpoints/Import.md)

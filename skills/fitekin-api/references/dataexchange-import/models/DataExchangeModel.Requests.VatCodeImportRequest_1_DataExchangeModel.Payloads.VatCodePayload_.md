# DataExchangeModel.Requests.VatCodeImportRequest`1[DataExchangeModel.Payloads.VatCodePayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | [DataExchangeModel.Payloads.VatCodePayload](DataExchangeModel.Payloads.VatCodePayload.md) | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /VatCode (request) — [Import](../endpoints/Import.md)

# DataExchangeModel.Requests.InvoiceTypeImportRequest`1[DataExchangeModel.Payloads.InvoiceTypePayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `queryParams` | [DataExchangeModel.General.CommonQueryParams](CommonQueryParams.md) | no |  |
| `payload` | [DataExchangeModel.Payloads.InvoiceTypePayload](InvoiceTypePayload.md) | no | required |
| `requestId` | uuid | no | required |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /InvoiceType (request) — [Import](../endpoints/Import.md)

# DataExchangeModel.Requests.InvoiceTypeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceTypePayload]]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `queryParams` | [DataExchangeModel.General.CommonQueryParams](DataExchangeModel.General.CommonQueryParams.md) | no |  |
| `payload` | null,array | no | required |
| `requestId` | uuid | no | required |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /InvoiceTypes (request) — [Import](../endpoints/Import.md)

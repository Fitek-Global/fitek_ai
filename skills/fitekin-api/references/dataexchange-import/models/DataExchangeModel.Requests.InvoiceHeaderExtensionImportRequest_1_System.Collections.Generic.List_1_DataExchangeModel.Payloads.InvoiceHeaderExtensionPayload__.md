# DataExchangeModel.Requests.InvoiceHeaderExtensionImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload]]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `parentInvoiceHeaderExtensionCode` | null,string | no | required |
| `queryParams` | [DataExchangeModel.General.CommonQueryParams](DataExchangeModel.General.CommonQueryParams.md) | no |  |
| `payload` | null,array | no | required |
| `requestId` | uuid | no | required |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /InvoiceHeaderExtensionListValues (request) — [Import](../endpoints/Import.md)

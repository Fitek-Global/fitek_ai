# DataExchangeModel.Requests.SalesInvoiceImportRequest

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | [DataExchangeModel.Payloads.SalesInvoicePayload](DataExchangeModel.Payloads.SalesInvoicePayload.md) | no | required |
| `deliveryId` | null,string | no |  |
| `originalXml` | null,string | no |  |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /SalesInvoice/ImportSalesInvoice.v3 (request) — [SalesInvoice](../endpoints/SalesInvoice.md)

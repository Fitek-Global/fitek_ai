# DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFileExportPayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | [DataExchangeModel.Payloads.SalesInvoiceFileExportPayload](DataExchangeModel.Payloads.SalesInvoiceFileExportPayload.md) | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /SalesInvoice/ExportSalesInvoiceFile.v3 (request) — [SalesInvoice](../endpoints/SalesInvoice.md)

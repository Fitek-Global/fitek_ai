# DataExchangeModel.Requests.InvoicesExportRequest

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `queryParams` | [DataExchangeModel.Requests.InvoiceExportQueryParams](DataExchangeModel.Requests.InvoiceExportQueryParams.md) | no |  |
| `requestId` | uuid | no | required |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Invoices (request) — [Export](../endpoints/Export.md)
- POST /InvoicesExtended (request) — [Export](../endpoints/Export.md)

# DataExchangeModel.Payloads.InvoicePayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `isExportable` | null,string | no | max 5 |
| `sourceType` | null,string | no |  |
| `channel` | null,string | no |  |
| `invoice` | [DataExchangeModel.Payloads.ImportedInvoice](DataExchangeModel.Payloads.ImportedInvoice.md) | no | required |

Used by:

- [DataExchangeModel.Requests.InvoiceImportRequest](DataExchangeModel.Requests.InvoiceImportRequest.md).payload

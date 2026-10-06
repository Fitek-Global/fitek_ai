# DataExchangeModel.Payloads.InvoicePayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `isExportable` | null,string | no | max 5 |
| `sourceType` | null,string | no |  |
| `channel` | null,string | no |  |
| `invoice` | [DataExchangeModel.Payloads.ImportedInvoice](ImportedInvoice.md) | no | required |

Used by:

- [DataExchangeModel.Requests.InvoiceImportRequest](InvoiceImportRequest.md).payload

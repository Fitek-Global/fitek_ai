# DataExchangeModel.Payloads.SalesInvoiceFilePayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `internalInvoiceGuid` | uuid | no | required |
| `fileName` | null,string | no | required |
| `fileBase64` | null,string | no |  |
| `url` | null,string | no |  |
| `fileType` | object | no |  |

Used by:

- [DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFilePayload]](FileImportRequest_SalesInvoiceFilePayload.md).payload

# DataExchangeModel.Requests.InvoiceExportQueryParams

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `internalInvoiceGuids` | null,array | no |  |
| `internalInvoiceIds` | null,array | no |  |
| `originalPdfFrontPageLanguage` | null,string | no |  |
| `invoiceStatus` | null,array | no |  |
| `invoiceDateGreaterThanEqual` | date-time | no |  |
| `invoiceDateLessThanEqual` | date-time | no |  |
| `invoiceDateGreaterThan` | date-time | no |  |
| `invoiceDateLessThan` | date-time | no |  |
| `historyEvents` | null,array | no |  |
| `returnData` | null,array | no |  |
| `confirmationFlow` | [DataExchangeModel.Requests.ConfirmationFlow](DataExchangeModel.Requests.ConfirmationFlow.md) | no |  |
| `newSupplier` | boolean | no |  |
| `invoiceExtensions` | null,array | no |  |
| `customFields` | null,array | no |  |
| `invoiceDateGreaterThanEqualUTC` | date-time | no |  |
| `invoiceDateLessThanEqualUTC` | date-time | no |  |
| `invoiceDateGreaterThanUTC` | date-time | no |  |
| `invoiceDateLessThanUTC` | date-time | no |  |
| `debug` | boolean | no |  |

Used by:

- [DataExchangeModel.Requests.InvoicesExportRequest](DataExchangeModel.Requests.InvoicesExportRequest.md).queryParams

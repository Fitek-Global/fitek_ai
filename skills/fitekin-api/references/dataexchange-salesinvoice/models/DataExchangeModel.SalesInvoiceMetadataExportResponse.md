# DataExchangeModel.SalesInvoiceMetadataExportResponse

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `invoiceGlobalId` | uuid | no |  |
| `supplierParty` | [DataExchangeModel.SalesInvoicePartyMetadataItem](DataExchangeModel.SalesInvoicePartyMetadataItem.md) | no |  |
| `customerParty` | [DataExchangeModel.SalesInvoicePartyMetadataItem](DataExchangeModel.SalesInvoicePartyMetadataItem.md) | no |  |
| `invoiceNumber` | null,string | no |  |
| `invoiceDate` | date-time | no |  |
| `netAmount` | double | no |  |
| `vatAmount` | double | no |  |
| `totAmount` | double | no |  |
| `files` | null,array | no |  |

Used by:

- POST /SalesInvoice/ExportSalesInvoiceMetadata.v3 (response) — [SalesInvoice](../endpoints/SalesInvoice.md)

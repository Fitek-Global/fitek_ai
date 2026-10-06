# FitekIN DataExchange API — Sales invoices: endpoint index

Base path: `{BASE_URL}/DataExchangeWebApiCore`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

Generated from `dataexchange-salesinvoice.json` (OpenAPI 3.1.1). 6 endpoints, 53 models, 0 enums.

Find the endpoint here, then open `endpoints/<Tag>.md` for parameters and `models/<Model>.md` for properties.

## SalesInvoice — [endpoints/SalesInvoice.md](endpoints/SalesInvoice.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/SalesInvoice/AddSalesInvoiceFile.v3` | [DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFilePayload]](models/FileImportRequest_SalesInvoiceFilePayload.md) | [DataExchangeModel.AddSalesInvoiceFileResponse](models/AddSalesInvoiceFileResponse.md) |
| POST | `/SalesInvoice/ExportSalesInvoice.v3` | [DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceXmlExportPayload]](models/ExportRequest_SalesInvoiceXmlExportPayload.md) | — |
| POST | `/SalesInvoice/ExportSalesInvoiceAttachmentsMetadata.v3` | [DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceAttachmentsMetadataPayload]](models/ExportRequest_SalesInvoiceAttachmentsMetadataPayload.md) | [DataExchangeModel.SalesInvoiceAttachmentMetadataItem[]](models/SalesInvoiceAttachmentMetadataItem.md) |
| POST | `/SalesInvoice/ExportSalesInvoiceFile.v3` | [DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFileExportPayload]](models/ExportRequest_SalesInvoiceFileExportPayload.md) | — |
| POST | `/SalesInvoice/ExportSalesInvoiceMetadata.v3` | [DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceMetadataExportPayload]](models/ExportRequest_SalesInvoiceMetadataExportPayload.md) | [DataExchangeModel.SalesInvoiceMetadataExportResponse](models/SalesInvoiceMetadataExportResponse.md) |
| POST | `/SalesInvoice/ImportSalesInvoice.v3` | [DataExchangeModel.Requests.SalesInvoiceImportRequest](models/SalesInvoiceImportRequest.md) | [DataExchangeModel.SalesInvoiceImportResponse](models/SalesInvoiceImportResponse.md) |

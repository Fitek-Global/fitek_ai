# FitekIN DataExchange API — Sales invoices: endpoint index

Base path: `{BASE_URL}/DataExchangeWebApiCore`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

Generated from `dataexchange-salesinvoice.json` (OpenAPI 3.1.1). 6 endpoints, 53 models, 0 enums.

Find the endpoint here, then open `endpoints/<Tag>.md` for parameters and `models/<Model>.md` for properties.

## SalesInvoice — [endpoints/SalesInvoice.md](endpoints/SalesInvoice.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/SalesInvoice/AddSalesInvoiceFile.v3` | [DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFilePayload]](models/DataExchangeModel.Requests.FileImportRequest_1_DataExchangeModel.Payloads.SalesInvoiceFilePayload_.md) | [DataExchangeModel.AddSalesInvoiceFileResponse](models/DataExchangeModel.AddSalesInvoiceFileResponse.md) |
| POST | `/SalesInvoice/ExportSalesInvoice.v3` | [DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceXmlExportPayload]](models/DataExchangeModel.Requests.ExportRequest_1_DataExchangeModel.Payloads.SalesInvoiceXmlExportPayload_.md) | — |
| POST | `/SalesInvoice/ExportSalesInvoiceAttachmentsMetadata.v3` | [DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceAttachmentsMetadataPayload]](models/DataExchangeModel.Requests.ExportRequest_1_DataExchangeModel.Payloads.SalesInvoiceAttachmentsMetadataPayload_.md) | [DataExchangeModel.SalesInvoiceAttachmentMetadataItem[]](models/DataExchangeModel.SalesInvoiceAttachmentMetadataItem.md) |
| POST | `/SalesInvoice/ExportSalesInvoiceFile.v3` | [DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFileExportPayload]](models/DataExchangeModel.Requests.ExportRequest_1_DataExchangeModel.Payloads.SalesInvoiceFileExportPayload_.md) | — |
| POST | `/SalesInvoice/ExportSalesInvoiceMetadata.v3` | [DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceMetadataExportPayload]](models/DataExchangeModel.Requests.ExportRequest_1_DataExchangeModel.Payloads.SalesInvoiceMetadataExportPayload_.md) | [DataExchangeModel.SalesInvoiceMetadataExportResponse](models/DataExchangeModel.SalesInvoiceMetadataExportResponse.md) |
| POST | `/SalesInvoice/ImportSalesInvoice.v3` | [DataExchangeModel.Requests.SalesInvoiceImportRequest](models/DataExchangeModel.Requests.SalesInvoiceImportRequest.md) | [DataExchangeModel.SalesInvoiceImportResponse](models/DataExchangeModel.SalesInvoiceImportResponse.md) |

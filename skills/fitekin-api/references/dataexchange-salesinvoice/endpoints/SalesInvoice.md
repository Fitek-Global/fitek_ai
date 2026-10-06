# FitekIN DataExchange API — Sales invoices: SalesInvoice

Base path: `{BASE_URL}/DataExchangeWebApiCore`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

6 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /SalesInvoice/AddSalesInvoiceFile.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFilePayload]](../models/FileImportRequest_SalesInvoiceFilePayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.AddSalesInvoiceFileResponse](../models/AddSalesInvoiceFileResponse.md)

## POST /SalesInvoice/ExportSalesInvoice.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceXmlExportPayload]](../models/ExportRequest_SalesInvoiceXmlExportPayload.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /SalesInvoice/ExportSalesInvoiceAttachmentsMetadata.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceAttachmentsMetadataPayload]](../models/ExportRequest_SalesInvoiceAttachmentsMetadataPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.SalesInvoiceAttachmentMetadataItem[]](../models/SalesInvoiceAttachmentMetadataItem.md)

## POST /SalesInvoice/ExportSalesInvoiceFile.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFileExportPayload]](../models/ExportRequest_SalesInvoiceFileExportPayload.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /SalesInvoice/ExportSalesInvoiceMetadata.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceMetadataExportPayload]](../models/ExportRequest_SalesInvoiceMetadataExportPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.SalesInvoiceMetadataExportResponse](../models/SalesInvoiceMetadataExportResponse.md)

## POST /SalesInvoice/ImportSalesInvoice.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.SalesInvoiceImportRequest](../models/SalesInvoiceImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.SalesInvoiceImportResponse](../models/SalesInvoiceImportResponse.md)

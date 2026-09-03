# FitekIN DataExchange API — Sales invoices: SalesInvoice

Base path: `{BASE_URL}/DataExchangeWebApiCore`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

6 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /SalesInvoice/AddSalesInvoiceFile.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFilePayload]](../models/DataExchangeModel.Requests.FileImportRequest_1_DataExchangeModel.Payloads.SalesInvoiceFilePayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.AddSalesInvoiceFileResponse](../models/DataExchangeModel.AddSalesInvoiceFileResponse.md)

## POST /SalesInvoice/ExportSalesInvoice.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceXmlExportPayload]](../models/DataExchangeModel.Requests.ExportRequest_1_DataExchangeModel.Payloads.SalesInvoiceXmlExportPayload_.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /SalesInvoice/ExportSalesInvoiceAttachmentsMetadata.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceAttachmentsMetadataPayload]](../models/DataExchangeModel.Requests.ExportRequest_1_DataExchangeModel.Payloads.SalesInvoiceAttachmentsMetadataPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.SalesInvoiceAttachmentMetadataItem[]](../models/DataExchangeModel.SalesInvoiceAttachmentMetadataItem.md)

## POST /SalesInvoice/ExportSalesInvoiceFile.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceFileExportPayload]](../models/DataExchangeModel.Requests.ExportRequest_1_DataExchangeModel.Payloads.SalesInvoiceFileExportPayload_.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /SalesInvoice/ExportSalesInvoiceMetadata.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ExportRequest`1[DataExchangeModel.Payloads.SalesInvoiceMetadataExportPayload]](../models/DataExchangeModel.Requests.ExportRequest_1_DataExchangeModel.Payloads.SalesInvoiceMetadataExportPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.SalesInvoiceMetadataExportResponse](../models/DataExchangeModel.SalesInvoiceMetadataExportResponse.md)

## POST /SalesInvoice/ImportSalesInvoice.v3

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.SalesInvoiceImportRequest](../models/DataExchangeModel.Requests.SalesInvoiceImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.SalesInvoiceImportResponse](../models/DataExchangeModel.SalesInvoiceImportResponse.md)

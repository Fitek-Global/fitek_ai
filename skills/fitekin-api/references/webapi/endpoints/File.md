# FitekIN Web API: File

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

9 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## GET /api/File/DownloadAllInvoiceAttachments

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/File/DownloadFile/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `fromArchive` | query | no | string |  |
| `withFrontPage` | query | no | string |  |
| `language` | query | no | string |  |
| `offsetInHours` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/File/DownloadPurchaseOrderFileByToken

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/File/DownloadPurchaseOrderPdf

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `purchaseOrderId` | query | no | int32 |  |
| `language` | query | no | string |  |
| `whitelabel` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/File/DownloadSalesInvoiceFile

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `fileId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/File/DownloadSalesInvoicePdf

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `salesInvoiceId` | query | no | int32 |  |
| `language` | query | no | string |  |
| `whitelabel` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/File/DownloadSalesInvoiceXmlPreview

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/File/GetAllAttachmentFilesSize

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `attachmentType` | query | no | enum [AttachmentType](../models/AttachmentType.md) |  |
| `objectId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[AttachmentFilesCountResponseDTO](../models/AttachmentFilesCountResponseDTO.md)

## GET /api/File/GetInvoiceRelatedDocuments

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[FileDTO[]](../models/FileDTO.md)

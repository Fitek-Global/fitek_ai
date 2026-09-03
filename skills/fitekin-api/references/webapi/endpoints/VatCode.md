# FitekIN Web API: VatCode

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

13 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/VatCode/AddVatCode

**Parameters**

_No parameters._

**Request body**

[VatCodeDTO](../models/VatCodeDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## DELETE /api/VatCode/DeleteVatCode/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/VatCode/EditVatCode

**Parameters**

_No parameters._

**Request body**

[VatCodeDTO](../models/VatCodeDTO.md) as `application/json`

**Response (200)**

[VatCodeDTO](../models/VatCodeDTO.md)

## POST /api/VatCode/ExportVatCodesToCSV (deprecated)

**Parameters**

_No parameters._

**Request body**

[RestrictionItem[]](../models/RestrictionItem.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/VatCode/ExportVatCodesToXls

**Parameters**

_No parameters._

**Request body**

[RestrictionItem[]](../models/RestrictionItem.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/VatCode/GetInvoiceCountInUse

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `vatCodeId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/VatCode/GetVatCodeItems

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[VatCodeDTOPagedListContainer](../models/VatCodeDTOPagedListContainer.md)

## GET /api/VatCode/GetVatCodes

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[VatCodeDTO[]](../models/VatCodeDTO.md)

## GET /api/VatCode/GetVatRatesForCurrentCompany

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

`array`

## POST /api/VatCode/ToggleVatCodeDefault

**Parameters**

_No parameters._

**Request body**

[VatCodeDTO](../models/VatCodeDTO.md) as `application/json`

**Response (200)**

[VatCodeDTO[]](../models/VatCodeDTO.md)

## POST /api/VatCode/UploadCSVFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

## GET /api/VatCode/UploadCSVFile2

**Parameters**

_No parameters._

**Request body**

[CsvUploadRequest](../models/CsvUploadRequest.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

## POST /api/VatCode/UploadVatCodeFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

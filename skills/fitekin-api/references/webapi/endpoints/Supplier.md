# FitekIN Web API: Supplier

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

14 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Supplier/AddSupplier

**Parameters**

_No parameters._

**Request body**

[SupplierDTO](../models/SupplierDTO.md) as `application/json`

**Response (200)**

[SupplierDTO](../models/SupplierDTO.md)

## POST /api/Supplier/AddSuppliers

**Parameters**

_No parameters._

**Request body**

[SupplierDTO[]](../models/SupplierDTO.md) as `application/json`

**Response (200)**

[SupplierDTO[]](../models/SupplierDTO.md)

## GET /api/Supplier/CheckErpCode

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `code` | query | no | string |  |
| `supplierId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Supplier/DeleteSupplier

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Supplier/ExportSuppliersToCSV (deprecated)

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Supplier/ExportSuppliersToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Supplier/GetByName

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `name` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[SupplierDTO[]](../models/SupplierDTO.md)

## GET /api/Supplier/GetSupplier

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `supplierId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[SupplierDTO](../models/SupplierDTO.md)

## GET /api/Supplier/GetSupplierById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `supplierId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[SupplierDTO](../models/SupplierDTO.md)

## POST /api/Supplier/GetSuppliers

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[SupplierDTOPagedListContainer](../models/SupplierDTOPagedListContainer.md)

## GET /api/Supplier/GetSuppliersByNameOrRegistrationCode

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `part` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[SupplierMinDTO[]](../models/SupplierMinDTO.md)

## POST /api/Supplier/UpdateSupplier

**Parameters**

_No parameters._

**Request body**

[SupplierDTO](../models/SupplierDTO.md) as `application/json`

**Response (200)**

[SupplierDTO](../models/SupplierDTO.md)

## POST /api/Supplier/UploadCSVFile (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `deleteUnused` | query | no | boolean |  |

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[SupplierDTO[]](../models/SupplierDTO.md)

## POST /api/Supplier/UploadSupplierFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

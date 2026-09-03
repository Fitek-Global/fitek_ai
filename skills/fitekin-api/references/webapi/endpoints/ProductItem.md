# FitekIN Web API: ProductItem

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

7 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/ProductItem/DeleteItem

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `itemId` | query | no | int32 |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[ProductItemDTOPagedListContainer](../models/ProductItemDTOPagedListContainer.md)

## POST /api/ProductItem/ExportProductItemsToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/ProductItem/GetList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[ProductItemDTOPagedListContainer](../models/ProductItemDTOPagedListContainer.md)

## GET /api/ProductItem/GetSellerCodesByProductItemCode

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `code` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[ProductItemSellerCodeDTO[]](../models/ProductItemSellerCodeDTO.md)

## POST /api/ProductItem/SaveItem

**Parameters**

_No parameters._

**Request body**

[ProductItemDTO](../models/ProductItemDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/ProductItem/UploadCSVFile (deprecated)

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[ProductItemDTOPagedListContainer](../models/ProductItemDTOPagedListContainer.md)

## POST /api/ProductItem/UploadProductItemFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

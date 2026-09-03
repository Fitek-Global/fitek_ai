# FitekIN Web API: RelatedDimensions

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

5 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/RelatedDimensions/ExportRelatedDimensionsToCsv (deprecated)

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/RelatedDimensions/ExportRelatedDimensionsToXls

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/RelatedDimensions/GetList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[RelatedDimensionsDTOPagedListContainer](../models/RelatedDimensionsDTOPagedListContainer.md)

## POST /api/RelatedDimensions/GetListForCustomField

**Parameters**

_No parameters._

**Request body**

[RelatedDimensionsDTO](../models/RelatedDimensionsDTO.md) as `application/json`

**Response (200)**

[RelatedDimensionsDTO[]](../models/RelatedDimensionsDTO.md)

## POST /api/RelatedDimensions/UploadRelatedDimensionsFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

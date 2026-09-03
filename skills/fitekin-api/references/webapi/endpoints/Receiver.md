# FitekIN Web API: Receiver

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

5 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Receiver/Delete

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `receiverId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[Response](../models/Response.md)

## GET /api/Receiver/GetByField

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `country` | query | no | string |  |
| `value` | query | no | string |  |
| `fieldName` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[ReceiverDTO](../models/ReceiverDTO.md)

## GET /api/Receiver/GetById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `receiverId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[ReceiverDTO](../models/ReceiverDTO.md)

## POST /api/Receiver/GetList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[ReceiverDTOPagedListContainer](../models/ReceiverDTOPagedListContainer.md)

## POST /api/Receiver/Save

**Parameters**

_No parameters._

**Request body**

[ReceiverDTO](../models/ReceiverDTO.md) as `application/json`

**Response (200)**

[ReceiverDTO](../models/ReceiverDTO.md)

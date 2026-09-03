# FitekIN Web API: PaymentMethod

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

6 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/PaymentMethod/Add

**Parameters**

_No parameters._

**Request body**

[PaymentMethodDTO](../models/PaymentMethodDTO.md) as `application/json`

**Response (200)**

[PaymentMethodDTO](../models/PaymentMethodDTO.md)

## POST /api/PaymentMethod/Delete

**Parameters**

_No parameters._

**Request body**

[PaymentMethodDTO](../models/PaymentMethodDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/PaymentMethod/GetList

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `isIncludeInUseCount` | query | no | boolean |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[PaymentMethodDTOPagedListContainer](../models/PaymentMethodDTOPagedListContainer.md)

## GET /api/PaymentMethod/GetPaymentMethodByCode

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `code` | query | no | string |  |
| `type` | query | no | enum [PaymentMethodInvoiceType](../models/PaymentMethodInvoiceType.md) |  |
| `isIncludeInUseCount` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[PaymentMethodDTO](../models/PaymentMethodDTO.md)

## GET /api/PaymentMethod/GetPaymentMethodsByTypeId

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `typeId` | query | no | int32 |  |
| `isIncludeInUseCount` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[PaymentMethodDTO[]](../models/PaymentMethodDTO.md)

## POST /api/PaymentMethod/Update

**Parameters**

_No parameters._

**Request body**

[PaymentMethodDTO](../models/PaymentMethodDTO.md) as `application/json`

**Response (200)**

[PaymentMethodDTO](../models/PaymentMethodDTO.md)

# FitekIN Web API: AutoTransactions

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

18 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## GET /api/AutoTransactions/ApplyAutoTransactionToInvoice

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `atId` | query | no | int32 |  |
| `invoiceId` | query | no | int32 |  |
| `recreateTransactionRows` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[InvoiceBL](../models/InvoiceBL.md)

## GET /api/AutoTransactions/CheckAutoTransactionNameForDuplicates

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `atName` | query | no | string |  |
| `currentAtId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/AutoTransactions/CreateFromRecommendation

**Parameters**

_No parameters._

**Request body**

[AutoTransactionRecommendationDTO](../models/AutoTransactionRecommendationDTO.md) as `application/json`

**Response (200)**

[AutoTransactionUiObjectDTO](../models/AutoTransactionUiObjectDTO.md)

## GET /api/AutoTransactions/DeleteAutoTransaction

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `atId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/AutoTransactions/DuplicateAutoTransaction

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `atId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[AutoTransactionsDTO](../models/AutoTransactionsDTO.md)

## POST /api/AutoTransactions/ExportAutoTransactions

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `exportType` | query | no | enum [ExportTypes](../models/ExportTypes.md) |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/AutoTransactions/GetAutoTransactionForUiById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[AutoTransactionUiObjectDTO](../models/AutoTransactionUiObjectDTO.md)

## GET /api/AutoTransactions/GetAutoTransactionSnapshotForInvoice

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[AutoTransactionUiObjectDTO](../models/AutoTransactionUiObjectDTO.md)

## GET /api/AutoTransactions/GetByNamePart

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `searchParam` | query | no | string |  |
| `amount` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[AutoTransactionRuleSimpleDTO[]](../models/AutoTransactionRuleSimpleDTO.md)

## GET /api/AutoTransactions/GetEmptyUiObject

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[AutoTransactionUiObjectDTO](../models/AutoTransactionUiObjectDTO.md)

## GET /api/AutoTransactions/GetLastMetaInfosBySupplier

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `searchString` | query | no | string |  |
| `supplierId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[AutoTransactionExtension[]](../models/AutoTransactionExtension.md)

## POST /api/AutoTransactions/GetList

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[AutoTransactionsDTOPagedListContainer](../models/AutoTransactionsDTOPagedListContainer.md)

## POST /api/AutoTransactions/GetListMin

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[AutoTransactionListMinDTOPagedListContainer](../models/AutoTransactionListMinDTOPagedListContainer.md)

## POST /api/AutoTransactions/GetPartiesExtensionsByTypeAndField

**Parameters**

_No parameters._

**Request body**

[TriggerExtensionRequest](../models/TriggerExtensionRequest.md) as `application/json`

**Response (200)**

`array`

## GET /api/AutoTransactions/GetRecommendations

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[AutoTransactionRecommendationDTO[]](../models/AutoTransactionRecommendationDTO.md)

## GET /api/AutoTransactions/IsAutoTransactionFinished

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/AutoTransactions/SaveAutoTransaction

**Parameters**

_No parameters._

**Request body**

[AutoTransactionUiObjectDTO](../models/AutoTransactionUiObjectDTO.md) as `application/json`

**Response (200)**

[AutoTransactionUiObjectDTO](../models/AutoTransactionUiObjectDTO.md)

## GET /api/AutoTransactions/ToggleRuleActivity

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `atId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

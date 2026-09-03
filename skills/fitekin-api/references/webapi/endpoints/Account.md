# FitekIN Web API: Account

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

13 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Account/AddAccount

**Parameters**

_No parameters._

**Request body**

[AccountDTO](../models/AccountDTO.md) as `application/json`

**Response (200)**

[AccountDTO](../models/AccountDTO.md)

## DELETE /api/Account/DeleteAccount/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Account/EditAccount

**Parameters**

_No parameters._

**Request body**

[AccountDTO](../models/AccountDTO.md) as `application/json`

**Response (200)**

[AccountDTO](../models/AccountDTO.md)

## POST /api/Account/ExportAccountsToCSV (deprecated)

**Parameters**

_No parameters._

**Request body**

[RestrictionItem[]](../models/RestrictionItem.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Account/ExportAccountsToXls

**Parameters**

_No parameters._

**Request body**

[RestrictionItem[]](../models/RestrictionItem.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Account/GetAccountById/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[AccountDTO](../models/AccountDTO.md)

## POST /api/Account/GetAccounts

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[AccountDTOPagedListContainer](../models/AccountDTOPagedListContainer.md)

## GET /api/Account/GetAccountsByDescription

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `description` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[AccountDTOPagedListContainer](../models/AccountDTOPagedListContainer.md)

## GET /api/Account/GetInvoiceCountInUse

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `accountId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Account/ImportAccount

**Parameters**

_No parameters._

**Request body**

[AccountRequest](../models/AccountRequest.md) as `application/json`

**Response (200)**

[AccountDTO](../models/AccountDTO.md)

## POST /api/Account/UploadAccountFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

## POST /api/Account/UploadCSVFile

**Parameters**

_No parameters._

**Request body**

[FileDTO](../models/FileDTO.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

## POST /api/Account/UploadCSVFile2

**Parameters**

_No parameters._

**Request body**

[CsvUploadRequest](../models/CsvUploadRequest.md) as `application/json`

**Response (200)**

[ImportResponse](../models/ImportResponse.md)

# FitekIN Web API: User

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

20 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/User/BulkToggleCostObjectiveItemsForUser

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `userGuid` | query | no | uuid |  |
| `objectType` | query | no | int32 |  |
| `value` | query | no | boolean |  |
| `ccoId` | query | no | int32 |  |

**Request body**

`array` as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/User/ChangeUserLanguage

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `newLanguage` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/User/ChangeUserPassword

**Parameters**

_No parameters._

**Request body**

[PasswordDTO](../models/PasswordDTO.md) as `application/json`

**Response (200)**

[Response](../models/Response.md)

## POST /api/User/CreateUser

**Parameters**

_No parameters._

**Request body**

[UserCreationDTO](../models/UserCreationDTO.md) as `application/json`

**Response (200)**

[UserCreationResultDTO](../models/UserCreationResultDTO.md)

## POST /api/User/ExportUsersToCSV (deprecated)

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/User/ExportUsersToXls

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/User/GetActiveUsersCount

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/User/GetCostObjectiveItemsCountForUser

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `userGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[UserAssignedCostCostObjectivesAmountsDTO[]](../models/UserAssignedCostCostObjectivesAmountsDTO.md)

## POST /api/User/GetCostObjectiveItemsCountForUser

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `getItemsForUserOnly` | query | no | boolean |  |
| `filterByDate` | query | no | date-time |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/User/GetCostObjectiveItemsForUser

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `getItemsForUserOnly` | query | no | boolean |  |
| `filterByDate` | query | no | date-time |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/User/GetCurrentUserBo

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[BackOfficeUserDTO](../models/BackOfficeUserDTO.md)

## GET /api/User/GetUserByEmailOnly

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `email` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[BackOfficeUserDTO](../models/BackOfficeUserDTO.md)

## POST /api/User/GetUsers

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[UserDTOPagedListContainer](../models/UserDTOPagedListContainer.md)

## POST /api/User/GetUsersFromBo

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[UserDTOPagedListContainer](../models/UserDTOPagedListContainer.md)

## GET /api/User/IsEmailUnique

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `email` | query | no | string |  |
| `userBoGuid` | query | no | uuid |  |
| `useGlobalSearch` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/User/IsPersonalCodeUnique

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `personalCode` | query | no | string |  |
| `userBoGuid` | query | no | uuid |  |
| `country` | query | no | string |  |
| `useGlobalSearch` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/User/SaveUser

**Parameters**

_No parameters._

**Request body**

[BackOfficeUserDTO](../models/BackOfficeUserDTO.md) as `application/json`

**Response (200)**

[BackOfficeUserDTO](../models/BackOfficeUserDTO.md)

## GET /api/User/ToggleCostObjectiveItemForUser

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `userGuid` | query | no | uuid |  |
| `objectType` | query | no | int32 |  |
| `objectId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/User/UpdateUser

**Parameters**

_No parameters._

**Request body**

[UserCreationDTO](../models/UserCreationDTO.md) as `application/json`

**Response (200)**

[UserCreationResultDTO](../models/UserCreationResultDTO.md)

## POST /api/User/ValidateUser

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `userGuid` | query | no | uuid |  |

**Request body**

[UserCreationDTO](../models/UserCreationDTO.md) as `application/json`

**Response (200)**

`array`

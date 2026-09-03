# FitekIN Web API: GroupMember

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

14 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/GroupMember/AddGroupMember

**Parameters**

_No parameters._

**Request body**

[GroupMemberDTO](../models/GroupMemberDTO.md) as `application/json`

**Response (200)**

[UserDTO](../models/UserDTO.md)

## GET /api/GroupMember/CheckGroupMemberExists

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `personalId` | query | no | string |  |
| `groupMemberId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/GroupMember/Delete

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/GroupMember/EditGroupMember

**Parameters**

_No parameters._

**Request body**

[GroupMemberDTO](../models/GroupMemberDTO.md) as `application/json`

**Response (200)**

[UserDTO](../models/UserDTO.md)

## GET /api/GroupMember/GetArchiveCompanyGroupMembers

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[GroupMemberDTO[]](../models/GroupMemberDTO.md)

## GET /api/GroupMember/GetByName

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `type` | query | no | int32 |  |
| `name` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[GroupMemberDTO[]](../models/GroupMemberDTO.md)

## GET /api/GroupMember/GetCommonGroupMember

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `groupMemberId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[GroupMemberCommonDTO](../models/GroupMemberCommonDTO.md)

## GET /api/GroupMember/GetGroupMembers

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[GroupMemberDTO[]](../models/GroupMemberDTO.md)

## POST /api/GroupMember/GetGroupMembers

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[GroupMemberDTOPagedListContainer](../models/GroupMemberDTOPagedListContainer.md)

## GET /api/GroupMember/GetGroupMemberSettingsForCompany

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyGuid` | query | no | uuid |  |
| `userGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[GroupMemberSettingsForMobileDTO](../models/GroupMemberSettingsForMobileDTO.md)

## POST /api/GroupMember/GetGroupMembersMicro

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[GroupMemberMicroDTOPagedListContainer](../models/GroupMemberMicroDTOPagedListContainer.md)

## GET /api/GroupMember/GetUserSettings

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `groupMemberId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[UserSettingCommon[]](../models/UserSettingCommon.md)

## POST /api/GroupMember/UpdateCommonUserSettings

**Parameters**

_No parameters._

**Request body**

[UserSettingCommon[]](../models/UserSettingCommon.md) as `application/json`

**Response (200)**

[UserSettingCommon[]](../models/UserSettingCommon.md)

## POST /api/GroupMember/UpdateUserSettings

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `groupMemberId` | query | no | int32 |  |

**Request body**

[UserSettingCommon[]](../models/UserSettingCommon.md) as `application/json`

**Response (200)**

[UserSettingCommon[]](../models/UserSettingCommon.md)

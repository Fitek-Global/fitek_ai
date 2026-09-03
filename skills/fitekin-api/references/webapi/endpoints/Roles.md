# FitekIN Web API: Roles

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

3 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Roles/GetAllRoles

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[RoleDTOPagedListContainer](../models/RoleDTOPagedListContainer.md)

## GET /api/Roles/GetRoleById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `roleId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[RoleDTO](../models/RoleDTO.md)

## GET /api/Roles/GetRolePermissionsByCategory

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `roleId` | query | no | int32 |  |
| `categoryId` | query | no | enum [PermissionCategory](../models/PermissionCategory.md) |  |

**Request body**

_None._

**Response (200)**

[RolesPermissionDto[]](../models/RolesPermissionDto.md)

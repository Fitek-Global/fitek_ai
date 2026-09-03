# RolesPermissionDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `RoleId` | int32 | no |  |
| `State` | enum [PermissionState](PermissionState.md) | no |  |
| `PermissionId` | enum [PermissionId](PermissionId.md) | no |  |
| `ModifiedBy` | int32 | yes |  |
| `LastModifiedUtc` | date-time | yes |  |
| `Permission` | [PermissionDto](PermissionDto.md) | no |  |

Used by:

- GET /api/Roles/GetRolePermissionsByCategory (response) — [Roles](../endpoints/Roles.md)
- [RoleDTO](RoleDTO.md).Permissions

# RoleDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `IsNew` | boolean | no | read-only |
| `Id` | int32 | no |  |
| `RoleName` | string | yes |  |
| `RoleDescription` | string | yes |  |
| `RoleType` | enum [RoleType](RoleType.md) | no |  |
| `UsersWithRole` | int32 | no |  |
| `TotalUsers` | int32 | no |  |
| `PredefinedId` | int32 | yes |  |
| `Permissions` | [RolesPermissionDto](RolesPermissionDto.md)[] | yes |  |

Used by:

- GET /api/Roles/GetRoleById (response) — [Roles](../endpoints/Roles.md)
- [RoleDTOPagedListContainer](RoleDTOPagedListContainer.md).Items

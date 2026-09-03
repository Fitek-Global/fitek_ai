# MemberRoleBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `Role` | enum [RoleEnum](RoleEnum.md) | no |  |
| `GroupMemberId` | int32 | no |  |
| `GroupMemberGuid` | uuid | yes |  |

Used by:

- [GroupMemberBL](GroupMemberBL.md).MemberRoles

# MemberRole

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Role` | enum [RoleEnum](RoleEnum.md) | no |  |
| `GroupMemberId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).MemberRoles

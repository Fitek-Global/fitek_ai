# GroupMemberCommonDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UserId` | int32 | no |  |
| `UserGuid` | uuid | no |  |
| `Name` | string | yes |  |
| `Surname` | string | yes |  |
| `Substitute` | [SubstituteDTO](SubstituteDTO.md) | no |  |
| `Substitutes` | [SubstituteDTO](SubstituteDTO.md)[] | yes |  |
| `MemberRoles` | [MemberRoleDTO](MemberRoleDTO.md)[] | yes |  |
| `UserSettings` | [UserSettingCommon](UserSettingCommon.md)[] | yes |  |

Used by:

- GET /api/GroupMember/GetCommonGroupMember (response) — [GroupMember](../endpoints/GroupMember.md)

# UserDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `FirstName` | string | yes |  |
| `LastName` | string | yes |  |
| `PersonalCode` | string | yes |  |
| `Username` | string | yes |  |
| `Email` | string | yes |  |
| `BOGuid` | uuid | no |  |
| `Password` | string | yes |  |
| `GroupMember` | [GroupMemberMinDTO](GroupMemberMinDTO.md) | no |  |
| `IsActive` | boolean | no |  |
| `Error` | string | yes |  |
| `Country` | string | yes |  |
| `ExternalId` | string | yes |  |
| `Language` | string | yes |  |
| `EmailLastValidated` | date-time | yes |  |
| `FullName` | string | yes | read-only |

Used by:

- POST /api/GroupMember/AddGroupMember (response) — [GroupMember](../endpoints/GroupMember.md)
- POST /api/GroupMember/EditGroupMember (response) — [GroupMember](../endpoints/GroupMember.md)
- [GroupMemberDTO](GroupMemberDTO.md).User
- [UserDTOPagedListContainer](UserDTOPagedListContainer.md).Items

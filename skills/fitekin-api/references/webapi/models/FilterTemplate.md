# FilterTemplate

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `GroupMemberId` | int32 | no |  |
| `Name` | string | yes |  |
| `JSON` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `IsDefault` | boolean | no |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).SearchFilter

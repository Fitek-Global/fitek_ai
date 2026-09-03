# Substitute

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `From` | date-time | no |  |
| `To` | date-time | no |  |
| `ToSubstituteId` | int32 | no |  |
| `GroupMemberId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `ToGroupMember` | [GroupMember](GroupMember.md) | no |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).Substitutes
- [GroupMember](GroupMember.md).SubstitutesToSubstitute

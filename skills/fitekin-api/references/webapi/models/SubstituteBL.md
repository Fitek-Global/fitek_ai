# SubstituteBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `GroupMemberId` | int32 | no |  |
| `GroupMemberName` | string | yes |  |
| `From` | date-time | yes |  |
| `To` | date-time | yes |  |
| `ToSubstituteId` | int32 | no |  |
| `ToSubstituteName` | string | yes |  |

Used by:

- [GroupMemberBL](GroupMemberBL.md).Substitute
- [GroupMemberBL](GroupMemberBL.md).Substitutes

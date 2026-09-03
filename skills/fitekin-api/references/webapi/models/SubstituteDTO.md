# SubstituteDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `GroupMemberId` | int32 | no |  |
| `GroupMemberName` | string | yes |  |
| `From` | date-time | yes |  |
| `To` | date-time | yes |  |
| `ToSubstituteId` | int32 | no |  |
| `ToSubstituteName` | string | yes |  |

Used by:

- GET /api/Substitute/GetCompanySubstitutes/{guid} (response) — [Substitute](../endpoints/Substitute.md)
- GET /api/Substitute/GetSubstituteSubstitute/{id} (response) — [Substitute](../endpoints/Substitute.md)
- GET /api/Substitute/GetUsersSubstitutes/{id} (response) — [Substitute](../endpoints/Substitute.md)
- POST /api/Substitute/AddOrUpdateSubstitute (request) — [Substitute](../endpoints/Substitute.md)
- POST /api/Substitute/AddOrUpdateSubstitute (response) — [Substitute](../endpoints/Substitute.md)
- POST /api/Substitute/UpdateSubstitutes (request) — [Substitute](../endpoints/Substitute.md)
- POST /api/Substitute/UpdateSubstitutes (response) — [Substitute](../endpoints/Substitute.md)
- [GroupMemberCommonDTO](GroupMemberCommonDTO.md).Substitute
- [GroupMemberCommonDTO](GroupMemberCommonDTO.md).Substitutes
- [GroupMemberDTO](GroupMemberDTO.md).Substitute
- [GroupMemberDTO](GroupMemberDTO.md).Substitutes
- [GroupMemberMinDTO](GroupMemberMinDTO.md).Substitute

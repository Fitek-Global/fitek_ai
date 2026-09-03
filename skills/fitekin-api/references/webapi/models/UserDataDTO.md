# UserDataDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `GroupMemberId` | int32 | yes |  |
| `GroupMemberTitle` | string | yes |  |
| `FirstName` | string | yes |  |
| `LastName` | string | yes |  |
| `FullName` | string | yes |  |
| `PersonalCode` | string | yes |  |
| `MemberRoles` | int32[] | yes |  |
| `Email` | string | yes |  |
| `Language` | string | yes |  |
| `FullNameAndPersonalCode` | string | yes |  |
| `CompanySettings` | string[] | yes |  |
| `CurrentVersion` | string | yes |  |
| `BOGuid` | uuid | no |  |

Used by:

- GET /api/User/GetCurrentUser (response) — [MobileApp](../endpoints/MobileApp.md)

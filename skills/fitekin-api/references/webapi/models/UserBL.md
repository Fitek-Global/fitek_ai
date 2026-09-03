# UserBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `FirstName` | string | yes |  |
| `LastName` | string | yes |  |
| `PersonalCode` | string | yes |  |
| `Email` | string | yes |  |
| `Username` | string | yes |  |
| `IsSuperUser` | boolean | no |  |
| `Password` | string | yes |  |
| `IsActive` | boolean | no |  |
| `Error` | string | yes |  |
| `GroupMember` | [GroupMemberBL](GroupMemberBL.md) | no |  |
| `BOGuid` | uuid | no |  |
| `Country` | string | yes |  |
| `ExternalId` | string | yes |  |
| `EmailLastValidated` | date-time | yes |  |
| `FullName` | string | yes |  |

Used by:

- [GroupMemberBL](GroupMemberBL.md).User

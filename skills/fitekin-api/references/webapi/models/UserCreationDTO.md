# UserCreationDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `UserGuid` | uuid | no |  |
| `Country` | string | yes |  |
| `PersonalCode` | string | yes |  |
| `Email` | email | yes |  |
| `Username` | string(254) | yes | max 254 |
| `FirstName` | string | yes |  |
| `LastName` | string | yes |  |
| `IsActive` | boolean | no |  |
| `MembershipStart` | date-time | yes |  |
| `MembershipEnd` | date-time | yes |  |
| `EmailLastValidated` | date-time | yes |  |
| `PersonalCodeLastValidated` | date-time | yes |  |
| `MemberRoles` | [MemberRoleDTO](MemberRoleDTO.md)[] | yes |  |
| `MonetaryLimit` | double | yes |  |
| `MonetaryCurrency` | string | yes |  |
| `ExternalId` | string | yes |  |
| `Language` | string | yes |  |
| `SendEmailNotification` | boolean | no |  |

Used by:

- POST /api/User/CreateUser (request) — [User](../endpoints/User.md)
- POST /api/User/UpdateUser (request) — [User](../endpoints/User.md)
- POST /api/User/ValidateUser (request) — [User](../endpoints/User.md)

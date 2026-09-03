# BackOfficeUserDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `UserGuid` | uuid | no |  |
| `FirstName` | string | yes |  |
| `LastName` | string | yes |  |
| `FullName` | string | yes |  |
| `Username` | string | yes |  |
| `Email` | string | yes |  |
| `PersonalCode` | string | yes |  |
| `Password` | string | yes |  |
| `Role` | enum [BORole](BORole.md) | no |  |
| `Country` | string | yes |  |
| `Language` | string | yes |  |
| `LastCompany` | uuid | yes |  |
| `BetaRole` | boolean | yes |  |
| `EmailLastValidated` | date-time | yes |  |
| `PersonalCodeLastValidated` | date-time | yes |  |
| `UserNotes` | string | yes |  |
| `ExternalId` | string | yes |  |
| `Reseller` | [BackOfficeResellerDTO](BackOfficeResellerDTO.md) | no |  |
| `ResellerGuid` | uuid | yes |  |
| `ModifiedBy` | uuid | yes |  |
| `Sessions` | [BackOfficeSessionDTO](BackOfficeSessionDTO.md)[] | yes |  |
| `Settings` | [UserSetting](UserSetting.md)[] | yes |  |
| `UserCompanies` | [BackOfficeUserCompanyDTO](BackOfficeUserCompanyDTO.md)[] | yes |  |
| `Managers` | [BackOfficeManagerDTO](BackOfficeManagerDTO.md)[] | yes |  |

Used by:

- GET /api/User/GetCurrentUserBo (response) — [User](../endpoints/User.md)
- GET /api/User/GetUserByEmailOnly (response) — [User](../endpoints/User.md)
- POST /api/User/SaveUser (request) — [User](../endpoints/User.md)
- POST /api/User/SaveUser (response) — [User](../endpoints/User.md)
- [BackOfficeManagerDTO](BackOfficeManagerDTO.md).User
- [BackOfficeSessionDTO](BackOfficeSessionDTO.md).User

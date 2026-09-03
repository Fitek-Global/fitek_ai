# BackOfficeUserCompanyDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UserGuid` | uuid | no |  |
| `CompanyGuid` | uuid | no |  |
| `MembershipStart` | date-time | yes |  |
| `MembershipEnd` | date-time | yes |  |
| `IsActive` | boolean | no |  |
| `ModifiedBy` | uuid | yes |  |

Used by:

- [BackOfficeUserDTO](BackOfficeUserDTO.md).UserCompanies

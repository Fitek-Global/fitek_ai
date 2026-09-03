# BackOfficeOrganizationDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `OrganizationGuid` | uuid | no |  |
| `OrganizationName` | string | yes |  |
| `OrganizationNotes` | string | yes |  |
| `AuthToken` | uuid | no |  |
| `ResellerGuid` | uuid | yes |  |
| `Reseller` | [BackOfficeResellerDTO](BackOfficeResellerDTO.md) | no |  |
| `Companies` | [BackOfficeCompanyDTO](BackOfficeCompanyDTO.md)[] | yes |  |

Used by:

- [BackOfficeCompanyDTO](BackOfficeCompanyDTO.md).Organization

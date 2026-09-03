# BackOfficeResellerDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `ResellerGuid` | uuid | no |  |
| `ResellerName` | string | yes |  |
| `DomainGuid` | uuid | no |  |
| `ContactPerson` | string | yes |  |
| `Email` | string | yes |  |
| `Phone` | string | yes |  |
| `ResellerNotes` | string | yes |  |
| `AuthToken` | uuid | no |  |
| `CreatedBy` | string | yes |  |
| `Domain` | [BackOfficeDomainDTO](BackOfficeDomainDTO.md) | no |  |

Used by:

- [BackOfficeCompanyDTO](BackOfficeCompanyDTO.md).Reseller
- [BackOfficeOrganizationDTO](BackOfficeOrganizationDTO.md).Reseller
- [BackOfficeUserDTO](BackOfficeUserDTO.md).Reseller

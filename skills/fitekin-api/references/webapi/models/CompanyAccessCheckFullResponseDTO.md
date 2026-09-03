# CompanyAccessCheckFullResponseDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `BOCompany` | [BackOfficeCompanyDTO](BackOfficeCompanyDTO.md) | no |  |
| `AccessStatus` | [CompanyAccessCheckResponseDTO](CompanyAccessCheckResponseDTO.md) | no |  |
| `ActiveModules` | enum [Modules](Modules.md)[] | yes |  |
| `MemberRoles` | int32[] | yes |  |

Used by:

- GET /api/BO/GetStatusUserCompanies (response) — [MobileApp](../endpoints/MobileApp.md)

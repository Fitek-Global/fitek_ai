# BackOfficeCompanyDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `CompanyGuid` | uuid | no |  |
| `CompanyName` | string | yes |  |
| `ExternalSafeCompanyName` | string | yes |  |
| `Country` | string | yes |  |
| `RegistrationCode` | string | yes |  |
| `VatCode` | string | yes |  |
| `SKTaxId` | string | yes |  |
| `Status` | enum [CompanyStatus](CompanyStatus.md) | no |  |
| `CompanyNotes` | string | yes |  |
| `ResellerGuid` | uuid | yes |  |
| `OrganizationGuid` | uuid | yes |  |
| `AuthToken` | uuid | no |  |
| `DbServerIpRead` | string | yes |  |
| `DbServerIpWrite` | string | yes |  |
| `DbName` | string | yes |  |
| `DbSchema` | string | yes |  |
| `UsersCount` | string | yes |  |
| `AllowToSwitch` | boolean | no |  |
| `PlatformId` | int32 | yes |  |
| `ClientUuid` | string | yes |  |
| `ClientNumber` | int32 | yes |  |
| `ClientId` | int32 | yes |  |
| `AddressLine1` | string | yes |  |
| `AddressLine2` | string | yes |  |
| `County` | string | yes |  |
| `City` | string | yes |  |
| `PostalCode` | string | yes |  |
| `PayToAccount` | string | yes |  |
| `DailyReportDates` | string | yes |  |
| `DailyReportTime1` | date-time | yes |  |
| `DailyReportTime2` | date-time | yes |  |
| `UseBeta` | boolean | no |  |
| `DailyReminderTime1` | int32 | yes |  |
| `DailyReminderTime2` | int32 | yes |  |
| `Logo` | byte | yes |  |
| `ModifiedBy` | uuid | yes |  |
| `TimeZone` | string | yes |  |
| `TimeZoneDisplay` | string | yes | read-only |
| `ContactEmail` | string | yes |  |
| `Managers` | [BackOfficeManagerDTO](BackOfficeManagerDTO.md)[] | yes |  |
| `Organization` | [BackOfficeOrganizationDTO](BackOfficeOrganizationDTO.md) | no |  |
| `Reseller` | [BackOfficeResellerDTO](BackOfficeResellerDTO.md) | no |  |
| `CompanyBankAccounts` | [BackOfficeCompanyBankAccountDTO](BackOfficeCompanyBankAccountDTO.md)[] | yes |  |
| `IsClone` | boolean | no |  |

Used by:

- GET /api/BO/GetCompaniesForUser (response) — [BO](../endpoints/BO.md)
- GET /api/BO/GetUserCompanies (response) — [MobileApp](../endpoints/MobileApp.md)
- GET /api/Company/GetAllCompaniesFromTheSameOrganizationByName (response) — [Company](../endpoints/Company.md)
- GET /api/Company/GetCompany (response) — [Company](../endpoints/Company.md)
- GET /api/Company/GetCurrentCompany (response) — [Company](../endpoints/Company.md)
- GET /api/Session/GetUserCompanies (response) — [Session](../endpoints/Session.md)
- [BackOfficeCompanyDTOPagedListContainer](BackOfficeCompanyDTOPagedListContainer.md).Items
- [BackOfficeManagerDTO](BackOfficeManagerDTO.md).Company
- [BackOfficeOrganizationDTO](BackOfficeOrganizationDTO.md).Companies
- [BackOfficeSessionDTO](BackOfficeSessionDTO.md).Company
- [CompanyAccessCheckFullResponseDTO](CompanyAccessCheckFullResponseDTO.md).BOCompany

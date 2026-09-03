# BackOfficeCompanySettingDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `CompanyGuid` | uuid | no |  |
| `Name` | string | yes |  |
| `Value` | string | yes |  |
| `ModifiedBy` | uuid | yes |  |
| `Type` | string | yes |  |

Used by:

- GET /api/Company/GetCompanySettings (response) — [MobileApp](../endpoints/MobileApp.md)
- GET /api/Company/GetCurrentCompanySettings (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/Company/AddCompanySettings (request) — [Company](../endpoints/Company.md)
- POST /api/Company/AddCompanySettings (response) — [Company](../endpoints/Company.md)
- POST /api/Company/AddOrUpdateCompanySetting (request) — [Company](../endpoints/Company.md)
- POST /api/Company/AddOrUpdateCompanySetting (response) — [Company](../endpoints/Company.md)

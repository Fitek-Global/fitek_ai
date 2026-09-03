# BackOfficeCompanyBankAccountDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `CompanyGuid` | uuid | no |  |
| `BankName` | string | yes |  |
| `BankAccount` | string | yes |  |
| `SWIFT` | string | yes |  |

Used by:

- POST /api/Company/AddOrUpdateCompanyBankAccount (request) — [Company](../endpoints/Company.md)
- POST /api/Company/AddOrUpdateCompanyBankAccount (response) — [Company](../endpoints/Company.md)
- [BackOfficeCompanyDTO](BackOfficeCompanyDTO.md).CompanyBankAccounts

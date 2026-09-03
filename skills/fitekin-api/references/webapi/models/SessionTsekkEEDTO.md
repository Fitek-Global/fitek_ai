# SessionTsekkEEDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `FirstName` | string | yes |  |
| `LastName` | string | yes |  |
| `PersonalCode` | string | yes |  |
| `Language` | string | yes |  |
| `CurrentCompany` | [CompanyMinDTO](CompanyMinDTO.md) | no |  |
| `UserCompanies` | [CompanyShortWithUser](CompanyShortWithUser.md)[] | yes |  |

Used by:

- GET /api/PartnerAuthentication/ValidateSessionTokenTsekkEE (response) — [PartnerAuthentication](../endpoints/PartnerAuthentication.md)

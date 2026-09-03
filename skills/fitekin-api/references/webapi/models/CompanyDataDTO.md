# CompanyDataDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Users` | [UserMinDTO](UserMinDTO.md)[] | yes |  |
| `VatCodes` | [VatCodeDTO](VatCodeDTO.md)[] | yes |  |
| `CompanyGuid` | uuid | no |  |
| `CompanyName` | string | yes |  |
| `Country` | string | yes |  |
| `UseBeta` | boolean | no |  |
| `WorkflowTemplates` | [WorkflowTemplateDTO](WorkflowTemplateDTO.md)[] | yes |  |
| `BetaUrl` | string | yes |  |
| `MailBoxes` | [MailboxGuidNameDTO](MailboxGuidNameDTO.md)[] | yes |  |

Used by:

- GET /api/Company/GetCompanyData (response) — [MobileApp](../endpoints/MobileApp.md)

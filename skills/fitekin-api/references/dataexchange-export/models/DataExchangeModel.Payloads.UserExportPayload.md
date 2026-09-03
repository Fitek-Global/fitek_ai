# DataExchangeModel.Payloads.UserExportPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `userId` | uuid | no |  |
| `companyId` | uuid | no |  |
| `organizationId` | uuid | no |  |
| `resellerId` | uuid | no |  |
| `country` | null,string | no |  |
| `personalCode` | null,string | no |  |
| `email` | null,string | no |  |
| `firstName` | null,string | no |  |
| `lastName` | null,string | no |  |
| `enabled` | boolean | no |  |
| `membershipStartDate` | null,string | no |  |
| `membershipEndDate` | null,string | no |  |
| `roles` | null,array | no |  |
| `confirmationMonetaryLimitAmount` | int32 | no |  |
| `confirmationMonetaryLimitCurrency` | null,string | no |  |

Used by:

- POST /Users (response) — [Export](../endpoints/Export.md)

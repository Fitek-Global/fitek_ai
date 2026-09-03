# DataExchangeModel.Payloads.MultiCompanyUserAddPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `companies` | null,array | no | required |
| `country` | null,string | no |  |
| `personalCode` | null,string | no | max 16 |
| `email` | null,string | no |  |
| `firstName` | null,string | no | required; max 64 |
| `lastName` | null,string | no | required; max 64 |
| `isActive` | null,boolean | no |  |
| `enabled` | null,boolean | no |  |
| `membershipStartDate` | null,string | no |  |
| `membershipEndDate` | null,string | no |  |
| `roles` | null,array | no |  |
| `confirmationMonetaryLimitAmount` | int32 | no | min 0; max 999999999 |
| `confirmationMonetaryLimitCurrency` | null,string | no |  |
| `emailLastValidated` | date-time | no |  |
| `externalId` | null,string | no |  |
| `language` | null,string | no |  |

Used by:

- [DataExchangeModel.Requests.MultiCompanyUserAddRequest`1[DataExchangeModel.Payloads.MultiCompanyUserAddPayload]](DataExchangeModel.Requests.MultiCompanyUserAddRequest_1_DataExchangeModel.Payloads.MultiCompanyUserAddPayload_.md).payload

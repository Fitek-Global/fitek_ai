# DataExchangeModel.Requests.MultiCompanyUserAddRequest`1[DataExchangeModel.Payloads.MultiCompanyUserAddPayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `authorizationToken` | uuid | no |  |
| `queryParams` | [DataExchangeModel.General.CommonQueryParams](DataExchangeModel.General.CommonQueryParams.md) | no |  |
| `payload` | [DataExchangeModel.Payloads.MultiCompanyUserAddPayload](DataExchangeModel.Payloads.MultiCompanyUserAddPayload.md) | no | required |
| `requestId` | uuid | no | required |
| `extensions` | null,array | no |  |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /MultiCompanyUser (request) — [Import](../endpoints/Import.md)

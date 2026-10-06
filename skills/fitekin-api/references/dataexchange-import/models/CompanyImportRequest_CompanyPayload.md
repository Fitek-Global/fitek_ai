# DataExchangeModel.General.Input.CompanyImportRequest`1[DataExchangeModel.Payloads.CompanyPayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `authorizationToken` | uuid | no |  |
| `resellerId` | uuid | no | required |
| `organizationId` | uuid | no |  |
| `payload` | [DataExchangeModel.Payloads.CompanyPayload](CompanyPayload.md) | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Company (request) — [Import](../endpoints/Import.md)

# DataExchangeModel.General.Input.CompanyImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.CompanyPayload]]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `authorizationToken` | uuid | no |  |
| `resellerId` | uuid | no | required |
| `organizationId` | uuid | no |  |
| `payload` | null,array | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Companies (request) — [Import](../endpoints/Import.md)

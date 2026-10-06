# DataExchangeModel.Requests.DimensionImportRequest`1[DataExchangeModel.Payloads.DimensionPayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `parentCostObjectiveCode` | null,string | no |  |
| `parentCostObjectiveDescription` | null,string | no |  |
| `queryParams` | [DataExchangeModel.General.CommonQueryParams](CommonQueryParams.md) | no |  |
| `payload` | [DataExchangeModel.Payloads.DimensionPayload](DimensionPayload.md) | no | required |
| `requestId` | uuid | no | required |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Dimension (request) — [Import](../endpoints/Import.md)

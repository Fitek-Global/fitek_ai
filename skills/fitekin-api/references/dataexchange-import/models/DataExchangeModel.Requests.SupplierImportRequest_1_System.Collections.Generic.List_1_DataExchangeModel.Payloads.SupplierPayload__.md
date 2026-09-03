# DataExchangeModel.Requests.SupplierImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.SupplierPayload]]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `payload` | null,array | no | required |
| `requestId` | uuid | no | required |
| `queryParams` | [Common.Global.Handlers.QueryParams](Common.Global.Handlers.QueryParams.md) | no |  |
| `extensions` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Suppliers (request) — [Import](../endpoints/Import.md)

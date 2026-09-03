# DataExchangeModel.PurchaseOrderImportResponse

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `responseId` | uuid | no |  |
| `status` | null,string | no |  |
| `generalErrorCode` | null,string | no |  |
| `generalMessage` | null,string | no |  |
| `errorMessages` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /PurchaseOrder (response) — [Import](../endpoints/Import.md)
- POST /PurchaseOrderUpdate (response) — [Import](../endpoints/Import.md)

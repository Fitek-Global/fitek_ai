# DataExchangeModel.InvoiceImportResponse

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `internalId` | uuid | no |  |
| `isBypassModuleActive` | boolean | no |  |
| `responseId` | uuid | no |  |
| `status` | null,string | no |  |
| `generalErrorCode` | null,string | no |  |
| `generalMessage` | null,string | no |  |
| `errorMessages` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

Used by:

- POST /Invoice (response) — [Import](../endpoints/Import.md)

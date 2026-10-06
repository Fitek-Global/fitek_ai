# DataExchangeModel.GeneralResponse

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

- POST /Accounts (response) — [Import](../endpoints/Import.md)
- POST /Companies (response) — [Import](../endpoints/Import.md)
- POST /Dimensions (response) — [Import](../endpoints/Import.md)
- POST /InvoiceHeaderExtensionListValues (response) — [Import](../endpoints/Import.md)
- POST /InvoiceTypes (response) — [Import](../endpoints/Import.md)
- POST /InvoicesUpdate (response) — [Import](../endpoints/Import.md)
- POST /ProductItems (response) — [Import](../endpoints/Import.md)
- POST /Suppliers (response) — [Import](../endpoints/Import.md)
- POST /TransactionRows (response) — [Import](../endpoints/Import.md)
- POST /Users (response) — [Import](../endpoints/Import.md)
- POST /VatCodes (response) — [Import](../endpoints/Import.md)

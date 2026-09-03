# AccountDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `AdditionalFields` | [AdditionalFieldDTO](AdditionalFieldDTO.md)[] | yes |  |
| `InvoiceCountInUse` | int32 | yes |  |
| `AutoTransactionCountInUse` | int32 | yes |  |
| `AssignedCurrentToUser` | boolean | no |  |

Used by:

- GET /api/Account/GetAccountById/{id} (response) — [Account](../endpoints/Account.md)
- GET /api/ArchiveInvoice/GetAccounts (response) — [ArchiveInvoice](../endpoints/ArchiveInvoice.md)
- GET /api/Invoice/GetAccounts (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Account/AddAccount (request) — [Account](../endpoints/Account.md)
- POST /api/Account/AddAccount (response) — [Account](../endpoints/Account.md)
- POST /api/Account/EditAccount (request) — [Account](../endpoints/Account.md)
- POST /api/Account/EditAccount (response) — [Account](../endpoints/Account.md)
- POST /api/Account/ImportAccount (response) — [Account](../endpoints/Account.md)
- [AccountDTOPagedListContainer](AccountDTOPagedListContainer.md).Items
- [TransactionRowDTO](TransactionRowDTO.md).Account

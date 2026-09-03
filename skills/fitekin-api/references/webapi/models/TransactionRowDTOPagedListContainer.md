# TransactionRowDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [TransactionRowDTO](TransactionRowDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- POST /api/Invoice/GetInvoiceTransactionRowsByInvoiceId/{invoiceId} (response) — [Invoice](../endpoints/Invoice.md)

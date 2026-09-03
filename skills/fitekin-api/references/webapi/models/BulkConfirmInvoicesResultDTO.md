# BulkConfirmInvoicesResultDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `TotalRequested` | int32 | no |  |
| `ApprovedCount` | int32 | no |  |
| `FailedCount` | int32 | no |  |
| `Results` | [InvoiceConfirmResultDTO](InvoiceConfirmResultDTO.md)[] | yes |  |

Used by:

- POST /api/Invoice/ConfirmAllWaitingInvoices (response) — [Invoice](../endpoints/Invoice.md)

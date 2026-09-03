# InvoiceDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [InvoiceDTO](InvoiceDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- POST /api/ArchiveInvoice/GetInvoicesSmall (response) — [ArchiveInvoice](../endpoints/ArchiveInvoice.md)
- POST /api/Invoice/GetInvoicesFull (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/GetInvoicesMedium (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/GetInvoicesSmall (response) — [Invoice](../endpoints/Invoice.md)

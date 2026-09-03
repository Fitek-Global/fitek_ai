# InvoiceRowDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [InvoiceRowDTO](InvoiceRowDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- POST /api/InvoiceRow/GetInvoiceRowsByInvoiceId/{invoiceId} (response) — [InvoiceRow](../endpoints/InvoiceRow.md)

# InvoiceLinkedPurchaseOrdersRequestDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `InvoiceId` | int32 | no |  |
| `searchParams` | [BaseSearch](BaseSearch.md) | no |  |
| `PurchaseOrderId` | int32 | no |  |
| `Filter` | enum [PurchaseOrderInvoicesFilter](PurchaseOrderInvoicesFilter.md) | no |  |

Used by:

- POST /api/PurchaseOrders/GetPurchaseOrdersForInvoice (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)

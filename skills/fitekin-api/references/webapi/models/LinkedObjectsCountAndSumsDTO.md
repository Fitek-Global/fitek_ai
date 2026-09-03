# LinkedObjectsCountAndSumsDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `LinkedObjectsCount` | int32 | no |  |
| `LinkedByMeObjectsCount` | int32 | no |  |
| `LinkedObjectsSumWithoutVat` | double | yes |  |
| `LinkedObjectsTotal` | double | yes |  |
| `Currency` | string | yes |  |

Used by:

- GET /api/PurchaseOrders/GetLinkedInvoicesCount/{poId} (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- GET /api/PurchaseOrders/GetLinkedPurchaseOrdersCount/{invoiceId} (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)

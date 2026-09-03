# PurchaseOrdersRowWithTotalNumbersDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `PurchaseOrdersRowDto` | [PurchaseOrdersRowDTO](PurchaseOrdersRowDTO.md) | no |  |
| `PurchaseOrderSumWithoutVat` | double | yes |  |
| `PurchaseOrderTotal` | double | yes |  |

Used by:

- POST /api/PurchaseOrders/DeletePurchaseOrderRow (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/SavePurchaseOrderRow/{poId} (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)

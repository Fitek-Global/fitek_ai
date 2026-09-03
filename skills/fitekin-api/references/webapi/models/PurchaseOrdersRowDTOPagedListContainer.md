# PurchaseOrdersRowDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [PurchaseOrdersRowDTO](PurchaseOrdersRowDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- POST /api/PurchaseOrders/GetPurchaseOrderRowsPaginated/{poId} (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)

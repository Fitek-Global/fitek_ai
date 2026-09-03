# PurchaseOrdersDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [PurchaseOrdersDTO](PurchaseOrdersDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- GET /api/PurchaseOrders/FindByFilter (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/FindByFilter (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/GetList (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)

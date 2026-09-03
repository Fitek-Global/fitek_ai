# PurchaseOrdersSmallDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [PurchaseOrdersSmallDTO](PurchaseOrdersSmallDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- GET /api/PurchaseOrders/GetListForDashboard (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/PurchaseOrders/GetListForDashboard (response) — [MobileApp](../endpoints/MobileApp.md)

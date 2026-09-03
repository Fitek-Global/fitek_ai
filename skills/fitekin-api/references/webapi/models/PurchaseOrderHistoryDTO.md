# PurchaseOrderHistoryDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `PurchaseOrderId` | int32 | no |  |
| `GroupMemberId` | int32 | yes |  |
| `ActionId` | enum [PurchaseOrderHistoryAction](PurchaseOrderHistoryAction.md) | no |  |
| `LogDate` | date-time | no |  |
| `AdditionalInfo` | string | yes |  |
| `GroupMemberName` | string | yes |  |

Used by:

- GET /api/PurchaseOrders/GetPurchaseOrderHistory (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)

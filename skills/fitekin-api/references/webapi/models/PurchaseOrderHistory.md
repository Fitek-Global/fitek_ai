# PurchaseOrderHistory

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `PurchaseOrderId` | int32 | no |  |
| `PurchaseOrderHistoryGuid` | uuid | no |  |
| `GroupMemberId` | int32 | yes |  |
| `ActionId` | enum [PurchaseOrderHistoryAction](PurchaseOrderHistoryAction.md) | no |  |
| `LogDate` | date-time | no |  |
| `AdditionalInfo` | string | yes |  |
| `PurchaseOrders` | [PurchaseOrders](PurchaseOrders.md) | no |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).PurchaseOrderHistory
- [PurchaseOrders](PurchaseOrders.md).PurchaseOrderHistory

# PurchaseOrderTask

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `PurchaseOrderId` | int32 | no |  |
| `OrderNo` | int32 | no |  |
| `MustApprove` | boolean | no |  |
| `ApproveCount` | int32 | no |  |
| `MaxApproveAmount` | double | yes |  |
| `TaskAction` | enum [PurchaseOrderTaskAction](PurchaseOrderTaskAction.md) | no |  |
| `TaskStatus` | enum [PurchaseOrderTaskStatus](PurchaseOrderTaskStatus.md) | no |  |
| `OrderStatus` | enum [PurchaseOrderStatus](PurchaseOrderStatus.md) | no |  |
| `Comment` | string | yes |  |
| `GroupMemberId` | int32 | no |  |
| `ModifiedDate` | date-time | no |  |
| `HeartBeatDateTime` | date-time | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `ParentPurchaseOrder` | [PurchaseOrders](PurchaseOrders.md) | no |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- POST /api/PurchaseOrders/GetPurchaseOrderTaskItems (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- [GroupMember](GroupMember.md).PurchaseOrderTasks
- [PurchaseOrders](PurchaseOrders.md).PurchaseOrderTasks

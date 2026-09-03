# PurchaseOrderTaskActionDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `TaskAction` | enum [PurchaseOrderTaskAction](PurchaseOrderTaskAction.md) | no |  |
| `Comment` | string | yes |  |
| `PurchaseOrderId` | int32 | no |  |
| `WorkflowTemplateId` | int32 | no |  |
| `GroupMemberId` | int32 | no |  |
| `PurchaseOrder` | [PurchaseOrdersDTO](PurchaseOrdersDTO.md) | no |  |
| `Tasks` | [PurchaseOrderTaskDTO](PurchaseOrderTaskDTO.md)[] | yes |  |

Used by:

- POST /api/PurchaseOrders/DoHeartBeat (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/DoTaskAction (request) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/PurchaseOrders/DoTaskAction (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/PurchaseOrders/InsertTaskAction (response) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/PurchaseOrders/ReassignToLast (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/RemoveTaskAction (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)

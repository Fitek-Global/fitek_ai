# PurchaseOrderTaskDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `PurchaseOrderId` | int32 | no |  |
| `OrderNo` | int32 | no |  |
| `MustApprove` | boolean | no |  |
| `ApproveCount` | int32 | no |  |
| `MaxApproveAmount` | double | yes |  |
| `TaskAction` | enum [PurchaseOrderTaskAction](PurchaseOrderTaskAction.md) | no |  |
| `TaskStatus` | enum [PurchaseOrderTaskStatus](PurchaseOrderTaskStatus.md) | no |  |
| `Comment` | string | yes |  |
| `GroupMemberId` | int32 | no |  |
| `FirstName` | string | yes |  |
| `LastName` | string | yes |  |
| `ModifiedDate` | date-time | no |  |
| `HeartBeatDateTime` | date-time | yes |  |
| `ModifiedBy` | int32 | no |  |
| `ToSubstituteName` | string | yes |  |
| `ToSubstituteId` | int32 | yes |  |
| `IsWorkflowCompleter` | boolean | no |  |
| `MonetaryLimit` | double | yes |  |
| `MonetaryCurrency` | string | yes |  |
| `ConvertedMonetaryLimit` | double | yes |  |
| `ConvertedMonetaryCurrency` | string | yes |  |

Used by:

- POST /api/PurchaseOrders/GetPurchaseOrderTaskItemsDto (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/UpdatePurchaseOrderTasks (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- [PurchaseOrderTaskActionDto](PurchaseOrderTaskActionDto.md).Tasks
- [PurchaseOrdersDTO](PurchaseOrdersDTO.md).PurchaseOrderTasks
- [UpdatePurchaseOrderTasksDto](UpdatePurchaseOrderTasksDto.md).Tasks

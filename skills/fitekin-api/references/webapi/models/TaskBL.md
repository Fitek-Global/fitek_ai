# TaskBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `WorkflowId` | int32 | no |  |
| `Completed` | boolean | no |  |
| `OrderNo` | int32 | no |  |
| `Comment` | string | yes |  |
| `CompletedDate` | date-time | yes |  |
| `CreatedBy` | int32 | yes |  |
| `ProcessedBy` | int32 | yes |  |
| `Status` | enum [TaskStatus](TaskStatus.md) | no |  |
| `GroupMember` | [GroupMemberBL](GroupMemberBL.md) | no |  |
| `Workflow` | [WorkflowBL](WorkflowBL.md) | no |  |
| `GroupMemberId` | int32 | no |  |

Used by:

- [WorkflowBL](WorkflowBL.md).Tasks

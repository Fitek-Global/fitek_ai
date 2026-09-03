# Task

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `WorkflowId` | int32 | no |  |
| `Completed` | boolean | no |  |
| `OrderNo` | int32 | no |  |
| `Comment` | string | yes |  |
| `CompletedDate` | date-time | yes |  |
| `CreatedBy` | int32 | yes |  |
| `ProcessedBy` | int32 | yes |  |
| `GroupMemberId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `Status` | enum [TaskStatus](TaskStatus.md) | no |  |
| `WorkflowGuid` | uuid | yes |  |
| `Workflow` | [Invoice](Invoice.md) | no |  |
| `CreatedByObj` | [GroupMember](GroupMember.md) | no |  |
| `ProcessedByObj` | [GroupMember](GroupMember.md) | no |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).CreatedTasks
- [GroupMember](GroupMember.md).ProcessedTasks
- [GroupMember](GroupMember.md).Tasks
- [Invoice](Invoice.md).Tasks

# WorkflowTaskMinDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Completed` | date-time | yes |  |
| `GroupMember` | [DashboardGroupMemberMinDTO](DashboardGroupMemberMinDTO.md) | no |  |
| `StatusLookupId` | int32 | no |  |
| `Comment` | string | yes |  |
| `ProcessedById` | int32 | yes |  |
| `ProcessedByName` | string | yes |  |

Used by:

- [WorkflowMinDTO](WorkflowMinDTO.md).Tasks

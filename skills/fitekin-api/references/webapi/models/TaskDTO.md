# TaskDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | yes |  |
| `IsNew` | boolean | no | read-only |
| `WorkflowId` | int32 | no |  |
| `Completed` | boolean | no |  |
| `OrderNo` | int32 | no |  |
| `Comment` | string | yes |  |
| `CompletedDate` | date-time | yes |  |
| `ProcessedBy` | int32 | yes |  |
| `StatusLookupId` | int32 | no |  |
| `GroupMember` | [GroupMemberDTO](GroupMemberDTO.md) | no |  |
| `GroupMemberId` | int32 | no |  |
| `ToSubstituteName` | string | yes |  |
| `displayAddAfterMeProp` | boolean | no |  |
| `displayAddBeforeMeProp` | boolean | no |  |
| `isCurrentConfirmer` | boolean | no |  |
| `CreatedBy` | int32 | yes |  |
| `CreatorName` | string | yes |  |

Used by:

- POST /api/Invoice/Approve (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/ApproveForCompany (response) — [MobileApp](../endpoints/MobileApp.md)
- [WorkflowDTO](WorkflowDTO.md).Tasks
- [WorkflowWithTasksDTO](WorkflowWithTasksDTO.md).Tasks

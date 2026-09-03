# WorkflowTemplateItemDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `WorkflowTemplateId` | int32 | no |  |
| `OrderNo` | int32 | no |  |
| `GroupMemberId` | int32 | no |  |
| `GroupMemberName` | string | yes |  |
| `ApproveCount` | int32 | no |  |
| `MustApprove` | boolean | no |  |
| `MaxApproveAmount` | double | yes |  |
| `IsWorkflowCompleter` | boolean | no |  |

Used by:

- POST /api/WorkflowTemplate/AddWorkflowTemplateItem (request) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- POST /api/WorkflowTemplate/AddWorkflowTemplateItem (response) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- [WorkflowTemplateDTO](WorkflowTemplateDTO.md).WorkflowTemplateItems

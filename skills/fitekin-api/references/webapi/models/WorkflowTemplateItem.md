# WorkflowTemplateItem

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `WorkflowTemplateId` | int32 | no |  |
| `OrderNo` | int32 | no |  |
| `GroupMemberId` | int32 | no |  |
| `MustApprove` | boolean | no |  |
| `ApproveCount` | int32 | no |  |
| `MaxApproveAmount` | double | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `WorkflowTemplate` | [WorkflowTemplate](WorkflowTemplate.md) | no |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).WorkflowTemplateItems
- [WorkflowTemplate](WorkflowTemplate.md).WorkflowTemplateItems

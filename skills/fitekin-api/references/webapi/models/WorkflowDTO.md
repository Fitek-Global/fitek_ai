# WorkflowDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `WorkflowTemplateId` | int32 | yes |  |
| `CurrentStep` | int32 | no | read-only |
| `CreatedById` | uuid | yes |  |
| `CreatedOn` | date-time | no |  |
| `Tasks` | [TaskDTO](TaskDTO.md)[] | yes |  |
| `GeneratedFrom` | [WorkflowTemplateDTO](WorkflowTemplateDTO.md) | no |  |
| `ApproversPerSteps` | [ApproversPerSteps](ApproversPerSteps.md)[] | yes |  |

Used by:

- POST /api/Invoice/ReplaceTasksInWorkflow (response) — [Invoice](../endpoints/Invoice.md)
- [InvoiceDTO](InvoiceDTO.md).Workflow

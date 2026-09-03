# WorkflowWithTasksDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | yes |  |
| `InvoiceId` | int32 | no |  |
| `Tasks` | [TaskDTO](TaskDTO.md)[] | yes |  |
| `ApproversPerSteps` | [ApproversPerSteps](ApproversPerSteps.md)[] | yes |  |

Used by:

- POST /api/Invoice/ReplaceTasksInWorkflow (request) — [Invoice](../endpoints/Invoice.md)

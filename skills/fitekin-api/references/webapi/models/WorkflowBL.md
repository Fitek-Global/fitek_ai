# WorkflowBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `WorkflowTemplateId` | int32 | yes |  |
| `CurrentStep` | int32 | no | read-only |
| `CreatedById` | uuid | yes |  |
| `CreatedOn` | date-time | no |  |
| `Tasks` | [TaskBL](TaskBL.md)[] | yes |  |
| `Invoice` | [InvoiceBL](InvoiceBL.md) | no |  |

Used by:

- [InvoiceBL](InvoiceBL.md).Workflow
- [TaskBL](TaskBL.md).Workflow

# WorkflowTemplate

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Name` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `InUse` | boolean | no |  |
| `IsActive` | boolean | no |  |
| `IsDynamic` | boolean | no |  |
| `Description` | string | yes |  |
| `ApproversPerSteps` | string | yes |  |
| `WorkflowTemplateItems` | [WorkflowTemplateItem](WorkflowTemplateItem.md)[] | yes |  |
| `AutoTransactions` | [AutoTransactions](AutoTransactions.md)[] | yes |  |

Used by:

- [AutoTransactions](AutoTransactions.md).WorkflowTemplate
- [WorkflowTemplateItem](WorkflowTemplateItem.md).WorkflowTemplate

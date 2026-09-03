# WorkflowTemplateDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Name` | string | yes |  |
| `WorkflowTemplateItems` | [WorkflowTemplateItemDTO](WorkflowTemplateItemDTO.md)[] | yes |  |
| `InUse` | boolean | no |  |
| `IsActive` | boolean | no |  |
| `IsDynamic` | boolean | no |  |
| `Description` | string | yes |  |
| `ApproversPerSteps` | [ApproversPerSteps](ApproversPerSteps.md)[] | yes |  |
| `UniqId` | uuid | yes |  |

Used by:

- GET /api/WorkflowTemplate/GetById/{id} (response) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- POST /api/WorkflowTemplate/AddWorkflowTemplate (request) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- POST /api/WorkflowTemplate/DeleteTemplates (request) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- POST /api/WorkflowTemplate/UpdateTemplates (request) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- POST /api/WorkflowTemplate/UpdateTemplates (response) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- POST /api/WorkflowTemplate/UpdateWorkflowTemplate (request) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- [AutoTransactionsDTO](AutoTransactionsDTO.md).WorkflowTemplate
- [CompanyDataDTO](CompanyDataDTO.md).WorkflowTemplates
- [WorkflowDTO](WorkflowDTO.md).GeneratedFrom
- [WorkflowTemplateDTOPagedListContainer](WorkflowTemplateDTOPagedListContainer.md).Items

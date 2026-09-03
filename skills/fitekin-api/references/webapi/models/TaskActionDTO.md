# TaskActionDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `TaskId` | int32 | no |  |
| `Comment` | string | yes |  |
| `NextConfirmerGroupMemberOrWorkflowTemplateId` | int32 | no |  |
| `IsNextConfirmerWorkflowTemplate` | boolean | no |  |
| `Action` | string | yes |  |
| `InvoiceId` | int32 | no |  |

Used by:

- POST /api/Invoice/Approve (request) — [Invoice](../endpoints/Invoice.md)

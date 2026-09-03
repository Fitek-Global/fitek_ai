# Response

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Success` | boolean | no |  |
| `Message` | string | yes |  |
| `Errors` | [ResponseError](ResponseError.md)[] | yes |  |
| `ResultObject` | object | yes |  |

Used by:

- GET /api/Invoice/ApplyAiToTransactionRows (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Notification/NotifyConfirmerForInvoice (response) — [Notification](../endpoints/Notification.md)
- POST /api/Receiver/Delete (response) — [Receiver](../endpoints/Receiver.md)
- POST /api/User/ChangeUserPassword (response) — [User](../endpoints/User.md)
- POST /api/WorkflowTemplate/AddWorkflowTemplate (response) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- POST /api/WorkflowTemplate/UpdateWorkflowTemplate (response) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)

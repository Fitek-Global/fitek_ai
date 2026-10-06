# DataExchangeModel.Payloads.ConfirmationWorkflowStepPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `stepNo` | int32 | no | required |
| `stepType` | [DataExchangeModel.Payloads.ConfirmationWorkflowStepType](ConfirmationWorkflowStepType.md) | no | required |
| `usersGuids` | null,array | no |  |
| `requiredConfirmations` | int32 | no |  |

Used by:

- [DataExchangeModel.Payloads.InvoiceConfirmationPayload](InvoiceConfirmationPayload.md).workflowSteps

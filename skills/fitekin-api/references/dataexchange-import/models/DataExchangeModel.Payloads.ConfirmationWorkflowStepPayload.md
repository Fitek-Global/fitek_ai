# DataExchangeModel.Payloads.ConfirmationWorkflowStepPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `stepNo` | int32 | no | required |
| `stepType` | [DataExchangeModel.Payloads.ConfirmationWorkflowStepType](DataExchangeModel.Payloads.ConfirmationWorkflowStepType.md) | no | required |
| `usersGuids` | null,array | no |  |
| `requiredConfirmations` | int32 | no |  |

Used by:

- [DataExchangeModel.Payloads.InvoiceConfirmationPayload](DataExchangeModel.Payloads.InvoiceConfirmationPayload.md).workflowSteps

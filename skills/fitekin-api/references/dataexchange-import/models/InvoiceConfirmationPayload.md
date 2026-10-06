# DataExchangeModel.Payloads.InvoiceConfirmationPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `internalInvoiceId` | int32 | no |  |
| `internalInvoiceGuid` | uuid | no |  |
| `userGuid` | uuid | no | required |
| `confirmationFlowAction` | [DataExchangeModel.Payloads.ConfirmationAction](ConfirmationAction.md) | no | required |
| `comment` | null,string | no | max 500 |
| `usersGuids` | null,array | no |  |
| `workflowSteps` | null,array | no |  |

Used by:

- [DataExchangeModel.General.Input.ImportRequest`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](ImportRequest_InvoiceConfirmationPayload.md).payload
- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](AddedEntry_InvoiceConfirmationPayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](EntryDeleted_InvoiceConfirmationPayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](SkippedEntry_InvoiceConfirmationPayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](UpdatedEntry_InvoiceConfirmationPayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](UpdatedEntry_InvoiceConfirmationPayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](ValidationErrorEntry_InvoiceConfirmationPayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](ValidationWarningEntry_InvoiceConfirmationPayload.md).warningEntryPayload

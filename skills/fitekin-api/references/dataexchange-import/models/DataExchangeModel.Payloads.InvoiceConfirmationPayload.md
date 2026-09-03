# DataExchangeModel.Payloads.InvoiceConfirmationPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `internalInvoiceId` | int32 | no |  |
| `internalInvoiceGuid` | uuid | no |  |
| `userGuid` | uuid | no | required |
| `confirmationFlowAction` | [DataExchangeModel.Payloads.ConfirmationAction](DataExchangeModel.Payloads.ConfirmationAction.md) | no | required |
| `comment` | null,string | no | max 500 |
| `usersGuids` | null,array | no |  |
| `workflowSteps` | null,array | no |  |

Used by:

- [DataExchangeModel.General.Input.ImportRequest`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](DataExchangeModel.General.Input.ImportRequest_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md).payload
- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](DataExchangeModel.General.Output.AddedEntry_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](DataExchangeModel.General.Output.EntryDeleted_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](DataExchangeModel.General.Output.SkippedEntry_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](DataExchangeModel.General.Output.ValidationErrorEntry_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](DataExchangeModel.General.Output.ValidationWarningEntry_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md).warningEntryPayload

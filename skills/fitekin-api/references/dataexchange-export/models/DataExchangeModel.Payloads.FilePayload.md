# DataExchangeModel.Payloads.FilePayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `internalInvoiceId` | null,string | no |  |
| `internalInvoiceGuid` | uuid | no |  |
| `fileName` | null,string | no | required |
| `fileBase64` | null,string | no |  |
| `url` | null,string | no |  |
| `fileType` | object | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.FilePayload]](DataExchangeModel.General.Output.AddedEntry_1_DataExchangeModel.Payloads.FilePayload_.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.FilePayload]](DataExchangeModel.General.Output.EntryDeleted_1_DataExchangeModel.Payloads.FilePayload_.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.FilePayload]](DataExchangeModel.General.Output.SkippedEntry_1_DataExchangeModel.Payloads.FilePayload_.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.FilePayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.FilePayload_.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.FilePayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.FilePayload_.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.FilePayload]](DataExchangeModel.General.Output.ValidationErrorEntry_1_DataExchangeModel.Payloads.FilePayload_.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.FilePayload]](DataExchangeModel.General.Output.ValidationWarningEntry_1_DataExchangeModel.Payloads.FilePayload_.md).warningEntryPayload
- [DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.FilePayload]](DataExchangeModel.Requests.FileImportRequest_1_DataExchangeModel.Payloads.FilePayload_.md).payload

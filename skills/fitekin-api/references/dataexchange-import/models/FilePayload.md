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

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.FilePayload]](AddedEntry_FilePayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.FilePayload]](EntryDeleted_FilePayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.FilePayload]](SkippedEntry_FilePayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.FilePayload]](UpdatedEntry_FilePayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.FilePayload]](UpdatedEntry_FilePayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.FilePayload]](ValidationErrorEntry_FilePayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.FilePayload]](ValidationWarningEntry_FilePayload.md).warningEntryPayload
- [DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.FilePayload]](FileImportRequest_FilePayload.md).payload

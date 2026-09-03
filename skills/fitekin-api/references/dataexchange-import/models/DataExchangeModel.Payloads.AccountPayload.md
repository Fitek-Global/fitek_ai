# DataExchangeModel.Payloads.AccountPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `code` | null,string | no | required; max 50 |
| `description` | null,string | no | required; max 200 |
| `startDate` | null,string | no |  |
| `endDate` | null,string | no |  |
| `mandatoryCostObjectiveCodes` | null,array | no |  |
| `objectExtensions` | null,array | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.AccountPayload]](DataExchangeModel.General.Output.AddedEntry_1_DataExchangeModel.Payloads.AccountPayload_.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.AccountPayload]](DataExchangeModel.General.Output.EntryDeleted_1_DataExchangeModel.Payloads.AccountPayload_.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.AccountPayload]](DataExchangeModel.General.Output.SkippedEntry_1_DataExchangeModel.Payloads.AccountPayload_.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.AccountPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.AccountPayload_.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.AccountPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.AccountPayload_.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.AccountPayload]](DataExchangeModel.General.Output.ValidationErrorEntry_1_DataExchangeModel.Payloads.AccountPayload_.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.AccountPayload]](DataExchangeModel.General.Output.ValidationWarningEntry_1_DataExchangeModel.Payloads.AccountPayload_.md).warningEntryPayload
- [DataExchangeModel.Requests.AccountImportRequest`1[DataExchangeModel.Payloads.AccountPayload]](DataExchangeModel.Requests.AccountImportRequest_1_DataExchangeModel.Payloads.AccountPayload_.md).payload
- [DataExchangeModel.Requests.AccountImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.AccountPayload]]](DataExchangeModel.Requests.AccountImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.AccountPayload__.md).payload

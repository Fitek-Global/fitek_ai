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

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.AccountPayload]](AddedEntry_AccountPayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.AccountPayload]](EntryDeleted_AccountPayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.AccountPayload]](SkippedEntry_AccountPayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.AccountPayload]](UpdatedEntry_AccountPayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.AccountPayload]](UpdatedEntry_AccountPayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.AccountPayload]](ValidationErrorEntry_AccountPayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.AccountPayload]](ValidationWarningEntry_AccountPayload.md).warningEntryPayload
- [DataExchangeModel.Requests.AccountImportRequest`1[DataExchangeModel.Payloads.AccountPayload]](AccountImportRequest_AccountPayload.md).payload
- [DataExchangeModel.Requests.AccountImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.AccountPayload]]](AccountImportRequest_List_AccountPayload.md).payload

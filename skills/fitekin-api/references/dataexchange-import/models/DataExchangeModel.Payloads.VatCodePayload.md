# DataExchangeModel.Payloads.VatCodePayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `code` | null,string | no | required; max 50 |
| `description` | null,string | no | required; max 200 |
| `vatRate` | double | no | required; min -100; max 100 |
| `isDefault` | boolean | no |  |
| `startDate` | null,string | no |  |
| `endDate` | null,string | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.VatCodePayload]](DataExchangeModel.General.Output.AddedEntry_1_DataExchangeModel.Payloads.VatCodePayload_.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.VatCodePayload]](DataExchangeModel.General.Output.EntryDeleted_1_DataExchangeModel.Payloads.VatCodePayload_.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.VatCodePayload]](DataExchangeModel.General.Output.SkippedEntry_1_DataExchangeModel.Payloads.VatCodePayload_.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.VatCodePayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.VatCodePayload_.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.VatCodePayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.VatCodePayload_.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.VatCodePayload]](DataExchangeModel.General.Output.ValidationErrorEntry_1_DataExchangeModel.Payloads.VatCodePayload_.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.VatCodePayload]](DataExchangeModel.General.Output.ValidationWarningEntry_1_DataExchangeModel.Payloads.VatCodePayload_.md).warningEntryPayload
- [DataExchangeModel.Requests.VatCodeImportRequest`1[DataExchangeModel.Payloads.VatCodePayload]](DataExchangeModel.Requests.VatCodeImportRequest_1_DataExchangeModel.Payloads.VatCodePayload_.md).payload
- [DataExchangeModel.Requests.VatCodeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.VatCodePayload]]](DataExchangeModel.Requests.VatCodeImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.VatCodePayload__.md).payload

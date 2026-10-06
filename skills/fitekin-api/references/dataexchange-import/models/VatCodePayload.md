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

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.VatCodePayload]](AddedEntry_VatCodePayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.VatCodePayload]](EntryDeleted_VatCodePayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.VatCodePayload]](SkippedEntry_VatCodePayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.VatCodePayload]](UpdatedEntry_VatCodePayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.VatCodePayload]](UpdatedEntry_VatCodePayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.VatCodePayload]](ValidationErrorEntry_VatCodePayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.VatCodePayload]](ValidationWarningEntry_VatCodePayload.md).warningEntryPayload
- [DataExchangeModel.Requests.VatCodeImportRequest`1[DataExchangeModel.Payloads.VatCodePayload]](VatCodeImportRequest_VatCodePayload.md).payload
- [DataExchangeModel.Requests.VatCodeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.VatCodePayload]]](VatCodeImportRequest_List_VatCodePayload.md).payload

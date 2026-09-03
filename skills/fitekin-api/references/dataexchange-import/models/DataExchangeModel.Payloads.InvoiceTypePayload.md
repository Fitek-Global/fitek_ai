# DataExchangeModel.Payloads.InvoiceTypePayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `type` | [ModelCommon.InvType](ModelCommon.InvType.md) | no | required |
| `code` | null,string | no | required; max 50 |
| `description` | null,string | no | required; max 200 |
| `isDefault` | boolean | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](DataExchangeModel.General.Output.AddedEntry_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.InvoiceTypePayload]](DataExchangeModel.General.Output.EntryDeleted_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](DataExchangeModel.General.Output.SkippedEntry_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](DataExchangeModel.General.Output.ValidationErrorEntry_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](DataExchangeModel.General.Output.ValidationWarningEntry_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md).warningEntryPayload
- [DataExchangeModel.Requests.InvoiceTypeImportRequest`1[DataExchangeModel.Payloads.InvoiceTypePayload]](DataExchangeModel.Requests.InvoiceTypeImportRequest_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md).payload
- [DataExchangeModel.Requests.InvoiceTypeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceTypePayload]]](DataExchangeModel.Requests.InvoiceTypeImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.InvoiceTypePayload__.md).payload

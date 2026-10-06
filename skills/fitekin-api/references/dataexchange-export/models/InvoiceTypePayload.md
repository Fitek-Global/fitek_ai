# DataExchangeModel.Payloads.InvoiceTypePayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `type` | [ModelCommon.InvType](InvType.md) | no | required |
| `code` | null,string | no | required; max 50 |
| `description` | null,string | no | required; max 200 |
| `isDefault` | boolean | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](AddedEntry_InvoiceTypePayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.InvoiceTypePayload]](EntryDeleted_InvoiceTypePayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](SkippedEntry_InvoiceTypePayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](UpdatedEntry_InvoiceTypePayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](UpdatedEntry_InvoiceTypePayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](ValidationErrorEntry_InvoiceTypePayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.InvoiceTypePayload]](ValidationWarningEntry_InvoiceTypePayload.md).warningEntryPayload
- [DataExchangeModel.Requests.InvoiceTypeImportRequest`1[DataExchangeModel.Payloads.InvoiceTypePayload]](InvoiceTypeImportRequest_InvoiceTypePayload.md).payload
- [DataExchangeModel.Requests.InvoiceTypeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceTypePayload]]](InvoiceTypeImportRequest_List_InvoiceTypePayload.md).payload

# DataExchangeModel.Payloads.SupplierPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `country` | null,string | no |  |
| `name` | null,string | no | required; max 256 |
| `registrationCode` | null,string | no | required; max 50 |
| `vatCode` | null,string | no | max 20 |
| `erpCode` | null,string | no | max 50 |
| `supplierContactPerson` | [DataExchangeModel.Payloads.ContactPerson](DataExchangeModel.Payloads.ContactPerson.md) | no |  |
| `bankAccounts` | null,array | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.SupplierPayload]](DataExchangeModel.General.Output.AddedEntry_1_DataExchangeModel.Payloads.SupplierPayload_.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.SupplierPayload]](DataExchangeModel.General.Output.EntryDeleted_1_DataExchangeModel.Payloads.SupplierPayload_.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.SupplierPayload]](DataExchangeModel.General.Output.SkippedEntry_1_DataExchangeModel.Payloads.SupplierPayload_.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.SupplierPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.SupplierPayload_.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.SupplierPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.SupplierPayload_.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.SupplierPayload]](DataExchangeModel.General.Output.ValidationErrorEntry_1_DataExchangeModel.Payloads.SupplierPayload_.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.SupplierPayload]](DataExchangeModel.General.Output.ValidationWarningEntry_1_DataExchangeModel.Payloads.SupplierPayload_.md).warningEntryPayload
- [DataExchangeModel.Requests.SupplierImportRequest`1[DataExchangeModel.Payloads.SupplierPayload]](DataExchangeModel.Requests.SupplierImportRequest_1_DataExchangeModel.Payloads.SupplierPayload_.md).payload
- [DataExchangeModel.Requests.SupplierImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.SupplierPayload]]](DataExchangeModel.Requests.SupplierImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.SupplierPayload__.md).payload

# DataExchangeModel.Payloads.SupplierPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `country` | null,string | no |  |
| `name` | null,string | no | required; max 256 |
| `registrationCode` | null,string | no | required; max 50 |
| `vatCode` | null,string | no | max 20 |
| `erpCode` | null,string | no | max 50 |
| `supplierContactPerson` | [DataExchangeModel.Payloads.ContactPerson](ContactPerson.md) | no |  |
| `bankAccounts` | null,array | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.SupplierPayload]](AddedEntry_SupplierPayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.SupplierPayload]](EntryDeleted_SupplierPayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.SupplierPayload]](SkippedEntry_SupplierPayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.SupplierPayload]](UpdatedEntry_SupplierPayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.SupplierPayload]](UpdatedEntry_SupplierPayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.SupplierPayload]](ValidationErrorEntry_SupplierPayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.SupplierPayload]](ValidationWarningEntry_SupplierPayload.md).warningEntryPayload
- [DataExchangeModel.Requests.SupplierImportRequest`1[DataExchangeModel.Payloads.SupplierPayload]](SupplierImportRequest_SupplierPayload.md).payload
- [DataExchangeModel.Requests.SupplierImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.SupplierPayload]]](SupplierImportRequest_List_SupplierPayload.md).payload

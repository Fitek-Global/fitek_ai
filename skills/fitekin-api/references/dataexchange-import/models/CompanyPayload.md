# DataExchangeModel.Payloads.CompanyPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `country` | null,string | no | required |
| `name` | null,string | no | required; max 256 |
| `registrationCode` | null,string | no | required; max 50 |
| `vatCode` | null,string | no | max 15 |
| `notes` | null,string | no | max 256 |
| `skTaxId` | null,string | no |  |
| `administratorAccount` | [DataExchangeModel.Payloads.AdministratorAccount](AdministratorAccount.md) | no | required |
| `platformId` | int32 | no |  |
| `clientUuid` | null,string | no |  |
| `clientNumber` | int32 | no |  |
| `clientId` | int32 | no |  |

Used by:

- [DataExchangeModel.General.Input.CompanyImportRequest`1[DataExchangeModel.Payloads.CompanyPayload]](CompanyImportRequest_CompanyPayload.md).payload
- [DataExchangeModel.General.Input.CompanyImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.CompanyPayload]]](CompanyImportRequest_List_CompanyPayload.md).payload
- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.CompanyPayload]](AddedEntry_CompanyPayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.CompanyPayload]](EntryDeleted_CompanyPayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.CompanyPayload]](SkippedEntry_CompanyPayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.CompanyPayload]](UpdatedEntry_CompanyPayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.CompanyPayload]](UpdatedEntry_CompanyPayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.CompanyPayload]](ValidationErrorEntry_CompanyPayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.CompanyPayload]](ValidationWarningEntry_CompanyPayload.md).warningEntryPayload

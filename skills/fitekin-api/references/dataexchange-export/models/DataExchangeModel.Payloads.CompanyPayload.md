# DataExchangeModel.Payloads.CompanyPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `country` | null,string | no | required |
| `name` | null,string | no | required; max 256 |
| `registrationCode` | null,string | no | required; max 50 |
| `vatCode` | null,string | no | max 15 |
| `notes` | null,string | no | max 256 |
| `skTaxId` | null,string | no |  |
| `administratorAccount` | [DataExchangeModel.Payloads.AdministratorAccount](DataExchangeModel.Payloads.AdministratorAccount.md) | no | required |
| `platformId` | int32 | no |  |
| `clientUuid` | null,string | no |  |
| `clientNumber` | int32 | no |  |
| `clientId` | int32 | no |  |

Used by:

- [DataExchangeModel.General.Input.CompanyImportRequest`1[DataExchangeModel.Payloads.CompanyPayload]](DataExchangeModel.General.Input.CompanyImportRequest_1_DataExchangeModel.Payloads.CompanyPayload_.md).payload
- [DataExchangeModel.General.Input.CompanyImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.CompanyPayload]]](DataExchangeModel.General.Input.CompanyImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.CompanyPayload__.md).payload
- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.CompanyPayload]](DataExchangeModel.General.Output.AddedEntry_1_DataExchangeModel.Payloads.CompanyPayload_.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.CompanyPayload]](DataExchangeModel.General.Output.EntryDeleted_1_DataExchangeModel.Payloads.CompanyPayload_.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.CompanyPayload]](DataExchangeModel.General.Output.SkippedEntry_1_DataExchangeModel.Payloads.CompanyPayload_.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.CompanyPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.CompanyPayload_.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.CompanyPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.CompanyPayload_.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.CompanyPayload]](DataExchangeModel.General.Output.ValidationErrorEntry_1_DataExchangeModel.Payloads.CompanyPayload_.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.CompanyPayload]](DataExchangeModel.General.Output.ValidationWarningEntry_1_DataExchangeModel.Payloads.CompanyPayload_.md).warningEntryPayload

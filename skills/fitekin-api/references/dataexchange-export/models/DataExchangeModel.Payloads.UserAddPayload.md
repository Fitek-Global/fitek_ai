# DataExchangeModel.Payloads.UserAddPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `country` | null,string | no |  |
| `personalCode` | null,string | no | max 16 |
| `email` | null,string | no |  |
| `firstName` | null,string | no | required; max 64 |
| `lastName` | null,string | no | required; max 64 |
| `isActive` | null,boolean | no |  |
| `enabled` | null,boolean | no |  |
| `membershipStartDate` | null,string | no |  |
| `membershipEndDate` | null,string | no |  |
| `roles` | null,array | no |  |
| `confirmationMonetaryLimitAmount` | int32 | no | min 0; max 999999999 |
| `confirmationMonetaryLimitCurrency` | null,string | no |  |
| `emailLastValidated` | date-time | no |  |
| `externalId` | null,string | no |  |
| `language` | null,string | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.UserAddPayload]](DataExchangeModel.General.Output.AddedEntry_1_DataExchangeModel.Payloads.UserAddPayload_.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.UserAddPayload]](DataExchangeModel.General.Output.EntryDeleted_1_DataExchangeModel.Payloads.UserAddPayload_.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.UserAddPayload]](DataExchangeModel.General.Output.SkippedEntry_1_DataExchangeModel.Payloads.UserAddPayload_.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.UserAddPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.UserAddPayload_.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.UserAddPayload]](DataExchangeModel.General.Output.UpdatedEntry_1_DataExchangeModel.Payloads.UserAddPayload_.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.UserAddPayload]](DataExchangeModel.General.Output.ValidationErrorEntry_1_DataExchangeModel.Payloads.UserAddPayload_.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.UserAddPayload]](DataExchangeModel.General.Output.ValidationWarningEntry_1_DataExchangeModel.Payloads.UserAddPayload_.md).warningEntryPayload
- [DataExchangeModel.Requests.UserAddRequest`1[DataExchangeModel.Payloads.UserAddPayload]](DataExchangeModel.Requests.UserAddRequest_1_DataExchangeModel.Payloads.UserAddPayload_.md).payload
- [DataExchangeModel.Requests.UserAddRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.UserAddPayload]]](DataExchangeModel.Requests.UserAddRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.UserAddPayload__.md).payload

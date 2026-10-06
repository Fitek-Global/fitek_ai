# DataExchangeModel.Payloads.CompanyMembershipPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `userEntryNumber` | int32 | no |  |
| `authorizationToken` | uuid | no |  |
| `companyName` | null,string | no |  |
| `email` | null,string | no |  |
| `externalId` | null,string | no |  |
| `userGuid` | uuid | no |  |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](AddedEntry_CompanyMembershipPayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](EntryDeleted_CompanyMembershipPayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](SkippedEntry_CompanyMembershipPayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](UpdatedEntry_CompanyMembershipPayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](UpdatedEntry_CompanyMembershipPayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](ValidationErrorEntry_CompanyMembershipPayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](ValidationWarningEntry_CompanyMembershipPayload.md).warningEntryPayload

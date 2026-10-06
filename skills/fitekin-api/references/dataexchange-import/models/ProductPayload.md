# DataExchangeModel.Payloads.ProductPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `buyerProductCode` | null,string | no | required; max 50 |
| `description` | null,string | no | max 200 |
| `sellerProductCodes` | null,array | no | max 50 |

Used by:

- [DataExchangeModel.General.Output.AddedEntry`1[DataExchangeModel.Payloads.ProductPayload]](AddedEntry_ProductPayload.md).addedEntryPayload
- [DataExchangeModel.General.Output.EntryDeleted`1[DataExchangeModel.Payloads.ProductPayload]](EntryDeleted_ProductPayload.md).deletedEntryPayload
- [DataExchangeModel.General.Output.SkippedEntry`1[DataExchangeModel.Payloads.ProductPayload]](SkippedEntry_ProductPayload.md).skippedEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.ProductPayload]](UpdatedEntry_ProductPayload.md).oldEntryPayload
- [DataExchangeModel.General.Output.UpdatedEntry`1[DataExchangeModel.Payloads.ProductPayload]](UpdatedEntry_ProductPayload.md).updatedEntryPayload
- [DataExchangeModel.General.Output.ValidationErrorEntry`1[DataExchangeModel.Payloads.ProductPayload]](ValidationErrorEntry_ProductPayload.md).validationErrorPayload
- [DataExchangeModel.General.Output.ValidationWarningEntry`1[DataExchangeModel.Payloads.ProductPayload]](ValidationWarningEntry_ProductPayload.md).warningEntryPayload
- [DataExchangeModel.Requests.ProductImportRequest`1[DataExchangeModel.Payloads.ProductPayload]](ProductImportRequest_ProductPayload.md).payload
- [DataExchangeModel.Requests.ProductImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.ProductPayload]]](ProductImportRequest_List_ProductPayload.md).payload

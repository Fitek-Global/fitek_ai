# ImportResponse

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `RequestId` | uuid | no |  |
| `RequestSource` | enum [eRequestSource](eRequestSource.md) | no |  |
| `VersionNumber` | int32 | no |  |
| `RequestReceivedDateTimeUTC` | date-time | no |  |
| `RequestCompletedDateTimeUTC` | date-time | no |  |
| `GeneralErrorDescription` | string | yes |  |
| `EntriesReceived` | int32 | no |  |
| `EntriesFailed` | int32 | no |  |
| `EntriesValidated` | int32 | no |  |
| `Summary` | [ImportResult](ImportResult.md)[] | yes |  |
| `ValidationErrors` | [ImportParseMessage](ImportParseMessage.md)[] | yes |  |
| `ValidationWarnings` | [ImportParseMessage](ImportParseMessage.md)[] | yes |  |

Used by:

- GET /api/VatCode/UploadCSVFile2 (response) — [VatCode](../endpoints/VatCode.md)
- POST /api/Account/UploadAccountFile (response) — [Account](../endpoints/Account.md)
- POST /api/Account/UploadCSVFile (response) — [Account](../endpoints/Account.md)
- POST /api/Account/UploadCSVFile2 (response) — [Account](../endpoints/Account.md)
- POST /api/CustomCostObjective/UploadCSVFile2 (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/UploadDimensionFile (response) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/ProductItem/UploadProductItemFile (response) — [ProductItem](../endpoints/ProductItem.md)
- POST /api/Supplier/UploadSupplierFile (response) — [Supplier](../endpoints/Supplier.md)
- POST /api/VatCode/UploadCSVFile (response) — [VatCode](../endpoints/VatCode.md)
- POST /api/VatCode/UploadVatCodeFile (response) — [VatCode](../endpoints/VatCode.md)

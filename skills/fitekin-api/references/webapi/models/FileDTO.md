# FileDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | yes |  |
| `FileName` | string | yes |  |
| `IsPdf` | boolean | no |  |
| `IsImported` | boolean | no |  |
| `IsOriginal` | boolean | no |  |
| `FileType` | int32 | yes |  |
| `InvoiceId` | int32 | yes |  |
| `DownloadUrl` | string | yes |  |
| `FileUrl` | string | yes |  |
| `Base64Content` | string | yes |  |
| `ForceImport` | boolean | yes |  |
| `PathToFile` | string | yes |  |
| `HubType` | int32 | no |  |
| `FileSize` | int32 | no |  |
| `OcrGuid` | uuid | yes |  |

Used by:

- GET /api/File/GetInvoiceRelatedDocuments (response) — [File](../endpoints/File.md)
- POST /api/Account/UploadAccountFile (request) — [Account](../endpoints/Account.md)
- POST /api/Account/UploadCSVFile (request) — [Account](../endpoints/Account.md)
- POST /api/CustomCostObjective/UploadDimensionFile (request) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/Invoice/DeleteInvoiceFile (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/ImportTransactionRowsXls (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/UploadInvoiceFile (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/ProductItem/UploadCSVFile (request) — [ProductItem](../endpoints/ProductItem.md)
- POST /api/ProductItem/UploadProductItemFile (request) — [ProductItem](../endpoints/ProductItem.md)
- POST /api/RelatedDimensions/UploadRelatedDimensionsFile (request) — [RelatedDimensions](../endpoints/RelatedDimensions.md)
- POST /api/Supplier/UploadCSVFile (request) — [Supplier](../endpoints/Supplier.md)
- POST /api/Supplier/UploadSupplierFile (request) — [Supplier](../endpoints/Supplier.md)
- POST /api/TransactionRow/UploadTransactionRowsFile/{invoiceId} (request) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/VatCode/UploadCSVFile (request) — [VatCode](../endpoints/VatCode.md)
- POST /api/VatCode/UploadVatCodeFile (request) — [VatCode](../endpoints/VatCode.md)
- [InvoiceDTO](InvoiceDTO.md).DocumentFiles
- [MinInvoiceWithRowsAndFilesDTO](MinInvoiceWithRowsAndFilesDTO.md).DocumentFiles

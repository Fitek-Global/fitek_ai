# SalesInvoiceFileDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | yes |  |
| `FileName` | string | yes |  |
| `IsPdf` | boolean | no |  |
| `IsImported` | boolean | no |  |
| `IsOriginal` | boolean | no |  |
| `InvoiceId` | int32 | yes |  |
| `DownloadUrl` | string | yes |  |
| `FileUrl` | string | yes |  |
| `Base64Content` | string | yes |  |
| `ForceImport` | boolean | yes |  |
| `PathToFile` | string | yes |  |
| `HubType` | int32 | no |  |
| `FileSize` | int32 | no |  |

Used by:

- [SalesInvoiceDTO](SalesInvoiceDTO.md).DocumentFiles

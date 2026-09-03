# SalesInvoiceFile

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `FileName` | string | yes |  |
| `Content` | byte | yes |  |
| `CompanyGuid` | uuid | yes |  |
| `FileType` | enum [FileType](FileType.md) | no |  |
| `IsPdf` | boolean | no |  |
| `IsImported` | boolean | no |  |
| `IsOriginal` | boolean | no |  |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `FileUrl` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `PathToFile` | string | yes |  |
| `FileSize` | int64 | no |  |
| `SalesInvoice` | [SalesInvoice](SalesInvoice.md) | no |  |

Used by:

- [SalesInvoice](SalesInvoice.md).DocumentFiles

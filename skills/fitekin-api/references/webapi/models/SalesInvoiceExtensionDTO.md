# SalesInvoiceExtensionDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `ExtensionId` | string | yes |  |
| `InformationName` | string | yes |  |
| `InformationContent` | string | yes |  |
| `ExtensionType` | int32 | no |  |
| `ExtensionPartType` | int32 | yes |  |
| `ExtensionPartOrder` | int32 | yes |  |

Used by:

- [SalesInvoiceDTO](SalesInvoiceDTO.md).SalesInvoiceExtensions
- [SalesInvoiceRowDTO](SalesInvoiceRowDTO.md).SalesInvoiceItemReserves

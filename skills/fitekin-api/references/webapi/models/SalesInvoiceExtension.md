# SalesInvoiceExtension

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceGuid` | uuid | yes |  |
| `InvoiceId` | int32 | no |  |
| `ExtensionId` | string | yes |  |
| `InformationName` | string | yes |  |
| `InformationContent` | string | yes |  |
| `ExtensionType` | int32 | no |  |
| `ExtensionPartType` | int32 | yes |  |
| `ExtensionPartOrder` | int32 | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `SalesInvoice` | [SalesInvoice](SalesInvoice.md) | no |  |
| `SalesInvoiceRow` | [SalesInvoiceRow](SalesInvoiceRow.md) | no |  |

Used by:

- [SalesInvoiceRow](SalesInvoiceRow.md).SalesInvoiceItemReserves
- [SalesInvoice](SalesInvoice.md).SalesInvoiceExtensions

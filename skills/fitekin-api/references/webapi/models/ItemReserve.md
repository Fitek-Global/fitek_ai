# ItemReserve

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `extensionId` | string | yes |  |
| `InformationName` | string | yes |  |
| `InformationContent` | string | yes |  |
| `InvoiceRowId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceRow` | [InvoiceRow](InvoiceRow.md) | no |  |

Used by:

- [InvoiceRow](InvoiceRow.md).ItemReserve

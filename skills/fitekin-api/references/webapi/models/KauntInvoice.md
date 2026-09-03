# KauntInvoice

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceGuid` | uuid | yes |  |
| `LastModified` | date-time | no |  |
| `ModifiedBy` | int32 | yes |  |
| `Invoice` | [Invoice](Invoice.md) | no |  |

Used by:

- [Invoice](Invoice.md).KauntInvoice

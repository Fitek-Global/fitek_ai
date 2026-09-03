# InvoiceRowDiscount

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceRowId` | int32 | no |  |
| `Type` | int32 | no |  |
| `Description` | string | yes |  |
| `Rate` | double | yes |  |
| `Amount` | double | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceRow` | [InvoiceRow](InvoiceRow.md) | no |  |

Used by:

- [InvoiceRow](InvoiceRow.md).InvoiceRowDiscounts

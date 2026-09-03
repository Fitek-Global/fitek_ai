# InvoiceRowDiscountBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceRowId` | int32 | no |  |
| `Type` | enum [InvoiceRowDiscountType](InvoiceRowDiscountType.md) | no |  |
| `Description` | string | yes |  |
| `Rate` | double | yes |  |
| `Amount` | double | yes |  |

Used by:

- [InvoiceRowBL](InvoiceRowBL.md).InvoiceRowDiscounts

# InvoiceRowDiscountDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceRowId` | int32 | no |  |
| `Type` | enum [InvoiceRowDiscountType](InvoiceRowDiscountType.md) | no |  |
| `Description` | string | yes |  |
| `Rate` | double | yes |  |
| `Amount` | double | yes |  |

Used by:

- [InvoiceRowDTO](InvoiceRowDTO.md).InvoiceRowDiscounts

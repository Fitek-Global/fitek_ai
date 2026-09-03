# PaymentMethodBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `InvoiceTypes` | enum [PaymentMethodInvoiceType](PaymentMethodInvoiceType.md) | no |  |
| `IsDefault` | boolean | no |  |

Used by:

- [InvoiceBL](InvoiceBL.md).PaymentMethod

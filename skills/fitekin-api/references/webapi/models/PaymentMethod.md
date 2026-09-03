# PaymentMethod

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `InvoiceTypes` | enum [PaymentMethodInvoiceType](PaymentMethodInvoiceType.md) | no |  |
| `IsDefault` | boolean | no |  |
| `ModifiedBy` | int32 | yes |  |
| `Invoice` | [Invoice](Invoice.md)[] | yes |  |

Used by:

- [Invoice](Invoice.md).PaymentMethod

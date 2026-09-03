# InvoiceType

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Type` | enum [InvType](InvType.md) | no |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `IsDefault` | boolean | no |  |
| `ModifiedBy` | int32 | yes |  |
| `Invoice` | [Invoice](Invoice.md)[] | yes |  |

Used by:

- [Invoice](Invoice.md).InvoiceType

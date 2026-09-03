# InvoiceTypeBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `Type` | enum [InvType](InvType.md) | no |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `IsDefault` | boolean | no |  |

Used by:

- [InvoiceBL](InvoiceBL.md).InvoiceType

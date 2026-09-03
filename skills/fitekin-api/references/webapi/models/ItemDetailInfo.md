# ItemDetailInfo

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ItemUnit` | string | yes |  |
| `ItemAmount` | double | no |  |
| `ItemPrice` | double | no |  |
| `InvoiceRowId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceRow` | [InvoiceRow](InvoiceRow.md) | no |  |

Used by:

- [InvoiceRow](InvoiceRow.md).ItemDetailInfo

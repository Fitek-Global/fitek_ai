# ItemDetailInfoBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `ItemUnit` | string | yes |  |
| `ItemAmount` | double | no |  |
| `ItemPrice` | double | no |  |
| `InvoiceRowId` | int32 | no |  |

Used by:

- [InvoiceRowBL](InvoiceRowBL.md).ItemDetailInfo

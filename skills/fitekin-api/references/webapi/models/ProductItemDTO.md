# ProductItemDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `IsUsed` | boolean | no |  |
| `FullName` | string | yes | read-only |
| `SellerCodes` | [ProductItemSellerCodeDTO](ProductItemSellerCodeDTO.md)[] | yes |  |

Used by:

- GET /api/InvoiceRow/GetProductItems (response) — [InvoiceRow](../endpoints/InvoiceRow.md)
- POST /api/ProductItem/SaveItem (request) — [ProductItem](../endpoints/ProductItem.md)
- [ProductItemDTOPagedListContainer](ProductItemDTOPagedListContainer.md).Items

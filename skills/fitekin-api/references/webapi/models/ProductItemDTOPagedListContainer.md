# ProductItemDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [ProductItemDTO](ProductItemDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- POST /api/ProductItem/DeleteItem (response) — [ProductItem](../endpoints/ProductItem.md)
- POST /api/ProductItem/GetList (response) — [ProductItem](../endpoints/ProductItem.md)
- POST /api/ProductItem/UploadCSVFile (response) — [ProductItem](../endpoints/ProductItem.md)

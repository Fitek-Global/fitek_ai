# FilterDto

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | uuid | yes |  |
| `Field` | string | yes |  |
| `Math` | enum [eFilterMath](eFilterMath.md) | no |  |
| `Value` | object | yes |  |
| `FilterName` | string | yes |  |
| `Description` | string | yes |  |
| `FiltersAnd` | [FilterDto](FilterDto.md)[] | yes |  |
| `FiltersOr` | [FilterDto](FilterDto.md)[] | yes |  |
| `IsSystem` | boolean | yes |  |

Used by:

- GET /api/Filter/DeleteFilter (response) — [Filter](../endpoints/Filter.md)
- GET /api/Filter/GetAllFilters (response) — [Filter](../endpoints/Filter.md)
- GET /api/Filter/GetFilter (response) — [Filter](../endpoints/Filter.md)
- GET /api/Filter/RecreateSystemFilters (response) — [Filter](../endpoints/Filter.md)
- POST /api/Filter/SetFilter (request) — [Filter](../endpoints/Filter.md)
- POST /api/Filter/SetFilter (response) — [Filter](../endpoints/Filter.md)
- POST /api/PurchaseOrders/CountOfFindByFilter (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/FindByFilter (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- [FilterDto](FilterDto.md).FiltersAnd
- [FilterDto](FilterDto.md).FiltersOr

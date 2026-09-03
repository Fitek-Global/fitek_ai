# RelatedDimensionsDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `SourceCode` | string | yes |  |
| `SourceValue` | string | yes |  |
| `DestinationCode` | string | yes |  |
| `DestinationValue` | string | yes |  |

Used by:

- POST /api/RelatedDimensions/GetListForCustomField (request) — [RelatedDimensions](../endpoints/RelatedDimensions.md)
- POST /api/RelatedDimensions/GetListForCustomField (response) — [RelatedDimensions](../endpoints/RelatedDimensions.md)
- [RelatedDimensionsDTOPagedListContainer](RelatedDimensionsDTOPagedListContainer.md).Items

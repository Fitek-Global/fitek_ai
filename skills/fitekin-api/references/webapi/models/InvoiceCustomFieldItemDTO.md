# InvoiceCustomFieldItemDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `IsNew` | boolean | no | read-only |
| `Id` | int32 | no |  |
| `InvoiceCustomFieldId` | int32 | no |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `InUse` | boolean | no |  |

Used by:

- GET /api/Company/GetInvoiceCustomFieldItems/{id} (response) — [Company](../endpoints/Company.md)
- POST /api/Company/AddInvoiceCustomFieldItem (request) — [Company](../endpoints/Company.md)
- [InvoiceCustomFieldDTO](InvoiceCustomFieldDTO.md).InvoiceCustomFieldItems
- [InvoiceCustomFieldItemDTOPagedListContainer](InvoiceCustomFieldItemDTOPagedListContainer.md).Items

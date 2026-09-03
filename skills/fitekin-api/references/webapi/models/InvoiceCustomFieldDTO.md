# InvoiceCustomFieldDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `IsMandatory` | boolean | no |  |
| `IncludeInExport` | boolean | no |  |
| `AllowEditingAfterExport` | boolean | no |  |
| `FieldType` | enum [InvoiceFieldType](InvoiceFieldType.md) | no |  |
| `CountInUse` | int32 | no |  |
| `InvoiceCustomFieldItems` | [InvoiceCustomFieldItemDTO](InvoiceCustomFieldItemDTO.md)[] | yes |  |

Used by:

- GET /api/Company/GetInvoiceCustomFieldWithItems (response) — [Company](../endpoints/Company.md)
- GET /api/Company/GetInvoiceCustomFieldsAll (response) — [Company](../endpoints/Company.md)
- GET /api/Company/GetInvoiceCustomFieldsWithoutItems (response) — [Company](../endpoints/Company.md)
- POST /api/Company/AddInvoiceCustomField (request) — [Company](../endpoints/Company.md)
- POST /api/Company/AddInvoiceCustomField (response) — [Company](../endpoints/Company.md)
- POST /api/Company/AddInvoiceCustomFieldItem (response) — [Company](../endpoints/Company.md)
- [CustomizationDTO](CustomizationDTO.md).Customization
- [InvoiceCustomFieldDTOPagedListContainer](InvoiceCustomFieldDTOPagedListContainer.md).Items

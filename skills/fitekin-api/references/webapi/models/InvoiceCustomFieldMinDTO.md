# InvoiceCustomFieldMinDTO

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

Used by:

- [InvoiceCustomizationDTO](InvoiceCustomizationDTO.md).Customization

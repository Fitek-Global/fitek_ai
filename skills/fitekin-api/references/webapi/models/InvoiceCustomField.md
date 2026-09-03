# InvoiceCustomField

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `IsMandatory` | boolean | no |  |
| `IncludeInExport` | boolean | no |  |
| `AllowEditingAfterExport` | boolean | no |  |
| `FieldType` | enum [InvoiceFieldType](InvoiceFieldType.md) | no |  |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceCustomFieldItems` | [InvoiceCustomFieldItem](InvoiceCustomFieldItem.md)[] | yes |  |
| `InvoiceCustomizations` | [InvoiceCustomization](InvoiceCustomization.md)[] | yes |  |
| `AutoTransactionsCustomFields` | [AutoTransactionsCustomFields](AutoTransactionsCustomFields.md)[] | yes |  |

Used by:

- [AutoTransactionsCustomFields](AutoTransactionsCustomFields.md).InvoiceCustomField
- [InvoiceCustomFieldItem](InvoiceCustomFieldItem.md).InvoiceCustomField
- [InvoiceCustomization](InvoiceCustomization.md).Customization

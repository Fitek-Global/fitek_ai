# InvoiceCustomization

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | yes |  |
| `CustomizationId` | int32 | no |  |
| `InvoiceCustomFieldItemId` | int32 | yes |  |
| `Value` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `Customization` | [InvoiceCustomField](InvoiceCustomField.md) | no |  |
| `InvoiceCustomFieldItem` | [InvoiceCustomFieldItem](InvoiceCustomFieldItem.md) | no |  |
| `Invoice` | [Invoice](Invoice.md) | no |  |

Used by:

- [InvoiceCustomField](InvoiceCustomField.md).InvoiceCustomizations
- [Invoice](Invoice.md).InvoiceCustomization

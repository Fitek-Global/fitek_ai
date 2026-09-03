# InvoiceCustomFieldItem

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceCustomFieldId` | int32 | no |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceCustomField` | [InvoiceCustomField](InvoiceCustomField.md) | no |  |

Used by:

- [AutoTransactionsCustomFields](AutoTransactionsCustomFields.md).InvoiceCustomFieldItem
- [InvoiceCustomField](InvoiceCustomField.md).InvoiceCustomFieldItems
- [InvoiceCustomization](InvoiceCustomization.md).InvoiceCustomFieldItem

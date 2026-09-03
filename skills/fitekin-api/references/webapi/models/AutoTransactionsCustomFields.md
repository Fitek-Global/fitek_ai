# AutoTransactionsCustomFields

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `AutoTransactionId` | int32 | no |  |
| `CustomizationId` | int32 | no |  |
| `InvoiceCustomFieldItemId` | int32 | yes |  |
| `Value` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `AutoTransaction` | [AutoTransactions](AutoTransactions.md) | no |  |
| `InvoiceCustomField` | [InvoiceCustomField](InvoiceCustomField.md) | no |  |
| `InvoiceCustomFieldItem` | [InvoiceCustomFieldItem](InvoiceCustomFieldItem.md) | no |  |

Used by:

- [AutoTransactions](AutoTransactions.md).AutoTransactionsCustomFields
- [InvoiceCustomField](InvoiceCustomField.md).AutoTransactionsCustomFields

# AutoTransactionsCustomFieldsDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `AutoTransactionId` | int32 | no |  |
| `CustomizationId` | int32 | no |  |
| `CustomizationCode` | string | yes |  |
| `CustomizationName` | string | yes |  |
| `CustomizationType` | enum [InvoiceFieldType](InvoiceFieldType.md) | no |  |
| `Value` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |

Used by:

- [AutoTransactionUiObjectDTO](AutoTransactionUiObjectDTO.md).AutoTransactionsCustomFields

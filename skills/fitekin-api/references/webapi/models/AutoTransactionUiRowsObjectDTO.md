# AutoTransactionUiRowsObjectDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `AutoTransactionId` | int32 | no |  |
| `Conditions` | [AutoTransactionUiRowSearchConditionDTO](AutoTransactionUiRowSearchConditionDTO.md)[] | yes |  |
| `Comment` | string | yes |  |
| `OrderNo` | int32 | no |  |
| `CombinationOption` | int32 | yes |  |
| `VatRates` | [AutoTransactionUiVatRate](AutoTransactionUiVatRate.md)[] | yes |  |

Used by:

- [AutoTransactionUiObjectDTO](AutoTransactionUiObjectDTO.md).AutoTransactionsRows

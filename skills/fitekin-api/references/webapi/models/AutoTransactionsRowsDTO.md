# AutoTransactionsRowsDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `AutoTransactionId` | int32 | no |  |
| `RowSearchString` | string | yes |  |
| `RowSearchConditions` | string | yes |  |
| `Percentage` | double | no |  |
| `FixedSum` | double | yes |  |
| `AllocationDescription` | string | yes |  |
| `AllocationComment` | string | yes |  |
| `AccountId` | int32 | yes |  |
| `VatCodeId` | int32 | yes |  |
| `VatCodeRate` | double | yes |  |
| `Comment` | string | yes |  |
| `OrderNo` | int32 | no |  |
| `AutoTransactionsRowsDimensions` | [AutoTransactionsRowsDimensionsDTO](AutoTransactionsRowsDimensionsDTO.md)[] | yes |  |

Used by:

- [AutoTransactionsDTO](AutoTransactionsDTO.md).AutoTransactionsRows

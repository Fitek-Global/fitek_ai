# VatCodeBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `Code` | string | yes |  |
| `VatRate` | double | no |  |
| `Description` | string | yes |  |
| `IsDefault` | boolean | no |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |

Used by:

- [TransactionRowBL](TransactionRowBL.md).VatCode

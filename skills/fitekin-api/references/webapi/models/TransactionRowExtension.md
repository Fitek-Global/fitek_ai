# TransactionRowExtension

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `extensionId` | string | yes |  |
| `InformationName` | string | yes |  |
| `InformationContent` | string | yes |  |
| `TransactionRowId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `TransactionRow` | [TransactionRow](TransactionRow.md) | no |  |

Used by:

- [TransactionRow](TransactionRow.md).TransactionRowExtensions

# TransactionRowExtensionBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `extensionId` | string | yes |  |
| `InformationName` | string | yes |  |
| `InformationContent` | string | yes |  |
| `TransactionRowId` | int32 | no |  |

Used by:

- [TransactionRowBL](TransactionRowBL.md).TransactionRowExtensions

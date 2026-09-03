# History

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | yes |  |
| `GroupMemberId` | int32 | yes |  |
| `ActionId` | enum [HistoryAction](HistoryAction.md) | no |  |
| `LogDate` | date-time | yes |  |
| `AdditionalInfo` | string | yes |  |
| `Parameter` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `KauntObjectName` | string | yes |  |
| `Invoice` | [Invoice](Invoice.md) | no |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).History
- [Invoice](Invoice.md).History

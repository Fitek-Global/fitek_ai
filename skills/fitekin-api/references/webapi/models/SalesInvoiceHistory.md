# SalesInvoiceHistory

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `GroupMemberId` | int32 | yes |  |
| `ActionId` | enum [SalesInvoiceHistoryAction](SalesInvoiceHistoryAction.md) | no |  |
| `LogDate` | date-time | no |  |
| `AdditionalInfo` | string | yes |  |
| `SalesInvoice` | [SalesInvoice](SalesInvoice.md) | no |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).SalesInvoiceHistory
- [SalesInvoice](SalesInvoice.md).SalesInvoiceHistory

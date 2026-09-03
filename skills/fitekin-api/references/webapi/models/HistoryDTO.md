# HistoryDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `GroupMemberId` | int32 | yes |  |
| `GroupMemberName` | string | yes |  |
| `ActionId` | enum [HistoryAction](HistoryAction.md) | no |  |
| `LogDate` | date-time | no |  |
| `AdditionalInfo` | string | yes |  |
| `Parameter` | string | yes |  |

Used by:

- GET /api/Invoice/GetInvoiceHistory (response) — [Invoice](../endpoints/Invoice.md)

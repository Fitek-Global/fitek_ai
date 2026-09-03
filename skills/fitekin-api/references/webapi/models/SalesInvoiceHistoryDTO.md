# SalesInvoiceHistoryDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `GroupMemberId` | int32 | yes |  |
| `ActionId` | enum [SalesInvoiceHistoryAction](SalesInvoiceHistoryAction.md) | no |  |
| `LogDate` | date-time | no |  |
| `AdditionalInfo` | string | yes |  |
| `FullName` | string | yes |  |
| `GroupMember` | [GroupMemberDTO](GroupMemberDTO.md) | no |  |

Used by:

- POST /api/SalesInvoice/GetSalesInvoiceHistory (response) — [SalesInvoice](../endpoints/SalesInvoice.md)
- [SalesInvoiceDTO](SalesInvoiceDTO.md).SalesInvoiceHistory

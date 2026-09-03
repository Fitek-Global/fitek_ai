# AuditHistoryEntryDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `EventDate` | date-time | no |  |
| `AuditAction` | string | yes |  |
| `Field` | string | yes |  |
| `OldValue` | string | yes |  |
| `NewValue` | string | yes |  |
| `ModifiedBy` | [GroupMemberDTO](GroupMemberDTO.md) | no |  |

Used by:

- GET /api/Invoice/GetInvoiceHeaderChanges/{id} (response) — [Invoice](../endpoints/Invoice.md)

# TransactionRowHistoryDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Changes` | [ChangeDto](ChangeDto.md)[] | yes |  |
| `AuditId` | int64 | no |  |
| `AuditAction` | string | yes |  |
| `AuditDate` | date-time | no |  |
| `AuditApp` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `ModifiedByUserFullName` | string | yes |  |

Used by:

- GET /api/TransactionRow/GetRowHistory/{id} (response) — [TransactionRow](../endpoints/TransactionRow.md)

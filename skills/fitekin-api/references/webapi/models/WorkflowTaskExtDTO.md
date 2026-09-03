# WorkflowTaskExtDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Completed` | date-time | yes |  |
| `GroupMember` | [DashboardGroupMemberMinDTO](DashboardGroupMemberMinDTO.md) | no |  |
| `StatusLookupId` | int32 | no |  |
| `Comment` | string | yes |  |
| `ProcessedById` | int32 | yes |  |
| `ProcessedByName` | string | yes |  |
| `OrderNo` | int32 | no |  |
| `CanAddBefore` | boolean | no |  |
| `CanAddAfter` | boolean | no |  |
| `IsCurrentConfirmer` | boolean | no |  |

Used by:

- GET /api/Invoice/GetInvoiceTaskItemsById (response) — [Invoice](../endpoints/Invoice.md)

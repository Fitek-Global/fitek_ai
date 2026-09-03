# AutoTransactionListMinDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsActive` | boolean | no |  |
| `RuleName` | string | yes |  |
| `SupplierName` | string | yes |  |
| `LastRun` | date-time | yes |  |
| `LastInvoice` | [LastRunInvoiceMinDTO](LastRunInvoiceMinDTO.md) | no |  |
| `Triggers` | [TriggerMinDTO](TriggerMinDTO.md)[] | yes |  |

Used by:

- [AutoTransactionListMinDTOPagedListContainer](AutoTransactionListMinDTOPagedListContainer.md).Items

# AutoTransactions

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `RuleName` | string | yes |  |
| `RuleDescription` | string | yes |  |
| `SupplierId` | int32 | yes |  |
| `ReferenceNumber` | string | yes | read-only |
| `IsActive` | boolean | no |  |
| `LastRun` | date-time | yes |  |
| `LastInvoiceId` | int32 | yes |  |
| `LastInvoiceGuid` | uuid | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `StopProcessing` | boolean | no |  |
| `WorkflowTemplateId` | int32 | yes |  |
| `RecreateTransactionRows` | boolean | no |  |
| `Supplier` | [Supplier](Supplier.md) | no |  |
| `LastInvoice` | [Invoice](Invoice.md) | no |  |
| `WorkflowTemplate` | [WorkflowTemplate](WorkflowTemplate.md) | no |  |
| `AutoTransactionsRows` | [AutoTransactionsRows](AutoTransactionsRows.md)[] | yes |  |
| `AutoTransactionsTriggers` | [AutoTransactionsTriggers](AutoTransactionsTriggers.md)[] | yes |  |
| `AutoTransactionsCustomFields` | [AutoTransactionsCustomFields](AutoTransactionsCustomFields.md)[] | yes |  |

Used by:

- [AutoTransactionsCustomFields](AutoTransactionsCustomFields.md).AutoTransaction
- [AutoTransactionsRows](AutoTransactionsRows.md).AutoTransaction
- [AutoTransactionsTriggers](AutoTransactionsTriggers.md).AutoTransaction
- [Invoice](Invoice.md).AutoTransactions
- [Supplier](Supplier.md).AutoTransactions
- [WorkflowTemplate](WorkflowTemplate.md).AutoTransactions

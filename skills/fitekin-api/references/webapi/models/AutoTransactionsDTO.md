# AutoTransactionsDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `RuleName` | string | yes |  |
| `RuleDescription` | string | yes |  |
| `SupplierId` | int32 | no |  |
| `Supplier` | [SupplierDTO](SupplierDTO.md) | no |  |
| `ReferenceNumber` | string | yes |  |
| `IsActive` | boolean | no |  |
| `LastRun` | date-time | yes |  |
| `LastInvoiceId` | int32 | yes |  |
| `LastInvoice` | [InvoiceDTO](InvoiceDTO.md) | no |  |
| `ModifiedBy` | int32 | no |  |
| `StopProcessing` | boolean | no |  |
| `WorkflowTemplateId` | int32 | yes |  |
| `WorkflowTemplate` | [WorkflowTemplateDTO](WorkflowTemplateDTO.md) | no |  |
| `ReferenceNumberMatchType` | int32 | yes |  |
| `CompanyMatchType` | int32 | yes |  |
| `RecreateTransactionRows` | boolean | no |  |
| `AutoTransactionsRows` | [AutoTransactionsRowsDTO](AutoTransactionsRowsDTO.md)[] | yes |  |
| `AutoTransactionsTriggers` | [AutoTransactionsTriggersDTO](AutoTransactionsTriggersDTO.md)[] | yes |  |

Used by:

- GET /api/AutoTransactions/DuplicateAutoTransaction (response) — [AutoTransactions](../endpoints/AutoTransactions.md)
- [AutoTransactionsDTOPagedListContainer](AutoTransactionsDTOPagedListContainer.md).Items

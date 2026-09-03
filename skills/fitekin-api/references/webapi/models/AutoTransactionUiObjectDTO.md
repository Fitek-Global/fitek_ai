# AutoTransactionUiObjectDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `RuleName` | string | yes |  |
| `RuleDescription` | string | yes |  |
| `Beneficiary` | string | yes |  |
| `SupplierId` | int32 | yes |  |
| `Supplier` | [SupplierDTO](SupplierDTO.md) | no |  |
| `ReferenceNumber` | string | yes |  |
| `IsActive` | boolean | no |  |
| `LastRun` | date-time | yes |  |
| `LastInvoiceId` | int32 | yes |  |
| `LastInvoice` | [InvoiceDTO](InvoiceDTO.md) | no |  |
| `ModifiedBy` | int32 | yes |  |
| `StopProcessing` | boolean | no |  |
| `RecreateTransactionRows` | boolean | no |  |
| `AutoTransactionsRows` | [AutoTransactionUiRowsObjectDTO](AutoTransactionUiRowsObjectDTO.md)[] | yes |  |
| `Triggers` | [AutoTransactionsTriggersDTO](AutoTransactionsTriggersDTO.md)[] | yes |  |
| `AutoTransactionsCustomFields` | [AutoTransactionsCustomFieldsDTO](AutoTransactionsCustomFieldsDTO.md)[] | yes |  |
| `WorkflowAssignments` | [WorkflowAssingment](WorkflowAssingment.md)[] | yes |  |

Used by:

- GET /api/AutoTransactions/GetAutoTransactionForUiById (response) — [AutoTransactions](../endpoints/AutoTransactions.md)
- GET /api/AutoTransactions/GetAutoTransactionSnapshotForInvoice (response) — [AutoTransactions](../endpoints/AutoTransactions.md)
- GET /api/AutoTransactions/GetEmptyUiObject (response) — [AutoTransactions](../endpoints/AutoTransactions.md)
- POST /api/AutoTransactions/CreateFromRecommendation (response) — [AutoTransactions](../endpoints/AutoTransactions.md)
- POST /api/AutoTransactions/SaveAutoTransaction (request) — [AutoTransactions](../endpoints/AutoTransactions.md)
- POST /api/AutoTransactions/SaveAutoTransaction (response) — [AutoTransactions](../endpoints/AutoTransactions.md)

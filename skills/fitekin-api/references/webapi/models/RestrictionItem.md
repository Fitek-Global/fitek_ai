# RestrictionItem

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Field` | string | yes |  |
| `Value` | object | yes |  |
| `Values` | object[] | yes |  |
| `FieldSearchType` | enum [SearchType](SearchType.md) | no |  |

Used by:

- POST /api/Account/ExportAccountsToCSV (request) — [Account](../endpoints/Account.md)
- POST /api/Account/ExportAccountsToXls (request) — [Account](../endpoints/Account.md)
- POST /api/CustomCostObjective/ExportDimensionsToCSV (request) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/CustomCostObjective/ExportDimensionsToXls (request) — [CustomCostObjective](../endpoints/CustomCostObjective.md)
- POST /api/VatCode/ExportVatCodesToCSV (request) — [VatCode](../endpoints/VatCode.md)
- POST /api/VatCode/ExportVatCodesToXls (request) — [VatCode](../endpoints/VatCode.md)
- POST /api/WorkflowTemplate/ExportWorkflowTemplatesToCsv (request) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- POST /api/WorkflowTemplate/ExportWorkflowTemplatesToXls (request) — [WorkflowTemplate](../endpoints/WorkflowTemplate.md)
- [BaseSearch](BaseSearch.md).Restrictions
- [InvoiceSearchOptions](InvoiceSearchOptions.md).Restrictions

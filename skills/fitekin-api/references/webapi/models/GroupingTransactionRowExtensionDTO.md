# GroupingTransactionRowExtensionDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `InformationName` | string | yes |  |
| `ContentCount` | int32 | no |  |
| `RowsCount` | int32 | no |  |

Used by:

- GET /api/TransactionRow/GetTransactionRowsExtendedInfoList/{id} (response) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/Invoice/MergeAccountingRowsByTransactionRowExtension/{id} (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/MergeTransactionRowsByTransactionRowExtensionV2/{id} (request) — [Invoice](../endpoints/Invoice.md)

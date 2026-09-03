# TransactionRowsImportFileResultDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Count` | int32 | no |  |
| `MonetaryValuesWereRecalculated` | boolean | no |  |
| `CustomCostObjectives` | string[] | yes |  |
| `Dimensions` | string[] | yes |  |

Used by:

- POST /api/TransactionRow/UploadTransactionRowsFile/{invoiceId} (response) — [TransactionRow](../endpoints/TransactionRow.md)

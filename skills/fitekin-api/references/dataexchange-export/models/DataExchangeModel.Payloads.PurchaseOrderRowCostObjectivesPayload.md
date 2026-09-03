# DataExchangeModel.Payloads.PurchaseOrderRowCostObjectivesPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `rowNumber` | int32 | no | required |
| `description` | null,string | no | max 500 |
| `qty` | double | no |  |
| `unit` | null,string | no | max 100 |
| `price` | double | no |  |
| `net` | double | no |  |
| `vatRate` | double | no |  |
| `vat` | double | no |  |
| `total` | double | no |  |
| `costObjectives` | null,array | no |  |

Used by:

- POST /PurchaseOrderCostObjectives (response) — [Export](../endpoints/Export.md)

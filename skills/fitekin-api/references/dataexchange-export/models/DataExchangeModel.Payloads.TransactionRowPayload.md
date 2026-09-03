# DataExchangeModel.Payloads.TransactionRowPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `rowNumber` | int32 | no | required |
| `description` | null,string | no | required; max 500 |
| `comment` | null,string | no | max 200 |
| `accountingDate` | date-time | no |  |
| `productItems` | [DataExchangeModel.Payloads.ProductItemPayload](DataExchangeModel.Payloads.ProductItemPayload.md) | no |  |
| `net` | double | no | required |
| `vatRate` | double | no |  |
| `vat` | double | no |  |
| `total` | double | no |  |
| `costObjectives` | null,array | no |  |

Used by:

- POST /TransactionRows (response) — [Export](../endpoints/Export.md)
- [DataExchangeModel.Requests.TransactionRowsImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.TransactionRowPayload]]](DataExchangeModel.Requests.TransactionRowsImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.TransactionRowPayload__.md).payload

# DataExchangeModel.Payloads.TransactionRowPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `rowNumber` | int32 | no | required |
| `description` | null,string | no | required; max 500 |
| `comment` | null,string | no | max 200 |
| `accountingDate` | date-time | no |  |
| `productItems` | [DataExchangeModel.Payloads.ProductItemPayload](ProductItemPayload.md) | no |  |
| `net` | double | no | required |
| `vatRate` | double | no |  |
| `vat` | double | no |  |
| `total` | double | no |  |
| `costObjectives` | null,array | no |  |

Used by:

- [DataExchangeModel.Requests.TransactionRowsImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.TransactionRowPayload]]](TransactionRowsImportRequest_List_TransactionRowPayload.md).payload

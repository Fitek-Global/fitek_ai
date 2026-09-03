# TransactionRowDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Description` | string | yes |  |
| `UnitLookupId` | int32 | no |  |
| `VAT` | double | no |  |
| `VatRate` | double | no |  |
| `Total` | double | no |  |
| `InvoiceId` | int32 | no |  |
| `OrderNo` | int32 | yes |  |
| `ItemUnit` | string | yes |  |
| `ItemAmount` | double | yes |  |
| `ItemPrice` | double | yes |  |
| `BuyerProductId` | string | yes |  |
| `SerialNumber` | string | yes |  |
| `SumWithoutVat` | double | no |  |
| `Comment` | string | yes |  |
| `AccountDescription` | string | yes |  |
| `AccountingDate` | date-time | yes |  |
| `SellerProductId` | string | yes |  |
| `TaricCode` | string | yes |  |
| `CustomerRef` | string | yes |  |
| `EAN` | string | yes |  |
| `AccountId` | int32 | yes |  |
| `VatCodeId` | int32 | yes |  |
| `VatCode` | [VatCodeDTO](VatCodeDTO.md) | no |  |
| `Account` | [AccountDTO](AccountDTO.md) | no |  |
| `AccountCode` | string | yes |  |
| `TransactionRowsDimensions` | [TransactionRowsDimensionDTO](TransactionRowsDimensionDTO.md)[] | yes |  |
| `TransactionRowExtensions` | [TransactionRowExtensionDTO](TransactionRowExtensionDTO.md)[] | yes |  |
| `TransactionRowChangeSource` | [TransactionRowChangeSourceDTO](TransactionRowChangeSourceDTO.md) | no |  |
| `BuyerProductName` | string | yes |  |
| `InvoiceRowHistory` | string | yes |  |

Used by:

- GET /api/ArchiveInvoice/GetInvoiceTransactionRows/{id} (response) — [ArchiveInvoice](../endpoints/ArchiveInvoice.md)
- GET /api/Invoice/GetInvoiceTransactionRows/{id} (response) — [Invoice](../endpoints/Invoice.md)
- GET /api/TransactionRow/GetById (response) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/Invoice/UpdateAccount (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/TransactionRow/AddTransactionRow (request) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/TransactionRow/AddTransactionRow (response) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/TransactionRow/GetByIds (response) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/TransactionRow/UpdateComment/{id} (response) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/TransactionRow/UpdateDate/{id} (response) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/TransactionRow/UpdateTransactionRow (response) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/TransactionRow/UpdateVatCode (request) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/TransactionRow/UpdateVatCode (response) — [TransactionRow](../endpoints/TransactionRow.md)
- POST /api/TransactionRow/UpdateVatCodeV2 (response) — [TransactionRow](../endpoints/TransactionRow.md)
- [TransactionRowDTOPagedListContainer](TransactionRowDTOPagedListContainer.md).Items
- [TransactionRowSplitDTO](TransactionRowSplitDTO.md).AccountDistributionItem

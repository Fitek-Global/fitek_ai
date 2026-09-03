# InvoiceRowDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `SumWithoutVat` | double | no |  |
| `VAT` | double | no |  |
| `Total` | double | no |  |
| `VatRate` | double | no |  |
| `Currency` | string | yes |  |
| `Description` | string | yes |  |
| `InvoiceId` | int32 | no |  |
| `AccountingRowId` | int32 | yes |  |
| `SerialNumber` | string | yes |  |
| `SellerProductId` | string | yes |  |
| `BuyerProductId` | string | yes |  |
| `BuyerProductName` | string | yes |  |
| `TaricCode` | string | yes |  |
| `CustomerRef` | string | yes |  |
| `EAN` | string | yes |  |
| `GroupId` | string | yes |  |
| `Amount` | int32 | no |  |
| `InitialReading` | string | yes |  |
| `FinalReading` | string | yes |  |
| `ItemSum` | double | yes |  |
| `OrderNo` | int32 | no |  |
| `ImportError` | boolean | no |  |
| `ItemReserve` | [ItemReserveDTO](ItemReserveDTO.md)[] | yes |  |
| `ItemDetailInfo` | [ItemDetailInfoDTO](ItemDetailInfoDTO.md)[] | yes |  |
| `InvoiceRowDiscounts` | [InvoiceRowDiscountDTO](InvoiceRowDiscountDTO.md)[] | yes |  |

Used by:

- GET /api/ArchiveInvoice/GetInvoiceRowsById/{id} (response) — [ArchiveInvoice](../endpoints/ArchiveInvoice.md)
- GET /api/InvoiceRow/GetInvoiceRowsById/{id} (response) — [InvoiceRow](../endpoints/InvoiceRow.md)
- POST /api/Invoice/AddInvoiceRow (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/AddInvoiceRow (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/DeleteInvoiceRow (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/InvoiceRow/UpdateInvoiceRow (request) — [InvoiceRow](../endpoints/InvoiceRow.md)
- [InvoiceDTO](InvoiceDTO.md).InvoiceRows
- [InvoiceRowDTOPagedListContainer](InvoiceRowDTOPagedListContainer.md).Items
- [MinInvoiceWithRowsAndFilesDTO](MinInvoiceWithRowsAndFilesDTO.md).InvoiceRows

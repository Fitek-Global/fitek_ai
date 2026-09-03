# SalesInvoiceRowDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `OrderNo` | int32 | no |  |
| `Description` | string | yes |  |
| `ItemAmount` | double | no |  |
| `ItemUnit` | string | yes |  |
| `ItemPrice` | double | no |  |
| `SumWithoutVat` | double | no |  |
| `VAT` | double | no |  |
| `VatRate` | double | no |  |
| `Total` | double | no |  |
| `UniqId` | uuid | no |  |
| `ModifiedBy` | int32 | yes |  |
| `SerialNumber` | string | yes |  |
| `SellerProductId` | string | yes |  |
| `BuyerProductId` | string | yes |  |
| `TaricCode` | string | yes |  |
| `CustomerRef` | string | yes |  |
| `EAN` | string | yes |  |
| `InitialReading` | string | yes |  |
| `FinalReading` | string | yes |  |
| `ItemUnitLocalFieldId` | int32 | yes |  |
| `TaxTypeLocalFieldId` | int32 | yes |  |
| `SalesInvoiceAdditions` | [SalesInvoiceAdditionDTO](SalesInvoiceAdditionDTO.md)[] | yes |  |
| `SalesInvoiceItemReserves` | [SalesInvoiceExtensionDTO](SalesInvoiceExtensionDTO.md)[] | yes |  |
| `ItemUnitLocalField` | [LocalFieldDTO](LocalFieldDTO.md) | no |  |
| `TaxTypeLocalField` | [LocalFieldDTO](LocalFieldDTO.md) | no |  |

Used by:

- GET /api/SalesInvoiceRow/GetById (response) — [SalesInvoiceRow](../endpoints/SalesInvoiceRow.md)
- POST /api/SalesInvoiceRow/Add (request) — [SalesInvoiceRow](../endpoints/SalesInvoiceRow.md)
- POST /api/SalesInvoiceRow/Add (response) — [SalesInvoiceRow](../endpoints/SalesInvoiceRow.md)
- POST /api/SalesInvoiceRow/Update (request) — [SalesInvoiceRow](../endpoints/SalesInvoiceRow.md)
- POST /api/SalesInvoiceRow/Update (response) — [SalesInvoiceRow](../endpoints/SalesInvoiceRow.md)
- POST /api/SalesInvoiceRow/UpdateSalesInvoiceRow (request) — [SalesInvoiceRow](../endpoints/SalesInvoiceRow.md)
- [SalesInvoiceDTO](SalesInvoiceDTO.md).SalesInvoiceRows
- [SalesInvoiceRowDTOPagedListContainer](SalesInvoiceRowDTOPagedListContainer.md).Items
- [SalesInvoiceRowWithTotalNumbersDTO](SalesInvoiceRowWithTotalNumbersDTO.md).SalesInvoiceRow

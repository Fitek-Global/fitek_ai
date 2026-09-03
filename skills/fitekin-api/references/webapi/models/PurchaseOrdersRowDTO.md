# PurchaseOrdersRowDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `PurchaseOrderId` | int32 | no |  |
| `Description` | string | yes |  |
| `VatCodeId` | int32 | yes |  |
| `Quantity` | double | yes |  |
| `Unit` | string | yes |  |
| `UnitPrice` | double | yes |  |
| `SumWithoutVat` | double | yes |  |
| `Vat` | double | yes |  |
| `VatAmount` | double | yes |  |
| `Total` | double | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `VatCode` | [VatCodeDTO](VatCodeDTO.md) | no |  |
| `PurchaseOrdersRowsDimensions` | [PurchaseOrdersRowsDimensionDTO](PurchaseOrdersRowsDimensionDTO.md)[] | yes |  |

Used by:

- GET /api/PurchaseOrders/GetPurchaseOrderRows/{poId} (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/DeletePurchaseOrderRow (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/SavePurchaseOrderRow/{poId} (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- [PurchaseOrdersDTO](PurchaseOrdersDTO.md).PurchaseOrdersRows
- [PurchaseOrdersRowDTOPagedListContainer](PurchaseOrdersRowDTOPagedListContainer.md).Items
- [PurchaseOrdersRowWithTotalNumbersDto](PurchaseOrdersRowWithTotalNumbersDto.md).PurchaseOrdersRowDto

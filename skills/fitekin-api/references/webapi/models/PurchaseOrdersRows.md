# PurchaseOrdersRows

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
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
| `VatCode` | [VatCode](VatCode.md) | no |  |
| `PurchaseOrder` | [PurchaseOrders](PurchaseOrders.md) | no |  |
| `PurchaseOrdersRowsDimensions` | [PurchaseOrdersRowsDimension](PurchaseOrdersRowsDimension.md)[] | yes |  |

Used by:

- [PurchaseOrdersRowsDimension](PurchaseOrdersRowsDimension.md).PurchaseOrdersRow
- [PurchaseOrders](PurchaseOrders.md).PurchaseOrdersRows
- [VatCode](VatCode.md).PurchaseOrdersRow

# InvoiceTypeDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Type` | enum [InvType](InvType.md) | no |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `IsDefault` | boolean | no |  |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceCountInUse` | int32 | yes |  |

Used by:

- GET /api/InvoiceType/GetInvoiceTypeByCode (response) — [InvoiceType](../endpoints/InvoiceType.md)
- GET /api/InvoiceType/GetInvoiceTypesByTypeId (response) — [InvoiceType](../endpoints/InvoiceType.md)
- POST /api/InvoiceType/Add (request) — [InvoiceType](../endpoints/InvoiceType.md)
- POST /api/InvoiceType/Add (response) — [InvoiceType](../endpoints/InvoiceType.md)
- POST /api/InvoiceType/Delete (request) — [InvoiceType](../endpoints/InvoiceType.md)
- POST /api/InvoiceType/Update (request) — [InvoiceType](../endpoints/InvoiceType.md)
- POST /api/InvoiceType/Update (response) — [InvoiceType](../endpoints/InvoiceType.md)
- [ExpenseInvoicesForMobileDTO](ExpenseInvoicesForMobileDTO.md).InvoiceType
- [InvoiceConfirmationExtDTO](InvoiceConfirmationExtDTO.md).InvoiceType
- [InvoiceConfirmationMinDTO](InvoiceConfirmationMinDTO.md).InvoiceType
- [InvoiceDTO](InvoiceDTO.md).InvoiceType
- [InvoiceDashboardExtDTO](InvoiceDashboardExtDTO.md).InvoiceType
- [InvoiceDashboardMinDTO](InvoiceDashboardMinDTO.md).InvoiceType
- [InvoiceRegistryMinDTO](InvoiceRegistryMinDTO.md).InvoiceType
- [InvoiceSliderMinDTO](InvoiceSliderMinDTO.md).InvoiceType
- [InvoiceTypeDTOPagedListContainer](InvoiceTypeDTOPagedListContainer.md).Items

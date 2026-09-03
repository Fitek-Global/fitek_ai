# PaymentMethodDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `InvoiceTypes` | enum [PaymentMethodInvoiceType](PaymentMethodInvoiceType.md) | no |  |
| `IsDefault` | boolean | no |  |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceCountInUse` | int32 | yes |  |

Used by:

- GET /api/PaymentMethod/GetPaymentMethodByCode (response) — [PaymentMethod](../endpoints/PaymentMethod.md)
- GET /api/PaymentMethod/GetPaymentMethodsByTypeId (response) — [PaymentMethod](../endpoints/PaymentMethod.md)
- POST /api/PaymentMethod/Add (request) — [PaymentMethod](../endpoints/PaymentMethod.md)
- POST /api/PaymentMethod/Add (response) — [PaymentMethod](../endpoints/PaymentMethod.md)
- POST /api/PaymentMethod/Delete (request) — [PaymentMethod](../endpoints/PaymentMethod.md)
- POST /api/PaymentMethod/Update (request) — [PaymentMethod](../endpoints/PaymentMethod.md)
- POST /api/PaymentMethod/Update (response) — [PaymentMethod](../endpoints/PaymentMethod.md)
- [InvoiceDTO](InvoiceDTO.md).PaymentMethod
- [MinInvoiceWithRowsAndFilesDTO](MinInvoiceWithRowsAndFilesDTO.md).PaymentMethod
- [PaymentMethodDTOPagedListContainer](PaymentMethodDTOPagedListContainer.md).Items

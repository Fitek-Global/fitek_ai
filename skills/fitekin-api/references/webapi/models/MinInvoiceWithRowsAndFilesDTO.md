# MinInvoiceWithRowsAndFilesDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Number` | string | yes |  |
| `Description` | string | yes |  |
| `SumWithoutVat` | double | no |  |
| `Vat` | double | no |  |
| `TotalAmountWithVat` | double | no |  |
| `Currency` | string | yes |  |
| `Beneficiary` | string | yes |  |
| `AccountingDate` | date-time | yes |  |
| `InvoiceDate` | date-time | yes |  |
| `DueDate` | date-time | yes |  |
| `PaymentMethodId` | int32 | yes |  |
| `PaymentMethod` | [PaymentMethodDTO](PaymentMethodDTO.md) | no |  |
| `SupplierId` | int32 | yes |  |
| `Supplier` | [SupplierDTO](SupplierDTO.md) | no |  |
| `InvoiceRows` | [InvoiceRowDTO](InvoiceRowDTO.md)[] | yes |  |
| `DocumentFiles` | [FileDTO](FileDTO.md)[] | yes |  |

Used by:

- GET /api/Invoice/GetByIdWithInvoiceRowsAndFiles/{id} (response) — [Invoice](../endpoints/Invoice.md)

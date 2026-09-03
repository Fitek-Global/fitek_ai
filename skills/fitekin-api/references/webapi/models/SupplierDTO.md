# SupplierDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Name` | string | yes |  |
| `RegistrationCode` | string | yes |  |
| `VatCode` | string | yes |  |
| `Address` | string | yes |  |
| `Country` | string | yes |  |
| `CompanyType` | string | yes |  |
| `Code` | string | yes |  |
| `Email` | string | yes |  |
| `ContactPersonName` | string | yes |  |
| `OverdueChargeRate` | double | yes |  |
| `PaymentDays` | int32 | no |  |
| `VatCodeId` | int32 | yes |  |
| `BankAccount` | string | yes |  |
| `BankAccounts` | [BankAccountDto](BankAccountDto.md)[] | yes |  |
| `ExternalId` | string | yes |  |

Used by:

- GET /api/Supplier/GetByName (response) — [Supplier](../endpoints/Supplier.md)
- GET /api/Supplier/GetSupplier (response) — [Supplier](../endpoints/Supplier.md)
- GET /api/Supplier/GetSupplierById (response) — [Supplier](../endpoints/Supplier.md)
- POST /api/Supplier/AddSupplier (request) — [Supplier](../endpoints/Supplier.md)
- POST /api/Supplier/AddSupplier (response) — [Supplier](../endpoints/Supplier.md)
- POST /api/Supplier/AddSuppliers (request) — [Supplier](../endpoints/Supplier.md)
- POST /api/Supplier/AddSuppliers (response) — [Supplier](../endpoints/Supplier.md)
- POST /api/Supplier/UpdateSupplier (request) — [Supplier](../endpoints/Supplier.md)
- POST /api/Supplier/UpdateSupplier (response) — [Supplier](../endpoints/Supplier.md)
- POST /api/Supplier/UploadCSVFile (response) — [Supplier](../endpoints/Supplier.md)
- [AutoTransactionUiObjectDTO](AutoTransactionUiObjectDTO.md).Supplier
- [AutoTransactionsDTO](AutoTransactionsDTO.md).Supplier
- [InvoiceDTO](InvoiceDTO.md).Supplier
- [MinInvoiceWithRowsAndFilesDTO](MinInvoiceWithRowsAndFilesDTO.md).Supplier
- [PurchaseOrderWithoutRowsDto](PurchaseOrderWithoutRowsDto.md).Supplier
- [PurchaseOrdersDTO](PurchaseOrdersDTO.md).Supplier
- [PurchaseOrdersSmallDTO](PurchaseOrdersSmallDTO.md).Supplier
- [SupplierDTOPagedListContainer](SupplierDTOPagedListContainer.md).Items

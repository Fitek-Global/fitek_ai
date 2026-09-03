# InvoiceConfirmationExtDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `SenderName` | string | yes | read-only |
| `SupplierName` | string | yes |  |
| `TotalAmountWithVat` | double | no |  |
| `Currency` | string | yes |  |
| `Number` | string | yes |  |
| `InvoiceDate` | date-time | yes |  |
| `Status` | int32 | no |  |
| `SenderCode` | string | yes | read-only |
| `SupplierCode` | string | yes |  |
| `IsCredit` | boolean | no |  |
| `IsDuplicate` | boolean | no |  |
| `Description` | string | yes |  |
| `CompanyGuid` | uuid | yes |  |
| `AccountingDate` | date-time | yes |  |
| `DueDate` | date-time | yes |  |
| `CreatedDate` | date-time | yes |  |
| `CurrentWorkflowUsers` | string[] | yes |  |
| `HasTransactionRows` | boolean | no |  |
| `ErpId` | string | yes |  |
| `ReferenceNumber` | string | yes |  |
| `Vat` | double | no |  |
| `SumWithoutVat` | double | no |  |
| `Supplier` | [InvoiceConfirmationSupplier](InvoiceConfirmationSupplier.md) | no |  |
| `Beneficiary` | string | yes |  |
| `ContractNumber` | string | yes |  |
| `PayToAccount` | string | yes |  |
| `ContactName` | string | yes |  |
| `PurchaseOrder` | string | yes |  |
| `InvoiceType` | [InvoiceTypeDTO](InvoiceTypeDTO.md) | no |  |
| `InvoiceCustomization` | [InvoiceCustomizationDTO](InvoiceCustomizationDTO.md)[] | yes |  |
| `InvoicePaidDate` | string | yes |  |

Used by:

- GET /api/Invoice/GetInvoiceDataExt (response) — [Invoice](../endpoints/Invoice.md)

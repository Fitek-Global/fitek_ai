# InvoiceDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `canConfirmCurrentTaskProp` | boolean | no |  |
| `canConfirmInvoiceProp` | boolean | no |  |
| `AccountingDate` | date-time | yes |  |
| `InvoiceDate` | date-time | yes |  |
| `DueDate` | date-time | yes |  |
| `PayToAccount` | string | yes |  |
| `SupplierName` | string | yes |  |
| `SupplierRegCode` | string | yes |  |
| `SupplierAddress` | string | yes |  |
| `SupplierRepresentative` | string | yes |  |
| `SupplierEmail` | string | yes |  |
| `SupplierVatCodeId` | int32 | yes |  |
| `SupplierCode` | string | yes |  |
| `ReferenceNumber` | string | yes |  |
| `PaymentDescription` | string | yes |  |
| `TotalAmountWithVat` | double | no |  |
| `SumWithoutVat` | double | no |  |
| `Vat` | double | no |  |
| `Balance` | [InvoiceBalanceDTO](InvoiceBalanceDTO.md) | no |  |
| `TotalToPay` | double | yes |  |
| `Status` | int32 | no |  |
| `InvoiceType` | [InvoiceTypeDTO](InvoiceTypeDTO.md) | no |  |
| `InvoiceTypeId` | int32 | yes |  |
| `PaymentMethodId` | int32 | yes |  |
| `PaymentMethod` | [PaymentMethodDTO](PaymentMethodDTO.md) | no |  |
| `IsCredit` | boolean | no |  |
| `IsDuplicate` | boolean | no |  |
| `IsDuplicateProhibited` | boolean | no |  |
| `Description` | string | yes |  |
| `Workflow` | [WorkflowDTO](WorkflowDTO.md) | no |  |
| `FileUrl` | string | yes |  |
| `FileName` | string | yes |  |
| `VatCodeId` | int32 | no |  |
| `SupplierId` | int32 | yes |  |
| `Currency` | string | yes |  |
| `DefaultCurrencyRate` | double | yes |  |
| `CurrencyRateDate` | date-time | yes |  |
| `Beneficiary` | string | yes |  |
| `ErpId` | string | yes |  |
| `PurchaseOrder` | string | yes |  |
| `ContractNumber` | string | yes |  |
| `ContactName` | string | yes |  |
| `InvoicePaidDateTime` | date-time | yes |  |
| `UniqId` | uuid | yes |  |
| `DashboardStatus` | int32 | no |  |
| `Supplier` | [SupplierDTO](SupplierDTO.md) | no |  |
| `DocumentType` | string | yes |  |
| `WorkflowId` | int32 | yes |  |
| `displayAddWorkflowCompleterProp` | boolean | no |  |
| `IsExportAfterApprovalEnabled` | boolean | yes |  |
| `FactorContractNumber` | string | yes |  |
| `DocumentName` | string | yes |  |
| `InvoiceContentCode` | string | yes |  |
| `PaymentTerm` | string | yes |  |
| `FineRatePerDay` | double | yes |  |
| `DeleteTransactionRowsDuringSave` | boolean | no |  |
| `isLastTask` | boolean | no |  |
| `CanEditInvoice` | boolean | no |  |
| `CanEditCustomFieldsAfterExport` | boolean | no |  |
| `TransactionRowsTotalSumRemaining` | double | no |  |
| `BuyerDepId` | string | yes |  |
| `OnExternalApprovement` | boolean | no |  |
| `InvoiceCustomization` | [InvoiceCustomizationDTO](InvoiceCustomizationDTO.md)[] | yes |  |
| `Number` | string | yes |  |
| `HubId` | string | yes |  |
| `HubType` | int32 | yes |  |
| `ImportedDate` | date-time | yes |  |
| `InvoiceRows` | [InvoiceRowDTO](InvoiceRowDTO.md)[] | yes |  |
| `DocumentFiles` | [FileDTO](FileDTO.md)[] | yes |  |
| `CompanyGuid` | uuid | no |  |
| `ExternalId` | string | yes |  |
| `Origin` | enum [InvoiceOrigin](InvoiceOrigin.md) | no |  |
| `CreatedBy` | int32 | yes |  |
| `ImportErrors` | [KeyValueDTO](KeyValueDTO.md)[] | yes |  |
| `ImportHeaderError` | boolean | no |  |
| `ImportInvoiceRowsError` | boolean | no |  |
| `PayToAccountVerified` | enum [PayToAccountVerified](PayToAccountVerified.md) | no |  |

Used by:

- GET /api/Invoice/ChangeInvoiceCompany (response) — [Invoice](../endpoints/Invoice.md)
- GET /api/Invoice/GetById (response) — [Invoice](../endpoints/Invoice.md)
- GET /api/Invoice/UpdateSupplierId (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/RemoveDuplicateFlag (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/RestoreDeletedInvoice (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/Save (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/Save (response) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/SaveCopy (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/SaveCopy (response) — [Invoice](../endpoints/Invoice.md)
- [AutoTransactionUiObjectDTO](AutoTransactionUiObjectDTO.md).LastInvoice
- [AutoTransactionsDTO](AutoTransactionsDTO.md).LastInvoice
- [InvoiceDTOPagedListContainer](InvoiceDTOPagedListContainer.md).Items
- [InvoiceDataDTO](InvoiceDataDTO.md).Invoice

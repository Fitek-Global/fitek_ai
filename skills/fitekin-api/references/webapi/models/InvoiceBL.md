# InvoiceBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `AccountingDate` | date-time | yes |  |
| `InvoiceDate` | date-time | yes |  |
| `DueDate` | date-time | yes |  |
| `PayToAccount` | string | yes |  |
| `ReferenceNumber` | string | yes |  |
| `PaymentDescription` | string | yes |  |
| `TotalAmountWithVat` | double | no |  |
| `SumWithoutVat` | double | no |  |
| `Vat` | double | no |  |
| `TotalToPay` | double | yes |  |
| `BalanceDate` | date-time | yes |  |
| `BalanceBegin` | double | yes |  |
| `BalanceInbound` | double | yes |  |
| `BalanceOutbound` | double | yes |  |
| `BalanceEnd` | double | yes |  |
| `Status` | int32 | no |  |
| `SupplierId` | int32 | yes |  |
| `Currency` | string | yes |  |
| `DefaultCurrencyRate` | double | yes |  |
| `CurrencyRateDate` | date-time | yes |  |
| `Beneficiary` | string | yes |  |
| `IsCredit` | boolean | no |  |
| `IsDuplicate` | boolean | no |  |
| `IsDuplicateProhibited` | boolean | no |  |
| `Description` | string | yes |  |
| `Supplier` | [SupplierBL](SupplierBL.md) | no |  |
| `Workflow` | [WorkflowBL](WorkflowBL.md) | no |  |
| `TransactionRows` | [TransactionRowBL](TransactionRowBL.md)[] | yes |  |
| `InvoiceRows` | [InvoiceRowBL](InvoiceRowBL.md)[] | yes |  |
| `InvoiceParties` | [InvoicePartyBL](InvoicePartyBL.md)[] | yes |  |
| `InvoiceExtensions` | [InvoiceExtensionBL](InvoiceExtensionBL.md)[] | yes |  |
| `ErpId` | string | yes |  |
| `PurchaseOrder` | string | yes |  |
| `ContractNumber` | string | yes |  |
| `ContactName` | string | yes |  |
| `InvoiceTypeId` | int32 | yes |  |
| `InvoiceType` | [InvoiceTypeBL](InvoiceTypeBL.md) | no |  |
| `PaymentMethodId` | int32 | yes |  |
| `PaymentMethod` | [PaymentMethodBL](PaymentMethodBL.md) | no |  |
| `IsExportAfterApprovalEnabled` | boolean | yes |  |
| `DeleteTransactionRowsDuringSave` | boolean | no |  |
| `WorkflowId` | int32 | yes |  |
| `InvoiceCustomization` | [InvoiceCustomizationBL](InvoiceCustomizationBL.md)[] | yes |  |
| `BuyerDepId` | string | yes |  |
| `OnExternalApprovement` | boolean | no |  |
| `FactorContractNumber` | string | yes |  |
| `DocumentName` | string | yes |  |
| `InvoiceContentCode` | string | yes |  |
| `PaymentTerm` | string | yes |  |
| `FineRatePerDay` | double | yes |  |
| `PartnerCode` | string | yes |  |
| `BusinessCode` | string | yes |  |
| `SourceCode` | string | yes |  |
| `CashFlowCode` | string | yes |  |
| `ClassificatorCode` | string | yes |  |
| `InvoicePaidDateTime` | date-time | yes |  |
| `Number` | string | yes |  |
| `HubId` | string | yes |  |
| `HubType` | enum [HubType](HubType.md) | no |  |
| `ImportedDate` | date-time | yes |  |
| `DocumentFiles` | [FileBL](FileBL.md)[] | yes |  |
| `CompanyGuid` | uuid | yes |  |
| `ExternalId` | string | yes |  |
| `Origin` | enum [InvoiceOrigin](InvoiceOrigin.md) | no |  |
| `SourceType` | enum [SourceTypeEnum](SourceTypeEnum.md) | no |  |
| `Channel` | enum [ImportChannelEnum](ImportChannelEnum.md) | no |  |
| `InvoiceGlobUniqId` | string | yes |  |
| `ImportErrors` | string | yes |  |
| `ImportHeaderError` | boolean | no |  |

Used by:

- GET /api/AutoTransactions/ApplyAutoTransactionToInvoice (response) — [AutoTransactions](../endpoints/AutoTransactions.md)
- POST /api/Invoice/CheckIsDuplicate (request) — [Invoice](../endpoints/Invoice.md)
- [WorkflowBL](WorkflowBL.md).Invoice

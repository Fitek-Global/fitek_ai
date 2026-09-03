# Invoice

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `AccountingDate` | date-time | yes |  |
| `InvoiceDate` | date-time | yes |  |
| `DueDate` | date-time | yes |  |
| `PayToAccount` | string(50) | yes | max 50 |
| `ReferenceNumber` | string(50) | yes | max 50 |
| `PaymentDescription` | string(210) | yes | max 210 |
| `TotalAmountWithVat` | double | no |  |
| `Status` | enum [InvoiceStatus](InvoiceStatus.md) | no |  |
| `Vat` | double | no |  |
| `Beneficiary` | string(100) | yes | max 100 |
| `Currency` | string(4) | yes | max 4 |
| `DefaultCurrencyRate` | double | yes |  |
| `CurrencyRateDate` | date-time | yes |  |
| `IsCredit` | boolean | no |  |
| `Description` | string(500) | yes | max 500 |
| `ModifiedBy` | int32 | yes |  |
| `CreatedBy` | int32 | yes |  |
| `ErpId` | string(50) | yes | max 50 |
| `PurchaseOrder` | string(500) | yes | max 500 |
| `IsDuplicate` | boolean | no |  |
| `IsDuplicateProhibited` | boolean | no |  |
| `SumWithoutVat` | double | no |  |
| `TotalToPay` | double | yes |  |
| `BalanceDate` | date-time | yes |  |
| `BalanceBegin` | double | yes |  |
| `BalanceInbound` | double | yes |  |
| `BalanceOutbound` | double | yes |  |
| `BalanceEnd` | double | yes |  |
| `ContractNumber` | string(100) | yes | max 100 |
| `InvoiceTypeId` | int32 | yes |  |
| `InvoiceType` | [InvoiceType](InvoiceType.md) | no |  |
| `PaymentMethodId` | int32 | yes |  |
| `PaymentMethod` | [PaymentMethod](PaymentMethod.md) | no |  |
| `IsExportAfterApprovalEnabled` | boolean | yes |  |
| `ContactName` | string(100) | yes | max 100 |
| `AutoTransactionStartDate` | date-time | yes |  |
| `BuyerDepId` | string(100) | yes | max 100 |
| `OnExternalApprovement` | boolean | no |  |
| `FactorContractNumber` | string(100) | yes | max 100 |
| `DocumentName` | string(100) | yes | max 100 |
| `InvoiceContentCode` | string(20) | yes | max 20 |
| `PaymentTerm` | string(100) | yes | max 100 |
| `FineRatePerDay` | double | yes |  |
| `PartnerCode` | string(10) | yes | max 10 |
| `BusinessCode` | string(10) | yes | max 10 |
| `SourceCode` | string(10) | yes | max 10 |
| `CashFlowCode` | string(10) | yes | max 10 |
| `ClassificatorCode` | string(100) | yes | max 100 |
| `InvoicePaidDateTime` | date-time | yes |  |
| `Number` | string(100) | yes | max 100 |
| `SupplierId` | int32 | yes |  |
| `Supplier` | [Supplier](Supplier.md) | no |  |
| `HubId` | string(100) | yes | max 100 |
| `HubType` | enum [HubType](HubType.md) | no |  |
| `ImportedDate` | date-time | yes |  |
| `CompanyGuid` | uuid | yes |  |
| `ExternalId` | string | yes |  |
| `Origin` | int32 | yes |  |
| `SourceType` | enum [SourceTypeEnum](SourceTypeEnum.md) | no |  |
| `Channel` | enum [ImportChannelEnum](ImportChannelEnum.md) | no |  |
| `InvoiceGlobUniqId` | string | yes |  |
| `ImportErrors` | string | yes |  |
| `ImportHeaderError` | boolean | no |  |
| `WorkflowDetails` | [WorkflowDetails](WorkflowDetails.md)[] | yes |  |
| `KauntInvoice` | [KauntInvoice](KauntInvoice.md) | no |  |
| `InvoiceXml` | [InvoiceXml](InvoiceXml.md) | no |  |
| `TransactionRows` | [TransactionRow](TransactionRow.md)[] | yes |  |
| `InvoiceRows` | [InvoiceRow](InvoiceRow.md)[] | yes |  |
| `InvoiceCustomization` | [InvoiceCustomization](InvoiceCustomization.md)[] | yes |  |
| `InvoiceParties` | [InvoiceParty](InvoiceParty.md)[] | yes |  |
| `InvoiceExtensions` | [InvoiceExtension](InvoiceExtension.md)[] | yes |  |
| `DocumentFiles` | [File](File.md)[] | yes |  |
| `History` | [History](History.md)[] | yes |  |
| `InvoiceHistory` | [InvoiceDataHistory](InvoiceDataHistory.md) | no |  |
| `AutoTransactions` | [AutoTransactions](AutoTransactions.md)[] | yes |  |
| `PurchaseOrders` | [PurchaseOrders](PurchaseOrders.md)[] | yes |  |
| `InvoicePurchaseOrderLink` | [InvoicePurchaseOrderLink](InvoicePurchaseOrderLink.md)[] | yes |  |
| `Tasks` | [Task](Task.md)[] | yes |  |

Used by:

- [AutoTransactions](AutoTransactions.md).LastInvoice
- [File](File.md).Invoice
- [History](History.md).Invoice
- [InvoiceCustomization](InvoiceCustomization.md).Invoice
- [InvoiceExtension](InvoiceExtension.md).Invoice
- [InvoiceParty](InvoiceParty.md).Invoice
- [InvoicePurchaseOrderLink](InvoicePurchaseOrderLink.md).LinkedInvoice
- [InvoiceRow](InvoiceRow.md).Invoice
- [InvoiceType](InvoiceType.md).Invoice
- [InvoiceXml](InvoiceXml.md).Invoice
- [KauntInvoice](KauntInvoice.md).Invoice
- [PaymentMethod](PaymentMethod.md).Invoice
- [PurchaseOrders](PurchaseOrders.md).Invoices
- [Supplier](Supplier.md).Invoices
- [Task](Task.md).Workflow
- [TransactionRow](TransactionRow.md).Invoice
- [WorkflowDetails](WorkflowDetails.md).Invoice

# SalesInvoice

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceGuid` | uuid | no |  |
| `Number` | string | yes |  |
| `ReceiverId` | int32 | yes |  |
| `Status` | int32 | no |  |
| `SumWithoutVat` | double | no |  |
| `Vat` | double | no |  |
| `TotalAmountWithVat` | double | no |  |
| `Currency` | string | yes |  |
| `CreatedDate` | date-time | no |  |
| `InvoiceDate` | date-time | yes |  |
| `DueDate` | date-time | yes |  |
| `ReferenceNumber` | string | yes |  |
| `DocumentType` | int32 | no |  |
| `FineRatePerDay` | double | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `CreatedBy` | int32 | no |  |
| `Language` | string | yes |  |
| `AdditionalInformation` | string | yes |  |
| `PaymentTerm` | string | yes |  |
| `PaymentReferenceNumber` | string | yes |  |
| `FactorContractNumber` | string | yes |  |
| `ContractNumber` | string | yes |  |
| `DocumentName` | string | yes |  |
| `InvoiceContentCode` | string | yes |  |
| `InvoiceContentText` | string | yes |  |
| `PenaltySum` | double | yes |  |
| `Rounding` | double | yes |  |
| `TotalToPay` | double | yes |  |
| `PaymentDescription` | string | yes |  |
| `PaymentRefId` | string | yes |  |
| `PayerName` | string | yes |  |
| `PaymentId` | string | yes |  |
| `PayToAccount` | string | yes |  |
| `PayToName` | string | yes |  |
| `PayToBIC` | string | yes |  |
| `DirectDebitPayeeContractNumber` | string | yes |  |
| `DirectDebitPayerNumber` | string | yes |  |
| `Payable` | boolean | no |  |
| `PaymentTotalSum` | double | no |  |
| `PeriodName` | string | yes |  |
| `PeriodStartDate` | date-time | yes |  |
| `PeriodEndDate` | date-time | yes |  |
| `ImportErrors` | string | yes |  |
| `DeliveryId` | uuid | yes |  |
| `DeliveryChannelStatus` | string | yes |  |
| `GeneralDeliveryError` | string | yes |  |
| `DeliveryErrorDetail` | string | yes |  |
| `KsefDeliveryId` | string | yes |  |
| `DeliveredToKsef` | boolean | yes |  |
| `SalesInvoiceRows` | [SalesInvoiceRow](SalesInvoiceRow.md)[] | yes |  |
| `SalesInvoiceHistory` | [SalesInvoiceHistory](SalesInvoiceHistory.md)[] | yes |  |
| `SalesInvoiceVats` | [SalesInvoiceVat](SalesInvoiceVat.md)[] | yes |  |
| `SalesInvoiceExtensions` | [SalesInvoiceExtension](SalesInvoiceExtension.md)[] | yes |  |
| `SalesInvoiceAdditions` | [SalesInvoiceAddition](SalesInvoiceAddition.md)[] | yes |  |
| `Receiver` | [Receiver](Receiver.md) | no |  |
| `DocumentFiles` | [SalesInvoiceFile](SalesInvoiceFile.md)[] | yes |  |

Used by:

- [Receiver](Receiver.md).SalesInvoices
- [SalesInvoiceAddition](SalesInvoiceAddition.md).SalesInvoice
- [SalesInvoiceExtension](SalesInvoiceExtension.md).SalesInvoice
- [SalesInvoiceFile](SalesInvoiceFile.md).SalesInvoice
- [SalesInvoiceHistory](SalesInvoiceHistory.md).SalesInvoice
- [SalesInvoiceRow](SalesInvoiceRow.md).SalesInvoice
- [SalesInvoiceVat](SalesInvoiceVat.md).SalesInvoice

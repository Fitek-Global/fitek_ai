# SalesInvoiceDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceGuid` | uuid | no |  |
| `Number` | string | yes |  |
| `ReceiverId` | int32 | yes |  |
| `Status` | enum [SalesInvoiceStatus](SalesInvoiceStatus.md) | no |  |
| `SumWithoutVat` | double | no |  |
| `Vat` | double | no |  |
| `TotalAmountWithVat` | double | no |  |
| `Currency` | string | yes |  |
| `CreatedDate` | date-time | no |  |
| `InvoiceDate` | date-time | yes |  |
| `DueDate` | date-time | yes |  |
| `ReferenceNumber` | string | yes |  |
| `DocumentType` | enum [SalesInvoiceDocumentType](SalesInvoiceDocumentType.md) | no |  |
| `FineRatePerDay` | double | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `ModifiedByFullName` | string | yes |  |
| `CreatedBy` | int32 | no |  |
| `CreatedByFullName` | string | yes |  |
| `Language` | string | yes |  |
| `AdditionalInformation` | string | yes |  |
| `UniqId` | uuid | no |  |
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
| `GeneralDeliveryError` | string | yes |  |
| `DeliveryErrorDetail` | string | yes |  |
| `DateSentUtc` | string | yes |  |
| `DateDeliveredToKsefUtc` | string | yes |  |
| `KsefDeliveryId` | string | yes |  |
| `DeliveredToKsef` | boolean | yes |  |
| `SalesInvoiceHistory` | [SalesInvoiceHistoryDTO](SalesInvoiceHistoryDTO.md)[] | yes |  |
| `SalesInvoiceAdditions` | [SalesInvoiceAdditionDTO](SalesInvoiceAdditionDTO.md)[] | yes |  |
| `SalesInvoiceExtensions` | [SalesInvoiceExtensionDTO](SalesInvoiceExtensionDTO.md)[] | yes |  |
| `SalesInvoiceRows` | [SalesInvoiceRowDTO](SalesInvoiceRowDTO.md)[] | yes |  |
| `SalesInvoiceVats` | [SalesInvoiceVatDTO](SalesInvoiceVatDTO.md)[] | yes |  |
| `Receiver` | [ReceiverDTO](ReceiverDTO.md) | no |  |
| `DocumentFiles` | [SalesInvoiceFileDTO](SalesInvoiceFileDTO.md)[] | yes |  |

Used by:

- GET /api/SalesInvoice/GetByGuid (response) — [SalesInvoice](../endpoints/SalesInvoice.md)
- GET /api/SalesInvoice/GetById (response) — [SalesInvoice](../endpoints/SalesInvoice.md)
- POST /api/SalesInvoice/DeleteSalesInvoice (response) — [SalesInvoice](../endpoints/SalesInvoice.md)
- POST /api/SalesInvoice/Save (request) — [SalesInvoice](../endpoints/SalesInvoice.md)
- POST /api/SalesInvoice/Save (response) — [SalesInvoice](../endpoints/SalesInvoice.md)
- [ReceiverDTO](ReceiverDTO.md).SalesInvoices
- [SalesInvoiceDTOPagedListContainer](SalesInvoiceDTOPagedListContainer.md).Items

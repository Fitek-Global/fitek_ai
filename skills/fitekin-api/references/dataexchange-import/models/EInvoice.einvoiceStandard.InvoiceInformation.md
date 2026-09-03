# EInvoice.einvoiceStandard.InvoiceInformation

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `type` | [EInvoice.einvoiceStandard.InvoiceInformationType](EInvoice.einvoiceStandard.InvoiceInformationType.md) | no |  |
| `factorContractNumber` | null,string | no |  |
| `contractNumber` | null,string | no |  |
| `documentName` | null,string | no |  |
| `invoiceNumber` | null,string | no |  |
| `invoiceContentCode` | null,string | no |  |
| `invoiceContentText` | null,string | no |  |
| `paymentReferenceNumber` | null,string | no |  |
| `paymentMethod` | null,string | no |  |
| `invoiceDate` | date-time | no |  |
| `dueDate` | date-time | no |  |
| `dueDateSpecified` | boolean | no |  |
| `paymentTerm` | null,string | no |  |
| `fineRatePerDay` | double | no |  |
| `fineRatePerDaySpecified` | boolean | no |  |
| `period` | [EInvoice.einvoiceStandard.InvoiceInformationPeriod](EInvoice.einvoiceStandard.InvoiceInformationPeriod.md) | no |  |
| `invoiceDeliverer` | [EInvoice.einvoiceStandard.ContactDataRecord](EInvoice.einvoiceStandard.ContactDataRecord.md) | no |  |
| `extension` | null,array | no |  |

Used by:

- [EInvoice.einvoiceStandard.Invoice](EInvoice.einvoiceStandard.Invoice.md).invoiceInformation

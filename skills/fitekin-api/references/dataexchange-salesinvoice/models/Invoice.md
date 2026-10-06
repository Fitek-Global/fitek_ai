# EInvoice.einvoiceStandard.Invoice

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `invoiceParties` | [EInvoice.einvoiceStandard.InvoiceParties](InvoiceParties.md) | no |  |
| `invoiceInformation` | [EInvoice.einvoiceStandard.InvoiceInformation](InvoiceInformation.md) | no |  |
| `invoiceSumGroup` | null,array | no |  |
| `invoiceItem` | [EInvoice.einvoiceStandard.InvoiceItem](InvoiceItem.md) | no |  |
| `additionalInformation` | null,array | no |  |
| `attachmentFile` | [EInvoice.einvoiceStandard.AttachmentRecord](AttachmentRecord.md) | no |  |
| `paymentInfo` | [EInvoice.einvoiceStandard.PaymentInfo](PaymentInfo.md) | no |  |
| `invoiceId` | null,string | no |  |
| `invoiceGuid` | null,string | no |  |
| `serviceId` | null,string | no |  |
| `regNumber` | null,string | no |  |
| `channelId` | null,string | no |  |
| `channelAddress` | null,string | no |  |
| `factoring` | null,string | no |  |
| `templateId` | null,string | no |  |
| `languageId` | null,string | no |  |
| `presentment` | null,string | no |  |
| `invoiceGlobUniqId` | null,string | no |  |
| `sellerContractId` | null,string | no |  |
| `sellerRegnumber` | null,string | no |  |

Used by:

- [EInvoice.einvoiceStandard.E_Invoice](E_Invoice.md).invoice

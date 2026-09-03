# EInvoice.einvoiceStandard.ContactDataRecord

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `contactName` | null,string | no |  |
| `contactPersonCode` | null,string | no |  |
| `phoneNumber` | null,string | no |  |
| `faxNumber` | null,string | no |  |
| `url` | null,string | no |  |
| `emailAddress` | null,string | no |  |
| `legalAddress` | [EInvoice.einvoiceStandard.AddressRecord](EInvoice.einvoiceStandard.AddressRecord.md) | no |  |
| `mailAddress` | [EInvoice.einvoiceStandard.AddressRecord](EInvoice.einvoiceStandard.AddressRecord.md) | no |  |
| `contactInformation` | null,array | no |  |

Used by:

- [EInvoice.einvoiceStandard.BillPartyRecord](EInvoice.einvoiceStandard.BillPartyRecord.md).contactData
- [EInvoice.einvoiceStandard.InvoiceInformation](EInvoice.einvoiceStandard.InvoiceInformation.md).invoiceDeliverer
- [EInvoice.einvoiceStandard.SellerPartyRecord](EInvoice.einvoiceStandard.SellerPartyRecord.md).contactData

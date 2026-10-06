# EInvoice.einvoiceStandard.ContactDataRecord

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `contactName` | null,string | no |  |
| `contactPersonCode` | null,string | no |  |
| `phoneNumber` | null,string | no |  |
| `faxNumber` | null,string | no |  |
| `url` | null,string | no |  |
| `emailAddress` | null,string | no |  |
| `legalAddress` | [EInvoice.einvoiceStandard.AddressRecord](AddressRecord.md) | no |  |
| `mailAddress` | [EInvoice.einvoiceStandard.AddressRecord](AddressRecord.md) | no |  |
| `contactInformation` | null,array | no |  |

Used by:

- [EInvoice.einvoiceStandard.BillPartyRecord](BillPartyRecord.md).contactData
- [EInvoice.einvoiceStandard.InvoiceInformation](InvoiceInformation.md).invoiceDeliverer
- [EInvoice.einvoiceStandard.SellerPartyRecord](SellerPartyRecord.md).contactData

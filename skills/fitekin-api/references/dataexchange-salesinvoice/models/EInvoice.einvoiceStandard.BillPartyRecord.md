# EInvoice.einvoiceStandard.BillPartyRecord

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `gln` | null,string | no |  |
| `uniqueCode` | null,string | no |  |
| `name` | null,string | no |  |
| `depId` | null,string | no |  |
| `regNumber` | null,string | no |  |
| `vatRegNumber` | null,string | no |  |
| `contactData` | [EInvoice.einvoiceStandard.ContactDataRecord](EInvoice.einvoiceStandard.ContactDataRecord.md) | no |  |
| `accountInfo` | null,array | no |  |
| `extension` | null,array | no |  |

Used by:

- [EInvoice.einvoiceStandard.InvoiceParties](EInvoice.einvoiceStandard.InvoiceParties.md).buyerParty
- [EInvoice.einvoiceStandard.InvoiceParties](EInvoice.einvoiceStandard.InvoiceParties.md).deliveryParty
- [EInvoice.einvoiceStandard.InvoiceParties](EInvoice.einvoiceStandard.InvoiceParties.md).factorParty
- [EInvoice.einvoiceStandard.InvoiceParties](EInvoice.einvoiceStandard.InvoiceParties.md).payerParty
- [EInvoice.einvoiceStandard.InvoiceParties](EInvoice.einvoiceStandard.InvoiceParties.md).recipientParty

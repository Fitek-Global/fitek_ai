# EInvoice.einvoiceStandard.BillPartyRecord

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `gln` | null,string | no |  |
| `uniqueCode` | null,string | no |  |
| `name` | null,string | no |  |
| `depId` | null,string | no |  |
| `regNumber` | null,string | no |  |
| `vatRegNumber` | null,string | no |  |
| `contactData` | [EInvoice.einvoiceStandard.ContactDataRecord](ContactDataRecord.md) | no |  |
| `accountInfo` | null,array | no |  |
| `extension` | null,array | no |  |

Used by:

- [EInvoice.einvoiceStandard.InvoiceParties](InvoiceParties.md).buyerParty
- [EInvoice.einvoiceStandard.InvoiceParties](InvoiceParties.md).deliveryParty
- [EInvoice.einvoiceStandard.InvoiceParties](InvoiceParties.md).factorParty
- [EInvoice.einvoiceStandard.InvoiceParties](InvoiceParties.md).payerParty
- [EInvoice.einvoiceStandard.InvoiceParties](InvoiceParties.md).recipientParty

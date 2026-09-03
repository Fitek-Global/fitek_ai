# EInvoice.einvoiceStandard.VATRecord

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `sumBeforeVAT` | double | no |  |
| `sumBeforeVATSpecified` | boolean | no |  |
| `vatRate` | double | no |  |
| `vatSum` | double | no |  |
| `vatSumFieldSpecified` | boolean | no |  |
| `currency` | null,string | no |  |
| `sumAfterVAT` | double | no |  |
| `sumAfterVATSpecified` | boolean | no |  |
| `reference` | [EInvoice.einvoiceStandard.ExtensionRecord](EInvoice.einvoiceStandard.ExtensionRecord.md) | no |  |
| `vatId` | null,string | no |  |

Used by:

- [EInvoice.einvoiceStandard.GroupEntry](EInvoice.einvoiceStandard.GroupEntry.md).vat
- [EInvoice.einvoiceStandard.InvoiceItemTotalGroup](EInvoice.einvoiceStandard.InvoiceItemTotalGroup.md).vat
- [EInvoice.einvoiceStandard.InvoiceSumGroup](EInvoice.einvoiceStandard.InvoiceSumGroup.md).vat
- [EInvoice.einvoiceStandard.ItemEntry](EInvoice.einvoiceStandard.ItemEntry.md).vat

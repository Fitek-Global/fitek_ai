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
| `reference` | [EInvoice.einvoiceStandard.ExtensionRecord](ExtensionRecord.md) | no |  |
| `vatId` | null,string | no |  |

Used by:

- [EInvoice.einvoiceStandard.GroupEntry](GroupEntry.md).vat
- [EInvoice.einvoiceStandard.InvoiceItemTotalGroup](InvoiceItemTotalGroup.md).vat
- [EInvoice.einvoiceStandard.InvoiceSumGroup](InvoiceSumGroup.md).vat
- [EInvoice.einvoiceStandard.ItemEntry](ItemEntry.md).vat

# EInvoice.einvoiceStandard.GroupEntry

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `groupDescription` | null,string | no |  |
| `extension` | null,array | no |  |
| `accounting` | [EInvoice.einvoiceStandard.AccountingRecord](EInvoice.einvoiceStandard.AccountingRecord.md) | no |  |
| `groupAmount` | double | no |  |
| `groupAmountSpecified` | boolean | no |  |
| `groupSum` | double | no |  |
| `groupSumSpecified` | boolean | no |  |
| `addition` | null,array | no |  |
| `vat` | [EInvoice.einvoiceStandard.VATRecord](EInvoice.einvoiceStandard.VATRecord.md) | no |  |
| `groupTotal` | double | no |  |
| `groupTotalSpecified` | boolean | no |  |

Used by:

- [EInvoice.einvoiceStandard.InvoiceItemGroup](EInvoice.einvoiceStandard.InvoiceItemGroup.md).groupEntry
- [EInvoice.einvoiceStandard.InvoiceTotalGroup](EInvoice.einvoiceStandard.InvoiceTotalGroup.md).groupEntry

# EInvoice.einvoiceStandard.GroupEntry

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `groupDescription` | null,string | no |  |
| `extension` | null,array | no |  |
| `accounting` | [EInvoice.einvoiceStandard.AccountingRecord](AccountingRecord.md) | no |  |
| `groupAmount` | double | no |  |
| `groupAmountSpecified` | boolean | no |  |
| `groupSum` | double | no |  |
| `groupSumSpecified` | boolean | no |  |
| `addition` | null,array | no |  |
| `vat` | [EInvoice.einvoiceStandard.VATRecord](VATRecord.md) | no |  |
| `groupTotal` | double | no |  |
| `groupTotalSpecified` | boolean | no |  |

Used by:

- [EInvoice.einvoiceStandard.InvoiceItemGroup](InvoiceItemGroup.md).groupEntry
- [EInvoice.einvoiceStandard.InvoiceTotalGroup](InvoiceTotalGroup.md).groupEntry

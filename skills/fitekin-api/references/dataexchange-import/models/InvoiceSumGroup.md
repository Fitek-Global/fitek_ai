# EInvoice.einvoiceStandard.InvoiceSumGroup

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `balance` | [EInvoice.einvoiceStandard.InvoiceSumGroupBalance](InvoiceSumGroupBalance.md) | no |  |
| `invoiceSum` | double | no |  |
| `invoiceSumSpecified` | boolean | no |  |
| `penaltySum` | double | no |  |
| `penaltySumSpecified` | boolean | no |  |
| `addition` | null,array | no |  |
| `rounding` | double | no |  |
| `roundingSpecified` | boolean | no |  |
| `vat` | null,array | no |  |
| `totalVATSum` | double | no |  |
| `totalVATSumSpecified` | boolean | no |  |
| `totalSum` | double | no |  |
| `totalToPay` | double | no |  |
| `totalToPaySpecified` | boolean | no |  |
| `currency` | null,string | no |  |
| `accounting` | [EInvoice.einvoiceStandard.AccountingRecord](AccountingRecord.md) | no |  |
| `extension` | null,array | no |  |

Used by:

- [EInvoice.einvoiceStandard.Invoice](Invoice.md).invoiceSumGroup

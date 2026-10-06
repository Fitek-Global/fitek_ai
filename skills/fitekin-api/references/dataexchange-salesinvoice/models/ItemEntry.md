# EInvoice.einvoiceStandard.ItemEntry

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `rowNo` | null,string | no |  |
| `serialNumber` | null,string | no |  |
| `sellerProductId` | null,string | no |  |
| `buyerProductId` | null,string | no |  |
| `taricCode` | null,string | no |  |
| `accounting` | [EInvoice.einvoiceStandard.AccountingRecord](AccountingRecord.md) | no |  |
| `customerRef` | null,string | no |  |
| `description` | null,string | no |  |
| `ean` | null,string | no |  |
| `initialReading` | null,string | no |  |
| `finalReading` | null,string | no |  |
| `itemReserve` | null,array | no |  |
| `itemDetailInfo` | null,array | no |  |
| `itemSum` | double | no |  |
| `itemSumSpecified` | boolean | no |  |
| `addition` | null,array | no |  |
| `vat` | [EInvoice.einvoiceStandard.VATRecord](VATRecord.md) | no |  |
| `itemTotal` | double | no |  |
| `itemTotalSpecified` | boolean | no |  |

Used by:

- [EInvoice.einvoiceStandard.InvoiceItemGroup](InvoiceItemGroup.md).itemEntry
- [EInvoice.einvoiceStandard.InvoiceTotalGroup](InvoiceTotalGroup.md).itemEntry

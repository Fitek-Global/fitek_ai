# EInvoice.einvoiceStandard.E_Invoice

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `header` | [EInvoice.einvoiceStandard.Header](EInvoice.einvoiceStandard.Header.md) | no |  |
| `invoice` | null,array | no |  |
| `footer` | [EInvoice.einvoiceStandard.Footer](EInvoice.einvoiceStandard.Footer.md) | no |  |

Used by:

- POST /Invoices (response) — [Export](../endpoints/Export.md)
- POST /InvoicesExtended (response) — [Export](../endpoints/Export.md)
- POST /PurchaseOrders (response) — [Export](../endpoints/Export.md)
- [DataExchangeModel.Payloads.ImortedPurchaseOrder](DataExchangeModel.Payloads.ImortedPurchaseOrder.md).invoice
- [DataExchangeModel.Payloads.ImportedInvoice](DataExchangeModel.Payloads.ImportedInvoice.md).invoice
- [DataExchangeModel.Payloads.ImportedSalesInvoice](DataExchangeModel.Payloads.ImportedSalesInvoice.md).invoice

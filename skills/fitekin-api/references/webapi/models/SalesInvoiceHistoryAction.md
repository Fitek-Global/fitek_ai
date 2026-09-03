# SalesInvoiceHistoryAction

Enum (string). JSON bodies use the member name; search restrictions and numeric query parameters use the number.

- `CreatedManuallyInvoice` = 0
- `ImportedInvoice` = 1
- `DeletedInvoice` = 2
- `ImportIssue` = 3
- `ExportIssue` = 4
- `Sent` = 5
- `Cloned` = 6
- `ClonedTo` = 7
- `DeliveryIssue` = 8
- `DeliveredToKsef` = 9

Used by:

- POST /api/SalesInvoice/GetSalesInvoiceHistory (request) — [SalesInvoice](../endpoints/SalesInvoice.md)
- [SalesInvoiceHistoryDTO](SalesInvoiceHistoryDTO.md).ActionId
- [SalesInvoiceHistory](SalesInvoiceHistory.md).ActionId

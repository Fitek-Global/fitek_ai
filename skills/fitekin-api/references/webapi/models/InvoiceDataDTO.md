# InvoiceDataDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Invoice` | [InvoiceDTO](InvoiceDTO.md) | no |  |
| `CurrentGroupMember` | [GroupMemberDTO](GroupMemberDTO.md) | no |  |
| `InvoiceRowsCount` | int32 | no |  |
| `InvoiceRowsPrice` | double | no |  |
| `InvoiceRowsVAT` | double | no |  |
| `InvoiceRowsTotal` | double | no |  |
| `TransactionRowsPrice` | double | no |  |
| `TransactionRowsVAT` | double | no |  |
| `TransactionRowsTotal` | double | no |  |
| `InvoiceAccountingRowsTotal` | int32 | no |  |
| `LinkedPurchaseOrdersCount` | int32 | no |  |

Used by:

- GET /api/ArchiveInvoice/GetInvoiceDataById/{id} (response) — [ArchiveInvoice](../endpoints/ArchiveInvoice.md)
- GET /api/Invoice/GetInvoiceDataById/{id} (response) — [Invoice](../endpoints/Invoice.md)
- GET /api/Invoice/GetInvoiceDataForCompanyById (response) — [MobileApp](../endpoints/MobileApp.md)
- GET /api/v1.0/Invoice/GetInvoiceDataForCompanyById (response) — [MobileApp](../endpoints/MobileApp.md)
- GET /api/v1/Invoice/GetInvoiceDataForCompanyById (response) — [MobileApp](../endpoints/MobileApp.md)

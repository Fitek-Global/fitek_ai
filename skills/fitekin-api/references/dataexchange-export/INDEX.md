# FitekIN DataExchange API — Export: endpoint index

Base path: `{BASE_URL}/DataExchangeWebApiCore/api/v3`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

Generated from `dataexchange-export.json` (OpenAPI 3.1.1). 9 endpoints, 243 models, 0 enums.

Find the endpoint here, then open `endpoints/<Tag>.md` for parameters and `models/<Model>.md` for properties.

## Export — [endpoints/Export.md](endpoints/Export.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/Clients` | [DataExchangeModel.Requests.ClientsExportRequest](models/DataExchangeModel.Requests.ClientsExportRequest.md) | [DataExchangeModel.Payloads.ClientExportPayload](models/DataExchangeModel.Payloads.ClientExportPayload.md) |
| POST | `/Files` | [DataExchangeModel.Requests.FilesExportRequest](models/DataExchangeModel.Requests.FilesExportRequest.md) | — |
| POST | `/Invoices` | [DataExchangeModel.Requests.InvoicesExportRequest](models/DataExchangeModel.Requests.InvoicesExportRequest.md) | [EInvoice.einvoiceStandard.E_Invoice](models/EInvoice.einvoiceStandard.E_Invoice.md) |
| POST | `/InvoicesExtended` | [DataExchangeModel.Requests.InvoicesExportRequest](models/DataExchangeModel.Requests.InvoicesExportRequest.md) | [EInvoice.einvoiceStandard.E_Invoice](models/EInvoice.einvoiceStandard.E_Invoice.md) |
| POST | `/PurchaseOrderCostObjectives` | [DataExchangeModel.Requests.PurchaseOrderCostObjectivesExportRequest](models/DataExchangeModel.Requests.PurchaseOrderCostObjectivesExportRequest.md) | [DataExchangeModel.Payloads.PurchaseOrderRowCostObjectivesPayload[]](models/DataExchangeModel.Payloads.PurchaseOrderRowCostObjectivesPayload.md) |
| POST | `/PurchaseOrders` | [DataExchangeModel.Requests.PurchaseOrdersExportRequest](models/DataExchangeModel.Requests.PurchaseOrdersExportRequest.md) | [EInvoice.einvoiceStandard.E_Invoice](models/EInvoice.einvoiceStandard.E_Invoice.md) |
| POST | `/Suppliers` | [DataExchangeModel.Requests.SuppliersExportRequest](models/DataExchangeModel.Requests.SuppliersExportRequest.md) | [DataExchangeModel.Payloads.SupplierExportPayload[]](models/DataExchangeModel.Payloads.SupplierExportPayload.md) |
| POST | `/TransactionRows` | [DataExchangeModel.Requests.TransactionRowsRequest](models/DataExchangeModel.Requests.TransactionRowsRequest.md) | [DataExchangeModel.Payloads.TransactionRowPayload[]](models/DataExchangeModel.Payloads.TransactionRowPayload.md) |
| POST | `/Users` | [DataExchangeModel.Requests.UsersExportRequest](models/DataExchangeModel.Requests.UsersExportRequest.md) | [DataExchangeModel.Payloads.UserExportPayload[]](models/DataExchangeModel.Payloads.UserExportPayload.md) |

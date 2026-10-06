# FitekIN DataExchange API — Export: endpoint index

Base path: `{BASE_URL}/DataExchangeWebApiCore/api/v3`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

Generated from `dataexchange-export.json` (OpenAPI 3.1.1). 9 endpoints, 243 models, 0 enums.

Find the endpoint here, then open `endpoints/<Tag>.md` for parameters and `models/<Model>.md` for properties.

## Export — [endpoints/Export.md](endpoints/Export.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/Clients` | [DataExchangeModel.Requests.ClientsExportRequest](models/ClientsExportRequest.md) | [DataExchangeModel.Payloads.ClientExportPayload](models/ClientExportPayload.md) |
| POST | `/Files` | [DataExchangeModel.Requests.FilesExportRequest](models/FilesExportRequest.md) | — |
| POST | `/Invoices` | [DataExchangeModel.Requests.InvoicesExportRequest](models/InvoicesExportRequest.md) | [EInvoice.einvoiceStandard.E_Invoice](models/E_Invoice.md) |
| POST | `/InvoicesExtended` | [DataExchangeModel.Requests.InvoicesExportRequest](models/InvoicesExportRequest.md) | [EInvoice.einvoiceStandard.E_Invoice](models/E_Invoice.md) |
| POST | `/PurchaseOrderCostObjectives` | [DataExchangeModel.Requests.PurchaseOrderCostObjectivesExportRequest](models/PurchaseOrderCostObjectivesExportRequest.md) | [DataExchangeModel.Payloads.PurchaseOrderRowCostObjectivesPayload[]](models/PurchaseOrderRowCostObjectivesPayload.md) |
| POST | `/PurchaseOrders` | [DataExchangeModel.Requests.PurchaseOrdersExportRequest](models/PurchaseOrdersExportRequest.md) | [EInvoice.einvoiceStandard.E_Invoice](models/E_Invoice.md) |
| POST | `/Suppliers` | [DataExchangeModel.Requests.SuppliersExportRequest](models/SuppliersExportRequest.md) | [DataExchangeModel.Payloads.SupplierExportPayload[]](models/SupplierExportPayload.md) |
| POST | `/TransactionRows` | [DataExchangeModel.Requests.TransactionRowsRequest](models/TransactionRowsRequest.md) | [DataExchangeModel.Payloads.TransactionRowPayload[]](models/TransactionRowPayload.md) |
| POST | `/Users` | [DataExchangeModel.Requests.UsersExportRequest](models/UsersExportRequest.md) | [DataExchangeModel.Payloads.UserExportPayload[]](models/UserExportPayload.md) |

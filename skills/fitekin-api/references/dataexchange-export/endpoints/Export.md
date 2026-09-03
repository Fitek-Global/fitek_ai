# FitekIN DataExchange API — Export: Export

Base path: `{BASE_URL}/DataExchangeWebApiCore/api/v3`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

9 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /Clients

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ClientsExportRequest](../models/DataExchangeModel.Requests.ClientsExportRequest.md) as `application/json`

**Response (200)**

[DataExchangeModel.Payloads.ClientExportPayload](../models/DataExchangeModel.Payloads.ClientExportPayload.md)

## POST /Files

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.FilesExportRequest](../models/DataExchangeModel.Requests.FilesExportRequest.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /Invoices

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoicesExportRequest](../models/DataExchangeModel.Requests.InvoicesExportRequest.md) as `application/json`

**Response (200)**

[EInvoice.einvoiceStandard.E_Invoice](../models/EInvoice.einvoiceStandard.E_Invoice.md)

## POST /InvoicesExtended

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoicesExportRequest](../models/DataExchangeModel.Requests.InvoicesExportRequest.md) as `application/json`

**Response (200)**

[EInvoice.einvoiceStandard.E_Invoice](../models/EInvoice.einvoiceStandard.E_Invoice.md)

## POST /PurchaseOrderCostObjectives

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.PurchaseOrderCostObjectivesExportRequest](../models/DataExchangeModel.Requests.PurchaseOrderCostObjectivesExportRequest.md) as `application/json`

**Response (200)**

[DataExchangeModel.Payloads.PurchaseOrderRowCostObjectivesPayload[]](../models/DataExchangeModel.Payloads.PurchaseOrderRowCostObjectivesPayload.md)

## POST /PurchaseOrders

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.PurchaseOrdersExportRequest](../models/DataExchangeModel.Requests.PurchaseOrdersExportRequest.md) as `application/json`

**Response (200)**

[EInvoice.einvoiceStandard.E_Invoice](../models/EInvoice.einvoiceStandard.E_Invoice.md)

## POST /Suppliers

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.SuppliersExportRequest](../models/DataExchangeModel.Requests.SuppliersExportRequest.md) as `application/json`

**Response (200)**

[DataExchangeModel.Payloads.SupplierExportPayload[]](../models/DataExchangeModel.Payloads.SupplierExportPayload.md)

## POST /TransactionRows

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.TransactionRowsRequest](../models/DataExchangeModel.Requests.TransactionRowsRequest.md) as `application/json`

**Response (200)**

[DataExchangeModel.Payloads.TransactionRowPayload[]](../models/DataExchangeModel.Payloads.TransactionRowPayload.md)

## POST /Users

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.UsersExportRequest](../models/DataExchangeModel.Requests.UsersExportRequest.md) as `application/json`

**Response (200)**

[DataExchangeModel.Payloads.UserExportPayload[]](../models/DataExchangeModel.Payloads.UserExportPayload.md)

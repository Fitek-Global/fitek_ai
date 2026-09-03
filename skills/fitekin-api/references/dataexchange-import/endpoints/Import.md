# FitekIN DataExchange API — Import: Import

Base path: `{BASE_URL}/DataExchangeWebApiCore/api/v3`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

29 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /Account

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.AccountImportRequest`1[DataExchangeModel.Payloads.AccountPayload]](../models/DataExchangeModel.Requests.AccountImportRequest_1_DataExchangeModel.Payloads.AccountPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.AccountPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.AccountPayload_.md)

## POST /Accounts

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.AccountImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.AccountPayload]]](../models/DataExchangeModel.Requests.AccountImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.AccountPayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /Archive

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ArchiveInvoiceImportRequest](../models/DataExchangeModel.Requests.ArchiveInvoiceImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.ArchiveInvoiceImportResponse](../models/DataExchangeModel.ArchiveInvoiceImportResponse.md)

## POST /Companies

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.CompanyImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.CompanyPayload]]](../models/DataExchangeModel.General.Input.CompanyImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.CompanyPayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /Company

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.CompanyImportRequest`1[DataExchangeModel.Payloads.CompanyPayload]](../models/DataExchangeModel.General.Input.CompanyImportRequest_1_DataExchangeModel.Payloads.CompanyPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.CompanyPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.CompanyPayload_.md)

## POST /ConfirmationFlowAction

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.ImportRequest`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](../models/DataExchangeModel.General.Input.ImportRequest_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.InvoiceConfirmationPayload_.md)

## POST /Dimension

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.DimensionImportRequest`1[DataExchangeModel.Payloads.DimensionPayload]](../models/DataExchangeModel.Requests.DimensionImportRequest_1_DataExchangeModel.Payloads.DimensionPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.DimensionPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.DimensionPayload_.md)

## POST /Dimensions

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.DimensionImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.DimensionPayload]]](../models/DataExchangeModel.Requests.DimensionImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.DimensionPayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /File

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.FilePayload]](../models/DataExchangeModel.Requests.FileImportRequest_1_DataExchangeModel.Payloads.FilePayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.FilePayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.FilePayload_.md)

## POST /Invoice

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceImportRequest](../models/DataExchangeModel.Requests.InvoiceImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.InvoiceImportResponse](../models/DataExchangeModel.InvoiceImportResponse.md)

## POST /InvoiceHeaderExtensionListValue

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceHeaderExtensionImportRequest`1[DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload]](../models/DataExchangeModel.Requests.InvoiceHeaderExtensionImportRequest_1_DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload_.md)

## POST /InvoiceHeaderExtensionListValues

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceHeaderExtensionImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload]]](../models/DataExchangeModel.Requests.InvoiceHeaderExtensionImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /InvoicesUpdate

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.ImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceUpdatePayload]]](../models/DataExchangeModel.General.Input.ImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.InvoiceUpdatePayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /InvoiceType

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceTypeImportRequest`1[DataExchangeModel.Payloads.InvoiceTypePayload]](../models/DataExchangeModel.Requests.InvoiceTypeImportRequest_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.InvoiceTypePayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.InvoiceTypePayload_.md)

## POST /InvoiceTypes

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceTypeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceTypePayload]]](../models/DataExchangeModel.Requests.InvoiceTypeImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.InvoiceTypePayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /InvoiceUBL

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceUBLImportRequest](../models/DataExchangeModel.Requests.InvoiceUBLImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.InvoiceUBLImportResponse](../models/DataExchangeModel.InvoiceUBLImportResponse.md)

## POST /InvoiceUpdate

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.ImportRequest`1[DataExchangeModel.Payloads.InvoiceUpdatePayload]](../models/DataExchangeModel.General.Input.ImportRequest_1_DataExchangeModel.Payloads.InvoiceUpdatePayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.InvoiceUpdatePayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.InvoiceUpdatePayload_.md)

## POST /MultiCompanyUser

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.MultiCompanyUserAddRequest`1[DataExchangeModel.Payloads.MultiCompanyUserAddPayload]](../models/DataExchangeModel.Requests.MultiCompanyUserAddRequest_1_DataExchangeModel.Payloads.MultiCompanyUserAddPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.CompanyMembershipPayload_.md)

## POST /ProductItem

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ProductImportRequest`1[DataExchangeModel.Payloads.ProductPayload]](../models/DataExchangeModel.Requests.ProductImportRequest_1_DataExchangeModel.Payloads.ProductPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.ProductPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.ProductPayload_.md)

## POST /ProductItems

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ProductImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.ProductPayload]]](../models/DataExchangeModel.Requests.ProductImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.ProductPayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /PurchaseOrder

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.PurchaseOrderImportRequest](../models/DataExchangeModel.Requests.PurchaseOrderImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.PurchaseOrderImportResponse](../models/DataExchangeModel.PurchaseOrderImportResponse.md)

## POST /PurchaseOrderUpdate

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.PurchaseOrderImportRequest](../models/DataExchangeModel.Requests.PurchaseOrderImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.PurchaseOrderImportResponse](../models/DataExchangeModel.PurchaseOrderImportResponse.md)

## POST /Supplier

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.SupplierImportRequest`1[DataExchangeModel.Payloads.SupplierPayload]](../models/DataExchangeModel.Requests.SupplierImportRequest_1_DataExchangeModel.Payloads.SupplierPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.SupplierPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.SupplierPayload_.md)

## POST /Suppliers

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.SupplierImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.SupplierPayload]]](../models/DataExchangeModel.Requests.SupplierImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.SupplierPayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /TransactionRows

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.TransactionRowsImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.TransactionRowPayload]]](../models/DataExchangeModel.Requests.TransactionRowsImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.TransactionRowPayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /User

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.UserAddRequest`1[DataExchangeModel.Payloads.UserAddPayload]](../models/DataExchangeModel.Requests.UserAddRequest_1_DataExchangeModel.Payloads.UserAddPayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.UserAddPayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.UserAddPayload_.md)

## POST /Users

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.UserAddRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.UserAddPayload]]](../models/DataExchangeModel.Requests.UserAddRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.UserAddPayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

## POST /VatCode

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.VatCodeImportRequest`1[DataExchangeModel.Payloads.VatCodePayload]](../models/DataExchangeModel.Requests.VatCodeImportRequest_1_DataExchangeModel.Payloads.VatCodePayload_.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.VatCodePayload]](../models/DataExchangeModel.General.Output.ImportResult_1_DataExchangeModel.Payloads.VatCodePayload_.md)

## POST /VatCodes

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.VatCodeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.VatCodePayload]]](../models/DataExchangeModel.Requests.VatCodeImportRequest_1_System.Collections.Generic.List_1_DataExchangeModel.Payloads.VatCodePayload__.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/DataExchangeModel.GeneralResponse.md)

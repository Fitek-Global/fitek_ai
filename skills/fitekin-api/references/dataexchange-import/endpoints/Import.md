# FitekIN DataExchange API — Import: Import

Base path: `{BASE_URL}/DataExchangeWebApiCore/api/v3`. Integrator credentials (see ../data-exchange.md). Not the Web API session token.

29 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /Account

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.AccountImportRequest`1[DataExchangeModel.Payloads.AccountPayload]](../models/AccountImportRequest_AccountPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.AccountPayload]](../models/ImportResult_AccountPayload.md)

## POST /Accounts

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.AccountImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.AccountPayload]]](../models/AccountImportRequest_List_AccountPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /Archive

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ArchiveInvoiceImportRequest](../models/ArchiveInvoiceImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.ArchiveInvoiceImportResponse](../models/ArchiveInvoiceImportResponse.md)

## POST /Companies

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.CompanyImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.CompanyPayload]]](../models/CompanyImportRequest_List_CompanyPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /Company

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.CompanyImportRequest`1[DataExchangeModel.Payloads.CompanyPayload]](../models/CompanyImportRequest_CompanyPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.CompanyPayload]](../models/ImportResult_CompanyPayload.md)

## POST /ConfirmationFlowAction

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.ImportRequest`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](../models/ImportRequest_InvoiceConfirmationPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.InvoiceConfirmationPayload]](../models/ImportResult_InvoiceConfirmationPayload.md)

## POST /Dimension

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.DimensionImportRequest`1[DataExchangeModel.Payloads.DimensionPayload]](../models/DimensionImportRequest_DimensionPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.DimensionPayload]](../models/ImportResult_DimensionPayload.md)

## POST /Dimensions

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.DimensionImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.DimensionPayload]]](../models/DimensionImportRequest_List_DimensionPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /File

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.FileImportRequest`1[DataExchangeModel.Payloads.FilePayload]](../models/FileImportRequest_FilePayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.FilePayload]](../models/ImportResult_FilePayload.md)

## POST /Invoice

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceImportRequest](../models/InvoiceImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.InvoiceImportResponse](../models/InvoiceImportResponse.md)

## POST /InvoiceHeaderExtensionListValue

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceHeaderExtensionImportRequest`1[DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload]](../models/InvoiceHeaderExtensionImportRequest_InvoiceHeaderExtensionPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload]](../models/ImportResult_InvoiceHeaderExtensionPayload.md)

## POST /InvoiceHeaderExtensionListValues

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceHeaderExtensionImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceHeaderExtensionPayload]]](../models/InvoiceHeaderExtensionImportRequest_List_InvoiceHeaderExtensionPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /InvoicesUpdate

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.ImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceUpdatePayload]]](../models/ImportRequest_List_InvoiceUpdatePayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /InvoiceType

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceTypeImportRequest`1[DataExchangeModel.Payloads.InvoiceTypePayload]](../models/InvoiceTypeImportRequest_InvoiceTypePayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.InvoiceTypePayload]](../models/ImportResult_InvoiceTypePayload.md)

## POST /InvoiceTypes

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceTypeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.InvoiceTypePayload]]](../models/InvoiceTypeImportRequest_List_InvoiceTypePayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /InvoiceUBL

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.InvoiceUBLImportRequest](../models/InvoiceUBLImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.InvoiceUBLImportResponse](../models/InvoiceUBLImportResponse.md)

## POST /InvoiceUpdate

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.General.Input.ImportRequest`1[DataExchangeModel.Payloads.InvoiceUpdatePayload]](../models/ImportRequest_InvoiceUpdatePayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.InvoiceUpdatePayload]](../models/ImportResult_InvoiceUpdatePayload.md)

## POST /MultiCompanyUser

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.MultiCompanyUserAddRequest`1[DataExchangeModel.Payloads.MultiCompanyUserAddPayload]](../models/MultiCompanyUserAddRequest_MultiCompanyUserAddPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.CompanyMembershipPayload]](../models/ImportResult_CompanyMembershipPayload.md)

## POST /ProductItem

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ProductImportRequest`1[DataExchangeModel.Payloads.ProductPayload]](../models/ProductImportRequest_ProductPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.ProductPayload]](../models/ImportResult_ProductPayload.md)

## POST /ProductItems

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.ProductImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.ProductPayload]]](../models/ProductImportRequest_List_ProductPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /PurchaseOrder

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.PurchaseOrderImportRequest](../models/PurchaseOrderImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.PurchaseOrderImportResponse](../models/PurchaseOrderImportResponse.md)

## POST /PurchaseOrderUpdate

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.PurchaseOrderImportRequest](../models/PurchaseOrderImportRequest.md) as `application/xml`

**Response (200)**

[DataExchangeModel.PurchaseOrderImportResponse](../models/PurchaseOrderImportResponse.md)

## POST /Supplier

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.SupplierImportRequest`1[DataExchangeModel.Payloads.SupplierPayload]](../models/SupplierImportRequest_SupplierPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.SupplierPayload]](../models/ImportResult_SupplierPayload.md)

## POST /Suppliers

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.SupplierImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.SupplierPayload]]](../models/SupplierImportRequest_List_SupplierPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /TransactionRows

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.TransactionRowsImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.TransactionRowPayload]]](../models/TransactionRowsImportRequest_List_TransactionRowPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /User

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.UserAddRequest`1[DataExchangeModel.Payloads.UserAddPayload]](../models/UserAddRequest_UserAddPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.UserAddPayload]](../models/ImportResult_UserAddPayload.md)

## POST /Users

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.UserAddRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.UserAddPayload]]](../models/UserAddRequest_List_UserAddPayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

## POST /VatCode

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.VatCodeImportRequest`1[DataExchangeModel.Payloads.VatCodePayload]](../models/VatCodeImportRequest_VatCodePayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.VatCodePayload]](../models/ImportResult_VatCodePayload.md)

## POST /VatCodes

**Parameters**

_No parameters._

**Request body**

[DataExchangeModel.Requests.VatCodeImportRequest`1[System.Collections.Generic.List`1[DataExchangeModel.Payloads.VatCodePayload]]](../models/VatCodeImportRequest_List_VatCodePayload.md) as `application/json`

**Response (200)**

[DataExchangeModel.GeneralResponse](../models/GeneralResponse.md)

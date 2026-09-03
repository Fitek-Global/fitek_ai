# FitekIN Web API: MobileApp

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

37 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/BO/ChangeUserLastCompany

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/BO/GetStatusUserCompanies

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[CompanyAccessCheckFullResponseDTO[]](../models/CompanyAccessCheckFullResponseDTO.md)

## GET /api/BO/GetUserCompanies (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyName` | query | no | string |  |
| `pageSize` | query | no | int32 |  |
| `lastCompanyGuid` | query | no | string |  |

**Request body**

_None._

**Response (200)**

[BackOfficeCompanyDTO[]](../models/BackOfficeCompanyDTO.md)

## POST /api/BO/GetUserCompanies

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[BackOfficeCompanyDTOPagedListContainer](../models/BackOfficeCompanyDTOPagedListContainer.md)

## GET /api/BO/GetUserSettings

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[UserSetting[]](../models/UserSetting.md)

## POST /api/BO/UpdateUserSettings

**Parameters**

_No parameters._

**Request body**

[UserSetting[]](../models/UserSetting.md) as `application/json`

**Response (200)**

[UserSetting[]](../models/UserSetting.md)

## GET /api/Company/GetCompanyData

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[CompanyDataDTO](../models/CompanyDataDTO.md)

## GET /api/Company/GetCompanySettings

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[BackOfficeCompanySettingDTO[]](../models/BackOfficeCompanySettingDTO.md)

## GET /api/Company/GetCurrentCompanySettings (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[BackOfficeCompanySettingDTO[]](../models/BackOfficeCompanySettingDTO.md)

## GET /api/File/DisplayFileById/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | string |  |
| `companyBoGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/File/DownloadPurchaseOrderFile

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderFileAttachmentId` | query | no | int32 |  |
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/File/GetPurchaseOrderFileToken

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderFileAttachmentId` | query | no | int32 |  |
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/File/PreviewPurchaseOrderFileByToken

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | query | no | string |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/GroupMember/CheckAccessToCompany

**Parameters**

_No parameters._

**Request body**

[CompanyAccessCheckDTO](../models/CompanyAccessCheckDTO.md) as `application/json`

**Response (200)**

[CompanyAccessCheckResponseDTO](../models/CompanyAccessCheckResponseDTO.md)

## POST /api/GroupMember/GetApproversList

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

[GroupMemberApproversParamDTO](../models/GroupMemberApproversParamDTO.md) as `application/json`

**Response (200)**

[GroupMemberApproverDTO[]](../models/GroupMemberApproverDTO.md)

## GET /api/GroupMember/GetCompanyGroupMembers

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `boCompanyGuid` | query | no | uuid |  |
| `excludeBoUsers` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[GroupMemberDTO[]](../models/GroupMemberDTO.md)

## GET /api/GroupMember/GetGroupMember

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `userGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[GroupMemberDTO](../models/GroupMemberDTO.md)

## POST /api/Invoice/ApproveForCompany

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |
| `stepNumber` | query | no | int32 |  |

**Request body**

Inline body as `application/x-www-form-urlencoded`:

| Field | Type | Required |
|---|---|---|
| `TaskId` | int32 | no |
| `Comment` | string | no |
| `NextConfirmerGroupMemberOrWorkflowTemplateId` | int32 | no |
| `IsNextConfirmerWorkflowTemplate` | boolean | no |
| `Action` | string | no |
| `InvoiceId` | int32 | no |


**Response (200)**

[TaskDTO](../models/TaskDTO.md)

## GET /api/Invoice/AreCustomFieldsValid/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `companyBoGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

`array`

## GET /api/Invoice/AreTransactionRowsValid/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `companyBoGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

`array`

## GET /api/Invoice/AreTransactionRowsValidPenultimate/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |
| `companyBoGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

`array`

## GET /api/Invoice/GetInvoiceDataForCompanyById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |
| `invoiceId` | query | no | int32 |  |
| `includeInvoiceCustomizations` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataDTO](../models/InvoiceDataDTO.md)

## GET /api/Invoice/GetInvoicesWaitingForUserApproval

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |
| `take` | query | no | int32 |  |
| `skip` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceForMobileDTOPagedListContainer](../models/InvoiceForMobileDTOPagedListContainer.md)

## POST /api/Invoice/GetRegistryInvoicesMin

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[InvoiceRegistryMinDTOPagedListContainer](../models/InvoiceRegistryMinDTOPagedListContainer.md)

## POST /api/Invoice/GetRegistryInvoicesMinCount

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Invoice/GetRegistryMyCompaniesInvoicesMin

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `boGuids` | query | no | uuid[] |  |

**Request body**

[InvoiceSearchOptions](../models/InvoiceSearchOptions.md) as `application/json`

**Response (200)**

[InvoiceRegistryMinDTOCompanyPagedListContainer[]](../models/InvoiceRegistryMinDTOCompanyPagedListContainer.md)

## POST /api/PurchaseOrders/DoTaskAction

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

[PurchaseOrderTaskActionDto](../models/PurchaseOrderTaskActionDto.md) as `application/json`

**Response (200)**

[PurchaseOrderTaskActionDto](../models/PurchaseOrderTaskActionDto.md)

## GET /api/PurchaseOrders/GetListForDashboard

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `take` | query | no | int32 |  |
| `skip` | query | no | int32 |  |
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrdersSmallDTOPagedListContainer](../models/PurchaseOrdersSmallDTOPagedListContainer.md)

## POST /api/PurchaseOrders/GetListForDashboard

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[PurchaseOrdersSmallDTOPagedListContainer](../models/PurchaseOrdersSmallDTOPagedListContainer.md)

## GET /api/PurchaseOrders/GetPurchaseOrderById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderId` | query | no | int32 |  |
| `boCompanyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrdersDTO](../models/PurchaseOrdersDTO.md)

## POST /api/PurchaseOrders/InsertTaskAction

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `iPurchaseOrderId` | query | no | int32 |  |
| `iGroupMemberId` | query | no | int32 |  |
| `iOrderNumberToInsert` | query | no | int32 |  |
| `bInParallel` | query | no | boolean |  |
| `boCompanyGuid` | query | no | uuid |  |
| `poFull` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[PurchaseOrderTaskActionDto](../models/PurchaseOrderTaskActionDto.md)

## POST /api/Session/SetCompany

**Parameters**

_No parameters._

**Request body**

[SetSessionCompanyRequestDTO](../models/SetSessionCompanyRequestDTO.md) as `application/json`

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/User/GetCurrentUser

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

[UserDataDTO](../models/UserDataDTO.md)

## GET /api/v1.0/Invoice/GetInvoiceDataForCompanyById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |
| `invoiceId` | query | no | int32 |  |
| `includeInvoiceCustomizations` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataDTO](../models/InvoiceDataDTO.md)

## GET /api/v1/Invoice/GetInvoiceDataForCompanyById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |
| `invoiceId` | query | no | int32 |  |
| `includeInvoiceCustomizations` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[InvoiceDataDTO](../models/InvoiceDataDTO.md)

## GET /api/v2.0/Invoice/GetInvoiceDataForCompanyById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/v2/Invoice/GetInvoiceDataForCompanyById

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyBoGuid` | query | no | uuid |  |
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

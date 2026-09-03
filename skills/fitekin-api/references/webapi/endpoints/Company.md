# FitekIN Web API: Company

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

24 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Company/AddCompanySettings

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `companyGuid` | query | no | uuid |  |

**Request body**

[BackOfficeCompanySettingDTO[]](../models/BackOfficeCompanySettingDTO.md) as `application/json`

**Response (200)**

[BackOfficeCompanySettingDTO[]](../models/BackOfficeCompanySettingDTO.md)

## POST /api/Company/AddInvoiceCustomField

**Parameters**

_No parameters._

**Request body**

[InvoiceCustomFieldDTO](../models/InvoiceCustomFieldDTO.md) as `application/json`

**Response (200)**

[InvoiceCustomFieldDTO](../models/InvoiceCustomFieldDTO.md)

## POST /api/Company/AddInvoiceCustomFieldItem

**Parameters**

_No parameters._

**Request body**

[InvoiceCustomFieldItemDTO](../models/InvoiceCustomFieldItemDTO.md) as `application/json`

**Response (200)**

[InvoiceCustomFieldDTO](../models/InvoiceCustomFieldDTO.md)

## POST /api/Company/AddOrUpdateCompanyBankAccount

**Parameters**

_No parameters._

**Request body**

[BackOfficeCompanyBankAccountDTO](../models/BackOfficeCompanyBankAccountDTO.md) as `application/json`

**Response (200)**

[BackOfficeCompanyBankAccountDTO](../models/BackOfficeCompanyBankAccountDTO.md)

## POST /api/Company/AddOrUpdateCompanySetting

**Parameters**

_No parameters._

**Request body**

[BackOfficeCompanySettingDTO](../models/BackOfficeCompanySettingDTO.md) as `application/json`

**Response (200)**

[BackOfficeCompanySettingDTO](../models/BackOfficeCompanySettingDTO.md)

## GET /api/Company/DeleteInvoiceCustomField/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## POST /api/Company/DeleteInvoiceCustomFieldItems

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

`array`

## GET /api/Company/GetAllCompaniesFromTheSameOrganizationByName

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `name` | query | no | string |  |
| `onlyActiveCompanies` | query | no | boolean |  |

**Request body**

_None._

**Response (200)**

[BackOfficeCompanyDTO[]](../models/BackOfficeCompanyDTO.md)

## GET /api/Company/GetCompany

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[BackOfficeCompanyDTO](../models/BackOfficeCompanyDTO.md)

## POST /api/Company/GetCompanyUsers

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[UserDTOPagedListContainer](../models/UserDTOPagedListContainer.md)

## GET /api/Company/GetCurrentCompany

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[BackOfficeCompanyDTO](../models/BackOfficeCompanyDTO.md)

## GET /api/Company/GetCurrentCompanyLogo

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Company/GetInvoiceCustomFieldItems/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceCustomFieldItemDTO[]](../models/InvoiceCustomFieldItemDTO.md)

## POST /api/Company/GetInvoiceCustomFieldItemsPaged

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[InvoiceCustomFieldItemDTOPagedListContainer](../models/InvoiceCustomFieldItemDTOPagedListContainer.md)

## GET /api/Company/GetInvoiceCustomFieldsAll

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[InvoiceCustomFieldDTO[]](../models/InvoiceCustomFieldDTO.md)

## GET /api/Company/GetInvoiceCustomFieldsWithoutItems (deprecated)

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[InvoiceCustomFieldDTO[]](../models/InvoiceCustomFieldDTO.md)

## POST /api/Company/GetInvoiceCustomFieldsWithoutItems

**Parameters**

_No parameters._

**Request body**

[BaseSearch](../models/BaseSearch.md) as `application/json`

**Response (200)**

[InvoiceCustomFieldDTOPagedListContainer](../models/InvoiceCustomFieldDTOPagedListContainer.md)

## GET /api/Company/GetInvoiceCustomFieldWithItems

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceCustomFieldId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[InvoiceCustomFieldDTO](../models/InvoiceCustomFieldDTO.md)

## GET /api/Company/GetSerbiaCompanyData

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `regNumber` | query | no | string |  |
| `companyType` | query | no | enum [SerbiaCompanyType](../models/SerbiaCompanyType.md) |  |

**Request body**

_None._

**Response (200)**

[SerbiaCompanyData](../models/SerbiaCompanyData.md)

## GET /api/Company/GetTimeZones

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Company/GetWaitingInvoicesCount (deprecated)

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `dbName` | query | no | string |  |
| `userGuid` | query | no | uuid |  |
| `companyGuid` | query | no | uuid |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Company/GetWaitingInvoicesCounts

**Parameters**

_No parameters._

**Request body**

_None._

**Response (200)**

[InvoiceCountDto[]](../models/InvoiceCountDto.md)

## POST /api/Company/GetWaitingInvoicesCounts

**Parameters**

_No parameters._

**Request body**

`array` as `application/json`

**Response (200)**

[InvoiceCountDto[]](../models/InvoiceCountDto.md)

## POST /api/Company/UpdateCompanyContactDetails

**Parameters**

_No parameters._

**Request body**

[CompanyContactDetailsDTO](../models/CompanyContactDetailsDTO.md) as `application/json`

**Response (200)**

[CompanyContactDetailsDTO](../models/CompanyContactDetailsDTO.md)

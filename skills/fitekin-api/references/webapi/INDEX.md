# FitekIN Web API: endpoint index

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

Generated from `webapi-v1.json` (OpenAPI 3.0.1). 445 endpoints, 407 models, 55 enums.

Find the endpoint here, then open `endpoints/<Tag>.md` for parameters and `models/<Model>.md` for properties.

## Account — [endpoints/Account.md](endpoints/Account.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Account/AddAccount` | [AccountDTO](models/AccountDTO.md) | [AccountDTO](models/AccountDTO.md) |
| DELETE | `/api/Account/DeleteAccount/{id}` | — | — |
| POST | `/api/Account/EditAccount` | [AccountDTO](models/AccountDTO.md) | [AccountDTO](models/AccountDTO.md) |
| POST | `/api/Account/ExportAccountsToCSV` | [RestrictionItem[]](models/RestrictionItem.md) | — |
| POST | `/api/Account/ExportAccountsToXls` | [RestrictionItem[]](models/RestrictionItem.md) | — |
| GET | `/api/Account/GetAccountById/{id}` | — | [AccountDTO](models/AccountDTO.md) |
| POST | `/api/Account/GetAccounts` | [BaseSearch](models/BaseSearch.md) | [AccountDTOPagedListContainer](models/AccountDTOPagedListContainer.md) |
| GET | `/api/Account/GetAccountsByDescription` | — | [AccountDTOPagedListContainer](models/AccountDTOPagedListContainer.md) |
| GET | `/api/Account/GetInvoiceCountInUse` | — | — |
| POST | `/api/Account/ImportAccount` | [AccountRequest](models/AccountRequest.md) | [AccountDTO](models/AccountDTO.md) |
| POST | `/api/Account/UploadAccountFile` | [FileDTO](models/FileDTO.md) | [ImportResponse](models/ImportResponse.md) |
| POST | `/api/Account/UploadCSVFile` | [FileDTO](models/FileDTO.md) | [ImportResponse](models/ImportResponse.md) |
| POST | `/api/Account/UploadCSVFile2` | [CsvUploadRequest](models/CsvUploadRequest.md) | [ImportResponse](models/ImportResponse.md) |

## ArchiveInvoice — [endpoints/ArchiveInvoice.md](endpoints/ArchiveInvoice.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/ArchiveInvoice/GetAccounts` | — | [AccountDTO[]](models/AccountDTO.md) |
| GET | `/api/ArchiveInvoice/GetCustomCostObjectives` | — | [CustomCostObjectiveFullDto[]](models/CustomCostObjectiveFullDto.md) |
| GET | `/api/ArchiveInvoice/GetInvoiceDataById/{id}` | — | [InvoiceDataDTO](models/InvoiceDataDTO.md) |
| GET | `/api/ArchiveInvoice/GetInvoiceRowsById/{id}` | — | [InvoiceRowDTO[]](models/InvoiceRowDTO.md) |
| POST | `/api/ArchiveInvoice/GetInvoicesSmall` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [InvoiceDTOPagedListContainer](models/InvoiceDTOPagedListContainer.md) |
| GET | `/api/ArchiveInvoice/GetInvoiceTransactionRows/{id}` | — | [TransactionRowDTO[]](models/TransactionRowDTO.md) |

## AutoTransactions — [endpoints/AutoTransactions.md](endpoints/AutoTransactions.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/AutoTransactions/ApplyAutoTransactionToInvoice` | — | [InvoiceBL](models/InvoiceBL.md) |
| GET | `/api/AutoTransactions/CheckAutoTransactionNameForDuplicates` | — | — |
| POST | `/api/AutoTransactions/CreateFromRecommendation` | [AutoTransactionRecommendationDTO](models/AutoTransactionRecommendationDTO.md) | [AutoTransactionUiObjectDTO](models/AutoTransactionUiObjectDTO.md) |
| GET | `/api/AutoTransactions/DeleteAutoTransaction` | — | — |
| GET | `/api/AutoTransactions/DuplicateAutoTransaction` | — | [AutoTransactionsDTO](models/AutoTransactionsDTO.md) |
| POST | `/api/AutoTransactions/ExportAutoTransactions` | [BaseSearch](models/BaseSearch.md) | — |
| GET | `/api/AutoTransactions/GetAutoTransactionForUiById` | — | [AutoTransactionUiObjectDTO](models/AutoTransactionUiObjectDTO.md) |
| GET | `/api/AutoTransactions/GetAutoTransactionSnapshotForInvoice` | — | [AutoTransactionUiObjectDTO](models/AutoTransactionUiObjectDTO.md) |
| GET | `/api/AutoTransactions/GetByNamePart` | — | [AutoTransactionRuleSimpleDTO[]](models/AutoTransactionRuleSimpleDTO.md) |
| GET | `/api/AutoTransactions/GetEmptyUiObject` | — | [AutoTransactionUiObjectDTO](models/AutoTransactionUiObjectDTO.md) |
| GET | `/api/AutoTransactions/GetLastMetaInfosBySupplier` | — | [AutoTransactionExtension[]](models/AutoTransactionExtension.md) |
| POST | `/api/AutoTransactions/GetList` | [BaseSearch](models/BaseSearch.md) | [AutoTransactionsDTOPagedListContainer](models/AutoTransactionsDTOPagedListContainer.md) |
| POST | `/api/AutoTransactions/GetListMin` | [BaseSearch](models/BaseSearch.md) | [AutoTransactionListMinDTOPagedListContainer](models/AutoTransactionListMinDTOPagedListContainer.md) |
| POST | `/api/AutoTransactions/GetPartiesExtensionsByTypeAndField` | [TriggerExtensionRequest](models/TriggerExtensionRequest.md) | `array` |
| GET | `/api/AutoTransactions/GetRecommendations` | — | [AutoTransactionRecommendationDTO[]](models/AutoTransactionRecommendationDTO.md) |
| GET | `/api/AutoTransactions/IsAutoTransactionFinished` | — | — |
| POST | `/api/AutoTransactions/SaveAutoTransaction` | [AutoTransactionUiObjectDTO](models/AutoTransactionUiObjectDTO.md) | [AutoTransactionUiObjectDTO](models/AutoTransactionUiObjectDTO.md) |
| GET | `/api/AutoTransactions/ToggleRuleActivity` | — | — |

## BO — [endpoints/BO.md](endpoints/BO.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/BO/GetCompaniesForUser` | — | [BackOfficeCompanyDTO[]](models/BackOfficeCompanyDTO.md) |

## Company — [endpoints/Company.md](endpoints/Company.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Company/AddCompanySettings` | [BackOfficeCompanySettingDTO[]](models/BackOfficeCompanySettingDTO.md) | [BackOfficeCompanySettingDTO[]](models/BackOfficeCompanySettingDTO.md) |
| POST | `/api/Company/AddInvoiceCustomField` | [InvoiceCustomFieldDTO](models/InvoiceCustomFieldDTO.md) | [InvoiceCustomFieldDTO](models/InvoiceCustomFieldDTO.md) |
| POST | `/api/Company/AddInvoiceCustomFieldItem` | [InvoiceCustomFieldItemDTO](models/InvoiceCustomFieldItemDTO.md) | [InvoiceCustomFieldDTO](models/InvoiceCustomFieldDTO.md) |
| POST | `/api/Company/AddOrUpdateCompanyBankAccount` | [BackOfficeCompanyBankAccountDTO](models/BackOfficeCompanyBankAccountDTO.md) | [BackOfficeCompanyBankAccountDTO](models/BackOfficeCompanyBankAccountDTO.md) |
| POST | `/api/Company/AddOrUpdateCompanySetting` | [BackOfficeCompanySettingDTO](models/BackOfficeCompanySettingDTO.md) | [BackOfficeCompanySettingDTO](models/BackOfficeCompanySettingDTO.md) |
| GET | `/api/Company/DeleteInvoiceCustomField/{id}` | — | — |
| POST | `/api/Company/DeleteInvoiceCustomFieldItems` | `array` | `array` |
| GET | `/api/Company/GetAllCompaniesFromTheSameOrganizationByName` | — | [BackOfficeCompanyDTO[]](models/BackOfficeCompanyDTO.md) |
| GET | `/api/Company/GetCompany` | — | [BackOfficeCompanyDTO](models/BackOfficeCompanyDTO.md) |
| POST | `/api/Company/GetCompanyUsers` | [BaseSearch](models/BaseSearch.md) | [UserDTOPagedListContainer](models/UserDTOPagedListContainer.md) |
| GET | `/api/Company/GetCurrentCompany` | — | [BackOfficeCompanyDTO](models/BackOfficeCompanyDTO.md) |
| GET | `/api/Company/GetCurrentCompanyLogo` | — | — |
| GET | `/api/Company/GetInvoiceCustomFieldItems/{id}` | — | [InvoiceCustomFieldItemDTO[]](models/InvoiceCustomFieldItemDTO.md) |
| POST | `/api/Company/GetInvoiceCustomFieldItemsPaged` | [BaseSearch](models/BaseSearch.md) | [InvoiceCustomFieldItemDTOPagedListContainer](models/InvoiceCustomFieldItemDTOPagedListContainer.md) |
| GET | `/api/Company/GetInvoiceCustomFieldsAll` | — | [InvoiceCustomFieldDTO[]](models/InvoiceCustomFieldDTO.md) |
| GET | `/api/Company/GetInvoiceCustomFieldsWithoutItems` | — | [InvoiceCustomFieldDTO[]](models/InvoiceCustomFieldDTO.md) |
| POST | `/api/Company/GetInvoiceCustomFieldsWithoutItems` | [BaseSearch](models/BaseSearch.md) | [InvoiceCustomFieldDTOPagedListContainer](models/InvoiceCustomFieldDTOPagedListContainer.md) |
| GET | `/api/Company/GetInvoiceCustomFieldWithItems` | — | [InvoiceCustomFieldDTO](models/InvoiceCustomFieldDTO.md) |
| GET | `/api/Company/GetSerbiaCompanyData` | — | [SerbiaCompanyData](models/SerbiaCompanyData.md) |
| GET | `/api/Company/GetTimeZones` | — | — |
| GET | `/api/Company/GetWaitingInvoicesCount` | — | — |
| GET | `/api/Company/GetWaitingInvoicesCounts` | — | [InvoiceCountDto[]](models/InvoiceCountDto.md) |
| POST | `/api/Company/GetWaitingInvoicesCounts` | `array` | [InvoiceCountDto[]](models/InvoiceCountDto.md) |
| POST | `/api/Company/UpdateCompanyContactDetails` | [CompanyContactDetailsDTO](models/CompanyContactDetailsDTO.md) | [CompanyContactDetailsDTO](models/CompanyContactDetailsDTO.md) |

## Currency — [endpoints/Currency.md](endpoints/Currency.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/Currency/GetAll` | — | [CurrencyDTO[]](models/CurrencyDTO.md) |

## CustomCostObjective — [endpoints/CustomCostObjective.md](endpoints/CustomCostObjective.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/CustomCostObjective/AddCustomCostObjective` | [CustomCostObjectiveFullDto](models/CustomCostObjectiveFullDto.md) | [CustomCostObjectiveFullDto](models/CustomCostObjectiveFullDto.md) |
| POST | `/api/CustomCostObjective/AddDimension` | [DimensionDTO](models/DimensionDTO.md) | [DimensionDTO](models/DimensionDTO.md) |
| DELETE | `/api/CustomCostObjective/DeleteCustomCostObjective/{id}` | — | — |
| DELETE | `/api/CustomCostObjective/DeleteDimension/{id}` | — | — |
| POST | `/api/CustomCostObjective/EditCustomCostObjective` | [CustomCostObjectiveFullDto](models/CustomCostObjectiveFullDto.md) | [CustomCostObjectiveFullDto](models/CustomCostObjectiveFullDto.md) |
| POST | `/api/CustomCostObjective/ExportAccountingToCSV` | — | — |
| POST | `/api/CustomCostObjective/ExportAccountingToXls` | — | — |
| POST | `/api/CustomCostObjective/ExportDimensionsToCSV` | [RestrictionItem[]](models/RestrictionItem.md) | — |
| POST | `/api/CustomCostObjective/ExportDimensionsToXls` | [RestrictionItem[]](models/RestrictionItem.md) | — |
| GET | `/api/CustomCostObjective/GetAllCompanyCustomCostObjectives` | — | [CustomCostObjectiveFullDto[]](models/CustomCostObjectiveFullDto.md) |
| GET | `/api/CustomCostObjective/GetByCode` | — | [CustomCostObjectiveFullDto](models/CustomCostObjectiveFullDto.md) |
| GET | `/api/CustomCostObjective/GetByDescriptionPart` | — | [CustomCostObjectiveFullDto[]](models/CustomCostObjectiveFullDto.md) |
| GET | `/api/CustomCostObjective/GetCompanyCustomCostObjectivesWithoutDimensions` | — | [CustomCostObjectiveDTOListResponse](models/CustomCostObjectiveDTOListResponse.md) |
| GET | `/api/CustomCostObjective/GetCustomCostObjective/{id}` | — | [CustomCostObjectiveFullDto](models/CustomCostObjectiveFullDto.md) |
| POST | `/api/CustomCostObjective/GetCustomCostObjectiveDimensions/{id}` | [BaseSearch](models/BaseSearch.md) | [DimensionDTOPagedListContainer](models/DimensionDTOPagedListContainer.md) |
| POST | `/api/CustomCostObjective/GetDimensions` | [BaseSearch](models/BaseSearch.md) | [CustomCostObjectiveDTOPagedListContainer](models/CustomCostObjectiveDTOPagedListContainer.md) |
| GET | `/api/CustomCostObjective/GetInvoiceCountInUseForCustomCostObjective` | — | — |
| GET | `/api/CustomCostObjective/GetInvoiceCountInUseForDimension` | — | — |
| GET | `/api/CustomCostObjective/MoveDown/{id}` | — | [CustomCostObjectiveFullDto[]](models/CustomCostObjectiveFullDto.md) |
| GET | `/api/CustomCostObjective/MoveUp/{id}` | — | [CustomCostObjectiveFullDto[]](models/CustomCostObjectiveFullDto.md) |
| POST | `/api/CustomCostObjective/UpdateCustomCostObjective` | [CustomCostObjectiveDTO](models/CustomCostObjectiveDTO.md) | [CustomCostObjectiveDTO](models/CustomCostObjectiveDTO.md) |
| POST | `/api/CustomCostObjective/UpdateCustomCostObjectiveOrderNumber` | — | — |
| POST | `/api/CustomCostObjective/UpdateDimension` | [DimensionDTO](models/DimensionDTO.md) | [DimensionDTO](models/DimensionDTO.md) |
| POST | `/api/CustomCostObjective/UploadCSVFile2` | [CsvUploadDimensionsRequest](models/CsvUploadDimensionsRequest.md) | [ImportResponse](models/ImportResponse.md) |
| POST | `/api/CustomCostObjective/UploadDimensionFile` | [FileDTO](models/FileDTO.md) | [ImportResponse](models/ImportResponse.md) |

## Events — [endpoints/Events.md](endpoints/Events.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/Events/invoice-confirm-progress` | — | — |

## File — [endpoints/File.md](endpoints/File.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/File/DownloadAllInvoiceAttachments` | — | — |
| POST | `/api/File/DownloadFile/{id}` | — | — |
| GET | `/api/File/DownloadPurchaseOrderFileByToken` | — | — |
| POST | `/api/File/DownloadPurchaseOrderPdf` | — | — |
| GET | `/api/File/DownloadSalesInvoiceFile` | — | — |
| POST | `/api/File/DownloadSalesInvoicePdf` | — | — |
| POST | `/api/File/DownloadSalesInvoiceXmlPreview` | — | — |
| GET | `/api/File/GetAllAttachmentFilesSize` | — | [AttachmentFilesCountResponseDTO](models/AttachmentFilesCountResponseDTO.md) |
| GET | `/api/File/GetInvoiceRelatedDocuments` | — | [FileDTO[]](models/FileDTO.md) |

## Filter — [endpoints/Filter.md](endpoints/Filter.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/Filter/DeleteFilter` | — | [FilterDto](models/FilterDto.md) |
| GET | `/api/Filter/GetAllFilters` | — | [FilterDto[]](models/FilterDto.md) |
| GET | `/api/Filter/GetFilter` | — | [FilterDto](models/FilterDto.md) |
| GET | `/api/Filter/RecreateSystemFilters` | — | [FilterDto[]](models/FilterDto.md) |
| POST | `/api/Filter/SetFilter` | [FilterDto](models/FilterDto.md) | [FilterDto](models/FilterDto.md) |

## FilterTemplate — [endpoints/FilterTemplate.md](endpoints/FilterTemplate.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| DELETE | `/api/FilterTemplate/DeleteFilterTemplate/{templateId}` | — | — |
| GET | `/api/FilterTemplate/GetTemplates` | — | [FilterTemplateDTO[]](models/FilterTemplateDTO.md) |
| POST | `/api/FilterTemplate/SaveFilterTemplate` | [FilterTemplateDTO](models/FilterTemplateDTO.md) | [FilterTemplateDTO](models/FilterTemplateDTO.md) |

## GroupMember — [endpoints/GroupMember.md](endpoints/GroupMember.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/GroupMember/AddGroupMember` | [GroupMemberDTO](models/GroupMemberDTO.md) | [UserDTO](models/UserDTO.md) |
| GET | `/api/GroupMember/CheckGroupMemberExists` | — | — |
| POST | `/api/GroupMember/Delete` | inline | — |
| POST | `/api/GroupMember/EditGroupMember` | [GroupMemberDTO](models/GroupMemberDTO.md) | [UserDTO](models/UserDTO.md) |
| GET | `/api/GroupMember/GetArchiveCompanyGroupMembers` | — | [GroupMemberDTO[]](models/GroupMemberDTO.md) |
| GET | `/api/GroupMember/GetByName` | — | [GroupMemberDTO[]](models/GroupMemberDTO.md) |
| GET | `/api/GroupMember/GetCommonGroupMember` | — | [GroupMemberCommonDTO](models/GroupMemberCommonDTO.md) |
| GET | `/api/GroupMember/GetGroupMembers` | — | [GroupMemberDTO[]](models/GroupMemberDTO.md) |
| POST | `/api/GroupMember/GetGroupMembers` | [BaseSearch](models/BaseSearch.md) | [GroupMemberDTOPagedListContainer](models/GroupMemberDTOPagedListContainer.md) |
| GET | `/api/GroupMember/GetGroupMemberSettingsForCompany` | — | [GroupMemberSettingsForMobileDTO](models/GroupMemberSettingsForMobileDTO.md) |
| POST | `/api/GroupMember/GetGroupMembersMicro` | [BaseSearch](models/BaseSearch.md) | [GroupMemberMicroDTOPagedListContainer](models/GroupMemberMicroDTOPagedListContainer.md) |
| GET | `/api/GroupMember/GetUserSettings` | — | [UserSettingCommon[]](models/UserSettingCommon.md) |
| POST | `/api/GroupMember/UpdateCommonUserSettings` | [UserSettingCommon[]](models/UserSettingCommon.md) | [UserSettingCommon[]](models/UserSettingCommon.md) |
| POST | `/api/GroupMember/UpdateUserSettings` | [UserSettingCommon[]](models/UserSettingCommon.md) | [UserSettingCommon[]](models/UserSettingCommon.md) |

## Invoice — [endpoints/Invoice.md](endpoints/Invoice.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Invoice/AddInvoiceRow` | [InvoiceRowDTO](models/InvoiceRowDTO.md) | [InvoiceRowDTO](models/InvoiceRowDTO.md) |
| GET | `/api/Invoice/ApplyAiToTransactionRows` | — | [Response](models/Response.md) |
| POST | `/api/Invoice/Approve` | [TaskActionDTO](models/TaskActionDTO.md) | [TaskDTO](models/TaskDTO.md) |
| POST | `/api/Invoice/ApproveInvoices` | `array` | — |
| POST | `/api/Invoice/BulkDeleteInvoiceRow` | `array` | — |
| POST | `/api/Invoice/CanMergeTransactionRows` | `array` | — |
| GET | `/api/Invoice/ChangeInvoiceCompany` | — | [InvoiceDTO](models/InvoiceDTO.md) |
| POST | `/api/Invoice/CheckIsDuplicate` | [InvoiceBL](models/InvoiceBL.md) | — |
| POST | `/api/Invoice/ConfirmAllWaitingInvoices` | — | [BulkConfirmInvoicesResultDTO](models/BulkConfirmInvoicesResultDTO.md) |
| POST | `/api/Invoice/CreateAccountingRows` | — | — |
| POST | `/api/Invoice/CreateTransactionRowsWithAT` | — | — |
| GET | `/api/Invoice/Deletefield/{id}` | — | — |
| POST | `/api/Invoice/DeleteInvoiceFile` | [FileDTO](models/FileDTO.md) | — |
| POST | `/api/Invoice/DeleteInvoiceRow` | [InvoiceRowDTO](models/InvoiceRowDTO.md) | — |
| POST | `/api/Invoice/ExportInvoicesApproversToXls` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/Invoice/ExportInvoicesToCSV` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/Invoice/ExportInvoicesToXls` | [BaseSearch](models/BaseSearch.md) | — |
| GET | `/api/Invoice/ExportStatusReset/{id}` | — | — |
| GET | `/api/Invoice/GetAccounts` | — | [AccountDTO[]](models/AccountDTO.md) |
| GET | `/api/Invoice/GetAvailableCustomizationFields` | — | [CustomizationDTO[]](models/CustomizationDTO.md) |
| GET | `/api/Invoice/GetById` | — | [InvoiceDTO](models/InvoiceDTO.md) |
| GET | `/api/Invoice/GetByIdWithInvoiceRowsAndFiles/{id}` | — | [MinInvoiceWithRowsAndFilesDTO](models/MinInvoiceWithRowsAndFilesDTO.md) |
| GET | `/api/Invoice/GetDashboardInvoiceExt` | — | [InvoiceDashboardExtDTO](models/InvoiceDashboardExtDTO.md) |
| POST | `/api/Invoice/GetDashboardInvoicesMin` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [InvoiceDashboardMinDTOPagedListContainer](models/InvoiceDashboardMinDTOPagedListContainer.md) |
| GET | `/api/Invoice/GetDomasErrorDefinitions` | — | [ErrorDefinition[]](models/ErrorDefinition.md) |
| POST | `/api/Invoice/GetInvoiceCustomFieldsHistory` | [BaseSearch](models/BaseSearch.md) | [InvoiceCustomFieldsHistoryDTOPagedListContainer](models/InvoiceCustomFieldsHistoryDTOPagedListContainer.md) |
| GET | `/api/Invoice/GetInvoiceDataById/{id}` | — | [InvoiceDataDTO](models/InvoiceDataDTO.md) |
| GET | `/api/Invoice/GetInvoiceDataExt` | — | [InvoiceConfirmationExtDTO](models/InvoiceConfirmationExtDTO.md) |
| GET | `/api/Invoice/GetInvoiceDataMin/{id}` | — | [InvoiceConfirmationMinDTO](models/InvoiceConfirmationMinDTO.md) |
| GET | `/api/Invoice/GetInvoiceHeaderChanges/{id}` | — | [AuditHistoryEntryDTO[]](models/AuditHistoryEntryDTO.md) |
| POST | `/api/Invoice/GetInvoiceHeaderHistory` | [BaseSearch](models/BaseSearch.md) | [InvoiceHeaderHistorySmallDTOPagedListContainer](models/InvoiceHeaderHistorySmallDTOPagedListContainer.md) |
| GET | `/api/Invoice/GetInvoiceHistory` | — | [HistoryDTO[]](models/HistoryDTO.md) |
| POST | `/api/Invoice/GetInvoicesFull` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [InvoiceDTOPagedListContainer](models/InvoiceDTOPagedListContainer.md) |
| POST | `/api/Invoice/GetInvoicesMedium` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [InvoiceDTOPagedListContainer](models/InvoiceDTOPagedListContainer.md) |
| POST | `/api/Invoice/GetInvoicesSmall` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [InvoiceDTOPagedListContainer](models/InvoiceDTOPagedListContainer.md) |
| GET | `/api/Invoice/GetInvoiceTaskItemsById` | — | [WorkflowTaskExtDTO[]](models/WorkflowTaskExtDTO.md) |
| GET | `/api/Invoice/GetInvoiceTransactionRows/{id}` | — | [TransactionRowDTO[]](models/TransactionRowDTO.md) |
| POST | `/api/Invoice/GetInvoiceTransactionRowsByInvoiceId/{invoiceId}` | [BaseSearch](models/BaseSearch.md) | [TransactionRowDTOPagedListContainer](models/TransactionRowDTOPagedListContainer.md) |
| GET | `/api/Invoice/GetInvoiceTransactionRowsVatRates` | — | [Int32DecimalNullableTuple[]](models/Int32DecimalNullableTuple.md) |
| GET | `/api/Invoice/GetInvoiceTransactionRowsVatSum` | — | — |
| POST | `/api/Invoice/GetPurchaseOrdersLinkingHistory` | [BaseSearch](models/BaseSearch.md) | [PuchaseOrderLinkingHistorySmallDTOPagedListContainer](models/PuchaseOrderLinkingHistorySmallDTOPagedListContainer.md) |
| POST | `/api/Invoice/GetSliderInvoicesMin` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [InvoiceSliderMinDTOPagedListContainer](models/InvoiceSliderMinDTOPagedListContainer.md) |
| POST | `/api/Invoice/GetTotalAmounts` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [TotalAmountDto[]](models/TotalAmountDto.md) |
| POST | `/api/Invoice/GetUserExpenses` | [PagingOptions](models/PagingOptions.md) | [ExpenseInvoicesForMobileDTOPagedListContainer](models/ExpenseInvoicesForMobileDTOPagedListContainer.md) |
| POST | `/api/Invoice/ImportTransactionRowsXls` | [FileDTO](models/FileDTO.md) | — |
| POST | `/api/Invoice/MergeAccountingRows` | `array` | — |
| POST | `/api/Invoice/MergeAccountingRowsByTransactionRowExtension/{id}` | [GroupingTransactionRowExtensionDTO](models/GroupingTransactionRowExtensionDTO.md) | — |
| POST | `/api/Invoice/MergeAccountingRowsVariative` | `array` | — |
| GET | `/api/Invoice/MergeAllAccountingRows/{id}` | — | — |
| POST | `/api/Invoice/MergeTransactionRowsByTransactionRowExtensionV2/{id}` | [GroupingTransactionRowExtensionDTO](models/GroupingTransactionRowExtensionDTO.md) | — |
| POST | `/api/Invoice/ReceiptOcr` | [ReceiptOcrRequest](models/ReceiptOcrRequest.md) | [ReceiptOcrResponse](models/ReceiptOcrResponse.md) |
| POST | `/api/Invoice/ReceiptOcrV2` | [ReceiptOcrRequest](models/ReceiptOcrRequest.md) | [ReceiptOcrResponse](models/ReceiptOcrResponse.md) |
| POST | `/api/Invoice/RemoveDuplicateFlag` | inline | [InvoiceDTO](models/InvoiceDTO.md) |
| POST | `/api/Invoice/ReplaceTasksInWorkflow` | [WorkflowWithTasksDTO](models/WorkflowWithTasksDTO.md) | [WorkflowDTO](models/WorkflowDTO.md) |
| POST | `/api/Invoice/RestoreDeletedInvoice` | — | [InvoiceDTO](models/InvoiceDTO.md) |
| POST | `/api/Invoice/Save` | [InvoiceDTO](models/InvoiceDTO.md) | [InvoiceDTO](models/InvoiceDTO.md) |
| POST | `/api/Invoice/SaveCopy` | [InvoiceDTO](models/InvoiceDTO.md) | [InvoiceDTO](models/InvoiceDTO.md) |
| POST | `/api/Invoice/SaveCustomFieldsAfterExport` | [InvoiceCustomizationDTO[]](models/InvoiceCustomizationDTO.md) | [InvoiceCustomizationDTO[]](models/InvoiceCustomizationDTO.md) |
| POST | `/api/Invoice/SendComplaint` | [InvoiceError](models/InvoiceError.md) | — |
| POST | `/api/Invoice/SetInvoiceToDeleted` | inline | — |
| POST | `/api/Invoice/SplitTransactionRow` | [TransactionRowSplitDTO](models/TransactionRowSplitDTO.md) | — |
| POST | `/api/Invoice/UpdateAccount` | — | [TransactionRowDTO](models/TransactionRowDTO.md) |
| POST | `/api/Invoice/UpdateCustomField` | [TransactionRowsDimensionDTO](models/TransactionRowsDimensionDTO.md) | [TransactionRowsDimensionDTO](models/TransactionRowsDimensionDTO.md) |
| POST | `/api/Invoice/UpdateCustomFields` | [TransactionRowsDimensionDTO[]](models/TransactionRowsDimensionDTO.md) | [TransactionRowsDimensionDTO](models/TransactionRowsDimensionDTO.md) |
| POST | `/api/Invoice/UpdateCustomFieldWithRelations` | [TransactionRowsDimensionDTO](models/TransactionRowsDimensionDTO.md) | [TransactionRowsDimensionDTO[]](models/TransactionRowsDimensionDTO.md) |
| GET | `/api/Invoice/UpdateInvoiceExportSetting/{id}` | — | — |
| GET | `/api/Invoice/UpdateSupplierId` | — | [InvoiceDTO](models/InvoiceDTO.md) |
| POST | `/api/Invoice/UploadInvoiceFile` | [FileDTO](models/FileDTO.md) | — |

## InvoiceHistory — [endpoints/InvoiceHistory.md](endpoints/InvoiceHistory.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/InvoiceHistory/GetInvoiceHistory` | — | [InvoiceDataHistory](models/InvoiceDataHistory.md) |
| POST | `/api/InvoiceHistory/GetInvoiceHistoryItems` | `array` | [InvoiceDataHistory[]](models/InvoiceDataHistory.md) |
| GET | `/api/InvoiceHistory/UpdateAccountHistory` | — | [InvoiceDataHistory](models/InvoiceDataHistory.md) |
| GET | `/api/InvoiceHistory/UpdateAllHistory` | — | [InvoiceDataHistory](models/InvoiceDataHistory.md) |
| GET | `/api/InvoiceHistory/UpdateCompanyHistory` | — | [InvoiceDataHistory](models/InvoiceDataHistory.md) |
| GET | `/api/InvoiceHistory/UpdateCustomCostObjectiveHistory` | — | [InvoiceDataHistory](models/InvoiceDataHistory.md) |
| GET | `/api/InvoiceHistory/UpdateDimensionHistory` | — | [InvoiceDataHistory](models/InvoiceDataHistory.md) |
| GET | `/api/InvoiceHistory/UpdateSupplierHistory` | — | [InvoiceDataHistory](models/InvoiceDataHistory.md) |
| GET | `/api/InvoiceHistory/UpdateVatCodeHistory` | — | [InvoiceDataHistory](models/InvoiceDataHistory.md) |

## InvoiceRow — [endpoints/InvoiceRow.md](endpoints/InvoiceRow.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/InvoiceRow/GetInvoiceRowExt` | — | [InvoiceRowExtDTO](models/InvoiceRowExtDTO.md) |
| GET | `/api/InvoiceRow/GetInvoiceRowMicro` | — | [InvoiceRowMicroDTO](models/InvoiceRowMicroDTO.md) |
| GET | `/api/InvoiceRow/GetInvoiceRowsById/{id}` | — | [InvoiceRowDTO[]](models/InvoiceRowDTO.md) |
| POST | `/api/InvoiceRow/GetInvoiceRowsByInvoiceId/{invoiceId}` | [BaseSearch](models/BaseSearch.md) | [InvoiceRowDTOPagedListContainer](models/InvoiceRowDTOPagedListContainer.md) |
| GET | `/api/InvoiceRow/GetInvoiceRowsMin/{id}` | — | [InvoiceRowMinDTO[]](models/InvoiceRowMinDTO.md) |
| GET | `/api/InvoiceRow/GetProductItems` | — | [ProductItemDTO[]](models/ProductItemDTO.md) |
| POST | `/api/InvoiceRow/UpdateInvoiceRow` | [InvoiceRowDTO](models/InvoiceRowDTO.md) | — |

## InvoiceType — [endpoints/InvoiceType.md](endpoints/InvoiceType.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/InvoiceType/Add` | [InvoiceTypeDTO](models/InvoiceTypeDTO.md) | [InvoiceTypeDTO](models/InvoiceTypeDTO.md) |
| POST | `/api/InvoiceType/Delete` | [InvoiceTypeDTO](models/InvoiceTypeDTO.md) | — |
| GET | `/api/InvoiceType/GetInvoiceTypeByCode` | — | [InvoiceTypeDTO](models/InvoiceTypeDTO.md) |
| GET | `/api/InvoiceType/GetInvoiceTypesByTypeId` | — | [InvoiceTypeDTO[]](models/InvoiceTypeDTO.md) |
| POST | `/api/InvoiceType/GetList` | [BaseSearch](models/BaseSearch.md) | [InvoiceTypeDTOPagedListContainer](models/InvoiceTypeDTOPagedListContainer.md) |
| POST | `/api/InvoiceType/Update` | [InvoiceTypeDTO](models/InvoiceTypeDTO.md) | [InvoiceTypeDTO](models/InvoiceTypeDTO.md) |

## Login — [endpoints/Login.md](endpoints/Login.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Login/Login` | [Credentials](models/Credentials.md) | — |
| POST | `/api/Login/Logout` | — | — |

## MobileApp — [endpoints/MobileApp.md](endpoints/MobileApp.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/BO/ChangeUserLastCompany` | — | — |
| GET | `/api/BO/GetStatusUserCompanies` | — | [CompanyAccessCheckFullResponseDTO[]](models/CompanyAccessCheckFullResponseDTO.md) |
| GET | `/api/BO/GetUserCompanies` | — | [BackOfficeCompanyDTO[]](models/BackOfficeCompanyDTO.md) |
| POST | `/api/BO/GetUserCompanies` | [BaseSearch](models/BaseSearch.md) | [BackOfficeCompanyDTOPagedListContainer](models/BackOfficeCompanyDTOPagedListContainer.md) |
| GET | `/api/BO/GetUserSettings` | — | [UserSetting[]](models/UserSetting.md) |
| POST | `/api/BO/UpdateUserSettings` | [UserSetting[]](models/UserSetting.md) | [UserSetting[]](models/UserSetting.md) |
| GET | `/api/Company/GetCompanyData` | — | [CompanyDataDTO](models/CompanyDataDTO.md) |
| GET | `/api/Company/GetCompanySettings` | — | [BackOfficeCompanySettingDTO[]](models/BackOfficeCompanySettingDTO.md) |
| GET | `/api/Company/GetCurrentCompanySettings` | — | [BackOfficeCompanySettingDTO[]](models/BackOfficeCompanySettingDTO.md) |
| GET | `/api/File/DisplayFileById/{id}` | — | — |
| POST | `/api/File/DownloadPurchaseOrderFile` | — | — |
| GET | `/api/File/GetPurchaseOrderFileToken` | — | — |
| GET | `/api/File/PreviewPurchaseOrderFileByToken` | — | — |
| POST | `/api/GroupMember/CheckAccessToCompany` | [CompanyAccessCheckDTO](models/CompanyAccessCheckDTO.md) | [CompanyAccessCheckResponseDTO](models/CompanyAccessCheckResponseDTO.md) |
| POST | `/api/GroupMember/GetApproversList` | [GroupMemberApproversParamDTO](models/GroupMemberApproversParamDTO.md) | [GroupMemberApproverDTO[]](models/GroupMemberApproverDTO.md) |
| GET | `/api/GroupMember/GetCompanyGroupMembers` | — | [GroupMemberDTO[]](models/GroupMemberDTO.md) |
| GET | `/api/GroupMember/GetGroupMember` | — | [GroupMemberDTO](models/GroupMemberDTO.md) |
| POST | `/api/Invoice/ApproveForCompany` | inline | [TaskDTO](models/TaskDTO.md) |
| GET | `/api/Invoice/AreCustomFieldsValid/{id}` | — | `array` |
| GET | `/api/Invoice/AreTransactionRowsValid/{id}` | — | `array` |
| GET | `/api/Invoice/AreTransactionRowsValidPenultimate/{id}` | — | `array` |
| GET | `/api/Invoice/GetInvoiceDataForCompanyById` | — | [InvoiceDataDTO](models/InvoiceDataDTO.md) |
| GET | `/api/Invoice/GetInvoicesWaitingForUserApproval` | — | [InvoiceForMobileDTOPagedListContainer](models/InvoiceForMobileDTOPagedListContainer.md) |
| POST | `/api/Invoice/GetRegistryInvoicesMin` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [InvoiceRegistryMinDTOPagedListContainer](models/InvoiceRegistryMinDTOPagedListContainer.md) |
| POST | `/api/Invoice/GetRegistryInvoicesMinCount` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | — |
| POST | `/api/Invoice/GetRegistryMyCompaniesInvoicesMin` | [InvoiceSearchOptions](models/InvoiceSearchOptions.md) | [InvoiceRegistryMinDTOCompanyPagedListContainer[]](models/InvoiceRegistryMinDTOCompanyPagedListContainer.md) |
| POST | `/api/PurchaseOrders/DoTaskAction` | [PurchaseOrderTaskActionDto](models/PurchaseOrderTaskActionDto.md) | [PurchaseOrderTaskActionDto](models/PurchaseOrderTaskActionDto.md) |
| GET | `/api/PurchaseOrders/GetListForDashboard` | — | [PurchaseOrdersSmallDTOPagedListContainer](models/PurchaseOrdersSmallDTOPagedListContainer.md) |
| POST | `/api/PurchaseOrders/GetListForDashboard` | [BaseSearch](models/BaseSearch.md) | [PurchaseOrdersSmallDTOPagedListContainer](models/PurchaseOrdersSmallDTOPagedListContainer.md) |
| GET | `/api/PurchaseOrders/GetPurchaseOrderById` | — | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) |
| POST | `/api/PurchaseOrders/InsertTaskAction` | — | [PurchaseOrderTaskActionDto](models/PurchaseOrderTaskActionDto.md) |
| POST | `/api/Session/SetCompany` | [SetSessionCompanyRequestDTO](models/SetSessionCompanyRequestDTO.md) | — |
| GET | `/api/User/GetCurrentUser` | — | [UserDataDTO](models/UserDataDTO.md) |
| GET | `/api/v1.0/Invoice/GetInvoiceDataForCompanyById` | — | [InvoiceDataDTO](models/InvoiceDataDTO.md) |
| GET | `/api/v1/Invoice/GetInvoiceDataForCompanyById` | — | [InvoiceDataDTO](models/InvoiceDataDTO.md) |
| GET | `/api/v2.0/Invoice/GetInvoiceDataForCompanyById` | — | — |
| GET | `/api/v2/Invoice/GetInvoiceDataForCompanyById` | — | — |

## Notification — [endpoints/Notification.md](endpoints/Notification.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Notification/NotifyConfirmerForInvoice` | — | [Response](models/Response.md) |

## PartnerAuthentication — [endpoints/PartnerAuthentication.md](endpoints/PartnerAuthentication.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/PartnerAuthentication/ValidateSessionTokenTsekkEE` | — | [SessionTsekkEEDTO](models/SessionTsekkEEDTO.md) |

## PaymentMethod — [endpoints/PaymentMethod.md](endpoints/PaymentMethod.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/PaymentMethod/Add` | [PaymentMethodDTO](models/PaymentMethodDTO.md) | [PaymentMethodDTO](models/PaymentMethodDTO.md) |
| POST | `/api/PaymentMethod/Delete` | [PaymentMethodDTO](models/PaymentMethodDTO.md) | — |
| POST | `/api/PaymentMethod/GetList` | [BaseSearch](models/BaseSearch.md) | [PaymentMethodDTOPagedListContainer](models/PaymentMethodDTOPagedListContainer.md) |
| GET | `/api/PaymentMethod/GetPaymentMethodByCode` | — | [PaymentMethodDTO](models/PaymentMethodDTO.md) |
| GET | `/api/PaymentMethod/GetPaymentMethodsByTypeId` | — | [PaymentMethodDTO[]](models/PaymentMethodDTO.md) |
| POST | `/api/PaymentMethod/Update` | [PaymentMethodDTO](models/PaymentMethodDTO.md) | [PaymentMethodDTO](models/PaymentMethodDTO.md) |

## ProductItem — [endpoints/ProductItem.md](endpoints/ProductItem.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/ProductItem/DeleteItem` | [BaseSearch](models/BaseSearch.md) | [ProductItemDTOPagedListContainer](models/ProductItemDTOPagedListContainer.md) |
| POST | `/api/ProductItem/ExportProductItemsToXls` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/ProductItem/GetList` | [BaseSearch](models/BaseSearch.md) | [ProductItemDTOPagedListContainer](models/ProductItemDTOPagedListContainer.md) |
| GET | `/api/ProductItem/GetSellerCodesByProductItemCode` | — | [ProductItemSellerCodeDTO[]](models/ProductItemSellerCodeDTO.md) |
| POST | `/api/ProductItem/SaveItem` | [ProductItemDTO](models/ProductItemDTO.md) | — |
| POST | `/api/ProductItem/UploadCSVFile` | [FileDTO](models/FileDTO.md) | [ProductItemDTOPagedListContainer](models/ProductItemDTOPagedListContainer.md) |
| POST | `/api/ProductItem/UploadProductItemFile` | [FileDTO](models/FileDTO.md) | [ImportResponse](models/ImportResponse.md) |

## PurchaseOrders — [endpoints/PurchaseOrders.md](endpoints/PurchaseOrders.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/PurchaseOrders/AddNewPurchaseOrder` | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) |
| POST | `/api/PurchaseOrders/BuildNextPurchaseNumber` | — | — |
| POST | `/api/PurchaseOrders/CancelPurchaseOrder` | inline | — |
| GET | `/api/PurchaseOrders/ClonePurchaseOrder` | — | — |
| GET | `/api/PurchaseOrders/CountOfFindByFilter` | — | — |
| POST | `/api/PurchaseOrders/CountOfFindByFilter` | [FilterDto](models/FilterDto.md) | — |
| POST | `/api/PurchaseOrders/CreateNewPurchaseOrder` | — | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) |
| GET | `/api/PurchaseOrders/DeletePurchaseOrder` | — | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) |
| POST | `/api/PurchaseOrders/DeletePurchaseOrderFile` | [PurchaseOrderFileAttachmentDTO](models/PurchaseOrderFileAttachmentDTO.md) | — |
| POST | `/api/PurchaseOrders/DeletePurchaseOrderRow` | [PurchaseOrdersRowDTO](models/PurchaseOrdersRowDTO.md) | [PurchaseOrdersRowWithTotalNumbersDto](models/PurchaseOrdersRowWithTotalNumbersDto.md) |
| POST | `/api/PurchaseOrders/DoHeartBeat` | — | [PurchaseOrderTaskActionDto](models/PurchaseOrderTaskActionDto.md) |
| GET | `/api/PurchaseOrders/DownloadPurchaseOrderFile` | — | — |
| GET | `/api/PurchaseOrders/DuplicatePurchaseOrder` | — | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) |
| POST | `/api/PurchaseOrders/ExportPurchaseOrdersApproversToXls` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/PurchaseOrders/ExportPurchaseOrdersToXls` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/PurchaseOrders/ExportPurchaseOrdersWithCostObjectivesToXls` | [BaseSearch](models/BaseSearch.md) | — |
| GET | `/api/PurchaseOrders/FindByFilter` | — | [PurchaseOrdersDTOPagedListContainer](models/PurchaseOrdersDTOPagedListContainer.md) |
| POST | `/api/PurchaseOrders/FindByFilter` | [FilterDto](models/FilterDto.md) | [PurchaseOrdersDTOPagedListContainer](models/PurchaseOrdersDTOPagedListContainer.md) |
| GET | `/api/PurchaseOrders/GetAllSupplierNames` | — | `array` |
| POST | `/api/PurchaseOrders/GetDashboardPurchaseOrdersMin` | [BaseSearch](models/BaseSearch.md) | [PurchaseOrderDashboardMinDTOPagedListContainer](models/PurchaseOrderDashboardMinDTOPagedListContainer.md) |
| GET | `/api/PurchaseOrders/GetFilterStructureDto` | — | [FilterStructureDto](models/FilterStructureDto.md) |
| POST | `/api/PurchaseOrders/GetInvoicesForPurchaseOrder` | [PurchaseOrderLinkedInvoicesRequestDto](models/PurchaseOrderLinkedInvoicesRequestDto.md) | [LinkedInvoiceDtoPagedListContainer](models/LinkedInvoiceDtoPagedListContainer.md) |
| GET | `/api/PurchaseOrders/GetLinkedInvoicesCount/{poId}` | — | [LinkedObjectsCountAndSumsDTO](models/LinkedObjectsCountAndSumsDTO.md) |
| GET | `/api/PurchaseOrders/GetLinkedPurchaseOrdersCount/{invoiceId}` | — | [LinkedObjectsCountAndSumsDTO](models/LinkedObjectsCountAndSumsDTO.md) |
| POST | `/api/PurchaseOrders/GetList` | [BaseSearch](models/BaseSearch.md) | [PurchaseOrdersDTOPagedListContainer](models/PurchaseOrdersDTOPagedListContainer.md) |
| GET | `/api/PurchaseOrders/GetPurchaseOrderById/{poId}` | — | [PurchaseOrderWithoutRowsDto](models/PurchaseOrderWithoutRowsDto.md) |
| GET | `/api/PurchaseOrders/GetPurchaseOrderByToken` | — | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) |
| POST | `/api/PurchaseOrders/GetPurchaseOrderHeaderHistory` | [BaseSearch](models/BaseSearch.md) | [PurchaseOrderHeaderHistoryDTOPagedListContainer](models/PurchaseOrderHeaderHistoryDTOPagedListContainer.md) |
| GET | `/api/PurchaseOrders/GetPurchaseOrderHistory` | — | [PurchaseOrderHistoryDTO[]](models/PurchaseOrderHistoryDTO.md) |
| GET | `/api/PurchaseOrders/GetPurchaseOrderRelatedDocuments/{poId}` | — | [PurchaseOrderFileAttachmentDTO[]](models/PurchaseOrderFileAttachmentDTO.md) |
| GET | `/api/PurchaseOrders/GetPurchaseOrderRows/{poId}` | — | [PurchaseOrdersRowDTO[]](models/PurchaseOrdersRowDTO.md) |
| POST | `/api/PurchaseOrders/GetPurchaseOrderRowsPaginated/{poId}` | [BaseSearch](models/BaseSearch.md) | [PurchaseOrdersRowDTOPagedListContainer](models/PurchaseOrdersRowDTOPagedListContainer.md) |
| POST | `/api/PurchaseOrders/GetPurchaseOrdersForInvoice` | [InvoiceLinkedPurchaseOrdersRequestDto](models/InvoiceLinkedPurchaseOrdersRequestDto.md) | [LinkedPurchaseOrderDTOPagedListContainer](models/LinkedPurchaseOrderDTOPagedListContainer.md) |
| POST | `/api/PurchaseOrders/GetPurchaseOrdersMin` | [BaseSearch](models/BaseSearch.md) | [PurchaseOrdersListMinDTOPagedListContainer](models/PurchaseOrdersListMinDTOPagedListContainer.md) |
| POST | `/api/PurchaseOrders/GetPurchaseOrderTaskItems` | — | [PurchaseOrderTask[]](models/PurchaseOrderTask.md) |
| POST | `/api/PurchaseOrders/GetPurchaseOrderTaskItemsDto` | — | [PurchaseOrderTaskDTO[]](models/PurchaseOrderTaskDTO.md) |
| POST | `/api/PurchaseOrders/GetPurchaseOrderToken` | — | — |
| GET | `/api/PurchaseOrders/IsOrderNumberDuplicate` | — | — |
| POST | `/api/PurchaseOrders/LinkPurchaseOrderToInvoice` | [PurchaseOrderLinkRequest](models/PurchaseOrderLinkRequest.md) | — |
| POST | `/api/PurchaseOrders/ReassignToLast` | — | [PurchaseOrderTaskActionDto](models/PurchaseOrderTaskActionDto.md) |
| POST | `/api/PurchaseOrders/RecalculateEmptyLinkedSumsForPurchaseOrders` | — | — |
| POST | `/api/PurchaseOrders/RemoveTaskAction` | — | [PurchaseOrderTaskActionDto](models/PurchaseOrderTaskActionDto.md) |
| POST | `/api/PurchaseOrders/SavePurchaseOrder` | [PurchaseOrderWithoutRowsDto](models/PurchaseOrderWithoutRowsDto.md) | [PurchaseOrderWithoutRowsDto](models/PurchaseOrderWithoutRowsDto.md) |
| POST | `/api/PurchaseOrders/SavePurchaseOrderRow/{poId}` | [PurchaseOrdersRowDTO](models/PurchaseOrdersRowDTO.md) | [PurchaseOrdersRowWithTotalNumbersDto](models/PurchaseOrdersRowWithTotalNumbersDto.md) |
| POST | `/api/PurchaseOrders/UnLinkPurchaseOrderToInvoice` | [PurchaseOrderLinkRequest](models/PurchaseOrderLinkRequest.md) | — |
| POST | `/api/PurchaseOrders/UpdateExtraStatus` | [PurchaseOrderExtraStatusDto](models/PurchaseOrderExtraStatusDto.md) | — |
| POST | `/api/PurchaseOrders/UpdatePurchaseOrder` | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) | [PurchaseOrdersDTO](models/PurchaseOrdersDTO.md) |
| POST | `/api/PurchaseOrders/UpdatePurchaseOrdersRowCustomField` | [PurchaseOrdersRowsDimensionDTO](models/PurchaseOrdersRowsDimensionDTO.md) | [PurchaseOrdersRowsDimensionDTO](models/PurchaseOrdersRowsDimensionDTO.md) |
| POST | `/api/PurchaseOrders/UpdatePurchaseOrderTasks` | [UpdatePurchaseOrderTasksDto](models/UpdatePurchaseOrderTasksDto.md) | [PurchaseOrderTaskDTO[]](models/PurchaseOrderTaskDTO.md) |
| POST | `/api/PurchaseOrders/UploadPurchaseOrderInvoiceFile` | [PurchaseOrderFileAttachmentDTO](models/PurchaseOrderFileAttachmentDTO.md) | — |

## Receiver — [endpoints/Receiver.md](endpoints/Receiver.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Receiver/Delete` | — | [Response](models/Response.md) |
| GET | `/api/Receiver/GetByField` | — | [ReceiverDTO](models/ReceiverDTO.md) |
| GET | `/api/Receiver/GetById` | — | [ReceiverDTO](models/ReceiverDTO.md) |
| POST | `/api/Receiver/GetList` | [BaseSearch](models/BaseSearch.md) | [ReceiverDTOPagedListContainer](models/ReceiverDTOPagedListContainer.md) |
| POST | `/api/Receiver/Save` | [ReceiverDTO](models/ReceiverDTO.md) | [ReceiverDTO](models/ReceiverDTO.md) |

## RelatedDimensions — [endpoints/RelatedDimensions.md](endpoints/RelatedDimensions.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/RelatedDimensions/ExportRelatedDimensionsToCsv` | — | — |
| POST | `/api/RelatedDimensions/ExportRelatedDimensionsToXls` | — | — |
| POST | `/api/RelatedDimensions/GetList` | [BaseSearch](models/BaseSearch.md) | [RelatedDimensionsDTOPagedListContainer](models/RelatedDimensionsDTOPagedListContainer.md) |
| POST | `/api/RelatedDimensions/GetListForCustomField` | [RelatedDimensionsDTO](models/RelatedDimensionsDTO.md) | [RelatedDimensionsDTO[]](models/RelatedDimensionsDTO.md) |
| POST | `/api/RelatedDimensions/UploadRelatedDimensionsFile` | [FileDTO](models/FileDTO.md) | — |

## Roles — [endpoints/Roles.md](endpoints/Roles.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Roles/GetAllRoles` | [BaseSearch](models/BaseSearch.md) | [RoleDTOPagedListContainer](models/RoleDTOPagedListContainer.md) |
| GET | `/api/Roles/GetRoleById` | — | [RoleDTO](models/RoleDTO.md) |
| GET | `/api/Roles/GetRolePermissionsByCategory` | — | [RolesPermissionDto[]](models/RolesPermissionDto.md) |

## SalesInvoice — [endpoints/SalesInvoice.md](endpoints/SalesInvoice.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/SalesInvoice/CloneSalesInvoice` | — | — |
| POST | `/api/SalesInvoice/DeleteSalesInvoice` | — | [SalesInvoiceDTO](models/SalesInvoiceDTO.md) |
| POST | `/api/SalesInvoice/ExportSalesInvoicesToXls` | [BaseSearch](models/BaseSearch.md) | — |
| GET | `/api/SalesInvoice/GetByGuid` | — | [SalesInvoiceDTO](models/SalesInvoiceDTO.md) |
| GET | `/api/SalesInvoice/GetById` | — | [SalesInvoiceDTO](models/SalesInvoiceDTO.md) |
| GET | `/api/SalesInvoice/GetInvoiceXml` | — | — |
| POST | `/api/SalesInvoice/GetList` | [BaseSearch](models/BaseSearch.md) | [SalesInvoiceDTOPagedListContainer](models/SalesInvoiceDTOPagedListContainer.md) |
| POST | `/api/SalesInvoice/GetSalesInvoiceHistory` | [SalesInvoiceHistoryAction[]](models/SalesInvoiceHistoryAction.md) | [SalesInvoiceHistoryDTO[]](models/SalesInvoiceHistoryDTO.md) |
| POST | `/api/SalesInvoice/Save` | [SalesInvoiceDTO](models/SalesInvoiceDTO.md) | [SalesInvoiceDTO](models/SalesInvoiceDTO.md) |
| POST | `/api/SalesInvoice/SendSalesInvoice` | — | — |

## SalesInvoiceRow — [endpoints/SalesInvoiceRow.md](endpoints/SalesInvoiceRow.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/SalesInvoiceRow/Add` | [SalesInvoiceRowDTO[]](models/SalesInvoiceRowDTO.md) | [SalesInvoiceRowDTO[]](models/SalesInvoiceRowDTO.md) |
| GET | `/api/SalesInvoiceRow/CloneSalesInvoiceRow` | — | [SalesInvoiceRowWithTotalNumbersDTO](models/SalesInvoiceRowWithTotalNumbersDTO.md) |
| POST | `/api/SalesInvoiceRow/Delete` | `array` | [SalesInvoiceRowWithTotalNumbersDTO](models/SalesInvoiceRowWithTotalNumbersDTO.md) |
| GET | `/api/SalesInvoiceRow/GetById` | — | [SalesInvoiceRowDTO](models/SalesInvoiceRowDTO.md) |
| POST | `/api/SalesInvoiceRow/GetByInvoiceId` | [BaseSearch](models/BaseSearch.md) | [SalesInvoiceRowDTOPagedListContainer](models/SalesInvoiceRowDTOPagedListContainer.md) |
| POST | `/api/SalesInvoiceRow/GetLocalFieldsUnitsList` | [BaseSearch](models/BaseSearch.md) | [LocalFieldDTOPagedListContainer](models/LocalFieldDTOPagedListContainer.md) |
| POST | `/api/SalesInvoiceRow/GetLocalFieldsVatList` | [BaseSearch](models/BaseSearch.md) | [LocalFieldDTOPagedListContainer](models/LocalFieldDTOPagedListContainer.md) |
| POST | `/api/SalesInvoiceRow/GetRowsOrderNumbers` | `array` | [SalesInvoiceRowOrderNumberDTO[]](models/SalesInvoiceRowOrderNumberDTO.md) |
| POST | `/api/SalesInvoiceRow/Update` | [SalesInvoiceRowDTO[]](models/SalesInvoiceRowDTO.md) | [SalesInvoiceRowDTO[]](models/SalesInvoiceRowDTO.md) |
| POST | `/api/SalesInvoiceRow/UpdateSalesInvoiceRow` | [SalesInvoiceRowDTO](models/SalesInvoiceRowDTO.md) | [SalesInvoiceRowWithTotalNumbersDTO](models/SalesInvoiceRowWithTotalNumbersDTO.md) |

## Session — [endpoints/Session.md](endpoints/Session.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Session/Check` | — | — |
| POST | `/api/Session/ExtendSession` | — | — |
| GET | `/api/Session/GetMySessions` | — | [SessionClientDto[]](models/SessionClientDto.md) |
| GET | `/api/Session/GetUserCompanies` | — | [BackOfficeCompanyDTO[]](models/BackOfficeCompanyDTO.md) |
| GET | `/api/Session/Status` | — | — |
| GET | `/api/Session/StatusRest` | — | — |
| POST | `/api/Session/TerminateSessions` | `array` | `array` |

## Status — [endpoints/Status.md](endpoints/Status.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| GET | `/api/Status/Status` | — | — |
| GET | `/api/Status/Version` | — | — |

## Substitute — [endpoints/Substitute.md](endpoints/Substitute.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Substitute/AddOrUpdateSubstitute` | [SubstituteDTO](models/SubstituteDTO.md) | [SubstituteDTO](models/SubstituteDTO.md) |
| POST | `/api/Substitute/Delete/{id}` | — | — |
| GET | `/api/Substitute/GetCompanySubstitutes/{guid}` | — | [SubstituteDTO[]](models/SubstituteDTO.md) |
| GET | `/api/Substitute/GetSubstituteSubstitute/{id}` | — | [SubstituteDTO[]](models/SubstituteDTO.md) |
| GET | `/api/Substitute/GetUsersSubstitutes/{id}` | — | [SubstituteDTO[]](models/SubstituteDTO.md) |
| POST | `/api/Substitute/UpdateSubstitutes` | [SubstituteDTO[]](models/SubstituteDTO.md) | [SubstituteDTO[]](models/SubstituteDTO.md) |

## Supplier — [endpoints/Supplier.md](endpoints/Supplier.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/Supplier/AddSupplier` | [SupplierDTO](models/SupplierDTO.md) | [SupplierDTO](models/SupplierDTO.md) |
| POST | `/api/Supplier/AddSuppliers` | [SupplierDTO[]](models/SupplierDTO.md) | [SupplierDTO[]](models/SupplierDTO.md) |
| GET | `/api/Supplier/CheckErpCode` | — | — |
| POST | `/api/Supplier/DeleteSupplier` | inline | — |
| POST | `/api/Supplier/ExportSuppliersToCSV` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/Supplier/ExportSuppliersToXls` | [BaseSearch](models/BaseSearch.md) | — |
| GET | `/api/Supplier/GetByName` | — | [SupplierDTO[]](models/SupplierDTO.md) |
| GET | `/api/Supplier/GetSupplier` | — | [SupplierDTO](models/SupplierDTO.md) |
| GET | `/api/Supplier/GetSupplierById` | — | [SupplierDTO](models/SupplierDTO.md) |
| POST | `/api/Supplier/GetSuppliers` | [BaseSearch](models/BaseSearch.md) | [SupplierDTOPagedListContainer](models/SupplierDTOPagedListContainer.md) |
| GET | `/api/Supplier/GetSuppliersByNameOrRegistrationCode` | — | [SupplierMinDTO[]](models/SupplierMinDTO.md) |
| POST | `/api/Supplier/UpdateSupplier` | [SupplierDTO](models/SupplierDTO.md) | [SupplierDTO](models/SupplierDTO.md) |
| POST | `/api/Supplier/UploadCSVFile` | [FileDTO](models/FileDTO.md) | [SupplierDTO[]](models/SupplierDTO.md) |
| POST | `/api/Supplier/UploadSupplierFile` | [FileDTO](models/FileDTO.md) | [ImportResponse](models/ImportResponse.md) |

## TransactionRow — [endpoints/TransactionRow.md](endpoints/TransactionRow.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/TransactionRow/AddTransactionRow` | [TransactionRowDTO](models/TransactionRowDTO.md) | [TransactionRowDTO](models/TransactionRowDTO.md) |
| POST | `/api/TransactionRow/CopyAccountingRowData` | `array` | — |
| POST | `/api/TransactionRow/CopyDown` | inline | — |
| POST | `/api/TransactionRow/CopyDown/{id}` | — | — |
| DELETE | `/api/TransactionRow/DeleteAccountDistributionItem/{id}` | — | — |
| POST | `/api/TransactionRow/DeleteTransactionRow` | `array` | — |
| POST | `/api/TransactionRow/ExportTransactionRowsToCSV` | — | — |
| POST | `/api/TransactionRow/ExportTransactionRowsToXls` | — | — |
| POST | `/api/TransactionRow/ExportTransactionRowsToXlsV2` | — | — |
| POST | `/api/TransactionRow/ExportTransactionRowsWithFormulasToXls` | — | — |
| POST | `/api/TransactionRow/ExportTransactionRowsWithFormulasToXlsV2` | — | — |
| POST | `/api/TransactionRow/GetAvailableIsibFunds` | [IsibRequestDTO](models/IsibRequestDTO.md) | [IsibResponseDTO](models/IsibResponseDTO.md) |
| GET | `/api/TransactionRow/GetById` | — | [TransactionRowDTO](models/TransactionRowDTO.md) |
| POST | `/api/TransactionRow/GetByIds` | `array` | [TransactionRowDTO[]](models/TransactionRowDTO.md) |
| GET | `/api/TransactionRow/GetRowHistory/{id}` | — | [TransactionRowHistoryDTO[]](models/TransactionRowHistoryDTO.md) |
| GET | `/api/TransactionRow/GetTransactionRowsExtendedInfoList/{id}` | — | [GroupingTransactionRowExtensionDTO[]](models/GroupingTransactionRowExtensionDTO.md) |
| POST | `/api/TransactionRow/GetTransactionRowsHistoryList` | [BaseSearch](models/BaseSearch.md) | [TransactionRowHistoryItemDTOPagedListContainer](models/TransactionRowHistoryItemDTOPagedListContainer.md) |
| POST | `/api/TransactionRow/UpdateComment/{id}` | [CommentMessage](models/CommentMessage.md) | [TransactionRowDTO](models/TransactionRowDTO.md) |
| POST | `/api/TransactionRow/UpdateDate/{id}` | [AccountingDateMessage](models/AccountingDateMessage.md) | [TransactionRowDTO](models/TransactionRowDTO.md) |
| POST | `/api/TransactionRow/UpdateTransactionRow` | [TransactionRowSimpleDTO](models/TransactionRowSimpleDTO.md) | [TransactionRowDTO](models/TransactionRowDTO.md) |
| POST | `/api/TransactionRow/UpdateTransactionRowProductItemBuyerId` | — | — |
| POST | `/api/TransactionRow/UpdateVatCode` | [TransactionRowDTO](models/TransactionRowDTO.md) | [TransactionRowDTO](models/TransactionRowDTO.md) |
| POST | `/api/TransactionRow/UpdateVatCodeV2` | — | [TransactionRowDTO](models/TransactionRowDTO.md) |
| POST | `/api/TransactionRow/UploadTransactionRowsFile/{invoiceId}` | [FileDTO](models/FileDTO.md) | [TransactionRowsImportFileResultDTO](models/TransactionRowsImportFileResultDTO.md) |
| GET | `/api/TransactionRow/VerifyIsibFunds` | — | [IsibVerificationDTO[]](models/IsibVerificationDTO.md) |

## User — [endpoints/User.md](endpoints/User.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/User/BulkToggleCostObjectiveItemsForUser` | `array` | — |
| POST | `/api/User/ChangeUserLanguage` | — | — |
| POST | `/api/User/ChangeUserPassword` | [PasswordDTO](models/PasswordDTO.md) | [Response](models/Response.md) |
| POST | `/api/User/CreateUser` | [UserCreationDTO](models/UserCreationDTO.md) | [UserCreationResultDTO](models/UserCreationResultDTO.md) |
| POST | `/api/User/ExportUsersToCSV` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/User/ExportUsersToXls` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/User/GetActiveUsersCount` | — | — |
| GET | `/api/User/GetCostObjectiveItemsCountForUser` | — | [UserAssignedCostCostObjectivesAmountsDTO[]](models/UserAssignedCostCostObjectivesAmountsDTO.md) |
| POST | `/api/User/GetCostObjectiveItemsCountForUser` | [BaseSearch](models/BaseSearch.md) | — |
| POST | `/api/User/GetCostObjectiveItemsForUser` | [BaseSearch](models/BaseSearch.md) | — |
| GET | `/api/User/GetCurrentUserBo` | — | [BackOfficeUserDTO](models/BackOfficeUserDTO.md) |
| GET | `/api/User/GetUserByEmailOnly` | — | [BackOfficeUserDTO](models/BackOfficeUserDTO.md) |
| POST | `/api/User/GetUsers` | [BaseSearch](models/BaseSearch.md) | [UserDTOPagedListContainer](models/UserDTOPagedListContainer.md) |
| POST | `/api/User/GetUsersFromBo` | [BaseSearch](models/BaseSearch.md) | [UserDTOPagedListContainer](models/UserDTOPagedListContainer.md) |
| GET | `/api/User/IsEmailUnique` | — | — |
| GET | `/api/User/IsPersonalCodeUnique` | — | — |
| POST | `/api/User/SaveUser` | [BackOfficeUserDTO](models/BackOfficeUserDTO.md) | [BackOfficeUserDTO](models/BackOfficeUserDTO.md) |
| GET | `/api/User/ToggleCostObjectiveItemForUser` | — | — |
| POST | `/api/User/UpdateUser` | [UserCreationDTO](models/UserCreationDTO.md) | [UserCreationResultDTO](models/UserCreationResultDTO.md) |
| POST | `/api/User/ValidateUser` | [UserCreationDTO](models/UserCreationDTO.md) | `array` |

## VatCode — [endpoints/VatCode.md](endpoints/VatCode.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/VatCode/AddVatCode` | [VatCodeDTO](models/VatCodeDTO.md) | — |
| DELETE | `/api/VatCode/DeleteVatCode/{id}` | — | — |
| POST | `/api/VatCode/EditVatCode` | [VatCodeDTO](models/VatCodeDTO.md) | [VatCodeDTO](models/VatCodeDTO.md) |
| POST | `/api/VatCode/ExportVatCodesToCSV` | [RestrictionItem[]](models/RestrictionItem.md) | — |
| POST | `/api/VatCode/ExportVatCodesToXls` | [RestrictionItem[]](models/RestrictionItem.md) | — |
| GET | `/api/VatCode/GetInvoiceCountInUse` | — | — |
| POST | `/api/VatCode/GetVatCodeItems` | [BaseSearch](models/BaseSearch.md) | [VatCodeDTOPagedListContainer](models/VatCodeDTOPagedListContainer.md) |
| GET | `/api/VatCode/GetVatCodes` | — | [VatCodeDTO[]](models/VatCodeDTO.md) |
| GET | `/api/VatCode/GetVatRatesForCurrentCompany` | — | `array` |
| POST | `/api/VatCode/ToggleVatCodeDefault` | [VatCodeDTO](models/VatCodeDTO.md) | [VatCodeDTO[]](models/VatCodeDTO.md) |
| POST | `/api/VatCode/UploadCSVFile` | [FileDTO](models/FileDTO.md) | [ImportResponse](models/ImportResponse.md) |
| GET | `/api/VatCode/UploadCSVFile2` | [CsvUploadRequest](models/CsvUploadRequest.md) | [ImportResponse](models/ImportResponse.md) |
| POST | `/api/VatCode/UploadVatCodeFile` | [FileDTO](models/FileDTO.md) | [ImportResponse](models/ImportResponse.md) |

## WorkflowTemplate — [endpoints/WorkflowTemplate.md](endpoints/WorkflowTemplate.md)

| Method | Path | Request body | Response |
|---|---|---|---|
| POST | `/api/WorkflowTemplate/AddWorkflowTemplate` | [WorkflowTemplateDTO](models/WorkflowTemplateDTO.md) | [Response](models/Response.md) |
| POST | `/api/WorkflowTemplate/AddWorkflowTemplateItem` | [WorkflowTemplateItemDTO](models/WorkflowTemplateItemDTO.md) | [WorkflowTemplateItemDTO](models/WorkflowTemplateItemDTO.md) |
| POST | `/api/WorkflowTemplate/DeleteTemplates` | [WorkflowTemplateDTO](models/WorkflowTemplateDTO.md) | — |
| POST | `/api/WorkflowTemplate/ExportWorkflowTemplatesToCsv` | [RestrictionItem[]](models/RestrictionItem.md) | — |
| POST | `/api/WorkflowTemplate/ExportWorkflowTemplatesToXls` | [RestrictionItem[]](models/RestrictionItem.md) | — |
| GET | `/api/WorkflowTemplate/GetById/{id}` | — | [WorkflowTemplateDTO](models/WorkflowTemplateDTO.md) |
| POST | `/api/WorkflowTemplate/GetCompanyTemplates` | [BaseSearch](models/BaseSearch.md) | [WorkflowTemplateDTOPagedListContainer](models/WorkflowTemplateDTOPagedListContainer.md) |
| POST | `/api/WorkflowTemplate/GetCompanyTemplatesMin` | [BaseSearch](models/BaseSearch.md) | [WorkflowTemplateMinDTOPagedListContainer](models/WorkflowTemplateMinDTOPagedListContainer.md) |
| POST | `/api/WorkflowTemplate/ReplaceUserInConfirmationFlows` | — | `array` |
| POST | `/api/WorkflowTemplate/UpdateTemplates` | [WorkflowTemplateDTO](models/WorkflowTemplateDTO.md) | [WorkflowTemplateDTO](models/WorkflowTemplateDTO.md) |
| POST | `/api/WorkflowTemplate/UpdateWorkflowTemplate` | [WorkflowTemplateDTO](models/WorkflowTemplateDTO.md) | [Response](models/Response.md) |

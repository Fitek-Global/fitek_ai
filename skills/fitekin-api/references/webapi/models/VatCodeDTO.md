# VatCodeDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `VatRate` | double | no |  |
| `IsDefault` | boolean | no |  |
| `FullName` | string | yes |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `InvoiceCountInUse` | int32 | yes |  |
| `AutoTransactionCountInUse` | int32 | yes |  |
| `AssignedCurrentToUser` | boolean | no |  |

Used by:

- GET /api/VatCode/GetVatCodes (response) — [VatCode](../endpoints/VatCode.md)
- POST /api/VatCode/AddVatCode (request) — [VatCode](../endpoints/VatCode.md)
- POST /api/VatCode/EditVatCode (request) — [VatCode](../endpoints/VatCode.md)
- POST /api/VatCode/EditVatCode (response) — [VatCode](../endpoints/VatCode.md)
- POST /api/VatCode/ToggleVatCodeDefault (request) — [VatCode](../endpoints/VatCode.md)
- POST /api/VatCode/ToggleVatCodeDefault (response) — [VatCode](../endpoints/VatCode.md)
- [CompanyDataDTO](CompanyDataDTO.md).VatCodes
- [PurchaseOrdersRowDTO](PurchaseOrdersRowDTO.md).VatCode
- [TransactionRowDTO](TransactionRowDTO.md).VatCode
- [VatCodeDTOPagedListContainer](VatCodeDTOPagedListContainer.md).Items

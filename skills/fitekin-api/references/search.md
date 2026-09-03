# List and search payloads

Almost every list endpoint in the Web API is a `POST` taking a search object. Two shapes exist:

| Model | Used by | Extra |
|---|---|---|
| [`BaseSearch`](webapi/models/BaseSearch.md) | master data (suppliers, accounts, VAT codes, dimensions, users, purchase orders, AutoTransactions…) | — |
| [`InvoiceSearchOptions`](webapi/models/InvoiceSearchOptions.md) | invoice lists (`Invoice/GetInvoicesSmall|Medium|Full`, `ArchiveInvoice/GetInvoicesSmall`, dashboard/slider lists) | `IsIncludeWorkflows` |

Both carry:

```json
{
  "PagingOptions": { "Page": 1, "Count": 50 },
  "SortItems": [ { "SortColumn": "InvoiceDate", "SortDirection": 1 } ],
  "Restrictions": [
    { "Field": "Status", "Value": null, "Values": [0, 2], "FieldSearchType": 0 },
    { "Field": "InvoiceDateFrom", "Value": "2026-08-01", "Values": null, "FieldSearchType": 0 },
    { "Field": "SupplierName", "Value": "acme", "Values": null, "FieldSearchType": 0 }
  ]
}
```

## PagingOptions

`Page` is 1-based, `Count` is the page size. Responses are `<Dto>PagedListContainer` with `Items`, `TotalCount`, `Skip`, `Take`, `HasCount`. Keep `Count` ≤ 100 and page until `Items.length < Count` or `Skip + Items.length >= TotalCount`.

## SortItems

`SortColumn` is the property name of the entity being listed (case-insensitive), e.g. `InvoiceDate`, `DueDate`, `Number`, `TotalAmountWithVat`, `SupplierName`, `Status`, `Id`. `SortDirection`: `0` = ascending, `1` = descending ([`SortDirection`](webapi/models/SortDirection.md)). Unknown columns are ignored or rejected with `400`; fall back to `Id`.

## Restrictions

Each [`RestrictionItem`](webapi/models/RestrictionItem.md) is one filter, combined with AND:

| Property | Meaning |
|---|---|
| `Field` | Filter name (see tables below), not necessarily a DTO property. |
| `Value` | Single value: string, number, boolean or ISO date. Text filters are case-insensitive "contains". |
| `Values` | List alternative for multi-select filters (`Status`, id lists). |
| `FieldSearchType` | `0` = `NotSelected` (default contains/normal), `10` = `Exact` ([`SearchType`](webapi/models/SearchType.md)). |

Enum-typed filters take the **numeric** enum value. For example invoice `Status` uses [`InvoiceStatus`](webapi/models/InvoiceStatus.md): `New`=0, `InApproval`=2, `PendingExport`=3, `Exported`=4, `Deleted`=5, `Archived`=6, `NotForExport`=7, `Rejected`=9, `Draft`=10, `ImportedWithErrors`=11, `PendingAI`=12.

### Invoice filters (`Invoice/GetInvoices*`, `ArchiveInvoice/GetInvoicesSmall`)

Text (contains, case-insensitive) — `Value` is a string:

`GeneralSearch` (number, supplier, description, reference…), `Number`, `Description`, `InvoiceRowsDescription`, `SupplierName`, `Beneficiary`, `ReferenceNumber`, `PayToAccount`, `ContractNumber`, `ErpId`, `ExternalId`, `PurchaseOrder`, `ConfirmationFlowComments`, `TotalAmountWithVat`, `SumWithoutVat`, `Currency`, `InvoiceTypeSearch`, `PaymentMethodSearch`, `InvoiceCustomFieldsSearch`, `PartnerCode`, `ContactName`, `DocumentName`, `ModifiedByName`.

Set `SearchInCustomFields` = `true` to make `GeneralSearch` also look into custom fields.

Dates — `Value` is an ISO date (`2026-08-01`); `From` is inclusive from start of day, `To` inclusive to end of day:

`InvoiceDateFrom` / `InvoiceDateTo`, `DueDateFrom` / `DueDateTo`, `AccountingDateFrom` / `AccountingDateTo`, `ImportedDateFrom` / `ImportedDateTo`, `ExportedDateFrom` / `ExportedDateTo`, `DateLastTaskFrom` / `DateLastTaskTo`. Exact UTC comparisons: `InvoiceDateGreaterThanUTC`, `InvoiceDateGreaterThanEqualUTC`, `InvoiceDateLessThanUTC`, `InvoiceDateLessThanEqualUTC`.

Ids and enums — `Value` is a number or `Values` a list of numbers:

`Status` (single `Value` or list in `Values`), `Id`, `IdsList`, `SupplierId`, `InvoiceTypeId`, `PaymentMethodId`, `InvoiceType`, `PaymentMethod`, `DocumentType`, `CreatedBy`.

Booleans — `Value` is `true`/`false`:

`IsCredit`, `IsDebit`, `IsDuplicate`, `OnlyMyTasks` (only invoices with a task assigned to the current user), `InvoiceNonSubmitted`, `OnExternalApprovement`, `IsExportAfterApprovalEnabled`.

People (GUID lists in `Values`): `HandledByGuidList`, `HeadingTowardsGuidList`, `WaitingForConfirmationGuidList`; numeric variants `HandledByIdList`, `WaitingForConfirmationIdList`.

Accounting: `Accounts`, `Dimensions`, `Objects`, `SupplierCountryNot` (exclude a supplier country code).

### Master-data filters (`BaseSearch`)

Most master-data lists accept `GeneralSearch` plus their own columns as `Field` names (`Code`, `Description`, `Name`, `IsActive`, `InUse`, …). Use the property names shown in the returned DTO model file; the UI filters use the same names.

## Recipe: unconfirmed invoices from one supplier this month

```json
POST /webapi/api/Invoice/GetInvoicesSmall
{
  "PagingOptions": { "Page": 1, "Count": 100 },
  "SortItems": [ { "SortColumn": "InvoiceDate", "SortDirection": 1 } ],
  "Restrictions": [
    { "Field": "SupplierName", "Value": "Acme", "FieldSearchType": 0 },
    { "Field": "Status", "Values": [0, 2], "FieldSearchType": 0 },
    { "Field": "InvoiceDateFrom", "Value": "2026-09-01", "FieldSearchType": 0 },
    { "Field": "InvoiceDateTo", "Value": "2026-09-30", "FieldSearchType": 0 }
  ],
  "IsIncludeWorkflows": false
}
```

Then, for totals across the same filter, `POST /webapi/api/Invoice/GetTotalAmounts` with the identical `Restrictions`.

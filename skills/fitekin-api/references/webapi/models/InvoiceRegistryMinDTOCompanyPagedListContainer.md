# InvoiceRegistryMinDTOCompanyPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [InvoiceRegistryMinDTO](InvoiceRegistryMinDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |
| `CompanyGuid` | uuid | no |  |

Used by:

- POST /api/Invoice/GetRegistryMyCompaniesInvoicesMin (response) — [MobileApp](../endpoints/MobileApp.md)

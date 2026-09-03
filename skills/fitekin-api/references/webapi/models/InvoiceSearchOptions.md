# InvoiceSearchOptions

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `SortItems` | [SortItem](SortItem.md)[] | yes |  |
| `PagingOptions` | [PagingOptions](PagingOptions.md) | no |  |
| `Restrictions` | [RestrictionItem](RestrictionItem.md)[] | yes |  |
| `IsIncludeWorkflows` | boolean | no |  |

Used by:

- POST /api/ArchiveInvoice/GetInvoicesSmall (request) — [ArchiveInvoice](../endpoints/ArchiveInvoice.md)
- POST /api/Invoice/GetDashboardInvoicesMin (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/GetInvoicesFull (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/GetInvoicesMedium (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/GetInvoicesSmall (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/GetRegistryInvoicesMin (request) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/Invoice/GetRegistryInvoicesMinCount (request) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/Invoice/GetRegistryMyCompaniesInvoicesMin (request) — [MobileApp](../endpoints/MobileApp.md)
- POST /api/Invoice/GetSliderInvoicesMin (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/GetTotalAmounts (request) — [Invoice](../endpoints/Invoice.md)

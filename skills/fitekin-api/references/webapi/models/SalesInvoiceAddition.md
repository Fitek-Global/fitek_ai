# SalesInvoiceAddition

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceGuid` | uuid | yes |  |
| `InvoiceId` | int32 | no |  |
| `Code` | string | yes |  |
| `AddContent` | string | yes |  |
| `AddRate` | double | yes |  |
| `AddSum` | double | yes |  |
| `AdditionType` | int32 | no |  |
| `AdditionPartOrder` | int32 | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `SalesInvoice` | [SalesInvoice](SalesInvoice.md) | no |  |
| `SalesInvoiceRow` | [SalesInvoiceRow](SalesInvoiceRow.md) | no |  |

Used by:

- [SalesInvoiceRow](SalesInvoiceRow.md).SalesInvoiceAdditions
- [SalesInvoice](SalesInvoice.md).SalesInvoiceAdditions

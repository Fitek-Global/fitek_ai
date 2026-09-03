# SalesInvoiceAdditionDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceGuid` | uuid | yes |  |
| `InvoiceId` | int32 | no |  |
| `Code` | string | yes |  |
| `AddContent` | string | yes |  |
| `AddRate` | double | yes |  |
| `AddSum` | double | yes |  |
| `AdditionType` | int32 | no |  |
| `AdditionPartOrder` | int32 | yes |  |

Used by:

- [SalesInvoiceDTO](SalesInvoiceDTO.md).SalesInvoiceAdditions
- [SalesInvoiceRowDTO](SalesInvoiceRowDTO.md).SalesInvoiceAdditions

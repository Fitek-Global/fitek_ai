# SalesInvoiceVat

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `TaxType` | string | yes |  |
| `SumBeforeVAT` | double | yes |  |
| `VATRate` | double | no |  |
| `VATSum` | double | no |  |
| `SumAfterVAT` | double | yes |  |
| `Currency` | string | yes |  |
| `ModifiedBy` | int32 | no |  |
| `TaxTypeLocalFieldId` | int32 | yes |  |
| `SalesInvoice` | [SalesInvoice](SalesInvoice.md) | no |  |
| `TaxTypeLocalField` | [LocalField](LocalField.md) | no |  |

Used by:

- [LocalField](LocalField.md).SalesInvoiceVats
- [SalesInvoice](SalesInvoice.md).SalesInvoiceVats

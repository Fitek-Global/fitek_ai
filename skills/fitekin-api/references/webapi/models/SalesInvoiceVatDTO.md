# SalesInvoiceVatDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `TaxType` | string | yes |  |
| `SumBeforeVat` | double | yes |  |
| `VATRate` | double | no |  |
| `VATSum` | double | no |  |
| `SumAfterVAT` | double | yes |  |
| `Currency` | string | yes |  |
| `ModifiedBy` | int32 | no |  |
| `TaxTypeLocalFieldId` | int32 | yes |  |
| `TaxTypeLocalField` | [LocalFieldDTO](LocalFieldDTO.md) | no |  |

Used by:

- [SalesInvoiceDTO](SalesInvoiceDTO.md).SalesInvoiceVats

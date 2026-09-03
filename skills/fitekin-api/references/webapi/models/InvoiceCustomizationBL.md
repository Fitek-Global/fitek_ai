# InvoiceCustomizationBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | no |  |
| `CustomizationId` | int32 | no |  |
| `InvoiceCustomFieldItem` | [InvoiceCustomFieldItemBL](InvoiceCustomFieldItemBL.md) | no |  |
| `Value` | string | yes |  |
| `Description` | string | yes |  |

Used by:

- [InvoiceBL](InvoiceBL.md).InvoiceCustomization

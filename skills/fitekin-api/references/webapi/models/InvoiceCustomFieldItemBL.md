# InvoiceCustomFieldItemBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceCustomFieldId` | int32 | no |  |
| `Code` | string | yes |  |
| `Description` | string | yes |  |
| `StartDate` | date-time | yes |  |
| `EndDate` | date-time | yes |  |
| `InUse` | boolean | no |  |

Used by:

- [InvoiceCustomizationBL](InvoiceCustomizationBL.md).InvoiceCustomFieldItem

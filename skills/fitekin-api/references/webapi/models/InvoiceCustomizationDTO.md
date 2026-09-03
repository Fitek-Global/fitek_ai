# InvoiceCustomizationDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `InvoiceId` | int32 | no |  |
| `CustomizationId` | int32 | no |  |
| `Customization` | [InvoiceCustomFieldMinDTO](InvoiceCustomFieldMinDTO.md) | no |  |
| `Value` | string | yes |  |
| `Description` | string | yes |  |

Used by:

- POST /api/Invoice/SaveCustomFieldsAfterExport (request) — [Invoice](../endpoints/Invoice.md)
- POST /api/Invoice/SaveCustomFieldsAfterExport (response) — [Invoice](../endpoints/Invoice.md)
- [InvoiceConfirmationExtDTO](InvoiceConfirmationExtDTO.md).InvoiceCustomization
- [InvoiceDTO](InvoiceDTO.md).InvoiceCustomization

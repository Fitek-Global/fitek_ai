# CustomizationDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `CustomizationId` | int32 | no |  |
| `Customization` | [InvoiceCustomFieldDTO](InvoiceCustomFieldDTO.md) | no |  |
| `Value` | string | yes |  |
| `Description` | string | yes |  |

Used by:

- GET /api/Invoice/GetAvailableCustomizationFields (response) — [Invoice](../endpoints/Invoice.md)

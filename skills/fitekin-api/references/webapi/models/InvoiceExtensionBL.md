# InvoiceExtensionBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceId` | int32 | no |  |
| `ExtensionId` | string | yes |  |
| `InformationName` | string | yes |  |
| `InformationContent` | string | yes |  |
| `ExtensionType` | enum [ExtensionType](ExtensionType.md) | no |  |
| `ExtensionPartType` | enum [ExtensionPartType](ExtensionPartType.md) | no |  |
| `ExtensionPartOrder` | int32 | yes |  |

Used by:

- [InvoiceBL](InvoiceBL.md).InvoiceExtensions

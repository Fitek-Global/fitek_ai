# InvoiceParty

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceGuid` | uuid | yes |  |
| `InvoiceId` | int32 | no |  |
| `GLN` | string | yes |  |
| `UniqueCode` | string | yes |  |
| `DepId` | string | yes |  |
| `ExtensionType` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `Invoice` | [Invoice](Invoice.md) | no |  |

Used by:

- [Invoice](Invoice.md).InvoiceParties

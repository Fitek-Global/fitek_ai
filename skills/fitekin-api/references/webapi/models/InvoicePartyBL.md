# InvoicePartyBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `InvoiceId` | int32 | no |  |
| `GLN` | string | yes |  |
| `UniqueCode` | string | yes |  |
| `DepId` | string | yes |  |
| `ExtensionType` | enum [ExtensionType](ExtensionType.md) | no |  |

Used by:

- [InvoiceBL](InvoiceBL.md).InvoiceParties

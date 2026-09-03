# BankAccountDb

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Account` | string | yes |  |
| `SupplierId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `Supplier` | [Supplier](Supplier.md) | no |  |

Used by:

- [Supplier](Supplier.md).BankAccounts

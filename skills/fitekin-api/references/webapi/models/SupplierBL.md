# SupplierBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `Name` | string | yes |  |
| `RegistrationCode` | string | yes |  |
| `VatCode` | string | yes |  |
| `Country` | string | yes |  |
| `CompanyType` | string | yes |  |
| `Status` | int32 | no |  |
| `Address` | string | yes |  |
| `Notes` | string | yes |  |
| `Code` | string | yes |  |
| `Email` | string | yes |  |
| `ContactPersonName` | string | yes |  |
| `OverdueChargeRate` | double | yes |  |
| `PaymentDays` | int32 | yes |  |
| `VatCodeId` | int32 | yes |  |
| `BankAccount` | string | yes |  |
| `BankAccounts` | [BankAccountBL](BankAccountBL.md)[] | yes |  |
| `ExternalId` | string | yes |  |

Used by:

- [InvoiceBL](InvoiceBL.md).Supplier

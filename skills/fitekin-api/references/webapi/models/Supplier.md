# Supplier

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Name` | string | yes |  |
| `RegistrationCode` | string | yes |  |
| `VatCode` | string | yes |  |
| `Country` | string | yes |  |
| `CompanyType` | string | yes |  |
| `Status` | int32 | yes |  |
| `Address` | string | yes |  |
| `Notes` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `Code` | string | yes |  |
| `Email` | string | yes |  |
| `ContactPersonName` | string | yes |  |
| `OverdueChargeRate` | double | yes |  |
| `PaymentDays` | int32 | yes |  |
| `VatCodeId` | int32 | yes |  |
| `BankAccount` | string | yes |  |
| `BankAccounts` | [BankAccountDb](BankAccountDb.md)[] | yes |  |
| `AutoTransactions` | [AutoTransactions](AutoTransactions.md)[] | yes |  |
| `Invoices` | [Invoice](Invoice.md)[] | yes |  |
| `PurchaseOrders` | [PurchaseOrders](PurchaseOrders.md)[] | yes |  |
| `VatCodeModel` | [VatCode](VatCode.md) | no |  |
| `ExternalId` | string | yes |  |

Used by:

- [AutoTransactions](AutoTransactions.md).Supplier
- [BankAccountDb](BankAccountDb.md).Supplier
- [Invoice](Invoice.md).Supplier
- [PurchaseOrders](PurchaseOrders.md).Supplier
- [VatCode](VatCode.md).Supplier

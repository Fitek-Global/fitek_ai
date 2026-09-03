# Receiver

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `Name` | string | yes |  |
| `RegistrationCode` | string | yes |  |
| `VatCode` | string | yes |  |
| `Country` | string | yes |  |
| `Status` | enum [CompanyStatus](CompanyStatus.md) | no |  |
| `Address` | string | yes |  |
| `Address2` | string | yes |  |
| `City` | string | yes |  |
| `ZipCode` | string | yes |  |
| `Language` | string | yes |  |
| `Notes` | string | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `Code` | string | yes |  |
| `Email` | string | yes |  |
| `ContactPersonName` | string | yes |  |
| `OverdueChargeRate` | double | yes |  |
| `PaymentDays` | int32 | yes |  |
| `BankAccount` | string | yes |  |
| `Currency` | string | yes |  |
| `SalesInvoices` | [SalesInvoice](SalesInvoice.md)[] | yes |  |

Used by:

- [SalesInvoice](SalesInvoice.md).Receiver

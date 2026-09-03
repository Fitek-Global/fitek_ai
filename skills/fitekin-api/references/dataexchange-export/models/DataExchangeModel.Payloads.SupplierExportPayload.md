# DataExchangeModel.Payloads.SupplierExportPayload

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `id` | int32 | no |  |
| `companyId` | uuid | no |  |
| `organizationId` | uuid | no |  |
| `resellerId` | uuid | no |  |
| `country` | null,string | no |  |
| `name` | null,string | no |  |
| `registrationCode` | null,string | no |  |
| `vatCode` | null,string | no |  |
| `erpCode` | null,string | no |  |
| `supplierContactPerson` | [DataExchangeModel.Payloads.ContactPerson](DataExchangeModel.Payloads.ContactPerson.md) | no |  |
| `bankAccounts` | null,array | no |  |

Used by:

- POST /Suppliers (response) — [Export](../endpoints/Export.md)

# LocalField

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `FieldName` | string | yes |  |
| `FieldTranslationKey` | string | yes |  |
| `IsVisible` | boolean | no |  |
| `ChannelFields` | [ChannelField](ChannelField.md)[] | yes |  |
| `SalesInvoiceVats` | [SalesInvoiceVat](SalesInvoiceVat.md)[] | yes |  |
| `SalesInvoiceRowsByVat` | [SalesInvoiceRow](SalesInvoiceRow.md)[] | yes |  |
| `SalesInvoiceRowsByUnit` | [SalesInvoiceRow](SalesInvoiceRow.md)[] | yes |  |

Used by:

- [ChannelField](ChannelField.md).LocalField
- [SalesInvoiceRow](SalesInvoiceRow.md).ItemUnitLocalField
- [SalesInvoiceRow](SalesInvoiceRow.md).TaxTypeLocalField
- [SalesInvoiceVat](SalesInvoiceVat.md).TaxTypeLocalField

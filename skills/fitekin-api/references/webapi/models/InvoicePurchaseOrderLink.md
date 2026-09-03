# InvoicePurchaseOrderLink

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `InvoiceId` | int32 | no |  |
| `InvoiceGuid` | uuid | yes |  |
| `PurchaseOrderId` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `LinkerGroupMemberGuid` | uuid | yes |  |
| `LinkedDateTimeUtc` | date-time | yes |  |
| `LinkedInvoice` | [Invoice](Invoice.md) | no |  |
| `LinkedPurchaseOrder` | [PurchaseOrders](PurchaseOrders.md) | no |  |

Used by:

- [Invoice](Invoice.md).InvoicePurchaseOrderLink
- [PurchaseOrders](PurchaseOrders.md).InvoicePurchaseOrderLink

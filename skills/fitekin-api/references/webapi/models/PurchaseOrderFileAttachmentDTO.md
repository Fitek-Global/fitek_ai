# PurchaseOrderFileAttachmentDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `PurchaseOrderId` | int32 | no |  |
| `FileName` | string | yes |  |
| `Extension` | string | yes |  |
| `PathToFile` | string | yes |  |
| `Base64Content` | string | yes |  |
| `FileUrl` | string | yes |  |
| `ModifiedById` | int32 | no |  |
| `UserFullName` | string | yes |  |
| `UploadedDateTime` | date-time | no |  |
| `FileSize` | int32 | no |  |

Used by:

- GET /api/PurchaseOrders/GetPurchaseOrderRelatedDocuments/{poId} (response) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/DeletePurchaseOrderFile (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- POST /api/PurchaseOrders/UploadPurchaseOrderInvoiceFile (request) — [PurchaseOrders](../endpoints/PurchaseOrders.md)
- [PurchaseOrdersDTO](PurchaseOrdersDTO.md).DocumentFiles

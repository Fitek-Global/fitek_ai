# FitekIN Web API: Notification

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

1 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Notification/NotifyConfirmerForInvoice

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `invoiceId` | query | no | int32 |  |

**Request body**

_None._

**Response (200)**

[Response](../models/Response.md)

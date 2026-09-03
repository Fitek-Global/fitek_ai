# DataExchange API (integrator import / export)

The DataExchange API is FitekIN's machine-to-machine interface for ERP and accounting integrations. It is separate from the Web API:

| | Web API (`/webapi`) | DataExchange (`/DataExchangeWebApiCore`) |
|---|---|---|
| Who | A FitekIN user (session token) | An **integrator** registered by Fitek for the customer |
| Auth | `Authorization-Token` from login | Integrator credentials (Keycloak client / integrator id) provisioned by Fitek; requests are checked against the integrator's endpoint permissions and IP allow-list |
| Shape | UI DTOs, paging, search restrictions | Batch import / export documents (JSON or XML), `RequestId` per request |
| Use it for | Anything a user does in the UI | Bulk master-data import (accounts, dimensions, suppliers, users, VAT codes), invoice import (E-Invoice / UBL), exports to the ERP, sales-invoice exchange |

If the user has only a FitekIN login, use the Web API. Use DataExchange only when the user has integrator credentials and asks for import/export style work.

## Reference

- Import: [`dataexchange-import/INDEX.md`](dataexchange-import/INDEX.md), base path `{BASE_URL}/DataExchangeWebApiCore/api/v3` (each endpoint also exists as `/DataExchangeWebApiCore/Import/<Name>.v3`).
- Export: [`dataexchange-export/INDEX.md`](dataexchange-export/INDEX.md), same base path with `/Export/...`.
- Sales invoices: [`dataexchange-salesinvoice/INDEX.md`](dataexchange-salesinvoice/INDEX.md).

## Rules

- Every request carries a unique `RequestId` (GUID) in its envelope plus the `IntegratorId`. Re-sending the same `RequestId` is rejected as a duplicate; generate a new one for a real retry only after confirming the first attempt did not land.
- Imports are processed per company: the company is identified inside the payload (registration code / company id), not by the session.
- Single-item endpoints (`/Import/Supplier`) and batch endpoints (`/Import/Suppliers`) share the same item model. Prefer batch for more than a handful of records.
- Responses report per-item results; a `200` does not mean every item was accepted. Read the result list.
- Version probe: `GET {BASE_URL}/DataExchangeWebApiCore/api/Status/Version`.
- Credentials for this API are never in the Web API session. Ask the user for them; do not try to derive them.

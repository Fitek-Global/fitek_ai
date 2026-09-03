# Errors and status codes

The Web API wraps unhandled exceptions into a JSON body of the form:

```json
{ "message": "<human readable text>" }
```

Validation failures raised by controllers use the same shape plus optional details (`ControllerExceptionDto`: `Message`, and where present an error code / field list). Read `message` and show it to the user verbatim; it is usually the same text the UI would show.

| Status | Meaning | What to do |
|---|---|---|
| `200` | OK. Some endpoints return an empty body on success. | Continue. Read the `Authorization-Token` response header. |
| `400` | Validation or business-rule failure (`AppException`, `ControllerException`, captcha). | Fix the payload using `message`; do not retry unchanged. |
| `401` | Missing/expired token, or the user lacks the right for this endpoint in the current company. | If the token is old, re-login once and retry. Otherwise tell the user which action is not permitted. |
| `403` | Forbidden (access violation). | Stop, report. |
| `404` | Unknown route or entity (`KeyNotFoundException`). | Check the path against `webapi/INDEX.md`; check the id. |
| `409` | Duplicate request (`RequestId`/idempotency conflict on DataExchange). | Do not resend the same `RequestId`. |
| `500` | Unhandled server error. | Report the `message`; retry at most once for read-only calls. |

Notes

- The Web API is a UI backend. Responses are the same DTOs the UI receives; large lists come back as `...PagedListContainer` objects with `Items`, `TotalCount`, and paging info (see the model files).
- Dates are ISO 8601 strings in UTC (`2026-09-01T00:00:00`). Send dates the same way.
- Enum properties are transported as strings by name in JSON bodies, but **search restrictions and several query parameters expect the numeric value**. `enums.md` lists both.
- Amounts are decimals (JSON numbers). Do not round before sending.
- Text input is trimmed server-side; leading/trailing spaces are not significant.

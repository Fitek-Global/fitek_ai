# Authentication, sessions and company selection

FitekIN is multi-company: every user session is bound to exactly one company (tenant). All Web API calls run in the company the session token was issued for.

## Environments

| Environment | `FITEKIN_BASE_URL` |
|---|---|
| Production | `https://fitekin.com` |
| Test / UAT / dev | `https://test.fitekin.com`, `https://uat.fitekin.com`, `https://dev.fitekin.com` (Fitek-internal or customer-specific hosts; ask the user) |

Service prefixes under the base URL:

| Service | Prefix | Use |
|---|---|---|
| Login API | `/LoginApi/api` | Obtain a session token (anonymous) |
| Web API | `/webapi/api` | Everything a logged-in user can do in the UI |
| DataExchange API | `/DataExchangeWebApiCore` | Integrator import/export (separate credentials, see `data-exchange.md`) |

Credentials come from the environment (`FITEKIN_USERNAME`, `FITEKIN_PASSWORD`) or from the user at run time. Never write them into files, prompts, logs or URLs.

## 1. Log in

```http
POST {BASE_URL}/LoginApi/api/Login
Content-Type: application/json

{ "Username": "<email or username>", "Password": "<password>", "DeviceName": "agent", "AppVersion": "fitekin-api-skill" }
```

Response: [`Session`](loginapi/models/Session.md)

```json
{
  "token": "<JWT>",
  "expirationTime": "...",
  "userGuid": "…",
  "userLastCompanyGuid": "…",
  "userCompanies": [ { "guid": "…", "name": "Company A" }, { "guid": "…", "name": "Company B" } ],
  "isBoAdmin": false,
  "authStatus": "ActiveUser"
}
```

- `token` is already bound to `userLastCompanyGuid` (the company the user used last).
- `authStatus` other than `ActiveUser` means the login did not produce a usable session (unknown user, blocked, needs another login method). Report it and stop.
- Production may require a captcha for username/password login (`/api/Login/LoginWCaptcha`). If plain `/api/Login` is rejected, tell the user; the agent cannot solve captchas.

A shorter alternative that returns only the token string, no company list: `POST {BASE_URL}/webapi/api/Login/Login` with the same `Credentials` body.

## 2. Send the token on every Web API call

```http
Authorization-Token: <token>
```

`Authorization: Bearer <token>` is accepted too. Requests without a valid token get `401`. Endpoints additionally check the user's rights in the current company; a missing right is also a `401`.

### Sliding expiration

Every successful Web API response may carry two headers:

| Header | Meaning |
|---|---|
| `Authorization-Token` | A refreshed token with a later expiry. Replace your stored token with it. |
| `ExpirationTime` | Unix ticks of the new expiry. |

Always read `Authorization-Token` from responses and use the newest one. `POST /webapi/api/Session/ExtendSession` forces an extension. On `401` after a period of inactivity, log in again once; do not loop.

## 3. Choose the company

The session works in `userLastCompanyGuid`. To work in another company from `userCompanies`:

```http
POST {BASE_URL}/webapi/api/BO/ChangeUserLastCompany?companyGuid=<guid>
Authorization-Token: <token>
```

The response's `Authorization-Token` header holds the token for the new company. Use it for all further calls. Confirm the switch with `GET /webapi/api/Company/GetCurrentCompany` (see [`webapi/endpoints/Company.md`](webapi/endpoints/Company.md)).

`GET /webapi/api/Session/GetUserCompanies?lastCompanyGuid=<guid>` returns the full company list with access details when `userCompanies` from login is not enough.

## 3a. Alternative: OAuth 2.1 through the MCP authorization server

If the agent runtime speaks MCP (see `mcp.md`), the browser sign-in that `claude mcp add` triggers ends with an OAuth `access_token` from `https://<host>/AzureLogin/token`. That token **is the same FitekIN session JWT** that step 1 returns, so:

- use it unchanged as `Authorization-Token` for the Web API and as `Authorization: Bearer` for `/AIAgent/mcp`;
- steps 2, 3 and 4 above apply to it as written (sliding refresh headers, `ChangeUserLastCompany`, logout);
- conversely, a token from `POST /LoginApi/api/Login` is accepted by the MCP tools' `authToken` parameter and as the MCP bearer header.

One login, one token, both channels. Today the `/authorize` sign-in is the Microsoft EntraID leg; FitekIN username/password sign-in at `/authorize` is planned. Users without an EntraID identity take step 1.

## 4. Log out

`POST {BASE_URL}/webapi/api/Login/Logout` ends the session. Do it when the task is finished if the user asked for a one-off run.

## Checklist for the agent

1. Read base URL and credentials from the environment; ask if missing.
2. `POST /LoginApi/api/Login`; stop on `authStatus != ActiveUser`.
3. If the user named a company, `ChangeUserLastCompany` and take the token from the response header.
4. Send `Authorization-Token` on every call and keep the freshest token from response headers.
5. On `401`: re-login once, replay the request, then report if it fails again.

# AccountDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [AccountDTO](AccountDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- GET /api/Account/GetAccountsByDescription (response) — [Account](../endpoints/Account.md)
- POST /api/Account/GetAccounts (response) — [Account](../endpoints/Account.md)

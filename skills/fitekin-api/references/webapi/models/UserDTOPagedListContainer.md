# UserDTOPagedListContainer

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Items` | [UserDTO](UserDTO.md)[] | yes |  |
| `Skip` | int32 | no |  |
| `Take` | int32 | no |  |
| `TotalCount` | int32 | no |  |
| `HasCount` | boolean | no |  |

Used by:

- POST /api/Company/GetCompanyUsers (response) — [Company](../endpoints/Company.md)
- POST /api/User/GetUsers (response) — [User](../endpoints/User.md)
- POST /api/User/GetUsersFromBo (response) — [User](../endpoints/User.md)

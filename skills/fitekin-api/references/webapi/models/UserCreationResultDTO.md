# UserCreationResultDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `ExistingUserAddedToCompany` | boolean | no |  |
| `IsNewCompanyRelation` | boolean | no |  |
| `UserGuid` | uuid | no |  |
| `Success` | boolean | no |  |
| `Errors` | string[] | yes |  |

Used by:

- POST /api/User/CreateUser (response) — [User](../endpoints/User.md)
- POST /api/User/UpdateUser (response) — [User](../endpoints/User.md)

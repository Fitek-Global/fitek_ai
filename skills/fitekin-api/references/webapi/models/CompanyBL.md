# CompanyBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `CompanyGuid` | uuid | no |  |

Used by:

- [GroupMemberBL](GroupMemberBL.md).Company

# GroupMemberBL

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ModifiedBy` | int32 | yes |  |
| `UserGuid` | uuid | no |  |
| `CompanyGuid` | uuid | yes |  |
| `Title` | string | yes |  |
| `IsCompanyPrimaryContact` | boolean | yes |  |
| `IsActive` | boolean | no |  |
| `MembershipStart` | date-time | yes |  |
| `MembershipEnd` | date-time | yes |  |
| `UserFullName` | string | yes | read-only |
| `UserEmail` | string | yes |  |
| `Company` | [CompanyBL](CompanyBL.md) | no |  |
| `User` | [UserBL](UserBL.md) | no |  |
| `MemberRoles` | [MemberRoleBL](MemberRoleBL.md)[] | yes |  |
| `Substitute` | [SubstituteBL](SubstituteBL.md) | no |  |
| `Substitutes` | [SubstituteBL](SubstituteBL.md)[] | yes |  |
| `UserSettings` | [UserSettingCommon](UserSettingCommon.md)[] | yes |  |
| `MonetaryLimit` | double | yes |  |
| `MonetaryCurrency` | string | yes |  |

Used by:

- [TaskBL](TaskBL.md).GroupMember
- [UserBL](UserBL.md).GroupMember

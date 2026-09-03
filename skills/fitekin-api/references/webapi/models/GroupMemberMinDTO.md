# GroupMemberMinDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `UserId` | int32 | no |  |
| `UserGuid` | uuid | no |  |
| `Title` | string | yes |  |
| `IsActive` | boolean | no |  |
| `MembershipStart` | date-time | yes |  |
| `MembershipEnd` | date-time | yes |  |
| `IsCompanyPrimaryContact` | boolean | yes |  |
| `Company` | [CompanyMinDTO](CompanyMinDTO.md) | no |  |
| `UserFullName` | string | yes |  |
| `MemberRoles` | [MemberRoleDTO](MemberRoleDTO.md)[] | yes |  |
| `Substitute` | [SubstituteDTO](SubstituteDTO.md) | no |  |
| `MonetaryLimit` | double | yes |  |
| `MonetaryCurrency` | string | yes |  |

Used by:

- [UserDTO](UserDTO.md).GroupMember

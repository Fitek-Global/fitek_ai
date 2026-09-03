# GroupMemberDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `UserGuid` | uuid | no |  |
| `CompanyGuid` | uuid | yes |  |
| `Title` | string | yes |  |
| `Name` | string | yes |  |
| `IsCompanyPrimaryContact` | boolean | yes |  |
| `IsActive` | boolean | no |  |
| `MembershipStart` | date-time | yes |  |
| `MembershipEnd` | date-time | yes |  |
| `EmailLastValidated` | date-time | yes |  |
| `PersonalCodeLastValidated` | date-time | yes |  |
| `Company` | [CompanyMinDTO](CompanyMinDTO.md) | no |  |
| `User` | [UserDTO](UserDTO.md) | no |  |
| `UserFullName` | string | yes | read-only |
| `MemberRoles` | [MemberRoleDTO](MemberRoleDTO.md)[] | yes |  |
| `Substitute` | [SubstituteDTO](SubstituteDTO.md) | no |  |
| `Substitutes` | [SubstituteDTO](SubstituteDTO.md)[] | yes |  |
| `UserSettings` | [UserSettingCommon](UserSettingCommon.md)[] | yes |  |
| `MonetaryLimit` | double | yes |  |
| `MonetaryCurrency` | string | yes |  |

Used by:

- GET /api/GroupMember/GetArchiveCompanyGroupMembers (response) — [GroupMember](../endpoints/GroupMember.md)
- GET /api/GroupMember/GetByName (response) — [GroupMember](../endpoints/GroupMember.md)
- GET /api/GroupMember/GetCompanyGroupMembers (response) — [MobileApp](../endpoints/MobileApp.md)
- GET /api/GroupMember/GetGroupMember (response) — [MobileApp](../endpoints/MobileApp.md)
- GET /api/GroupMember/GetGroupMembers (response) — [GroupMember](../endpoints/GroupMember.md)
- POST /api/GroupMember/AddGroupMember (request) — [GroupMember](../endpoints/GroupMember.md)
- POST /api/GroupMember/EditGroupMember (request) — [GroupMember](../endpoints/GroupMember.md)
- [AuditHistoryEntryDTO](AuditHistoryEntryDTO.md).ModifiedBy
- [FilterTemplateDTO](FilterTemplateDTO.md).GroupMember
- [GroupMemberDTOPagedListContainer](GroupMemberDTOPagedListContainer.md).Items
- [InvoiceDataDTO](InvoiceDataDTO.md).CurrentGroupMember
- [SalesInvoiceHistoryDTO](SalesInvoiceHistoryDTO.md).GroupMember
- [TaskDTO](TaskDTO.md).GroupMember

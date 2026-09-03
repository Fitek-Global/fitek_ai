# FilterTemplateDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `IsNew` | boolean | no | read-only |
| `GroupMemberId` | int32 | no |  |
| `Name` | string | yes |  |
| `JSON` | string | yes |  |
| `IsDefault` | boolean | no |  |
| `GroupMember` | [GroupMemberDTO](GroupMemberDTO.md) | no |  |

Used by:

- GET /api/FilterTemplate/GetTemplates (response) — [FilterTemplate](../endpoints/FilterTemplate.md)
- POST /api/FilterTemplate/SaveFilterTemplate (request) — [FilterTemplate](../endpoints/FilterTemplate.md)
- POST /api/FilterTemplate/SaveFilterTemplate (response) — [FilterTemplate](../endpoints/FilterTemplate.md)

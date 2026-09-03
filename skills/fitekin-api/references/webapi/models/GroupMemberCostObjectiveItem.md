# GroupMemberCostObjectiveItem

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `GroupMemberId` | int32 | no |  |
| `CustomCostObjectiveId` | int32 | yes |  |
| `ObjectId` | int32 | no |  |
| `ObjectType` | int32 | no |  |
| `ModifiedBy` | int32 | yes |  |
| `GroupMember` | [GroupMember](GroupMember.md) | no |  |

Used by:

- [GroupMember](GroupMember.md).GroupMembersCostObjectiveItems

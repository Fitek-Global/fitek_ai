# GroupMemberApproverDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `Name` | string | yes |  |
| `IsWorkflowCompleter` | boolean | no |  |
| `MonetaryLimit` | double | yes |  |
| `MonetaryCurrency` | string | yes |  |
| `ConvertedMonetaryLimit` | double | yes |  |
| `ConvertedMonetaryCurrency` | string | yes |  |

Used by:

- POST /api/GroupMember/GetApproversList (response) — [MobileApp](../endpoints/MobileApp.md)

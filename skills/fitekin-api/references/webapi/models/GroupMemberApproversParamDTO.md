# GroupMemberApproversParamDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `SearchString` | string | yes |  |
| `ExcludeIds` | int32[] | yes |  |
| `IncludeIds` | int32[] | yes |  |
| `ApproversListDestination` | enum [ApproversListDestination](ApproversListDestination.md) | no |  |
| `Currency` | string | yes |  |
| `Date` | date-time | yes |  |

Used by:

- POST /api/GroupMember/GetApproversList (request) — [MobileApp](../endpoints/MobileApp.md)

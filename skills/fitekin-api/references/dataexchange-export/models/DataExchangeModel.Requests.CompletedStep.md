# DataExchangeModel.Requests.CompletedStep

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `resolution` | [ModelCommon.TaskStatus](ModelCommon.TaskStatus.md) | no |  |
| `resolutionDateTimeGreaterThanUTC` | date-time | no |  |
| `resolutionDateTimeGreaterThanEqualUTC` | date-time | no |  |
| `resolutionDateTimeLessThanUTC` | date-time | no |  |
| `resolutionDateTimeLessThanEqualUTC` | date-time | no |  |
| `userGuid` | uuid | no |  |
| `userPersonalCode` | null,string | no | max 16 |
| `userEmail` | null,string | no |  |

Used by:

- [DataExchangeModel.Requests.ConfirmationFlow](DataExchangeModel.Requests.ConfirmationFlow.md).completedStep

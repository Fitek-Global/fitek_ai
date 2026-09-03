# BackOfficeSessionDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int64 | no |  |
| `LoginMethod` | enum [LoginMethods](LoginMethods.md) | no |  |
| `SessionStartTimeUTC` | date-time | no |  |
| `SessionEndTimeUTC` | date-time | no |  |
| `UserGuid` | uuid | no |  |
| `CompanyGuid` | uuid | no |  |
| `CaptchaScore` | double | yes |  |
| `TerminationReason` | enum [TerminationReasons](TerminationReasons.md) | no |  |
| `TerminatedBy` | uuid | yes |  |
| `ClientId` | int64 | no |  |
| `User` | [BackOfficeUserDTO](BackOfficeUserDTO.md) | no |  |
| `Company` | [BackOfficeCompanyDTO](BackOfficeCompanyDTO.md) | no |  |

Used by:

- [BackOfficeUserDTO](BackOfficeUserDTO.md).Sessions

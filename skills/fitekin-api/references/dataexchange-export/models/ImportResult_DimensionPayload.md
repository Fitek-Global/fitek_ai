# DataExchangeModel.General.Output.ImportResult`1[DataExchangeModel.Payloads.DimensionPayload]

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `requestSource` | null,string | no |  |
| `requestMethod` | null,string | no |  |
| `requestHandler` | null,string | no |  |
| `requestReceivedDateTimeUTC` | date-time | no |  |
| `requestCompletedDateTimeUTC` | date-time | no |  |
| `requestProcessingTime` | null,string | no |  |
| `entriesReceivedCount` | int32 | no |  |
| `entriesFailedCount` | int32 | no |  |
| `entriesAddedCount` | int32 | no |  |
| `entriesUpdatedCount` | int32 | no |  |
| `entriesSkippedCount` | int32 | no |  |
| `entriesDeletedCount` | int32 | no |  |
| `validationWarnings` | null,array | no |  |
| `validationErrors` | null,array | no |  |
| `entriesAdded` | null,array | no |  |
| `entriesUpdated` | null,array | no |  |
| `entriesSkipped` | null,array | no |  |
| `entriesDeleted` | null,array | no |  |
| `responseId` | uuid | no |  |
| `status` | null,string | no |  |
| `generalErrorCode` | null,string | no |  |
| `generalMessage` | null,string | no |  |
| `errorMessages` | null,array | no |  |
| `authorizationToken` | uuid | no | required |
| `integratorId` | uuid | no | required |
| `callerIpAddress` | null,string | no |  |

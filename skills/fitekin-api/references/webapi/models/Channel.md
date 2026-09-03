# Channel

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ChannelName` | string | yes |  |
| `ChannelFields` | [ChannelField](ChannelField.md)[] | yes |  |

Used by:

- [ChannelField](ChannelField.md).Channel

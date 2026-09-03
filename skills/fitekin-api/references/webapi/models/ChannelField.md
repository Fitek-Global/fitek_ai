# ChannelField

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `ChannelId` | int32 | no |  |
| `LocalFieldId` | int32 | no |  |
| `FieldTypeId` | int32 | no |  |
| `Code` | string | yes |  |
| `IsMandatory` | boolean | no |  |
| `Channel` | [Channel](Channel.md) | no |  |
| `LocalField` | [LocalField](LocalField.md) | no |  |
| `FieldType` | [FieldType](FieldType.md) | no |  |

Used by:

- [Channel](Channel.md).ChannelFields
- [FieldType](FieldType.md).ChannelFields
- [LocalField](LocalField.md).ChannelFields

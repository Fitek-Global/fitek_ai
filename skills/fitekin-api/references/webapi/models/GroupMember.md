# GroupMember

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `Id` | int32 | no |  |
| `UniqId` | uuid | yes |  |
| `IsNew` | boolean | no | read-only |
| `UserGuid` | uuid | no |  |
| `CompanyGuid` | uuid | yes |  |
| `Title` | string | yes |  |
| `IsCompanyPrimaryContact` | boolean | yes |  |
| `ModifiedBy` | int32 | yes |  |
| `SettingsJson` | string | yes |  |
| `MonetaryLimit` | double | yes |  |
| `MonetaryCurrency` | string | yes |  |
| `MemberRoles` | [MemberRole](MemberRole.md)[] | yes |  |
| `Substitutes` | [Substitute](Substitute.md)[] | yes |  |
| `History` | [History](History.md)[] | yes |  |
| `SalesInvoiceHistory` | [SalesInvoiceHistory](SalesInvoiceHistory.md)[] | yes |  |
| `SearchFilter` | [FilterTemplate](FilterTemplate.md)[] | yes |  |
| `Tasks` | [Task](Task.md)[] | yes |  |
| `CreatedTasks` | [Task](Task.md)[] | yes |  |
| `ProcessedTasks` | [Task](Task.md)[] | yes |  |
| `GroupMembersCostObjectiveItems` | [GroupMemberCostObjectiveItem](GroupMemberCostObjectiveItem.md)[] | yes |  |
| `WorkflowTemplateItems` | [WorkflowTemplateItem](WorkflowTemplateItem.md)[] | yes |  |
| `PurchaseOrders` | [PurchaseOrders](PurchaseOrders.md)[] | yes |  |
| `PurchaseOrderTasks` | [PurchaseOrderTask](PurchaseOrderTask.md)[] | yes |  |
| `SubstitutesToSubstitute` | [Substitute](Substitute.md)[] | yes |  |
| `PurchaseOrderHistory` | [PurchaseOrderHistory](PurchaseOrderHistory.md)[] | yes |  |

Used by:

- [FilterTemplate](FilterTemplate.md).GroupMember
- [GroupMemberCostObjectiveItem](GroupMemberCostObjectiveItem.md).GroupMember
- [History](History.md).GroupMember
- [MemberRole](MemberRole.md).GroupMember
- [PurchaseOrderHistory](PurchaseOrderHistory.md).GroupMember
- [PurchaseOrderTask](PurchaseOrderTask.md).GroupMember
- [PurchaseOrders](PurchaseOrders.md).CreatedBy
- [SalesInvoiceHistory](SalesInvoiceHistory.md).GroupMember
- [Substitute](Substitute.md).GroupMember
- [Substitute](Substitute.md).ToGroupMember
- [Task](Task.md).CreatedByObj
- [Task](Task.md).GroupMember
- [Task](Task.md).ProcessedByObj
- [WorkflowTemplateItem](WorkflowTemplateItem.md).GroupMember

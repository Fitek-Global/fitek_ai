# InvoiceConfirmResultDTO

| Property | Type | Nullable | Notes |
|---|---|---|---|
| `InvoiceId` | int32 | no |  |
| `InvoiceNumber` | string | yes |  |
| `Outcome` | enum [InvoiceConfirmOutcome](InvoiceConfirmOutcome.md) | no |  |
| `ValidationIssues` | [ConfirmValidationIssueDTO](ConfirmValidationIssueDTO.md)[] | yes |  |
| `ApproveErrorMessage` | string | yes |  |

Used by:

- [BulkConfirmInvoicesResultDTO](BulkConfirmInvoicesResultDTO.md).Results

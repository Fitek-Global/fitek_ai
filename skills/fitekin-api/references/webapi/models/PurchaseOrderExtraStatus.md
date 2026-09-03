# PurchaseOrderExtraStatus

Enum (string). JSON bodies use the member name; search restrictions and numeric query parameters use the number.

- `AwaitingFulfillment` = 0
- `Fulfilled` = 100
- `PartiallyFulfilled` = 200
- `Canceled` = 300
- `OverFulfilled` = 400
- `ImpossibleToCalculate` = 500

Used by:

- [PurchaseOrderExtraStatusDto](PurchaseOrderExtraStatusDto.md).OrderExtraStatus
- [PurchaseOrderWithoutRowsDto](PurchaseOrderWithoutRowsDto.md).OrderExtraStatus
- [PurchaseOrdersDTO](PurchaseOrdersDTO.md).OrderExtraStatus
- [PurchaseOrdersListMinDTO](PurchaseOrdersListMinDTO.md).OrderExtraStatus
- [PurchaseOrders](PurchaseOrders.md).OrderExtraStatus

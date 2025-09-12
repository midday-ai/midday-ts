# UpdateInvoiceRequestBody

Schema for updating an invoice

## Example Usage

```typescript
import { UpdateInvoiceRequestBody } from "@midday-ai/sdk/models/operations";

let value: UpdateInvoiceRequestBody = {
  status: "paid",
  paidAt: new Date("2024-06-15T12:00:00.000Z"),
  internalNote: "Payment received via bank transfer",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `status`                                                                                       | [operations.UpdateInvoiceStatusRequest](../../models/operations/updateinvoicestatusrequest.md) | :heavy_minus_sign:                                                                             | New status for the invoice                                                                     | paid                                                                                           |
| `paidAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | Timestamp when the invoice was paid (ISO 8601)                                                 | 2024-06-15T12:00:00.000Z                                                                       |
| `internalNote`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Internal note for the invoice                                                                  | Payment received via bank transfer                                                             |
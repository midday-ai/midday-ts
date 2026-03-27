# UpdateInvoiceRequest

## Example Usage

```typescript
import { UpdateInvoiceRequest } from "@midday-ai/sdk/models/operations";

let value: UpdateInvoiceRequest = {
  id: "<id>",
  requestBody: {
    status: "paid",
    paidAt: new Date("2024-06-15T12:00:00.000Z"),
    internalNote: "Payment received via bank transfer",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.UpdateInvoiceRequestBody](../../models/operations/updateinvoicerequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
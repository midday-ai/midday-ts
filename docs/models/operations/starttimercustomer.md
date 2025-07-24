# StartTimerCustomer

Customer information associated with the project

## Example Usage

```typescript
import { StartTimerCustomer } from "@midday-ai/sdk/models/operations";

let value: StartTimerCustomer = {
  id: "customer-1234",
  name: "Acme Corporation",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Unique identifier of the customer    | customer-1234                        |
| `name`                               | *string*                             | :heavy_check_mark:                   | Name of the customer or organization | Acme Corporation                     |
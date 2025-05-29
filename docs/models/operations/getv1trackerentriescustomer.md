# GetV1TrackerEntriesCustomer

Customer information associated with the project

## Example Usage

```typescript
import { GetV1TrackerEntriesCustomer } from "@midday-ai/sdk/models/operations";

let value: GetV1TrackerEntriesCustomer = {
  id: "customer-1234",
  name: "Acme Corporation",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Unique identifier of the customer    | customer-1234                        |
| `name`                               | *string*                             | :heavy_check_mark:                   | Name of the customer or organization | Acme Corporation                     |
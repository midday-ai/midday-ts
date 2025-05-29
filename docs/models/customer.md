# Customer

Customer information associated with the project

## Example Usage

```typescript
import { Customer } from "@midday/sdk";

let value: Customer = {
  id: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
  name: "Acme Corporation",
  website: "https://acme.com",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Unique identifier of the customer    | a1b2c3d4-e5f6-7890-abcd-1234567890ef |
| `name`                               | *string*                             | :heavy_check_mark:                   | Name of the customer or organization | Acme Corporation                     |
| `website`                            | *string*                             | :heavy_check_mark:                   | Website URL of the customer          | https://acme.com                     |
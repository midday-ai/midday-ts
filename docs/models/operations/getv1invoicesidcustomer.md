# GetV1InvoicesIdCustomer

Customer details

## Example Usage

```typescript
import { GetV1InvoicesIdCustomer } from "@midday/sdk/models/operations";

let value: GetV1InvoicesIdCustomer = {
  id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  name: "Acme Corporation",
  website: "https://acme.com",
  email: "info@acme.com",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Unique identifier for the customer   | a1b2c3d4-e5f6-7890-abcd-ef1234567890 |
| `name`                               | *string*                             | :heavy_check_mark:                   | Name of the customer                 | Acme Corporation                     |
| `website`                            | *string*                             | :heavy_check_mark:                   | Website URL of the customer          | https://acme.com                     |
| `email`                              | *string*                             | :heavy_check_mark:                   | Email address of the customer        | info@acme.com                        |
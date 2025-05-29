# GetInboxItemByIdTransaction

Matched transaction for this inbox item, if any

## Example Usage

```typescript
import { GetInboxItemByIdTransaction } from "@midday-ai/sdk/models/operations";

let value: GetInboxItemByIdTransaction = {
  id: "a1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
  amount: 123.45,
  currency: "USD",
  name: "Acme Corp",
  date: "2024-05-01",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Transaction ID (UUID)                | a1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4 |
| `amount`                             | *number*                             | :heavy_check_mark:                   | Transaction amount                   | 123.45                               |
| `currency`                           | *string*                             | :heavy_check_mark:                   | Transaction currency (ISO 4217)      | USD                                  |
| `name`                               | *string*                             | :heavy_check_mark:                   | Transaction name or payee            | Acme Corp                            |
| `date`                               | *string*                             | :heavy_check_mark:                   | Transaction date (ISO 8601)          | 2024-05-01                           |
# Connection

Bank connection information associated with the account

## Example Usage

```typescript
import { Connection } from "@midday/sdk";

let value: Connection = {
  id: "a43dc3a5-6925-4d91-ac9c-4c1a34bdb388",
  name: "Chase Bank",
  logoUrl: "https://cdn.midday.ai/logos/chase-bank.png",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | Unique identifier of the bank connection   | a43dc3a5-6925-4d91-ac9c-4c1a34bdb388       |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | Name of the bank institution               | Chase Bank                                 |
| `logoUrl`                                  | *string*                                   | :heavy_check_mark:                         | URL to the bank institution's logo image   | https://cdn.midday.ai/logos/chase-bank.png |
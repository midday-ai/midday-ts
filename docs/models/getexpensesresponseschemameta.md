# GetExpensesResponseSchemaMeta

## Example Usage

```typescript
import { GetExpensesResponseSchemaMeta } from "@midday-ai/sdk/models";

let value: GetExpensesResponseSchemaMeta = {
  type: "expense",
  currency: "SEK",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `type`                   | *string*                 | :heavy_check_mark:       | Type of metric           | expense                  |
| `currency`               | *string*                 | :heavy_check_mark:       | Currency code (ISO 4217) | SEK                      |
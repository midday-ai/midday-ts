# GetSpendingMetricsRequest

## Example Usage

```typescript
import { GetSpendingMetricsRequest } from "@midday/sdk/models/operations";

let value: GetSpendingMetricsRequest = {
  from: "2023-01-01",
  to: "2023-12-31",
  currency: "USD",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `from`             | *string*           | :heavy_check_mark: | N/A                | 2023-01-01         |
| `to`               | *string*           | :heavy_check_mark: | N/A                | 2023-12-31         |
| `currency`         | *string*           | :heavy_minus_sign: | N/A                | USD                |
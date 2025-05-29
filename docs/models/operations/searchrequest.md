# SearchRequest

## Example Usage

```typescript
import { SearchRequest } from "@midday-ai/sdk/models/operations";

let value: SearchRequest = {
  searchTerm: "Acme",
  language: "en",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `searchTerm`         | *string*             | :heavy_minus_sign:   | N/A                  | Acme                 |
| `language`           | *string*             | :heavy_minus_sign:   | N/A                  | en                   |
| `limit`              | *number*             | :heavy_minus_sign:   | N/A                  | 30                   |
| `itemsPerTableLimit` | *number*             | :heavy_minus_sign:   | N/A                  | 5                    |
| `relevanceThreshold` | *number*             | :heavy_minus_sign:   | N/A                  | 0.01                 |
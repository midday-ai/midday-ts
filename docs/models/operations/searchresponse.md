# SearchResponse

## Example Usage

```typescript
import { SearchResponse } from "@midday/sdk/models/operations";

let value: SearchResponse = {
  id: "b3b7e6e2-8c2a-4e2a-9b1a-2e4b5c6d7f8a",
  type: "invoice",
  relevance: 0.92,
  createdAt: "2024-06-01T00:00:00.000Z",
  data: {
    "invoiceNumber": "INV-2024-001",
    "customerName": "Acme Corporation",
    "amount": 1500.75,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for the search result item.                                              | b3b7e6e2-8c2a-4e2a-9b1a-2e4b5c6d7f8a                                                       |
| `type`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Type of the entity returned (e.g., invoice, customer, transaction).                        | invoice                                                                                    |
| `relevance`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Relevance score for the search result.                                                     | 0.92                                                                                       |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | ISO 8601 timestamp when the entity was created.                                            | 2024-06-01T00:00:00.000Z                                                                   |
| `data`                                                                                     | *any*                                                                                      | :heavy_minus_sign:                                                                         | Additional data for the search result, structure depends on the type.                      | {<br/>"invoiceNumber": "INV-2024-001",<br/>"customerName": "Acme Corporation",<br/>"amount": 1500.75<br/>} |
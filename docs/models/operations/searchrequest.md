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

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `searchTerm`                                              | *string*                                                  | :heavy_minus_sign:                                        | The term to search for across all data sources.           | Acme                                                      |
| `language`                                                | *string*                                                  | :heavy_minus_sign:                                        | Language code to use for search relevance and results.    | en                                                        |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | Maximum number of results to return.                      | 30                                                        |
| `itemsPerTableLimit`                                      | *number*                                                  | :heavy_minus_sign:                                        | Maximum number of results to return per table/entity.     | 5                                                         |
| `relevanceThreshold`                                      | *number*                                                  | :heavy_minus_sign:                                        | Minimum relevance score threshold for including a result. | 0.01                                                      |
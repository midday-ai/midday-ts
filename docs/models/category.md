# Category

Category information assigned to the transaction for organization

## Example Usage

```typescript
import { Category } from "@midday-ai/sdk";

let value: Category = {
  id: "office-supplies",
  name: "Office Supplies",
  color: "#FF5733",
  taxRate: 10,
  taxType: "VAT",
  slug: "office-supplies",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | Unique identifier of the category                          | office-supplies                                            |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Display name of the category                               | Office Supplies                                            |
| `color`                                                    | *string*                                                   | :heavy_check_mark:                                         | Hex color code associated with the category for UI display | #FF5733                                                    |
| `taxRate`                                                  | *number*                                                   | :heavy_check_mark:                                         | Tax rate of the category                                   | 10                                                         |
| `taxType`                                                  | *string*                                                   | :heavy_check_mark:                                         | Tax type of the category                                   | VAT                                                        |
| `slug`                                                     | *string*                                                   | :heavy_check_mark:                                         | URL-friendly slug of the category                          | office-supplies                                            |
# SpendingResultArray

## Example Usage

```typescript
import { SpendingResultArray } from "@midday-ai/sdk/models";

let value: SpendingResultArray = {
  name: "Taxes",
  slug: "taxes",
  amount: -1256445,
  currency: "SEK",
  color: "#8492A6",
  percentage: 44,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | Spending category name                         | Taxes                                          |
| `slug`                                         | *string*                                       | :heavy_check_mark:                             | Spending category slug                         | taxes                                          |
| `amount`                                       | *number*                                       | :heavy_check_mark:                             | Amount spent in this category                  | -1256445                                       |
| `currency`                                     | *string*                                       | :heavy_check_mark:                             | Currency code (ISO 4217)                       | SEK                                            |
| `color`                                        | *string*                                       | :heavy_check_mark:                             | Color code for the category                    | #8492A6                                        |
| `percentage`                                   | *number*                                       | :heavy_check_mark:                             | Percentage of total spending for this category | 44                                             |
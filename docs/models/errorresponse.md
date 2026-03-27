# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse } from "@midday-ai/sdk/models";

let value: ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `error`               | *string*              | :heavy_check_mark:    | Error message         | Internal Server Error |
| `code`                | *number*              | :heavy_minus_sign:    | HTTP status code      | 500                   |
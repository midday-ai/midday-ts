# ExportSettings

Export settings for transactions

## Example Usage

```typescript
import { ExportSettings } from "@midday-ai/sdk/models/operations";

let value: ExportSettings = {
  csvDelimiter: "<value>",
  includeCSV: true,
  includeXLSX: true,
  sendEmail: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `csvDelimiter`     | *string*           | :heavy_check_mark: | N/A                |
| `includeCSV`       | *boolean*          | :heavy_check_mark: | N/A                |
| `includeXLSX`      | *boolean*          | :heavy_check_mark: | N/A                |
| `sendEmail`        | *boolean*          | :heavy_check_mark: | N/A                |
| `sendCopyToMe`     | *boolean*          | :heavy_minus_sign: | N/A                |
| `accountantEmail`  | *string*           | :heavy_minus_sign: | N/A                |
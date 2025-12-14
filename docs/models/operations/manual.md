# Manual

Filter transactions based on whether they were manually imported. 'include' returns only manual transactions, 'exclude' returns only non-manual transactions

## Example Usage

```typescript
import { Manual } from "@midday-ai/sdk/models/operations";

let value: Manual = "include";
```

## Values

```typescript
"include" | "exclude"
```
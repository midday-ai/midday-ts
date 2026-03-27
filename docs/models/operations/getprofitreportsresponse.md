# GetProfitReportsResponse


## Supported Types

### `models.GetProfitResponseSchema`

```typescript
const value: models.GetProfitResponseSchema = {
  summary: {
    currentTotal: 10000,
    prevTotal: 8000,
    currency: "USD",
  },
  meta: {
    type: "profit",
    currency: "USD",
  },
  result: [],
};
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```


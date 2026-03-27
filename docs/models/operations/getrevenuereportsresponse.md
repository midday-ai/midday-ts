# GetRevenueReportsResponse


## Supported Types

### `models.GetRevenueResponseSchema`

```typescript
const value: models.GetRevenueResponseSchema = {
  summary: {
    currentTotal: 10000,
    prevTotal: 8000,
    currency: "USD",
  },
  meta: {
    type: "revenue",
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


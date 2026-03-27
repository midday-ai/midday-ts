# GetInvoiceSummaryResponse


## Supported Types

### `operations.GetInvoiceSummaryResponseBody`

```typescript
const value: operations.GetInvoiceSummaryResponseBody = {
  currency: "USD",
  totalAmount: 224171.25,
  invoiceCount: 15,
  breakdown: [
    {
      currency: "EUR",
      originalAmount: 15000.5,
      convertedAmount: 16250.75,
      count: 5,
    },
    {
      currency: "GBP",
      originalAmount: 8000.25,
      convertedAmount: 9200.5,
      count: 3,
    },
  ],
};
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```


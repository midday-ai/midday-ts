# ListTeamsResponse


## Supported Types

### `operations.ListTeamsResponseBody`

```typescript
const value: operations.ListTeamsResponseBody = {
  data: [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      name: "Acme Corporation",
      logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
      plan: "pro",
      email: "team@acme.com",
      baseCurrency: "USD",
      countryCode: "US",
      fiscalYearStartMonth: 1,
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


# GetCurrentUserResponse


## Supported Types

### `operations.GetCurrentUserResponseBody`

```typescript
const value: operations.GetCurrentUserResponseBody = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  fullName: "Jane Doe",
  email: "jane.doe@acme.com",
  avatarUrl: "https://cdn.midday.ai/avatars/jane-doe.jpg",
  locale: "en-US",
  weekStartsOnMonday: true,
  timezone: "America/New_York",
  timezoneAutoSync: true,
  timeFormat: 24,
  dateFormat: "yyyy-MM-dd",
  fileKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiIxMjM0NTY3OC05YWJjLWRlZmctMTIzNC01Njc4OTBhYmNkZWYifQ.signature",
  team: {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Acme Corporation",
    logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
    plan: "pro",
  },
};
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```


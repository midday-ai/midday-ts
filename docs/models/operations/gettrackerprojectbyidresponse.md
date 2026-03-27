# GetTrackerProjectByIdResponse


## Supported Types

### `models.TrackerProjectResponse`

```typescript
const value: models.TrackerProjectResponse = {
  id: "b7e6c8e2-1f2a-4c3b-9e2d-1a2b3c4d5e6f",
  name: "Website Redesign",
  description:
    "Complete redesign of the company website with modern UI/UX and improved performance",
  status: "in_progress",
  estimate: 120,
  currency: "USD",
  createdAt: "2024-05-01T12:00:00.000Z",
  totalDuration: 43200,
  totalAmount: 3600,
  customer: {
    id: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
    name: "Acme Corporation",
    website: "https://acme.com",
  },
  tags: [],
  users: [],
};
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```


# DeleteCustomerResponse


## Supported Types

### `operations.DeleteCustomerResponseBody`

```typescript
const value: operations.DeleteCustomerResponseBody = {
  id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  name: "Acme Corporation",
  email: "contact@acme.com",
  billingEmail: "finance@acme.com, accounting@acme.com",
  phone: "+1-555-123-4567",
  website: "https://acme.com",
  createdAt: "2024-05-01T12:34:56.789Z",
  country: "United States",
  addressLine1: "123 Main Street",
  addressLine2: "Suite 400",
  city: "San Francisco",
  state: "California",
  zip: "94105",
  note: "Preferred contact method is email. Large enterprise client.",
  vatNumber: "US123456789",
  countryCode: "US",
  token: "cus_abc123xyz789",
  contact: "John Smith",
  invoiceCount: 12,
  projectCount: 3,
  totalRevenue: 15000.5,
  outstandingAmount: 2500,
  lastInvoiceDate: "2024-04-15",
  invoiceCurrency: "USD",
  tags: [
    {
      id: "e7a9c1a2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
      name: "VIP",
    },
    {
      id: "f1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
      name: "Enterprise",
    },
  ],
  description: "A cloud-based project management platform for remote teams.",
  industry: "Software",
  companyType: "SaaS",
  employeeCount: "51-200",
  foundedYear: 2018,
  estimatedRevenue: "$10M-$50M",
  fundingStage: "Series A",
  totalFunding: "$15M",
  headquartersLocation: "San Francisco, CA",
  timezone: "America/Los_Angeles",
  linkedinUrl: "https://linkedin.com/company/acme",
  twitterUrl: "https://twitter.com/acme",
  instagramUrl: "https://instagram.com/acme",
  facebookUrl: "https://facebook.com/acme",
  logoUrl: "https://example.com/logo.png",
  ceoName: "Jane Smith",
  financeContact: "John Doe",
  financeContactEmail: "finance@acme.com",
  primaryLanguage: "en",
  fiscalYearEnd: "December",
  enrichmentStatus: "completed",
  enrichedAt: "2024-05-01T12:34:56.789Z",
};
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```


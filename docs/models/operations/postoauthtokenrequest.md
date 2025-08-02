# PostOAuthTokenRequest


## Supported Types

### `operations.AuthorizationCode`

```typescript
const value: operations.AuthorizationCode = {
  grantType: "authorization_code",
  code: "mid_authorization_code_abcdef123456789",
  redirectUri: "https://myapp.com/callback",
  clientId: "mid_client_abcdef123456789",
  clientSecret: "mid_secret_abcdef123456789",
  codeVerifier: "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
};
```

### `operations.RefreshToken`

```typescript
const value: operations.RefreshToken = {
  grantType: "refresh_token",
  refreshToken: "mid_rt_abcdef123456789",
  clientId: "mid_client_abcdef123456789",
  clientSecret: "mid_secret_abcdef123456789",
  scope: "transactions.read invoices.read",
};
```


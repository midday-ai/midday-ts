<!-- Start SDK Example Usage [usage] -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.getOAuthAuthorization({
    responseType: "code",
    clientId: "mid_client_abcdef123456789",
    redirectUri: "https://myapp.com/callback",
    scope: "transactions.read invoices.read",
    state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
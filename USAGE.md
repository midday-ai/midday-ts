<!-- Start SDK Example Usage [usage] -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.postOAuthRegister({
    clientName: "ChatGPT",
    redirectUris: [
      "https://chatgpt.com/connector/oauth/callback",
    ],
    grantTypes: [
      "authorization_code",
      "refresh_token",
    ],
    scope: "transactions.read invoices.read",
    logoUri: "https://example.com/logo.png",
    clientUri: "https://example.com",
    responseTypes: [
      "code",
    ],
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
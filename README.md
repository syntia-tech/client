# Syntia Client

Node.js client library for the Syntia API. Provides SDK and CLI for generating high-fidelity webhook data for development and testing.

## Installation

```bash
npm install syntia
# or
npm install @syntia/client
```

Both packages are identical. Use whichever you prefer.

## SDK Usage

```javascript
const SyntiaClient = require('syntia')
// or: const SyntiaClient = require('@syntia/client');

const client = new SyntiaClient('YOUR_API_KEY')

async function generateWebhook() {
  try {
    const webhook = await client.generateWebhook({
      type: 'order_created',
      params: { orderId: '12345' },
    })
    console.log(webhook)
  } catch (error) {
    console.error('Error:', error)
  }
}

generateWebhook()
```

## CLI Usage

```bash
syntia generate --type order_created --params '{"orderId": "12345"}'
```

## API Reference

### `new SyntiaClient(apiKey[, baseURL])`

Creates a new Syntia client instance.

- `apiKey` (string): Your Syntia API key.
- `baseURL` (string, optional): API base URL. Default: 'https://syntia.tech/api/v1'.

### `client.generateWebhook(options)`

Generates a webhook.

- `options` (object):
  - `type` (string): Webhook type (e.g., 'order_created').
  - `params` (object, optional): Custom parameters.

Returns a Promise resolving to the generated webhook object.

## Error Handling

Wrap API calls in try-catch blocks or use `.catch()` with promises to handle errors.

## TypeScript Support

```typescript
import { SyntiaClient, WebhookOptions, Webhook } from 'syntia'
// or
import { SyntiaClient, WebhookOptions, Webhook } from '@syntia/client'
```

## Documentation

For detailed documentation, visit [https://docs.syntia.tech](https://docs.syntia.tech)

## Support

For issues or questions, contact support@syntia.tech or visit our [support portal](https://support.syntia.tech).

---

© 2024 Syntia Ltd. All rights reserved.

# @tetcoin/x-fetch

A cross-environment fetch.

Install it via `yarn add @tetcoin/x-fetch`

```js
import { fetch } from '@tetcoin/x-fetch';

...
const response = await fetch('https://example.com/something.json');
const json = await response.json();
```

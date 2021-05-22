# @tetcoin/x-global

A cross-environment global object. checks for global > self > window > this.

Install it via `yarn add @tetcoin/x-global`

```js
import { xglobal } from '@tetcoin/x-global';

console.log(typeof xglobal.TextEncoder);
```

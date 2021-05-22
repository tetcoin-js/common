// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { u8aToHex } from '@tetcoin/util';

import { randomAsU8a } from './asU8a';

/**
 * @name randomAsHex
 * @summary Creates a hex string filled with random bytes.
 * @description
 * Returns a hex string with the specified (optional) length filled with random bytes.
 * @example
 * <BR>
 *
 * ```javascript
 * import { randomAsHex } from '@tetcoin/util-crypto';
 *
 * randomAsHex(); // => 0x...
 * ```
 */
export function randomAsHex (length = 32): string {
  return u8aToHex(
    randomAsU8a(length)
  );
}

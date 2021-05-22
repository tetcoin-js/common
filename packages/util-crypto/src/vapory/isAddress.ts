// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isHex } from '@tetcoin/util';

import { isVaporyChecksum } from './isChecksum';

export function isVaporyAddress (address?: string): boolean {
  if (!address || address.length !== 42 || !isHex(address)) {
    return false;
  }

  if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  }

  return isVaporyChecksum(address);
}

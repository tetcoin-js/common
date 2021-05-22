// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isVaporyChecksum } from './';

const ADDRESS = '0x00a329c0648769A73afAc7F9381E08FB43dBEA72';

describe('isVaporyChecksum', () => {
  it('returns false on invalid address', () => {
    expect(isVaporyChecksum('0x00a329c0648769')).toBe(false);
  });

  it('returns false on non-checksum address', () => {
    expect(isVaporyChecksum('0x1234567890abcdeedcba1234567890abcdeedcba')).toBe(false);
  });

  it('returns false when fully lowercase', () => {
    expect(isVaporyChecksum(ADDRESS.toLowerCase())).toBe(false);
  });

  it('returns false when fully uppercase', () => {
    expect(isVaporyChecksum(ADDRESS.toUpperCase().replace('0X', '0x'))).toBe(false);
  });

  it('returns true on a checksummed address', () => {
    expect(isVaporyChecksum(ADDRESS)).toBe(true);
  });
});

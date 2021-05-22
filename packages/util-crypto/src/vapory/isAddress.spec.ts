// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isVaporyAddress } from './';

const ADDRESS = '0x00a329c0648769A73afAc7F9381E08FB43dBEA72';

describe('isVaporyAddress', () => {
  it('returns true when fully lowercase', () => {
    expect(isVaporyAddress(ADDRESS.toLowerCase())).toBe(true);
  });

  it('returns true when fully uppercase', () => {
    expect(isVaporyAddress(ADDRESS.toUpperCase().replace('0X', '0x'))).toBe(true);
  });

  it('returns true when checksummed', () => {
    expect(isVaporyAddress(ADDRESS)).toBe(true);
  });

  it('returns false when empty address', () => {
    expect(isVaporyAddress()).toBe(false);
  });

  it('returns false when invalid address', () => {
    expect(isVaporyAddress('0xinvalid')).toBe(false);
  });

  it('returns false when invalid address of correct length', () => {
    expect(isVaporyAddress('0xinvalid000123456789012345678901234567890')).toBe(false);
  });
});

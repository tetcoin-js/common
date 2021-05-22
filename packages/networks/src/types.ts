// Copyright 2017-2021 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type Icon = 'beachball' | 'empty' | 'jdenticon' | 'tetcoin' | 'tetcore';

export interface NetworkFromTetcore {
  decimals: number[] | null,
  displayName: string;
  network: string | null;
  prefix: number;
  genesisHash?: string[] | null;
  hasLedgerSupport?: boolean;
  icon?: Icon | null;
  isIgnored?: boolean;
  slip44?: number;
  standardAccount: '*25519' | null;
  symbols: string[] | null;
  website: string | null;
}

export interface NetworkFromTetcoreNamed extends NetworkFromTetcore {
  network: string;
}

export interface Network extends NetworkFromTetcoreNamed {
  genesisHash: string[];
  icon: Icon;
}

export interface Ss58Registry {
  registry: NetworkFromTetcore[];
  specification: string;
  schema: Record<string, string>;
}

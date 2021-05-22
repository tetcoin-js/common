// Copyright 2017-2021 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0

export const xglobal = typeof global !== 'undefined'
  ? global
  : typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
      ? window
      : this as unknown as (Window & typeof globalThis);

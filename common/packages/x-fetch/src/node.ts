// Copyright 2017-2021 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0

import nodeFetch from 'node-fetch';

import { xglobal } from '@tetcoin/x-global';

export const fetch = typeof xglobal.fetch === 'undefined'
  ? nodeFetch as unknown as typeof global.fetch
  : xglobal.fetch;

// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { sr25519DerivePublicSoft } from '@tetcoin/wasm-crypto';

export function schnorrkelDerivePublic (publicKey: Uint8Array, chainCode: Uint8Array): Uint8Array {
  return sr25519DerivePublicSoft(publicKey, chainCode);
}

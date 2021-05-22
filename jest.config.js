// Copyright 2017-2020 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const config = require('@tetcoin/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@tetcoin/keyring(.*)$': '<rootDir>/packages/keyring/src/$1',
    '@tetcoin/util-(crypto)(.*)$': '<rootDir>/packages/util-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@tetcoin/util(.*)$': '<rootDir>/packages/util/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/keyring/build',
    '<rootDir>/packages/util/build',
    '<rootDir>/packages/util-crypto/build'
  ],
  resolver: './jest.resolver.js'
});

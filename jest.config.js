// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@tetcoin/dev/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@tetcoin/hw-ledger-transports(.*)$': '<rootDir>/packages/hw-ledger-transports/src/node',
    // eslint-disable-next-line sort-keys
    '@tetcoin/hw-ledger(.*)$': '<rootDir>/packages/hw-ledger/src/$1',
    '@tetcoin/keyring(.*)$': '<rootDir>/packages/keyring/src/$1',
    '@tetcoin/networks(.*)$': '<rootDir>/packages/networks/src/$1',
    '@tetcoin/util-(crypto)(.*)$': '<rootDir>/packages/util-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@tetcoin/util(.*)$': '<rootDir>/packages/util/src/$1',
    '@tetcoin/x-(fetch|randomvalues|textdecoder|textencoder|ws)(.*)$': '<rootDir>/packages/x-$1/src/node',
    '@tetcoin/x-global(.*)$': '<rootDir>/packages/x-global/src/$1',
    '@tetcoin/x-rxjs(.*)$': '<rootDir>/packages/x-rxjs/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/hw-ledger/build',
    '<rootDir>/packages/hw-ledger-transports/build',
    '<rootDir>/packages/keyring/build',
    '<rootDir>/packages/networks/build',
    '<rootDir>/packages/util/build',
    '<rootDir>/packages/util-crypto/build',
    '<rootDir>/packages/x-fetch/build',
    '<rootDir>/packages/x-global/build',
    '<rootDir>/packages/x-randomvalues/build',
    '<rootDir>/packages/x-rxjs/build',
    '<rootDir>/packages/x-textdecoder/build',
    '<rootDir>/packages/x-textencoder/build',
    '<rootDir>/packages/x-ws/build'
  ],
  resolver: '@tetcoin/dev/config/jest-resolver.cjs'
});

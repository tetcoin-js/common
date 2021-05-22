---
title: SS58 registry is outdated
labels: ['ci', '@networks']
---

cc @tetcoinjs/notifications

Discrepancies detected between https://github.com/tetcoin/tetcore/blob/master/ss58-registry.json and https://github.com/tetcoinjs/common/blob/master/packages/networks/src/index.ts

Check the nightly cron output or run `yarn networks:crosscheck` locally. The output as found from the test includes:

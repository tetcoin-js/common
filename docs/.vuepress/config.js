module.exports = {
  base: '/common/',
  title: 'tetcoin-js/common',
  description: 'Common utilities and libraries that are in use accross all @tetcoin projects',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Tetcoin/Tetcore Apps', link: 'https://js.tetcoin.org/apps/' },
      { text: 'Project family', link: 'https://js.tetcoin.org/' },
      {
        text: 'Documentation',
        items: [
          { text: 'API Reference', link: 'https://js.tetcoin.org/api/' },
          { text: 'Utility Reference (this)', link: 'https://js.tetcoin.org/common/' },
          { text: 'UI Libs Reference', link: 'https://js.tetcoin.org/ui/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/tetcoin-js/common' }
    ],
    search: false,
    sidebar: [
      {
        title: 'Examples (keyring)',
        path: '/examples/keyring/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/examples/keyring/01_create_account/', 'Create account'],
          ['/examples/keyring/02_load_accounts/', 'Load Accounts']
        ]
      },
      ['/util/', '@tetcoin/util'],
      ['/util-crypto/', '@tetcoin/util-crypto'],
      ['/keyring/', '@tetcoin/keyring'],
      '/CONTRIBUTING.md'
    ]
  }
};

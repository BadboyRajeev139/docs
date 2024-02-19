/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
    web3apiEvmSidebar: [
      {
        type: "doc",
        id: "web3-data-api/evm/overview",
      },
      {
        type: "category",
        label: "Getting Started",
        link: {
          type: "doc",
          id: "web3-data-api/evm/getting-started",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/evm/getting-started", // Adjust the path according to your directory structure
          },
        ],
      },

      {
        type: "category",
        label: "API Reference",
        link: {
          type: "generated-index",
          slug: "web3-data-api/evm/api-reference",
          },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/evm/reference", // Adjust the path according to your directory structure
          },
        ],
      },

      {
        type: "category",
        label: "Developer Tools",
        link: {
          type: "doc",
          id: "web3-data-api/evm/developer-tools",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/evm/developer-tools", // Adjust the path according to your directory structure
          },
        ],
      },

      {
        type: "category",
        label: "Integrations",
        link: {
          type: "doc",
          id: "web3-data-api/evm/integrations",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/evm/integrations", // Adjust the path according to your directory structure
          },
        ],
      },

      {
    type: "category",
    label: "Tutorials",
    items: [
      {
        type: "category",
        label: "Wallet",
        link: {
          type: "doc",
          id: "web3-data-api/evm/wallet-api",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/evm/wallet-api", // Adjust the path according to your directory structure
          },
        ],
      },
      {
        type: "category",
        label: "NFT",
        link: {
          type: "doc",
          id: "web3-data-api/evm/nft-api",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/evm/nft-api", // Adjust the path according to your directory structure
          },
        ],
      },
      {
        type: "category",
        label: "Token",
        link: {
          type: "doc",
          id: "web3-data-api/evm/token-api",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/evm/token-api", // Adjust the path according to your directory structure
          },
        ],
      },
      {
        type: "category",
        label: "Blockchain",
        link: {
          type: "doc",
          id: "web3-data-api/evm/blockchain-api",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/evm/blockchain-api",
          },
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Resources & FAQs",
    link: {
      type: "generated-index",
      slug: "web3-data-api/evm/resources",
    },
    items: [
      {
        type: "autogenerated",
        dirName: "01-web3-data-api/evm/resources", // Adjust the path according to your directory structure
      },
    ],
  },
    ],

    /////////////////////////////// Aptos Sidebar

    web3apiAptosSidebar: [
      {
        type: "doc",
        id: "web3-data-api/aptos/overview",
      },
      {
        type: "category",
        label: "Getting Started",
        link: {
          type: "doc",
          id: "web3-data-api/aptos/getting-started",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/aptos/getting-started",
          },
        ],
      },
      {
        type: "category",
        label: "API Reference",
        link: {
          type: "generated-index",
          slug: "web3-data-api/aptos/api-reference",
        },
        items: [
          {
            type: "autogenerated",
            dirName: "01-web3-data-api/aptos/reference",
          },
        ],
      },
      {
        type: "category",
        label: "Tutorials",
        items: [
          {
            type: "doc",
            id: "web3-data-api/aptos/coin-api",
          },
          {
            type: "doc",
            id: "web3-data-api/aptos/nft-api",
          },
          {
            type: "doc",
            id: "web3-data-api/aptos/transactions-api",
          },
          {
            type: "doc",
            id: "web3-data-api/aptos/wallet-api",
          },
        ],
      },
    ],


  /////////////////////////////// Solana Sidebar


  web3apiSolanaSidebar: [
    {
      type: "doc",
      id: "web3-data-api/solana/overview",
    },
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "doc",
        id: "web3-data-api/solana/getting-started",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "01-web3-data-api/solana/getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        slug: "web3-data-api/solana/api-reference",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "01-web3-data-api/solana/reference",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        {
          type: "category",
          label: "Balance",
          link: {
            type: "doc",
            id: "web3-data-api/solana/balance-api",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "01-web3-data-api/solana/balance-api",
            },
          ],
        },
        {
          type: "category",
          label: "NFT",
          link: {
            type: "doc",
            id: "web3-data-api/solana/nft-api",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "01-web3-data-api/solana/nft-api",
            },
          ],
        },
        {
          type: "category",
          label: "Token",
          link: {
            type: "doc",
            id: "web3-data-api/solana/token-api",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "01-web3-data-api/solana/token-api",
            },
          ],
        },
      ],
    },
  ],

  ///////////////////////////////Streams sidebar
  streamsEvmSidebar: [
    {
      type: "autogenerated",
      dirName: "02-streams-api/evm",
    },
  ],
  streamsAptosSidebar: [
    {
      type: "autogenerated",
      dirName: "02-streams-api/aptos",
    },
  ],
  authenticationEvmSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/evm",
    },
  ],
  authenticationSolanaSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/solana",
    },
  ],
  authenticationAptosSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/aptos",
    },
  ],
  exampledappsSidebar: [
    {
      type: "autogenerated",
      dirName: "04-guides",
    },
  ],

  ///////////Market
  marketInsightsSidebar: [
      {
        type: "doc",
        id: "market-insights-api/overview",
      },
      {
        type: "category",
        label: "API Reference",
        link: {
          type: "generated-index",
          slug: "../market-insights-api/reference",
          },
        items: [
          {
            type: "autogenerated",
            dirName: "06-market-insights-api/reference", // Adjust the path according to your directory structure
          },
        ],
      },
  ],
};

module.exports = sidebars;

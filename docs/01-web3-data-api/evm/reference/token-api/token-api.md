---
title: "Token API"
sidebar_label: "Token API"
slug: "../token-api"
sidebar_class_name: "sidebar-token-api"
sidebar_position: 3
---

Select what you want to achieve:

* [Get Tokens](#get-tokens)
* [Get Price](#get-price)
* [Get Balance](#get-balance)
* [Get Transfers](#get-transfers)
* [Get Pairs & Liquidity](#get-pairs-&-liquidity)
* [Get Token Stats](#get-token-stats)

### Get Tokens

| No. | Method                                   | Description                                 | API Reference                                                                                                                     | URL                                                                       |
|-----|------------------------------------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 1   | `getWalletTokenBalances`                 | Get ERC20 token balance by wallet           | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances) | [https://deep-index.moralis.io/api/v2.2/:address/erc20](https://deep-index.moralis.io/api/v2.2/:address/erc20)                     |
| 2   | `getTokenMetadataBySymbol`              | Get ERC20 token metadata by symbols         | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata-by-symbol) | [https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols](https://deep-index.moralis.io/api/v2.2/erc20/metadata/symbols)                   |
| 3   | `getTokenMetadata`                       | Get ERC20 token metadata by contract        | [Method Documentation](/web3-data-api/evm/reference/get-token-metadata) | [https://deep-index.moralis.io/api/v2.2/erc20/metadata](https://deep-index.moralis.io/api/v2.2/erc20/metadata) |

### Get Price

| No. | Method                                   | Description                | API Reference                                                                                                       | URL                                                                       |
|-----|------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 4   | `getTokenPrice`                          | Get ERC20 token price      | [Method Documentation](/web3-data-api/evm/reference/get-token-price) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/price](https://deep-index.moralis.io/api/v2.2/erc20/:address/price)                     |
| 5   | `getMultipleTokenPrices`                 | Get multiple token prices  | [Method Documentation](/web3-data-api/evm/reference/get-multiple-token-prices) | [https://deep-index.moralis.io/api/v2.2/erc20/prices](https://deep-index.moralis.io/api/v2.2/erc20/prices)                   |
| 6   | `getTokenPairOhlc`                 | Get ohlc candle sticks of token pair  | [Method Documentation](/web3-data-api/evm/reference/get-token-pair-ohlc) | [https://deep-index.moralis.io/api/v2.2/:token0/:token1/ohlc](https://deep-index.moralis.io/api/v2.2/:token0/:token1/ohlc)                   |

### Get Balance

| No. | Method                                   | Description                                 | API Reference                                                                                                                      | URL                                                                       |
|-----|------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 7   | `getWalletTokenBalances`                 | Get ERC20 token balance by wallet           | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-balances) | [https://deep-index.moralis.io/api/v2.2/:address/erc20](https://deep-index.moralis.io/api/v2.2/:address/erc20)                     |
| 8  | `getTokenAllowance`                      | Get ERC20 token allowance                   | [Method Documentation](/web3-data-api/evm/reference/get-token-allowance) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/allowance](https://deep-index.moralis.io/api/v2.2/erc20/:address/allowance)                   |

### Get Transfers

| No. | Method                                   | Description                                 | API Reference                                                                                                                     | URL                                                                       |
|-----|------------------------------------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 9   | `getWalletTokenTransfers`                | Get ERC20 token transfers by wallet         | [Method Documentation](/web3-data-api/evm/reference/get-wallet-token-transfers) | [https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers](https://deep-index.moralis.io/api/v2.2/:address/erc20/transfers)                     |
| 10   | `getTokenTransfers`                      | Get ERC20 token transfers by contract       | [Method Documentation](/web3-data-api/evm/reference/get-token-transfers) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/transfers](https://deep-index.moralis.io/api/v2.2/erc20/:address/transfers)                   |

### Get Pairs & Liquidity

| No. | Method                                   | Description                                | API Reference                                                                                                     | URL                                                                       |
|-----|------------------------------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 11  | `getPairReserves`                        | Get DEX token pair reserves                | [Method Documentation](/web3-data-api/evm/reference/get-pair-reserves) | [https://deep-index.moralis.io/api/v2.2/:pair_address/reserves](https://deep-index.moralis.io/api/v2.2/:pair_address/reserves)                     |
| 12  | `getPairAddress`                         | Get DEX token pair address                 | [Method Documentation](/web3-data-api/evm/reference/get-pair-address) | [https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres](https://deep-index.moralis.io/api/v2.2/:token0_address/:token1_address/pairAddres)                   |

### Get Token Stats

| No. | Method             | Description            | API Reference                                                                                                 | URL                                                                       |
|-----|--------------------|------------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 13  | `getTokenStats`    | Get ERC20 token stats  | [Method Documentation](/web3-data-api/evm/reference/get-token-stats) | [https://deep-index.moralis.io/api/v2.2/erc20/:address/stats](https://deep-index.moralis.io/api/v2.2/erc20/:address/stats) |

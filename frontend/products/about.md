---
sidebar_position: 1
title: About
---

On the frontend, there are series of special but important functions that allow the Solace user interface to interact with the supported products in the defi ecosystem.

Each supported product will have two main functions:

- **getTokens**: The function that is called on first load. The token and position data of the supported product are fetched, and the return value is an array of [**Token**](/docs/dev-docs/frontend/constants/types#token-exported) objects that will be cached for app use. 
- **getBalances**: The function to get the user balances for the cached position data fetched from `getTokens()`. The fetched balances are mostly based on the contents within the user's wallet.

The methods to fetch the data for each supported products are not uniform, therefore the organization of the products code is based on the usage of [**SupportedProduct**](/docs/dev-docs/frontend/constants/types#supportedproduct-exported). Here is an example of an ideal SupportedProduct object:

    const SushiswapProduct: SupportedProduct = {
      name: ProductName.SUSHISWAP,
      positionsType: PositionType.TOKEN,
      productLink: 'https://app.sushi.com/pool',
      supportedSubProducts: {
        [1]: ['MasterChefV2'],
      },
      getTokens: {
        [1]: sushi1_GT,
        [137]: sushi137_GT,
      },
      getBalances: {
        [1]: sushi1_GB,
        [137]: sushi137_GB,
      },
    }

This example of `SushiswapProduct` shows that it has two `getToken` functions, one for chains 1 and 137, namely the Ethereum Mainnet and the Polygon Network, while it has two `getBalance` functions for those same chains. Additionally, it has 'MasterChefV2' in a string array in `supportedSubProducts` , this would indicate to the user that in addition to balances pulled from the their wallet, the user's balances in the MasterChefV2 staking pool are pulled as well. New strings should only be added in `supportedSubProducts` if they are internally supported from within the app's functionality. The more subproducts included, the more accurate the fetched balances of a user will be.
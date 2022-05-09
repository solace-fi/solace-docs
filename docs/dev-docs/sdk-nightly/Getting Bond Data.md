---
sidebar_position: 8
id: getting-bond-data
title: Getting Bond Data
---

To assist with getting bond data, we have provided a **Bond** class.

The constructor takes in two parameters:

1. (Required) The **chainId** to connect to

> Current supported chains are:
> - Ethereum mainnet (ChainID = 1)
> - Rinkeby Testnet (ChainID = 4)
> - Kovan Testnet (ChainID = 42)
> - MATIC (ChainID = 137)
> - Mumbai testnet (ChainID = 80001)
> - Aurora Mainnet (ChainID = 1313161554)
> - Aurora Testnet (ChainID = 1313161555)

2. (Optional) **providerOrSigner** is an object of three types from ethers ([**JsonRpcSigner**](https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#JsonRpcSigner), [**Provider**](https://docs.ethers.io/v5/api/providers/provider/)).

---

## **Bond methods**

### **Setup**
```js
import { Bond } from "@solace-fi/sdk-nightly"
const bond = new Bond(1) // Provide chainId parameter
```

### **getBondTellerData**

Gets data on BondTeller contracts on specified chain

```js
import { Bond, Price } from "@solace-fi/sdk-nightly"
const price = new Price()
const bond = new Bond(1)
const apiPriceMapping = await price.getCoinGeckoTokenPrices()
console.log ( await bond.getBondTellerData(apiPriceMapping) )
/*
   [
      {
        tellerData: {
          teller: {
            contract: [Contract],
            type: "erc20" | "matic" | "eth"
          },
          bondPrice: [BigNumber],
          usdBondPrice: 0.04354409314629305,
          vestingTermInSeconds: 604800,
          capacity: [BigNumber],
          maxPayout: [BigNumber],
          bondRoi: -8.572142663615487
        },
        principalData: { principal: [Contract], principalProps: {
          symbol: string,
          decimals: number,
          name: string,
          address: string,
        } }
      },
      ...
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiPriceMapping` | `{ [string]: number }` |

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.

<br/>

### **getUserBondData**

For a specified bond teller address, fetches a specified address' bonds

```js
import { Bond } from "@solace-fi/sdk-nightly"
const bond = new Bond(1)
console.log ( await bond.getUserBondData("0x501ACe677634Fd09A876E88126076933b686967a", "0xe7aba95073a85abd4ce82487c7fdfa860024b6cc") )
/*
    [
      {
        id: BigNumber { _hex: '0x02', _isBigNumber: true },
        payoutAmount: BigNumber { _hex: '0x226aa36727f56d1a', _isBigNumber: true },
        payoutAlreadyClaimed: BigNumber { _hex: '0x00', _isBigNumber: true },
        principalPaid: BigNumber { _hex: '0x0186a0', _isBigNumber: true },
        vestingStart: 1649659327,
        localVestingTerm: 604800
      }
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `bondTellerContractAddress` | `string` |
| `account` | `string` |

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.
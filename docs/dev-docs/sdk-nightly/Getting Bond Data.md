---
sidebar_position: 8
id: getting-bond-data
title: Getting Bond Data
---

To assist with getting bond data, we have provided a **Bond** class

---

## **Bond methods**

### **Setup**
```js
import { Bond } from "@solace-fi/sdk-nightly"
const bond = new Bond(1) // Provide chainId parameter
```

Current supported chains are:
- Ethereum mainnet (ChainID = 1)
- Rinkeby Testnet (ChainID = 4)
- MATIC (ChainID = 137)
- Mumbai testnet (ChainID = 80001)
- Aurora (ChainID = 1313161554)
- Aurora testnet (ChainID = 1313161555)

<br/>

### **getBondTellerData**

Gets data on BondTeller contracts on specified chain

```js
import { Bond, Price } from "@solace-fi/sdk-nightly"
const price = new Price()
const bond = new Bond(1)
const apiPriceMapping = await price.getCoinGeckoTokenPrices()
console.log ( await bond.getBondTellerData(apiPriceMapping) )
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

Gets data on a specified user's bonds for a specified bond teller

```js
import { Bond } from "@solace-fi/sdk-nightly"
const bond = new Bond(1)
console.log ( await bond.getUserBondData("0x501ACe677634Fd09A876E88126076933b686967a", "0xe7aba95073a85abd4ce82487c7fdfa860024b6cc") )
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
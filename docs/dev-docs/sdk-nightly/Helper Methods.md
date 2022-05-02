---
sidebar_position: 5
id: helper-methods
title: Helper Methods
---

Using the Coverage object to make read-only calls to fetch data from the blockchain is relatively straightforward (hopefully!). More tricky is using the Coverage object to send transactions to the blockchain. There are a number of additional considerations, such as:


1. How do we use a custom RPC endpoint? (e.g. if we want to use our [Alchemy](https://www.alchemy.com/) API key)?
2. How do we send transactions from a given private key or Metamask account?
3. How do we customize the gas settings for a blockchain transaction?
4. How do we connect wallet software other than Metamask?

<br/>

We have designed the SDK to abstract away these concerns, especially for the common use-case of integrating into a frontend which uses Metamask. For developers who desire more granular control over blockchain operations, we have bundled helper methods in the `solaceUtils` object.

<br/>

---

### **getProvider**

Gets a [Provider](https://docs.ethers.io/v5/api/providers/) object

```js
import { solaceUtils } from "@solace-fi/sdk-nightly"
const { getProvider } = solaceUtils
const url = "https://eth-mainnet.alchemyapi.io/jsonrpc/<API_KEY>"
let provider = await getProvider(url)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrl` | `string` |

#### Returns

`JsonRpcProvider`

<br/>

### **getGasPrice**

Gets current gas price

```js
import { solaceUtils } from "@solace-fi/sdk-nightly"
const { getProvider, getGasPrice } = solaceUtils

const url = "https://eth-mainnet.alchemyapi.io/jsonrpc/<API_KEY>"
let provider = await getProvider(url)
const gasPrice = await getGasPrice(provider)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | `JsonRpcProvider` or `JsonRpcSigner` |

#### Returns

`Promise`<`number`>

<br/>

### **getGasSettings**

Gets gas configuration object to use as optional last parameter in sending blockchain transactions

```js
import { solaceUtils } from "@solace-fi/sdk-nightly"
const { getProvider, getGasPrice, getGasSettings } = solaceUtils

const url = "https://eth-mainnet.alchemyapi.io/jsonrpc/<API_KEY>"
let provider = await getProvider(url)
const gasPrice = await getGasPrice(provider)

const gasArgs = {
    connector: "metamask",
    gasLimit: 400000, // 400K gas limit
    gasForTestnet: true // true for testnet, false otherwise
}

const gasSettings = getGasSettings(4, undefined, gasArgs)

```

#### Types

```js
type GasArgs = {
  connector?: string
  gasLimit?: number
  gasForTestnet?: boolean
}
```

```js
type GasConfiguration ={
  gasPrice?: number
  maxFeePerGas?: number
  maxPriorityFeePerGas?: number
  type?: number
  gasLimit?: number
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `rpcUrl`| `string` \| `undefined` |
| `gasArgs?` | `GasArgs` |

#### Returns

`GasConfiguration`
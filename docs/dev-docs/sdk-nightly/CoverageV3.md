---
sidebar_position: 2
id: coveragev3
title: CoverageV3
urlcolor: blue
linkcolor: blue
---

To interact with the SolaceCoverProductV3 smart contract, we will need to create a CoverageV3 instance.

The Coverage constructor takes in two parameters:

1. (Required) The **chainID** to connect to

> Current supported chains are:
> - Fantom testnet (ChainID = 4002)

2. (Optional) **walletOrProviderOrSigner** is an object of three types from ethers ([**Wallet**](https://docs.ethers.io/v5/api/signer/#Wallet), [**JsonRpcSigner**](https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#JsonRpcSigner), [**Provider**](https://docs.ethers.io/v5/api/providers/provider/)).

## **Basic Example**

### Obtain total active cover sold on Fantom testnet
```js
import { CoverageV3 } from "@solace-fi/sdk-nightly"

// create Coverage-class object connected to Fantom testnet
const coverage = new CoverageV3(4002)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
console.log(await coverage.activeCoverLimit())
```

---

## **Coverage Read-only Methods**

> We use the [BigNumber](https://docs.ethers.io/v5/api/utils/bignumber/) type for mathematical safety.

> Financial amounts are denominated in USD to 18 decimal places (to have 1:1 correlation with DAI).

<br/>

### **activeCoverLimit**

Gets the total active cover that has been sold

```js
// ...setup coverage object
console.log(await coverage.activeCoverLimit()) // BigNumber { _hex: '0x13419b9a2817b2b8ca00', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **availableCoverCapacity**

Gets the amount of available remaining capacity for new cover

```js
// ...setup coverage object
console.log(await coverage.availableCoverCapacity()) // BigNumber { _hex: '0x13419b9a2817b2b8ca00', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **maxCover**

Gets the maximum amount of cover that can be sold

```js
// ...setup coverage object
console.log(await coverage.maxCover()) // BigNumber { _hex: '0x06fd5b6af9dd3e5d400000', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **policyCount**

Gets the total number of policies that have been purchased (includes inactive policies)

```js
// ...setup coverage object
console.log(await coverage.policyCount()) // BigNumber { _hex: '0x04', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **chargeCycle**

Maximum epoch duration over which premiums are charged (Default is one week).

```js
// ...setup coverage object
console.log(await coverage.chargeCycle()) // BigNumber { _hex: '0x04', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **latestChargedTime**

The latest premium charged timestamp.

```js
// ...setup coverage object
console.log(await coverage.latestChargedTime()) // BigNumber { _hex: '0x04', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **paused**

Return true if contract paused, false otherwise

```js
// ...setup coverage object
console.log(await coverage.paused()) // false
```

#### Parameters

N/A

#### Returns

`Promise`<`boolean`\>

<br/>

### **minRequiredAccountBalance**

Gets minimum required account balance for a given cover limit. Is equivalent to the maximum chargeable fee for one epoch.

```js
// ...setup coverage object
const coverLimit = BigNumber.from("1000000000000000000") //1 USD
console.log(await coverage.minRequiredAccountBalance(coverLimit))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `coverLimit` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **minScpRequired**

Calculates the minimum amount of Solace Cover Dollars required by this contract for the account to hold.

```js
// ...setup coverage object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.minScpRequired(policyholder))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **policyStatus**

For a given policy ID, returns:
- True if policy is active
- False if policy is inactive, or does not exist

```js
// ...setup coverage object
console.log(await coverage.policyStatus(1)) // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `BigNumberish` |

#### Returns

`Promise`<`boolean`\>

<br/>

### **tokenURI**

Returns the Uniform Resource Identifier (URI) for `policyID`.

```js
// ...setup coverage object
console.log(await coverage.tokenURI(1))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `BigNumberish` |

#### Returns

`Promise`<`string`\>

<br/>

### **calculateCancelFee**

Calculates the policy cancellation fee.

```js
// ...setup coverage object
console.log(await coverage.calculateCancelFee(1))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **policyOf**

Gets the policy ID for a policyholder

```js
// ...setup coverage object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.policyOf(policyholder)) // BigNumber { _hex: '0x01', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **debtOf**

Gets the policy debt for a policyholder

```js
// ...setup coverage object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.debtOf(policyholder)) // BigNumber { _hex: '0x01', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **coverLimitOf**

Gets the cover limit for a given policy ID

```js
// ...setup coverage object for Ethereum mainnet
console.log(await coverage.coverLimitOf(1)) // BigNumber { _hex: '0x01b4fde083e5241ba400', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

---

## **Coverage Mutator Methods**

For the following methods, you will need to provide a **[Signer](https://docs.ethers.io/v5/api/signer/)** object to the Coverage-class constructor

A [Signer](https://docs.ethers.io/v5/api/signer/) object is required because transactions need to be signed by a private key to be included in the blockchain. The [Signer](https://docs.ethers.io/v5/api/signer/) object also a convenient way to connect to the blockchain.

<br/>

### **purchaseFor**

Activates (or purchases) a policy for a given address

```js
import { solaceUtils, CoverageV3, BigNumber } from "@solace-fi/sdk-nightly"
const { ethers, WALLETS, getGasPrice, getGasSettings } = solaceUtils

const provider = await WALLETS[0].connector.getProvider()
const web3Provider = new ethers.Web3Provider(provider)
const signer = web3Provider.getSigner(account)

const coverage = new CoverageV3(4002, signer)
const gasPrice = await getGasPrice(signer) // SDK helper method to get gas price
const gasSettings = await getGasSettings(4, gasPrice, {gasForTestnet: true}) // SDK helper method to get gas configuration for transaction

const POLICYHOLDER = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const COVER_LIMIT = BigNumber.from("100000000000000000000") // 100 USD
const DEPOSIT_AMOUNT = BigNumber.from("100000000000000000000") // 100 USD

let tx = await coverage.purchaseFor(
    POLICYHOLDER,
    COVER_LIMIT,
    gasSettings
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | string | The address of the intended policyholder.
|`_coverLimit` | BigNumberish | The maximum value to cover in **USD**.
|`gasConfig?` | GasConfiguration | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>
<br/>

#### Troubleshooting

SolaceCoverProductV3 transacts in SCP (Solace Credit Points), so this transaction will fail if the user does not have sufficient SCP in their wallet

<br/>

### **purchase**

Activates policy for `msg.sender`.

```js
// ...setup coverage object
const COVER_LIMIT = BigNumber.from("100000000000000000000") // 100 USD

let tx = await coverage.purchase(
    COVER_LIMIT,
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coverLimit` | `BigNumberish` | Desired cover limit
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **cancel**

Cancels the policy for `msg.sender`.

```js
// ...setup coverage object
let tx = await coverage.cancel()
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

## ** More information**

[Click here](../Contracts/products/SolaceCoverProductV3.md) for more information on smart contract mechanisms

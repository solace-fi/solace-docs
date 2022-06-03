---
sidebar_position: 2
id: coverage
title: Coverage
urlcolor: blue
linkcolor: blue
---

To interact with the SolaceCoverProduct smart contract, we will need to create a Coverage instance.

The Coverage constructor takes in two parameters:

1. (Required) The **chainID** to connect to

> Current supported chains are:
> - Ethereum mainnet (ChainID = 1)
> - Rinkeby Testnet (ChainID = 4)
> - MATIC (ChainID = 137)
> - Mumbai testnet (ChainID = 80001)

2. (Optional) **walletOrProviderOrSigner** is an object of three types from ethers ([**Wallet**](https://docs.ethers.io/v5/api/signer/#Wallet), [**JsonRpcSigner**](https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#JsonRpcSigner), [**Provider**](https://docs.ethers.io/v5/api/providers/provider/)).

## **Basic Example**

### Obtain total active cover sold on Ethereum mainnet
```js
import { Coverage } from "@solace-fi/sdk-nightly"

// create Coverage-class object connected to Ethereum mainnet
const coverage = new Coverage(1)

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
// ...setup coverage object for Ethereum mainnet
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
// ...setup coverage object for Ethereum mainnet
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
// ...setup coverage object for Ethereum mainnet
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
// ...setup coverage object for Ethereum mainnet
console.log(await coverage.policyCount()) // BigNumber { _hex: '0x04', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **accountBalanceOf**

Gets the account balance (total USD deposited) for a policyholder

```js
// ...setup coverage object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.accountBalanceOf(policyholder)) // BigNumber { _hex: '0x04e1003b28d9280000', _isBigNumber: true }
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

### **minRequiredAccountBalance**

Gets minimum required account balance for a given cover limit. Is equivalent to the maximum chargeable fee for one epoch.

```js
import { Coverage, BigNumber } from "@solace-fi/sdk-nightly"
const coverage = new Coverage(1)
const coverLimit = BigNumber.from("1000000000000000000") //1 USD
console.log(await coverage.minRequiredAccountBalance(coverLimit)) // BigNumber { _hex: '0x06d03c85a6c462', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `coverLimit` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **policyStatus**

For a given policy ID, returns:
- True if policy is active
- False if policy is inactive, or does not exist

```js
// ...setup coverage object for Ethereum mainnet
console.log(await coverage.policyStatus(1)) // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `BigNumberish` |

#### Returns

`Promise`<`boolean`\>

<br/>

### **getPolicyChainInfo**

Returns array of chainIDs that the policy has been purchased for

```js
// ...setup coverage object for Ethereum mainnet
console.log(await coverage.getPolicyChainInfo(1)) // [ BigNumber { _hex: '0x89', _isBigNumber: true } ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `BigNumberish` |

#### Returns

`Promise`<`boolean`\>

<br/>

### **getChain**

Returns the chain at the given index.

```js
// ...setup coverage object for Ethereum mainnet
console.log(await coverage.getChain(1)) // BigNumber { _hex: '0x01', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainIndex` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **numSupportedChains**

Returns the number of supported chains

```js
// ...setup coverage object for Ethereum mainnet
console.log(await coverage.numSupportedChains()) // BigNumber { _hex: '0x02', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **policyOf**

Gets the policy ID for a policyholder

```js
// ...setup coverage object for Ethereum mainnet
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

### **rewardPointsOf**

Gets the reward points balance for a policyholder

```js
// ...setup coverage object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.rewardPointsOf(policyholder)) // BigNumber { _hex: '0x056bc75e2d63100000', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **premiumsPaidOf**

Gets the total historical premiums paid for a policyholder

```js
// ...setup coverage object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.premiumsPaidOf(policyholder)) // BigNumber { _hex: '0x056bc75e2d63100000', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **cooldownStart**

Gets the cooldown start time for a policyholder. If cooldown has not been started, will return 0.

```js
// ...setup coverage object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.cooldownStart(policyholder)) // BigNumber { _hex: '0x056bc75e2d63100000', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **isReferralCodeUsed**

For a given policyholder, returns:
- True if the policyholder has previously used a valid referral code
- False otherwise

```js
// ...setup coverage object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.isReferralCodeUsed(policyholder)) // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`boolean`\>

<br/>

### **getReferrerFromReferralCode**

For a given referral code, returns the corresponding referrer address.
If the referral code is invalid, will return the zero address (0x0000000000000000000000000000000000000000).

```js
// ...setup coverage object for Ethereum mainnet
const REFERRAL_CODE = "0x5406a8636b0cb38db066f2c87ea88d2d882d3407a5fdbba95cd70df2e43817a75643fa22feaf4b550f153d13c3f2eaa68626194291646b0fc1a06d6ca8c371001b"
console.log(await coverage.getReferrerFromReferralCode(REFERRAL_CODE)) // 0x1e35c3a9493e6bab9C6c2Ee2181B08A845697Ee2
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `referralCode` | [`BytesLike`](https://docs.ethers.io/v5/api/utils/bytes/#BytesLike) |

#### Returns

`Promise`<`string`\>

<br/>

### **isReferralCodeValid**

For a given referral code, returns:
- True if a valid referral code is provided
- False otherwise

```js
// ...setup coverage object for Ethereum mainnet
const REFERRAL_CODE = "0x5406a8636b0cb38db066f2c87ea88d2d882d3407a5fdbba95cd70df2e43817a75643fa22feaf4b550f153d13c3f2eaa68626194291646b0fc1a06d6ca8c371001b"
console.log(await coverage.isReferralCodeValid(REFERRAL_CODE)) // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `referralCode` | [`BytesLike`](https://docs.ethers.io/v5/api/utils/bytes/#BytesLike) |

#### Returns

`Promise`<`boolean`\>

---

## **Coverage Mutator Methods**

For the following methods, you will need to provide a **[Signer](https://docs.ethers.io/v5/api/signer/)** object to the Coverage-class constructor

A [Signer](https://docs.ethers.io/v5/api/signer/) object is required because transactions need to be signed by a private key to be included in the blockchain. The [Signer](https://docs.ethers.io/v5/api/signer/) object also a convenient way to connect to the blockchain.

<br/>

### **activatePolicy**

Activates (or purchases) a policy for a given address

```js
import { solaceUtils, Coverage, BigNumber } from "@solace-fi/sdk-nightly"
const { ethers, WALLETS, getGasPrice, getGasSettings } = solaceUtils

const provider = await WALLETS[0].connector.getProvider()
const web3Provider = new ethers.Web3Provider(provider)
const signer = web3Provider.getSigner(account)

const coverage = new Coverage(4, signer)
const gasPrice = await getGasPrice(signer) // SDK helper method to get gas price
const gasSettings = await getGasSettings(4, gasPrice, {gasForTestnet: true}) // SDK helper method to get gas configuration for transaction

const POLICYHOLDER_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const COVER_LIMIT = BigNumber.from("100000000000000000000") // 100 USD
const DEPOSIT_AMOUNT = BigNumber.from("100000000000000000000") // 100 USD
const REFERRAL_CODE = [] // Empty referral code argument

let tx = await coverage.activatePolicy(
    POLICYHOLDER_ADDRESS,
    COVER_LIMIT,
    DEPOSIT_AMOUNT,
    REFERRAL_CODE,
    gasSettings
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | string | The address of the intended policyholder.
|`coverLimit` | BigNumberish | The maximum value to cover in **USD**.
|`amount` | BigNumberish | The deposit amount in **USD** to fund the policyholder's account.
|`referralCode` | [`BytesLike`](https://docs.ethers.io/v5/api/utils/bytes/#BytesLike) | The referral code.
|`gasConfig?` | GasConfiguration | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>
<br/>

#### Troubleshooting

This transaction will fail if the transaction sender has not approved the SolaceCoverProduct.sol smart contract to move DAI from their wallet. This is a common and non-obvious error when calling this method from outside of the official frontend.

The contract addresses used are:

| | ETH mainnet | Rinkeby |
| :------ | :------ | :------ |
| **SolaceCoverProduct** | [`0x501ACEbe29eabc346779BcB5Fd62Eaf6Bfb5320E`](https://etherscan.io/address/0x501ACEbe29eabc346779BcB5Fd62Eaf6Bfb5320E) | [`0x501AcE125346445b04A7c414C55a3d18d51Bf547`](https://rinkeby.etherscan.io/address/0x501AcE125346445b04A7c414C55a3d18d51Bf547) |
| **DAI** | [`0x6B175474E89094C44Da98b954EedeAC495271d0F`](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F) | <sup>1</sup>[`0x8ad3aA5d5ff084307d28C8f514D7a193B2Bfe725`](https://rinkeby.etherscan.io/address/0x8ad3aA5d5ff084307d28C8f514D7a193B2Bfe725) |
*<sup>1</sup>There are several variants of DAI on Rinkeby testnet. This particular one was chosen because it features minting from Etherscan interface for easy testing*

<br/>

### **updateCoverLimit**

Modifies the cover limit for a policyholder. This function can also be used to enter a referral code (if a valid referral code has not already been provided for the policyholder).

```js
// ...setup coverage object
const NEW_COVER_LIMIT = BigNumber.from("200000000000000000000") // 200 USD
const REFERRAL_CODE = "0x5406a8636b0cb38db066f2c87ea88d2d882d3407a5fdbba95cd70df2e43817a75643fa22feaf4b550f153d13c3f2eaa68626194291646b0fc1a06d6ca8c371001b"

let tx = await coverage.updateCoverLimit(
    NEW_COVER_LIMIT,
    REFERRAL_CODE
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newCoverLimit` | `BigNumberish` | The new cover limit
|`referralCode` | [`BytesLike`](https://docs.ethers.io/v5/api/utils/bytes/#BytesLike) | The referral code.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **deposit**

Makes a deposit into the a selected account

```js
// ...setup coverage object
const POLICYHOLDER_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 USD

let tx = await coverage.deposit(
    POLICYHOLDER_ADDRESS,
    DEPOSIT_AMOUNT
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | `string` | Selected policyholder address.
|`amount` | `BigNumberish` | The amount to deposit.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **withdraw**

Makes a withdrawal from the account of the transaction signer.

Note the following:
- If cooldown has passed, the user will withdraw their entire account balance.
- If cooldown has not started, or has not passed, the user will not be able to withdraw their entire account.
- A minimum required account balance (one epoch's fee) will be left in the user's account.

<br/>

```js
// ...setup coverage object
let tx = await coverage.withdraw()
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **deactivatePolicy**

Deactivate the policy of the transaction signer. This will set a user's cover limit to 0, and begin the cooldown timer for the policyholder.

```js
// ...setup coverage object
let tx = await coverage.deactivatePolicy()
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

---

## **Generating a Referral Code**

The referral code is a 65-byte EIP-712 compliant Ethereum signature. This means that to generate a referral code, a message will need to be signed with the referrer's private keys. The [`getReferralCode`](#getReferralCode) method on Coverage provides a convenient and safe way to do this.

<br/>

### **getReferralCode**

Generates a referral code

```js
import { Coverage, ethers, WALLETS } from "@solace-fi/sdk-nightly"

const provider = await WALLETS[0].connector.getProvider()
const web3Provider = new ethers.Web3Provider(provider)
const signer = web3Provider.getSigner(account)

const coverage = new Coverage(1, signer)
let referralCode = await coverage.getReferralCode()
```

#### Parameters:

N/A

#### Returns

`Promise`<`string`\>

#### Troubleshooting

> Signatures generated using a Ledger appear to have an issue where the last 2 characters (or 1 byte) of the signature is `00` or `01`. Valid Ethereum ECDSA signatures have the last 2 characters as `0b` or `0c`. This is the v part of the signature.

> To fix this issue, if the last two characters of the signature are `00`, replace with `0b`. If the last two characters of the signature are `01`, replace with `0c`.

## ** More information**

[Click here](../Contracts/products/SolaceCoverProduct.md) for more information on smart contract mechanisms

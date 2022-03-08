---
sidebar_position: 3
id: sending-transactions
title: Sending Transactions
---

We will need to send a transaction to the blockchain to do the following:
- Purchase, update or cancel policies
- Make deposits or withdrawals

<br/>

To facilitate this, the SDK provides a Policyholder class. The Policyholder constructor requires two parameters:

1. The **chainID** to connect to

> Currently Ethereum mainnet - ChainID = 1 - and Rinkeby Testnet - ChainID = 4 - are supported

2. A **[Signer](https://docs.ethers.io/v5/api/signer/)** object

> A [Signer](https://docs.ethers.io/v5/api/signer/) object is required because transactions need to be signed by a private key to be included in the blockchain. The [Signer](https://docs.ethers.io/v5/api/signer/) object also a convenient way to connect to the blockchain.

> We have also provided a [`getSigner`](./helper-methods/#getsigner) helper method to make it easier to create a valid [Signer](https://docs.ethers.io/v5/api/signer/) object

<br/>

---

## **Basic Examples**

### Purchasing a policy on Rinkeby testnet, using Metamask in frontend client code
```js
import { solaceUtils, Policyholder } from "@solace-fi/sdk"
const { getSigner } = solaceUtils

// If no parameters are provided, getSigner() will default to connecting to a selected Metamask account
// Read section on Helper Methods on how to customise RPC endpoint and other network settings
const signer = await getSigner()

// Create new Policyholder instance that is connected to Rinkeby testnet and Metamask
const policyholder = new Policyholder(4, signer)

// Makes call to activatePolicy() function on SolaceCoverProduct.sol with provided parameters
// Read documentation on how to customize gas settings for the transaction
let tx = await policyholder.activatePolicy(
    <POLICYHOLDER_ADDRESS>,
    <COVER_LIMIT>,
    <DEPOSIT_AMOUNT>,
    <REFERRAL_CODE>
)
```
<br/>

### Purchasing a policy on Rinkeby testnet, using a custom private key in a Node.js script
```js
// ethers.js 'providers' object and 'Wallet' class is exported from @solace-fi/sdk
// https://docs.ethers.io/v5/api/signer/#Wallet-constructor for more info
import { solaceUtils, Policyholder, Wallet, providers } from "@solace-fi/sdk"

const provider = new providers.getDefaultProvider('mainnet')
const signer = new Wallet(<PRIVATE_KEY>, provider)
const policyholder = new Policyholder(4, signer)

let tx = await policyholder.activatePolicy(
    <POLICYHOLDER_ADDRESS>,
    <COVER_LIMIT>,
    <DEPOSIT_AMOUNT>,
    <REFERRAL_CODE>
)
```
<br/>

---

## **Policyholder Methods**

> Only the activatePolicy and deposit methods can be performed for an arbitrary address. The remaining methods will only be performed for the address that signed the transaction

<br/>

### **activatePolicy**

Activates (or purchases) a policy for a given address

```js
import { solaceUtils, Policyholder, BigNumber } from "@solace-fi/sdk"
const { getSigner, getGasPrice, getGasSettings } = solaceUtils

const signer = await getSigner()
const policyholder = new Policyholder(4, signer)
const gasPrice = await getGasPrice(signer) // SDK helper method to get gas price
const gasSettings = await getGasSettings(4, gasPrice, {gasForTestnet: true}) // SDK helper method to get gas configuration for transaction

const POLICYHOLDER_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const COVER_LIMIT = BigNumber.from("100000000000000000000") // 100 USD
const DEPOSIT_AMOUNT = BigNumber.from("100000000000000000000") // 100 USD
const REFERRAL_CODE = [] // Empty referral code argument

let tx = await policyholder.activatePolicy(
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
|`coverLimit` | BigNumber | The maximum value to cover in **USD**.
|`amount` | BigNumber | The deposit amount in **USD** to fund the policyholder's account.
|`referralCode` | [`BytesLike`](https://docs.ethers.io/v5/api/utils/bytes/#BytesLike) | The referral code.
|`gasConfig?` | GasConfiguration | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>
<br/>

#### Troubleshooting

This transaction will fail if the transaction sender has not approved the SolaceCoverProduct.sol smart contract to move DAI from their wallet. This is a common and non-obvious error when calling this method outside of the official frontend.

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
// ...setup policyholder object
const NEW_COVER_LIMIT = BigNumber.from("200000000000000000000") // 200 USD
const REFERRAL_CODE = "0x5406a8636b0cb38db066f2c87ea88d2d882d3407a5fdbba95cd70df2e43817a75643fa22feaf4b550f153d13c3f2eaa68626194291646b0fc1a06d6ca8c371001b"

let tx = await policyholder.updateCoverLimit(
    NEW_COVER_LIMIT,
    REFERRAL_CODE
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newCoverLimit` | `BigNumber` | The new cover limit
|`referralCode` | [`BytesLike`](https://docs.ethers.io/v5/api/utils/bytes/#BytesLike) | The referral code.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **deposit**

Makes a deposit into the a selected account

```js
// ...setup policyholder object
const POLICYHOLDER_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 USD

let tx = await policyholder.deposit(
    POLICYHOLDER_ADDRESS,
    DEPOSIT_AMOUNT
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | `string` | Selected policyholder address.
|`amount` | `BigNumber` | The amount to deposit.
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
// ...setup policyholder object
let tx = await policyholder.withdraw()
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
// ...setup policyholder object
let tx = await policyholder.deactivatePolicy()
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

---

## ** More information**

[Click here](../Contracts/products/SolaceCoverProduct.md) for more information on smart contract mechanisms

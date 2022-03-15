---
sidebar_position: 7
id: bonding
title: Bonding
---

The SDK provides a **Bonder** class to interact with SOLACE bonding. **Bonder** methods are wrappers around [`BondTellerErc20.sol`](../Contracts/bonds/BondTellerErc20), [`BondTellerEth.sol`](../Contracts/bonds/BondTellerEth) and [`BondTellerMatic.sol`](../Contracts/bonds/BondTellerMatic) functions, which are the smart contracts providing SOLACE staking functionality.

The Bonder constructor requires three parameters:

1. The **chainID** to connect to

> Current supported chains are:
> - Ethereum mainnet (ChainID = 1)
> - Rinkeby Testnet (ChainID = 4)
> - Kovan Testnet (ChainID = 2)
> - MATIC (ChainID = 137)
> - Mumbai testnet (ChainID = 80001)
> - Aurora Mainnet (ChainID = 1313161554)
> - Aurora Testnet (ChainID = 1313161556)

2. A **[Signer](https://docs.ethers.io/v5/api/signer/)** object

> A [Signer](https://docs.ethers.io/v5/api/signer/) object is required because transactions need to be signed by a private key to be included in the blockchain. The [Signer](https://docs.ethers.io/v5/api/signer/) object also a convenient way to connect to the blockchain.

> We have also provided a [`getSigner`](./helper-methods/#getsigner) helper method to make it easier to create a valid [Signer](https://docs.ethers.io/v5/api/signer/) object

3. A string describing the **token** used for bond purchases

> Current supported tokens are
> - "dai"
> - "usdc"
> - "usdt"
> - "frax"
> - "wbtc"
> - "eth"
> - "weth"
> - "matic"
> - "wnear"
> - "aurora"

Note that not all tokens are supported for all chainIDs. To see a full list of supported tokens for each chain, view the Bond Teller contracts in the Contract Addresses section (e.g. [**Aurora mainnet Bond Tellers**](../Contract%20Addresses/Aurora#v121))

<br/>

---

## **Basic Examples**

### Obtaining bond price for BondTellerMatic on Matic Mainnet
```js
import { solaceUtils, Bonder } from "@solace-fi/sdk"
const signer = await getSigner()
const bonder = new Bonder(137, signer, "matic")
const bondPrice = await bonder.bondPrice()
console.log(bondPrice)
```

<br/>

### Purchasing bond with wNEAR on Aurora mainnet, using a custom private key in a Node.js script
```js
import { solaceUtils, Bonder, Wallet, providers } from "@solace-fi/sdk"

const provider = new providers.getDefaultProvider('mainnet')
const signer = new Wallet(<PRIVATE_KEY>, provider)
const bonder = new Bonder(1313161554, signer, "wnear")
await bonder.deposit(
    <DESIRED_DEPOSIT>, 
    <MINIMUM_DESIRED_SOLACE_PURCHASED>, 
    <DEPOSITOR_ADDRESS>,
    <FALSE_FOR_UNSTAKED_VESTING_SOLACE>
)
```

<br/>

---

## **Bonder Read-only Methods**

<br/>

### **bondPrice**

Calculate the current price (measured in units of the principal token) of a bond. Assumes 1 SOLACE payout.

```js
// ...setup bonder object for Ethereum mainnet
console.log(await bonder.bondPrice())
/*
    ...
*/
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **calculateAmountOut**

Calculate the current price (measured in units of the principal token) of a bond. Assumes 1 SOLACE payout.

```js
// ...setup bonder object for Ethereum mainnet
const AMOUNT_IN = 1000;
const STAKE = false;
console.log(await bonder.calculateAmountOut(AMOUNT_IN, STAKE))
/*
    ...
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountIn` | `BigNumber` |
| `stake` | `boolean` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **calculateAmountIn**

Calculate the amount of SOLACE out for an amount of principal.

```js
// ...setup bonder object for Ethereum mainnet
const AMOUNT_OUT = 1000;
const STAKE = false;
console.log(await bonder.calculateAmountOut(AMOUNT_IN, STAKE))
/*
    ...
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountOut` | `BigNumber` |
| `stake` | `boolean` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

---

## **Bonder Mutator Methods**

<br/>

### **claimPayout**

Claim payout for a bond that the user holds. User calling `claimPayout()` must be either the owner or approved for the entered bondID.

```js
// ...setup bonder object
const BOND_ID = 1

let tx = await bonder.claimPayout(
    BOND_ID,
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`bondID` | `number` | The ID of the bond to redeem.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

---

## **BondTellerErc20-only Mutator Methods**

> BondTellerErc20 includes all tokens except for "matic" and "eth"

<br/>

### **deposit**

Create a bond by depositing amount of principal. Principal will be transferred from msg.sender using allowance.

```js
// ...setup bonder object
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 USD
const MIN_AMOUNT_OUT = BigNumber.from("100000000000000000000") // 100 SOLACE
const DEPOSITOR_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const STAKE = false

let tx = await bonder.deposit(
    DEPOSIT_AMOUNT,
    MIN_AMOUNT_OUT,
    DEPOSITOR_ADDRESS,
    STAKE
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deposit` | `BigNumber` | Amount of principal to deposit.
|`minAmountOut` | `BigNumber` | The minimum SOLACE out.
|`depositor` | `string` | The bond recipient, default msg.sender.
|`stake` | `boolean` | True to stake, false to not stake.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **depositSigned**

Create a bond by depositing amount of principal. Principal will be transferred from depositor using permit. Note that not all ERC20s have a permit function, in which case this function will revert.

```js
// ...setup bonder object
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 USD
const MIN_AMOUNT_OUT = BigNumber.from("100000000000000000000") // 100 SOLACE
const DEPOSITOR_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const STAKE = false
const DEADLINE = BigNumber.from("1657223379")
const v = "0x1c"
const r = "0x4cddf146c578d20a31fa6128e5d9afe6ac666e5ef5899f2767cacb56a42703cc"
const s = "0x3847036857aa3f077a2e142eee707e5af2653baa99b9d10764a0be3d61595dbb"

let tx = await bonder.depositSigned(
    DEPOSIT_AMOUNT,
    MIN_AMOUNT_OUT,
    DEPOSITOR_ADDRESS,
    STAKE,
    DEADLINE,
    v,
    r,
    s
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deposit` | `BigNumber` | Amount of principal to deposit.
|`minAmountOut` | `BigNumber` | The minimum SOLACE out.
|`depositor` | `string` | The bond recipient, default msg.sender.
|`stake` | `boolean` | True to stake, false to not stake.
|`deadline` | `BigNumber` | Time the transaction must go through before.
|`v` | `utils.BytesLike` | secp256k1 signature.
|`r` | `utils.BytesLike` | secp256k1 signature.
|`s` | `utils.BytesLike` | secp256k1 signature.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

---

## **BondTellerEth-only Mutator Methods**

> BondTellerEth is only deployed on Eth mainnet and testnets

<br/>

### **depositEth**

Create a bond by depositing ETH.

```js
// ...setup bonder object
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 ETH
const MIN_AMOUNT_OUT = BigNumber.from("100000000000000000000") // 100 SOLACE
const DEPOSITOR_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const STAKE = false

let tx = await bonder.depositEth(
    DEPOSIT_AMOUNT,
    MIN_AMOUNT_OUT,
    DEPOSITOR_ADDRESS,
    STAKE
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deposit` | `BigNumber` | Amount of ETH to deposit.
|`minAmountOut` | `BigNumber` | The minimum SOLACE out.
|`depositor` | `string` | The bond recipient, default msg.sender.
|`stake` | `boolean` | True to stake, false to not stake.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **depositWeth**

Create a bond by depositing amount of WETH. WETH will be transferred from msg.sender using allowance.

```js
// ...setup bonder object
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 WETH
const MIN_AMOUNT_OUT = BigNumber.from("100000000000000000000") // 100 SOLACE
const DEPOSITOR_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const STAKE = false

let tx = await bonder.depositWeth(
    DEPOSIT_AMOUNT,
    MIN_AMOUNT_OUT,
    DEPOSITOR_ADDRESS,
    STAKE
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deposit` | `BigNumber` | Amount of WETH to deposit.
|`minAmountOut` | `BigNumber` | The minimum SOLACE out.
|`depositor` | `string` | The bond recipient, default msg.sender.
|`stake` | `boolean` | True to stake, false to not stake.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **depositWethSigned**

Create a bond by depositing amount of WETH. WETH will be transferred from depositor using permit. Note that not all WETHs have a permit function, in which case this function will revert.

```js
// ...setup bonder object
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 WETH
const MIN_AMOUNT_OUT = BigNumber.from("100000000000000000000") // 100 SOLACE
const DEPOSITOR_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const STAKE = false
const DEADLINE = BigNumber.from("1657223379")
const v = "0x1c"
const r = "0x4cddf146c578d20a31fa6128e5d9afe6ac666e5ef5899f2767cacb56a42703cc"
const s = "0x3847036857aa3f077a2e142eee707e5af2653baa99b9d10764a0be3d61595dbb"

let tx = await bonder.depositWethSigned(
    DEPOSIT_AMOUNT,
    MIN_AMOUNT_OUT,
    DEPOSITOR_ADDRESS,
    STAKE,
    DEADLINE,
    v,
    r,
    s
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deposit` | `BigNumber` | Amount of WETH to deposit.
|`minAmountOut` | `BigNumber` | The minimum SOLACE out.
|`depositor` | `string` | The bond recipient, default msg.sender.
|`stake` | `boolean` | True to stake, false to not stake.
|`deadline` | `BigNumber` | Time the transaction must go through before.
|`v` | `utils.BytesLike` | secp256k1 signature.
|`r` | `utils.BytesLike` | secp256k1 signature.
|`s` | `utils.BytesLike` | secp256k1 signature.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

---

## **BondTellerMatic-only Mutator Methods**

> BondTellerMatic is only deployed on Matic mainnet

<br/>

### **depositMatic**

Create a bond by depositing MATIC.

```js
// ...setup bonder object
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 MATIC
const MIN_AMOUNT_OUT = BigNumber.from("100000000000000000000") // 100 SOLACE
const DEPOSITOR_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const STAKE = false

let tx = await bonder.depositMatic(
    DEPOSIT_AMOUNT,
    MIN_AMOUNT_OUT,
    DEPOSITOR_ADDRESS,
    STAKE
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deposit` | `BigNumber` | Amount of MATIC to deposit.
|`minAmountOut` | `BigNumber` | The minimum SOLACE out.
|`depositor` | `string` | The bond recipient, default msg.sender.
|`stake` | `boolean` | True to stake, false to not stake.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **depositWmatic**

Create a bond by depositing amount of wMATIC. wMATIC will be transferred from msg.sender using allowance.

```js
// ...setup bonder object
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 wMATIC
const MIN_AMOUNT_OUT = BigNumber.from("100000000000000000000") // 100 SOLACE
const DEPOSITOR_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const STAKE = false

let tx = await bonder.depositWmatic(
    DEPOSIT_AMOUNT,
    MIN_AMOUNT_OUT,
    DEPOSITOR_ADDRESS,
    STAKE
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deposit` | `BigNumber` | Amount of wMATIC to deposit.
|`minAmountOut` | `BigNumber` | The minimum SOLACE out.
|`depositor` | `string` | The bond recipient, default msg.sender.
|`stake` | `boolean` | True to stake, false to not stake.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **depositWmaticSigned**

Create a bond by depositing amount of wMATIC. wMATIC will be transferred from depositor using permit. Note that not all wMATICs have a permit function, in which case this function will revert.

```js
// ...setup bonder object
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 wMATIC
const MIN_AMOUNT_OUT = BigNumber.from("100000000000000000000") // 100 SOLACE
const DEPOSITOR_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const STAKE = false
const DEADLINE = BigNumber.from("1657223379")
const v = "0x1c"
const r = "0x4cddf146c578d20a31fa6128e5d9afe6ac666e5ef5899f2767cacb56a42703cc"
const s = "0x3847036857aa3f077a2e142eee707e5af2653baa99b9d10764a0be3d61595dbb"

let tx = await bonder.depositWmaticSigned(
    DEPOSIT_AMOUNT,
    MIN_AMOUNT_OUT,
    DEPOSITOR_ADDRESS,
    STAKE,
    DEADLINE,
    v,
    r,
    s
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`deposit` | `BigNumber` | Amount of wMATIC to deposit.
|`minAmountOut` | `BigNumber` | The minimum SOLACE out.
|`depositor` | `string` | The bond recipient, default msg.sender.
|`stake` | `boolean` | True to stake, false to not stake.
|`deadline` | `BigNumber` | Time the transaction must go through before.
|`v` | `utils.BytesLike` | secp256k1 signature.
|`r` | `utils.BytesLike` | secp256k1 signature.
|`s` | `utils.BytesLike` | secp256k1 signature.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>
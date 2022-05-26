---
sidebar_position: 5
id: scp
title: SCP
---

## Context

SCP (Solace Credit Point) is the unit of accounting used for Solace Wallet Coverage V3. Policyholders exchange accepted tokens (mostly stablecoins and SOLACE) for SCP. Policyholders are charged a premium through SCP being deducted from their account. Policyholders must maintain a minimum SCP balance determined by their cover limit. SCP can only be withdrawn for SOLACE tokens.

<br/>

---

<br/>

To assist with interaction with SCP (Solace Credit Point), we have provided a **SCP** class.

The constructor takes in two parameters:

1. (Required) The **chainId** to connect to

> Current supported chains are:
> - Fantom testnet (ChainID = 4002)

2. (Optional) **providerOrSigner** is an object of three types from ethers ([**JsonRpcSigner**](https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#JsonRpcSigner), [**Provider**](https://docs.ethers.io/v5/api/providers/provider/)).

<br/>

---

## **SCP Read-only Methods**

<br/>

### **balanceOf**

Gets amount of SCP owned by `account`.

```js
// ...setup scp object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await scp.balanceOf(policyholder))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **balanceOfNonRefundable**

Gets the amount of SCP owned by account that cannot be withdrawn.

```js
// ...setup scp object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await scp.balanceOfNonRefundable(policyholder))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **minScpRequired**

Calculates the minimum amount of Solace Cover Points required by this contract for the account to hold.

```js
// ...setup scp object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await scp.minScpRequired(policyholder))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **getRefundableSOLACEAmount**

Calculates the refundable `SOLACE` amount for the SCP balance for a given address.

`signature` is the 65-byte ECDSA signature produced by a `Price Signer` for a specified price quote `PriceData(address token,uint256 price,uint256 deadline)`

#### Parameters
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`depositor` | `string` | The address to query
|`price` | `BigNumberish` | The `SOLACE` price in wei(usd).
|`priceDeadline` | `BigNumberish` | Expiry timestamp for price quote
|`signature` | `utils.BytesLike` | The `SOLACE` price signature.

#### Returns

`Promise`<`BigNumber`\>

<br/>

---

## **SCP Mutator Methods**

> SCP is currently only deployed on Fantom and Fantom testnet

<br/>

### **depositStable**

Deposits tokens from msg.sender and credits them to recipient as SCP.

```js
// ...setup scp object
const USDC_TOKEN = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
const RECIPIENT_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200

let tx = await scp.depositStable(
    USDC_TOKEN,
    RECIPIENT_ADDRESS,
    DEPOSIT_AMOUNT,
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | `string` | The token to deposit.
|`recipient` | `string` | The recipient of Solace Cover Points.
|`amount` | `BigNumberish` | Amount of token to deposit.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **depositSignedStable**

Deposits tokens from msg.sender and credits them to recipient as SCP, uses ERC20 Permit.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | `string` | The token to deposit.
|`depositor` | `string` | The depositor and recipient of Solace Cover Points.
|`amount` | `BigNumberish` | Amount of token to deposit.
|`deadline` | `BigNumberish` | Timestamp the transaction must go through before.
|`v` | `BigNumberish` | v component of ECDSA signature
|`r` | `utils.BytesLike` | r component of ECDSA signature
|`s` | `utils.BytesLike` | s component of ECDSA signature
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **depositNonStable**

Deposits tokens from msg.sender and credits them to recipient as SCP. Primarily intended for SOLACE deposit.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | `string` | The token to deposit.
|`recipient` | `string` | The recipient of Solace Cover Points.
|`amount` | `BigNumberish` | Amount of token to deposit.
|`price` | `BigNumberish` | The `SOLACE` price in wei(usd).
|`priceDeadline` | `BigNumberish` | Timestamp the transaction must go through before.
|`signature` | `utils.BytesLike` | The `SOLACE` price signature.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **withdraw**

Withdraws some of the user's deposit and sends it to `recipient`.

User must have deposited `SOLACE` in at least that amount in the past. User must have sufficient Solace Cover Points to withdraw. Token must be refundable. Premium pool must have the tokens to return.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | `BigNumberish` | The amount of SCP to withdraw.
|`recipient` | `string` | The recipient of funds.
|`price` | `BigNumberish` | The `SOLACE` price in wei(usd).
|`priceDeadline` | `BigNumberish` | Timestamp the transaction must go through before.
|`signature` | `utils.BytesLike` | The `SOLACE` price signature.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

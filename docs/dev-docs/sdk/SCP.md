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

To assist with getting SCP (Solace Credit Point) data, we have provided a **SCP** class.

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

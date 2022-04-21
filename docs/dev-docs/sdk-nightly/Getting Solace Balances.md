---
sidebar_position: 6
id: getting-solace-balances
title: Getting Solace Balances
---

To assist with getting SOLACE and xSOLACE balances, we have provided **SolaceBalance** and **xSolaceBalance** classes

---

## **SolaceBalance methods**

### **Setup**
```js
import { SolaceBalance } from "@solace-fi/sdk-nightly"
const solaceBalance = new SolaceBalance()
```

<br/>

### **getSolaceBalanceOf**

Gets the SOLACE balance of an address on a specified chain

```js
// ...setup SolaceBalance object
console.log( await solaceBalance.getSolaceBalanceOf(1, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `account` | `string` |

#### Returns

`Promise`<`any`\>

<br/>

### **getSolaceBalanceSum**

Gets the total SOLACE balance of an address across all supported chains

```js
// ...setup SolaceBalance object
console.log( await solaceBalance.getSolaceBalanceSum('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`any`\>

<br/>

### **getAllSolaceBalances**

Gets SOLACE balances of an address, for each individual supported chain

```js
// ...setup SolaceBalance object
console.log( await solaceBalance.getAllSolaceBalances('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`any`\>

<br/>

---

## **xSolaceBalance methods**

<br/>

### **Setup**
```js
import { xSolaceBalance } from "@solace-fi/sdk-nightly"
const XSolaceBalance = new xSolaceBalance()
```

<br/>

### **getXSolaceBalanceOf**

Gets the xSOLACE balance of an address on a specified chain

```js
// ...setup xSolaceBalance object
console.log( await XSolaceBalance.getXSolaceBalanceOf(1, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `account` | `string` |

#### Returns

`Promise`<`any`\>

<br/>

### **getXSolaceBalanceSum**

Gets the total xSOLACE balance of an address across all supported chains

```js
// ...setup SolaceBalance object
console.log( await XSolaceBalance.getXSolaceBalanceSum('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`any`\>

<br/>

### **getAllXSolaceBalances**

Gets xSOLACE balances of an address, for each individual supported chain

```js
// ...setup xSolaceBalance object
console.log( await XSolaceBalance.getAllXSolaceBalances('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`any`\>
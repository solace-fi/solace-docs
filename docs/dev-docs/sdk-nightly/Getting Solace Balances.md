---
sidebar_position: 6
id: getting-solace-balances
title: Getting Solace Balances
---

To assist with getting SOLACE and xSOLACE balances of a single address, we have provided **SolaceBalance** and **xSolaceBalance** classes.

The constructor takes in a mandatory parameter for the address, and an optional parameter for an object mapping chain ids to rpc urls.

---

## **SolaceBalance methods**

### **Setup**
```js
import { SolaceBalance } from "@solace-fi/sdk-nightly"
const solaceBalance = new SolaceBalance("0x499dd900f800fd0a2ed300006000a57f00fa009b")
// Requires single parameter - address
```

<br/>

### **getSolaceBalanceOf**

Gets the SOLACE balance on a specified chain.

```js
// ...setup SolaceBalance object
console.log( await solaceBalance.getSolaceBalanceOf(1) )
// 0.000000000000000001
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Promise`<`any`\>

<br/>

### **getSolaceBalanceSum**

Gets the total SOLACE balance across all supported chains

```js
// ...setup SolaceBalance object
console.log( await solaceBalance.getSolaceBalanceSum() )
//  1e-18
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

### **getAllSolaceBalances**

Gets SOLACE balances of an address, for each individual supported chain

```js
// ...setup SolaceBalance object
console.log( await solaceBalance.getAllSolaceBalances() )
// {"1":"0.000000000000000001","137":"0.0","1313161554":"0.0"}
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

---

## **xSolaceBalance methods**

The constructor shares the same parameters as the SolaceBalance constructor.

<br/>

### **Setup**
```js
import { xSolaceBalance } from "@solace-fi/sdk-nightly"
const XSolaceBalance = new xSolaceBalance("0x499dd900f800fd0a2ed300006000a57f00fa009b")
// Requires single parameter - address
```

<br/>

### **getXSolaceBalanceOf**

Gets the xSOLACE balance on a specified chain

```js
// ...setup xSolaceBalance object
console.log( await XSolaceBalance.getXSolaceBalanceOf(1) )
// 0.0
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Promise`<`any`\>

<br/>

### **getXSolaceBalanceSum**

Gets the total xSOLACE balance across all supported chains

```js
// ...setup SolaceBalance object
console.log( await XSolaceBalance.getXSolaceBalanceSum() )
// 0.0
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

### **getAllXSolaceBalances**

Gets xSOLACE balances for each individual supported chain

```js
// ...setup xSolaceBalance object
console.log( await XSolaceBalance.getAllXSolaceBalances() )
// {"1":"0.0","137":"0.0","1313161554":"0.0"}
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>
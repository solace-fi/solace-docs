---
sidebar_position: 11
id: getting-underwriting-data
title: Getting Underwriting Data
---

To assist with getting underwriting pool data, we have provided the **UnderwritingPoolBalances** and **UnderwritingPoolUSDBalances** classes

---

## **UnderwritingPoolBalances methods**

### **Setup**
```js
import { UnderwritingPoolBalances } from "@solace-fi/sdk-nightly"
const uwpBalances = new UnderwritingPoolBalances()
```

<br/>

### **getBalances_Mainnet**

Gets token balances of the Eth mainnet underwriting pool

```js
// Create uwpBalances object
console.log( await uwpBalances.getBalances_Mainnet() )
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.

<br/>

### **getBalances_Polygon**

Gets token balances of the Polygon underwriting pool

```js
// Create uwpBalances object
console.log( await uwpBalances.getBalances_Polygon() )
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

### **getBalances_Aurora**

Gets token balances of the Aurora underwriting pool

```js
// Create uwpBalances object
console.log( await uwpBalances.getBalances_Aurora() )
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

---

## **UnderwritingPoolUSDBalances methods**

### **Setup**
```js
import { UnderwritingPoolUSDBalances } from "@solace-fi/sdk-nightly"
const uwpUSDBalances = new UnderwritingPoolUSDBalances()
```

<br/>

### **getUSDBalances_Mainnet**

Gets USD nominal of the token balances of the Eth mainnet underwriting pool

```js
// Create uwpUSDBalances object
console.log( await uwpUSDBalances.getUSDBalances_Mainnet() )
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.

<br/>

### **getUSDBalances_Polygon**

Gets USD nominal of the token balances of the Polygon underwriting pool

```js
// Create uwpUSDBalances object
console.log( await uwpUSDBalances.getUSDBalances_Polygon() )
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

### **getUSDBalances_Polygon**

Gets USD nominal of the token balances of the Aurora underwriting pool

```js
// Create uwpUSDBalances object
console.log( await uwpUSDBalances.getUSDBalances_Aurora() )
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

### **getUSDBalances_All**

Gets USD nominal of the token balances of the underwriting pools on Eth mainnet, Polygon and Aurora

```js
// Create uwpUSDBalances object
console.log( await uwpUSDBalances.getUSDBalances_All() )
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.
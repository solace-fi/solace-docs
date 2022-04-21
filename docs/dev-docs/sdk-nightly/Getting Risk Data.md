---
sidebar_position: 12
id: getting-risk-data
title: Getting Risk Data
---

To assist with getting risk engine data, we have provided a **Risk** class

---

## **Risk methods**

### **Setup**
```js
import { Risk } from "@solace-fi/sdk-nightly"
const risk = new Risk()
```

<br/>

### **getSolaceRiskBalances**

Gets DeFi protocol balances (in USD) for a given address, for specified chain/s

```js
// ...setup risk object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await coverage.getSolaceRiskBalances(policyholder, 1))
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |
| `chainIdOrChains` | `number | number[]` |

#### Returns

`Promise`<`any` >

<br/>

### **getSolaceRiskScores**

Gets risk scores for a portfolio

```js
// ...setup risk object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const riskBalances = await risk.getSolaceRiskBalances(policyholder, [1, 137])
console.log(await risk.getSolaceRiskScores(policyholder, riskBalances))
```

#### Parameters

| Name | Type |
| :------------- | :-------------------- |
| `policyholder` | `string`              |
| `positions`    | `SolaceRiskBalance[]` |

#### Returns

`Promise`<`SolaceRiskScore | undefined` >

<br/>

### **getSolaceRiskSeries**

Gets Solace risk series data

```js
// ...setup risk object
console.log(await risk.getSolaceRiskSeries())
```

#### Parameters

N/A

#### Returns

`Promise`<`SolaceRiskSeries | undefined | unknown`>

<br/>

### **getSolaceRiskTracks**

For a given account and chain, gets all tracking files for billing

```js
// ...setup risk object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await risk.getSolaceRiskTracks(policyholder, 1))
```

#### Parameters

| Name | Type |
| :------------- | :-------------------- |
| `address` | `string`              |
| `chainId`    | `number` |

#### Returns

`Promise`<`any`>

<br/>

### **getSolaceRiskBillings**

For a given account and chain, gets all billing data

```js
// ...setup risk object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await risk.getSolaceRiskBillings(policyholder, 1))
```

#### Parameters

| Name | Type |
| :------------- | :-------------------- |
| `address` | `string`              |
| `chainId`    | `number` |
| `category?`    | `'paid' | 'unpaid'` |

#### Returns

`Promise`<`any`>

<br/>

### **getSolaceRiskBillings_All**

For a given chain, get all billing data

```js
// ...setup risk object
console.log(await risk.getSolaceRiskBillings_All(1))
```

#### Parameters

| Name | Type |
| :------------- | :-------------------- |
| `chainId`    | `number` |

#### Returns

`Promise`<`any`>
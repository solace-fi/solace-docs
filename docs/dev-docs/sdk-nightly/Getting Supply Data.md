---
sidebar_position: 11
id: getting-supply-data
title: Getting Supply Data
---

To assist with getting total and circulating SOLACE supply data, we have provided **CirculatingSupply** and **TotalSupply** classes

---

## **TotalSupply methods**

### **Setup**
```js
import { TotalSupply } from "@solace-fi/sdk-nightly"
const totalSupply = new TotalSupply()
```

<br/>

### **getTotalSupply**

Gets total supply for given chain and token

```js
// Create totalSupply object
console.log( await totalSupply.getTotalSupply(1, 'SOLACE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `token` | `'SOLACE' | 'XSOLACE'` |

#### Returns

`Promise`<`any`\>

<br/>

### **getTotalSupplySum**

Gets sum of total supplies across all supported chains, for a given token

```js
// Create totalSupply object
console.log( await totalSupply.getTotalSupplySum('SOLACE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `'SOLACE' | 'XSOLACE'` |

#### Returns

`Promise`<`any`\>

<br/>

### **getTotalSupplyAll**

Gets total supply for each supported chain, for a given token

```js
// Create totalSupply object
console.log( await totalSupply.getTotalSupplyAll('SOLACE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `'SOLACE' | 'XSOLACE'` |

#### Returns

`Promise`<`any`\>

<br/>

---

## **CirculatingSupply methods**

### **Setup**
```js
import { CirculatingSupply } from "@solace-fi/sdk-nightly"
const circulatingSupply = new CirculatingSupply()
```

<br/>

### **getCirculatingSupply**

Gets circulating supply for given chain and token

```js
// Create circulatingSupply object
console.log( await circulatingSupply.getCirculatingSupply(1, 'SOLACE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `token` | `'SOLACE' | 'XSOLACE'` |

#### Returns

`Promise`<`any`\>

<br/>

### **getCirculatingSupplySum**

Gets sum of circulating supplies across all supported chains, for a given token

```js
// Create circulatingSupply object
console.log( await circulatingSupply.getCirculatingSupplySum('SOLACE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `'SOLACE' | 'XSOLACE'` |

#### Returns

`Promise`<`any`\>

<br/>

### **getCirculatingSupplyAll**

Gets circulating supply for each supported chain, for a given token

```js
// Create circulatingSupply object
console.log( await circulatingSupply.getCirculatingSupplyAll('SOLACE') )
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `'SOLACE' | 'XSOLACE'` |

#### Returns

`Promise`<`any`\>

<br/>

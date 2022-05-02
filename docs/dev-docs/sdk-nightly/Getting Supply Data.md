---
sidebar_position: 11
id: getting-supply-data
title: Getting Supply Data
---

To assist with getting total and circulating SOLACE supply data, we have provided **CirculatingSupply** and **TotalSupply** classes.

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
// 1002125727.760381717153528164
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `token` | `'SOLACE' | 'XSOLACE'` |
| `providerOrSigner` | `Provider` \| `JsonRpcSigner` \| `undefined` |

#### Returns

`Promise`<`string`\>

<br/>

### **getTotalSupplySum**

Gets sum of total supplies across all supported chains, for a given token

```js
// Create totalSupply object
console.log( await totalSupply.getTotalSupplySum('SOLACE') )
// 1038623934.1998345
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
// {"1":"1002125727.760381717153528164","137":"18166077.160888695100243844","1313161554":"18332129.278564149669640774"}
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
// 40354628.323181335624956782
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `token` | `'SOLACE' | 'XSOLACE'` |
| `provider` | `Provider` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getCirculatingSupplySum**

Gets sum of circulating supplies across all supported chains, for a given token

```js
// Create circulatingSupply object
console.log( await circulatingSupply.getCirculatingSupplySum('SOLACE') )
// 76719118.29794532
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
// {"1":"40354628.323181335624956782","137":"18032360.696199833745721628","1313161554":"18332129.278564149669640774"}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `'SOLACE' | 'XSOLACE'` |

#### Returns

`Promise`<`any`\>

<br/>

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

Gets token balances of the Eth mainnet underwriting pool. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// Create uwpBalances object
console.log( await uwpBalances.getBalances_Mainnet() )
/*
    [
      { token: 'dai', amount: '471.71146763362032774' },
      { token: 'usdc', amount: '33884.951565' },
      { token: 'usdt', amount: '4313.0' },
      { token: 'frax', amount: '11753.883552258435486329' },
      { token: 'eth', amount: '3.4127363' },
      { token: 'weth', amount: '0.1615' },
      { token: 'wbtc', amount: '2.64003347' },
      { token: 'scp', amount: '6.798071478955523467' },
      { token: 'slp', amount: '3.972114659872904513' },
      { token: 'solace', amount: '85267824.522363231205556125' }
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping?` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.

<br/>

### **getBalances_Polygon**

Gets token balances of the Polygon underwriting pool. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// Create uwpBalances object
console.log( await uwpBalances.getBalances_Polygon() )
/*
    [
      { token: 'dai', amount: '0.0095' },
      { token: 'usdc', amount: '182.602988' },
      { token: 'usdt', amount: '90.997335' },
      { token: 'frax', amount: '18.484692879319670318' },
      { token: 'matic', amount: '6555.4019697' },
      { token: 'wmatic', amount: '1273.475031846669381118' },
      { token: 'weth', amount: '2.081725497373950269' },
      { token: 'wbtc', amount: '0.18246582' },
      { token: 'guni', amount: '937561.52380354352010467' },
      { token: 'solace', amount: '0.0' }
    ]

*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping?` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getBalances_Aurora**

Gets token balances of the Aurora underwriting pool. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// Create uwpBalances object
console.log( await uwpBalances.getBalances_Aurora() )
/*
    [
      { token: 'dai', amount: '13956.940448785362255681' },
      { token: 'usdc', amount: '48877.799421' },
      { token: 'usdt', amount: '33511.053667' },
      { token: 'frax', amount: '286.482289866054319275' },
      { token: 'eth', amount: '1.01935' },
      { token: 'weth', amount: '0.011116216703161019' },
      { token: 'wbtc', amount: '0.3621983' },
      { token: 'wnear', amount: '6514.663061702782135777342088' },
      { token: 'aurora', amount: '20523.725447797785803112' },
      { token: 'tlp', amount: '48939212.060023334423661932' },
      { token: 'solace', amount: '0.0' }
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping?` | `{ [chain: number]: string }` \| `undefined` |

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

Gets USD nominal of the token balances of the Eth mainnet underwriting pool. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// Create uwpUSDBalances object
console.log( await uwpUSDBalances.getUSDBalances_Mainnet() )
/*
    [
      { token: 'dai', usdBalance: 471.3718353769241 },
      { token: 'usdc', usdBalance: 33847.98308284259 },
      { token: 'usdt', usdBalance: 4308.510167 },
      { token: 'frax', usdBalance: 11730.58735505786 },
      { token: 'eth', usdBalance: 9696.131419355415 },
      { token: 'weth', usdBalance: 459.217175 },
      { token: 'wbtc', usdBalance: 102794.05327287699 },
      { token: 'scp', usdBalance: 19327.104172961743 },
      { token: 'slp', usdBalance: 823046.7774939969 },
      { token: 'solace', usdBalance: 3394634.143206938 }
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping?` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.

<br/>

### **getUSDBalances_Polygon**

Gets USD nominal of the token balances of the Polygon underwriting pool. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// Create uwpUSDBalances object
console.log( await uwpUSDBalances.getUSDBalances_Polygon() )
/*
    [
      { token: 'dai', usdBalance: 0.009493159999999999 },
      { token: 'usdc', usdBalance: 182.403768140092 },
      { token: 'usdt', usdBalance: 90.90260677426501 },
      { token: 'frax', usdBalance: 18.448056218032857 },
      { token: 'matic', usdBalance: 8574.518678680735 },
      { token: 'wmatic', usdBalance: 1668.252291719137 },
      { token: 'weth', usdBalance: 5919.282365507958 },
      { token: 'wbtc', usdBalance: 7100.8548170046715 },
      { token: 'guni', usdBalance: 24742.86868777875 },
      { token: 'solace', usdBalance: 0 }
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping?` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getUSDBalances_Aurora**

Gets USD nominal of the token balances of the Aurora underwriting pool. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// Create uwpUSDBalances object
console.log( await uwpUSDBalances.getUSDBalances_Aurora() )
/*
    [
      { token: 'dai', usdBalance: 13946.891451662237 },
      { token: 'usdc', usdBalance: 48824.473741831694 },
      { token: 'usdt', usdBalance: 33476.16866013265 },
      { token: 'frax', usdBalance: 285.91448196753976 },
      { token: 'eth', usdBalance: 2899.986092619562 },
      { token: 'weth', usdBalance: 31.608406384603196 },
      { token: 'wbtc', usdBalance: 14070.009747136408 },
      { token: 'wnear', usdBalance: 90896.83736456635 },
      { token: 'aurora', usdBalance: 186373.35760912072 },
      { token: 'tlp', usdBalance: 35454.14749282432 },
      { token: 'solace', usdBalance: 0 }
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping?` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getUSDBalances_All**

Gets USD nominal of the token balances of the underwriting pools on Eth mainnet, Polygon and Aurora. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// Create uwpUSDBalances object
console.log( await uwpUSDBalances.getUSDBalances_All() )
/*
    {
      '1': [
        { token: 'dai', usdBalance: 471.3718353769241 },
        { token: 'usdc', usdBalance: 33847.98308284259 },
        { token: 'usdt', usdBalance: 4308.510167 },
        { token: 'frax', usdBalance: 11730.58735505786 },
        { token: 'eth', usdBalance: 9696.131419355415 },
        { token: 'weth', usdBalance: 459.217175 },
        { token: 'wbtc', usdBalance: 102794.05327287699 },
        { token: 'scp', usdBalance: 19327.104172961743 },
        { token: 'slp', usdBalance: 823046.7774939969 },
        { token: 'solace', usdBalance: 3394634.143206938 }
      ],
      '137': [
        { token: 'dai', usdBalance: 0.009493159999999999 },
        { token: 'usdc', usdBalance: 182.403768140092 },
        { token: 'usdt', usdBalance: 90.90260677426501 },
        { token: 'frax', usdBalance: 18.448056218032857 },
        { token: 'matic', usdBalance: 8574.518678680735 },
        { token: 'wmatic', usdBalance: 1668.252291719137 },
        { token: 'weth', usdBalance: 5919.282365507958 },
        { token: 'wbtc', usdBalance: 7100.8548170046715 },
        { token: 'guni', usdBalance: 24742.86868777875 },
        { token: 'solace', usdBalance: 0 }
      ],
      '1313161554': [
        { token: 'dai', usdBalance: 13946.891451662237 },
        { token: 'usdc', usdBalance: 48824.473741831694 },
        { token: 'usdt', usdBalance: 33476.16866013265 },
        { token: 'frax', usdBalance: 285.91448196753976 },
        { token: 'eth', usdBalance: 2899.986092619562 },
        { token: 'weth', usdBalance: 31.608406384603196 },
        { token: 'wbtc', usdBalance: 14070.009747136408 },
        { token: 'wnear', usdBalance: 90896.83736456635 },
        { token: 'aurora', usdBalance: 186373.35760912072 },
        { token: 'tlp', usdBalance: 35454.14749282432 },
        { token: 'solace', usdBalance: 0 }
      ],
      total: 4874872.814994637
    }
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping?` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.
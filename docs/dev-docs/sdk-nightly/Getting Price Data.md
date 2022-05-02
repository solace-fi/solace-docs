---
sidebar_position: 7
id: getting-price-data
title: Getting Price Data
---

To assist with getting price data, we have provided a **Price** class

---

## **Price methods**

### **Setup**
```js
import { Price } from "@solace-fi/sdk-nightly"
const price = new Price()
```

<br/>

### **getSolacePrice**

Gets SOLACE prices on Eth mainnet, Polygon and Aurora

```js
// ...setup Price object
console.log( await price.getSolacePrice() )
/*
  [
    { chainId: 1, price: 0.0398114313602152 },
    { chainId: 137, price: 0.03990537649540328 },
    { chainId: 1313161554, price: 0.03666540431705992 }
  ]
*/
```

#### Parameters

N/A

#### Returns

`Promise`<`{ chainId: number, price: number }[]`\>

<br/>

### **getMainnetPrices**

Gets price of ETH, WBTC, SOLACE, SCP and SOLACE-USDC SLP (excluding SOLACE component) on Ethereum mainnet. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// ...setup Price object
console.log( await price.getMainnetPrices() )
/*
    {
      eth: 2842.3197855134813,
      wbtc: 38936.647751241195,
      solace: 0.0398114313602152,
      scp: 2844.1875938918674,
      slp: 207206.19820182427
    }
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getPolygonPrices**

Gets price of ETH, WBTC, MATIC, SOLACE, and SOLACE-FRAX G-UNI (excluding SOLACE component) on Polygon network. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// ...setup Price object
console.log( await price.getPolygonPrices() )
/*
    {
      eth: 2845.207531828233,
      wbtc: 38953.14473772249,
      matic: 1.3080080627326722,
      solace: 0.03990537649540328,
      guni: 0.026390661369507486
    }
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getAuroraPrices**

Gets price of ETH, WBTC, WNEAR, AURORA, SOLACE, and SOLACE-WNEAR TLP (excluding SOLACE component) on Aurora network. Takes in an optional parameter for an object mapping chain ids to rpc urls.

```js
// ...setup Price object
console.log( await price.getAuroraPrices() )
/*
    {
      eth: 2859.3655001652764,
      wbtc: 38959.22472286852,
      wnear: 14.029875610250324,
      aurora: 9.156898734195197,
      solace: 0.036873279486734224,
      tlp: 0.0007284623005128459
    }
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpcUrlMapping` | `{ [chain: number]: string }` \| `undefined` |

#### Returns

`Promise`<`any`\>

<br/>

### **getCoinGeckoTokenPrices**

Gets price of DAI, USDC, USDT, FRAX, WBTC, WETH, WMATIC, AURORA, SOLACE, SLP, SCP and NEAR from CoinGecko

```js
// ...setup Price object
console.log( await price.getCoinGeckoTokenPrices() )
/*
    {
      dai: 1.001,
      usdc: 0.999701,
      usdt: 1,
      frax: 0.998959,
      wbtc: 38975,
      weth: 2845.08,
      wmatic: 1.31,
      aurora: 9.39,
      solace: 0.03779079,
      xsolace: -1,
      slp: -1,
      scp: -1,
      near: 14.06
    }
*/
```

#### Parameters

N/A

#### Returns

`Promise`<`any`>

<br/>
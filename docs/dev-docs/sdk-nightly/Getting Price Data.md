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
```

#### Parameters

N/A

#### Returns

`Promise`<`{ chainId: number, price: number }[]`\>

<br/>

### **getMainnetPrices**

Gets price of ETH, WBTC, SOLACE, SCP and SOLACE-USDC SLP (excluding SOLACE component) on Ethereum mainnet.

```js
// ...setup Price object
console.log( await price.getMainnetPrices() )
```

#### Parameters

N/A

#### Returns

`Promise`<`{'eth': ..., 'wbtc': ..., 'solace': ..., 'scp': ..., 'slp': ...}`\>

<br/>

### **getPolygonPrices**

Gets price of ETH, WBTC, MATIC, SOLACE, and SOLACE-FRAX G-UNI (excluding SOLACE component) on Polygon network.

```js
// ...setup Price object
console.log( await price.getPolygonPrices() )
```

#### Parameters

N/A

#### Returns

`Promise`<`{'eth': ..., 'wbtc': ..., 'matic': ..., 'solace': ..., 'guni': ...}`\>

<br/>

### **getAuroraPrices**

Gets price of ETH, WBTC, WNEAR, AURORA, SOLACE, and SOLACE-WNEAR TLP (excluding SOLACE component) on Aurora network.

```js
// ...setup Price object
console.log( await price.getAuroraPrices() )
```

#### Parameters

N/A

#### Returns

`Promise`<`{'eth': ..., 'wbtc': ..., 'wnear': ..., 'aurora': ..., 'solace': ..., 'tlp': ...}`\>

<br/>

### **getCoinGeckoTokenPrices**

Gets price of DAI, USDC, USDT, FRAX, WBTC, WETH, WMATIC, AURORA, SOLACE, SLP, SCP and NEAR from CoinGecko

```js
// ...setup Price object
console.log( await price.getCoinGeckoTokenPrices() )
```

#### Parameters

N/A

#### Returns

`Promise`<
`{
      dai: 1.001,
      usdc: 0.997916,
      usdt: 1,
      frax: 0.999771,
      wbtc: 41610,
      weth: 3085.99,
      wmatic: 1.43,
      aurora: 11.13,
      solace: 0.0415969,
      slp: -1,
      scp: -1,
      near: 16.46
    }`
\>

<br/>
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
console.log(await risk.getSolaceRiskBalances(policyholder, 1))
/*
    [
      {
        appId: 'compound',
        network: 'ethereum',
        balanceUSD: 16.46013232765837
      },
      {
        appId: 'convex',
        network: 'ethereum',
        balanceUSD: 575.2359587800225
      },
      {
        appId: 'looks-rare',
        network: 'ethereum',
        balanceUSD: 665.6112802819308
      },
      {
        appId: 'sushiswap',
        network: 'ethereum',
        balanceUSD: 0.8560935425574467
      },
      {
        appId: 'yearn',
        network: 'ethereum',
        balanceUSD: 0.018614111484113398
      }
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |
| `chainIdOrChains` | `number` \| `number[]` |

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
/*
    {
      address: '0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef',
      address_rp: 100.0938223538412,
      current_rate: 0.06857640176941736,
      timestamp: '2022/04/25, 06:53:41',
      protocols: [
        {
          appId: 'compound',
          network: 'ethereum',
          balanceUSD: 16.4601323277,
          category: 'lending',
          tier: 1,
          rol: 0.02,
          rrol: 0.0167,
          riskLoad: 0.2,
          'rp-usd': 0.2748842099,
          'risk-adj': 0.054976842
        },
        {
          appId: 'convex',
          network: 'ethereum',
          balanceUSD: 575.23595878,
          category: 'yield-aggregator',
          tier: 1,
          rol: 0.02,
          rrol: 0.0167,
          riskLoad: 0.2,
          'rp-usd': 9.6064405116,
          'risk-adj': 1.9212881023
        },
        {
          appId: 'looks-rare',
          network: 'ethereum',
          balanceUSD: 665.6112802819,
          category: 'unknown',
          tier: 3,
          rol: 0.0799,
          rrol: 0.0571,
          riskLoad: 0.4,
          'rp-usd': 38.0064041041,
          'risk-adj': 15.2025616416
        },
        {
          appId: 'sushiswap',
          network: 'ethereum',
          balanceUSD: 0.8560935426,
          category: 'liquidity-pool',
          tier: 1,
          rol: 0.02,
          rrol: 0.0167,
          riskLoad: 0.2,
          'rp-usd': 0.0142967622,
          'risk-adj': 0.0028593524
        },
        {
          appId: 'yearn',
          network: 'ethereum',
          balanceUSD: 0.0186141115,
          category: 'yield-aggregator',
          tier: 1,
          rol: 0.02,
          rrol: 0.0167,
          riskLoad: 0.2,
          'rp-usd': 0.0003108557,
          'risk-adj': 0.0000621711
        },
        {
          appId: 'aave-v3',
          network: 'polygon',
          balanceUSD: 200.4146795969,
          category: 'unknown',
          tier: 0,
          rol: 0.2,
          rrol: 0.1333,
          riskLoad: 0.5,
          'rp-usd': 26.7152767903,
          'risk-adj': 13.3576383951
        },
        {
          appId: 'pool-together',
          network: 'polygon',
          balanceUSD: 0.998959,
          category: 'other',
          tier: 3,
          rol: 0.0799,
          rrol: 0.0571,
          riskLoad: 0.4,
          'rp-usd': 0.0570405589,
          'risk-adj': 0.0228162236
        }
      ],
      metadata: {
        seriesName: 'Series 1.5',
        version: '0.0.1',
        dateCreated: '2022-03-10',
        provenance: 'ipfs://cid0000001'
      }
    }
*/
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
/*
    {
      metadata: {
        seriesName: 'Series 1.5',
        version: '0.0.1',
        dateCreated: '2022-03-10',
        provenance: 'ipfs://cid0000001'
      },
      function: {
        name: 'getScores',
        description: 'rating engine for soteria',
        provenance: 'ipfs://cid0000001'
      },
      data: {
        protocolMap: [
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object],
          ... 83 more items
        ],
        corrValue: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object]
        ],
        correlCat: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object]
        ],
        rateCard: [ [Object], [Object], [Object], [Object] ]
      }
    }

*/
```

#### Parameters

N/A

#### Returns

`Promise`<`SolaceRiskSeries | undefined | unknown`>

<br/>

### **getSolaceRiskPremium**

For a given account and chain, gets the annual premium due

```js
// ...setup risk object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await risk.getSolaceRiskPremium(policyholder, 1))
/*
    {
      chain_id: '1',
      account: '0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef',
      premium: 19.990994134083767
    }
*/
```

#### Parameters

| Name | Type |
| :------------- | :-------------------- |
| `address` | `string`              |
| `chainId`    | `number` |

#### Returns

`Promise`<`any`>

<br/>

### **getSolaceRiskTracks**

For a given account and chain, gets all tracking files for billing

```js
// ...setup risk object
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await risk.getSolaceRiskTracks(policyholder, 1))
/*
   {
      chain_id: '1',
      account: '0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef',
      scores: [
        {
          timestamp: '2022/04/22, 17:30:46',
          coverlimit: 8.06107418284392e+21,
          score: [Object]
        },
        ...
      ]
    }
*/
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
/*
    {
      chain_id: '1',
      billings: [
        {
          timestamp: '2022-02-20 15:30:42',
          premium: 1.5175625467102722,
          created_time: '2022/02/20, 18:31:30',
          charged: false,
          charged_time: '',
          address: '0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef'
        },
        ...
        ]
    }
*/
```

#### Parameters

| Name | Type |
| :------------- | :-------------------- |
| `address` | `string`              |
| `chainId`    | `number` |
| `category`    | `'paid'` \| `'unpaid'` \| `undefined` |

#### Returns

`Promise`<`any`>

<br/>

### **getSolaceRiskBillings_All**

For a given chain, get all billing data

```js
// ...setup risk object
console.log(await risk.getSolaceRiskBillings_All(1))
/*
{
      chain_id: '1',
      billings: [
        {
          timestamp: '2022-02-20 15:30:42',
          premium: 1.5175625467102722,
          created_time: '2022/02/20, 18:31:30',
          charged: false,
          charged_time: '',
          address: '0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef'
        },
        ...
      ]
}
*/
```

#### Parameters

| Name | Type |
| :------------- | :-------------------- |
| `chainId`    | `number` |

#### Returns

`Promise`<`any`>
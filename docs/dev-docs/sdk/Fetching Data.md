---
sidebar_position: 2
id: fetching-data
title: Fetching Data
urlcolor: blue
linkcolor: blue
---

To obtain blockchain state data such as the number of policies purchased, or total cover purchased, we will need to create a Fetcher instance.

The Fetcher constructor requires a single parameter - the **chainID** to connect to. 

> Current supported chains are:
> - Ethereum mainnet (ChainID = 1)
> - Rinkeby Testnet (ChainID = 4)
> - MATIC (ChainID = 137)
> - Mumbai testnet (ChainID = 80001)


## **Basic Example**

### Obtain total active cover sold on Ethereum mainnet
```js
import { Fetcher } from "@solace-fi/sdk"

// create Fetcher-class object connected to Ethereum mainnet
const fetcher = new Fetcher(1)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
console.log(await fetcher.activeCoverLimit())
```

---

## **Fetcher Methods**

> We use the [BigNumber](https://docs.ethers.io/v5/api/utils/bignumber/) type for mathematical safety.

> Financial amounts are denominated in USD to 18 decimal places (to have 1:1 correlation with DAI).

<br/>

### **activeCoverLimit**

Gets the total active cover that has been sold

```js
// ...setup fetcher object for Ethereum mainnet
console.log(await fetcher.activeCoverLimit()) // BigNumber { _hex: '0x13419b9a2817b2b8ca00', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **availableCoverCapacity**

Gets the amount of available remaining capacity for new cover

```js
// ...setup fetcher object for Ethereum mainnet
console.log(await fetcher.availableCoverCapacity()) // BigNumber { _hex: '0x13419b9a2817b2b8ca00', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **maxCover**

Gets the maximum amount of cover that can be sold

```js
// ...setup fetcher object for Ethereum mainnet
console.log(await fetcher.maxCover()) // BigNumber { _hex: '0x06fd5b6af9dd3e5d400000', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **policyCount**

Gets the total number of policies that have been purchased (includes inactive policies)

```js
// ...setup fetcher object for Ethereum mainnet
console.log(await fetcher.policyCount()) // BigNumber { _hex: '0x04', _isBigNumber: true }
```

#### Parameters

N/A

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **accountBalanceOf**

Gets the account balance (total USD deposited) for a policyholder

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await fetcher.accountBalanceOf(policyholder)) // BigNumber { _hex: '0x04e1003b28d9280000', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **coverLimitOf**

Gets the cover limit for a given policy ID

```js
// ...setup fetcher object for Ethereum mainnet
console.log(await fetcher.coverLimitOf(1)) // BigNumber { _hex: '0x01b4fde083e5241ba400', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `number` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **minRequiredAccountBalance**

Gets minimum required account balance for a given cover limit. Is equivalent to the maximum chargeable fee for one epoch.

```js
import { Fetcher, BigNumber } from "@solace-fi/sdk"
const fetcher = new Fetcher(1)
const coverLimit = BigNumber.from("1000000000000000000") //1 USD
console.log(await fetcher.minRequiredAccountBalance(coverLimit)) // BigNumber { _hex: '0x06d03c85a6c462', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `coverLimit` | `BigNumber` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **policyStatus**

For a given policy ID, returns:
- True if policy is active
- False if policy is inactive, or does not exist

```js
// ...setup fetcher object for Ethereum mainnet
console.log(await fetcher.policyStatus(1)) // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `number` |

#### Returns

`Promise`<`boolean`\>

<br/>

### **getPolicyChainInfo**

Returns array of chainIDs that the policy has been purchased for

```js
// ...setup fetcher object for Ethereum mainnet
console.log(await fetcher.getPolicyChainInfo(1)) // [ BigNumber { _hex: '0x89', _isBigNumber: true } ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyID` | `number` |

#### Returns

`Promise`<`boolean`\>

<br/>

### **policyOf**

Gets the policy ID for a policyholder

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await fetcher.policyOf(policyholder)) // BigNumber { _hex: '0x01', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **rewardPointsOf**

Gets the reward points balance for a policyholder

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await fetcher.rewardPointsOf(policyholder)) // BigNumber { _hex: '0x056bc75e2d63100000', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **premiumsPaidOf**

Gets the total historical premiums paid for a policyholder

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await fetcher.premiumsPaidOf(policyholder)) // BigNumber { _hex: '0x056bc75e2d63100000', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **cooldownStart**

Gets the cooldown start time for a policyholder. If cooldown has not been started, will return 0.

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await fetcher.cooldownStart(policyholder)) // BigNumber { _hex: '0x056bc75e2d63100000', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **isReferralCodeUsed**

For a given policyholder, returns:
- True if the policyholder has previously used a valid referral code
- False otherwise

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await fetcher.isReferralCodeUsed(policyholder)) // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`boolean`\>

<br/>

### **getReferrerFromReferralCode**

For a given referral code, returns the corresponding referrer address.
If the referral code is invalid, will return the zero address (0x0000000000000000000000000000000000000000).

```js
// ...setup fetcher object for Ethereum mainnet
const REFERRAL_CODE = "0x5406a8636b0cb38db066f2c87ea88d2d882d3407a5fdbba95cd70df2e43817a75643fa22feaf4b550f153d13c3f2eaa68626194291646b0fc1a06d6ca8c371001b"
console.log(await fetcher.getReferrerFromReferralCode(REFERRAL_CODE)) // 0x1e35c3a9493e6bab9C6c2Ee2181B08A845697Ee2
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `referralCode` | [`BytesLike`](https://docs.ethers.io/v5/api/utils/bytes/#BytesLike) |

#### Returns

`Promise`<`string`\>

<br/>

### **isReferralCodeValid**

For a given referral code, returns:
- True if a valid referral code is provided
- False otherwise

```js
// ...setup fetcher object for Ethereum mainnet
const REFERRAL_CODE = "0x5406a8636b0cb38db066f2c87ea88d2d882d3407a5fdbba95cd70df2e43817a75643fa22feaf4b550f153d13c3f2eaa68626194291646b0fc1a06d6ca8c371001b"
console.log(await fetcher.isReferralCodeValid(REFERRAL_CODE)) // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `referralCode` | [`BytesLike`](https://docs.ethers.io/v5/api/utils/bytes/#BytesLike) |

#### Returns

`Promise`<`boolean`\>

<br/>

### **getSolaceRiskBalances**

Gets DeFi protocol balances (in USD) for a given address

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await fetcher.getSolaceRiskBalances(policyholder))
/**
    [
      {
        appId: 'compound',
        network: 'ethereum',
        balanceUSD: 17.988592754286348,
      },
      {
        appId: 'convex',
        network: 'ethereum',
        balanceUSD: 487.5960813173196,
      },
      {
        appId: 'sushiswap',
        network: 'ethereum',
        balanceUSD: 0.9045516676078682,
      },
      {
        appId: 'yearn',
        network: 'ethereum',
        balanceUSD: 4859.636427714279,
      }
    ]
 */
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |

#### Returns

`Promise`<`SolaceRiskBalance[] | undefined | unknown` >

<br/>

### **getSolaceRiskBalances_MultiChain**

Gets DeFi protocol balances (in USD) for a given address, for selected chainIDs

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
console.log(await fetcher.getSolaceRiskBalances_MultiChain(policyholder, [1, 137]))
/**
    [
      {
        appId: 'compound',
        network: 'ethereum',
        balanceUSD: 14.320399484664346
      },
      {
        appId: 'convex',
        network: 'ethereum',
        balanceUSD: 411.67909240375553
      },
      {
        appId: 'sushiswap',
        network: 'ethereum',
        balanceUSD: 0.7564851743982469
      },
      {
        appId: 'yearn',
        network: 'ethereum',
        balanceUSD: 3679.572983612748
      },
      {
        appId: 'sushiswap',
        network: 'polygon',
        balanceUSD: 7.831668609378035
      }
    ]
 */
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyholder` | `string` |
| `chains` | `number[]` |

#### Returns

`Promise`<`SolaceRiskBalance[] | undefined | unknown` >

<br/>

### **getSolaceRiskScores**

Gets risk scores for a portfolio

```js
// ...setup fetcher object for Ethereum mainnet
const policyholder = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const riskBalances: any = await fetcher.getSolaceRiskBalances(policyholder)
console.log(await fetcher.getSolaceRiskScores(policyholder, riskBalances))
/**
  {
      address: '0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef',
      address_rp: 106.73638541642865, // Annual risk premium in USD
      current_rate: 0.01989090039148291, // Annual risk premium as % of total portfolio
      timestamp: '2022/02/28, 21:15:19',
      protocols: [
        {
          appId: 'compound',
          network: 'ethereum',
          balanceUSD: 18.0134824638,
          category: 'lending',
          tier: 1,
          rol: 0.02, // Annual risk premium as % of portfolio
          rrol: 0.0167, // rol / (1 - riskload)
          riskLoad: 0.2, // Relative weight of protocool, set by governance
          'rp-usd': 0.3008251571,
          'risk-adj': 0.0601650314
        },
        {
          appId: 'convex',
          network: 'ethereum',
          balanceUSD: 487.5367313982,
          category: 'yield-aggregator',
          tier: 1,
          rol: 0.02,
          rrol: 0.0167,
          riskLoad: 0.2,
          'rp-usd': 8.1418634144,
          'risk-adj': 1.6283726829
        },
        {
          appId: 'sushiswap',
          network: 'ethereum',
          balanceUSD: 0.9045516676,
          category: 'liquidity-pool',
          tier: 1,
          rol: 0.02,
          rrol: 0.0167,
          riskLoad: 0.2,
          'rp-usd': 0.0151060128,
          'risk-adj': 0.0030212026
        },
        {
          appId: 'yearn',
          network: 'ethereum',
          balanceUSD: 4859.6364277143,
          category: 'yield-aggregator',
          tier: 1,
          rol: 0.02,
          rrol: 0.0167,
          riskLoad: 0.2,
          'rp-usd': 81.1559283428,
          'risk-adj': 16.2311856686
        }
      ],
      metadata: {
        seriesName: 'Series 1.3',
        version: '0.0.1',
        dateCreated: '2022-02-15',
        provenance: 'testing-data'
      }
    }
 * /
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
// ...setup fetcher object for Ethereum mainnet
console.log(await fetcher.getSolaceRiskSeries())
/**
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
 * /
```

#### Parameters

N/A

#### Returns

`Promise`<`SolaceRiskSeries | undefined | unknown` >
<br/>

---

## **Using a Custom Provider**

A provider is needed to connect to (and make read-only calls) to the blockchain.


By default, the Fetcher object will use the [Default Provider](https://docs.ethers.io/v5/api/providers/#providers-getDefaultProvider) provided by ethers.js. Frequent use of the default provider will result in the following warning message:


```
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
```

To avoid this, the Fetcher constructor has an optional parameter to provide a custom provider. We have also provided a [`getProvider`](./helper-methods#getprovider) helper method to make it easier to create a custom provider.

<br/>

### Use custom RPC URL

```js
import { Fetcher, solaceUtils } from "@solace-fi/sdk"
const { getProvider } = solaceUtils

const url = <RPC_URL>
const provider = getProvider(url)

// Create new Fetcher-class object connected to Ethereum mainnet and custom RPC endpoint
const fetcher = new Fetcher(1, provider)
```

<br/>

---

## ** More information**

[Click here](../Contracts/products/SolaceCoverProduct.md) for more information on smart contract mechanisms

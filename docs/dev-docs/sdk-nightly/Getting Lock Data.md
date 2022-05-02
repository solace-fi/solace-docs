---
sidebar_position: 9
id: getting-lock-data
title: Getting Lock Data
---

To assist with getting lock (i.e. single stake SOLACE) data, we have provided a **Lock** class

The Lock constructor takes in two parameters, where **chainId** is required while **provider** is optional:

1. The **chainId** to connect to

Current supported chains are:
- Ethereum mainnet (ChainID = 1)
- Rinkeby Testnet (ChainID = 4)
- Kovan Testnet (ChainID = 42)
- MATIC (ChainID = 137)
- Mumbai testnet (ChainID = 80001)
- Aurora (ChainID = 1313161554)
- Aurora testnet (ChainID = 1313161555)

2. **provider** is an object of three types from ethers ([**Provider**](https://docs.ethers.io/v5/api/providers/provider/)).

---

## **Lock methods**

### **Setup**
```js
import { Lock } from "@solace-fi/sdk-nightly"
const lock = new Lock(1) // Provide chainId parameter
```

<br/>

### **getXsLocker**

Gets individual data on all locks across all supported chains

```js
// Create lock object
console.log( await lock.getXsLocker() )
/*
    {
      '1': [
        {
          xslockID: '1',
          owner: '0xA400f843f0E577716493a3B0b8bC654C6EE8a8A3',
          amount: '916904261316055263607573',
          end: '1769370765'
        },
        ...
        ],
      '137': [...]
      '1313161554': [...]
    }
*/
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

### **getVotePowerByAccount**

Gets list of each address paired with amount of votePower

```js
// Create lock object
console.log( await lock.votePower() )
/*
    [
      {
        name: '0xA400f843f0E577716493a3B0b8bC654C6EE8a8A3',
        votePower: '4974775.91455484616793361'
      },
      ...
    ]
*/
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

### **getGlobalLockStats**

Gets global lock statistics

```js
// Create lock object
console.log( await lock.GlobalLockStats() )
/*
    {
      solaceStaked: '5992597.768357683355105539',
      valueStaked: '8815566.354608624324505713',
      numLocks: '84',
      apr: '166',
      rewardPerSecond: '0.317097919837645865',
      successfulFetch: true
    }
*/
```

#### Parameters

N/A

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.

<br/>

### **getUserLocks**

Gets individual data for each lock for a given address

```js
// Create lock object
console.log( await lock.getUserLocks('0x9a1768f92c57e7b0f609364185c92404049f4f3b') )
/*
    {
      user: {
        pendingRewards: BigNumber { _hex: '0x46ef28b27531e689fa', _isBigNumber: true },
        stakedBalance: BigNumber { _hex: '0x06f73da42ac20cee4ddd', _isBigNumber: true },
        lockedBalance: BigNumber { _hex: '0x06f73da42ac20cee4ddd', _isBigNumber: true },
        unlockedBalance: BigNumber { _hex: '0x00', _isBigNumber: true },
        yearlyReturns: BigNumber { _hex: '0x098745ae66faf2000307', _isBigNumber: true },
        apr: BigNumber { _hex: '0x88', _isBigNumber: true }
      },
      locks: [
        {
          xsLockID: [BigNumber],
          unboostedAmount: [BigNumber],
          end: [BigNumber],
          timeLeft: [BigNumber],
          boostedValue: [BigNumber],
          pendingRewards: [BigNumber],
          apr: [BigNumber]
        },
        {
          xsLockID: [BigNumber],
          unboostedAmount: [BigNumber],
          end: [BigNumber],
          timeLeft: [BigNumber],
          boostedValue: [BigNumber],
          pendingRewards: [BigNumber],
          apr: [BigNumber]
        },
        {
          xsLockID: [BigNumber],
          unboostedAmount: [BigNumber],
          end: [BigNumber],
          timeLeft: [BigNumber],
          boostedValue: [BigNumber],
          pendingRewards: [BigNumber],
          apr: [BigNumber]
        }
      ],
      successfulFetch: true
    }
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.

<br/>

### **getUserLockerBalances**

Gets balances of staked, locked and unlocked SOLACE for a given address

```js
// Create lock object
console.log( await lock.getUserLockerBalances('0x9a1768f92c57e7b0f609364185c92404049f4f3b') )
/*
    {
      stakedBalance: '32894.986405569553649117',
      lockedBalance: '32894.986405569553649117',
      unlockedBalance: '0.0'
    }
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`any`\>

<br/>

#### Warning

This function will occasionally time-out (take >30s to return), especially with the default ethers.js provider. Use a custom provider to alleviate this issue.

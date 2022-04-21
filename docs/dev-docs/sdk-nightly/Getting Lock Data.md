---
sidebar_position: 9
id: getting-lock-data
title: Getting Lock Data
---

To assist with getting lock (i.e. single stake SOLACE) data, we have provided a **Lock** class

---

## **Lock methods**

### **Setup**
```js
import { Lock } from "@solace-fi/sdk-nightly"
const lock = new Lock(1) // Provide chainId parameter
```

Current supported chains are:
- Ethereum mainnet (ChainID = 1)
- Rinkeby Testnet (ChainID = 4)
- MATIC (ChainID = 137)
- Mumbai testnet (ChainID = 80001)
- Aurora (ChainID = 1313161554)
- Aurora testnet (ChainID = 1313161555)

<br/>

### **getXsLocker**

Gets individual data on all locks across all supported chains

```js
// Create lock object
console.log( await lock.getXsLocker() )
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

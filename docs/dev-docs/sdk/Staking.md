---
sidebar_position: 6
id: staking
title: Staking
---

The SDK provides a **Staker** class to interact with SOLACE staking. **Staker** methods are wrappers around [`xsLocker.sol`](../Contracts/staking/xsLocker) and [`StakingRewards.sol`](../Contracts/staking/StakingRewards) functions.

The same syntax for creating the [`PolicyHolder`](./sending-transactions) object will apply for the Staker object.

<br/>

---

## **Basic Examples**

### Obtaining information on a staked position on Matic
```js
import { solaceUtils, Staker } from "@solace-fi/sdk"
const signer = await getSigner()
const staker = new Staker(137, signer)
const stakingInfo = await staker.locks(1)
console.log(stakingInfo)
```

<br/>

### Staking on Matic, using a custom private key in a Node.js script
```js
import { solaceUtils, Staker, Wallet, providers } from "@solace-fi/sdk"

const provider = new providers.getDefaultProvider('mainnet')
const signer = new Wallet(<PRIVATE_KEY>, provider)
const staker = new Staker(137, signer)
await staker.createLock(
    <STAKER_ADDRESS>, 
    <DESIRED_STAKE_AMOUNT>, 
    <LOCK_ENDTIME>
)
```

<br/>

---

## **Staker Read-only Methods**

<br/>

### **locks**

Gets information about a lock

```js
// ...setup staker object for Ethereum mainnet
console.log(await staker.locks(1))
/*
    [
      BigNumber { _hex: '0xc2297ac753f905b7fb15', _isBigNumber: true },
      BigNumber { _hex: '0x6976748d', _isBigNumber: true },
      amount: BigNumber { _hex: '0xc2297ac753f905b7fb15', _isBigNumber: true },
      end: BigNumber { _hex: '0x6976748d', _isBigNumber: true }
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `xsLockID` | `number` |

#### Returns

`Promise`<`any`\>

<br/>

### **isLocked**

Returns true if a lock is locked, false otherwise

```js
// ...setup staker object for Ethereum mainnet
console.log(await staker.isLocked(1)) // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `xsLockID` | `number` |

#### Returns

`Promise`<`boolean`\>

<br/>

### **timeLeft**

Returns time left (in seconds) until a lock unlocks

```js
// ...setup staker object for Ethereum mainnet
console.log(await staker.timeLeft(1)) // BigNumber { _hex: '0x0747d584', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `xsLockID` | `number` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **stakedBalance**

Returns amount of SOLACE a user has staked

```js
// ...setup staker object for Ethereum mainnet
const STAKER_ADDRESS = "0xA400f843f0E577716493a3B0b8bC654C6EE8a8A3"
console.log(await staker.stakedBalance(STAKER_ADDRESS)) // BigNumber { _hex: '0xc2297ac753f905b7fb15', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

### **stakedLockInfo**

Gets information on a specified lock

```js
// ...setup staker object for Ethereum mainnet
console.log(await staker.stakedLockInfo(1))
/*
    [
      BigNumber { _hex: '0x01e26e1dc7ab3f8b1e0bd0', _isBigNumber: true },
      BigNumber { _hex: '0x408dd4ebfa953f433cbb', _isBigNumber: true },
      BigNumber { _hex: '0x00', _isBigNumber: true },
      '0xA400f843f0E577716493a3B0b8bC654C6EE8a8A3',
      value: BigNumber { _hex: '0x01e26e1dc7ab3f8b1e0bd0', _isBigNumber: true },
      rewardDebt: BigNumber { _hex: '0x408dd4ebfa953f433cbb', _isBigNumber: true },
      unpaidRewards: BigNumber { _hex: '0x00', _isBigNumber: true },
      owner: '0xA400f843f0E577716493a3B0b8bC654C6EE8a8A3'
    ]
*/
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `xsLockID` | `number` |

#### Returns

`Promise`<`any`\>

<br/>

### **pendingRewardsOfLock**

Calculate pending SOLACE reward for a specified lock

```js
// ...setup staker object for Ethereum mainnet
console.log(await staker.pendingRewardsOfLock(1)) // BigNumber { _hex: '0x3abf3a3293740e059bc9', _isBigNumber: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `xsLockID` | `number` |

#### Returns

`Promise`<`BigNumber`\>

<br/>

---

## **Staker Blockchain-Mutator Methods**

<br/>

### **createLock**

Deposit SOLACE to create a new lock, assumes SOLACE already approved

```js
// ...setup staker object
const STAKER_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 USD
const END_TIME = BigNumber.from("0")

let tx = await staker.createLock(
    STAKER_ADDRESS,
    DEPOSIT_AMOUNT,
    END_TIME
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | `string` | Account that will receive the lock.
|`amount` | `BigNumber` | The amount of SOLACE to deposit.
|`end` | `BigNumber` | The timestamp the lock will unlock, use end = 0 to initialize as unlocked.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **createLockSigned**

Deposit SOLACE to create a new lock, uses EIP-712 signature to perform approval in same transaction

```js
// ...setup staker object
const STAKER_ADDRESS = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 USD
const END_TIME = BigNumber.from("0")
const DEADLINE = BigNumber.from("1657223379")
const v = "0x1c"
const r = "0x4cddf146c578d20a31fa6128e5d9afe6ac666e5ef5899f2767cacb56a42703cc"
const s = "0x3847036857aa3f077a2e142eee707e5af2653baa99b9d10764a0be3d61595dbb"

let tx = await staker.createLockSigned(
    STAKER_ADDRESS,
    DEPOSIT_AMOUNT,
    END_TIME,
    DEADLINE,
    v,
    r,
    s
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | `string` | Account that will receive the lock.
|`amount` | `BigNumber` | The amount of SOLACE to deposit.
|`end` | `BigNumber` | The timestamp the lock will unlock, use end = 0 to initialize as unlocked.
|`deadline` | `BigNumber` | Time the transaction must go through before.
|`v` | `utils.BytesLike` | secp256k1 signature.
|`r` | `utils.BytesLike` | secp256k1 signature.
|`s` | `utils.BytesLike` | secp256k1 signature.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **increaseAmount**

Deposit more SOLACE to an existing lock

```js
// ...setup staker object
const xsLockID = 1
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 USD

let tx = await staker.increaseAmount(
    xsLockID,
    DEPOSIT_AMOUNT
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | `string` | The ID of the lock to update.
|`amount` | `BigNumber` | The amount of SOLACE to deposit.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **increaseAmountSigned**

Deposit more SOLACE to an existing lock, uses EIP-712 signature to perform approval in same transaction

```js
// ...setup staker object
const xsLockID = 1
const DEPOSIT_AMOUNT = BigNumber.from("200000000000000000000") // 200 USD
const DEADLINE = BigNumber.from("1657223379")
const v = "0x1c"
const r = "0x4cddf146c578d20a31fa6128e5d9afe6ac666e5ef5899f2767cacb56a42703cc"
const s = "0x3847036857aa3f077a2e142eee707e5af2653baa99b9d10764a0be3d61595dbb"

let tx = await staker.increaseAmountSigned(
    xsLockID,
    DEPOSIT_AMOUNT,
    DEADLINE,
    v,
    r,
    s
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | `string` | The ID of the lock to update.
|`amount` | `BigNumber` | The amount of SOLACE to deposit.
|`deadline` | `BigNumber` | Time the transaction must go through before.
|`v` | `utils.BytesLike` | secp256k1 signature.
|`r` | `utils.BytesLike` | secp256k1 signature.
|`s` | `utils.BytesLike` | secp256k1 signature.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **extendLock**

Extend a lock's duration. Can only be called by the lock owner or approved.

```js
// ...setup staker object
const xsLockID = 1
const DESIRED_END_TIME = BigNumber.from("1710382222")

let tx = await staker.extendLock(
    xsLockID,
    DESIRED_END_TIME
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | `string` | The ID of the lock to update.
|`end` | `BigNumber` | The new time for the lock to unlock.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **withdraw**

Withdraw from a lock in full. 

Can only be called by the lock owner or approved. Can only be called if unlocked.

```js
// ...setup staker object
const xsLockID = 1
const DESIRED_RECIPIENT = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"

let tx = await staker.withdraw(
    xsLockID,
    DESIRED_RECIPIENT
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | `number` | The ID of the lock to withdraw from.
|`recipient` | `string` | The user to receive the lock's SOLACE.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **withdrawInPart**

Withdraw from a lock in part.

Can only be called by the lock owner or approved. Can only be called if unlocked.

```js
// ...setup staker object
const xsLockID = 1
const DESIRED_RECIPIENT = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"
const DESIRED_AMOUNT = BigNumber.from("100")

let tx = await staker.withdraw(
    xsLockID,
    DESIRED_RECIPIENT,
    DESIRED_AMOUNT
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | `number` | The ID of the lock to withdraw from.
|`recipient` | `string` | The user to receive the lock's SOLACE.
|`amount` | `string` | The amount of SOLACE to withdraw.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **withdrawMany**

Withdraw from a multiple locks in full.

Can only be called by the lock owner or approved. Can only be called if unlocked.

```js
// ...setup staker object
const xsLockIDs = [1, 2]
const DESIRED_RECIPIENT = "0xfb5cAAe76af8D3CE730f3D62c6442744853d43Ef"

let tx = await staker.withdraw(
    xsLockIDs,
    DESIRED_RECIPIENT
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockIDs` | `number[]` | The ID of the locks to withdraw from.
|`recipient` | `string` | The user to receive the lock's SOLACE.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **harvestLock**

Updates a specified lock, and sends pending rewards to the lock's owner

```js
// ...setup staker object
const xsLockID = 1

let tx = await staker.harvestLock(
    xsLockID,
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | `number` | The ID of the lock to process rewards for.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **harvestLocks**

Updates specified locks, and sends pending rewards to the locks' owner

```js
// ...setup staker object
const xsLockIDs = [1, 2]

let tx = await staker.harvestLock(
    xsLockIDs,
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockIDs` | `number[]` | The IDs of the locks to process rewards for.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **compoundLock**

Deposits pending rewards for a lock, into the lock. Effectively compounds the lock's balance with pending rewards.

Can only be called by the owner of the lock.

```js
// ...setup staker object
const xsLockID = 1

let tx = await staker.compoundLock(
    xsLockID,
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | `number` | The ID of the lock to compound rewards for.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>

<br/>

### **compoundLocks**

Deposits pending rewards for multiple specified locks, into the locks. Effectively compounds the locks' balance with pending rewards.

Can only be called by the owner of the locks.

```js
// ...setup staker object
const xsLockIDs = [1, 2]

let tx = await staker.compoundLock(
    xsLockIDs,
)
```

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockIDs` | `number[]` | The IDs of the locks to compound rewards for.
|`gasConfig?` | [`GasConfiguration`](./helper-methods#getgassettings) | (Optional) Gas configuration settings.

#### Returns

`Promise`<`TransactionResponse`\>
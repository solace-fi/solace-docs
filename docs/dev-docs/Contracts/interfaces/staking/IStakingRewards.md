<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/staking/IStakingRewards.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Rewards users for staking in [`xsLocker`](./../../staking/xsLocker).

Deposits and withdrawls are made to [`xsLocker`](./../../staking/xsLocker) and rewards come from `StakingRewards`. All three are paid in [**SOLACE**](./../../SOLACE). `StakingRewards` will be registered as an [`xsListener`](./IxsListener). Any time a lock is updated [`registerLockEvent()`](#registerlockevent) will be called and the staking information of that lock will be updated.

Over the course of `startTime` to `endTime`, the farm distributes `rewardPerSecond` [**SOLACE**](./../../SOLACE) to all lock holders split relative to the value of their locks. The base value of a lock is its `amount` of [**SOLACE**](./../../SOLACE). Its multiplier is 2.5x when `end` is 4 years from now, 1x when unlocked, and linearly decreasing between the two. The value of a lock is its base value times its multiplier.

Note that transferring [**SOLACE**](./../../SOLACE) to this contract will not give you any rewards. You should deposit your [**SOLACE**](./../../SOLACE) into [`xsLocker`](./../../staking/xsLocker) via `createLock()`.


Lock information is stored in [`xsLocker`](./../../staking/xsLocker) and mirrored here for bookkeeping and efficiency. Should that information differ, [`xsLocker`](./../../staking/xsLocker) is the ground truth and this contract will attempt to sync with it.

## Functions
### MAX_LOCK_DURATION
```solidity
  function MAX_LOCK_DURATION(
  ) external returns (uint256)
```
The maximum duration of a lock in seconds.



### MAX_LOCK_MULTIPLIER_BPS
```solidity
  function MAX_LOCK_MULTIPLIER_BPS(
  ) external returns (uint256)
```
The vote power multiplier at max lock in bps.



### UNLOCKED_MULTIPLIER_BPS
```solidity
  function UNLOCKED_MULTIPLIER_BPS(
  ) external returns (uint256)
```
The vote power multiplier when unlocked in bps.



### solace
```solidity
  function solace(
  ) external returns (address)
```
[**SOLACE**](./../../SOLACE) token.



### xsLocker
```solidity
  function xsLocker(
  ) external returns (address)
```
The [`xsLocker`](./../../staking/xsLocker) contract.



### rewardPerSecond
```solidity
  function rewardPerSecond(
  ) external returns (uint256)
```
Amount of [**SOLACE**](./../../SOLACE) distributed per second.



### startTime
```solidity
  function startTime(
  ) external returns (uint256)
```
When the farm will start.



### endTime
```solidity
  function endTime(
  ) external returns (uint256)
```
When the farm will end.



### lastRewardTime
```solidity
  function lastRewardTime(
  ) external returns (uint256)
```
Last time rewards were distributed or farm was updated.



### accRewardPerShare
```solidity
  function accRewardPerShare(
  ) external returns (uint256)
```
Accumulated rewards per share, times 1e12.



### valueStaked
```solidity
  function valueStaked(
  ) external returns (uint256)
```
Value of tokens staked by all farmers.



### stakedLockInfo
```solidity
  function stakedLockInfo(
  ) external returns (struct IStakingRewards.StakedLockInfo)
```
Information about each lock.

lock id => lock info


### pendingRewardsOfLock
```solidity
  function pendingRewardsOfLock(
    uint256 xsLockID
  ) external returns (uint256 reward)
```
Calculates the accumulated balance of [**SOLACE**](./../../SOLACE) for specified lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | uint256 | The ID of the lock to query rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`reward`| uint256 | Total amount of withdrawable reward tokens.
### getRewardAmountDistributed
```solidity
  function getRewardAmountDistributed(
    uint256 from,
    uint256 to
  ) external returns (uint256 amount)
```
Calculates the reward amount distributed between two timestamps.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`from` | uint256 | The start of the period to measure rewards for.
|`to` | uint256 | The end of the period to measure rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The reward amount distributed in the given period.
### update
```solidity
  function update(
  ) external
```
Updates staking information.



### harvestLock
```solidity
  function harvestLock(
    uint256 xsLockID
  ) external
```
Updates and sends a lock's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | uint256 | The ID of the lock to process rewards for.

### harvestLocks
```solidity
  function harvestLocks(
    uint256[] xsLockIDs
  ) external
```
Updates and sends multiple lock's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockIDs` | uint256[] | The IDs of the locks to process rewards for.

### compoundLock
```solidity
  function compoundLock(
    uint256 xsLockID
  ) external
```
Withdraws a lock's rewards and deposits it back into the lock.
Can only be called by the owner of the lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | uint256 | The ID of the lock to compound.

### compoundLocks
```solidity
  function compoundLocks(
    uint256[] xsLockIDs,
    uint256 increasedLockID
  ) external
```
Withdraws multiple lock's rewards and deposits it into lock.
Can only be called by the owner of the locks.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockIDs` | uint256[] | The ID of the locks to compound.
|`increasedLockID` | uint256 | The ID of the lock to deposit into.

### setRewards
```solidity
  function setRewards(
    uint256 rewardPerSecond_
  ) external
```
Sets the amount of [**SOLACE**](./../../SOLACE) to distribute per second.
Only affects future rewards.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`rewardPerSecond_` | uint256 | Amount to distribute per second.

### setTimes
```solidity
  function setTimes(
    uint256 startTime_,
    uint256 endTime_
  ) external
```
Sets the farm's start and end time. Used to extend the duration.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`startTime_` | uint256 | The new start time.
|`endTime_` | uint256 | The new end time.

### rescueTokens
```solidity
  function rescueTokens(
    address token,
    uint256 amount,
    address receiver
  ) external
```
Rescues tokens that may have been accidentally transferred in.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | The token to rescue.
|`amount` | uint256 | Amount of the token to rescue.
|`receiver` | address | Account that will receive the tokens.

## Events
### Updated
```solidity
  event Updated(
  )
```
Emitted when the global information is updated.


### LockUpdated
```solidity
  event LockUpdated(
  )
```
Emitted when a locks information is updated.


### RewardsSet
```solidity
  event RewardsSet(
  )
```
Emitted when the reward rate is set.


### FarmTimesSet
```solidity
  event FarmTimesSet(
  )
```
Emitted when the farm times are set.



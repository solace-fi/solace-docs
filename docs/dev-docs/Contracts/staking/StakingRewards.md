Rewards users for staking in [`xsLocker`](./xsLocker).

Deposits and withdrawls are made to [`xsLocker`](./xsLocker) and rewards come from `StakingRewards`. All three are paid in [**SOLACE**](./../SOLACE). `StakingRewards` will be registered as an [`xsListener`](./../interfaces/staking/IxsListener). Any time a lock is updated [`registerLockEvent()`](#registerlockevent) will be called and the staking information of that lock will be updated.

Over the course of `startTime` to `endTime`, the farm distributes `rewardPerSecond` [**SOLACE**](./../SOLACE) to all lock holders split relative to the value of their locks. The base value of a lock is its `amount` of [**SOLACE**](./../SOLACE). Its multiplier is 2.5x when `end` is 4 years from now, 1x when unlocked, and linearly decreasing between the two. The value of a lock is its base value times its multiplier.

Note that transferring [**SOLACE**](./../SOLACE) to this contract will not give you any rewards. You should deposit your [**SOLACE**](./../SOLACE) into [`xsLocker`](./xsLocker) via `createLock()`.


Lock information is stored in [`xsLocker`](./xsLocker) and mirrored here for bookkeeping and efficiency. Should that information differ, [`xsLocker`](./xsLocker) is the ground truth and this contract will attempt to sync with it.

## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address solace_,
    address xsLocker_,
    uint256 rewardPerSecond_
  ) public
```
Constructs the StakingRewards contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`solace_` | address | Address of [**SOLACE**](./../SOLACE).
|`xsLocker_` | address | Address of the [**xsLocker**](./xsLocker) contract.
|`rewardPerSecond_` | uint256 | The amount of [**SOLACE**](./../SOLACE) to distribute per second.

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
Calculates the accumulated balance of [**SOLACE**](./../SOLACE) for specified lock.


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
  ) public returns (uint256 amount)
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
### registerLockEvent
```solidity
  function registerLockEvent(
    uint256 xsLockID,
    address oldOwner,
    address newOwner,
    struct Lock oldLock,
    struct Lock newLock
  ) external
```
Called when an action is performed on a lock.

Called on transfer, mint, burn, and update.
Either the owner will change or the lock will change, not both.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | uint256 | The ID of the lock that was altered.
|`oldOwner` | address | The old owner of the lock.
|`newOwner` | address | The new owner of the lock.
|`oldLock` | struct Lock | The old lock data.
|`newLock` | struct Lock | The new lock data.

### update
```solidity
  function update(
  ) public
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

### _harvest
```solidity
  function _harvest(
    uint256 xsLockID
  ) internal
```
Updates and sends a lock's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | uint256 | The ID of the lock to process rewards for.

### _updateLock
```solidity
  function _updateLock(
    uint256 xsLockID
  ) internal returns (uint256 transferAmount, address receiver)
```
Updates and returns a lock's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | uint256 | The ID of the lock to process rewards for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`transferAmount`| uint256 | The amount of [**SOLACE**](./../SOLACE) to transfer to the receiver.
|`receiver`| address | The user to receive the [**SOLACE**](./../SOLACE).
### _fetchLockInfo
```solidity
  function _fetchLockInfo(
    uint256 xsLockID
  ) internal returns (bool exists, address owner, struct Lock lock)
```
Fetches up to date information about a lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | uint256 | The ID of the lock to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`exists`| bool | True if the lock exists.
|`owner`| address | The owner of the lock or the zero address if it doesn't exist.
|`lock`| struct Lock | The lock itself.
### _calculateLockValue
```solidity
  function _calculateLockValue(
    uint256 amount,
    uint256 end
  ) internal returns (uint256 value)
```
Calculates the value of a lock.
The base value of a lock is its `amount` of [**SOLACE**](./../SOLACE). Its multiplier is 2.5x when `end` is 4 years from now, 1x when unlocked, and linearly decreasing between the two. The value of a lock is its base value times its multiplier.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) in the lock.
|`end` | uint256 | The unlock timestamp of the lock.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The boosted value of the lock.
### setRewards
```solidity
  function setRewards(
    uint256 rewardPerSecond_
  ) external
```
Sets the amount of [**SOLACE**](./../SOLACE) to distribute per second.
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


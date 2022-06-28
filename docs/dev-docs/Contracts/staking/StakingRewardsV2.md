<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/staking/StakingRewardsV2.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Rewards users for staking in [`xsLocker`](./xsLocker).

Deposits and withdrawls are made to [`xsLocker`](./xsLocker) and rewards come from `StakingRewardsV2`. All three are paid in [**SOLACE**](./../SOLACE). `StakingRewardsV2` will be registered as an [`xsListener`](./../interfaces/staking/IxsListener). Any time a lock is updated [`registerLockEvent()`](#registerlockevent) will be called and the staking information of that lock will be updated.

Over the course of `startTime` to `endTime`, the farm distributes `rewardPerSecond` [**SOLACE**](./../SOLACE) to all lock holders split relative to the value of their locks. The base value of a lock is its `amount` of [**SOLACE**](./../SOLACE). Its multiplier is 2.5x when `end` is 4 years from now, 1x when unlocked, and linearly decreasing between the two. The value of a lock is its base value times its multiplier.

Note that transferring [**SOLACE**](./../SOLACE) to this contract will not give you any rewards. You should deposit your [**SOLACE**](./../SOLACE) into [`xsLocker`](./xsLocker) via `createLock()`.


Lock information is stored in [`xsLocker`](./xsLocker) and mirrored here for bookkeeping and efficiency. Should that information differ, [`xsLocker`](./xsLocker) is the ground truth and this contract will attempt to sync with it.

## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_
  ) public
```
Constructs the StakingRewardsV2 contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `governance_` | address | The address of the [governor](/docs/protocol/governance). |
| `registry_` | address | The [`Registry`](./Registry) contract address. |

### stakedLockInfo
```solidity
  function stakedLockInfo(
  ) external returns (struct IStakingRewardsV2.StakedLockInfo)
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
| `xsLockID` | uint256 | The ID of the lock to query rewards for. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `reward` | uint256 | Total amount of withdrawable reward tokens. |

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
| `from` | uint256 | The start of the period to measure rewards for. |
| `to` | uint256 | The end of the period to measure rewards for. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amount` | uint256 | The reward amount distributed in the given period. |

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
| `xsLockID` | uint256 | The ID of the lock that was altered. |
| `oldOwner` | address | The old owner of the lock. |
| `newOwner` | address | The new owner of the lock. |
| `oldLock` | struct Lock | The old lock data. |
| `newLock` | struct Lock | The new lock data. |

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
| `xsLockID` | uint256 | The ID of the lock to process rewards for. |

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
| `xsLockIDs` | uint256[] | The IDs of the locks to process rewards for. |

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
| `xsLockID` | uint256 | The ID of the lock to compound. |

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
| `xsLockIDs` | uint256[] | The ID of the locks to compound. |
| `increasedLockID` | uint256 | The ID of the lock to deposit into. |

### harvestLockForScp
```solidity
  function harvestLockForScp(
    uint256 xsLockID,
    uint256 price,
    uint256 priceDeadline,
    bytes signature
  ) external
```
Updates and sends a lock's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to process rewards for. |
| `price` | uint256 | The `SOLACE` price in wei(usd). |
| `priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `signature` | bytes | The `SOLACE` price signature. |

### harvestLocksForScp
```solidity
  function harvestLocksForScp(
    uint256[] xsLockIDs,
    uint256 price,
    uint256 priceDeadline,
    bytes signature
  ) external
```
Updates and sends multiple lock's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockIDs` | uint256[] | The IDs of the locks to process rewards for. |
| `price` | uint256 | The `SOLACE` price in wei(usd). |
| `priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `signature` | bytes | The `SOLACE` price signature. |

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
| `xsLockID` | uint256 | The ID of the lock to process rewards for. |

### _harvestForScp
```solidity
  function _harvestForScp(
    uint256 xsLockID,
    uint256 price,
    uint256 priceDeadline,
    bytes signature
  ) internal
```
Updates and buys `SCP` with a lock's rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to process rewards for. |
| `price` | uint256 | The `SOLACE` price in wei(usd). |
| `priceDeadline` | uint256 | The `SOLACE` price in wei(usd). |
| `signature` | bytes | The `SOLACE` price signature. |

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
| `xsLockID` | uint256 | The ID of the lock to process rewards for. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `transferAmount` | uint256 | The amount of [**SOLACE**](./../SOLACE) to transfer to the receiver. |
| `receiver` | address | The user to receive the [**SOLACE**](./../SOLACE). |

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
| `xsLockID` | uint256 | The ID of the lock to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `exists` | bool | True if the lock exists. |
| `owner` | address | The owner of the lock or the zero address if it doesn't exist. |
| `lock` | struct Lock | The lock itself. |

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
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) in the lock. |
| `end` | uint256 | The unlock timestamp of the lock. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `value` | uint256 | The boosted value of the lock. |

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
| `rewardPerSecond_` | uint256 | Amount to distribute per second. |

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
| `startTime_` | uint256 | The new start time. |
| `endTime_` | uint256 | The new end time. |

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
| `token` | address | The token to rescue. |
| `amount` | uint256 | Amount of the token to rescue. |
| `receiver` | address | Account that will receive the tokens. |

### setRegistry
```solidity
  function setRegistry(
    address _registry
  ) external
```
Sets the [`Registry`](./Registry) contract address.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_registry` | address | The address of `Registry` contract. |

### _setRegistry
```solidity
  function _setRegistry(
    address _registry
  ) internal
```
Sets registry and related contract addresses.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `_registry` | address | The registry address to set. |

### migrate
```solidity
  function migrate(
    address stakingRewardsV1,
    uint256[] xsLockIDs
  ) external
```
Migrates information about locks from a previous version of staking rewards.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `stakingRewardsV1` | address | The previous version of staking rewards. |
| `xsLockIDs` | uint256[] | The IDs of the locks to migrate. |

### _migrateLock
```solidity
  function _migrateLock(
    address stakingRewardsV1,
    uint256 xsLockID
  ) internal
```
Migrates information about a lock from a previous version of staking rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `stakingRewardsV1` | address | The previous version of staking rewards. |
| `xsLockID` | uint256 | The IDs of the locks to migrate. |



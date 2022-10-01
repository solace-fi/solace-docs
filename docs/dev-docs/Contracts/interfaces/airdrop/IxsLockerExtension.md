<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/airdrop/IxsLockerExtension.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A utility contract to distribute [**SOLACE**](./../../SOLACE) to multiple [**xslocks**](./../../staking/xsLocker).


## Functions
### increaseAmountMultiple
```solidity
  function increaseAmountMultiple(
    uint256[] xsLockIDs,
    uint256[] amounts
  ) external
```
Deposit [**SOLACE**](./../../SOLACE) to increase the value of multiple existing locks.

[**SOLACE**](./../../SOLACE) is transferred from msg.sender, assumes its already approved.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockIDs` | uint256[] | Array of lock IDs to update. |
| `amounts` | uint256[] | Array of [**SOLACE**](./../../SOLACE) amounts to deposit. |


## Events
### SolaceDistributed
```solidity
  event SolaceDistributed()
```
Emitted when xsLockID does exist, and hence [**SOLACE**](./../../SOLACE) is distributed to an [**xslocks**](./../../staking/xsLocker)


### SolaceNotDistributed
```solidity
  event SolaceNotDistributed()
```
Emitted when xsLockID does not exist, and hence [**SOLACE**](./../../SOLACE) is not distributed


### SolaceRefunded
```solidity
  event SolaceRefunded()
```
Emitted when [**SOLACE**](./../../SOLACE) is refunded to msg.sender



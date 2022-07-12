<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/airdrop/xsLockerExtension.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A utility contract to distribute [**SOLACE**](./../SOLACE) to multiple [**xslocks**](./../staking/xsLocker).


## Functions
### constructor
```solidity
  function constructor(
    address solace_,
    address xslocker_
  ) public
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `solace_` | address | Address of [**SOLACE**](./../SOLACE). |
| `xslocker_` | address | Address of [**xsLocker**](./../staking/xsLocker). |

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



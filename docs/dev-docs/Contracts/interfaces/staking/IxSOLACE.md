<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/staking/IxSOLACE.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The vote token of the Solace DAO.

**xSOLACE** is the vote token of the Solace DAO. It masquerades as an ERC20 but cannot be transferred, minted, or burned, and thus has no economic value outside of voting.

Balances are calculated based on **Locks** in [`xsLocker`](./../../staking/xsLocker). The base value of a lock is its `amount` of [**SOLACE**](./../../SOLACE). Its multiplier is 4x when `end` is 4 years from now, 1x when unlocked, and linearly decreasing between the two. The balance of a lock is its base value times its multiplier.

[`balanceOf(user)`](#balanceof) is calculated as the sum of the balances of the user's locks. [`totalSupply()`](#totalsupply) is calculated as the sum of the balances of all locks. These functions should not be called on-chain as they are gas intensive.

Voting will occur off chain.

Note that transferring [**SOLACE**](./../../SOLACE) to this contract will not give you any **xSOLACE**. You should deposit your [**SOLACE**](./../../SOLACE) into [`xsLocker`](./../../staking/xsLocker) via `createLock()`.


## Functions
### MAX_LOCK_DURATION
```solidity
  function MAX_LOCK_DURATION() external returns (uint256)
```
The maximum duration of a lock in seconds.



### MAX_LOCK_MULTIPLIER_BPS
```solidity
  function MAX_LOCK_MULTIPLIER_BPS() external returns (uint256)
```
The vote power multiplier at max lock in bps.



### UNLOCKED_MULTIPLIER_BPS
```solidity
  function UNLOCKED_MULTIPLIER_BPS() external returns (uint256)
```
The vote power multiplier when unlocked in bps.



### xsLocker
```solidity
  function xsLocker() external returns (address)
```
The [`xsLocker`](./../../staking/xsLocker) contract.



### balanceOfLock
```solidity
  function balanceOfLock(
    uint256 xsLockID
  ) external returns (uint256 balance)
```
Returns the **xSOLACE** balance of a lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The lock to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `balance` | uint256 | The locks's balance. |


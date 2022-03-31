<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/mocks/MockListener.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Mock listener for testing xsLocker.


## Functions
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

## Events
### Updated
```solidity
  event Updated(
  )
```




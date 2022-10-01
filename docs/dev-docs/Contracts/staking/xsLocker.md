<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/staking/xsLocker.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Stake your [**SOLACE**](./../SOLACE) to receive voting rights, [**SOLACE**](./../SOLACE) rewards, and more.

Locks are ERC721s and can be viewed with [`locks()`](#locks). Each lock has an `amount` of [**SOLACE**](./../SOLACE) and an `end` timestamp and cannot be transferred or withdrawn from before it unlocks. Locks have a maximum duration of four years.

Users can create locks via [`createLock()`](#createlock) or [`createLockSigned()`](#createlocksigned), deposit more [**SOLACE**](./../SOLACE) into a lock via [`increaseAmount()`](#increaseamount) or [`increaseAmountSigned()`](#increaseamountsigned), extend a lock via [`extendLock()`](#extendlock), and withdraw via [`withdraw()`](#withdraw), [`withdrawInPart()`](#withdrawinpart), or [`withdrawMany()`](#withdrawmany).

Users and contracts (eg BondTellers) may deposit on behalf of another user or contract.

Any time a lock is updated it will notify the listener contracts (eg StakingRewards).

Note that transferring [**SOLACE**](./../SOLACE) to this contract will not give you any rewards. You should deposit your [**SOLACE**](./../SOLACE) via [`createLock()`](#createlock) or [`createLockSigned()`](#createlocksigned).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address solace_
  ) public
```
Construct the xsLocker contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `governance_` | address | The address of the [governor](/docs/protocol/governance). |
| `solace_` | address | Address of [**SOLACE**](./../SOLACE). |

### locks
```solidity
  function locks(
    uint256 xsLockID
  ) external returns (struct Lock lock_)
```
Information about a lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `lock_` | struct Lock | Information about the lock. |

### isLocked
```solidity
  function isLocked(
    uint256 xsLockID
  ) external returns (bool locked)
```
Determines if the lock is locked.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `locked` | bool | True if the lock is locked, false if unlocked. |

### timeLeft
```solidity
  function timeLeft(
    uint256 xsLockID
  ) external returns (uint256 time)
```
Determines the time left until the lock unlocks.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `time` | uint256 | The time left in seconds, 0 if unlocked. |

### stakedBalance
```solidity
  function stakedBalance(
    address account
  ) external returns (uint256 balance)
```
Returns the amount of [**SOLACE**](./../SOLACE) the user has staked.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The account to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `balance` | uint256 | The user's balance. |

### getXsLockListeners
```solidity
  function getXsLockListeners() external returns (address[] listeners_)
```
The list of contracts that are listening to lock updates.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `listeners_` | address[] | The list as an array. |

### createLock
```solidity
  function createLock(
    address recipient,
    uint256 amount,
    uint256 end
  ) external returns (uint256 xsLockID)
```
Deposit [**SOLACE**](./../SOLACE) to create a new lock.

[**SOLACE**](./../SOLACE) is transferred from msg.sender, assumes its already approved.
use end=0 to initialize as unlocked.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `recipient` | address | The account that will receive the lock. |
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) to deposit. |
| `end` | uint256 | The timestamp the lock will unlock. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the newly created lock. |

### createLockSigned
```solidity
  function createLockSigned(
    uint256 amount,
    uint256 end,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external returns (uint256 xsLockID)
```
Deposit [**SOLACE**](./../SOLACE) to create a new lock.

[**SOLACE**](./../SOLACE) is transferred from msg.sender using ERC20Permit.
use end=0 to initialize as unlocked.
recipient = msg.sender

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) to deposit. |
| `end` | uint256 | The timestamp the lock will unlock. |
| `deadline` | uint256 | Time the transaction must go through before. |
| `v` | uint8 | secp256k1 signature |
| `r` | bytes32 | secp256k1 signature |
| `s` | bytes32 | secp256k1 signature |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the newly created lock. |

### increaseAmount
```solidity
  function increaseAmount(
    uint256 xsLockID,
    uint256 amount
  ) external
```
Deposit [**SOLACE**](./../SOLACE) to increase the value of an existing lock.

[**SOLACE**](./../SOLACE) is transferred from msg.sender, assumes its already approved.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to update. |
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) to deposit. |

### increaseAmountSigned
```solidity
  function increaseAmountSigned(
    uint256 xsLockID,
    uint256 amount,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit [**SOLACE**](./../SOLACE) to increase the value of an existing lock.

[**SOLACE**](./../SOLACE) is transferred from msg.sender using ERC20Permit.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to update. |
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) to deposit. |
| `deadline` | uint256 | Time the transaction must go through before. |
| `v` | uint8 | secp256k1 signature |
| `r` | bytes32 | secp256k1 signature |
| `s` | bytes32 | secp256k1 signature |

### extendLock
```solidity
  function extendLock(
    uint256 xsLockID,
    uint256 end
  ) external
```
Extend a lock's duration.

Can only be called by the lock owner or approved.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to update. |
| `end` | uint256 | The new time for the lock to unlock. |

### withdraw
```solidity
  function withdraw(
    uint256 xsLockID,
    address recipient
  ) external
```
Withdraw from a lock in full.

Can only be called by the lock owner or approved.
Can only be called if unlocked.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to withdraw from. |
| `recipient` | address | The user to receive the lock's [**SOLACE**](./../SOLACE). |

### withdrawInPart
```solidity
  function withdrawInPart(
    uint256 xsLockID,
    address recipient,
    uint256 amount
  ) external
```
Withdraw from a lock in part.

Can only be called by the lock owner or approved.
Can only be called if unlocked.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to withdraw from. |
| `recipient` | address | The user to receive the lock's [**SOLACE**](./../SOLACE). |
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) to withdraw. |

### withdrawMany
```solidity
  function withdrawMany(
    uint256[] xsLockIDs,
    address recipient
  ) external
```
Withdraw from multiple locks in full.

Can only be called by the lock owner or approved.
Can only be called if unlocked.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockIDs` | uint256[] | The ID of the locks to withdraw from. |
| `recipient` | address | The user to receive the lock's [**SOLACE**](./../SOLACE). |

### _createLock
```solidity
  function _createLock(
    address recipient,
    uint256 amount,
    uint256 end,
     xsLockID
  ) internal returns (uint256 xsLockID)
```
Creates a new lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `recipient` | address | The user that the lock will be minted to. |
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) in the lock. |
| `end` | uint256 | The end of the lock. |
| `xsLockID` |  | The ID of the new lock. |

### _updateLock
```solidity
  function _updateLock(
    uint256 xsLockID,
    uint256 amount,
    uint256 end
  ) internal
```
Updates an existing lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to update. |
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) now in the lock. |
| `end` | uint256 | The end of the lock. |

### _withdraw
```solidity
  function _withdraw(
    uint256 xsLockID,
    uint256 amount
  ) internal
```
Withdraws from a lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `xsLockID` | uint256 | The ID of the lock to withdraw from. |
| `amount` | uint256 | The amount of [**SOLACE**](./../SOLACE) to withdraw. |

### _afterTokenTransfer
```solidity
  function _afterTokenTransfer(
    address from,
    address to,
    uint256 xsLockID
  ) internal
```
Hook that is called after any token transfer. This includes minting and burning.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `from` | address | The user that sends the token, or zero if minting. |
| `to` | address | The zero that receives the token, or zero if burning. |
| `xsLockID` | uint256 | The ID of the token being transferred. |

### _notify
```solidity
  function _notify(
    uint256 xsLockID,
    address oldOwner,
    address newOwner,
    struct Lock oldLock,
    struct Lock newLock
  ) internal
```
Notify the listeners of any updates.

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

### addXsLockListener
```solidity
  function addXsLockListener(
    address listener
  ) external
```
Adds a listener.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `listener` | address | The listener to add. |

### removeXsLockListener
```solidity
  function removeXsLockListener(
    address listener
  ) external
```
Removes a listener.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `listener` | address | The listener to remove. |

### setBaseURI
```solidity
  function setBaseURI(
    string baseURI_
  ) external
```
Sets the base URI for computing `tokenURI`.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `baseURI_` | string | The new base URI. |



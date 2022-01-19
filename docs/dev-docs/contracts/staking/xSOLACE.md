The vote token of the Solace DAO.

xSOLACE is the vote token of the Solace DAO. It masquerades as an ERC20 but cannot be transferred, minted, or burned, and thus has no economic value outside of voting.

Balances are calculated based on **Locks** in [`xsLocker`](./xsLocker). The base value of a lock is its `amount` of [**SOLACE**](./../SOLACE). Its multiplier is 4x when `end` is 4 years from now, 1x when unlocked, and linearly decreasing between the two. The balance of a lock is its base value times its multiplier.

[`balanceOf(user)`](#balanceof) is calculated as the sum of the balances of the user's locks. [`totalSupply()`](#totalsupply) is calculated as the sum of the balances of all locks. These functions should not be called on-chain as they are gas intensive.

Voting will occur off chain.

Note that transferring [**SOLACE**](./../SOLACE) to this contract will not give you any **xSOLACE**. You should deposit your [**SOLACE**](./../SOLACE) into [`xsLocker`](./xsLocker) via `createLock()`.


## Functions
### constructor
```solidity
  function constructor(
    address xsLocker_
  ) public
```
Constructs the **xSOLACE** contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLocker_` | address | The [**xsLocker**](./xsLocker) contract.

### balanceOf
```solidity
  function balanceOf(
    address account
  ) external returns (uint256 balance)
```
Returns the user's **xSOLACE** balance.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | The account to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance`| address | The user's balance.
### balanceOfLock
```solidity
  function balanceOfLock(
    uint256 xsLockID
  ) public returns (uint256 balance)
```
Returns the **xSOLACE** balance of a lock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`xsLockID` | uint256 | The lock to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance`| uint256 | The locks's balance.
### totalSupply
```solidity
  function totalSupply(
  ) external returns (uint256 supply)
```
Returns the total supply of **xSOLACE**.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`supply`|  | The total supply.
### name
```solidity
  function name(
  ) external returns (string)
```
Returns the name of the token.



### symbol
```solidity
  function symbol(
  ) external returns (string)
```
Returns the symbol of the token.



### decimals
```solidity
  function decimals(
  ) external returns (uint8)
```
Returns the number of decimals used to get its user representation.



### allowance
```solidity
  function allowance(
  ) external returns (uint256)
```
Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through `transferFrom`.



### transfer
```solidity
  function transfer(
    address recipient,
    uint256 amount
  ) external returns (bool success)
```
In a normal ERC20 contract this would move `amount` tokens from the caller's account to `recipient`.
This version reverts because **xSOLACE** is non-transferrable.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address | The user to send tokens to.
|`amount` | uint256 | The amount of tokens to send.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`success`| address | False.
### transferFrom
```solidity
  function transferFrom(
    address recipient,
    address amount
  ) external returns (bool success)
```
In a normal ERC20 contract this would move `amount` tokens from `sender` to `recipient` using allowance.
This version reverts because **xSOLACE** is non-transferrable.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipient` | address | The user to send tokens to.
|`amount` | address | The amount of tokens to send.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`success`| address | False.
### approve
```solidity
  function approve(
    address spender,
    uint256 amount
  ) external returns (bool success)
```
In a normal ERC20 contract this would set `amount` as the allowance of `spender` over the caller's tokens.
This version reverts because **xSOLACE** is non-transferrable.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`spender` | address | The user to assign allowance.
|`amount` | uint256 | The amount of tokens to send.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`success`| address | False.

The interface of the war chest of Castle Solace.


## Functions
### receive
```solidity
  function receive(
  ) external
```
Fallback function to allow contract to receive **ETH**.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive **ETH**.



### depositEth
```solidity
  function depositEth(
  ) external
```
Deposits **ETH**.



### depositToken
```solidity
  function depositToken(
    address token,
    uint256 amount
  ) external
```
Deposits an **ERC20** token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | The address of the token to deposit.
|`amount` | uint256 | The amount of the token to deposit.

### spend
```solidity
  function spend(
    address token,
    uint256 amount,
    address recipient
  ) external
```
Spends an **ERC20** token or **ETH**.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | The address of the token to spend.
|`amount` | uint256 | The amount of the token to spend.
|`recipient` | address | The address of the token receiver.

### swap
```solidity
  function swap(
    bytes path,
    uint256 amountIn,
    uint256 amountOutMinimum
  ) external
```
Manually swaps a token.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`path` | bytes | The path of pools to take.
|`amountIn` | uint256 | The amount to swap.
|`amountOutMinimum` | uint256 | The minimum about to receive.

### setPremiumRecipients
```solidity
  function setPremiumRecipients(
    address payable[] recipients,
    uint32[] weights
  ) external
```
Sets the premium recipients and their weights.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`recipients` | address payable[] | The premium recipients, plus an implicit `address(this)` at the end.
|`weights` | uint32[] | The recipient weights.

### routePremiums
```solidity
  function routePremiums(
  ) external
```
Routes the **premiums** to the `recipients`.



### wrap
```solidity
  function wrap(
    uint256 amount
  ) external
```
Wraps some **ETH** into **WETH**.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount to wrap.

### unwrap
```solidity
  function unwrap(
    uint256 amount
  ) external
```
Unwraps some **WETH** into **ETH**.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount to unwrap.

### refund
```solidity
  function refund(
    address user,
    uint256 amount
  ) external
```
Refunds some **ETH** to the user.
Will attempt to send the entire `amount` to the `user`.
If there is not enough available at the moment, it is recorded and can be pulled later via [`withdraw()`](#withdraw).
Can only be called by active products.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user address to send refund amount.
|`amount` | uint256 | The amount to send the user.

### unpaidRefunds
```solidity
  function unpaidRefunds(
    address user
  ) external returns (uint256)
```
The amount of **ETH** that a user is owed if any.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | amount.
### withdraw
```solidity
  function withdraw(
  ) external
```
Transfers the unpaid refunds to the user.



## Events
### EthDeposited
```solidity
  event EthDeposited(
  )
```



### TokenDeposited
```solidity
  event TokenDeposited(
  )
```



### FundsSpent
```solidity
  event FundsSpent(
  )
```




The `Treasury` smart contract governs the finance related operations.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address swapRouter_,
    address weth_,
    address registry_
  ) public
```
Constructs the treasury contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`swapRouter_` | address | Address of uniswap router.
|`weth_` | address | Address of wrapped ether.
|`registry_` | address | Address of registry.

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

### withdraw
```solidity
  function withdraw(
  ) external
```
Transfers the unpaid refunds to the user.



### _transferEth
```solidity
  function _transferEth(
    address user,
    uint256 amount
  ) internal
```
Transfers **ETH** to the user. It's called by [`refund()`](#refund) and [`withdraw()`](#withdraw) functions in the contract.
Also adds on their unpaid refunds, and stores new unpaid refunds if necessary.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The user to pay.
|`amount` | uint256 | The amount to pay _before_ unpaid funds.

### min
```solidity
  function min(
    uint256 a,
    uint256 b
  ) internal returns (uint256 c)
```
Internal function that returns the minimum value between two values.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 | The first value.
|`b` | uint256 | The second value.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`c`| uint256 | The minimum value.

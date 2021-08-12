The `Treasury` smart contract governs the finance related operations.


## Functions
### constructor
```solidity
  function constructor(
    address _governance,
    address _swapRouter,
    address _weth,
    address _registry
  ) public
```
Constructs the treasury contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | Address of the governor.
|`_swapRouter` | address | Address of uniswap router.
|`_weth` | address | Address of wrapped ether.
|`_registry` | address | Address of registry.

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



### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new `governor`.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The new `governor`.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the `governance` role.
Can only be called by the new `governor`.



### depositEth
```solidity
  function depositEth(
  ) external
```
Deposits **ETH**. The amount is given by `msg.value`.



### depositToken
```solidity
  function depositToken(
    address _token,
    uint256 _amount
  ) external
```
Deposits `ERC20` token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The address of the token to deposit.
|`_amount` | uint256 | The amount of the token to deposit.

### spend
```solidity
  function spend(
    address _token,
    uint256 _amount,
    address _recipient
  ) external
```
Spends `ERC20` token or `ETH`. Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The address of the token to spend.
|`_amount` | uint256 | The amount of the token to spend.
|`_recipient` | address | The address of the token receiver.

### swap
```solidity
  function swap(
    bytes _path,
    uint256 _amountIn,
    uint256 _amountOutMinimum
  ) external
```
Manually swaps a token. Can only be called by the current `governor`. 
It swaps the entire balance in case some tokens were unknowingly received. Reverts if the swap was unsuccessful.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_path` | bytes | The path of pools to take.
|`_amountIn` | uint256 | The amount to swap.
|`_amountOutMinimum` | uint256 | The minimum about to receive.

### setPremiumRecipients
```solidity
  function setPremiumRecipients(
    address payable[] _recipients,
    uint32[] _weights
  ) external
```
Sets the premium recipients and their weights.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_recipients` | address payable[] | The premium recipients.
|`_weights` | uint32[] | The recipient weights.

### routePremiums
```solidity
  function routePremiums(
  ) external
```
Routes the **premiums** to the `recipients`.



### wrap
```solidity
  function wrap(
    uint256 _amount
  ) external
```
Wraps some **ETH** into **WETH**.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | The amount to wrap.

### unwrap
```solidity
  function unwrap(
    uint256 _amount
  ) external
```
Unwraps some **WETH** into **ETH**.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | The amount to unwrap.

### refund
```solidity
  function refund(
    address _user,
    uint256 _amount
  ) external
```
The function refunds the given amount to the user. It is called by `products` in **Solace Protocol**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user address to send refund amount.
|`_amount` | uint256 | The amount to send the user.

### withdraw
```solidity
  function withdraw(
  ) external
```
The function transfers the unpaid refunds to the user. It is called by `products` in **Solace Protocol**.



### transferEth
```solidity
  function transferEth(
    address _user,
    uint256 _amount
  ) internal
```
The internal function transfers **ETH** to the user. It's called by **refund()** and **withdraw()** functions in the contract.
Also adds on their unpaid refunds, and stores new unpaid refunds if necessary.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user to pay.
|`_amount` | uint256 | The amount to pay **before** unpaid funds.

### min
```solidity
  function min(
    uint256 _a,
    uint256 _b
  ) internal returns (uint256 _c)
```
Internal function that returns the minimum value between two values.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_a` | uint256 |  The first value.
|`_b` | uint256 |  The second value.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_c`| uint256 | The minimum value.

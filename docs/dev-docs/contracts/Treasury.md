The war chest of Castle Solace.


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
Receive function. Deposits eth.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function. Deposits eth.



### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new governor.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The new governor.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the governance role.
Can only be called by the new governor.



### depositEth
```solidity
  function depositEth(
  ) external
```
Deposits some ether.



### depositToken
```solidity
  function depositToken(
    address _token,
    uint256 _amount
  ) external
```
Deposit some ERC20 token.


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
Spends some tokens.
Can only be called by the current governor.


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
Manually swaps a token.
Can only be called by the current governor.

Swaps the entire balance in case some tokens were unknowingly received.
Reverts if the swap was unsuccessful.

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
Can only be called by the current governor.


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
Routes the premiums to the recipients



### wrap
```solidity
  function wrap(
    uint256 _amount
  ) external
```
Wraps some eth into weth.
Can only be called by the current governor.


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
Unwraps some weth into eth.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | The amount to unwrap.

### refund
```solidity
  function refund(
  ) external
```




### withdraw
```solidity
  function withdraw(
  ) external
```
Pull any unpaid rewards.



### transferEth
```solidity
  function transferEth(
    address _user,
    uint256 _amount
  ) internal
```
Transfers a user some eth.
Also adds on their unpaid rewards, and stores new unpaid rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The user to pay.
|`_amount` | uint256 | The amount to pay _before_ unpaid rewards.

### min
```solidity
  function min(
  ) internal returns (uint256 _c)
```





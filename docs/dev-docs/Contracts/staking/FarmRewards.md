Rewards farmers with [**SOLACE**](./../SOLACE).

Rewards were accumulated by farmers for participating in farms. Rewards will be unlocked linearly over six months and can be redeemed for [**SOLACE**](./../SOLACE) by paying $0.03/[**SOLACE**](./../SOLACE).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address xsolace_,
    address receiver_,
    uint256 solacePerXSolace_
  ) public
```
Constructs the `FarmRewards` contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`xsolace_` | address | Address of [**xSOLACE**](./xSOLACE).
|`receiver_` | address | Address to send proceeds.
|`solacePerXSolace_` | uint256 | The amount of [**SOLACE**](./../SOLACE) for one [**xSOLACE**](./xSOLACE).

### calculateAmountIn
```solidity
  function calculateAmountIn(
    address tokenIn,
    uint256 amountOut
  ) external returns (uint256 amountIn)
```
Calculates the amount of token in needed for an amount of [**xSOLACE**](./xSOLACE) out.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to pay with.
|`amountOut` | uint256 | The amount of [**xSOLACE**](./xSOLACE) wanted.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountIn`| uint256 | The amount of `tokenIn` needed.
### calculateAmountOut
```solidity
  function calculateAmountOut(
    address tokenIn,
    uint256 amountIn
  ) external returns (uint256 amountOut)
```
Calculates the amount of [**xSOLACE**](./xSOLACE) out for an amount of token in.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to pay with.
|`amountIn` | uint256 | The amount of `tokenIn` in.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountOut`| uint256 | The amount of [**xSOLACE**](./xSOLACE) out.
### purchaseableVestedXSolace
```solidity
  function purchaseableVestedXSolace(
    address farmer
  ) public returns (uint256 amount)
```
The amount of [**xSOLACE**](./xSOLACE) that a farmer has vested.
Does not include the amount they've already redeemed.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmer` | address | The farmer to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The amount of vested [**xSOLACE**](./xSOLACE).
### redeem
```solidity
  function redeem(
    address tokenIn,
    uint256 amountIn
  ) external
```
Deposit tokens to redeem rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to use as payment.
|`amountIn` | uint256 | The max amount to pay.

### redeemSigned
```solidity
  function redeemSigned(
    address tokenIn,
    uint256 amountIn,
    address depositor,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external
```
Deposit tokens to redeem rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to use as payment.
|`amountIn` | uint256 | The max amount to pay.
|`depositor` | address | The farmer that deposits.
|`deadline` | uint256 | Time the transaction must go through before.
|`v` | uint8 | secp256k1 signature
|`r` | bytes32 | secp256k1 signature
|`s` | bytes32 | secp256k1 signature

### _redeem
```solidity
  function _redeem(
    address tokenIn,
    uint256 amountIn,
    address depositor
  ) internal returns (uint256 actualAmountIn)
```
Redeems a farmers rewards.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to use as payment.
|`amountIn` | uint256 | The max amount to pay.
|`depositor` | address | The farmer that deposits.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`actualAmountIn`| uint256 | The amount of tokens used.
### supportTokens
```solidity
  function supportTokens(
    address[] tokens
  ) external
```
Adds support for tokens. Should be stablecoins.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokens` | address[] | The tokens to add support for.

### setReceiver
```solidity
  function setReceiver(
    address payable receiver_
  ) external
```
Sets the recipient for proceeds.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`receiver_` | address payable | The new recipient.

### returnXSolace
```solidity
  function returnXSolace(
    uint256 amount
  ) external
```
Returns excess [**xSOLACE**](./xSOLACE).
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount to send. Will be sent from this contract to `receiver`.

### setFarmedRewards
```solidity
  function setFarmedRewards(
    address[] farmers,
    uint256[] rewards
  ) external
```
Sets the rewards that farmers have earned.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmers` | address[] | Array of farmers to set.
|`rewards` | uint256[] | Array of rewards to set.


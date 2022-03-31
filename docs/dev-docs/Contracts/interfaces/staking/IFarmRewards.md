Rewards farmers with [**SOLACE**](./../../SOLACE).

Rewards were accumulated by farmers for participating in farms. Rewards will be unlocked linearly over six months and can be redeemed for [**SOLACE**](./../../SOLACE) by paying $0.03/[**SOLACE**](./../../SOLACE).


## Functions
### xsolace
```solidity
  function xsolace(
  ) external returns (address)
```
[**xSOLACE**](./../../staking/xSOLACEV1) Token.



### receiver
```solidity
  function receiver(
  ) external returns (address)
```
receiver for payments



### VESTING_START
```solidity
  function VESTING_START(
  ) external returns (uint256)
```
timestamp that rewards start vesting



### VESTING_END
```solidity
  function VESTING_END(
  ) external returns (uint256)
```
timestamp that rewards finish vesting



### solacePerXSolace
```solidity
  function solacePerXSolace(
  ) external returns (uint256)
```




### tokenInSupported
```solidity
  function tokenInSupported(
  ) external returns (bool)
```
The stablecoins that can be used for payment.



### farmedRewards
```solidity
  function farmedRewards(
  ) external returns (uint256)
```
Total farmed rewards of a farmer.



### redeemedRewards
```solidity
  function redeemedRewards(
  ) external returns (uint256)
```
Redeemed rewards of a farmer.



### calculateAmountIn
```solidity
  function calculateAmountIn(
    address tokenIn,
    uint256 amountOut
  ) external returns (uint256 amountIn)
```
Calculates the amount of token in needed for an amount of [**xSOLACE**](./../../staking/xSOLACEV1) out.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to pay with.
|`amountOut` | uint256 | The amount of [**xSOLACE**](./../../staking/xSOLACEV1) wanted.

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
Calculates the amount of [**xSOLACE**](./../../staking/xSOLACEV1) out for an amount of token in.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to pay with.
|`amountIn` | uint256 | The amount of `tokenIn` in.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountOut`| uint256 | The amount of [**xSOLACE**](./../../staking/xSOLACEV1) out.
### purchaseableVestedXSolace
```solidity
  function purchaseableVestedXSolace(
    address farmer
  ) external returns (uint256 amount)
```
The amount of [**xSOLACE**](./../../staking/xSOLACEV1) that a farmer has vested.
Does not include the amount they've already redeemed.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmer` | address | The farmer to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The amount of vested [**xSOLACE**](./../../staking/xSOLACEV1).
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
Returns excess [**xSOLACE**](./../../staking/xSOLACEV1).
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

## Events
### ReceiverSet
```solidity
  event ReceiverSet(
  )
```




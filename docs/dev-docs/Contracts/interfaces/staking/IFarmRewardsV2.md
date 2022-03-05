Rewards farmers with [**SOLACE**](./../../SOLACE).

[FarmRewards V1](./../../staking/FarmRewards) rewarded CpFarmers in [**xSOLACEV1**](./../../staking/xSOLACEV1) linearly vested until May 2022. [**xSOLACEV1**](./../../staking/xSOLACEV1) was deprecated for [**xsLocker**](./../../staking/xsLocker) and will stop receiving rebases. FarmRewards V2 attachs on top of [FarmRewards V1](./../../staking/FarmRewards) and allows farmers to early withdraw their [**xSOLACEV1**](./../../staking/xSOLACEV1) and deposit it into a lock, as long as that lock ends after May 2022. This will give them staking rewards and voting power.

FarmRewards V2 is an optional alternative to [FarmRewards V1](./../../staking/FarmRewards). Each user will decide how they would like their rewards. Either way, farmers will need to pay $0.03/[**SOLACE**](./../../SOLACE).


## Functions
### solace
```solidity
  function solace(
  ) external returns (address)
```
Address of the [**SOLACE**](./../../SOLACE) contract.



### xsolacev1
```solidity
  function xsolacev1(
  ) external returns (address)
```
Address of the [**xSOLACEV1**](./../../staking/xSOLACEV1) contract.



### xsLocker
```solidity
  function xsLocker(
  ) external returns (address)
```
Address of the [**xsLocker**](./../../staking/xsLocker) contract.



### farmRewardsv1
```solidity
  function farmRewardsv1(
  ) external returns (address)
```
Address of the [**FarmRewardsV1**](./../../staking/FarmRewards) contrcat.



### receiver
```solidity
  function receiver(
  ) external returns (address)
```
Receiver for payments.



### VESTING_END
```solidity
  function VESTING_END(
  ) external returns (uint256)
```
timestamp that rewards finish vesting



### userLock
```solidity
  function userLock(
  ) external returns (uint256 xsLockID)
```
The ID of the user's lock.



### calculateAmountIn
```solidity
  function calculateAmountIn(
    address tokenIn,
    uint256 amountOut
  ) external returns (uint256 amountIn)
```
Calculates the amount of token in needed for an amount of [**SOLACE**](./../../SOLACE) out.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to pay with.
|`amountOut` | uint256 | The amount of [**SOLACE**](./../../SOLACE) wanted.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountIn`| address | The amount of `tokenIn` needed.
### calculateAmountOut
```solidity
  function calculateAmountOut(
    address tokenIn,
    uint256 amountIn
  ) external returns (uint256 amountOut)
```
Calculates the amount of [**SOLACE**](./../../SOLACE) out for an amount of token in.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenIn` | address | The token to pay with.
|`amountIn` | uint256 | The amount of `tokenIn` in.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amountOut`| address | The amount of [**SOLACE**](./../../SOLACE) out.
### purchaseableXSolace
```solidity
  function purchaseableXSolace(
    address farmer
  ) external returns (uint256 amount)
```
The amount of [**xSOLACEV1**](./xSOLACEV1) that a farmer can purchase.
Does not include the amount they've already redeemed.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmer` | address | The farmer to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| address | The amount of [**xSOLACEV1**](./xSOLACEV1).
### purchaseableSolace
```solidity
  function purchaseableSolace(
    address farmer
  ) external returns (uint256 amount)
```
The amount of [**SOLACE**](./../../SOLACE) that a farmer can purchase.
Does not include the amount they've already redeemed.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`farmer` | address | The farmer to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| address | The amount of [**SOLACE**](./../../SOLACE).
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

### acceptFarmRewardsV1Governance
```solidity
  function acceptFarmRewardsV1Governance(
  ) external
```
Accepts the governance role for the FarmRewards V1 contract.
Can only be called by the current [**governor**](/docs/protocol/governance).



### setFarmRewardsV1Governance
```solidity
  function setFarmRewardsV1Governance(
    address newGovernor,
    address newReceiver
  ) external
```
Sets the pending governance role for the FarmRewards V1 contract.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`newGovernor` | address | The pending new governor.
|`newReceiver` | address | The FarmRewardsV1 receiver.

### rescueTokens
```solidity
  function rescueTokens(
    address token,
    uint256 amount
  ) external
```
Rescues tokens that may have been accidentally transferred in.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | The token to rescue.
|`amount` | uint256 | Amount of the token to rescue.

## Events
### ReceiverSet
```solidity
  event ReceiverSet(
  )
```




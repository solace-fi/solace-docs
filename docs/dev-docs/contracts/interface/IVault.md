


## Functions
### setEmergencyShutdown
```solidity
  function setEmergencyShutdown(
    bool active
  ) external
```
Activates or deactivates emergency shutdown.
Can only be called by the current [**governor**](/docs/user-docs/Governance).
During Emergency Shutdown:
1. No users may deposit into the Vault.
2. Withdrawls can bypass cooldown.
3. Only Governance may undo Emergency Shutdown.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`active` | bool | If true, the Vault goes into Emergency Shutdown.
If false, the Vault goes back into Normal Operation.

### setCooldownWindow
```solidity
  function setCooldownWindow(
    uint40 minTime,
    uint40 maxTime
  ) external
```
Sets the minimum and maximum amount of time a user must wait to withdraw funds.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`minTime` | uint40 | Minimum time in seconds.
|`maxTime` | uint40 | Maximum time in seconds.

### setRequestor
```solidity
  function setRequestor(
    address dst,
    bool status
  ) external
```
Adds or removes requesting rights.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`dst` | address | The requestor.
|`status` | bool | True to add or false to remove rights.

### depositEth
```solidity
  function depositEth(
  ) external returns (uint256 shares)
```
Allows a user to deposit **ETH** into the `Vault`(becoming a **Capital Provider**).
Shares of the `Vault` (CP tokens) are minted to caller.
It is called when `Vault` receives **ETH**.
It issues the amount of token share respected to the deposit to the `recipient`.
Reverts if `Vault` is in **Emergency Shutdown**



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`shares`|  | The number of shares minted.
### depositWeth
```solidity
  function depositWeth(
    uint256 amount
  ) external returns (uint256)
```
Allows a user to deposit **WETH** into the `Vault`(becoming a **Capital Provider**).
Shares of the Vault (CP tokens) are minted to caller.
It issues the amount of token share respected to the deposit to the `recipient`.
Reverts if `Vault` is in Emergency Shutdown


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of weth to deposit.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`shares`| uint256 | The number of shares minted.
### startCooldown
```solidity
  function startCooldown(
  ) external
```
Starts the cooldown.



### stopCooldown
```solidity
  function stopCooldown(
  ) external
```
Stops the cooldown.



### withdrawEth
```solidity
  function withdrawEth(
    uint256 shares
  ) external returns (uint256)
```
Allows a user to redeem shares for ETH
Burns CP tokens and transfers ETH to the CP


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`shares` | uint256 | amount of shares to redeem

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | in ETH that the shares where redeemed for
### withdrawWeth
```solidity
  function withdrawWeth(
    uint256 shares
  ) external returns (uint256)
```
Allows a user to redeem shares for ETH
Burns CP tokens and transfers WETH to the CP


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`shares` | uint256 | amount of shares to redeem

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | in WETH that the shares where redeemed for
### requestEth
```solidity
  function requestEth(
    uint256 amount
  ) external returns (uint256)
```
Sends ETH to other users or contracts.
Can only be called by authorized requestors.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of ETH wanted.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Amount`| uint256 | of ETH sent.
### weth
```solidity
  function weth(
  ) external returns (contract IWETH9)
```
WETH contract.



### maxRedeemableShares
```solidity
  function maxRedeemableShares(
    address user
  ) external returns (uint256)
```
Returns the maximum redeemable shares by the `user` such that Vault does not go under MCR


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | Address of user to check

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Max`| address | redeemable shares by the user
### totalAssets
```solidity
  function totalAssets(
  ) external returns (uint256)
```
Returns the total quantity of all assets under control of this
        Vault, including those loaned out to a Strategy as well as those currently
        held in the Vault.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`|  | total assets under control of this vault.
### cooldownMin
```solidity
  function cooldownMin(
  ) external returns (uint40)
```
The minimum amount of time a user must wait to withdraw funds.



### cooldownMax
```solidity
  function cooldownMax(
  ) external returns (uint40)
```
The maximum amount of time a user must wait to withdraw funds.



### cooldownStart
```solidity
  function cooldownStart(
    address user
  ) external returns (uint40)
```
The timestamp that a depositor's cooldown started.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The depositor.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | timestamp in seconds.
### canTransfer
```solidity
  function canTransfer(
    address user
  ) external returns (bool status)
```
Returns true if the user is allowed to receive or send vault shares.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to query.
return status True if can transfer.

### canWithdraw
```solidity
  function canWithdraw(
    address user
  ) external returns (bool status)
```
Returns true if the user is allowed to withdraw vault shares.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to query.
return status True if can withdraw.

### isRequestor
```solidity
  function isRequestor(
  ) external returns (bool)
```
Returns true if the destination is authorized to request ETH.



## Events
### DepositMade
```solidity
  event DepositMade(
  )
```



### WithdrawalMade
```solidity
  event WithdrawalMade(
  )
```



### FundsSent
```solidity
  event FundsSent(
  )
```



### EmergencyShutdown
```solidity
  event EmergencyShutdown(
  )
```




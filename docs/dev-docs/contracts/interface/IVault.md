The risk-backing capital pool.

[**Capital Providers**](/docs/user-docs/Capital%20Providers) can deposit **ETH** or **WETH** into the `Vault` to mint shares. Shares are represented as **CP tokens** aka **SCP** and extend `ERC20`. [**Capital Providers**](/docs/user-docs/Capital%20Providers) should use [`depositEth()`](#depositeth) or [`depositWeth()`](#depositweth), not regular **ETH** or **WETH** transfer.

As [**Policyholders**](/docs/user-docs/Policy%20Holders) purchase coverage, premiums will flow into the capital pool and are split amongst the [**Capital Providers**](/docs/user-docs/Capital%20Providers). If a loss event occurs in an active policy, some funds will be used to payout the claim. These events will affect the price per share but not the number or distribution of shares.

By minting shares of the `Vault`, [**Capital Providers**](/docs/user-docs/Capital%20Providers) willingly accept the risk that the whole or a part of their funds may be used payout claims. A malicious [**Capital Providers**](/docs/user-docs/Capital%20Providers) could detect a loss event and try to withdraw their funds before claims are paid out. To prevent this, the `Vault` uses a cooldown mechanic such that while the [**capital provider**](/docs/user-docs/Capital%20Providers) is not in cooldown mode (default) they can mint, send, and receive **SCP** but not withdraw **ETH**. To withdraw their **ETH**, the [**capital provider**](/docs/user-docs/Capital%20Providers) must `startCooldown()`(#startcooldown), wait no less than `cooldownMin()`(#cooldownmin) and no more than `cooldownMax()`(#cooldownmax), then call `withdrawEth()`(#withdraweth) or `withdrawWeth()`(#withdrawweth). While in cooldown mode users cannot send or receive **SCP** and minting shares will take them out of cooldown.


## Functions
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
  ) external returns (uint256 value)
```
Allows a user to redeem shares for **ETH**.
Burns **SCP** and transfers **ETH** to the [**Capital Provider**](/docs/user-docs/Capital%20Providers).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`shares` | uint256 | Amount of shares to redeem.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The amount in **ETH** that the shares where redeemed for.
### withdrawWeth
```solidity
  function withdrawWeth(
    uint256 shares
  ) external returns (uint256 value)
```
Allows a user to redeem shares for **WETH**.
Burns **SCP** tokens and transfers **WETH** to the [**Capital Provider**](/docs/user-docs/Capital%20Providers).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`shares` | uint256 | amount of shares to redeem.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The amount in **WETH** that the shares where redeemed for.
### pricePerShare
```solidity
  function pricePerShare(
  ) external returns (uint256 price)
```
The price of one **SCP**.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`price`|  | The price in **ETH**.
### maxRedeemableShares
```solidity
  function maxRedeemableShares(
    address user
  ) external returns (uint256 shares)
```
Returns the maximum redeemable shares by the `user` such that `Vault` does not go under **MCR**(Minimum Capital Requirement). May be less than their balance.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The address of user to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`shares`| address | The max redeemable shares by the user.
### totalAssets
```solidity
  function totalAssets(
  ) external returns (uint256 assets)
```
Returns the total quantity of all assets held by the `Vault`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`assets`|  | The total assets under control of this vault.
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
  ) external returns (uint40 start)
```
The timestamp that a depositor's cooldown started.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The depositor.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`start`| address | The timestamp in seconds.
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

### emergencyShutdown
```solidity
  function emergencyShutdown(
  ) external returns (bool status)
```
Returns true if the vault is in shutdown.



### requestEth
```solidity
  function requestEth(
    uint256 amount
  ) external returns (uint256)
```
Sends **ETH** to other users or contracts.
Can only be called by authorized requestors.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of **ETH** wanted.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Amount`| uint256 | of **ETH** sent.
### isRequestor
```solidity
  function isRequestor(
    address dst
  ) external returns (bool status)
```
Returns true if the destination is authorized to request **ETH**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`dst` | address | Account to check requestability.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| address | True if requestor, false if not.
### setEmergencyShutdown
```solidity
  function setEmergencyShutdown(
    bool emergencyShutdown_
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
|`emergencyShutdown_` | bool | If true, the Vault goes into Emergency Shutdown.
If false, the Vault goes back into Normal Operation.

### setCooldownWindow
```solidity
  function setCooldownWindow(
    uint40 cooldownMin_,
    uint40 cooldownMax_
  ) external
```
Sets the `minimum` and `maximum` amount of time in seconds that a user must wait to withdraw funds.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`cooldownMin_` | uint40 | Minimum time in seconds.
|`cooldownMax_` | uint40 | Maximum time in seconds.

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

### receive
```solidity
  function receive(
  ) external
```
Fallback function to allow contract to receive *ETH*.
Does _not_ mint shares.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive **ETH**.
Does _not_ mint shares.



## Events
### DepositMade
```solidity
  event DepositMade(
  )
```
Emitted when a user deposits funds.


### WithdrawalMade
```solidity
  event WithdrawalMade(
  )
```
Emitted when a user withdraws funds.


### FundsSent
```solidity
  event FundsSent(
  )
```
Emitted when funds are sent to a requestor.


### EmergencyShutdown
```solidity
  event EmergencyShutdown(
  )
```
Emitted when emergency shutdown mode is toggled.



The risk-backing capital pool.

[**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) can deposit **ETH** or **WETH** into the `Vault` to mint shares. Shares are represented as **CP tokens** aka **SCP** and extend `ERC20`. [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) should use [`depositEth()`](#depositeth) or [`depositWeth()`](#depositweth), not regular **ETH** or **WETH** transfer.

As [**Policyholders**](/docs/protocol/policy-holder) purchase coverage, premiums will flow into the capital pool and are split amongst the [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide). If a loss event occurs in an active policy, some funds will be used to payout the claim. These events will affect the price per share but not the number or distribution of shares.

By minting shares of the `Vault`, [**Capital Providers**](/docs/user-guides/capital-provider/cp-role-guide) willingly accept the risk that the whole or a part of their funds may be used payout claims. A malicious [**capital provider**](/docs/user-guides/capital-provider/cp-role-guide) could detect a loss event and try to withdraw their funds before claims are paid out. To prevent this, the `Vault` uses a cooldown mechanic such that while the [**capital provider**](/docs/user-guides/capital-provider/cp-role-guide) is not in cooldown mode (default) they can mint, send, and receive **SCP** but not withdraw **ETH**. To withdraw their **ETH**, the [**capital provider**](/docs/user-guides/capital-provider/cp-role-guide) must [`startCooldown()`](#startcooldown), wait no less than [`cooldownMin()`](#cooldownmin) and no more than [`cooldownMax()`](#cooldownmax), then call [`withdrawEth()`](#withdraweth) or [`withdrawWeth()`](#withdrawweth). While in cooldown mode users cannot send or receive **SCP** and minting shares will take them out of cooldown.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_
  ) public
```
Constructs the Vault.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`registry_` | address | Address of the [`Registry`](./Registry) contract.

### depositEth
```solidity
  function depositEth(
  ) external returns (uint256 shares)
```
Allows a user to deposit **ETH** into the `Vault`(becoming a [**Capital Provider**](/docs/user-guides/capital-provider/cp-role-guide)).
Shares of the `Vault` (CP tokens) are minted to caller.
It is called when `Vault` receives **ETH**.
It issues the amount of token share respected to the deposit to the `recipient`.
Reverts if `Vault` is paused.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`shares`|  | The number of shares minted.
### depositWeth
```solidity
  function depositWeth(
    uint256 amount
  ) external returns (uint256 shares)
```
Allows a user to deposit **WETH** into the `Vault`(becoming a [**Capital Provider**](/docs/user-guides/capital-provider/cp-role-guide)).
Shares of the Vault (CP tokens) are minted to caller.
It issues the amount of token share respected to the deposit to the `recipient`.
Reverts if `Vault` is in paused.


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
Starts the **cooldown** period for the user.



### stopCooldown
```solidity
  function stopCooldown(
  ) external
```
Stops the **cooldown** period for the user.



### withdrawEth
```solidity
  function withdrawEth(
    uint256 shares
  ) external returns (uint256 value)
```
Allows a user to redeem shares for **ETH**.
Burns **SCP** and transfers **ETH** to the [**Capital Provider**](/docs/user-guides/capital-provider/cp-role-guide).


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
Burns **SCP** tokens and transfers **WETH** to the [**Capital Provider**](/docs/user-guides/capital-provider/cp-role-guide).


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
  ) public returns (bool status)
```
Returns true if the user is allowed to withdraw vault shares.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | User to query.
return status True if can withdraw.

### paused
```solidity
  function paused(
  ) external returns (bool paused_)
```
Returns true if the vault is paused.



### requestEth
```solidity
  function requestEth(
    uint256 amount
  ) external
```
Sends **ETH** to other users or contracts. The users or contracts should be authorized requestors.
Can only be called by authorized `requestors`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | The amount of **ETH** wanted.

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
### pause
```solidity
  function pause(
  ) external
```
Pauses deposits.
Can only be called by the current [**governor**](/docs/protocol/governance).
While paused:
1. No users may deposit into the Vault.
2. Withdrawls can bypass cooldown.
3. Only Governance may unpause.



### unpause
```solidity
  function unpause(
  ) external
```
Unpauses deposits.
Can only be called by the current [**governor**](/docs/protocol/governance).



### setCooldownWindow
```solidity
  function setCooldownWindow(
    uint40 cooldownMin_,
    uint40 cooldownMax_
  ) external
```
Sets the `minimum` and `maximum` amount of time in seconds that a user must wait to withdraw funds.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`cooldownMin_` | uint40 | Minimum time in seconds.
|`cooldownMax_` | uint40 | Maximum time in seconds.

### addRequestor
```solidity
  function addRequestor(
    address requestor
  ) external
```
Adds requesting rights.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`requestor` | address | The requestor to grant rights.

### removeRequestor
```solidity
  function removeRequestor(
    address requestor
  ) external
```
Removes requesting rights.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`requestor` | address | The requestor to revoke rights.

### _deposit
```solidity
  function _deposit(
    uint256 amount
  ) internal returns (uint256)
```
Handles minting of tokens during deposit.
Called by [`depositEth()`](#depositeth) and [`depositWeth()`](#depositweth).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount of **ETH** or **WETH** deposited.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokens`| uint256 | The number of shares minted.
### _withdraw
```solidity
  function _withdraw(
    uint256 shares
  ) internal returns (uint256)
```
Handles burning of shares during withdraw.
Called by [`withdrawEth()`](#withdraweth) and [`withdrawWeth()`](#withdrawweth).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`shares` | uint256 | amount of shares to redeem.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The amount in **ETH** that the shares where redeemed for.
### _totalAssets
```solidity
  function _totalAssets(
  ) internal returns (uint256)
```
Internal function that returns quantity of all assets under control of this `Vault`.
Called by **totalAssets()** function.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalAssets`|  | The total assets under control of this vault.
### _shareValue
```solidity
  function _shareValue(
    uint256 shares
  ) internal returns (uint256)
```
Internal function that determines the current value of given shares.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`shares` | uint256 | The amount of shares to calculate value for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The amount of value for given shares.
### _sharesForAmount
```solidity
  function _sharesForAmount(
    uint256 amount
  ) internal returns (uint256)
```
Internal function that determines how many shares for given amount of token would receive.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | of tokens to calculate number of shares for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`shares`| uint256 | The amount of shares(tokens) for given amount.
### _beforeTokenTransfer
```solidity
  function _beforeTokenTransfer(
  ) internal
```
Internal function that is called before token transfer in order to apply some security check.



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




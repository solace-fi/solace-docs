Capital Providers can deposit ETH to mint shares of the Vault (CP tokens)


## Functions
### constructor
```solidity
  function constructor(
  ) public
```




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



### setEmergencyShutdown
```solidity
  function setEmergencyShutdown(
    bool active
  ) external
```
Activates or deactivates emergency shutdown.
Can only be called by the current governor.
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
    uint40 _min,
    uint40 _max
  ) external
```
Sets the minimum and maximum amount of time a user must wait to withdraw funds.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_min` | uint40 | Minimum time in seconds.
|`_max` | uint40 | Maximum time in seconds.

### setRequestor
```solidity
  function setRequestor(
    address _dst,
    bool _status
  ) external
```
Adds or removes requesting rights.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_dst` | address | The requestor.
|`_status` | bool | True to add or false to remove rights.

### depositEth
```solidity
  function depositEth(
  ) public returns (uint256)
```
Allows a user to deposit ETH into the Vault (becoming a Capital Provider)
Shares of the Vault (CP tokens) are minted to caller
Called when Vault receives ETH
Deposits `_amount` `token`, issuing shares to `recipient`.
Reverts if Vault is in Emergency Shutdown



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Number`|  | of shares minted.
### depositWeth
```solidity
  function depositWeth(
    uint256 _amount
  ) external returns (uint256)
```
Allows a user to deposit WETH into the Vault (becoming a Capital Provider)
Shares of the Vault (CP tokens) are minted to caller
Deposits `_amount` `token`, issuing shares to `recipient`.
Reverts if Vault is in Emergency Shutdown


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | Amount of weth to deposit.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Number`| uint256 | of shares minted.
### _deposit
```solidity
  function _deposit(
    uint256 _amount
  ) internal returns (uint256)
```
Handles minting of tokens during deposit.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | Amount of ETH or WETH deposited.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Number`| uint256 | of shares minted.
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
    uint256 _shares
  ) external returns (uint256)
```
Allows a user to redeem shares for ETH
Burns CP tokens and transfers ETH to the CP


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_shares` | uint256 | amount of shares to redeem

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | in ETH that the shares where redeemed for
### withdrawWeth
```solidity
  function withdrawWeth(
    uint256 _shares
  ) external returns (uint256)
```
Allows a user to redeem shares for WETH
Burns CP tokens and transfers WETH to the CP


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_shares` | uint256 | amount of shares to redeem

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | in WETH that the shares where redeemed for
### _withdraw
```solidity
  function _withdraw(
    uint256 _shares
  ) internal returns (uint256)
```
Handles burning of tokens during withdraw.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_shares` | uint256 | amount of shares to redeem

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | in ETH that the shares where redeemed for
### requestEth
```solidity
  function requestEth(
    uint256 _amount
  ) external returns (uint256)
```
Sends ETH to other users or contracts.
Can only be called by authorized requestors.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | Amount of ETH wanted.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Amount`| uint256 | of ETH sent.
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
### _totalAssets
```solidity
  function _totalAssets(
  ) internal returns (uint256)
```
Quantity of all assets under control of this Vault, including those loaned out to Strategies



### _shareValue
```solidity
  function _shareValue(
    uint256 shares
  ) internal returns (uint256)
```
Determines the current value of `shares`


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`shares` | uint256 | amount of shares to calculate value for.

### _sharesForAmount
```solidity
  function _sharesForAmount(
    uint256 amount
  ) internal returns (uint256)
```
Determines how many shares `amount` of token would receive.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | of tokens to calculate number of shares for

### min
```solidity
  function min(
  ) internal returns (uint256)
```




### _beforeTokenTransfer
```solidity
  function _beforeTokenTransfer(
  ) internal
```




### receive
```solidity
  function receive(
  ) external
```
Fallback function to allow contract to receive ETH
Mints CP tokens to caller if caller is not Vault or WETH or Treasury



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive ETH
Mints CP tokens to caller if caller is not Vault or WETH or Treasury




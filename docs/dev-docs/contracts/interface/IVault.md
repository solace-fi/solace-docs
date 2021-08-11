


## Functions
### governance
```solidity
  function governance(
  ) external returns (address)
```
Governance.



### newGovernance
```solidity
  function newGovernance(
  ) external returns (address)
```
Governance to take over.



### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Transfers the governance role to a new governor.
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
  ) external returns (uint256)
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
Allows a user to redeem shares for ETH
Burns CP tokens and transfers WETH to the CP


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_shares` | uint256 | amount of shares to redeem

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | in WETH that the shares where redeemed for
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
### token
```solidity
  function token(
  ) external returns (contract IERC20)
```




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
    address _user
  ) external returns (uint40)
```
The timestamp that a depositor's cooldown started.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_user` | address | The depositor.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | timestamp in seconds.
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



### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```




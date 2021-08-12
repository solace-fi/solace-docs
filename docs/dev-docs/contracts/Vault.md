The `Vault` smart contract enables that `Capital Providers` can deposit **ETH** to mint shares of the `Vault`(CP tokens).


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
Allows `governance` to be transferred to a new `governor`.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The new governor.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the `governance` role.
Can only be called by the new `governor`.



### setEmergencyShutdown
```solidity
  function setEmergencyShutdown(
    bool active
  ) external
```
Activates or deactivates emergency shutdown.
Can only be called by the current `governor`.
During Emergency Shutdown:
1. No users may deposit into the `Vault`.
2. Withdraws can bypass cooldown.
3. Only `governance` may undo Emergency Shutdown.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`active` | bool | If true, the `Vault` goes into Emergency Shutdown.
If false, the `Vault` goes back into Normal Operation.

### setCooldownWindow
```solidity
  function setCooldownWindow(
    uint40 _min,
    uint40 _max
  ) external
```
Sets the `minimum` and `maximum` amount of time in seconds that a user must wait to withdraw funds.
Can only be called by the current `governor`.


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
Adds or removes requesting rights. The `requestor` can be user account or smart contract.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_dst` | address | The requestor address.
|`_status` | bool | True to add or false to remove rights.

### depositEth
```solidity
  function depositEth(
  ) public returns (uint256)
```
Allows a user to deposit **ETH** into the `Vault`(becoming a **Capital Provider**).
Shares of the `Vault` (CP tokens) are minted to caller.
It is called when `Vault` receives **ETH**.
It issues the amount of token share respected to the deposit to the `recipient`.
Reverts if `Vault` is in **Emergency Shutdown**



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokens`|  | The number of shares minted.
### depositWeth
```solidity
  function depositWeth(
    uint256 _amount
  ) external returns (uint256)
```
Allows a user to deposit **WETH** into the `Vault`(becoming a **Capital Provider**).
Shares of the Vault (CP tokens) are minted to caller.
It issues the amount of token share respected to the deposit to the `recipient`.
Reverts if `Vault` is in Emergency Shutdown


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | Amount of weth to deposit.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokens`| uint256 | The number of shares minted.
### _deposit
```solidity
  function _deposit(
    uint256 _amount
  ) internal returns (uint256)
```
Handles minting of tokens during deposit. It is called by **depositEth()** or **depositWeth()**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | Amount of **ETH** or **WETH** deposited.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokens`| uint256 | The number of shares minted.
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
    uint256 _shares
  ) external returns (uint256)
```
Allows a user to redeem shares for **ETH**.
Burns **CP**(Capital Provider) tokens and transfers **ETH** to the **Capital Provider**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_shares` | uint256 | amount of shares to redeem.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The amount in **ETH** that the shares where redeemed for.
### withdrawWeth
```solidity
  function withdrawWeth(
    uint256 _shares
  ) external returns (uint256)
```
Allows a user to redeem shares for **WETH**.
Burns **CP**(Capital Provider) tokens and transfers **WETH** to the **Capital Provider**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_shares` | uint256 | amount of shares to redeem.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The amount in **WETH** that the shares where redeemed for.
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
|`_shares` | uint256 | amount of shares to redeem.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The amount in **ETH** that the shares where redeemed for.
### requestEth
```solidity
  function requestEth(
    uint256 _amount
  ) external returns (uint256)
```
Sends **ETH** to other users or contracts. The users or contracts should be authorized requestors.
Can only be called by authorized `requestors`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_amount` | uint256 | The amount of **ETH** wanted.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The amount of **ETH** sent.
### maxRedeemableShares
```solidity
  function maxRedeemableShares(
    address user
  ) external returns (uint256)
```
Returns the maximum redeemable shares by the `user` such that `Vault` does not go under **MCR**(Minimum Capital Requirement).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`user` | address | The adddress of user to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`balance`| address | The max redeemable shares by the user.
### totalAssets
```solidity
  function totalAssets(
  ) external returns (uint256)
```
Returns the total quantity of all assets under control of this
        `Vault`, including those loaned out to a `Strategy` as well as those currently
        held in the `Vault`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`totalAssets`|  | The total assets under control of this vault.
### _totalAssets
```solidity
  function _totalAssets(
  ) internal returns (uint256)
```
Internal function that returns quantity of all assets under control of this `Vault`, including those loaned out to `Strategies`. 
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
### min
```solidity
  function min(
    uint256 a,
    uint256 b
  ) internal returns (uint256)
```
Internal function that returns the minimum value between two values.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 |  The first value.
|`b` | uint256 |  The second value.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`minValue`| uint256 | The minimum value.
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
Mints **CP** tokens to `caller` if `caller` is not `Vault` or `WETH` or `Treasury`.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive **ETH**.
Mints **CP** tokens to `caller` if `caller` is not `Vault` or `WETH` or `Treasury`.




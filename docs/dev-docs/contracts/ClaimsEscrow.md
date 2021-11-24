The payer of claims.

[**Policyholders**](/docs/protocol/policy-holder) can submit claims through their policy's product contract, in the process burning the policy and converting it to a claim.

The [**policyholder**](/docs/protocol/policy-holder) will then need to wait for a [`cooldownPeriod()`](#cooldownperiod) after which they can [`withdrawClaimsPayout()`](#withdrawclaimspayout).

To pay the claims funds are taken from the [`Vault`](./Vault) and deducted from [**capital provider**](/docs/user-guides/capital-provider/cp-role-guide) earnings.

Claims are **ERC721**s and abbreviated as **SCT**.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_
  ) public
```
Constructs the ClaimsEscrow contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`registry_` | address | The address of the [`Registry`](./Registry).

### receiveClaim
```solidity
  function receiveClaim(
    uint256 policyID,
    address claimant,
    uint256 amount
  ) external
```
Receives a claim.
The new claim will have the same ID that the policy had and will be withdrawable after a cooldown period.
Only callable by active products.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | ID of policy to claim.
|`claimant` | address | Address of the claimant.
|`amount` | uint256 | Amount of ETH to claim.

### withdrawClaimsPayout
```solidity
  function withdrawClaimsPayout(
    uint256 claimID
  ) external
```
Allows claimants to withdraw their claims payout.
Will attempt to withdraw the full amount then burn the claim if successful.
Only callable by the claimant.
Only callable after the cooldown period has elapsed (from the time the claim was approved and processed).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimID` | uint256 | The ID of the claim to withdraw payout for.

### claim
```solidity
  function claim(
    uint256 claimID
  ) external returns (struct IClaimsEscrow.Claim info)
```
Gets information about a claim.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimID` | uint256 | Claim to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`info`| uint256 | Claim info as struct.
### getClaim
```solidity
  function getClaim(
    uint256 claimID
  ) external returns (uint256 amount, uint256 receivedAt)
```
Gets information about a claim.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimID` | uint256 | Claim to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | Claim amount in ETH.
|`receivedAt`|  | Time claim was received at.
### isWithdrawable
```solidity
  function isWithdrawable(
    uint256 claimID
  ) external returns (bool status)
```
Returns true if the payout of the claim can be withdrawn.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimID` | uint256 | The ID to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| uint256 | True if it is withdrawable, false if not.
### timeLeft
```solidity
  function timeLeft(
    uint256 claimID
  ) external returns (uint256 time)
```
The amount of time left until the payout is withdrawable.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimID` | uint256 | The ID to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`time`| uint256 | The duration in seconds.
### totalClaimsOutstanding
```solidity
  function totalClaimsOutstanding(
  ) external returns (uint256)
```
Tracks how much **ETH** is required to payout all claims.



### cooldownPeriod
```solidity
  function cooldownPeriod(
  ) external returns (uint256)
```
The duration of time in seconds the user must wait between submitting a claim and withdrawing the payout.



### adjustClaim
```solidity
  function adjustClaim(
    uint256 claimID,
    uint256 value
  ) external
```
Adjusts the value of a claim.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimID` | uint256 | The claim to adjust.
|`value` | uint256 | The new payout of the claim.

### returnEth
```solidity
  function returnEth(
    uint256 amount
  ) external
```
Returns **ETH** to the [`Vault`](../Vault).
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`amount` | uint256 | Amount to pull.

### setCooldownPeriod
```solidity
  function setCooldownPeriod(
    uint256 cooldownPeriod_
  ) external
```
Set the cooldown duration.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`cooldownPeriod_` | uint256 | The new cooldown duration in seconds.

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




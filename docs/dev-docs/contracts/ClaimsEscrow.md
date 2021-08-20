The holder of claims. Policy holders can submit claims through their policy's product contract, in the process burning the policy and converting it to a claim.
The policy holder will then need to wait for a cooldown period after which they can withdraw the payout.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_
  ) public
```
The constructor. It constructs the ClaimsEscrow contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`registry_` | address | The address of the registry.

### receive
```solidity
  function receive(
  ) external
```
Fallback function to allow contract to receive **ETH**.



### fallback
```solidity
  function fallback(
  ) external
```
Fallback function to allow contract to receive **ETH**.



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

### adjustClaim
```solidity
  function adjustClaim(
    uint256 claimID,
    uint256 value
  ) external
```
Adjusts the value of a claim.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimID` | uint256 | The claim to adjust.
|`value` | uint256 | The new payout of the claim.

### sweep
```solidity
  function sweep(
    address token,
    uint256 amount,
    address dst
  ) external
```
Rescues misplaced tokens.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`token` | address | Token to pull.
|`amount` | uint256 | Amount to pull.
|`dst` | address | Destination for tokens.

### setCooldownPeriod
```solidity
  function setCooldownPeriod(
    uint256 period
  ) external
```
Set the cooldown duration.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`period` | uint256 | The new cooldown duration in seconds.

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
### exists
```solidity
  function exists(
    uint256 claimID
  ) external returns (bool status)
```
Returns true if the claim exists.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimID` | uint256 | The ID to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| uint256 | True if it exists, false if not.
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
### listClaims
```solidity
  function listClaims(
    address claimant
  ) external returns (uint256[] claimIDs)
```
List a user's claims.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`claimant` | address | User to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`claimIDs`| address | List of claimIDs.

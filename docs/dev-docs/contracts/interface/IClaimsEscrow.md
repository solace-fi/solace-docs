## `IClaimsEscrow`

The interface for the Claims Escrow contract.




### `receive()` (external)

Receive function. Deposits eth.



### `fallback()` (external)

Fallback function. Deposits eth.



### `receiveClaim(uint256 _policyID, address _claimant, uint256 _amount)` (external)

Receives a claim.
Only callable by active products.


claimID = policyID


### `withdrawClaimsPayout(uint256 claimID)` (external)

Allows claimants to withdraw their claims payout
Only callable by the claimant
Only callable after the cooldown period has elapsed (from the time the claim was approved and processed)




### `adjustClaim(uint256 claimID, uint256 value)` (external)

Adjusts the value of a claim.
Can only be called by the current governor.




### `sweep(address token, uint256 amount, address dst)` (external)

Rescues misplaced tokens.
Can only be called by the current governor.




### `cooldownPeriod() → uint256` (external)





### `setCooldownPeriod(uint256 _period)` (external)





### `governance() → address` (external)

Governance.



### `newGovernance() → address` (external)

Governance to take over.



### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.




### `ClaimReceived(uint256 claimID, address claimant, uint256 amount)`





### `ClaimWithdrawn(uint256 claimID, address claimant, uint256 amount)`





### `GovernanceTransferred(address _newGovernance)`






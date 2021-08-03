## `ClaimsEscrow`






### `constructor(address _registry)` (public)





### `receiveClaim(address _claimant) → uint256 claimId` (external)

Receives ETH from the Vault for a claim
Only callable by the Vault contract




### `withdrawClaimsPayout(uint256 claimId)` (external)

Allows claimants to withdraw their claims payout
Only callable by the claimant
Only callable after the cooldown period has elapsed (from the time the claim was approved and processed)





### `ClaimWithdrawn(uint256 claimId, address claimant, uint256 amount)`






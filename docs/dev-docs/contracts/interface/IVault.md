## `IVault`






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



### `setEmergencyShutdown(bool active)` (external)

Activates or deactivates emergency shutdown.
Can only be called by the current governor.
During Emergency Shutdown:
1. No users may deposit into the Vault.
2. Withdrawls can bypass cooldown.
3. Only Governance may undo Emergency Shutdown.




### `setCooldownWindow(uint64 _min, uint64 _max)` (external)

Sets the minimum and maximum amount of time a user must wait to withdraw funds.
Can only be called by the current governor.




### `deposit()` (external)

Allows a user to deposit ETH into the Vault (becoming a Capital Provider)
Shares of the Vault (CP tokens) are minted to caller
Called when Vault receives ETH
Deposits `_amount` `token`, issuing shares to `recipient`.
Reverts if Vault is in Emergency Shutdown



### `depositWeth(uint256 amount)` (external)

Allows a user to deposit WETH into the Vault (becoming a Capital Provider)
Shares of the Vault (CP tokens) are minted to caller
Deposits `_amount` `token`, issuing shares to `recipient`.
Reverts if Vault is in Emergency Shutdown




### `startCooldown()` (external)

Starts the cooldown.



### `withdraw(uint256 shares) → uint256` (external)

Allows a user to redeem shares for ETH
Burns CP tokens and transfers ETH to the CP




### `requestEth(uint256 amount) → uint256` (external)

Sends ETH to ClaimsEscrow to pay out claims.
Can only be called by ClaimsEscrow.




### `token() → contract IERC20` (external)





### `maxRedeemableShares(address user) → uint256` (external)

Returns the maximum redeemable shares by the `user` such that Vault does not go under MCR




### `totalAssets() → uint256` (external)

Returns the total quantity of all assets under control of this
        Vault, including those loaned out to a Strategy as well as those currently
        held in the Vault.




### `cooldownMin() → uint64` (external)

The minimum amount of time a user must wait to withdraw funds.



### `cooldownMax() → uint64` (external)

The maximum amount of time a user must wait to withdraw funds.



### `cooldownStart(address _user) → uint64` (external)

The timestamp that a depositor's cooldown started.





### `DepositMade(address depositor, uint256 amount, uint256 shares)`





### `WithdrawalMade(address withdrawer, uint256 value)`





### `FundsSent(uint256 value)`





### `EmergencyShutdown(bool active)`





### `GovernanceTransferred(address _newGovernance)`






## `Vault`

Capital Providers can deposit ETH to mint shares of the Vault (CP tokens)




### `strategies(address _strategy) → struct StrategyParams` (external)





### `constructor(address _registry, address _token)` (public)





### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setLockedProfitDegration(uint256 degration)` (external)

Changes the locked profit degration.
Can only be called by the current governor.




### `setMinCapitalRequirement(uint256 newMCR)` (external)

Changes the minimum capital requirement of the vault
Can only be called by the current governor.
During withdrawals, withdrawals are possible down to the Vault's MCR.




### `setPerformanceFee(uint256 fee)` (external)

Changes the performanceFee of the Vault. 
Can only be called by the current governor.




### `setEmergencyShutdown(bool active)` (external)

Activates or deactivates Vault mode where all Strategies go into full withdrawal.
Can only be called by the current governor.
During Emergency Shutdown:
1. No Users may deposit into the Vault (but may withdraw as usual.)
2. Governance may not add new Strategies.
3. Each Strategy must pay back their debt as quickly as reasonable to minimally affect their position.
4. Only Governance may undo Emergency Shutdown.




### `setWithdrawalQueue(address[] _queue)` (external)

Sets `withdrawalQueue` to be in the order specified by input array


Specify addresses in the order in which funds should be withdrawn.
The ordering should be least impactful (the Strategy whose core positions will be least impacted by
having funds removed) first, with the next least impactful second, etc.


### `addStrategy(address _strategy, uint256 _debtRatio, uint256 _minDebtPerHarvest, uint256 _maxDebtPerHarvest, uint256 _performanceFee)` (external)

Allows governance to approve a new Strategy
Can only be called by the current governor.




### `addStrategyToQueue(address _strategy)` (external)

Adds `_strategy` to `withdrawalQueue`
Can only be called by the current governor.




### `removeStrategyFromQueue(address _strategy)` (external)

Remove `_strategy` from `withdrawalQueue`
Can only be called by the current governor.
Can only be called on an active strategy (added using addStrategy)
`_strategy` cannot already be in the queue




### `revokeStrategy(address strategy)` (external)

Revoke a Strategy, setting its debt limit to 0 and preventing any future deposits.
Should only be used in the scenario where the Strategy is being retired
but no migration of the positions are possible, or in the
extreme scenario that the Strategy needs to be put into "Emergency Exit"
mode in order for it to exit as quickly as possible. The latter scenario
could be for any reason that is considered "critical" that the Strategy
exits its position as fast as possible, such as a sudden change in market
conditions leading to losses, or an imminent failure in an external
dependency.
This may only be called by governance or the Strategy itself.
A Strategy will only revoke itself during emergency shutdown.




### `processClaim(address claimant, uint256 amount)` (external)

Allows the Claims Adjustor contract to process a claim
Only callable by the ClaimsAdjustor contract
Sends claimed `amount` to Escrow, where it is withdrawable by the claimant after a cooldown period




### `updateStrategyDebtRatio(address _strategy, uint256 _debtRatio)` (external)

Change the quantity of assets `strategy` may manage.
Can only be called by the current governor.
Can only be called on an active strategy (added using addStrategy)




### `updateStrategyMinDebtPerHarvest(address _strategy, uint256 _minDebtPerHarvest)` (external)

Change the quantity assets per block this Vault may deposit to or
withdraw from `strategy`.
Can only be called by the current governor.
Can only be called on an active strategy (added using addStrategy)




### `updateStrategyMaxDebtPerHarvest(address _strategy, uint256 _maxDebtPerHarvest)` (external)

Change the quantity assets per block this Vault may deposit to or
withdraw from `strategy`.
Can only be called by the current governor.
Can only be called on an active strategy (added using addStrategy)




### `updateStrategyPerformanceFee(address _strategy, uint256 _performanceFee)` (external)

Change the fee the strategist will receive based on this Vault's performance
Can only be called by the current governor.
Can only be called on an active strategy (added using addStrategy)




### `deposit()` (public)

Allows a user to deposit ETH into the Vault (becoming a Capital Provider)
Shares of the Vault (CP tokens) are minteed to caller
Called when Vault receives ETH
Deposits `_amount` `token`, issuing shares to `recipient`.
Reverts if Vault is in Emergency Shutdown



### `withdraw(uint256 shares, uint256 maxLoss) → uint256` (external)

Allows a user to redeem shares for ETH
Burns CP tokens and transfers ETH to the CP




### `report(uint256 gain, uint256 loss, uint256 _debtPayment) → uint256` (external)

Reports the amount of assets the calling Strategy has free (usually in terms of ROI).
The performance fee is determined here, off of the strategy's profits (if any), and sent to governance.
The strategist's fee is also determined here (off of profits), to be handled according
to the strategist on the next harvest.
This may only be called by a Strategy managed by this Vault.


For approved strategies, this is the most efficient behavior.
The Strategy reports back what it has free, then Vault "decides"
whether to take some back or give it more. Note that the most it can
take is `gain + _debtPayment`, and the most it can give is all of the
remaining reserves. Anything outside of those bounds is abnormal behavior.
All approved strategies must have increased diligence around
calling this function, as abnormal behavior could become catastrophic.


### `creditAvailable(address strategy) → uint256` (external)

Amount of tokens in Vault a Strategy has access to as a credit line.
Check the Strategy's debt limit, as well as the tokens available in the Vault,
and determine the maximum amount of tokens (if any) the Strategy may draw on.
In the rare case the Vault is in emergency shutdown this will return 0.




### `expectedReturn(address strategy) → uint256` (external)

Provide an accurate expected value for the return this `strategy`
would provide to the Vault the next time `report()` is called
(since the last time it was called).




### `maxRedeemableShares(address user) → uint256` (external)

Returns the maximum redeemable shares by the `user` such that Vault does not go under MCR




### `totalAssets() → uint256` (external)

Returns the total quantity of all assets under control of this
        Vault, including those loaned out to a Strategy as well as those currently
        held in the Vault.




### `debtOutstanding(address strategy) → uint256` (external)

Determines if `strategy` is past its debt limit and if any tokens
should be withdrawn to the Vault.




### `_revokeStrategy(address strategy)` (internal)





### `_reportLoss(address strategy, uint256 loss)` (internal)





### `_assessFees(address strategy, uint256 gain)` (internal)

Issue new shares to cover fees
In effect, this reduces overall share price by the combined fee
may throw if Vault.totalAssets() > 1e64, or not called for more than a year



### `_totalAssets() → uint256` (internal)

Quantity of all assets under control of this Vault, including those loaned out to Strategies



### `_creditAvailable(address _strategy) → uint256` (internal)





### `_expectedReturn(address strategy) → uint256` (internal)





### `_shareValue(uint256 shares) → uint256` (internal)

Determines the current value of `shares`




### `_sharesForAmount(uint256 amount) → uint256` (internal)

Determines how many shares `amount` of token would receive.




### `_debtOutstanding(address strategy) → uint256` (internal)





### `receive()` (external)

Fallback function to allow contract to receive ETH
Mints CP tokens to caller if caller is not Vault or WETH




### `StrategyAdded(address strategy, uint256 debtRatio, uint256 minDebtPerHarvest, uint256 maxDebtPerHarvest, uint256 performanceFee)`





### `StrategyReported(address strategy, uint256 gain, uint256 loss, uint256 debtPaid, uint256 totalGain, uint256 totalLoss, uint256 totalDebt, uint256 debtAdded, uint256 debtRatio)`





### `DepositMade(address depositor, uint256 amount, uint256 shares)`





### `WithdrawalMade(address withdrawer, uint256 value)`





### `StrategyAddedToQueue(address strategy)`





### `StrategyRemovedFromQueue(address strategy)`





### `UpdateWithdrawalQueue(address[] queue)`





### `StrategyRevoked(address strategy)`





### `EmergencyShutdown(bool active)`





### `ClaimProcessed(address claimant, uint256 amount)`





### `StrategyUpdateDebtRatio(address strategy, uint256 newDebtRatio)`





### `StrategyUpdateMinDebtPerHarvest(address strategy, uint256 newMinDebtPerHarvest)`





### `StrategyUpdateMaxDebtPerHarvest(address strategy, uint256 newMaxDebtPerHarvest)`





### `StrategyUpdatePerformanceFee(address strategy, uint256 newPerformanceFee)`






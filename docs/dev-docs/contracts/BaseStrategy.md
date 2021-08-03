## `BaseStrategy`

To be inherited by individual Strategy contracts to execute on for investing pooled CP funds.




### `constructor(address _vault)` (internal)





### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setVault(address _vault)` (external)

Allows governance to set address for a new Vault contract
Can only be called by the current governor.




### `setEmergencyExit()` (external)

Activates emergency exit. Once activated, the Strategy will exit its
 position upon the next harvest, depositing all funds into the Vault as
 quickly as is reasonable given on-chain conditions.
 This may only be called by governance or the strategist.


See `vault.setEmergencyShutdown()` and `harvest()` for further details.

### `withdraw(uint256 _amountNeeded) → uint256 _loss` (external)

Transfers an amount of ETH to the Vault
Can only be called by the vault contract.




### `harvest()` (external)

@notice
 Harvests the Strategy, recognizing any profits or losses and adjusting
 the Strategy's position.

 In the rare case the Strategy is in emergency shutdown, this will exit
 the Strategy's position.

 This may only be called by governance, the strategist, or the keeper.
@dev
 When `harvest()` is called, the Strategy reports to the Vault (via
 `vault.report()`), so in some cases `harvest()` must be called in order
 to take in profits, to borrow newly available funds from the Vault, or
 otherwise adjust its position. In other cases `harvest()` must be
 called to report to the Vault on the Strategy's position, especially if
 any losses have occurred.



### `delegatedAssets() → uint256` (external)

@notice
 The amount (priced in want) of the total assets managed by this strategy should not count
 towards Yearn's TVL calculations.
@dev
 You can override this field to set it to a non-zero value if some of the assets of this
 Strategy is somehow delegated inside another part of of Yearn's ecosystem e.g. another Vault.
 Note that this value must be strictly less than or equal to the amount provided by
 `estimatedTotalAssets()` below, as the TVL calc will be total assets minus delegated assets.
 Also note that this value is used to determine the total assets under management by this
 strategy, for the purposes of computing the management fee in `Vault`
@return
 The amount of assets this strategy manages that should not be included in Yearn's Total Value
 Locked (TVL) calculation across it's ecosystem.



### `estimatedTotalAssets() → uint256` (public)

@notice
 Provide an accurate estimate for the total amount of assets
 (principle + return) that this Strategy is currently managing,
 denominated in terms of `want` tokens.

 This total should be realizable from this Strategy if it 
 were to divest its entire position based on current on-chain conditions.
@dev
 This function relies on external systems, which could be manipulated by 
 the attacker to give an inflated (or reduced) value produced by this function,
 based on current on-chain conditions (e.g. this function is possible to influence
 through flashloan attacks, oracle manipulations, or other DeFi attack mechanisms).




### `isActive() → bool` (public)

@notice
 Provide an indication of whether this strategy is currently "active"
 in that it is managing an active position, or will manage a position in
 the future. This should correlate to `harvest()` activity, so that Harvest
 events can be tracked externally by indexing agents.




### `liquidatePosition(uint256 _amountNeeded) → uint256 _liquidatedAmount, uint256 _loss` (internal)

@notice
 Liquidate up to `_amountNeeded` of `want` of this strategy's positions,
 irregardless of slippage. Any excess will be re-invested with `adjustPosition()`.


 
  This function should return the amount of `want` tokens made available by the
 liquidation. If there is a difference between them, `_loss` indicates whether the
 difference is due to a realized loss, or if there is some other sitution at play
 (e.g. locked funds) where the amount made available is less than what is needed.
 NOTE: The invariant `_liquidatedAmount + _loss <= _amountNeeded` should always be maintained

### `adjustPosition(uint256 _debtOutstanding)` (internal)

Perform any adjustments to the core position(s) of this Strategy given
what change the Vault made in the "investable capital" available to the
Strategy. Note that all "free capital" in the Strategy after the report
was made is available for reinvestment. Also note that this number
could be 0, and you should handle that scenario accordingly.

See comments regarding `_debtOutstanding` on `prepareReturn()`.



### `prepareReturn(uint256 _debtOutstanding) → uint256 _profit, uint256 _loss, uint256 _debtPayment` (internal)

Perform any Strategy unwinding or other calls necessary to capture the
"free return" this Strategy has generated since the last time its core
position(s) were adjusted. Examples include unwrapping extra rewards.
This call is only used during "normal operation" of a Strategy, and
should be optimized to minimize losses as much as possible.

This method returns any realized profits and/or realized losses
incurred, and should return the total amounts of profits/losses/debt
payments (in `want` tokens) for the Vault's accounting (e.g.
`want.balanceOf(this) >= _debtPayment + _profit - _loss`).

`_debtOutstanding` will be 0 if the Strategy is not past the configured
debt limit, otherwise its value will be how far past the debt limit
the Strategy is. The Strategy's debt limit is configured in the Vault.

NOTE: `_debtPayment` should be less than or equal to `_debtOutstanding`.
      It is okay for it to be less than `_debtOutstanding`, as that
      should only used as a guide for how much is left to pay back.
      Payments should be made to minimize loss from slippage, debt,
      withdrawal fees, etc.

See `vault.debtOutstanding()`.




### `EmergencyExitEnabled()`





### `Harvested(uint256 profit, uint256 loss, uint256 debtPayment, uint256 debtOutstanding)`






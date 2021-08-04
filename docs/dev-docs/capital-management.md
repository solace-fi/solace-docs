---
sidebar_position: 2
---

# Capital Management

## Vault

**Capital Providers (CP)** are essential stakeholders in the Solace ecosystem. They back platform risks by depositing ETH into the `Vault`. The Vault is also where funds are pulled from when paying out claims. A portion of the funds in `Vault` are deployed to yield-generating investment opportunities managed by `Strategy`. Together, `Vault` and `Strategy` automatically generates yield, rebalances investments, and shift capital where appropriate.

### StrategyParams
This is a struct that represents a `Strategy`. To keep track of the `Vault`'s strategies and their information. We have a mapping that maps the `Strategy` contract address to its StrategyParams, which include the following:
- **activation**: the `block.timestamp` at which a Strategy was added to the Vault
  - set when a new Strategy gets added using `addStrategy()`
- **debtRatio**: the Strategy's maximum borrow amount (in BPS of total assets)
  - can be updated by governance using `updateStrategyDebtRatio`
- **minDebtPerHarvest**: lower limit on the increase of debt since last harvest
  - can be updated by governance using `updateStrategyMinDebtPerHarvest`
- **maxDebtPerHarvest**: upper limit on the increase of debt since last harvest
  - can be updated by governance using `updateStrategyMaxDebtPerHarvest`
- **performanceFee**: fees rewarded to the `strategist` who deployed the Strategy
  - can be updated by governance using `updateStrategyPerformanceFee`
- **lastReport**: the `block.timestamp` of the last time a report of the Strategy's performance occurred
  - updated when `Strategy` calls `report()`
- **totalDebt**: total outstanding debt the Strategy owes to the Vault
  - updated when `Strategy` calls `report()`
- **totalGain**: total returns that Strategy has realized for Vault
  - updated when `Strategy` calls `report()`
- **totalLoss**: total losses that Strategy has realized for Vault
  - updated when `Strategy` calls `report()`

### deposit()
This is the payable function that gets called when CPs send ETH in return for shares of the Vault (CP Tokens). The exchange rate is determined by the `totalSupply` of CP tokens and the `totalAssets` under the Vault's management. Note that `totalAssets` includes the Vault balance and the assets undermanagement by the Vault's `Strategy`s. The deposited ETH gets wrapped to WETH that can get deployed to strategies.

### withdraw()
This function allows CPs to redeem an `amount` of their Vault shares (CP Tokens) in return for their ETH. If the balance of the `Vault` is insufficient, we have to withdraw the difference from a `Strategy` that the `Vault` is currently managing. If the Vault is managing multiple Strategies, the order of withdrawal is determined by `withdrawalQueue` up to the `amountNeeded` to give to the CP for their shares.

This performs forced withdrawals from Strategies, which means a Strategy might realies a loss which will affect the amount of ETH that the withdrawer receives for their shares. The caller can specify the maximum acceptable loss `maxLoss` (in BPS) to prevent excessive losses should this happen.

After the Vault balance is sufficient, the CP Tokens that the caller redeemed gets burned, WETH gets unwrapped to ETH, which is sent to the user.

This function reverts if:
- caller tries to redeem more shares than they own
- the withdrawal brings the Vault's `totalAssets` below the `minCapitalRequirement`
- losses realized from withdrawal is more than `maxLoss` considered acceptable by the caller

**maxRedeemableShares()** returns the maximum amount of Vault shares that a CP may redeem through `withdraw` without bringing the Vault under its `minCapitalRequirement`.

### addStrategy()
Creates a new instance of `StrategyParams` and stores it in the `strategies` mapping. The Strategy should already be a deployed `Strategy` contract since we need the address of the Strategy to add here. This function automatically appends the new Strategy to the `withdrawalQueue`.

### withdrawalQueue
The `Vault` manages a `withdrawalQueue` which is an array of `Strategy`s in the order in which we want to `withdraw` funds from in the event that a CP redeems their shares and we have insufficent funds in the `Vault`. The ordering should be least impactful (the Strategy whose core positions will be least impacted by having funds removed) first, with the next least impactful second, etc

The withdrawalQueue is updated and managed via the following functions in `Vault` :
- `addStrategyToQueue` : adds a Strategy to the end of the queue. NOTE: the `Strategy` must be added to the vault first using `addStrategy` before it can be added to the queue.
- `removeStrategyFromQueue` : removes a Strategy from the queue (returns a new queue in the original order, just without a specified Strategy in it)
- `setWithdrawalQueue` : governance can manually set the order of the withdrawal queue this way.

### report()
This function is called by a Strategy to report its `gains`, `losses`, and `debtPayment`. This is essentially information about what the Strategy has "free". The Vault then either takes back capital from the Strategy or allocates more capital to it. The most the Vault can take from Strategy here is the profits plus amount to pay back debt (`gain` + `debtPayment`). The most it can give is its remaining reserves.

If the Vault "decides" to allocate more capital to the Strategy, the amount is computed through `creditAvailable()`.
**creditAvailable()** computes the amount of the Vault's WETH the Strategy can use as a credit line. This takes into account the Strategy's debtLimit (`debtRatio`), the Vault balance, and determines  the maximum amount of tokens (if any) the Strategy may draw on.

Once `credit` available is calculated, if there is a credit deficit (`gain + debtPayment < credit`), `Vault` takes WETH back from Strategy. If there is a credit surplus (`gain + debtPayment > credit`), `Vault` gives more WETH to the Strategy.

performanceFees to the strategist and management (if any) are also calculated here.

## Strategy
Yield-generating strategies that `Vault` capital gets deployed to. Each Strategy inherits from `BaseStrategy`, which implements all of the required functionality to interoperate with the Vault contract. Strategies inherit the abstract methods in `BaseStrategy` and adapts it to its particular needs.

In the Strategy's constructor we approve the maximum approvable amount of the Strategy's `want` tokens (in this case WETH) right away, so that positions can be freely adjusted in `harvest()` and `vault.report()`.

### harvest()
This is called periodically even if positions needn't be adjusted. It could simply be called because enough time has elapsed since the last report. This is the only way the Vault can maintain an accurate picture of the Strategy's performance. `harvest()` calls on `vault.report()` and reports on the Strategy's `gains`, `losses`, and `debtPayment`, which may trigger fund rebalancing accordingly through the Vault.

Currently, `harvest()` can only be called by governance, but in the future could extend to keeper bots and the strategist.

In the event of an `emergencyExit`, we liquidate the Strategy's position through `liquidatePosition()`, which takes in the larger of the Strategy's `totalAssets` or `debtOutstanding` in order to book any losses. Otherwise, we free up returns for `Vault` to pull using `prepareReturn()`.

Strategy reports its status to the `Vault` by calling `vault.report()`.

NOTE: this is the only way that `vault.report()` can be called in order to accurately account for the Strategy's position. `vault.report()` can make more capital "free" to reinvest in this strategy, which is done so through `adjustPosition()`

### prepareReturn()
Returns any realized profits and/or realized losses incurred by the strategy, and should return the total amounts of profits/losses/debt payments (in `want` tokens) for the Vault's accounting.

### adjustPosition()
Perform any adjustments to the core position(s) of this Strategy given what change the Vault made in the "investable capital" available to the Strategy (could be 0)
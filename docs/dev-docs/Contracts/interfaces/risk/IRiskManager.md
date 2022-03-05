Calculates the acceptable risk, sellable cover, and capital requirements of Solace products and capital pool.

The total amount of sellable coverage is proportional to the assets in the [**risk backing capital pool**](../Vault). The max cover is split amongst products in a weighting system. [**Governance**](/docs/protocol/governance). can change these weights and with it each product's sellable cover.

The minimum capital requirement is proportional to the amount of cover sold to [active policies](../PolicyManager).

Solace can use leverage to sell more cover than the available capital. The amount of leverage is stored as [`partialReservesFactor`](#partialreservesfactor) and is settable by [**governance**](/docs/protocol/governance).


## Functions
### addRiskStrategy
```solidity
  function addRiskStrategy(
    address strategy_
  ) external returns (uint256 index)
```
Adds a new `Risk Strategy` to the `Risk Manager`. The community votes the strategy for coverage weight allocation.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The address of the risk strategy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`index`| address | The index of the risk strategy.
### setWeightAllocation
```solidity
  function setWeightAllocation(
    address strategy_,
    uint32 weight_
  ) external
```
Sets the weight of the `Risk Strategy`.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The address of the risk strategy.
|`weight_` | uint32 | The value to set.

### setStrategyStatus
```solidity
  function setStrategyStatus(
    address strategy_,
    uint8 status_
  ) external
```
Sets the status of the `Risk Strategy`.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The address of the risk strategy.
|`status_` | uint8 | The status to set.

### updateActiveCoverLimitForStrategy
```solidity
  function updateActiveCoverLimitForStrategy(
    address strategy,
    uint256 currentCoverLimit,
    uint256 newCoverLimit
  ) external
```
Updates the active cover limit amount for the given strategy. 
This function is only called by valid requesters when a new policy is bought or updated.

The policy manager and soteria will call this function for now.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy` | address | The strategy address to add cover limit.
|`currentCoverLimit` | uint256 | The current cover limit amount of the strategy's product.
|`newCoverLimit` | uint256 | The new cover limit amount of the strategy's product.

### addCoverLimitUpdater
```solidity
  function addCoverLimitUpdater(
    address updater
  ) external
```
Adds new address to allow updating cover limit amounts.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`updater` | address | The address that can update cover limit.

### removeCoverLimitUpdater
```solidity
  function removeCoverLimitUpdater(
    address updater
  ) external
```
Removes the cover limit updater.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`updater` | address | The address of updater to remove.

### strategyIsActive
```solidity
  function strategyIsActive(
    address strategy_
  ) external returns (bool status)
```
Checks is an address is an active strategy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The risk strategy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| address | True if the strategy is active.
### strategyAt
```solidity
  function strategyAt(
    uint256 index_
  ) external returns (address strategy)
```
Return the strategy at an index.

Enumerable `[1, numStrategies]`.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index_` | uint256 | Index to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`strategy`| uint256 | The product address.
### numStrategies
```solidity
  function numStrategies(
  ) external returns (uint256 count)
```
Returns the number of registered strategies..



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`|  | The number of strategies.
### strategyInfo
```solidity
  function strategyInfo(
    address strategy_
  ) external returns (uint256 id, uint32 weight, enum IRiskManager.StrategyStatus status, uint256 timestamp)
```
Returns the risk strategy information.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The risk strategy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`id`| address | The id of the risk strategy.
|`weight`|  | The risk strategy weight allocation.
|`status`|  | The status of risk strategy.
|`timestamp`|  | The added time of the risk strategy.

### weightPerStrategy
```solidity
  function weightPerStrategy(
    address strategy_
  ) external returns (uint32 weight)
```
Returns the allocated weight for the risk strategy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The risk strategy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`weight`| address | The risk strategy weight allocation.
### maxCoverPerStrategy
```solidity
  function maxCoverPerStrategy(
  ) external returns (uint256 cover)
```
The maximum amount of cover for given strategy can sell.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`| address | The max amount of cover in wei.
### activeCoverLimit
```solidity
  function activeCoverLimit(
  ) external returns (uint256 amount)
```
Returns the current amount covered (in wei).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`|  | The covered amount (in wei).
### activeCoverLimitPerStrategy
```solidity
  function activeCoverLimitPerStrategy(
    address riskStrategy
  ) external returns (uint256 amount)
```
Returns the current amount covered (in wei).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`riskStrategy` | address | The risk strategy address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| address | The covered amount (in wei).
### maxCover
```solidity
  function maxCover(
  ) external returns (uint256 cover)
```
The maximum amount of cover that Solace as a whole can sell.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`|  | The max amount of cover in wei.
### weightSum
```solidity
  function weightSum(
  ) external returns (uint32 sum)
```
Returns the sum of allocation weights for all strategies.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`sum`|  | WeightSum.
### minCapitalRequirement
```solidity
  function minCapitalRequirement(
  ) external returns (uint256 mcr)
```
The minimum amount of capital required to safely cover all policies.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mcr`|  | The minimum capital requirement.
### minCapitalRequirementPerStrategy
```solidity
  function minCapitalRequirementPerStrategy(
    address strategy_
  ) external returns (uint256 mcr)
```
The minimum amount of capital required to safely cover all policies.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The risk strategy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mcr`| address | The minimum capital requirement.
### partialReservesFactor
```solidity
  function partialReservesFactor(
  ) external returns (uint16 factor)
```
Multiplier for minimum capital requirement.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`factor`|  | Partial reserves factor in BPS.
### setPartialReservesFactor
```solidity
  function setPartialReservesFactor(
    uint16 partialReservesFactor_
  ) external
```
Sets the partial reserves factor.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`partialReservesFactor_` | uint16 | New partial reserves factor in BPS.

## Events
### StrategyAdded
```solidity
  event StrategyAdded(
  )
```
Emitted when new strategy is created.


### StrategyStatusUpdated
```solidity
  event StrategyStatusUpdated(
  )
```
Emitted when strategy status is updated.


### RiskStrategyWeightAllocationIncreased
```solidity
  event RiskStrategyWeightAllocationIncreased(
  )
```
Emitted when strategy's allocation weight is increased.


### RiskStrategyWeightAllocationDecreased
```solidity
  event RiskStrategyWeightAllocationDecreased(
  )
```
Emitted when strategy's allocation weight is decreased.


### RiskStrategyWeightAllocationSet
```solidity
  event RiskStrategyWeightAllocationSet(
  )
```
Emitted when strategy's allocation weight is set.


### PartialReservesFactorSet
```solidity
  event PartialReservesFactorSet(
  )
```
Emitted when the partial reserves factor is set.


### ActiveCoverLimitUpdated
```solidity
  event ActiveCoverLimitUpdated(
  )
```
Emitted when the cover limit amount of the strategy is updated.


### CoverLimitUpdaterAdded
```solidity
  event CoverLimitUpdaterAdded(
  )
```
Emitted when the cover limit updater is set.


### CoverLimitUpdaterDeleted
```solidity
  event CoverLimitUpdaterDeleted(
  )
```
Emitted when the cover limit updater is removed.



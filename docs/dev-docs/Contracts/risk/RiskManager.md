<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/risk/RiskManager.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Calculates the acceptable risk, sellable cover, and capital requirements of Solace products and capital pool.

The total amount of sellable coverage is proportional to the assets in the [**risk backing capital pool**](./Vault). The max cover is split amongst products in a weighting system. [**Governance**](/docs/protocol/governance) can change these weights and with it each product's sellable cover.

The minimum capital requirement is proportional to the amount of cover sold to active policies.

Solace can use leverage to sell more cover than the available capital. The amount of leverage is stored as [`partialReservesFactor`](#partialreservesfactor) and is settable by [**governance**](/docs/protocol/governance).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_
  ) public
```
Constructs the RiskManager contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`registry_` | address | Address of registry.

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
|`index`| uint256 | The index of the risk strategy.
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
  ) public
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
  ) public returns (bool status)
```
Checks if the given risk strategy is active.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The risk strategy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| bool | True if the strategy is active.
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
|`strategy`| address | The product address.
### numStrategies
```solidity
  function numStrategies(
  ) external returns (uint256 count)
```
Returns the number of registered strategies..



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`| uint256 | The number of strategies.
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
|`id`| uint256 | The id of the risk strategy.
|`weight`| uint32 | The risk strategy weight allocation.
|`status`| enum IRiskManager.StrategyStatus | The status of risk strategy.
|`timestamp`| uint256 | The added time of the risk strategy.

### weightPerStrategy
```solidity
  function weightPerStrategy(
    address strategy_
  ) public returns (uint32 weight)
```
Returns the allocated weight for the risk strategy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy_` | address | The risk strategy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`weight`| uint32 | The risk strategy weight allocation.
### maxCover
```solidity
  function maxCover(
  ) public returns (uint256 cover)
```
The maximum amount of cover that Solace as a whole can sell.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`| uint256 | The max amount of cover in wei.
### maxCoverPerStrategy
```solidity
  function maxCoverPerStrategy(
  ) public returns (uint256 cover)
```
The maximum amount of cover for given strategy can sell.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`| uint256 | The max amount of cover in wei.
### weightSum
```solidity
  function weightSum(
  ) public returns (uint32 sum)
```
Returns the sum of allocation weights for all strategies.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`sum`| uint32 | WeightSum.
### activeCoverLimit
```solidity
  function activeCoverLimit(
  ) public returns (uint256 amount)
```
Returns the current amount covered (in wei).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The covered amount (in wei).
### activeCoverLimitPerStrategy
```solidity
  function activeCoverLimitPerStrategy(
    address riskStrategy
  ) public returns (uint256 amount)
```
Returns the current amount covered (in wei).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`riskStrategy` | address | The risk strategy address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The covered amount (in wei).
### minCapitalRequirement
```solidity
  function minCapitalRequirement(
  ) external returns (uint256 mcr)
```
The minimum amount of capital required to safely cover all policies.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mcr`| uint256 | The minimum capital requirement.
### minCapitalRequirementPerStrategy
```solidity
  function minCapitalRequirementPerStrategy(
    address strategy
  ) public returns (uint256 smcr)
```
The minimum amount of capital required to safely cover all policies.

The strategy could have active policies when it is disabled. Because of that
we are not adding "strategyIsActive()" require statement.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`strategy` | address | The risk strategy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`smcr`| uint256 | The strategy minimum capital requirement.
### partialReservesFactor
```solidity
  function partialReservesFactor(
  ) external returns (uint16 factor)
```
Multiplier for minimum capital requirement.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`factor`| uint16 | Partial reserves factor in BPS.
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


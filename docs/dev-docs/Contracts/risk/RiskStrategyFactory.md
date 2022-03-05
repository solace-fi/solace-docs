The **RiskStrategyFactory** manages the creation of new products.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_
  ) public
```
Constructs the `RiskStrategyFactory` contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/protocol/governance).
|`registry_` | address | Address of registry.

### createRiskStrategy
```solidity
  function createRiskStrategy(
    address base_,
    address[] products_,
    uint32[] weights_,
    uint24[] prices_,
    uint16[] divisors_
  ) external returns (address strategy)
```
Creates a new `Risk Strategy`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`base_` | address | The strategy's source code.
|`products_` | address[] | The strategy products.
|`weights_` | uint32[] |  The weights of the strategy products.
|`prices_` | uint24[] |   The prices of the strategy products.
|`divisors_` | uint16[] | The divisors(max cover per policy divisor) of the strategy products. 

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`strategy`| address | The address of newly created strategy.
### create2RiskStrategy
```solidity
  function create2RiskStrategy(
    address base_,
    bytes32 salt_,
    address[] products_,
    uint32[] weights_,
    uint24[] prices_,
    uint16[] divisors_
  ) external returns (address strategy)
```
Creates a new `Risk Strategy`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`base_` | address |  The strategy's source code.
|`salt_` | bytes32 | The salt for CREATE2.
|`products_` | address[] | The strategy products.
|`weights_` | uint32[] |  The weights of the strategy products.
|`prices_` | uint24[] |   The prices of the strategy products.
|`divisors_` | uint16[] | The divisors(max cover per policy divisor) of the strategy products. 

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`strategy`| address | The address of newly created strategy.

Calculates the acceptable risk, sellable cover, and capital requirements of Solace products and capital pool.

Governance can reallocate capital towards different products and change the partial reserves factor for leverage.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address registry_
  ) public
```
Constructs the risk manager contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`registry_` | address | Address of registry.

### setProductWeights
```solidity
  function setProductWeights(
    address[] products_,
    uint32[] weights_
  ) external
```
Sets the products and their weights.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`products_` | address[] | The products.
|`weights_` | uint32[] | The product weights.

### setPartialReservesFactor
```solidity
  function setPartialReservesFactor(
    uint16 factor
  ) external
```
Sets the partial reserves factor.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`factor` | uint16 | New partial reserves factor in BPS.

### maxCoverAmount
```solidity
  function maxCoverAmount(
    address product
  ) external returns (uint256)
```
The maximum amount of cover that a product can sell.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`product` | address | The product that wants to sell cover.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | max amount of cover in wei.
### minCapitalRequirement
```solidity
  function minCapitalRequirement(
  ) external returns (uint256)
```
The minimum amount of capital required to safely cover all policies.




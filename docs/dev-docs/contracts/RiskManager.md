


## Functions
### constructor
```solidity
  function constructor(
    address _governance,
    address _registry
  ) public
```
Constructs the risk manager contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | Address of the governor.
|`_registry` | address | Address of registry.

### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new governor.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The new governor.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the governance role.
Can only be called by the new governor.



### setProductWeights
```solidity
  function setProductWeights(
    address[] _products,
    uint32[] _weights
  ) external
```
Sets the products and their weights.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_products` | address[] | The products.
|`_weights` | uint32[] | The product weights.

### setPartialReservesFactor
```solidity
  function setPartialReservesFactor(
    uint16 _factor
  ) external
```
Sets the partial reserves factor.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_factor` | uint16 | New partial reserves factor in BPS.

### maxCoverAmount
```solidity
  function maxCoverAmount(
    address _product
  ) external returns (uint256)
```
The maximum amount of cover that a product can sell.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_product` | address | The product that wants to sell cover.

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




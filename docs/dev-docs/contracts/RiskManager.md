Calculates the acceptable risk, sellable cover, and capital requirements of Solace products and capital pool.

The total amount of sellable coverage is proportional to the assets in the [**risk backing capital pool**](./Vault). The max cover is split amongst products in a weighting system. [**Governance**](/docs/protocol/governance). can change these weights and with it each product's sellable cover.

The minimum capital requirement is proportional to the amount of cover sold to [active policies](./PolicyManager).

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

### maxCover
```solidity
  function maxCover(
  ) public returns (uint256 cover)
```
The maximum amount of cover that Solace as a whole can sell.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`|  | The max amount of cover in wei.
### maxCoverAmount
```solidity
  function maxCoverAmount(
    address prod
  ) external returns (uint256 cover)
```
The maximum amount of cover that a product can sell.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`prod` | address | The product that wants to sell cover.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`| address | The max amount of cover in wei.
### numProducts
```solidity
  function numProducts(
  ) external returns (uint256 count)
```
Return the number of registered products.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`|  | Number of products.
### product
```solidity
  function product(
    uint256 index
  ) external returns (address prod)
```
Return the product at an index.

Enumerable `[0, numProducts-1]`.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint256 | Index to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`prod`| uint256 | The product address.
### weight
```solidity
  function weight(
    address prod
  ) external returns (uint32 mass)
```
Returns the weight of a product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`prod` | address | Product to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`mass`| address | The product's weight.
### weightSum
```solidity
  function weightSum(
  ) external returns (uint32 sum)
```
Returns the sum of weights.



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
### addProduct
```solidity
  function addProduct(
    address product_,
    uint32 weight_
  ) external
```
Adds a new product and sets its weight.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`product_` | address | Address of new product.
|`weight_` | uint32 | The products weight.

### setProductWeights
```solidity
  function setProductWeights(
    address[] products_,
    uint32[] weights_
  ) external
```
Sets the products and their weights.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`products_` | address[] | The products.
|`weights_` | uint32[] | The product weights.

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


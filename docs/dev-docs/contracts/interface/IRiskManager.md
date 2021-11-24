Calculates the acceptable risk, sellable cover, and capital requirements of Solace products and capital pool.

The total amount of sellable coverage is proportional to the assets in the [**risk backing capital pool**](../Vault). The max cover is split amongst products in a weighting system. [**Governance**](/docs/protocol/governance). can change these weights and with it each product's sellable cover.

The minimum capital requirement is proportional to the amount of cover sold to [active policies](../PolicyManager).

Solace can use leverage to sell more cover than the available capital. The amount of leverage is stored as [`partialReservesFactor`](#partialreservesfactor) and is settable by [**governance**](/docs/protocol/governance).


## Functions
### assessRisk
```solidity
  function assessRisk(
    address product,
    uint256 currentCover,
    uint256 newCover
  ) external returns (bool acceptable, uint24 price)
```
Given a request for coverage, determines if that risk is acceptable and if so at what price.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`product` | address | The product that wants to sell coverage.
|`currentCover` | uint256 | If updating an existing policy's cover amount, the current cover amount, otherwise 0.
|`newCover` | uint256 | The cover amount requested.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`acceptable`| address | True if risk of the new cover is acceptable, false otherwise.
|`price`| uint256 | The price in wei per 1e12 wei of coverage per block.
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
### maxCoverPerProduct
```solidity
  function maxCoverPerProduct(
    address prod
  ) external returns (uint256 cover)
```
The maximum amount of cover that a product can sell in total.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`prod` | address | The product that wants to sell cover.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`| address | The max amount of cover in wei.
### sellableCoverPerProduct
```solidity
  function sellableCoverPerProduct(
    address prod
  ) external returns (uint256 cover)
```
The amount of cover that a product can still sell.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`prod` | address | The product that wants to sell cover.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`| address | The max amount of cover in wei.
### maxCoverPerPolicy
```solidity
  function maxCoverPerPolicy(
    address prod
  ) external returns (uint256 cover)
```
The maximum amount of cover that a product can sell in a single policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`prod` | address | The product that wants to sell cover.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`cover`| address | The max amount of cover in wei.
### productIsActive
```solidity
  function productIsActive(
    address prod
  ) external returns (bool status)
```
Checks is an address is an active product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`prod` | address | The product to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| address | True if the product is active.
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

Enumerable `[1, numProducts]`.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`index` | uint256 | Index to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`prod`| uint256 | The product address.
### productRiskParams
```solidity
  function productRiskParams(
    address prod
  ) external returns (uint32 weight, uint24 price, uint16 divisor)
```
Returns a product's risk parameters.
The product must be active.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`prod` | address | The product to get parameters for.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`weight`| address | The weighted allocation of this product vs other products.
|`price`|  | The price in wei per 1e12 wei of coverage per block.
|`divisor`|  | The max cover per policy divisor.
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
    uint32 weight_,
    uint24 price_,
    uint16 divisor_
  ) external
```
Adds a product.
If the product is already added, sets its parameters.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`product_` | address | Address of the product.
|`weight_` | uint32 | The products weight.
|`price_` | uint24 | The products price in wei per 1e12 wei of coverage per block.
|`divisor_` | uint16 | The max cover per policy divisor.

### removeProduct
```solidity
  function removeProduct(
    address product_
  ) external
```
Removes a product.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`product_` | address | Address of the product to remove.

### setProductParams
```solidity
  function setProductParams(
    address[] products_,
    uint32[] weights_,
    uint24[] prices_,
    uint16[] divisors_
  ) external
```
Sets the products and their parameters.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`products_` | address[] | The products.
|`weights_` | uint32[] | The product weights.
|`prices_` | uint24[] | The product prices.
|`divisors_` | uint16[] | The max cover per policy divisors.

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
### ProductParamsSet
```solidity
  event ProductParamsSet(
  )
```
Emitted when a product's risk parameters are set.
Includes adding and removing products.


### PartialReservesFactorSet
```solidity
  event PartialReservesFactorSet(
  )
```
Emitted when the partial reserves factor is set.



<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/risk/IRiskStrategy.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The interface of `RiskStragety` smart contract that is created by [`RiskStrategyFactor`](./RiskStrategyFactory).
The `RiskStrategy` defines the product risk params for coverage products.



## Functions
### assessRisk
```solidity
  function assessRisk(
    address product_,
    uint256 currentCover_,
    uint256 newCover_
  ) external returns (bool acceptable, uint24 price)
```
Given a request for coverage, determines if that risk is acceptable and if so at what price.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product_` | address | The product that wants to sell coverage. |
| `currentCover_` | uint256 | If updating an existing policy's cover amount, the current cover amount, otherwise 0. |
| `newCover_` | uint256 | The cover amount requested. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `acceptable` | bool | True if risk of the new cover is acceptable, false otherwise. |
| `price` | uint24 | The price in wei per 1e12 wei of coverage per block. |

### maxCover
```solidity
  function maxCover() external returns (uint256 cover)
```
The maximum amount of cover that `Risk Strategy` as a whole can sell.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cover` | uint256 | The max amount of cover in `wei` |

### maxCoverPerProduct
```solidity
  function maxCoverPerProduct(
    address product_
  ) external returns (uint256 cover)
```
The maximum amount of cover in `Risk Strategy` that a product can sell in total.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product_` | address | The product that wants to sell cover. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cover` | uint256 | The max amount of cover in `wei` |

### sellableCoverPerProduct
```solidity
  function sellableCoverPerProduct(
    address product_
  ) external returns (uint256 cover)
```
The amount of cover in `Risk Strategy` that a product can still sell.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product_` | address | The product that wants to sell cover. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cover` | uint256 | The max amount of cover in `wei`. |

### maxCoverPerPolicy
```solidity
  function maxCoverPerPolicy(
    address product_
  ) external returns (uint256 cover)
```
The maximum amount of cover in `Risk Strategy` that a product can sell in a single policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product_` | address | The product that wants to sell cover. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `cover` | uint256 | The max amount of cover in `wei`. |

### productIsActive
```solidity
  function productIsActive(
    address product_
  ) external returns (bool status)
```
Checks if product is an active product in `Risk Strategy`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product_` | address | The product to check. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if the product is active. |

### numProducts
```solidity
  function numProducts() external returns (uint256 count)
```
Returns the number of registered products in `Risk Strategy`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The number of products. |

### product
```solidity
  function product(
    uint256 index_
  ) external returns (address prod)
```
Returns the product at an index in `Risk Strategy`.

Enumerable `[1, numProducts]`.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `index_` | uint256 | The index to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `prod` | address | The product address. |

### productRiskParams
```solidity
  function productRiskParams(
    address product_
  ) external returns (uint32 weight, uint24 price, uint16 divisor)
```
Returns given product's risk paramaters. The product must be active.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product_` | address | The product to get parameters for. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `weight` | uint32 | The weighted allocation of this product. |
| `price` | uint24 | The price in `wei` per `1e12 wei` of coverage per block. |
| `divisor` | uint16 | The max cover per policy divisor. |

### weightSum
```solidity
  function weightSum() external returns (uint32 sum)
```
Returns the sum of weights in `Risk Strategy`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `sum` | uint32 | The weight sum. |

### weightAllocation
```solidity
  function weightAllocation() external returns (uint32 weightAllocation_)
```
Returns risk allocation weight in `Risk Strategy`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `weightAllocation_` | uint32 | The weight allocation. |

### strategist
```solidity
  function strategist() external returns (address strategist_)
```
Returns the strategist address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategist_` | address | The address of the risk strategy owner. |

### riskManager
```solidity
  function riskManager() external returns (address riskManager_)
```
Returns the risk manager address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `riskManager_` | address | The address of the risk strategy owner. |

### status
```solidity
  function status() external returns (bool status)
```
Returns the status of the risk strategy.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if strategy is active. |

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
| `product_` | address | Address of the product. |
| `weight_` | uint32 | The products weight. |
| `price_` | uint24 | The products price in wei per 1e12 wei of coverage per block. |
| `divisor_` | uint16 | The max cover per policy divisor. |

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
| `product_` | address | Address of the product to remove. |

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
| `products_` | address[] | The products. |
| `weights_` | uint32[] | The product weights. |
| `prices_` | uint24[] | The product prices. |
| `divisors_` | uint16[] | The max cover per policy divisors. |

### setRiskManager
```solidity
  function setRiskManager(
    address riskManager_
  ) external
```
Changes the risk manager.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `riskManager_` | address | The new risk manager. |


## Events
### ProductRiskParamsSet
```solidity
  event ProductRiskParamsSet()
```
Emitted when a product's risk parameters are set at initialization.


### ProductAddedByGovernance
```solidity
  event ProductAddedByGovernance()
```
Emitted when governance adds a product.


### ProductUpdatedByGovernance
```solidity
  event ProductUpdatedByGovernance()
```
Emitted when governance updates a product.


### ProductRemovedByGovernance
```solidity
  event ProductRemovedByGovernance()
```
Emitted when governance removes a product.


### ProductRiskParamsSetByGovernance
```solidity
  event ProductRiskParamsSetByGovernance()
```
Emitted when governance sets product risk params.


### RiskManagerSet
```solidity
  event RiskManagerSet()
```
Emitted when RiskManager is set.



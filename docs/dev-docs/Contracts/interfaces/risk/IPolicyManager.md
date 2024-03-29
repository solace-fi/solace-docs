<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/risk/IPolicyManager.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The **PolicyManager** manages the creation of new policies and modification of existing policies.

Most users will not interact with **PolicyManager** directly. To buy, modify, or cancel policies, users should use the respective [**product**](../products/BaseProduct) for the position they would like to cover. Use **PolicyManager** to view policies.

Policies are [**ERC721s**](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721).


## Functions
### policyInfo
```solidity
  function policyInfo(
    uint256 policyID
  ) external returns (struct IPolicyManager.PolicyInfo info)
```
Information about a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID to return info. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IPolicyManager.PolicyInfo | info in a struct. |

### getPolicyInfo
```solidity
  function getPolicyInfo(
    uint256 policyID
  ) external returns (address policyholder, address product, uint256 coverLimit, uint40 expirationBlock, uint24 price, bytes positionDescription, address riskStrategy)
```
Information about a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID to return info. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyholder` | address | The address of the policy holder. |
| `product` | address | The product of the policy. |
| `coverLimit` | uint256 | The amount covered for the policy. |
| `expirationBlock` | uint40 | The expiration block of the policy. |
| `price` | uint24 | The price of the policy. |
| `positionDescription` | bytes | The description of the covered position(s). |
| `riskStrategy` | address | The risk strategy of the covered product. |

### getPolicyholder
```solidity
  function getPolicyholder(
    uint256 policyID
  ) external returns (address policyholder)
```
The holder of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyholder` | address | The address of the policy holder. |

### getPolicyProduct
```solidity
  function getPolicyProduct(
    uint256 policyID
  ) external returns (address product)
```
The product used to purchase the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `product` | address | The product of the policy. |

### getPolicyExpirationBlock
```solidity
  function getPolicyExpirationBlock(
    uint256 policyID
  ) external returns (uint40 expirationBlock)
```
The expiration block of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `expirationBlock` | uint40 | The expiration block of the policy. |

### getPolicyCoverLimit
```solidity
  function getPolicyCoverLimit(
    uint256 policyID
  ) external returns (uint256 coverLimit)
```
The cover limit of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `coverLimit` | uint256 | The cover limit of the policy. |

### getPolicyPrice
```solidity
  function getPolicyPrice(
    uint256 policyID
  ) external returns (uint24 price)
```
The cover price in wei per block per wei multiplied by 1e12.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `price` | uint24 | The price of the policy. |

### getPositionDescription
```solidity
  function getPositionDescription(
    uint256 policyID
  ) external returns (bytes positionDescription)
```
The byte encoded description of the covered position(s).
Only makes sense in context of the product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `positionDescription` | bytes | The description of the covered position(s). |

### getPolicyRiskStrategy
```solidity
  function getPolicyRiskStrategy(
    uint256 policyID
  ) external returns (address strategy)
```
Returns the risk strategy of the product in policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategy` | address | The risk strategy address. |

### policyIsActive
```solidity
  function policyIsActive() external returns (bool)
```




### policyHasExpired
```solidity
  function policyHasExpired(
    uint256 policyID
  ) external returns (bool)
```
Checks whether a given policy is expired.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if the policy is expired. |

### totalPolicyCount
```solidity
  function totalPolicyCount() external returns (uint256 count)
```
The total number of policies ever created.



### policyDescriptor
```solidity
  function policyDescriptor() external returns (address)
```
The address of the [`PolicyDescriptor`](./PolicyDescriptor) contract.



### registry
```solidity
  function registry() external returns (address registry_)
```
Returns [`Registry`](./Registry) contract address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `registry_` | address | The `Registry` address. |

### createPolicy
```solidity
  function createPolicy(
    address policyholder,
    uint256 coverLimit,
    uint40 expirationBlock,
    uint24 price,
    bytes positionDescription,
    address riskStrategy
  ) external returns (uint256 policyID)
```
Creates a new policy.
Can only be called by **products**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyholder` | address | The receiver of new policy token. |
| `coverLimit` | uint256 | The policy coverage amount (in wei). |
| `expirationBlock` | uint40 | The policy expiration block number. |
| `price` | uint24 | The coverage price. |
| `positionDescription` | bytes | The description of the covered position(s). |
| `riskStrategy` | address | The risk strategy of the covered product. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |

### setPolicyInfo
```solidity
  function setPolicyInfo(
    uint256 policyID,
    uint256 coverLimit,
    uint40 expirationBlock,
    uint24 price,
    bytes positionDescription,
    address riskStrategy
  ) external
```
Modifies a policy.
Can only be called by **products**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |
| `coverLimit` | uint256 | The policy coverage amount (in wei). |
| `expirationBlock` | uint40 | The policy expiration block number. |
| `price` | uint24 | The coverage price. |
| `positionDescription` | bytes | The description of the covered position(s). |
| `riskStrategy` | address | The risk strategy of the covered positions(s). |

### updatePolicyInfo
```solidity
  function updatePolicyInfo(
    uint256 policyID,
    uint256 coverLimit,
    uint40 expirationBlock,
    uint24 price
  ) external
```
Modifies a policy without position description value.
Can only be called by **products**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The policy ID. |
| `coverLimit` | uint256 | The policy coverage amount (in wei). |
| `expirationBlock` | uint40 | The policy expiration block number. |
| `price` | uint24 | The coverage price. |

### burn
```solidity
  function burn(
    uint256 policyID
  ) external
```
Burns expired or cancelled policies.
Can only be called by **products**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyID` | uint256 | The ID of the policy to burn. |

### updateActivePolicies
```solidity
  function updateActivePolicies(
    uint256[] policyIDs
  ) external
```
Burns expired policies.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyIDs` | uint256[] | The list of expired policies. |

### productIsActive
```solidity
  function productIsActive(
    address product
  ) external returns (bool status)
```
Checks is an address is an active product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product` | address | The product to check. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if the product is active. |

### numProducts
```solidity
  function numProducts() external returns (uint256 count)
```
Returns the number of products.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The number of products. |

### getProduct
```solidity
  function getProduct(
    uint256 productNum
  ) external returns (address product)
```
Returns the product at the given index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `productNum` | uint256 | The index to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `product` | address | The address of the product. |

### addProduct
```solidity
  function addProduct(
    address product
  ) external
```
Adds a new product.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product` | address | the new product |

### removeProduct
```solidity
  function removeProduct(
    address product
  ) external
```
Removes a product.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `product` | address | the product to remove |

### setPolicyDescriptor
```solidity
  function setPolicyDescriptor(
    address policyDescriptor
  ) external
```
Set the token descriptor.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `policyDescriptor` | address | The new token descriptor address. |

### setRegistry
```solidity
  function setRegistry(
    address registry_
  ) external
```
Sets the [`Registry`](./Registry) contract address.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `registry_` | address | The address of `Registry` contract. |


## Events
### PolicyCreated
```solidity
  event PolicyCreated()
```
Emitted when a policy is created.


### PolicyUpdated
```solidity
  event PolicyUpdated()
```
Emitted when a policy is updated.


### PolicyBurned
```solidity
  event PolicyBurned()
```
Emitted when a policy is burned.


### PolicyDescriptorSet
```solidity
  event PolicyDescriptorSet()
```
Emitted when the policy descriptor is set.


### ProductAdded
```solidity
  event ProductAdded()
```
Emitted when a new product is added.


### ProductRemoved
```solidity
  event ProductRemoved()
```
Emitted when a new product is removed.


### RegistrySet
```solidity
  event RegistrySet()
```
Emitted when registry is set.



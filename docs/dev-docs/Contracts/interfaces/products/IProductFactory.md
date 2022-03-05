The **ProductFactory** manages the creation of new products.


## Functions
### createProduct
```solidity
  function createProduct(
    address base_,
    address governance_,
    contract IRegistry registry_,
    uint40 minPeriod_,
    uint40 maxPeriod_,
    bytes32 typehash_,
    string domain_,
    string version_
  ) external returns (address product)
```
Creates and initializes a new product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`base_` | address | The product's source code.
|`governance_` | address | The governor.
|`registry_` | contract IRegistry | The IRegistry contract.
|`minPeriod_` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`maxPeriod_` | uint40 | The maximum policy period in blocks to purchase a **policy**.
|`typehash_` | bytes32 | The typehash for submitting claims.
|`domain_` | string | The user readable name of the EIP712 signing domain.
|`version_` | string | The current major version of the signing domain.

### create2Product
```solidity
  function create2Product(
    address base_,
    bytes32 salt_,
    address governance_,
    contract IRegistry registry_,
    uint40 minPeriod_,
    uint40 maxPeriod_,
    bytes32 typehash_,
    string domain_,
    string version_
  ) external returns (address product)
```
Creates and initializes a new product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`base_` | address | The product's source code.
|`salt_` | bytes32 | The salt for CREATE2.
|`governance_` | address | The governor.
|`registry_` | contract IRegistry | The IRegistry contract.
|`minPeriod_` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`maxPeriod_` | uint40 | The maximum policy period in blocks to purchase a **policy**.
|`typehash_` | bytes32 | The typehash for submitting claims.
|`domain_` | string | The user readable name of the EIP712 signing domain.
|`version_` | string | The current major version of the signing domain.

## Events
### ProductCreated
```solidity
  event ProductCreated(
  )
```
Emitted when a new product is created



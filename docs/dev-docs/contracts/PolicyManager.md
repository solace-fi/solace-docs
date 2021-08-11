Creates new and modifies existing coverage policy ERC721 tokens


## Functions
### constructor
```solidity
  function constructor(
  ) public
```
Constructs the Policy Deployer ERC721 Token contract.



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



### addProduct
```solidity
  function addProduct(
    address _product
  ) external
```
Adds a new product.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_product` | address | the new product

### removeProduct
```solidity
  function removeProduct(
    address _product
  ) external
```
Removes a product.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_product` | address | the product to remove

### setTokenDescriptor
```solidity
  function setTokenDescriptor(
    address _tokenDescriptor
  ) external
```
Allows governance to set token descriptor.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenDescriptor` | address | The new token descriptor address.

### productIsActive
```solidity
  function productIsActive(
    address _product
  ) external returns (bool)
```
Checks is an address is an active product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_product` | address | The product to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`True`| address | if the product is active.
### numProducts
```solidity
  function numProducts(
  ) external returns (uint256)
```
Returns the number of products.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`|  | number of products.
### getProduct
```solidity
  function getProduct(
    uint256 _productNum
  ) external returns (address)
```
Returns the product at the given index.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_productNum` | uint256 | The index to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| uint256 | address of the product.
### getPolicyInfo
```solidity
  function getPolicyInfo(
  ) external returns (address policyholder, address product, address positionContract, uint256 coverAmount, uint40 expirationBlock, uint24 price)
```




### getPolicyholder
```solidity
  function getPolicyholder(
  ) external returns (address)
```




### getPolicyProduct
```solidity
  function getPolicyProduct(
  ) external returns (address)
```




### getPolicyPositionContract
```solidity
  function getPolicyPositionContract(
  ) external returns (address)
```




### getPolicyExpirationBlock
```solidity
  function getPolicyExpirationBlock(
  ) external returns (uint40)
```




### getPolicyCoverAmount
```solidity
  function getPolicyCoverAmount(
  ) external returns (uint256)
```




### getPolicyPrice
```solidity
  function getPolicyPrice(
  ) external returns (uint24)
```




### listPolicies
```solidity
  function listPolicies(
  ) external returns (uint256[] tokenIDs)
```




### exists
```solidity
  function exists(
  ) external returns (bool)
```




### policyIsActive
```solidity
  function policyIsActive(
  ) external returns (bool)
```




### policyHasExpired
```solidity
  function policyHasExpired(
  ) public returns (bool)
```




### createPolicy
```solidity
  function createPolicy(
    address _policyholder,
    address _positionContract,
    uint256 _expirationBlock,
    uint40 _coverAmount,
    uint24 _price
  ) external returns (uint256 policyID)
```
Creates new ERC721 policy `tokenID` for `to`.
The caller must be a product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyholder` | address | receiver of new policy token
|`_positionContract` | address | contract address where the position is covered
|`_expirationBlock` | uint256 | policy expiration block number
|`_coverAmount` | uint40 | policy coverage amount (in wei)
|`_price` | uint24 | coverage price

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | (aka tokenID)
### setPolicyInfo
```solidity
  function setPolicyInfo(
    uint256 _policyID,
    address _policyholder,
    address _positionContract,
    uint256 _expirationBlock,
    uint40 _coverAmount,
    uint24 _price
  ) external
```
Exposes setTokenURI function for products to modify policies
The caller must be a product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | aka tokenID
|`_policyholder` | address | receiver of new policy token
|`_positionContract` | address | contract address where the position is covered
|`_expirationBlock` | uint256 | policy expiration block number
|`_coverAmount` | uint40 | policy coverage amount (in wei)
|`_price` | uint24 | coverage price

### burn
```solidity
  function burn(
    uint256 _policyID
  ) external
```
Fuction for the product to burn expired or canceled policies
The caller must be a product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | policyID aka tokenID

### _burn
```solidity
  function _burn(
  ) internal
```




### updateActivePolicies
```solidity
  function updateActivePolicies(
    uint256[] _policyIDs
  ) external
```
Burns expired policies.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyIDs` | uint256[] | list of expired policies

### tokenURI
```solidity
  function tokenURI(
  ) public returns (string)
```





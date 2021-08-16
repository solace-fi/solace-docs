The **Policy Manager** manages the creating new policies or modifying the existing policies. The policy is an [**ERC721**](https://docs.openzeppelin.com/contracts/2.x/erc721) token.


## Functions
### constructor
```solidity
  function constructor(
    address _governance
  ) public
```
The constructor. It constructs the Policy Deployer **ERC721 Token** contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The address of the governor.

### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new governor.
Can only be called by the current `governor`.


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
Can only be called by the new `governor`.



### addProduct
```solidity
  function addProduct(
    address _product
  ) external
```
Adds a new product. The new product must be implemented in **Solace Protocol**.
Can only be called by the current `governor`.


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
Can only be called by the current `governor`.


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
Allows governance to set policy descriptor.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenDescriptor` | address | The new policy token descriptor address.

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
|`bool`| address | Returns true if the product is active.
### numProducts
```solidity
  function numProducts(
  ) external returns (uint256)
```
Returns the number of products.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`|  | The number of products.
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
|`productAddress`| uint256 | The address of the product.
### getPolicyInfo
```solidity
  function getPolicyInfo(
    uint256 _policyID
  ) external returns (address policyholder, address product, address positionContract, uint256 coverAmount, uint40 expirationBlock, uint24 price)
```
The function returns the policy details.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id to return info.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyholder`| uint256 | The address of the policy holder.
|`product`|  | The product of the policy. 
|`positionContract`|  | The covered contract for the policy.
|`coverAmount`|  | The amount covered for the policy.
|`expirationBlock`|  | The expiration block of the policy.
|`price`|  | The price of the policy.
### getPolicyholder
```solidity
  function getPolicyholder(
    uint256 _policyID
  ) external returns (address)
```
The function returns the policy holder of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyholder`| uint256 | The address of the policy holder.
### getPolicyProduct
```solidity
  function getPolicyProduct(
    uint256 _policyID
  ) external returns (address)
```
The function returns the policy product of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`product`| uint256 | The product of the policy.
### getPolicyPositionContract
```solidity
  function getPolicyPositionContract(
    uint256 _policyID
  ) external returns (address)
```
The function returns the position contract of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionContract`| uint256 | The position contract of the policy.
### getPolicyExpirationBlock
```solidity
  function getPolicyExpirationBlock(
    uint256 _policyID
  ) external returns (uint40)
```
The function returns the expiration block of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`expirationBlock`| uint256 | The expiration block of the policy.
### getPolicyCoverAmount
```solidity
  function getPolicyCoverAmount(
    uint256 _policyID
  ) external returns (uint256)
```
The function returns the cover amount of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`coverAmount`| uint256 | The cover amount of the policy.
### getPolicyPrice
```solidity
  function getPolicyPrice(
    uint256 _policyID
  ) external returns (uint24)
```
The function returns the price of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`price`| uint256 | The price of the policy.
### listPolicies
```solidity
  function listPolicies(
    address _policyholder
  ) external returns (uint256[] tokenIDs)
```
The function lists all policies for a given policy holder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyholder` | address | The address of the policy holder.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenIDs`| address | The list of token ids(policy ids) that the policy holder have.
### exists
```solidity
  function exists(
    uint256 _policyID
  ) external returns (bool)
```
These functions can be used to check a policys stage in the lifecycle.
There are three major lifecycle events:
  1 - policy is bought (aka minted)
  2 - policy expires
  3 - policy is burnt (aka deleted)
There are four stages:
  A - pre-mint
  B - pre-expiration
  C - post-expiration
  D - post-burn
Truth table:
              A B C D
  exists      0 1 1 0
  isActive    0 1 0 0
  hasExpired  0 0 1 0


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`bool`| uint256 | Returns true if the policy exists.
### policyIsActive
```solidity
  function policyIsActive(
    uint256 _policyID
  ) external returns (bool)
```
The function checks whether a given policy is active.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`bool`| uint256 | Returns true if the policy is active.
### policyHasExpired
```solidity
  function policyHasExpired(
    uint256 _policyID
  ) public returns (bool)
```
The function checks whether a given policy is expired.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`bool`| uint256 | Returns true if the policy is expired.
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
The function creates new **ERC721** policy. The function is called by product contracts.
The caller must be a **product**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyholder` | address | The receiver of new policy token.
|`_positionContract` | address | The contract address where the position is covered.
|`_expirationBlock` | uint256 | The policy expiration block number.
|`_coverAmount` | uint40 | The policy coverage amount (in wei).
|`_price` | uint24 | The coverage price

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The policy id(aka tokenID).
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
Exposes setTokenURI function for products to modify policies.
The caller must be a **product**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id (aka tokenID).
|`_policyholder` | address | The receiver of new policy token.
|`_positionContract` | address | The contract address where the position is covered.
|`_expirationBlock` | uint256 | The policy expiration block number.
|`_coverAmount` | uint40 | The policy coverage amount (in wei).
|`_price` | uint24 | The coverage price.

### burn
```solidity
  function burn(
    uint256 _policyID
  ) external
```
The fuction burns expired or canceled policies. It is called by product contracts.
The caller must be a product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | policyID aka tokenID

### _burn
```solidity
  function _burn(
    uint256 _policyID
  ) internal
```
Internal private function that is used in contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The policy id.

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
|`_policyIDs` | uint256[] | The list of expired policies.

### tokenURI
```solidity
  function tokenURI(
    uint256 tokenId
  ) public returns (string)
```
The function returns a human readable descriptor for the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenId` | uint256 | The token id(aka policy id).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`description`| uint256 | The human readable description of the policy.

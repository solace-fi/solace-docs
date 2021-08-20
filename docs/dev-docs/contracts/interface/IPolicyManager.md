The **PolicyManager** manages the creation of new policies and modification of existing policies.

Most users will not interact with **PolicyManager** directly. To buy, modify, or cancel policies, users should use the respective [**product**](../products/BaseProduct) for the position they would like to cover. Use **PolicyManager** to view policies.

Policies are [**ERC721s**](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721).


## Functions
### addProduct
```solidity
  function addProduct(
    address product
  ) external
```
Adds a new product.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`product` | address | the new product

### removeProduct
```solidity
  function removeProduct(
    address product
  ) external
```
Removes a product.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`product` | address | the product to remove

### setPolicyDescriptor
```solidity
  function setPolicyDescriptor(
    address policyDescriptor
  ) external
```
Set the token descriptor.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyDescriptor` | address | The new token descriptor address.

### policyDescriptor
```solidity
  function policyDescriptor(
  ) external returns (address)
```
The address of the policy descriptor contract, which handles generating token URIs for policies.



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
|`product` | address | The product to check.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| address | True if the product is active.
### numProducts
```solidity
  function numProducts(
  ) external returns (uint256 count)
```
Returns the number of products.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`count`|  | The number of products.
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
|`productNum` | uint256 | The index to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`product`| uint256 | The address of the product.
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
|`policyID` | uint256 | The policy ID to return info.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`info`| uint256 | info in a struct.
### getPolicyInfo
```solidity
  function getPolicyInfo(
    uint256 policyID
  ) external returns (address policyholder, address product, address positionContract, uint256 coverAmount, uint40 expirationBlock, uint24 price)
```
Information about a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy ID to return info.

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
    uint256 policyID
  ) external returns (address policyholder)
```
The holder of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyholder`| uint256 | The address of the policy holder.
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
|`policyID` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`product`| uint256 | The product of the policy.
### getPolicyPositionContract
```solidity
  function getPolicyPositionContract(
    uint256 policyID
  ) external returns (address positionContract)
```
The position contract the policy covers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionContract`| uint256 | The position contract of the policy.
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
|`policyID` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`expirationBlock`| uint256 | The expiration block of the policy.
### getPolicyCoverAmount
```solidity
  function getPolicyCoverAmount(
    uint256 policyID
  ) external returns (uint256 coverAmount)
```
The cover amount of the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`coverAmount`| uint256 | The cover amount of the policy.
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
|`policyID` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`price`| uint256 | The price of the policy.
### listPolicies
```solidity
  function listPolicies(
    address policyholder
  ) external returns (uint256[] policyIDs)
```
Lists all policies for a given policy holder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The address of the policy holder.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyIDs`| address | The list of policy IDs that the policy holder has in any order.
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
  ) external returns (bool)
```




### createPolicy
```solidity
  function createPolicy(
    address policyholder,
    address positionContract,
    uint256 expirationBlock,
    uint40 coverAmount,
    uint24 price
  ) external returns (uint256 policyID)
```
Creates new ERC721 policy `tokenID` for `to`.
The caller must be a product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | receiver of new policy token
|`positionContract` | address | contract address where the position is covered
|`expirationBlock` | uint256 | policy expiration block number
|`coverAmount` | uint40 | policy coverage amount (in wei)
|`price` | uint24 | coverage price

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | (aka tokenID)
### setPolicyInfo
```solidity
  function setPolicyInfo(
  ) external
```




### burn
```solidity
  function burn(
  ) external
```




### updateActivePolicies
```solidity
  function updateActivePolicies(
  ) external
```




### activeCoverAmount
```solidity
  function activeCoverAmount(
  ) external returns (uint256)
```




## Events
### ProductAdded
```solidity
  event ProductAdded(
  )
```



### ProductRemoved
```solidity
  event ProductRemoved(
  )
```



### PolicyCreated
```solidity
  event PolicyCreated(
  )
```



### PolicyBurned
```solidity
  event PolicyBurned(
  )
```




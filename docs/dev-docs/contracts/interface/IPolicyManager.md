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
  ) external returns (bool status)
```




### policyIsActive
```solidity
  function policyIsActive(
    uint256 policyID
  ) external returns (bool)
```
Checks if a policy is active.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| uint256 | True if the policy is active.
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
|`policyID` | uint256 | The policy ID.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| uint256 | True if the policy is expired.
### totalPolicyCount
```solidity
  function totalPolicyCount(
  ) external returns (uint256 count)
```
The total number of policies ever created.



### policyDescriptor
```solidity
  function policyDescriptor(
  ) external returns (address)
```
The address of the [`PolicyDescriptor`](./PolicyDescriptor) contract.



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
Creates a new policy.
Can only be called by **products**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The receiver of new policy token.
|`positionContract` | address | The contract address of the position.
|`expirationBlock` | uint256 | The policy expiration block number.
|`coverAmount` | uint40 | The policy coverage amount (in wei).
|`price` | uint24 | The coverage price.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The policy ID.
### setPolicyInfo
```solidity
  function setPolicyInfo(
    uint256 policyID,
    address policyholder,
    address positionContract,
    uint256 expirationBlock,
    uint40 coverAmount,
    uint24 price
  ) external
```
Modifies a policy.
Can only be called by **products**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy ID.
|`policyholder` | address | The receiver of new policy token.
|`positionContract` | address | The contract address where the position is covered.
|`expirationBlock` | uint256 | The policy expiration block number.
|`coverAmount` | uint40 | The policy coverage amount (in wei).
|`price` | uint24 | The coverage price.

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
|`policyID` | uint256 | The ID of the policy to burn.

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
|`policyIDs` | uint256[] | The list of expired policies.

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
### activeCoverAmount
```solidity
  function activeCoverAmount(
  ) external returns (uint256)
```




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
|`product` | address | the new product

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
|`product` | address | the product to remove

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
|`policyDescriptor` | address | The new token descriptor address.

## Events
### PolicyCreated
```solidity
  event PolicyCreated(
  )
```
Emitted when a policy is created.


### PolicyBurned
```solidity
  event PolicyBurned(
  )
```
Emitted when a policy is burned.


### ProductAdded
```solidity
  event ProductAdded(
  )
```
Emitted when a new product is added.


### ProductRemoved
```solidity
  event ProductRemoved(
  )
```
Emitted when a new product is removed.



Interface for product contracts


## Functions
### buyPolicy
```solidity
  function buyPolicy(
    address policyholder,
    address positionContract,
    uint256 coverAmount,
    uint40 blocks
  ) external returns (uint256 policyID)
```
Purchases and mints a policy on the behalf of the policyholder.
User will need to pay **ETH**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | Holder of the position to cover.
|`positionContract` | address | The contract address where the policyholder has a position to be covered.
|`coverAmount` | uint256 | The value to cover in **ETH**. Will only cover up to the appraised value.
|`blocks` | uint40 | The length (in blocks) for policy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The ID of newly created policy.
### updateCoverAmount
```solidity
  function updateCoverAmount(
    uint256 policyID,
    uint256 newCoverAmount
  ) external
```
Increase or decrease the cover amount of the policy.
User may need to pay **ETH** for increased cover amount or receive a refund for decreased cover amount.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy.
|`newCoverAmount` | uint256 | The new value to cover in **ETH**. Will only cover up to the appraised value.

### extendPolicy
```solidity
  function extendPolicy(
    uint256 policyID,
    uint40 extension
  ) external
```
Extend a policy.
User will need to pay **ETH**.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy.
|`extension` | uint40 | The length of extension in blocks.

### updatePolicy
```solidity
  function updatePolicy(
    uint256 policyID,
    uint256 newCoverAmount,
    uint40 extension
  ) external
```
Extend a policy and update its cover amount.
User may need to pay **ETH** for increased cover amount or receive a refund for decreased cover amount.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy.
|`newCoverAmount` | uint256 | The new value to cover in **ETH**. Will only cover up to the appraised value.
|`extension` | uint40 | The length of extension in blocks.

### cancelPolicy
```solidity
  function cancelPolicy(
    uint256 policyID
  ) external
```
Cancel and burn a policy.
User will receive a refund for the remaining blocks.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy.

### appraisePosition
```solidity
  function appraisePosition(
    address policyholder,
    address positionContract
  ) external returns (uint256 positionAmount)
```
Calculate the value of a user's position in **ETH**.
Every product will have a different mechanism to determine a user's total position in that product's protocol.

It should validate that the `positionContract` belongs to the protocol and revert if it doesn't.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The owner of the position.
|`positionContract` | address | The address of the smart contract the `policyholder` has their position in (e.g., for `UniswapV2Product` this would be the Pair's address).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The value of the position.
### getQuote
```solidity
  function getQuote(
    address policyholder,
    address positionContract,
    uint256 coverAmount,
    uint40 blocks
  ) external returns (uint256 premium)
```
Calculate a premium quote for a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The holder of the position to cover.
|`positionContract` | address | The address of the exact smart contract the policyholder has their position in (e.g., for UniswapProduct this would be Pair's address).
|`coverAmount` | uint256 | The value to cover in **ETH**.
|`blocks` | uint40 | The length for policy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`premium`| address | The quote for their policy in **Wei**.
### price
```solidity
  function price(
  ) external returns (uint24)
```
Price in wei per 1e12 wei of coverage per block.



### minPeriod
```solidity
  function minPeriod(
  ) external returns (uint40)
```
The minimum policy period in blocks.



### maxPeriod
```solidity
  function maxPeriod(
  ) external returns (uint40)
```
The maximum policy period in blocks.



### maxCoverAmount
```solidity
  function maxCoverAmount(
  ) external returns (uint256 maxCoverAmount)
```
The maximum sum of position values that can be covered by this product.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxCoverAmount`|  | The max cover amount.
### maxCoverPerUser
```solidity
  function maxCoverPerUser(
  ) external returns (uint256 maxCoverAmountPerUser)
```
The maximum cover amount for a single policy.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxCoverAmountPerUser`|  | The max cover amount per user.
### maxCoverPerUserDivisor
```solidity
  function maxCoverPerUserDivisor(
  ) external returns (uint32)
```
The max cover amount divisor for per user (maxCover / divisor = maxCoverPerUser).



### coveredPlatform
```solidity
  function coveredPlatform(
  ) external returns (address)
```
Covered platform.
A platform contract which locates contracts that are covered by this product.
(e.g., `UniswapProduct` will have `Factory` as `coveredPlatform` contract, because every `Pair` address can be located through `getPool()` function).



### productPolicyCount
```solidity
  function productPolicyCount(
  ) external returns (uint256)
```
The total policy count this product sold.



### activeCoverAmount
```solidity
  function activeCoverAmount(
  ) external returns (uint256)
```
The current amount covered (in wei).



### name
```solidity
  function name(
  ) external returns (string productName)
```
Returns the name of the product.
Must be implemented by child contracts.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`productName`|  | The name of the product.
### paused
```solidity
  function paused(
  ) external returns (bool)
```
Cannot buy new policies while paused. (Default is False)



### policyManager
```solidity
  function policyManager(
  ) external returns (address)
```
Address of the [`PolicyManager`](../PolicyManager).



### isAuthorizedSigner
```solidity
  function isAuthorizedSigner(
    address account
  ) external returns (bool status)
```
Returns true if the given account is authorized to sign claims.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`account` | address | Potential signer to query.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| address | True if is authorized signer.
### updateActiveCoverAmount
```solidity
  function updateActiveCoverAmount(
    int256 coverDiff
  ) external
```
Updates the product's book-keeping variables.
Can only be called by the [`PolicyManager`](../PolicyManager).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`coverDiff` | int256 | The change in active cover amount.

### setPrice
```solidity
  function setPrice(
    uint24 price_
  ) external
```
Sets the price for this product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`price_` | uint24 | Price in wei per 1e12 wei of coverage per block.

### setMinPeriod
```solidity
  function setMinPeriod(
    uint40 minPeriod_
  ) external
```
Sets the minimum number of blocks a policy can be purchased for.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`minPeriod_` | uint40 | The minimum number of blocks.

### setMaxPeriod
```solidity
  function setMaxPeriod(
    uint40 maxPeriod_
  ) external
```
Sets the maximum number of blocks a policy can be purchased for.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`maxPeriod_` | uint40 | The maximum number of blocks

### setMaxCoverPerUserDivisor
```solidity
  function setMaxCoverPerUserDivisor(
    uint32 maxCoverPerUserDivisor_
  ) external
```
Sets the max cover amount divisor per user (maxCover / divisor = maxCoverPerUser).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`maxCoverPerUserDivisor_` | uint32 | The new divisor.

### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address coveredPlatform_
  ) external
```
Changes the covered platform.
This function is used if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new **Product**.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`coveredPlatform_` | address | The platform to cover.

### setPolicyManager
```solidity
  function setPolicyManager(
    address policyManager_
  ) external
```
Changes the policy manager.
Can only be called by the current [**governor**](/docs/protocol/governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyManager_` | address | The new policy manager.

## Events
### PolicyCreated
```solidity
  event PolicyCreated(
  )
```
Emitted when a policy is created.


### PolicyExtended
```solidity
  event PolicyExtended(
  )
```
Emitted when a policy is extended.


### PolicyCanceled
```solidity
  event PolicyCanceled(
  )
```
Emitted when a policy is canceled.


### PolicyUpdated
```solidity
  event PolicyUpdated(
  )
```
Emitted when a policy is updated.


### ClaimSubmitted
```solidity
  event ClaimSubmitted(
  )
```
Emitted when a claim is submitted.



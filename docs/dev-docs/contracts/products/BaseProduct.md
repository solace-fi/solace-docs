The abstract smart contract that is inherited by every concrete individual `Product` contracts.


## Functions
### constructor
```solidity
  function constructor(
    address _governance,
    contract IPolicyManager _policyManager,
    contract IRegistry _registry,
    address _coveredPlatform,
    uint40 _minPeriod,
    uint40 _maxPeriod,
    uint24 _price,
    uint32 _maxCoverPerUserDivisor
  ) internal
```
The constructor. The every concrete `Product` contract provides constructor parameters.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The governor.
|`_policyManager` | contract IPolicyManager | The IPolicyManager contract.
|`_registry` | contract IRegistry | The IRegistry contract.
|`_coveredPlatform` | address | A platform contract which locates contracts that are covered by this product.
|`_minPeriod` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`_maxPeriod` | uint40 | The maximum policy period in blocks to purchase a **policy**.
|`_price` | uint24 | The cover price for the **Product**.
|`_maxCoverPerUserDivisor` | uint32 | The max cover amount divisor for per user. (maxCover / divisor = maxCoverPerUser).

### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new `governor`.
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



### setPrice
```solidity
  function setPrice(
    uint24 _price
  ) external
```
Sets the price for this product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_price` | uint24 | Cover price (in wei) per ether per block.

### setMinPeriod
```solidity
  function setMinPeriod(
    uint40 _minPeriod
  ) external
```
Sets the minimum number of blocks a policy can be purchased for.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_minPeriod` | uint40 | The minimum number of blocks.

### setMaxPeriod
```solidity
  function setMaxPeriod(
    uint40 _maxPeriod
  ) external
```
Sets the maximum number of blocks a policy can be purchased for.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_maxPeriod` | uint40 | The maximum number of blocks

### addSigner
```solidity
  function addSigner(
    address _signer
  ) external
```
Adds a new signer that can authorize claims.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_signer` | address | The signer to add.

### removeSigner
```solidity
  function removeSigner(
    address _signer
  ) external
```
Removes a signer.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_signer` | address | The signer to remove.

### setPaused
```solidity
  function setPaused(
  ) external
```
Pauses or unpauses buying and extending policies.
Cancelling policies and submitting claims are unaffected by pause.
Can only be called by the current `governor`.

Used for security and to gracefully phase out old products.


### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address _coveredPlatform
  ) public
```
Changes the covered platform.
This function is used if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new **Product**.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coveredPlatform` | address | The platform to cover.

### setPolicyManager
```solidity
  function setPolicyManager(
    address _policyManager
  ) external
```
Changes the policy manager.
Can only be called by the current `governor`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyManager` | address | The new policy manager.

### appraisePosition
```solidity
  function appraisePosition(
    address _policyholder,
    address _positionContract
  ) public returns (uint256 positionAmount)
```
This function will only be implemented in the inheriting product contracts. It provides the user's total position in the product's protocol. 
This total should be denominated in **ETH**. Every product will have a different mechanism to read and determine a user's total position in that product's protocol. 


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyholder` | address | The `buyer` requesting the coverage quote.
|`_positionContract` | address | The address of the exact smart contract the `buyer` has their position in (e.g., for UniswapProduct this would be Pair's address).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The user's total position in **Wei** in the product's protocol.
### getQuote
```solidity
  function getQuote(
    address _coverAmount,
    address _blocks
  ) external returns (uint256)
```
@notice
 The function provides a premium quote.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coverAmount` | address | The value to cover in **ETH**.
|`_blocks` | address | The length for policy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`premium`| address | The quote for their policy in **Wei**.
### updateActiveCoverAmount
```solidity
  function updateActiveCoverAmount(
    int256 _coverDiff
  ) external
```
Updates the product's book-keeping variables.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coverDiff` | int256 | The change in active cover amount.

### buyPolicy
```solidity
  function buyPolicy(
    address _coverAmount,
    address _blocks,
    uint256 _policyholder,
    uint40 _positionContract
  ) external returns (uint256 policyID)
```
The function purchases and deploys a policy on the behalf of the policyholder. It returns the id of newly created policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coverAmount` | address | The value to cover in **ETH**.
|`_blocks` | address | The length (in blocks) for policy.
|`_policyholder` | uint256 | Who's liquidity is being covered by the policy.
|`_positionContract` | uint40 | The contract address where the policyholder has a position to be covered.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The policy id.
### updateCoverAmount
```solidity
  function updateCoverAmount(
    uint256 _policyID,
    uint256 _coverAmount
  ) external
```
The function is used to increase or decrease the cover amount for the policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The id number of the existing policy
|`_coverAmount` | uint256 | The value to cover in **ETH**.

### extendPolicy
```solidity
  function extendPolicy(
    uint256 _policyID,
    uint40 _blocks
  ) external
```
The function enables to extend a policy contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The id number of the existing policy.
|`_blocks` | uint40 | The length of extension.

### updatePolicy
```solidity
  function updatePolicy(
    uint256 _policyID,
    uint256 _newCoverAmount,
    uint40 _newExtension
  ) external
```
The function updates an existing policy contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The id number of the existing policy.
|`_newCoverAmount` | uint256 | The new cover amount of position.
|`_newExtension` | uint40 | The length of block extension.

### cancelPolicy
```solidity
  function cancelPolicy(
    uint256 _policyID
  ) external
```
The function is used to cancel and destroy a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | The id number of the existing policy.

### maxCoverAmount
```solidity
  function maxCoverAmount(
  ) public returns (uint256)
```
The function returns the max cover amount of the product.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxCoverAmount`|  | The max cover amount.
### maxCoverPerUser
```solidity
  function maxCoverPerUser(
  ) external returns (uint256)
```
The function returns the max cover amount per user for the product.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxCoverAmountPerUser`|  | The max cover amount per user.
### add
```solidity
  function add(
    uint256 _a,
    int256 _b
  ) internal returns (uint256 _c)
```
The function is used to add two numbers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_a` | uint256 | The first number as a uint256.
|`_b` | int256 | The second number as an int256.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_c`| uint256 | The sum as a uint256.
### min
```solidity
  function min(
    uint256 a,
    uint256 b
  ) internal returns (uint256)
```
The function is used to return minimum number between two numbers..


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 | The first number as a uint256.
|`b` | uint256 | The second number as an int256.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`c`| uint256 | The min as a uint256.
## Events
### SignerAdded
```solidity
  event SignerAdded(
  )
```



### SignerRemoved
```solidity
  event SignerRemoved(
  )
```



### ClaimSubmitted
```solidity
  event ClaimSubmitted(
  )
```




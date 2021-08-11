To be inherited by individual Product contracts.


## Functions
### constructor
```solidity
  function constructor(
  ) internal
```




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



### setPrice
```solidity
  function setPrice(
    uint24 _price
  ) external
```
Sets the price for this product


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_price` | uint24 | cover price (in wei) per ether per block

### setMinPeriod
```solidity
  function setMinPeriod(
    uint40 _minPeriod
  ) external
```
Sets the minimum number of blocks a policy can be purchased for


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_minPeriod` | uint40 | minimum number of blocks

### setMaxPeriod
```solidity
  function setMaxPeriod(
    uint40 _maxPeriod
  ) external
```
Sets the maximum number of blocks a policy can be purchased for


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_maxPeriod` | uint40 | maximum number of blocks

### addSigner
```solidity
  function addSigner(
    address _signer
  ) external
```
Adds a new signer that can authorize claims.
Can only be called by the current governor.


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
Can only be called by the current governor.


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
Can only be called by the current governor.

Used for security and to gracefully phase out old products.


### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address _coveredPlatform
  ) public
```
Changes the covered platform.
Use this if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current governor.


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
Can only be called by the current governor.


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
@notice
 Provide the user's total position in the product's protocol.
 This total should be denominated in eth.
@dev
 Every product will have a different mechanism to read and determine
 a user's total position in that product's protocol. This method will
 only be implemented in the inheriting product contracts


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyholder` | address | buyer requesting the coverage quote
|`_positionContract` | address | address of the exact smart contract the buyer has their position in (e.g., for UniswapProduct this would be Pair's address)

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The user's total position in wei in the product's protocol.
### getQuote
```solidity
  function getQuote(
    address _coverAmount,
    address _blocks
  ) external returns (uint256)
```
@notice
 Provide a premium quote.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coverAmount` | address | Value to cover in ETH.
|`_blocks` | address | Length for policy

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`premium`| address | The quote for their policy in wei.
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
|`_coverDiff` | int256 | change in active cover amount

### buyPolicy
```solidity
  function buyPolicy(
    address _coverAmount,
    address _blocks,
    uint256 _policyholder,
    uint40 _positionContract
  ) external returns (uint256 policyID)
```
@notice
 Purchase and deploy a policy on the behalf of the policyholder


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_coverAmount` | address | Value to cover in ETH.
|`_blocks` | address | length (in blocks) for policy
|`_policyholder` | uint256 | who's liquidity is being covered by the policy
|`_positionContract` | uint40 | contract address where the policyholder has a position to be covered

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The contract address of the policy
### updateCoverAmount
```solidity
  function updateCoverAmount(
    uint256 _policyID,
    uint256 _coverAmount
  ) external
```
@notice
 Increase or decrease the cover amount for the policy


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | id number of the existing policy
|`_coverAmount` | uint256 | Value to cover in ETH.

### extendPolicy
```solidity
  function extendPolicy(
    uint256 _policyID,
    uint40 _blocks
  ) external
```
@notice
 Extend a policy contract


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | id number of the existing policy
|`_blocks` | uint40 | length of extension

### updatePolicy
```solidity
  function updatePolicy(
    uint256 _policyID,
    uint256 _newCoverAmount,
    uint40 _newExtension
  ) external
```
@notice
 Update an existing policy contract


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | id number of the existing policy
|`_newCoverAmount` | uint256 | new cover amount of position
|`_newExtension` | uint40 | length of block extension

### cancelPolicy
```solidity
  function cancelPolicy(
    uint256 _policyID
  ) external
```
@notice
 Cancel and destroy a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyID` | uint256 | id number of the existing policy

### maxCoverAmount
```solidity
  function maxCoverAmount(
  ) public returns (uint256)
```




### maxCoverPerUser
```solidity
  function maxCoverPerUser(
  ) external returns (uint256)
```




### add
```solidity
  function add(
    uint256 _a,
    int256 _b
  ) internal returns (uint256 _c)
```
Adds two numbers.


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
  ) internal returns (uint256)
```




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




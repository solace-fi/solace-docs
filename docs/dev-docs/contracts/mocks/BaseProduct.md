The abstract smart contract that is inherited by every concrete individual **Product** contract.

It is required to extend [`IProduct`](../interface/IProduct) and recommended to extend `BaseProduct`. `BaseProduct` extends [`IProduct`](../interface/IProduct) and takes care of the heavy lifting; new products simply need to set some variables in the constructor and implement [`appraisePosition()`](#appraiseposition). It has some helpful functionality not included in [`IProduct`](../interface/IProduct) including [`ExchangeQuoter` price oracles](../interface/IExchangeQuoter) and claim signers.


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    contract IPolicyManager policyManager_,
    contract IRegistry registry_,
    address coveredPlatform_,
    uint40 minPeriod_,
    uint40 maxPeriod_,
    uint24 price_,
    uint32 maxCoverPerUserDivisor_,
    address quoter_,
    string domain_,
    string version_
  ) internal
```
Constructs the product. `BaseProduct` by itself is not deployable, only its subclasses.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The governor.
|`policyManager_` | contract IPolicyManager | The IPolicyManager contract.
|`registry_` | contract IRegistry | The IRegistry contract.
|`coveredPlatform_` | address | A platform contract which locates contracts that are covered by this product.
|`minPeriod_` | uint40 | The minimum policy period in blocks to purchase a **policy**.
|`maxPeriod_` | uint40 | The maximum policy period in blocks to purchase a **policy**.
|`price_` | uint24 | The cover price for the **Product**.
|`maxCoverPerUserDivisor_` | uint32 | The max cover amount divisor for per user. (maxCover / divisor = maxCoverPerUser).
|`quoter_` | address | The exchange quoter address.
|`domain_` | string | The user readable name of the EIP712 signing domain.
|`version_` | string | The current major version of the signing domain.

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
    uint256 coverAmount
  ) external
```
Increase or decrease the cover amount of the policy.
User may need to pay **ETH** for increased cover amount or receive a refund for decreased cover amount.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy.
|`coverAmount` | uint256 | The new value to cover in **ETH**. Will only cover up to the appraised value.

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
    uint256 coverAmount,
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
|`coverAmount` | uint256 | The new value to cover in **ETH**. Will only cover up to the appraised value.
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

### submitClaim
```solidity
  function submitClaim(
    uint256 policyID,
    uint256 amountOut,
    uint256 deadline,
    bytes signature
  ) external
```
Submit a claim.
The user can only submit one claim per policy and the claim must be signed by an authorized signer.
If successful the policy is burnt and a new claim is created.
The new claim will be in [`ClaimsEscrow`](../ClaimsEscrow) and have the same ID as the policy.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The policy that suffered a loss.
|`amountOut` | uint256 | The amount the user will receive.
|`deadline` | uint256 | Transaction must execute before this timestamp.
|`signature` | bytes | Signature from the signer.

### appraisePosition
```solidity
  function appraisePosition(
    address policyholder,
    address positionContract
  ) public returns (uint256 positionAmount)
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
  ) public returns (uint256 maxCover)
```
The maximum sum of position values that can be covered by this product.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxCover`|  | The max cover amount.
### maxCoverPerUser
```solidity
  function maxCoverPerUser(
  ) external returns (uint256 maxCover)
```
The maximum cover amount for a single policy.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`maxCover`|  | The max cover amount per user.
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

### setExchangeQuoter
```solidity
  function setExchangeQuoter(
    address quoter_
  ) external
```
Sets a new ExchangeQuoter.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`quoter_` | address | The new quoter address.

### addSigner
```solidity
  function addSigner(
    address signer
  ) external
```
Adds a new signer that can authorize claims.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`signer` | address | The signer to add.

### removeSigner
```solidity
  function removeSigner(
    address signer
  ) external
```
Removes a signer.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`signer` | address | The signer to remove.

### setPaused
```solidity
  function setPaused(
    bool paused_
  ) external
```
Pauses or unpauses buying and extending policies.
Cancelling policies and submitting claims are unaffected by pause.
Can only be called by the current [**governor**](/docs/user-docs/Governance).

Used for security and to gracefully phase out old products.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`paused_` | bool | True to pause, false to unpause.

### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address coveredPlatform_
  ) public
```
Changes the covered platform.
The function should be used if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


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
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyManager_` | address | The new policy manager.

### add
```solidity
  function add(
    uint256 a,
    int256 b
  ) internal returns (uint256 c)
```
The function is used to add two numbers.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`a` | uint256 | The first number as a uint256.
|`b` | int256 | The second number as an int256.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`c`| uint256 | The sum as a uint256.
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
Emitted when a claim signer is added.


### SignerRemoved
```solidity
  event SignerRemoved(
  )
```
Emitted when a claim signer is removed.


### QuoterSet
```solidity
  event QuoterSet(
  )
```
Emitted when the exchange quoter is set.



<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/interfaces/products/IProduct.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Interface for product contracts


## Functions
### buyPolicy
```solidity
  function buyPolicy(
    address policyholder,
    uint256 coverLimit,
    uint40 blocks,
    bytes positionDescription,
    address riskStrategy
  ) external returns (uint256 policyID)
```
Purchases and mints a policy on the behalf of the policyholder.
User will need to pay **USD**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | Holder of the position(s) to cover.
|`coverLimit` | uint256 | The value to cover in **USD**.
|`blocks` | uint40 | The length (in blocks) for policy.
|`positionDescription` | bytes | A byte encoded description of the position(s) to cover.
|`riskStrategy` | address | The risk strategy of the product to cover.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| uint256 | The ID of newly created policy.
### updateCoverLimit
```solidity
  function updateCoverLimit(
    uint256 policyID,
    uint256 newCoverLimit
  ) external
```
Increase or decrease the cover limit of the policy.
User may need to pay **USD** for increased cover limit or receive a refund for decreased cover limit.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy.
|`newCoverLimit` | uint256 | The new value to cover in **USD**.

### extendPolicy
```solidity
  function extendPolicy(
    uint256 policyID,
    uint40 extension
  ) external
```
Extend a policy.
User will need to pay **USD**.
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
    uint256 newCoverLimit,
    uint40 extension
  ) external
```
Extend a policy and update its cover limit.
User may need to pay **USD** for increased cover limit or receive a refund for decreased cover limit.
Can only be called by the policyholder.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyID` | uint256 | The ID of the policy.
|`newCoverLimit` | uint256 | The new value to cover in **USD**.
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

### getQuote
```solidity
  function getQuote(
    uint256 coverLimit,
    uint40 blocks,
    address riskStrategy
  ) external returns (uint256 premium)
```
Calculate a premium quote for a policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`coverLimit` | uint256 | The value to cover in **USD**.
|`blocks` | uint40 | The duration of the policy in blocks.
|`riskStrategy` | address | The risk strategy address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`premium`| uint256 | The quote for their policy in **USD**.
### minPeriod
```solidity
  function minPeriod(
  ) external returns (uint40)
```
Returns the minimum policy period in blocks.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`period`| uint40 | The minimum period value.
### maxPeriod
```solidity
  function maxPeriod(
  ) external returns (uint40)
```
Returns the maximum policy period in blocks.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`period`| uint40 | The maxiumum period value.
### activeCoverLimit
```solidity
  function activeCoverLimit(
  ) external returns (uint256 amount)
```
Returns the current amount covered (in wei).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The current amount.
### activeCoverLimitPerStrategy
```solidity
  function activeCoverLimitPerStrategy(
    address riskStrategy
  ) external returns (uint256 amount)
```
Returns the current amount covered (in wei) per risk strategy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`riskStrategy` | address | The risk strategy address.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`amount`| uint256 | The current amount.
### paused
```solidity
  function paused(
  ) external returns (bool status)
```
Returns whether or not product is currently in paused state.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`status`| bool | True if product is paused.
### policyManager
```solidity
  function policyManager(
  ) external returns (address policymanager)
```
Returns the address of the [`PolicyManager`](../PolicyManager).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policymanager`| address | The policy manager address.
### registry
```solidity
  function registry(
  ) external returns (address registry)
```
Returns the address of the [`Registry`](../Registry).



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`registry`| address | The registry address.
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
|`status`| bool | True if is authorized signer.
### updateActiveCoverLimit
```solidity
  function updateActiveCoverLimit(
    int256 coverDiff
  ) external
```
Updates the product's book-keeping variables.
Can only be called by the [`PolicyManager`](../PolicyManager).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`coverDiff` | int256 | The change in active cover limit.

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


### MinPeriodSet
```solidity
  event MinPeriodSet(
  )
```
Emitted when min period is set.


### MaxPeriodSet
```solidity
  event MaxPeriodSet(
  )
```
Emitted when max period is set.


### PauseSet
```solidity
  event PauseSet(
  )
```
Emitted when buying is paused or unpaused.


### PolicyManagerSet
```solidity
  event PolicyManagerSet(
  )
```
Emitted when PolicyManager is set.


### DepositMade
```solidity
  event DepositMade(
  )
```
Emitted when Deposit into premium pool is made


### WithdrawMade
```solidity
  event WithdrawMade(
  )
```
Emitted when withdraw from premium pool is made



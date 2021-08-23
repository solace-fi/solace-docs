Mock product for testing purposes.


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
    uint32 maxCoverPerUserDivisor_
  ) public
```
The constructor.


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

### appraisePosition
```solidity
  function appraisePosition(
    address policyholder,
    address positionContract
  ) public returns (uint256 positionAmount)
```
It gives the user's total position in the product's protocol.
The `positionContract` must be a **cToken** including **cETH** (Please see https://compound.finance/markets and https://etherscan.io/accounts/label/compound).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The `buyer` who is requesting the coverage quote.
|`positionContract` | address | The address of the exact smart contract the `buyer` has their position in (e.g., for UniswapProduct this would be Pair's address).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The user's total position in **Wei** in the product's protocol.
### setPositionValue
```solidity
  function setPositionValue(
    uint256 value
  ) external
```
The function sets the user's position value for the product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`value` | uint256 | The new position value for the product.

### setPolicyExpiration
```solidity
  function setPolicyExpiration(
    uint256 The,
    uint40 expirationBlock
  ) external
```
The function sets the policy's expiration block.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`The` | uint256 | policy ID to set expiration for.
|`expirationBlock` | uint40 | The new expiration block for the policy.

### _buyPolicy
```solidity
  function _buyPolicy(
    address policyholder,
    address positionContract,
    uint256 coverAmount,
    uint40 blocks
  ) external returns (uint256 policyID)
```
The function purchases and deploys a policy on the behalf of the policyholder. It returns the ID of newly created policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | Who's liquidity is being covered by the policy.
|`positionContract` | address | The contract address where the policyholder has a position to be covered.
|`coverAmount` | uint256 | The value to cover in **ETH**.
|`blocks` | uint40 | The length (in blocks) for policy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The policy ID.

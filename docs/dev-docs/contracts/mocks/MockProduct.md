Mock product for testing purposes.


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
  ) public
```
The constructor.


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

### appraisePosition
```solidity
  function appraisePosition(
    address _buyer,
    address _positionContract
  ) public returns (uint256 positionAmount)
```
It gives the user's total position in the product's protocol.
The `_positionContract` must be a **cToken** including **cETH** (Please see https://compound.finance/markets and https://etherscan.io/accounts/label/compound).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_buyer` | address | The `buyer` who is requesting the coverage quote.
|`_positionContract` | address | The address of the exact smart contract the `buyer` has their position in (e.g., for UniswapProduct this would be Pair's address).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The user's total position in **Wei** in the product's protocol.
### setPositionValue
```solidity
  function setPositionValue(
    uint256 _value
  ) external
```
The function sets the user's position value for the product.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_value` | uint256 | The new position value for the product.

### setPolicyExpiration
```solidity
  function setPolicyExpiration(
    uint256 The,
    uint40 _expirationBlock
  ) external
```
The function sets the policy's expiration block.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`The` | uint256 | policy id to set expiration for.
|`_expirationBlock` | uint40 | The new expiration block for the policy.

### _buyPolicy
```solidity
  function _buyPolicy(
    address _policyholder,
    address _positionContract,
    uint256 _coverAmount,
    uint40 _blocks
  ) external returns (uint256 policyID)
```
The function purchases and deploys a policy on the behalf of the policyholder. It returns the id of newly created policy.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_policyholder` | address | Who's liquidity is being covered by the policy.
|`_positionContract` | address | The contract address where the policyholder has a position to be covered.
|`_coverAmount` | uint256 | The value to cover in **ETH**.
|`_blocks` | uint40 | The length (in blocks) for policy.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`policyID`| address | The policy id.
### name
```solidity
  function name(
  ) public returns (string)
```
Returns the name of the product.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Mock`|  | The name of the product.

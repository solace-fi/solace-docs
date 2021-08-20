The **Curve** product that is users can buy policy for **Curve**. It is a concrete smart contract that inherits from abstract [`BaseProduct`](./BaseProduct).


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
    address quoter_
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
|`quoter_` | address | The exchange quoter address.

### appraisePosition
```solidity
  function appraisePosition(
    address policyholder,
    address positionContract
  ) public returns (uint256 positionAmount)
```
It gives the user's total position in the product's protocol.
The `positionContract` must be a **curve.fi pool** or **token**.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The `buyer` who is requesting the coverage quote (Please see https://curve.fi/pools).
|`positionContract` | address | The address of the exact smart contract the `buyer` has their position in (e.g., for UniswapProduct this would be Pair's address).

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The user's total position in **Wei** in the product's protocol.
### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address coveredPlatform_
  ) public
```
Changes the covered platform.
The function is used for if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`coveredPlatform_` | address | The platform to cover.

### verifyPool
```solidity
  function verifyPool(
    address poolOrToken
  ) internal returns (contract IERC20, contract ICurvePool)
```
Given the address of either the pool or the token, returns the token and the pool.
Throws if not a valid pool or token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`poolOrToken` | address | Address of either the pool or lp token.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | token and the pool.
### name
```solidity
  function name(
  ) public returns (string)
```
Returns the name of the product.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`Curve`|  | The name of the product.

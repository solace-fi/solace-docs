The **Curve** product that is users can buy policy for **Curve**. It is a concrete smart contract that inherits from abstract [`BaseProduct`](./BaseProduct).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    contract IPolicyManager policyManager_,
    contract IRegistry registry_,
    address addressProvider_,
    uint40 minPeriod_,
    uint40 maxPeriod_,
    uint24 price_,
    uint32 maxCoverPerUserDivisor_,
    address quoter_
  ) public
```
Constructs the CurveProduct.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`policyManager_` | contract IPolicyManager | The [`PolicyManager`](../PolicyManager) contract.
|`registry_` | contract IRegistry | The [`Registry`](../Registry) contract.
|`addressProvider_` | address | The Curve Address Provider.
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
Calculate the value of a user's position in **ETH**.
The `positionContract` must be a [**curve.fi lp token**](https://curve.fi/pools).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`policyholder` | address | The owner of the position.
|`positionContract` | address | The address of the **lp token**.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The value of the position.
### addressProvider
```solidity
  function addressProvider(
  ) external returns (address addressProvider_)
```
Curve's Address Provider.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`addressProvider_`|  | The address provider.
### setCoveredPlatform
```solidity
  function setCoveredPlatform(
    address addressProvider_
  ) public
```
Changes the covered platform.
The function should be used if the the protocol changes their registry but keeps the children contracts.
A new version of the protocol will likely require a new Product.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`addressProvider_` | address | The new Address Provider.

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

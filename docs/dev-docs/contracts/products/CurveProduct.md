


## Functions
### constructor
```solidity
  function constructor(
  ) public
```




### appraisePosition
```solidity
  function appraisePosition(
  ) public returns (uint256 positionAmount)
```




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

### verifyPool
```solidity
  function verifyPool(
    address _poolOrToken
  ) internal returns (contract IERC20, contract ICurvePool)
```
Given the address of either the pool or the token, returns the token and the pool.
Throws if not a valid pool or token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_poolOrToken` | address | Address of either the pool or lp token.

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





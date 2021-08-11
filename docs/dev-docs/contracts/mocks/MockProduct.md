Mock product for testing purposes


## Functions
### constructor
```solidity
  function constructor(
  ) public
```




### appraisePosition
```solidity
  function appraisePosition(
    address _buyer,
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
|`_buyer` | address | buyer requiesting the coverage quote
|`_positionContract` | address | address of the exact smart contract the buyer has their position in (e.g., for UniswapProduct this would be Pair's address)

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`positionAmount`| address | The user's total position in wei in the product's protocol.
### setPositionValue
```solidity
  function setPositionValue(
  ) external
```




### setPolicyExpiration
```solidity
  function setPolicyExpiration(
  ) external
```




### _buyPolicy
```solidity
  function _buyPolicy(
  ) external returns (uint256 policyID)
```




### name
```solidity
  function name(
  ) public returns (string)
```
Returns the name of the product.





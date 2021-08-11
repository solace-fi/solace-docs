


## Functions
### constructor
```solidity
  function constructor(
  ) public
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



### setCurve
```solidity
  function setCurve(
    uint256 _curve_A,
    uint256 _curve_B
  ) external
```
Modifies the appraisal curve, and with it the incentive structure.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_curve_A` | uint256 | The curve parameter A.
|`_curve_B` | uint256 | The curve parameter B.

### appraise
```solidity
  function appraise(
    uint256 _tokenId
  ) external returns (uint256 _value)
```
Appraise a Uniswap LP Token.
Token must exist and must exist in the correct pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokenId` | uint256 | The id of the token to appraise.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`_value`| uint256 | The token's value.
## Events
### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```




Determines the relative value of a Uniswap V3 LP token. Used in [SolaceEthLpFarm](./SolaceEthLpFarm).


## Functions
### constructor
```solidity
  function constructor(
    address governance_,
    address lpToken_,
    uint256 curve_A_,
    uint256 curve_B_
  ) public
```
Constructs the LP Appraisor contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`governance_` | address | The address of the [governor](/docs/user-docs/Governance).
|`lpToken_` | address | Address of the LP token.
|`curve_A_` | uint256 | Appraisal curve value A.
|`curve_B_` | uint256 | Appraisal curve value B.

### setCurve
```solidity
  function setCurve(
    uint256 curve_A_,
    uint256 curve_B_
  ) external
```
Modifies the appraisal curve, and with it the incentive structure.
Can only be called by the current [**governor**](/docs/user-docs/Governance).


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`curve_A_` | uint256 | The curve parameter A.
|`curve_B_` | uint256 | The curve parameter B.

### appraise
```solidity
  function appraise(
    uint256 tokenID
  ) external returns (uint256 value)
```
Appraise a Uniswap LP Token.
Token must exist and must exist in the correct pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | The ID of the token to appraise.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The token's value.

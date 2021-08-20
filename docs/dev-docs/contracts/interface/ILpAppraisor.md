Determines the relative value of a Uniswap V3 LP token. Used in [SolaceEthLpFarm](../SolaceEthLpFarm).


## Functions
### lpToken
```solidity
  function lpToken(
  ) external returns (contract IUniswapLpToken)
```
The address of the Uniswap V3 NFT.



### appraise
```solidity
  function appraise(
    uint256 tokenID
  ) external returns (uint256 value)
```
Appraise a Uniswap LP Token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenID` | uint256 | The ID of the token to appraise.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`value`| uint256 | The token's value.

Interface for Uniswap V3 LP tokens.


## Functions
### positions
```solidity
  function positions(
    uint256 tokenId
  ) external returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```
Returns the position information associated with a given token ID.

Throws if the token ID is not valid.
#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`tokenId` | uint256 | The ID of the token that represents the position


### mint
```solidity
  function mint(
    struct IUniswapLpToken.MintParams params
  ) external returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)
```
Creates a new position wrapped in a NFT

Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized
a method does not exist, i.e. the pool is assumed to be initialized.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`params` | struct IUniswapLpToken.MintParams | The params necessary to mint a position, encoded as `MintParams` in calldata

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`tokenId`| struct IUniswapLpToken.MintParams | The ID of the token that represents the minted position
|`liquidity`|  | The amount of liquidity for this position
|`amount0`|  | The amount of token0
|`amount1`|  | The amount of token1

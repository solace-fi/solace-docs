## `IUniswapLpToken`

Interface for Uniswap V3 LP tokens.




### `positions(uint256 tokenId) → uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1` (external)

Returns the position information associated with a given token ID.


Throws if the token ID is not valid.



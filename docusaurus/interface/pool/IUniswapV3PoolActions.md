## `IUniswapV3PoolActions`

Contains pool methods that can be called by anyone




### `initialize(uint160 sqrtPriceX96)` (external)

Sets the initial price for the pool


Price is represented as a sqrt(amountToken1/amountToken0) Q64.96 value


### `mint(address recipient, int24 tickLower, int24 tickUpper, uint128 amount, bytes data) → uint256 amount0, uint256 amount1` (external)

Adds liquidity for the given recipient/tickLower/tickUpper position


The caller of this method receives a callback in the form of IUniswapV3MintCallback#uniswapV3MintCallback
in which they must pay any token0 or token1 owed for the liquidity. The amount of token0/token1 due depends
on tickLower, tickUpper, the amount of liquidity, and the current price.


### `collect(address recipient, int24 tickLower, int24 tickUpper, uint128 amount0Requested, uint128 amount1Requested) → uint128 amount0, uint128 amount1` (external)

Collects tokens owed to a position


Does not recompute fees earned, which must be done either via mint or burn of any amount of liquidity.
Collect must be called by the position owner. To withdraw only token0 or only token1, amount0Requested or
amount1Requested may be set to zero. To withdraw all tokens owed, caller may pass any value greater than the
actual tokens owed, e.g. type(uint128).max. Tokens owed may be from accumulated swap fees or burned liquidity.


### `burn(int24 tickLower, int24 tickUpper, uint128 amount) → uint256 amount0, uint256 amount1` (external)

Burn liquidity from the sender and account tokens owed for the liquidity to the position


Can be used to trigger a recalculation of fees owed to a position by calling with an amount of 0
Fees must be collected separately via a call to #collect


### `swap(address recipient, bool zeroForOne, int256 amountSpecified, uint160 sqrtPriceLimitX96, bytes data) → int256 amount0, int256 amount1` (external)

Swap token0 for token1, or token1 for token0


The caller of this method receives a callback in the form of IUniswapV3SwapCallback#uniswapV3SwapCallback


### `flash(address recipient, uint256 amount0, uint256 amount1, bytes data)` (external)

Receive token0 and/or token1 and pay it back, plus a fee, in the callback


The caller of this method receives a callback in the form of IUniswapV3FlashCallback#uniswapV3FlashCallback
Can be used to donate underlying tokens pro-rata to currently in-range liquidity providers by calling
with 0 amount{0,1} and sending the donation amount(s) from the callback


### `increaseObservationCardinalityNext(uint16 observationCardinalityNext)` (external)

Increase the maximum number of price and liquidity observations that this pool will store


This method is no-op if the pool already has an observationCardinalityNext greater than or equal to
the input observationCardinalityNext.




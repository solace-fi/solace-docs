## `IUniswapV3SwapCallback`

Any contract that calls IUniswapV3PoolActions#swap must implement this interface




### `uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes data)` (external)

Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.


In the implementation you must pay the pool tokens owed for the swap.
The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.
amount0Delta and amount1Delta can both be 0 if no tokens were swapped.




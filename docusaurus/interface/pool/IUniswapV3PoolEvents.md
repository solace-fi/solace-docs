## `IUniswapV3PoolEvents`

Contains all events emitted by the pool





### `Initialize(uint160 sqrtPriceX96, int24 tick)`

Emitted exactly once by a pool when #initialize is first called on the pool


Mint/Burn/Swap cannot be emitted by the pool before Initialize


### `Mint(address sender, address owner, int24 tickLower, int24 tickUpper, uint128 amount, uint256 amount0, uint256 amount1)`

Emitted when liquidity is minted for a given position




### `Collect(address owner, address recipient, int24 tickLower, int24 tickUpper, uint128 amount0, uint128 amount1)`

Emitted when fees are collected by the owner of a position


Collect events may be emitted with zero amount0 and amount1 when the caller chooses not to collect fees


### `Burn(address owner, int24 tickLower, int24 tickUpper, uint128 amount, uint256 amount0, uint256 amount1)`

Emitted when a position's liquidity is removed


Does not withdraw any fees earned by the liquidity position, which must be withdrawn via #collect


### `Swap(address sender, address recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, int24 tick)`

Emitted by the pool for any swaps between token0 and token1




### `Flash(address sender, address recipient, uint256 amount0, uint256 amount1, uint256 paid0, uint256 paid1)`

Emitted by the pool for any flashes of token0/token1




### `IncreaseObservationCardinalityNext(uint16 observationCardinalityNextOld, uint16 observationCardinalityNextNew)`

Emitted by the pool for increases to the number of observations that can be stored


observationCardinalityNext is not the observation cardinality until an observation is written at the index
just before a mint/swap/burn.


### `SetFeeProtocol(uint8 feeProtocol0Old, uint8 feeProtocol1Old, uint8 feeProtocol0New, uint8 feeProtocol1New)`

Emitted when the protocol fee is changed by the pool




### `CollectProtocol(address sender, address recipient, uint128 amount0, uint128 amount1)`

Emitted when the collected protocol fees are withdrawn by the factory owner





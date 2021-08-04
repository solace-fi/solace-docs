## `IUniswapV3PoolState`

These methods compose the pool's state, and can change with any frequency including multiple times
per transaction




### `slot0() → uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked` (external)

The 0th storage slot in the pool stores many values, and is exposed as a single method to save gas
when accessed externally.




### `feeGrowthGlobal0X128() → uint256` (external)

The fee growth as a Q128.128 fees of token0 collected per unit of liquidity for the entire life of the pool


This value can overflow the uint256

### `feeGrowthGlobal1X128() → uint256` (external)

The fee growth as a Q128.128 fees of token1 collected per unit of liquidity for the entire life of the pool


This value can overflow the uint256

### `protocolFees() → uint128 token0, uint128 token1` (external)

The amounts of token0 and token1 that are owed to the protocol


Protocol fees will never exceed uint128 max in either token

### `liquidity() → uint128` (external)

The currently in range liquidity available to the pool


This value has no relationship to the total liquidity across all ticks

### `ticks(int24 tick) → uint128 liquidityGross, int128 liquidityNet, uint256 feeGrowthOutside0X128, uint256 feeGrowthOutside1X128` (external)

Look up information about a specific tick in the pool




### `tickBitmap(int16 wordPosition) → uint256` (external)

Returns 256 packed tick initialized boolean values. See TickBitmap for more information



### `secondsOutside(int24 wordPosition) → uint256` (external)

Returns 8 packed tick seconds outside values. See SecondsOutside for more information



### `positions(bytes32 key) → uint128 _liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1` (external)

Returns the information about a position by the position's key




### `observations(uint256 index) → uint32 blockTimestamp, int56 tickCumulative, uint160 liquidityCumulative, bool initialized` (external)

Returns data about a specific observation index


You most likely want to use #observe() instead of this method to get an observation as of some amount of time
ago, rather than at a specific index in the array.




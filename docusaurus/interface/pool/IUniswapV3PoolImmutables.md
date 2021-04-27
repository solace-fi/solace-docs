## `IUniswapV3PoolImmutables`

These parameters are fixed for a pool forever, i.e., the methods will always return the same values




### `factory() → address` (external)

The contract that deployed the pool, which must adhere to the IUniswapV3Factory interface




### `token0() → address` (external)

The first of the two tokens of the pool, sorted by address




### `token1() → address` (external)

The second of the two tokens of the pool, sorted by address




### `fee() → uint24` (external)

The pool's fee in hundredths of a bip, i.e. 1e-6




### `tickSpacing() → int24` (external)

The pool tick spacing


Ticks can only be used at multiples of this value, minimum of 1 and always positive
e.g.: a tickSpacing of 3 means ticks can be initialized every 3rd tick, i.e., ..., -6, -3, 0, 3, 6, ...
This value is an int24 to avoid casting even though it is always positive.


### `maxLiquidityPerTick() → uint128` (external)

The maximum amount of position liquidity that can use any tick in the range


This parameter is enforced per tick to prevent liquidity from overflowing a uint128 at any point, and
also prevents out-of-range liquidity from being used to prevent adding in-range liquidity to a pool




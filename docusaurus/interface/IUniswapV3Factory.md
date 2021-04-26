## `IUniswapV3Factory`

The Uniswap V3 Factory facilitates creation of Uniswap V3 pools and control over the protocol fees




### `owner() → address` (external)

Returns the current owner of the factory


Can be changed by the current owner via setOwner


### `feeAmountTickSpacing(uint24 fee) → int24` (external)

Returns the tick spacing for a given fee amount, if enabled, or 0 if not enabled


A fee amount can never be removed, so this value should be hard coded or cached in the calling context


### `getPool(address tokenA, address tokenB, uint24 fee) → address pool` (external)

Returns the pool address for a given pair of tokens and a fee, or address 0 if it does not exist


tokenA and tokenB may be passed in either token0/token1 or token1/token0 order


### `createPool(address tokenA, address tokenB, uint24 fee) → address pool` (external)

Creates a pool for the given two tokens and fee


tokenA and tokenB may be passed in either order: token0/token1 or token1/token0. tickSpacing is retrieved
from the fee. The call will revert if the pool already exists, the fee is invalid, or the token arguments
are invalid.


### `setOwner(address _owner)` (external)

Updates the owner of the factory


Must be called by the current owner


### `enableFeeAmount(uint24 fee, int24 tickSpacing)` (external)

Enables a fee amount with the given tickSpacing


Fee amounts may never be removed once enabled



### `OwnerChanged(address oldOwner, address newOwner)`

Emitted when the owner of the factory is changed




### `PoolCreated(address token0, address token1, uint24 fee, int24 tickSpacing, address pool)`

Emitted when a pool is created




### `FeeAmountEnabled(uint24 fee, int24 tickSpacing)`

Emitted when a new fee amount is enabled for pool creation via the factory





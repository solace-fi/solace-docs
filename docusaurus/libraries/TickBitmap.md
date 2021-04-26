## `TickBitmap`

Stores a packed mapping of tick index to its initialized state


The mapping uses int16 for keys since ticks are represented as int24 and there are 256 (2^8) values per word.


### `flipTick(mapping(int16 => uint256) self, int24 tick, int24 tickSpacing)` (internal)

Flips the initialized state for a given tick from false to true, or vice versa




### `nextInitializedTickWithinOneWord(mapping(int16 => uint256) self, int24 tick, int24 tickSpacing, bool lte) → int24 next, bool initialized` (internal)

Returns the next initialized tick contained in the same word (or adjacent word) as the tick that is either
to the left (less than or equal to) or right (greater than) of the given tick






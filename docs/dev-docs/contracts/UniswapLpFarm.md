## `UniswapLpFarm`






### `constructor(address _master, address _stakeToken, address _rewardToken, uint256 _startBlock, uint256 _endBlock, address _pool)` (public)

Constructs the farm.




### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setRewards(uint256 _blockReward)` (external)

Sets the amount of reward token to distribute per block.




### `setEnd(uint256 _endBlock)` (external)

Sets the farm's end block. Used to extend the duration.




### `deposit(uint256 _token)` (external)

Deposit a Uniswap LP token.
User will receive accumulated Solace rewards if any.




### `withdraw(uint256 _token)` (external)

Withdraw a Uniswap LP token.
User will receive _token and accumulated rewards.




### `withdrawRewards()` (external)

Withdraw your rewards without unstaking your tokens.



### `updateFarm()` (public)

Updates farm information to be up to date to the current block.



### `pendingRewards(address _user) → uint256` (external)

Calculates the accumulated balance of reward token for specified user.




### `getMultiplier(uint256 _from, uint256 _to) → uint256` (public)

Calculates the reward multiplier over the given _from until _to block.




### `countDeposited(address _user) → uint256` (external)

Returns the count of Uniswap LP tokens that a user has deposited onto a farm.




### `listDeposited(address _user) → uint256[], uint256[]` (external)

Returns the list of Uniswap LP tokens that a user has deposited onto a farm and their values.




### `getDeposited(address _user, uint256 _index) → uint256, uint256` (external)

Returns the id of a Uniswap LP that a user has deposited onto a farm and its value.




### `appraise(uint256 _token) → uint256 _value` (external)

Appraise a Uniswap LP Token.
Token must exist and must exist in the correct pool.




### `_appraise(uint128 _liquidity, int24 _tickLower, int24 _tickUpper) → uint256 _value` (internal)

Appraise a Uniswap LP token.




### `_harvest()` (internal)

Calculate and transfer a user's rewards.



### `_add(uint256 _a, int256 _b) → uint256 _c` (internal)

Adds two numbers.






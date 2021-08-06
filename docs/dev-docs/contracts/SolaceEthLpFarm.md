## `SolaceEthLpFarm`






### `constructor(address _governance, address _master, address _lpToken, contract SOLACE _solace, uint256 _startBlock, uint256 _endBlock, address _pool, address _weth, address _appraisor)` (public)

Constructs the farm.




### `receive()` (external)





### `fallback()` (external)





### `setGovernance(address _governance)` (external)

Allows governance to be transferred to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `setRewards(uint256 _blockReward)` (external)

Sets the amount of reward token to distribute per block.
Only affects future rewards.
Can only be called by Master.




### `setEnd(uint256 _endBlock)` (external)

Sets the farm's end block. Used to extend the duration.
Can only be called by the current governor.




### `setAppraisor(address _appraisor)` (external)

Sets the appraisal function.
Can only be called by the current governor.




### `deposit(uint256 _tokenId)` (external)

Deposit a Uniswap LP token.
User will receive accumulated Solace rewards if any.




### `depositSigned(address _depositor, uint256 _tokenId, uint256 _deadline, uint8 v, bytes32 r, bytes32 s)` (external)

Deposit a Uniswap LP token using permit.
User will receive accumulated Solace rewards if any.




### `mintAndDeposit(struct ISolaceEthLpFarm.MintAndDepositParams params) → uint256 tokenId` (external)

Mint a new Uniswap LP token then deposit it.
User will receive accumulated Solace rewards if any.




### `withdraw(uint256 _tokenId)` (external)

Withdraw a Uniswap LP token.
User will receive _tokenId and accumulated rewards.




### `withdrawRewards()` (external)

Withdraw your rewards without unstaking your tokens.



### `withdrawRewardsForUser(address _user)` (external)

Withdraw a users rewards without unstaking their tokens.
Can only be called by Master.



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




### `_harvest(address _user)` (internal)

Calculate and transfer a user's rewards.



### `_deposit(address _depositor, uint256 _tokenId)` (internal)

Performs the internal accounting for a deposit.




### `_add(uint256 _a, int256 _b) → uint256 _c` (internal)

Adds two numbers.






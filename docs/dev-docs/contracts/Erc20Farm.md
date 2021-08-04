## `Erc20Farm`






### `constructor(address _master, address _stakeToken, address _rewardToken, uint256 _startBlock, uint256 _endBlock)` (public)

Constructs the farm.




### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setRewards(uint256 _blockReward)` (external)

Sets the amount of reward token to distribute per block.




### `setEnd(uint256 _endBlock)` (external)

Sets the farm's end block. Used to extend the duration.




### `deposit(uint256 _amount)` (external)

Deposit some tokens.
User will receive accumulated rewards if any.




### `withdraw(uint256 _amount)` (external)

Withdraw some ERC20 tokens.
User will receive _amount of deposited tokens and accumulated rewards.




### `withdrawRewards()` (external)

Withdraw your rewards without unstaking your tokens.



### `updateFarm()` (public)

Updates farm information to be up to date to the current block.



### `pendingRewards(address _user) → uint256` (external)

Calculates the accumulated balance of reward token for specified user.




### `getMultiplier(uint256 _from, uint256 _to) → uint256` (public)

Calculates the reward multiplier over the given _from until _to block.




### `_harvest()` (internal)

Calculate and transfer a user's rewards.





## `IFarm`






### `governance() → address` (external)

Governor.



### `master() → address` (external)

Master contract.



### `farmType() → uint256` (external)

A unique enumerator that identifies the farm type.



### `stakeToken() → address` (external)





### `rewardToken() → address` (external)





### `blockReward() → uint256` (external)





### `startBlock() → uint256` (external)





### `endBlock() → uint256` (external)





### `lastRewardBlock() → uint256` (external)





### `accRewardPerShare() → uint256` (external)





### `valueStaked() → uint256` (external)





### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setRewards(uint256 _blockReward)` (external)

Sets the amount of reward token to distribute per block.




### `setEnd(uint256 _endBlock)` (external)

Sets the farm's end block. Used to extend the duration.




### `withdrawRewards()` (external)

Withdraw your rewards without unstaking your tokens.



### `pendingRewards(address _user) → uint256` (external)

Calculates the accumulated balance of reward token for specified user.




### `updateFarm()` (external)

Updates farm information to be up to date to the current block.



### `getMultiplier(uint256 _from, uint256 _to) → uint256` (external)

Calculates the reward multiplier over the given _from until _to block.






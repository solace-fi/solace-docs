## `IFarm`






### `governance() → address` (external)

Governance.



### `newGovernance() → address` (external)

Governance to take over.



### `master() → address` (external)

Master contract.



### `farmType() → uint256` (external)

A unique enumerator that identifies the farm type.



### `blockReward() → uint256` (external)





### `startBlock() → uint256` (external)





### `endBlock() → uint256` (external)





### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `setRewards(uint256 _blockReward)` (external)

Sets the amount of reward token to distribute per block.
Can only be called by Master.




### `setEnd(uint256 _endBlock)` (external)

Sets the farm's end block. Used to extend the duration.
Can only be called by the current governor.




### `withdrawRewards()` (external)

Withdraw your rewards without unstaking your tokens.



### `withdrawRewardsForUser(address _user)` (external)

Withdraw a users rewards without unstaking their tokens.
Can only be called by Master.



### `pendingRewards(address _user) → uint256` (external)

Calculates the accumulated balance of reward token for specified user.




### `updateFarm()` (external)

Updates farm information to be up to date to the current block.



### `getMultiplier(uint256 _from, uint256 _to) → uint256` (external)

Calculates the reward multiplier over the given _from until _to block.





### `GovernanceTransferred(address _newGovernance)`






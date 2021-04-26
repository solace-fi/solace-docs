## `Erc721Farm`






### `constructor(address _master, address _stakeToken, address _rewardToken, uint256 _startBlock, uint256 _endBlock)` (public)

Constructs the farm.




### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setRewards(uint256 _blockReward)` (external)

Sets the amount of reward token to distribute per block.




### `setEnd(uint256 _endBlock)` (external)

Sets the farm's end block. Used to extend the duration.




### `deposit(uint256 _token)` (external)

Deposit an ERC721 token.
User will receive accumulated Solace rewards if any.




### `withdraw(uint256 _token)` (external)

Withdraw an ERC721 token.
User will receive _token and accumulated rewards.




### `withdrawRewards()` (external)

Withdraw your rewards without unstaking your tokens.



### `updateFarm()` (public)

Updates farm information to be up to date to the current block.



### `pendingRewards(address _user) → uint256` (external)

Calculates the accumulated balance of reward token for specified user.




### `getMultiplier(uint256 _from, uint256 _to) → uint256` (public)

Calculates the reward multiplier over the given _from until _to block.




### `appraise(uint256 _token) → uint256` (public)

Appraises an NFT.




### `countDeposited(address _user) → uint256` (external)

Returns the count of ERC721s that a user has deposited onto a farm.




### `listDeposited(address _user) → uint256[], uint256[]` (external)

Returns the list of ERC721s that a user has deposited onto a farm and their values.




### `getDeposited(address _user, uint256 _index) → uint256, uint256` (external)

Returns the id of an ERC721 that a user has deposited onto a farm and its value.




### `assertDeposited(address _user, uint256 _token) → bool` (external)

Returns true if a user has deposited a given ERC721.




### `_harvest()` (internal)

Calculate and transfer a user's rewards.





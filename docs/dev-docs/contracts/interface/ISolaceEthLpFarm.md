## `ISolaceEthLpFarm`






### `setAppraisor(address _appraisor)` (external)

Sets the appraisal function.
Can only be called by the current governor.




### `deposit(uint256 _tokenId)` (external)

Deposit a token.
User will receive accumulated rewards if any.




### `depositSigned(address _depositor, uint256 _tokenId, uint256 _deadline, uint8 v, bytes32 r, bytes32 s)` (external)

Deposit a Uniswap LP token using permit.
User will receive accumulated Solace rewards if any.




### `mintAndDeposit(struct ISolaceEthLpFarm.MintAndDepositParams params) → uint256 tokenId` (external)

Mint a new Uniswap LP token then deposit it.
User will receive accumulated Solace rewards if any.




### `withdraw(uint256 _tokenId)` (external)

Withdraw a token.
User will receive _tokenId and accumulated rewards.




### `countDeposited(address _user) → uint256` (external)

Returns the count of ERC721s that a user has deposited onto a farm.




### `listDeposited(address _user) → uint256[], uint256[]` (external)

Returns the list of ERC721s that a user has deposited onto a farm and their values.




### `getDeposited(address _user, uint256 _index) → uint256, uint256` (external)

Returns the id of an ERC721 that a user has deposited onto a farm and its value.




### `appraise(uint256 _tokenId) → uint256 _value` (external)

Appraise a Uniswap LP Token.
Token must exist and must exist in the correct pool.




### `lpToken() → contract IUniswapLpToken` (external)





### `solace() → contract SOLACE` (external)





### `weth() → contract IWETH9` (external)





### `lastRewardBlock() → uint256` (external)





### `accRewardPerShare() → uint256` (external)





### `valueStaked() → uint256` (external)






### `TokenDeposited(address _user, uint256 _token)`





### `TokenWithdrawn(address _user, uint256 _token)`





### `UserRewarded(address _user, uint256 _amount)`





### `RewardsSet(uint256 _blockReward)`





### `FarmEndSet(uint256 _endBlock)`






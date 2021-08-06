## `ICpFarm`






### `receive()` (external)

Receive function. Deposits eth.



### `fallback()` (external)

Fallback function. Deposits eth.



### `depositCp(uint256 _amount)` (external)

Deposit some CP tokens.
User will receive accumulated rewards if any.




### `depositCpSigned(address _depositor, uint256 _amount, uint256 _deadline, uint8 v, bytes32 r, bytes32 s)` (external)

Deposit some CP tokens using permit.
User will receive accumulated rewards if any.




### `depositEth()` (external)

Deposit some ETH.
User will receive accumulated rewards if any.



### `compoundRewards()` (external)

Your money already makes you money. Now make your money make more money!
Withdraws your SOLACE rewards, swaps it for WETH, then deposits that WETH onto the farm.



### `withdrawCp(uint256 _amount)` (external)

Withdraw some CP tokens.
User will receive _amount of deposited tokens and accumulated rewards.




### `vault() → contract IVault` (external)





### `solace() → contract SOLACE` (external)





### `lastRewardBlock() → uint256` (external)





### `accRewardPerShare() → uint256` (external)





### `valueStaked() → uint256` (external)






### `CpDeposited(address _user, uint256 _amount)`





### `EthDeposited(address _user, uint256 _amount)`





### `RewardsCompounded(address _user)`





### `CpWithdrawn(address _user, uint256 _amount)`





### `UserRewarded(address _user, uint256 _amount)`





### `RewardsSet(uint256 _blockReward)`





### `FarmEndSet(uint256 _endBlock)`






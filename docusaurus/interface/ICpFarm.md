## `ICpFarm`






### `receive()` (external)

Receive function. Deposits eth.



### `fallback()` (external)

Fallback function. Deposits eth.



### `depositCp(uint256 _amount)` (external)

Deposit some CP tokens.
User will receive accumulated rewards if any.




### `depositEth()` (external)

Deposit some ETH.
User will receive accumulated rewards if any.



### `withdrawCp(uint256 _amount)` (external)

Withdraw some CP tokens.
User will receive _amount of deposited tokens and accumulated rewards.




### `withdrawEth(uint256 _amount, uint256 _maxLoss)` (external)

Withdraw some Eth.
`_amount` is denominated in CP tokens, which are converted to eth then returned to the user.
User will receive _amount of deposited tokens converted to eth and accumulated rewards.





### `DepositCp(address _user, uint256 _amount)`





### `DepositEth(address _user, uint256 _amount)`





### `WithdrawCp(address _user, uint256 _amount)`





### `WithdrawEth(address _user, uint256 _amount)`






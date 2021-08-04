## `ITreasury`

The interface of the war chest of Castle Solace.




### `receive()` (external)

Receive function. Deposits eth.



### `fallback()` (external)

Fallback function. Deposits eth.



### `governance() → address` (external)

Governance.



### `newGovernance() → address` (external)

Governance to take over.



### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `depositEth()` (external)

Deposits some ether.



### `depositToken(address _token, uint256 _amount)` (external)

Deposit some ERC20 token.




### `spend(address _token, uint256 _amount, address _recipient)` (external)

Spends some tokens.
Can only be called by the current governor.




### `swap(bytes _path, uint256 _amountIn, uint256 _amountOutMinimum)` (external)

Manually swaps a token.
Can only be called by the current governor.


Swaps the entire balance in case some tokens were unknowingly received.
Reverts if the swap was unsuccessful.


### `setPremiumRecipients(address payable[] _recipients, uint32[] _weights)` (external)

Sets the premium recipients and their weights.
Can only be called by the current governor.




### `routePremiums()` (external)

Routes the premiums to the recipients



### `wrap(uint256 _amount)` (external)

Wraps some eth into weth.
Can only be called by the current governor.




### `unwrap(uint256 _amount)` (external)

Unwraps some weth into eth.
Can only be called by the current governor.




### `refund(address _user, uint256 _amount)` (external)





### `unpaidRewards(address _user) → uint256` (external)

The amount of eth that a user is owed if any.




### `withdraw()` (external)

Pull any unpaid rewards.




### `EthDeposited(uint256 _amount)`





### `TokenDeposited(address _token, uint256 _amount)`





### `FundsSpent(address _token, uint256 _amount, address _recipient)`





### `GovernanceTransferred(address _newGovernance)`






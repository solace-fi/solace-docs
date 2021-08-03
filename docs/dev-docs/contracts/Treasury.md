## `Treasury`

The war chest of Castle Solace.




### `constructor(contract SOLACE _solace, address _uniRouter, address _weth)` (public)

Constructs the treasury contract.




### `receive()` (external)

Receive function. Deposits eth.



### `fallback()` (external)

Fallback function. Deposits eth.



### `setGovernance(address _governance)` (external)

Transfers the governance role to a new governor.
Can only be called by the current governor.




### `setPath(address _token, bytes _path)` (external)

Sets the swap path for a token.
Can only be called by the current governor.


Also adds or removes infinite approval of the token for the router.


### `depositEth()` (external)

Deposits some ether.



### `depositToken(address _token, uint256 _amount)` (external)

Deposit some ERC20 token.




### `spend(address _token, uint256 _amount, address _recipient)` (external)

Spends some tokens.
Can only be called by the current governor.




### `swap(address _token)` (external)

Manually swaps a token using a predefined path.
Can only be called by the current governor.


Swaps the entire balance in case some tokens were unknowingly received.
Reverts if the swap was unsuccessful.


### `_depositEth()` (internal)

Deposits some ether.



### `_swap(address _token) → bool _success` (internal)

Swaps a token using a predefined path.


Swaps the entire balance in case some tokens were unknowingly received.
Does not revert if the swap is unsuccessful.



### `DepositEth(uint256 _amount)`





### `DepositToken(address _token, uint256 _amount)`





### `Spend(address _token, uint256 _amount, address _recipient)`





### `PathSet(address _token, bytes _path)`






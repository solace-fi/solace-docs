## `ITreasury`

The interface of the war chest of Castle Solace.




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



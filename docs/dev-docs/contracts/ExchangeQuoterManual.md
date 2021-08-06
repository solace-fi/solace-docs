## `ExchangeQuoterManual`

Calculates exchange rates for trades between ERC20 tokens.




### `constructor(address _governance)` (public)

Constructs the ExchangeQuoter contract.




### `setGovernance(address _governance)` (external)

Allows governance to be transferred to a new governor.
Can only be called by the current governor.




### `acceptGovernance()` (external)

Accepts the governance role.
Can only be called by the new governor.



### `setRates(address[] _tokens, uint256[] _rates)` (external)

Sets the exchange rates.
Can only be called by the current governor.




### `tokenToEth(address _token, uint256 _amount) → uint256` (external)

Calculates the exchange rate for an _amount of _token to eth.





### `GovernanceTransferred(address _newGovernance)`






Calculates exchange rates for trades between ERC20 tokens.


## Functions
### constructor
```solidity
  function constructor(
    address _governance
  ) public
```
Constructs the ExchangeQuoter contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | Address of the governor.

### setGovernance
```solidity
  function setGovernance(
    address _governance
  ) external
```
Allows governance to be transferred to a new governor.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_governance` | address | The new governor.

### acceptGovernance
```solidity
  function acceptGovernance(
  ) external
```
Accepts the governance role.
Can only be called by the new governor.



### setRates
```solidity
  function setRates(
    address[] _tokens,
    uint256[] _rates
  ) external
```
Sets the exchange rates.
Can only be called by the current governor.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_tokens` | address[] | The tokens to set.
|`_rates` | uint256[] | The rates to set.

### tokenToEth
```solidity
  function tokenToEth(
    address _token,
    uint256 _amount
  ) external returns (uint256)
```
Calculates the exchange rate for an _amount of _token to eth.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`_token` | address | The token to give.
|`_amount` | uint256 | The amount to give.

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
|`The`| address | amount of eth received.
## Events
### GovernanceTransferred
```solidity
  event GovernanceTransferred(
  )
```



